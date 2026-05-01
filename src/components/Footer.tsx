import { motion } from 'motion/react';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
             <a href="#" className="text-3xl font-display font-black tracking-tighter mb-4 block">
               AVISHKAR<span className="text-brand-primary">.</span>
            </a>
            <p className="text-white/40 text-sm max-w-xs">
              Designing digital futures through creativity, code, and curiosity.
            </p>
          </div>

          <div className="flex gap-8">
            {[Github, Twitter, Linkedin, Instagram].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ y: -5, color: '#9333ea' }}
                className="text-white/40 transition-colors"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/20 uppercase tracking-widest font-bold">
            © {currentYear} AVISHKAR BHANDARE • ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-8">
             {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
               <a key={item} href="#" className="text-xs text-white/20 hover:text-white transition-colors uppercase tracking-widest font-bold">
                 {item}
               </a>
             ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
