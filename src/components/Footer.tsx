import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Mission", href: "#mission" },
    { name: "Programs", href: "#programs" },
    { name: "Impact Stories", href: "/stories" },
    { name: "Get Involved", href: "/contact" },
    { name: "Team", href: "/team-cedo" },
  ];

  const programs = [
    { name: "Health Education", href: "#" },
    { name: "Community Advocacy", href: "#" },
    { name: "Human Rights Protection", href: "#" },
    { name: "Agricultural Development", href: "#" },
    { name: "Economic Empowerment", href: "#" },
    { name: "Disease Prevention", href: "#" }
  ];

  return (
    <footer className='bg-primary text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Organization Info */}
          <div className='lg:col-span-1'>
            <div className='flex items-center mb-6'>
              <div className='w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-3'>
                <span className='text-primary font-bold text-2xl'>C</span>
              </div>
              <div>
                <h3 className='text-xl font-bold'>CEDO</h3>
                <p className='text-sm text-white/80'>Empowering Communities</p>
              </div>
            </div>
            <p className='text-white/90 mb-6 leading-relaxed'>
              Community Empowerment and Development Organization (CEDO) works to
              address health and nutrition challenges in Tanzania through
              education, advocacy, and community empowerment.
            </p>
            <div className='flex space-x-4'>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className='w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200'>
                  <social.icon className='w-5 h-5' />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-semibold mb-6'>Quick Links</h4>
            <ul className='space-y-3'>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className='text-white/80 hover:text-white transition-colors duration-200'>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className='text-lg font-semibold mb-6'>Our Programs</h4>
            <ul className='space-y-3'>
              {programs.map((program, index) => (
                <li key={index}>
                  <a
                    href={program.href}
                    className='text-white/80 hover:text-white transition-colors duration-200'>
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className='text-lg font-semibold mb-6'>Contact Us</h4>
            <div className='space-y-4'>
              <div className='flex items-start'>
                <MapPin className='w-5 h-5 mr-3 mt-1 flex-shrink-0 text-white/80' />
                <div>
                  <p className='text-white/90'>Singida, Tanzania</p>
                  <p className='text-white/80 text-sm'>
                    Singida Regional Office
                  </p>
                </div>
              </div>
              <div className='flex items-center'>
                <Phone className='w-5 h-5 mr-3 text-white/80' />
                <p className='text-white/90'>+255 769 044 455</p>
              </div>
              <div className='flex items-center'>
                <Mail className='w-5 h-5 mr-3 text-white/80' />
                <p className='text-white/90'>info@cedonia.org</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-white/80 text-sm mb-4 md:mb-0'>
            © 2024 Community Empowerment and Development Organization (CEDO).
            All rights reserved.
          </p>
          <div className='flex space-x-6 text-sm'>
            <a
              href='#'
              className='text-white/80 hover:text-white transition-colors duration-200'>
              Privacy Policy
            </a>
            <a
              href='#'
              className='text-white/80 hover:text-white transition-colors duration-200'>
              Terms of Service
            </a>
            <a
              href='#'
              className='text-white/80 hover:text-white transition-colors duration-200'>
              Transparency
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;