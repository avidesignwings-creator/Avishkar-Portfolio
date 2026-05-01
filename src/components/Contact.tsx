import { motion } from 'motion/react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 md:py-32" id="contact">
      <div className="container mx-auto px-6">
        <div className="relative border-t border-white/5 pt-20">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-purple-500" />
                <p className="text-purple-500 font-display italic font-black uppercase tracking-widest text-xs">Direct Channel</p>
              </div>
              <h2 className="text-7xl md:text-[clamp(4rem,12vw,10rem)] font-display font-black tracking-tighter italic mb-8 leading-none uppercase">
                Lets <br /> 
                <span className="text-white/10 uppercase not-italic">Talk</span>
              </h2>
              <p className="text-white/40 text-lg leading-relaxed max-w-md font-medium italic mt-8">
                I specialize in bridging the gap between high-end design and precision engineering. Reach out directly to discuss your next project or professional collaboration.
              </p>
            </div>
            
            <div className="w-full lg:w-auto">
              <div className="space-y-12">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="group"
                >
                  <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-4 font-mono">Email Inquiry</p>
                  <a 
                    href="mailto:avi.designwings@gmail.com" 
                    className="text-3xl md:text-5xl font-display font-black text-white hover:text-purple-500 transition-all block tracking-tighter"
                  >
                    avi.designwings@gmail.com
                  </a>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="group"
                >
                  <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-4 font-mono">Mobile Connect</p>
                  <a 
                    href="tel:9145738361" 
                    className="text-3xl md:text-5xl font-display font-black text-white hover:text-purple-500 transition-all block tracking-tighter"
                  >
                    9145738361
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
