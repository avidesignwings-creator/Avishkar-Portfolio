import { motion } from 'motion/react';
import { Layers, Sparkles, Target } from 'lucide-react';

export default function Introduction() {
  return (
    <section className="py-32 relative overflow-hidden" id="about">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden relative group">
              <img 
                src="/input_file_0.png" 
                alt="Avishkar Bhandare"
                className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
              
              {/* Floating Badge */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-primary rounded-full p-4 flex items-center justify-center text-center leading-tight font-display font-bold text-sm tracking-tighter"
              >
                PRO DESIGNER • INNOVATOR • CREATIVE THINKER • 
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-[1px] bg-brand-primary" />
              <span className="text-brand-primary font-bold tracking-widest text-xs uppercase">Philosophy</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8">
              Simplifying complex products through structured design.
            </h2>
            
            <p className="text-white/60 text-lg mb-10 leading-relaxed font-light">
              I design scalable, consistent, and user-focused interfaces for SaaS and AI platforms. My work focuses on clarity, usability, and building systems that grow with the product.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Layers, title: 'Design Systems', desc: 'Building scalable UI systems with consistency across products.' },
                { icon: Sparkles, title: 'Clarity & Usability', desc: 'Simplifying complex workflows into intuitive experiences.' },
                { icon: Target, title: 'Product Thinking', desc: 'Aligning design decisions with real user and business needs.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-sm text-white/40">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
