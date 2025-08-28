import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageToggle from "@/components/shared/LanguageToggle";
import ThemeToggle from "@/components/shared/ThemeToggle"; 

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

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
      { name: t("nav.news"), href: "#news" },
      { name: t("nav.researchReports"), href: "#research-reports" },
    ],
  };

  const contactItem = { name: t("nav.contact"), href: "/contact" };

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
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className='text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200'>
                {item.name}
              </Link>
            ))}

            {/* Latest Dropdown */}
            <div className='relative group'>
              <button className='text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200'>
                {latestDropdown.name}
              </button>
              <div className='absolute hidden group-hover:block bg-white dark:bg-background shadow-lg rounded-md mt-2 w-56 z-50'>
                {latestDropdown.items.map((subItem) => (
                  <a
                    key={subItem.name}
                    href={subItem.href}
                    className='block px-4 py-2 text-sm text-foreground hover:bg-muted'>
                    {subItem.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <Link
              to={contactItem.href}
              className='text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200'>
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
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className='text-foreground hover:text-primary block px-3 py-2 text-base font-medium'
                onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            ))}

            {latestDropdown.items.map((subItem) => (
              <a
                key={subItem.name}
                href={subItem.href}
                className='text-foreground hover:text-primary block px-3 py-2 text-base font-medium'
                onClick={() => setIsOpen(false)}>
                {subItem.name}
              </a>
            ))}

            <Link
              to={contactItem.href}
              className='text-foreground hover:text-primary block px-3 py-2 text-base font-medium'
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
