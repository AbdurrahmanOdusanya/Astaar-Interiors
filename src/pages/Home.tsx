import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Clock, Award, Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';

import luxuryCurtainsImg from '../assets/images/luxury_curtains_1779566358591.png';
import premiumRugImg from '../assets/images/premium_rug_1779566374208.png';
import modernBlindsImg from '../assets/images/modern_blinds_1779566388822.png';
import whyChooseCurtainsImg from '../assets/images/why_choose_curtains_1779567044938.png';

export default function Home() {
  const services = [
    {
      title: 'Luxury Curtains',
      desc: 'Minimalist, Royal, Classic & Modern designs tailored to your taste.',
      img: luxuryCurtainsImg,
    },
    {
      title: 'Window Blinds',
      desc: 'Stylish and functional privacy solutions for modern homes and offices.',
      img: modernBlindsImg,
    },
    {
      title: 'Carpets & Rugs',
      desc: 'Add comfort and elegance to your flooring with our premium collections.',
      img: premiumRugImg,
    }
  ];

  return (
    <div className="overflow-hidden bg-cream pt-20">
      {/* Hero Section - High Density Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-[450px_1fr] min-h-[calc(100vh-160px)]">
        <div className="bg-white p-12 md:p-20 flex flex-col justify-center border-r border-soft-beige">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6 text-dark-brown font-serif">
              Luxury Curtains & <br />
              <span className="italic text-gold">Interior Decoration</span> in Gombe
            </h1>
            <p className="text-[14px] text-gray-600 leading-relaxed mb-10 font-light max-w-md">
              Transform your residential and commercial spaces with our premium collection of curtains, blinds, and high-end flooring solutions. We offer professional installation and bespoke designs.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/2348039272745?text=Hello%20Astaar%20Interior%20Decoration,%20I%20want%20to%20book%20a%20professional%20consultation%20for%20my%20space."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-white px-8 py-3.5 text-[12px] font-bold uppercase tracking-widest hover:bg-dark-brown transition-all shadow-lg"
              >
                Book Consultation
              </a>
              <Link to="/portfolio" className="border border-gold text-gold px-8 py-3.5 text-[12px] font-bold uppercase tracking-widest hover:bg-gold hover:text-white transition-all">
                Our Gallery
              </Link>
            </div>

            <div className="mt-12">
              <p className="text-[11px] uppercase tracking-[0.2em] color-gold font-bold mb-4 text-gold">Why Choose Us</p>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-[12px] text-dark-brown/70">
                <div className="flex items-center gap-2"><span className="text-gold">✓</span> Premium Materials</div>
                <div className="flex items-center gap-2"><span className="text-gold">✓</span> Expert Team</div>
                <div className="flex items-center gap-2"><span className="text-gold">✓</span> Royal Designs</div>
                <div className="flex items-center gap-2"><span className="text-gold">✓</span> Fast Service</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="visual-section bg-soft-beige grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-2.5 p-2.5">
          <div className="row-span-2 relative group overflow-hidden">
             <img src={luxuryCurtainsImg} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Curtains" referrerPolicy="no-referrer" />
             <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
               <span className="text-white font-serif text-xl relative z-10">Luxury Curtains & Drapes</span>
             </div>
          </div>
          <div className="relative group overflow-hidden">
             <img src={modernBlindsImg} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Blinds" referrerPolicy="no-referrer" />
             <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
               <span className="text-white font-serif text-xl relative z-10">Modern Window Blinds</span>
             </div>
          </div>
          <div className="relative group overflow-hidden">
             <img src={premiumRugImg} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Rugs" referrerPolicy="no-referrer" />
             <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
               <span className="text-white font-serif text-xl relative z-10">Premium Rugs & Bedding</span>
             </div>
          </div>
        </div>
      </section>

      {/* Service Strip */}
      <div className="bg-dark-brown h-20 flex items-center px-6 overflow-x-auto whitespace-nowrap">
        <div className="max-w-7xl mx-auto flex w-full">
          {[
            { id: '01', text: 'Luxury Curtains' },
            { id: '02', text: 'Window Blinds' },
            { id: '03', text: 'Carpets & Rugs' },
            { id: '04', text: 'Bedding Collections' },
            { id: '05', text: 'Full Interior Design' },
          ].map((item, index) => (
            <div key={index} className={`flex-1 flex items-center justify-center gap-3 px-6 text-white border-r border-white/10 last:border-none`}>
              <span className="text-gold font-bold text-lg">{item.id}</span>
              <span className="text-[11px] uppercase tracking-widest font-light">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Measurement Banner Refined */}
      <div className="bg-gold h-20 flex items-center px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between w-full text-white">
           <span className="text-[12px] font-bold tracking-[0.1em] uppercase hidden md:block">Measurement & Consultation Available</span>
           <div className="flex gap-10 text-[11px]">
             <div className="hidden sm:block"><strong>Visit Us:</strong> Opposite UBA, Main Market, Gombe</div>
             <div className="hidden sm:block"><strong>Hours:</strong> Mon – Sun | 10AM – 6PM</div>
           </div>
           <a 
             href="https://wa.me/2348039272745?text=Hello%20Astaar%20Interior%20Decoration,%20I'd%20like%20to%20arrange%20a%20measurement%20and%20consultation%20visit." 
             target="_blank"
             rel="noopener noreferrer"
             className="bg-white text-gold px-6 py-2 text-[10px] font-bold uppercase tracking-widest shadow-sm hover:scale-105 transition-all"
           >
             Contact Now
           </a>
        </div>
      </div>

      {/* Services Preview */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-gold uppercase tracking-[0.3em] font-semibold text-xs mb-4 block">What we do</span>
            <h2 className="text-4xl md:text-6xl text-dark-brown mb-6">Our Premium Services</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[4/5] mb-6 rounded-2xl">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-dark-brown/90 to-transparent">
                    <p className="text-white/80 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-dark-brown mb-2 group-hover:text-gold transition-colors">{service.title}</h3>
                <Link to="/services" className="text-gold text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-soft-beige/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img
              src={whyChooseCurtainsImg}
              alt="Curtain Installation Showcase"
              className="rounded-[40px] shadow-2xl relative z-10 w-full object-cover max-h-[500px]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 bg-gold p-10 rounded-[40px] z-20 text-white hidden md:block">
              <span className="text-5xl font-bold block mb-1">10+</span>
              <span className="text-xs uppercase tracking-widest font-semibold">Years of Excellence</span>
            </div>
          </div>

          <div>
             <span className="text-gold uppercase tracking-[0.3em] font-semibold text-xs mb-4 block">Excellence in every detail</span>
            <h2 className="text-4xl md:text-5xl text-dark-brown mb-10 leading-tight">Why Choose Astaar Interior Decoration?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: <Star />, title: 'Premium Materials', text: 'We source only the finest fabrics and materials.' },
                { icon: <ShieldCheck />, title: 'Expert Installation', text: 'Our professional team ensures perfect finishing.' },
                { icon: <Clock />, title: 'Fast Delivery', text: 'Timely service for all residential and commercial projects.' },
                { icon: <Award />, title: 'Trusted Brand', text: 'The leading name in luxury interior decor in Gombe.' },
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="text-gold mb-2">{item.icon}</div>
                  <h4 className="font-bold text-lg text-dark-brown">{item.title}</h4>
                  <p className="text-sm text-dark-brown/70 font-light leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-dark-brown text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <img
            src="https://images.unsplash.com/photo-1617103996706-07a515d0c5a7?q=80&w=2000&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Texture"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl text-white mb-8">Ready to transform your home?</h2>
          <p className="text-soft-beige/70 text-lg mb-12 max-w-2xl mx-auto font-light">
            Contact us today for a consultation and let our expert team design the interior of your dreams.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://wa.me/2348039272745?text=Hello%20Astaar%20Interior%20Decoration,%20I'd%20love%20to%20get%20started%20on%20beautifying%20my%20home!" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-white px-10 py-4 font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
            >
              Get Started Now
            </a>
            <a 
              href="https://wa.me/2348039272745?text=Hello%20Astaar%20Interior%20Decoration,%20I%20need%20assistance/support%20with%20my%20interior%20project." 
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gold text-gold px-10 py-4 font-bold uppercase tracking-widest hover:bg-gold hover:text-white transition-all"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
