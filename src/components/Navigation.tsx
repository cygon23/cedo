import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "What we Do", href: "#programs" },
    { name: "Impact", href: "#impact" },
  ];

  const latestDropdown = {
    name: "Latest",
    items: [
      { name: "Contact", href: "#contact" },
      { name: "News", href: "#news" },
      { name: "Stories", href: "#stories" },
      { name: "Research & Reports", href: "#research-reports" },
    ],
  };

  return (
    <nav className='fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50'>
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
                  Empowering Communities
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-8'>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200'>
                  {item.name}
                </a>
              ))}

              {/* Latest Dropdown */}
              <div className='relative group'>
                <button className='text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200'>
                  {latestDropdown.name}
                </button>
                <div className='absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-56 z-50'>
                  {latestDropdown.items.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                      {subItem.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className='hidden md:block'>
            <Button variant='cta' size='sm'>
              Donate Now
            </Button>
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
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-border'>
            {[...navItems, ...latestDropdown.items].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-foreground hover:text-primary block px-3 py-2 text-base font-medium'
                onClick={() => setIsOpen(false)}>
                {item.name}
              </a>
            ))}
            <div className='pt-4 pb-2'>
              <Button variant='cta' size='sm' className='w-full'>
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
