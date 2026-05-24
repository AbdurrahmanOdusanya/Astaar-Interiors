import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageSquare, Clock, Globe } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Call or WhatsApp',
      values: ['0803 927 2745', '0703 020 9818', '0802 374 7142', '0806 045 8558'],
      actionLabel: 'Chat on WhatsApp',
      actionUrl: 'https://wa.me/2348039272745?text=Hello%20Astaar%20Interior%20Decoration,%20I%20am%20inquiring%20about%20your%20services.'
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'WhatsApp Inquiry',
      values: ['Available 24/7', 'Instant Response'],
      actionLabel: 'Chat with Us',
      actionUrl: 'https://wa.me/2348039272745?text=Hello%20Astaar%20Interior%20Decoration,%20I%20want%20to%20make%20an%20inquiry.'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Our Showroom',
      values: ['Opposite UBA, Main Market', 'Gombe State, Nigeria.'],
      actionLabel: 'Contact Showroom',
      actionUrl: 'https://wa.me/2348039272745?text=Hello%20Astaar%20Interior%20Decoration,%20I%20plan%20to%20visit%20your%20showroom%20and%20need%20assistance.'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-cream">
       {/* Header */}
       <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold uppercase tracking-[0.4em] font-bold text-xs mb-4 block"
          >
            Connect // Royal Service
          </motion.span>
          <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-dark-brown"
          >
            Contact <span className="text-gold">Astaar</span>
          </motion.h1>
          <p className="text-dark-brown/60 text-lg font-light max-w-2xl mx-auto">
            Ready to start your interior journey? Reach out to us via any of the channels below or visit our showroom in Gombe.
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-10 pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {contactInfo.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[40px] p-10 border border-soft-beige shadow-lg hover:shadow-2xl transition-all group"
            >
              <div className="w-16 h-16 bg-gold/10 text-gold flex items-center justify-center rounded-2xl mb-8 group-hover:bg-gold group-hover:text-white transition-colors duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif text-dark-brown mb-4">{item.title}</h3>
              <div className="space-y-1 mb-8 text-dark-brown/60 font-light">
                {item.values.map((val, vIdx) => <p key={vIdx}>{val}</p>)}
              </div>
              <a 
                href={item.actionUrl} 
                className="inline-block text-gold font-bold uppercase tracking-widest border-b-2 border-gold hover:text-dark-brown hover:border-dark-brown transition-colors"
              >
                {item.actionLabel}
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Map & Hours */}
      <section className="py-32 px-6 bg-dark-brown text-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-1/2 space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif">Business Hours</h2>
              <p className="text-soft-beige/50 font-light max-w-md">
                We are open every day of the week to serve your interior needs. Visit us at your convenience.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6 border-b border-soft-beige/10 pb-6">
                <Clock className="text-gold" />
                <div className="flex-1">
                   <p className="font-bold uppercase tracking-widest text-sm">Mon — Sun</p>
                   <p className="text-soft-beige/70 font-light italic">10:00 AM – 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Globe className="text-gold" />
                <div className="flex-1">
                   <p className="font-bold uppercase tracking-widest text-sm">Serving Area</p>
                   <p className="text-soft-beige/70 font-light italic">Gombe State & Nationwide Nigeria</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
               <a href="https://wa.me/2348039272745?text=Hello%20Astaar%20Interior%20Decoration,%20I'd%20like%20to%20book%20an%20appointment." className="bg-gold text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-dark-brown transition-all shadow-xl">
                  Book Appointment
               </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
             <div className="h-[500px] bg-soft-beige/10 rounded-[50px] relative overflow-hidden flex items-center justify-center p-12 text-center border border-white/10 group">
                <MapPin size={80} className="text-gold opacity-30 group-hover:scale-125 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                   <h3 className="text-2xl font-serif mb-4">Gombe Showroom</h3>
                   <p className="text-soft-beige mb-6 font-light">Opposite UBA, Main Market, Gombe State.</p>
                   <p className="text-gold text-sm tracking-[0.2em] uppercase font-bold">Directions Coming Soon</p>
                </div>
                <div className="absolute inset-x-0 bottom-10 px-8">
                  <p className="text-soft-beige/60 text-xs italic">Our map integration is currently being updated for the Gombe Main Market area.</p>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
