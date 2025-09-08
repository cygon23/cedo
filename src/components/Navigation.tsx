import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageToggle from "@/components/shared/LanguageToggle";
import ThemeToggle from "@/components/shared/ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.whatWeDo"), href: "/what-we-do" },
    { name: t("nav.impact"), href: "/impact" },
  ];

  const latestDropdown = {
    name: t("nav.latest"),
    items: [
      { name: t("nav.partners"), href: "/partners" },
      { name: t("nav.stories"), href: "/stories" },
      { name: t("nav.team"), href: "/team-cedo" },
      { name: t("nav.news"), href: "#news" },
      { name: t("nav.researchReports"), href: "#research-reports" },
    ],
  };

  const contactItem = { name: t("nav.contact"), href: "/contact" };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Helper function to check if a route is active
  const isActiveRoute = (href: string): boolean => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return (
      location.pathname === href || location.pathname.startsWith(href + "/")
    );
  };

  // Check if any dropdown item is active
  const isDropdownActive = (): boolean => {
    return latestDropdown.items.some(
      (item) => item.href.startsWith("/") && isActiveRoute(item.href)
    );
  };

  // Get active link classes
  const getLinkClasses = (href: string, isActive: boolean): string => {
    const baseClasses =
      "px-3 py-2 text-sm font-medium transition-colors duration-200";
    const activeClasses = "text-primary border-b-2 border-primary";
    const inactiveClasses = "text-foreground hover:text-primary";

    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  // Get mobile link classes
  const getMobileLinkClasses = (href: string, isActive: boolean): string => {
    const baseClasses =
      "block px-3 py-2 text-base font-medium transition-colors duration-200";
    const activeClasses =
      "text-primary bg-primary/10 border-l-4 border-primary";
    const inactiveClasses = "text-foreground hover:text-primary hover:bg-muted";

    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  // Handle dropdown toggle
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle dropdown item click
  const handleDropdownItemClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className='fixed top-0 w-full bg-white/95 dark:bg-background backdrop-blur-sm border-b border-border z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <div className='flex items-center'>
              <img
                src='/Transparent.png'
                alt='CEDO Logo'
                className='w-10 h-10 object-contain'
              />
              <div className='ml-3'>
                <h1 className='text-xl font-bold text-primary'>CEDO</h1>
                <p className='text-xs text-muted-foreground'>
                  {t("nav.tagline")}
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-6'>
            {navItems.map((item) => {
              const isActive = isActiveRoute(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={getLinkClasses(item.href, isActive)}>
                  {item.name}
                </Link>
              );
            })}

            {/* Latest Dropdown */}
            <div className='relative' ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isDropdownActive() || isDropdownOpen
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground hover:text-primary"
                }`}>
                {latestDropdown.name}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className='absolute left-0 mt-2 w-56 bg-white dark:bg-background shadow-lg rounded-md border border-border z-50 animate-in fade-in-0 zoom-in-95 duration-200'>
                  {latestDropdown.items.map((subItem) => {
                    const isActive =
                      subItem.href.startsWith("/") &&
                      isActiveRoute(subItem.href);
                    return (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        onClick={handleDropdownItemClick}
                        className={`block px-4 py-3 text-sm transition-colors duration-200 first:rounded-t-md last:rounded-b-md ${
                          isActive
                            ? "text-primary bg-primary/10 border-l-4 border-primary"
                            : "text-foreground hover:bg-muted hover:text-primary"
                        }`}>
                        {subItem.name}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Contact */}
            <Link
              to={contactItem.href}
              className={getLinkClasses(
                contactItem.href,
                isActiveRoute(contactItem.href)
              )}>
              {contactItem.name}
            </Link>

            <LanguageToggle />
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border'>
            {navItems.map((item) => {
              const isActive = isActiveRoute(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={getMobileLinkClasses(item.href, isActive)}
                  onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              );
            })}

            {/* Mobile Dropdown Items */}
            <div className='border-t border-border pt-2 mt-2'>
              <div className='px-3 py-2 text-sm font-medium text-muted-foreground'>
                {latestDropdown.name}
              </div>
              {latestDropdown.items.map((subItem) => {
                const isActive =
                  subItem.href.startsWith("/") && isActiveRoute(subItem.href);
                return (
                  <a
                    key={subItem.name}
                    href={subItem.href}
                    className={`${getMobileLinkClasses(
                      subItem.href,
                      isActive
                    )} pl-6`}
                    onClick={() => setIsOpen(false)}>
                    {subItem.name}
                  </a>
                );
              })}
            </div>

            <Link
              to={contactItem.href}
              className={getMobileLinkClasses(
                contactItem.href,
                isActiveRoute(contactItem.href)
              )}
              onClick={() => setIsOpen(false)}>
              {contactItem.name}
            </Link>

            <div className='pt-4 pb-2 space-y-2'>
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
