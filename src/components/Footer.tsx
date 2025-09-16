import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">I</span>
                </div>
                <span className="text-2xl font-bold">InnovaGrid</span>
              </div>
              <p className="text-gray-300 mb-6 text-lg max-w-md">
                Building digital futures through innovative technology solutions. 
                Transforming ideas into powerful digital experiences.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <a 
                    href="mailto:hello@innovagrid.com" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    hello@innovagrid.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <a 
                    href="tel:+1234567890" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +1 (234) 567-8900
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Remote-First Company</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links & CTA */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Connect With Us</h3>
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary transition-all duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              
              <div className="bg-gray-800 rounded-xl p-4">
                <p className="text-sm text-gray-300 mb-3">
                  Ready to start your project?
                </p>
                <button 
                  onClick={() => scrollToSection("#home")}
                  className="w-full bg-gradient-primary hover:opacity-90 text-white font-medium py-2 px-4 rounded-lg transition-opacity duration-200"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} InnovaGrid. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;