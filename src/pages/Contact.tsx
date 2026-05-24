import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageSquare, Clock, Globe } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Call on Mobile',
      isPhoneList: true,
      values: ['0803 927 2745', '0703 020 9814', '0802 374 7142', '0703 020 9818'],
      actionLabel: '',
      actionUrl: ''
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'WhatsApp Inquiry',
      isWhatsAppList: true,
      values: [
        { name: 'Muazzam', phone: '08060458558', label: '0806 045 8558' },
        { name: 'Alhaji Abubakar', phone: '08039272745', label: '0803 927 2745' },
        { name: 'Jamilu', phone: '07030209818', label: '0703 020 9818' }
      ],
      actionLabel: '',
      actionUrl: ''
    },
    {
      icon: <MapPin size={24} />,
      title: 'Our Showroom',
      values: ['Opposite UBA, Main Market', 'Gombe State, Nigeria.'],
      actionLabel: 'Open Google Maps',
      actionUrl: 'https://share.google/VBOrK02gylaAZ1Iqa'
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
              className="bg-white rounded-[40px] p-10 border border-soft-beige shadow-lg hover:shadow-2xl transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 bg-gold/10 text-gold flex items-center justify-center rounded-2xl mb-8 group-hover:bg-gold group-hover:text-white transition-colors duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif text-dark-brown mb-4">{item.title}</h3>
                
                {item.isWhatsAppList ? (
                  <div className="space-y-4 mb-8">
                    {(item.values as any[]).map((contact, cIdx) => (
                      <div key={cIdx} className="border-b border-soft-beige pb-3 last:border-b-0 last:pb-0">
                        <span className="block text-[10px] uppercase tracking-wider text-gold font-bold">{contact.name}</span>
                        <a 
                          href={`https://wa.me/234${contact.phone.replace(/\s+/g, '')}?text=Hello%20Astaar%20Interior%20Decoration,%20I'd%20like%20to%20make%20an%20inquiry.%20(${contact.name})`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-dark-brown hover:text-gold transition-colors flex items-center gap-2 mt-1"
                        >
                          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse inline-block"></span>
                          {contact.label}
                        </a>
                      </div>
                    ))}
                  </div>
                ) : item.isPhoneList ? (
                  <div className="space-y-4 mb-8">
                    {(item.values as string[]).map((val, vIdx) => (
                      <div key={vIdx} className="border-b border-soft-beige pb-3 last:border-b-0 last:pb-0">
                        <a 
                          href={`tel:${val.replace(/\s+/g, '')}`}
                          className="text-sm font-semibold text-dark-brown hover:text-gold transition-colors flex items-center gap-2 mt-1"
                        >
                          <span className="w-2.5 h-2.5 rounded-full bg-gold/50 inline-block"></span>
                          {val}
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-1 mb-8 text-dark-brown/60 font-light">
                    {(item.values as string[]).map((val, vIdx) => <p key={vIdx}>{val}</p>)}
                  </div>
                )}
              </div>
              
              {!item.isWhatsAppList && item.actionLabel && (
                <div>
                  <a 
                    href={item.actionUrl} 
                    target={item.actionUrl?.startsWith('http') ? '_blank' : undefined}
                    rel={item.actionUrl?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-block text-gold font-bold uppercase tracking-widest border-b-2 border-gold hover:text-dark-brown hover:border-dark-brown transition-colors"
                  >
                    {item.actionLabel}
                  </a>
                </div>
              )}
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
               <a href="https://wa.me/2348060458558?text=Hello%20Astaar%20Interior%20Decoration,%20I'd%20like%20to%20book%20an%20appointment." className="bg-gold text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-dark-brown transition-all shadow-xl">
                  Book Appointment
               </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
             <div className="h-[500px] w-full bg-soft-beige/10 rounded-[50px] relative overflow-hidden flex items-center justify-center border border-white/10 group shadow-2xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.3090629431!2d11.1634567!3d10.2810234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDE2JzUxLjciTiAxMcKwMDknNDguNCJF!5e0!3m2!1sen!2sng!4v1716503927274!5m2!1sen!2sng"
                  className="w-full h-full border-0 rounded-[50px] relative z-0"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Astaar Gombe Showroom Location"
                ></iframe>
                <div className="absolute inset-x-0 bottom-6 flex justify-center z-10">
                  <a 
                    href="https://share.google/VBOrK02gylaAZ1Iqa" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gold text-white px-8 py-3.5 rounded-full font-bold uppercase text-[11px] tracking-widest shadow-2xl flex items-center gap-2 hover:bg-dark-brown transition-all animate-pulse"
                  >
                    <MapPin size={14} /> Open Location in Google Maps
                  </a>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
