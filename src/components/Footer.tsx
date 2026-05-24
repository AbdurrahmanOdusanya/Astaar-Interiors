import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-soft-beige">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-1">
            <span className="text-3xl font-serif font-bold tracking-tighter text-dark-brown leading-none">ASTAAR<span className="text-gold">.</span></span>
          </Link>
          <p className="text-[13px] text-gray-500 leading-relaxed font-light">
            Elevating your spaces with luxury curtains, blinds, and professional interior decor in Gombe and beyond.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-gold font-bold text-[11px] uppercase tracking-[0.2em] mb-6">Explore</h4>
          <ul className="space-y-3 text-[13px] font-medium text-dark-brown">
            <li><Link to="/" className="hover:text-gold transition-colors italic">Home</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors italic">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-gold transition-colors italic">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors italic">About</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors italic">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-gold font-bold text-[11px] uppercase tracking-[0.2em] mb-6">Specialties</h4>
          <ul className="space-y-3 text-[13px] font-medium text-dark-brown/60">
            <li>Luxury Curtains</li>
            <li>Window Blinds</li>
            <li>Carpets & Rugs</li>
            <li>Bedding Collections</li>
            <li>Full Interior Design</li>
          </ul>
        </div>

        {/* Newsletter/Social */}
        <div>
          <h4 className="text-gold font-bold text-[11px] uppercase tracking-[0.2em] mb-6">Stay Connected</h4>
          <p className="text-[12px] text-gray-400 mb-6 font-light">Follow our latest royal transformations in Gombe.</p>
          <div className="flex gap-4">
             <div className="w-10 h-10 border border-soft-beige flex items-center justify-center text-dark-brown hover:bg-gold hover:text-white transition-all cursor-pointer"><Facebook size={18} /></div>
             <div className="w-10 h-10 border border-soft-beige flex items-center justify-center text-dark-brown hover:bg-gold hover:text-white transition-all cursor-pointer"><Instagram size={18} /></div>
             <a href="https://wa.me/2348039272745?text=Hello%20Astaar%20Interior%20Decoration,%20I'd%20love%20to%20connect!" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-soft-beige flex items-center justify-center text-dark-brown hover:bg-gold hover:text-white transition-all"><MessageCircle size={18} /></a>
          </div>
        </div>
      </div>

      {/* Footer Bar - High Density Pattern */}
      <div className="h-auto bg-white border-t border-soft-beige px-6 py-6 md:py-8 flex items-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col xl:flex-row items-center justify-between gap-6 md:gap-8">
          <Link
            to="/contact"
            className="bg-gold text-white px-5 py-2.5 font-bold text-[11px] tracking-widest uppercase hover:bg-dark-brown transition-all text-center"
          >
            Measurement & Consultation Available
          </Link>
          <div className="flex flex-col md:flex-row md:flex-wrap gap-6 md:gap-12 text-[12px] text-center md:text-left justify-center">
            <div>
              <span className="block text-dark-brown font-bold tracking-tight mb-1">Visit Us</span>
              <span className="text-gray-400 font-light">Opposite UBA, Main Market, Gombe</span>
            </div>
            <div>
              <span className="block text-dark-brown font-bold tracking-tight mb-1">Contact</span>
              <span className="text-gray-400 font-light">0803 927 2745 | 0703 020 9818 | 0802 374 7142</span>
            </div>
            <div>
              <span className="block text-dark-brown font-bold tracking-tight mb-1">Hours</span>
              <span className="text-gray-400 font-light">Mon – Sun | 10AM – 6PM</span>
            </div>
          </div>
          <p className="text-[10px] text-gray-300 uppercase tracking-widest font-bold">© {new Date().getFullYear()} ASTAAR.</p>
        </div>
      </div>
    </footer>
  );
}
