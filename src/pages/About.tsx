import { motion } from 'motion/react';
import { Target, Heart, Shield, Users } from 'lucide-react';

import royalCurtainsImg from '../assets/images/portfolio_royal_curtains_1779569489611.png';

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-cream">
       {/* Hero/Story Section */}
       <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="text-gold uppercase tracking-[0.4em] font-bold text-xs block">Our Heritage</span>
            <h1 className="text-5xl md:text-7xl font-bold text-dark-brown leading-tight">
              Astaar Interior <br /> <span className="text-gold">Decoration</span>
            </h1>
            <p className="text-xl text-dark-brown/70 leading-relaxed font-light italic">
              "Delivering luxury interiors with professional finishing and customer satisfaction since our inception opposite UBA Main Market, Gombe."
            </p>
            <div className="space-y-6 text-dark-brown/80 leading-relaxed font-light">
              <p>
                Astaar Interior Decoration is a premier interior décor brand based in Gombe State, Nigeria. We specialize in transforming spaces through high-quality materials and masterful craftmanship.
              </p>
              <p>
                Our journey began with a simple mission: to make luxury affordable and accessible to the residents of Gombe and beyond. Today, we are proud to be the trusted partner for homeowners, corporate organizations, and real estate developers seeking world-class interior finishing.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 -z-10 rounded-full blur-3xl"></div>
            <img 
              src={royalCurtainsImg} 
              className="rounded-[50px] shadow-2xl relative z-10 scale-95 hover:scale-100 transition-transform duration-1000"
              alt="Astaar luxury interior decoration showroom"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Mission/Values */}
      <section className="py-24 px-6 bg-dark-brown text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-gold flex items-center justify-center rounded-2xl mb-8">
                <Target size={32} />
              </div>
              <h2 className="text-4xl font-serif">Our Mission</h2>
              <p className="text-soft-beige/60 font-light leading-relaxed text-lg italic">
                To deliver premium interior solutions that combine aesthetic beauty with functional excellence, ensuring every client experiences the prestige of a royal environment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-12">
              <div className="flex gap-6">
                <div className="text-gold shrink-0"><Shield size={32} /></div>
                <div>
                   <h4 className="text-xl font-bold mb-2 uppercase tracking-wide">Uncompromising Quality</h4>
                   <p className="text-soft-beige/50 font-light text-sm">We only use the best fabrics and materials for our curtains, blinds, and flooring products.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-gold shrink-0"><Heart size={32} /></div>
                <div>
                   <h4 className="text-xl font-bold mb-2 uppercase tracking-wide">Customer First</h4>
                   <p className="text-soft-beige/50 font-light text-sm">Every project is tailored to the unique tastes and lifestyle of our clients.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-gold shrink-0"><Users size={32} /></div>
                <div>
                   <h4 className="text-xl font-bold mb-2 uppercase tracking-wide">Expert Team</h4>
                   <p className="text-soft-beige/50 font-light text-sm">Our installation team consists of seasoned professionals with years of field experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Banner */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto border-2 border-gold rounded-[50px] p-12 md:p-20 overflow-hidden relative">
          <div className="absolute right-0 top-0 w-1/3 h-full bg-gold/5 -z-10 translate-x-1/2 rounded-full"></div>
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif text-dark-brown mb-8">Visit Our Showroom</h2>
            <p className="text-lg text-dark-brown/70 font-light mb-10 leading-relaxed">
              Experience the luxury firsthand. Visit us at our main location opposite UBA in the Main Market, Gombe. Discover our latest collections of curtains, blinds, and rugs in person.
            </p>
            <div className="space-y-2">
              <p className="text-gold font-bold uppercase tracking-[0.2em]">Address:</p>
              <p className="text-dark-brown font-medium">Opposite UBA, Main Market, Gombe State, Nigeria.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
