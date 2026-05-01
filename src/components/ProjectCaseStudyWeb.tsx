import React from 'react';
import { motion } from 'motion/react';
import { X, Layout, Monitor, Cpu, Search, Layers, Zap, ArrowRight, Brain, CheckCircle2, Code, Globe, LucideIcon, Grid, Activity, Box, Database, Radar } from 'lucide-react';

interface ProjectCaseStudyWebProps {
  onClose: () => void;
}

export default function ProjectCaseStudyWeb({ onClose }: ProjectCaseStudyWebProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-[#050505] text-white font-sans"
    >
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="fixed top-8 right-8 z-[60] w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors backdrop-blur-xl group border border-white/10"
      >
        <X className="text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Hero Section - Simulation Infographic */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-black px-6 border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#1e3a8a_0%,_transparent_70%)] opacity-20" />
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
           <EngineSimulation />
           
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1, duration: 1 }}
             className="mt-12"
           >
             <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter uppercase italic leading-none">
               Simulation <span className="text-blue-500">Builder</span>
             </h1>
             <p className="text-white/40 font-mono text-sm tracking-[0.3em] mt-4 uppercase">System Simulation Core v4.0</p>
           </motion.div>
        </div>
      </section>

      {/* Deep Dive & Showcase Section */}
      <section className="py-16 bg-black px-6 border-t border-white/5 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />
         
         <div className="container mx-auto max-w-[1400px]">
            {/* Redesigned Problem/Strategy Layout */}
            <div className="relative mb-32">
               <div className="flex flex-col gap-16">
                  {/* Problem - Left Aligned, Bold */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                     <div className="lg:col-span-1">
                        <div className="text-[10px] font-black text-blue-500/40 font-mono rotate-90 origin-left mt-2 whitespace-nowrap">STATUS: CRITICAL</div>
                     </div>
                     <div className="lg:col-span-7 bg-white/5 p-10 rounded-[3.5rem] border border-white/10 relative group">
                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-black border border-white/20 rounded-2xl flex items-center justify-center font-display italic font-black text-white/40">01</div>
                        <h3 className="text-sm font-black text-white/30 uppercase tracking-[0.2em] mb-6 font-mono">The Core Challenge</h3>
                        <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter italic mb-6 leading-none text-white">
                           Data <br /> 
                           <span className="text-white/10 uppercase not-italic">Entropy</span>
                        </h2>
                        <div className="max-w-xl">
                           <p className="text-white/60 text-xl leading-relaxed font-medium italic">
                              Users in high-stress simulation environments were drowning in raw data streams. The critical path was obscured by "Dashboard Fatigue"—a state where every metric has equal visual weight, causing catastrophic delay in decision-making.
                           </p>
                        </div>
                        <div className="absolute bottom-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                           <Brain size={120} weight="thin" />
                        </div>
                     </div>
                  </div>

                  {/* Strategy - Right Aligned, Sleek */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                     <div className="lg:col-start-5 lg:col-span-7 bg-blue-500/5 p-10 rounded-[3.5rem] border border-blue-500/20 relative group overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50" />
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-black border border-blue-500/40 rounded-2xl flex items-center justify-center font-display italic font-black text-blue-500/60">02</div>
                        <h3 className="text-sm font-black text-blue-500/40 uppercase tracking-[0.2em] mb-6 font-mono">Strategic Response</h3>
                        <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter italic mb-6 leading-none text-blue-500">
                           Neural <br /> 
                           <span className="text-blue-500/20 uppercase not-italic">Layering</span>
                        </h2>
                        <div className="max-w-xl">
                           <p className="text-white/60 text-xl leading-relaxed font-medium italic">
                              We engineered a "Volatile-First" architecture. Secondary metrics are suppressed into subconscious layers, surfacing only when anomalous patterns are detected by the neural engine.
                           </p>
                        </div>
                     </div>
                     <div className="lg:col-span-1 hidden lg:block">
                        <div className="text-[10px] font-black text-blue-500/40 font-mono -rotate-90 origin-right mt-2 whitespace-nowrap">MODE: OPTIMIZED</div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
               {[
                 { title: "Dashboard", img: '/regenerated_image_1777374643621.png' },
                 { title: "Assets", img: '/regenerated_image_1777374645455.png' },
                 { title: "Flow", img: '/regenerated_image_1777375908966.png' },
                 { title: "System", img: '/regenerated_image_1777375910936.png' },
                 { title: "Analysis", img: '/regenerated_image_1777375912742.png' },
                 { title: "Data", img: '/regenerated_image_1777375914368.png' },
                 { title: "Control", img: '/regenerated_image_1777375915338.png' },
                 { title: "Output", img: '/regenerated_image_1777375917179.png' }
               ].map((screen, i) => (
                 <div key={i} className={`group relative ${i < 6 ? 'lg:col-span-2' : i === 6 ? 'lg:col-start-2 lg:col-span-2' : 'lg:col-start-4 lg:col-span-2'}`}>
                   <div className="aspect-[16/9] border border-white/10 overflow-hidden relative shadow-2xl scale-75">
                      <img 
                        src={screen.img} 
                        alt={screen.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      />
                   </div>
                 </div>
               ))}
            </div>
         </div>
       </section>

      {/* Footer */}
      <footer className="py-20 text-center bg-black border-t border-white/5 px-6">
         <h3 className="text-4xl font-display font-black mb-12 uppercase italic tracking-tighter">Exploration Concluded</h3>
         <button 
           onClick={onClose}
           className="px-12 py-5 bg-white text-black rounded-full font-black uppercase tracking-widest text-xs hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-white/10"
         >
           Exit Showcase
         </button>
      </footer>
    </motion.div>
  );
}

function EngineSimulation() {
  return (
    <div className="relative w-full max-w-sm mx-auto aspect-square flex items-center justify-center">
      {/* 3D Engine Core Container */}
      <div className="relative w-64 h-64 flex items-center justify-center">
        
        {/* Outer Circular Guard */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border border-white/10 rounded-full border-dashed"
        />

        {/* Central Core (Cylinder Look) */}
        <div className="relative w-32 h-48 bg-white/5 border-2 border-white/20 rounded-xl overflow-hidden backdrop-blur-2xl">
           {/* Animated Internal Liquid/Energy */}
           <motion.div 
             animate={{ y: ["100%", "-100%"] }}
             transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
             className="absolute inset-x-0 h-1/2 bg-gradient-to-t from-blue-500/40 to-transparent blur-md"
           />
           
           {/* Internal Grid Line */}
           <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:100%_4px]" />
           
           {/* Core Symbol */}
           <div className="absolute inset-0 flex items-center justify-center">
              <Cpu className="text-blue-500 animate-pulse" size={32} />
           </div>
        </div>

        {/* Pistons (Top, Bottom, Left, Right) */}
        {[
          { pos: "top-[-40px] left-1/2 -translate-x-1/2", delay: 0 },
          { pos: "bottom-[-40px] left-1/2 -translate-x-1/2", delay: 0.5 },
          { pos: "left-[-40px] top-1/2 -translate-y-1/2 rotate-90", delay: 1 },
          { pos: "right-[-40px] top-1/2 -translate-y-1/2 -rotate-90", delay: 1.5 },
        ].map((piston, i) => (
          <motion.div
            key={i}
            animate={{ scaleY: [1, 1.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: piston.delay, ease: "easeInOut" }}
            className={`absolute ${piston.pos} w-8 h-16 bg-white/10 border border-white/20 rounded-lg origin-bottom`}
          >
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-sm mt-2 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
          </motion.div>
        ))}

        {/* Connecting Rods/Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
           <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white" strokeWidth="1" />
           <line x1="0" y1="50%" x2="100%" y2="50%" stroke="white" strokeWidth="1" />
           <circle cx="50%" cy="50%" r="60" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
        </svg>

        {/* Orbiting Particles */}
        {[...Array(6)].map((_, i) => (
           <motion.div
             key={i}
             animate={{ rotate: 360 }}
             transition={{ duration: 5 + i, repeat: Infinity, ease: "linear" }}
             className="absolute w-full h-full"
           >
              <div 
                className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(59,130,246,1)]"
                style={{ marginLeft: `${40 + i * 10}%`, marginTop: '50%' }}
              />
           </motion.div>
        ))}
      </div>

      {/* Floating Specs HUD */}
      <div className="absolute top-0 right-[-100px] text-left hidden md:block">
         <div className="space-y-4">
            <div className="border-l-2 border-blue-500 pl-4">
               <p className="text-[10px] font-black text-white/40 uppercase">RPM</p>
               <motion.p 
                 animate={{ opacity: [1, 0.5, 1] }}
                 transition={{ duration: 0.2, repeat: Infinity }}
                 className="text-xl font-mono"
               >
                 48.2K
               </motion.p>
            </div>
            <div className="border-l-2 border-white/10 pl-4">
               <p className="text-[10px] font-black text-white/40 uppercase">TEMP</p>
               <p className="text-xl font-mono text-blue-500">OPTIMAL</p>
            </div>
         </div>
      </div>
    </div>
  );
}

function HeroInfo({ label, value }: { label: string, value: string }) {
  return (
    <div>
      <p className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-1">{label}</p>
      <p className="font-bold text-xs uppercase tracking-tighter text-white">{value}</p>
    </div>
  );
}
