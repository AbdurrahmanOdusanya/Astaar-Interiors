import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const whatsappBaseUrl = "https://wa.me/2348039272745";
  const generalInquiryText = encodeURIComponent("Hello Astaar Interior Decoration, I want to make an inquiry about curtains/interior decoration.");
  const quoteUrl = `${whatsappBaseUrl}?text=${generalInquiryText}`;

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 bg-white border-b border-soft-beige px-6 shadow-sm',
        scrolled ? 'py-3' : 'py-5'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full relative">
        <Link to="/" className="flex items-center gap-1">
          <span className="text-2xl font-serif font-bold tracking-tighter text-dark-brown leading-none">
            ASTAAR<span className="text-gold">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-[13px] font-semibold transition-colors hover:text-gold uppercase tracking-widest',
                location.pathname === link.path ? 'text-gold' : 'text-dark-brown'
              )}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={quoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-white px-5 py-2.5 rounded-none text-[12px] font-bold uppercase tracking-widest hover:bg-dark-brown transition-all shadow-md"
          >
            Request Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-dark-brown p-2" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Dropdown (Absolute Positioning for proper display) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 left-0 right-0 md:hidden bg-white border border-soft-beige shadow-xl z-50 flex flex-col p-6 gap-6 rounded-b-xl"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'text-[15px] font-semibold tracking-wider transition-colors hover:text-gold uppercase py-2 border-b border-cream',
                      location.pathname === link.path ? 'text-gold font-bold' : 'text-dark-brown'
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {/* Inquiry CTA in Mobile Nav */}
                <Link
                  to="/quote"
                  onClick={() => setIsOpen(false)}
                  className="bg-cream text-dark-brown text-center py-3.5 text-xs font-bold uppercase tracking-widest border border-soft-beige"
                >
                  Request Customized Quote Form
                </Link>
                <a
                  href={quoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="bg-gold text-white text-center py-3.5 text-xs font-bold uppercase tracking-widest shadow-md flex items-center justify-center gap-2"
                >
                  <MessageSquare size={16} /> Contact on WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
