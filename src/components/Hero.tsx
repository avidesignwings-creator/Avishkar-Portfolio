import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDownRight, Sparkles } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      id="hero"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-brand-secondary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
      </div>

      <motion.div 
        style={{ y, opacity, scale }}
        className="container mx-auto px-6 z-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-bold tracking-[0.2em] uppercase text-white mb-8"
        >
          <Sparkles size={10} />
          Avishkar Bhandare · Lead UI/UX & Visual Designer
        </motion.div>

        <h1 className="font-display font-black text-[clamp(2rem,8vw,72px)] leading-[1.1] tracking-tighter mb-8 max-w-[90vw] mx-auto">
          <motion.span
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block"
          >
            SIMPLIFYING COMPLEX WORKFLOWS
          </motion.span>
          <motion.span
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="block italic opacity-60"
          >
            INTO USABLE EXPERIENCES
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-xl mx-auto text-lg text-neutral-400 font-light leading-relaxed mb-12"
        >
          I design and build visually striking, user-focused interfaces that blend creativity with precision — turning ideas into memorable digital products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <motion.a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-full bg-white text-black font-bold flex items-center gap-2 overflow-hidden"
          >
            <span className="relative z-10">VIEW PROJECTS</span>
            <ArrowDownRight className="relative z-10 group-hover:rotate-45 transition-transform duration-300" />
            <div className="absolute inset-0 bg-brand-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.a>
          
          <div className="flex items-center gap-4 text-white/40">
            <div className="w-12 h-[1px] bg-white/20" />
            <span className="text-xs uppercase tracking-widest font-bold">Scroll to Explore</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[15%] hidden md:block"
      >
        <div className="w-24 h-24 rounded-2xl glass rotate-12 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-primary to-transparent blur-sm" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-[15%] hidden md:block"
      >
        <div className="w-32 h-32 rounded-full glass border-brand-secondary/30 flex items-center justify-center">
           <div className="w-16 h-16 rounded-full border border-dashed border-white/20 animate-spin-slow" />
        </div>
      </motion.div>
    </section>
  );
}
