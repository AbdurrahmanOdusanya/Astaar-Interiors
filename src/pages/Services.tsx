import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

import luxuryCurtainsServiceImg from '../assets/images/service_curtains_1779568757060.png';
import modernBlindsServiceImg from '../assets/images/service_blinds_1779568776276.png';
import premiumRugImg from '../assets/images/premium_rug_1779566374208.png';
import beddingServiceImg from '../assets/images/service_beddings_1779568797371.png';

const services = [
  {
    id: 'curtains',
    title: 'Luxury Curtains',
    description: 'Our signature service. We provide a wide range of custom-made curtains from minimalist modern to royal and classic designs.',
    features: ['Minimalist & Modern', 'Royal & Classic', 'Custom Tailoring', 'Premium Fabric Sourcing'],
    img: luxuryCurtainsServiceImg,
    gradient: 'from-amber-200/20 to-transparent'
  },
  {
    id: 'blinds',
    title: 'Window Blinds',
    description: 'Functional and aesthetic window solutions for complete light control and privacy in offices and homes.',
    features: ['Wooden & Zebra Blinds', 'Vertical & Roller Blinds', 'Office Installation', 'Smart Motorized Options'],
    img: modernBlindsServiceImg,
    gradient: 'from-blue-200/10 to-transparent'
  },
  {
    id: 'flooring',
    title: 'Carpets & Rugs',
    description: 'Transform your flooring with our collection of high-quality carpets and designer rugs that add warmth and prestige.',
    features: ['Wall-to-wall Carpeting', 'Area Rugs', 'Persian & Modern Designs', 'Professional Fitting'],
    img: premiumRugImg,
    gradient: 'from-red-200/10 to-transparent'
  },
  {
    id: 'bedding',
    title: 'Luxury Bedding',
    description: 'Exceptional comfort with our premium bed sheets and duvet collections, perfect for homes and luxury hotels.',
    features: ['Silk & Cotton Sheets', 'Premium Duvets', 'Hotel Grade Quality', 'Custom Bedding Sets'],
    img: beddingServiceImg,
    gradient: 'from-purple-200/10 to-transparent'
  }
];

export default function Services() {
  return (
    <div className="pt-24 min-h-screen bg-cream">
      {/* Header */}
      <section className="py-20 px-6 bg-dark-brown text-white text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Our Professional <span className="text-gold">Services</span>
          </motion.h1>
          <p className="text-soft-beige/70 text-lg md:text-xl font-light max-w-2xl mx-auto">
            From single window treatments to complete luxury home transformations, we bring elegance to every corner.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              {/* Image side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} -m-4 rounded-[40px] -z-10 group-hover:m-0 transition-all duration-500`}></div>
                <div className="overflow-hidden rounded-[30px] aspect-[4/3] shadow-2xl">
                  <img 
                    src={service.img} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Text side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-4">
                  <span className="text-gold font-bold text-sm uppercase tracking-[0.4em]">0{idx + 1} // Expertise</span>
                  <h2 className="text-4xl md:text-5xl text-dark-brown font-serif">{service.title}</h2>
                  <p className="text-dark-brown/70 leading-relaxed font-light text-lg">
                    {service.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-dark-brown/80 font-medium">
                      <CheckCircle2 size={18} className="text-gold" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <a 
                    href={`https://wa.me/2348039272745?text=Hello%20Astaar%20Interior%20Decoration,%20I%20am%20interested%20in%20inquiring%20about%20${encodeURIComponent(service.title)}.`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-dark-brown text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gold transition-all group"
                  >
                    Inquire Now <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Consultation */}
      <section className="py-24 px-6 bg-white border-y border-soft-beige">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-serif text-dark-brown">Not sure where to start?</h2>
          <p className="text-lg text-dark-brown/60 font-light">
            Our design experts can visit your site, take measurements, and help you select the best materials for your needs.
          </p>
          <div className="pt-6">
            <a 
              href="https://wa.me/2348039272745?text=Hello%20Astaar%20Interior%20Decoration,%20I'd%20love%20to%20schedule%20a%20site%20visit%20for%20measurement%20and%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold font-gold uppercase tracking-[0.2em] font-bold border-b-2 border-gold pb-1 hover:text-dark-brown hover:border-dark-brown transition-colors"
            >
              Schedule Your Visit Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
