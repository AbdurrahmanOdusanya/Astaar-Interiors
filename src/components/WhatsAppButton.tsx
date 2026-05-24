import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/2348039272745?text=Hello%20Astaar%20Interior%20Decoration,%20I%20want%20to%20make%20an%20inquiry%20about%20curtains/interior%20decoration.";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-[100px] right-8 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
    </motion.a>
  );
}
