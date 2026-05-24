import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import royalCurtainsImg from '../assets/images/portfolio_royal_curtains_1779569489611.png';
import modernBlindsImg from '../assets/images/service_blinds_1779568776276.png';
import premiumRugImg from '../assets/images/premium_rug_1779566374208.png';
import luxuryBeddingsImg from '../assets/images/service_beddings_1779568797371.png';
import minimalistSuiteImg from '../assets/images/portfolio_minimalist_suite_1779569508300.png';

const projects = [
  {
    title: 'Royal Living Room',
    category: 'Curtain Installation',
    img: royalCurtainsImg,
    location: 'Gombe City'
  },
  {
    title: 'Modern Corporate Office',
    category: 'Window Blinds',
    img: modernBlindsImg,
    location: 'Central Market'
  },
  {
    title: 'Luxury Master Bedroom',
    category: 'Full Decor',
    img: luxuryBeddingsImg,
    location: 'GRA, Gombe'
  },
  {
    title: 'Carpets & Rugs',
    category: 'Curtains & Rugs',
    img: premiumRugImg,
    location: 'Gombe North'
  },
  {
    title: 'Premium Guest House',
    category: 'Bedding & Blinds',
    img: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop',
    location: 'Main Town'
  },
  {
    title: 'Minimalist Suite',
    category: 'Full Interior',
    img: minimalistSuiteImg,
    location: 'Gombe'
  }
];

export default function Portfolio() {
  return (
    <div className="pt-24 min-h-screen bg-cream">
       {/* Header */}
       <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold uppercase tracking-[0.4em] font-bold text-xs mb-4 block"
          >
            Showcase // Portfolio
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-dark-brown"
          >
            Our Masterpieces
          </motion.h1>
          <p className="text-dark-brown/60 text-lg font-light max-w-2xl mx-auto">
            Take a look at some of our completed high-end projects across residential and commercial spaces in Gombe.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[450px] overflow-hidden rounded-[30px] cursor-pointer shadow-xl border border-white"
              >
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-brown via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-gold text-xs font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                  <h3 className="text-white text-2xl font-serif mb-1">{project.title}</h3>
                  <p className="text-white/60 text-sm italic">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gold text-center text-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif">Want results like these?</h2>
          <p className="opacity-90 font-light">Join our growing list of satisfied clients in Gombe and elevate your living standards today.</p>
          <div className="pt-4">
             <Link to="/quote" className="bg-dark-brown text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest inline-block shadow-lg hover:scale-105 transition-transform">
                Start My Project
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
