import { motion } from 'motion/react';

const inspirations = [
  '/regenerated_image_1777383576416.png',
  '/regenerated_image_1777383569607.png',
  '/regenerated_image_1777383572640.png',
  '/regenerated_image_1777384180997.png',
  '/regenerated_image_1777383579413.png',
];

export default function Inspiration() {
  return (
    <section className="py-32 bg-white/[0.01]" id="inspiration">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-4 italic">
            Visual <span className="text-brand-primary not-italic">Entropy</span>
          </h2>
          <p className="text-white/40 uppercase tracking-widest text-xs font-bold">
            Curated bytes of inspiration & daily explorations
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-10 space-y-10">
          {inspirations.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative break-inside-avoid shadow-2xl transition-all duration-500 rounded-sm border-[12px] border-neutral-900 group ${
                idx % 2 === 0 ? 'bg-neutral-800' : 'bg-neutral-900'
              }`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={img} 
                  alt={`Inspiration ${idx}`}
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-[1.01] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-white/60">Study_{idx + 1}</p>
                </div>
              </div>
              <div className="h-6 w-full flex items-center justify-center">
                 <div className="w-1 h-1 rounded-full bg-white/10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
