import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, MessageSquare } from 'lucide-react';

export default function Quote() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState('Luxury Curtains');
  const [stylePreference, setStylePreference] = useState('Minimalist Modern');
  const [budgetRange, setBudgetRange] = useState('Standard Package');
  const [message, setMessage] = useState('');
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Construct the WhatsApp text
    const textMessage = `*ASTAAR INTERIOR DECORATION - NEW QUOTE REQUEST*
-----------------------------
👤 *Full Name:* ${fullName}
📞 *Phone Number:* ${phoneNumber}
📍 *Project Location:* ${location}
🛠️ *Service Needed:* ${serviceNeeded}
✨ *Style Preference:* ${stylePreference}
💰 *Budget Range:* ${budgetRange}
📝 *Additional Message:* ${message || 'No additional message.'}
-----------------------------
Generated from Astaar online platform.`;

    const encodedText = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/2348060458558?text=${encodedText}`;

    setTimeout(() => {
      setFormState('success');
      // Redirect to WhatsApp
      window.open(whatsappUrl, '_blank');
    }, 1000);
  };

  if (formState === 'success') {
    return (
      <div className="pt-24 min-h-screen bg-cream flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full bg-white rounded-[50px] p-12 text-center shadow-2xl space-y-6 animate-fade-in"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={48} />
          </div>
          <h2 className="text-3xl font-serif text-dark-brown">Opening WhatsApp...</h2>
          <p className="text-dark-brown/60 font-light leading-relaxed">
            Your inquiry has been organized and is being forwarded to our representative on WhatsApp. Click corresponding button if it didn't open automatically.
          </p>
          <div className="flex flex-col gap-4 max-w-xs mx-auto pt-4">
            <a 
              href={`https://wa.me/2348060458558?text=${encodeURIComponent(`*ASTAAR INTERIOR DECORATION - NEW QUOTE REQUEST*\n-----------------------------\n👤 *Full Name:* ${fullName}\n📞 *Phone Number:* ${phoneNumber}\n📍 *Project Location:* ${location}\n🛠️ *Service Needed:* ${serviceNeeded}\n✨ *Style Preference:* ${stylePreference}\n💰 *Budget Range:* ${budgetRange}\n📝 *Additional Message:* ${message || 'No additional message.'}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-white text-xs font-bold uppercase tracking-widest py-4 shadow-lg flex items-center justify-center gap-2"
            >
              <MessageSquare size={16} /> Open Chat Manually
            </a>
            <button 
              onClick={() => {
                setFormState('idle');
                setFullName('');
                setPhoneNumber('');
                setLocation('');
                setMessage('');
              }}
              className="text-dark-brown font-bold uppercase tracking-widest text-xs border-b-2 border-dark-brown transition-colors hover:text-gold hover:border-gold py-2"
            >
              Fill another form
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-cream">
       {/* Header */}
       <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold uppercase tracking-[0.4em] font-bold text-xs mb-4 block">Inquire // Excellence</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-dark-brown">Let's Design Your <span className="text-gold">Space</span></h1>
          <p className="text-dark-brown/60 text-lg font-light max-w-2xl mx-auto">
            Provide the details below and we will automatically format your request and send it details straight to us on WhatsApp.
          </p>
        </div>
      </section>

      {/* Form Content */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-[50px] shadow-2xl p-8 md:p-16 border border-soft-beige">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] font-bold text-dark-brown/70 ml-2">Full Name</label>
                <input 
                  required
                  type="text" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="w-full bg-soft-beige/20 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gold outline-none transition-all placeholder:text-dark-brown/30"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] font-bold text-dark-brown/70 ml-2">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="e.g. 0803 927 2745"
                  className="w-full bg-soft-beige/20 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gold outline-none transition-all placeholder:text-dark-brown/30"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Location */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] font-bold text-dark-brown/70 ml-2">Project Location</label>
                <input 
                  required
                  type="text" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. GRA, Gombe"
                  className="w-full bg-soft-beige/20 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gold outline-none transition-all placeholder:text-dark-brown/30"
                />
              </div>

              {/* Service Needed */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] font-bold text-dark-brown/70 ml-2">Service Needed</label>
                <select 
                  value={serviceNeeded}
                  onChange={(e) => setServiceNeeded(e.target.value)}
                  className="w-full bg-soft-beige/20 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gold outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="Luxury Curtains">Luxury Curtains</option>
                  <option value="Window Blinds">Window Blinds</option>
                  <option value="Carpets & Rugs">Carpets & Rugs</option>
                  <option value="Bedding & Duvets">Bedding & Duvets</option>
                  <option value="Full Interior Decoration">Full Interior Decoration</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Style preference */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] font-bold text-dark-brown/70 ml-2">Style Preference</label>
                <select 
                  value={stylePreference}
                  onChange={(e) => setStylePreference(e.target.value)}
                  className="w-full bg-soft-beige/20 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gold outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="Minimalist Modern">Minimalist Modern</option>
                  <option value="Royal Luxury">Royal/High luxury</option>
                  <option value="Classic Elegance">Classic Elegance</option>
                  <option value="Custom Design">Custom Design</option>
                  <option value="Not Sure Yet">Not Sure Yet</option>
                </select>
              </div>

              {/* Budget Range */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] font-bold text-dark-brown/70 ml-2">Budget Range</label>
                <select 
                  value={budgetRange}
                  onChange={(e) => setBudgetRange(e.target.value)}
                  className="w-full bg-soft-beige/20 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gold outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="Economy Package">Economy Package</option>
                  <option value="Standard Package">Standard Package</option>
                  <option value="Premium Package">Premium Package</option>
                  <option value="Royal/High-End">Royal/High-End</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.2em] font-bold text-dark-brown/70 ml-2">Additional Message</label>
              <textarea 
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us more about your project goals..."
                className="w-full bg-soft-beige/20 border-none rounded-[30px] px-6 py-4 focus:ring-2 focus:ring-gold outline-none transition-all placeholder:text-dark-brown/30 resize-none"
              ></textarea>
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full bg-dark-brown text-white py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-gold transition-all flex items-center justify-center gap-3 shadow-xl disabled:opacity-50"
              >
                {formState === 'submitting' ? 'Processing...' : (
                  <>Submit Quote to WhatsApp <Send size={18} /></>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
