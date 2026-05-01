import React from 'react';
import { motion } from 'motion/react';
import { X, Smartphone, Printer, Cloud, Search, Shield, Zap, ArrowRight, Target, Brain, CheckCircle2, Layout, Smartphone as Phone, Users, LucideIcon, Share2, FileText, Camera } from 'lucide-react';

interface ProjectCaseStudyMobileProps {
  onClose: () => void;
}

export default function ProjectCaseStudyMobile({ onClose }: ProjectCaseStudyMobileProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-[#f8fafc] text-neutral-900 font-sans"
    >
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="fixed top-8 right-8 z-[60] w-12 h-12 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors backdrop-blur-xl group"
      >
        <X className="text-black group-hover:scale-110 transition-transform" />
      </button>

      {/* The Challenge */}
      <section className="py-32 bg-white px-6">
        <div className="container mx-auto max-w-6xl">
           <div className="grid md:grid-cols-2 gap-24">
              <div>
                 <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 text-indigo-600">THE CHALLENGE</p>
                 <h2 className="text-5xl font-display font-black tracking-tighter mb-8 leading-none italic">Printers are complex. <br />Cloud shouldn't be.</h2>
              </div>
              <div className="space-y-8">
                 <p className="text-xl text-neutral-500 font-medium leading-relaxed italic border-l-4 border-indigo-600 pl-8">
                    Existing printer apps are often bloated with technical jargon and fragmented workflows. The goal was to build a system that feels like a simple utility—powering printing from anywhere, anytime.
                 </p>
                 <div className="grid grid-cols-2 gap-8 pt-8">
                    <Objective title="Simplicity" desc="Zero-friction document selection & print." />
                    <Objective title="Reliability" desc="Continuous sync across all devices." />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* System Structure */}
      <section className="py-32 bg-neutral-50 px-6 font-sans">
        <div className="container mx-auto max-w-6xl">
           <div className="text-center mb-24">
              <h2 className="text-5xl font-display font-black tracking-tighter">System Hierarchy Mapping</h2>
           </div>
           
           <div className="flex flex-col lg:flex-row items-center justify-center gap-12 relative lg:min-h-[500px]">
               {/* CLOUD CORE - Left */}
               <div className="flex-1 w-full order-2 lg:order-1">
                  <div className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-neutral-100 shadow-xl lg:text-right relative">
                     <div className="bg-blue-600 text-white px-6 py-2 rounded-lg inline-block font-black uppercase tracking-widest text-[10px] mb-8">CLOUD CORE</div>
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                        {['Cloud File Picker', 'Recent Documents', 'Shared with Me', 'Favorites (Storage)', 'Auto-sync Folders', 'Offline Access'].map(item => (
                           <div key={item} className="p-4 bg-neutral-50 rounded-2xl text-sm font-bold text-neutral-600 italic hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-default border border-transparent hover:border-blue-100">{item}</div>
                        ))}
                     </div>
                  </div>
               </div>

               {/* APP ROOT - Center */}
               <div className="shrink-0 z-10 order-1 lg:order-2 flex flex-col items-center">
                  <div className="bg-neutral-900 text-white px-10 py-6 rounded-2xl font-black uppercase tracking-widest text-sm shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-4 border-white">APP ROOT</div>
                  {/* Decorative Lines for desktop */}
                  <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-px bg-neutral-200 -z-10" />
               </div>

               {/* PRINT ENGINE - Right */}
               <div className="flex-1 w-full order-3">
                  <div className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-neutral-100 shadow-xl relative">
                     <div className="bg-neutral-800 text-white px-6 py-2 rounded-lg inline-block font-black uppercase tracking-widest text-[10px] mb-8">PRINT ENGINE</div>
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                        {['Discovery (Bluetooth/Wi-Fi)', 'Job Queue Management', 'Ink & Paper Status', 'Advanced Settings (N-up)', 'Subscription (EcoTalk)', 'Maintenance Dashboard'].map(item => (
                           <div key={item} className="p-4 bg-neutral-50 rounded-2xl text-sm font-bold text-neutral-600 italic hover:bg-neutral-900 hover:text-white transition-colors cursor-default border border-transparent hover:border-neutral-800">{item}</div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
        </div>
      </section>

      {/* App Flow Pipeline */}
      <section className="py-32 bg-white px-6 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
           <div className="text-center mb-24">
              <h2 className="text-6xl font-display font-black tracking-tighter">The Mobile Flow Pipeline</h2>
           </div>
           
           <div className="relative p-12 bg-neutral-50 rounded-[4rem] border border-neutral-100">
              <div className="flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
                 <PipelineNode label="Discovery" sub="Auto-detecting printers" icon={Printer} color="bg-blue-100 text-blue-600" />
                 <ArrowRight className="text-neutral-200 hidden md:block" />
                 <PipelineNode label="Selection" sub="Cloud document bridge" icon={Cloud} color="bg-indigo-100 text-indigo-600" />
                 <ArrowRight className="text-neutral-200 hidden md:block" />
                 <PipelineNode label="Processing" sub="Optimization & Conversion" icon={Brain} color="bg-purple-100 text-purple-600" />
                 <ArrowRight className="text-neutral-200 hidden md:block" />
                 <PipelineNode label="Execution" sub="Real-time status tracking" icon={Zap} color="bg-green-100 text-green-600" />
              </div>
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-neutral-100 -translate-y-1/2 hidden md:block" />
           </div>
        </div>
      </section>

      {/* Competitive Landscape */}
      <section className="py-32 bg-[#1e293b] text-white px-6 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
           <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-60">COMPETITOR ANALYSIS</p>
           <h2 className="text-6xl font-display font-black tracking-tighter mb-20">The Market Landscape</h2>
           
           <div className="grid lg:grid-cols-2 gap-20">
              <div>
                 <p className="text-xs font-black uppercase tracking-widest mb-8 opacity-40">ANALYZED APPS</p>
                 <div className="flex gap-4 mb-12">
                    {['HP Smart', 'Canon PRINT', 'Brother iPrint'].map(tool => (
                       <div key={tool} className="px-8 py-4 bg-white/10 rounded-xl font-bold italic tracking-tight">{tool}</div>
                    ))}
                 </div>
                 
                 <div className="bg-white p-12 rounded-[3.5rem] text-neutral-900">
                    <p className="text-blue-600 font-black text-[10px] uppercase tracking-widest mb-4">OPPORTUNITY</p>
                    <h4 className="text-4xl font-display font-black tracking-tighter leading-none mb-6">Moving from local utility to a cloud-first intelligence hub.</h4>
                 </div>
              </div>
              
              <div className="space-y-12">
                 <p className="text-xs font-black uppercase tracking-widest opacity-40">KEY FINDINGS</p>
                 <ComparisonFinding title="Heavy discovery friction" desc="Most apps fail at the very first step—detecting a printer on the same network." />
                 <ComparisonFinding title="No deep-cloud link" desc="Users are forced to download files to their phone before being able to print them." />
                 <ComparisonFinding title="Poor error recovery" desc="A simple 'Paper Out' error often breaks the entire app flow without clear guidance." />
                 <ComparisonFinding title="Lack of subscription value" desc="Ink subscription services are often buried instead of being contextually surfaced." />
              </div>
           </div>
        </div>
      </section>

      {/* Before vs After */}
      <section className="py-32 bg-white px-6">
        <div className="container mx-auto max-w-6xl text-neutral-900 border-t-8 border-neutral-900 pt-32">
           <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 text-left">
              <div className="font-display italic">
                 <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 text-indigo-600">PARADIGM SHIFT</p>
                 <h2 className="text-7xl md:text-9xl font-black tracking-tighter leading-none uppercase">Evolution</h2>
              </div>
              <div className="max-w-md md:text-right">
                 <p className="text-lg text-neutral-400 font-medium italic leading-relaxed">
                    Moving from a utility that manages a device to an assistant that manages a <span className="text-neutral-900 font-bold">lifecycle.</span>
                 </p>
              </div>
           </div>
           
           <div className="grid md:grid-cols-2 gap-12">
              <ComparisonCard 
                type="BEFORE" 
                title="Cluttered Utility" 
                points={["Technical jargon over-use", "Hidden menus for settings", "No live print preview", "Fragmented setup flow"]}
                isBefore
              />
              <ComparisonCard 
                type="AFTER" 
                title="Intelligent Cloud" 
                points={["One-tap discovery", "Contextual cloud bridge", "Real-time visual queue", "Proactive ink replenishment"]}
              />
           </div>
        </div>
      </section>

      {/* UI Screens Section */}
      <section className="py-32 bg-white px-6 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
           <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <div className="font-display italic">
                 <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 text-indigo-600">VISUAL INTERFACE</p>
                 <h2 className="text-7xl md:text-9xl font-black tracking-tighter leading-none uppercase">UI Screens</h2>
              </div>
              <div className="max-w-md md:text-right">
                 <p className="text-lg text-neutral-400 font-medium italic leading-relaxed">
                    An immersive showcase of the <span className="text-neutral-900 font-bold">mobile ecosystem</span> through high-fidelity interface modules.
                 </p>
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12">
              {[
                { title: "Smart Dashboard", img: "/regenerated_image_1777547578338.png" },
                { title: "Cloud Storage", img: "/regenerated_image_1777547579940.png" },
                { title: "Print Config", img: "/regenerated_image_1777547581572.png" },
                { title: "Job Queue", img: "/regenerated_image_1777547583677.png" },
                { title: "Ink Analytics", img: "/regenerated_image_1777551155401.png" },
                { title: "User Profile", img: "/regenerated_image_1777551157037.png" },
                { title: "Secure Login", img: "/regenerated_image_1777551159256.png" },
                { title: "Support Hub", img: "/regenerated_image_1777551160926.png" }
              ].map((screen, i) => (
                <div key={i} className={`flex flex-col items-center ${i < 6 ? 'lg:col-span-2' : i === 6 ? 'lg:col-start-2 lg:col-span-2' : 'lg:col-start-4 lg:col-span-2'}`}>
                  <div className="w-full max-w-[200px] aspect-[9/19] bg-white rounded-[2.5rem] border-[6px] border-neutral-900 overflow-hidden shadow-2xl relative">
                    <img 
                      src={screen.img} 
                      alt={screen.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-32 bg-neutral-900 text-white px-6">
         <div className="container mx-auto max-w-6xl">
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-20 text-center">Key <br /><span className="opacity-20 italic">Learnings</span></h2>
            <div className="grid md:grid-cols-3 gap-8">
               <LearningCard icon={Zap} title="Contextual Help" desc="Users don't read manuals. Surfacing helpful tips exactly when a 'Paper Jam' occurs saved 40% in tech support calls." />
               <LearningCard icon={FileText} title="Document First" desc="People don't use the app to 'Print', they use it to 'Handle Documents'. Centering the UX around files changed everything." />
               <LearningCard icon={Cloud} title="Cloud Trust" desc="Ensuring end-to-end encryption for cloud documents was the #1 feedback request during beta testing." />
            </div>
         </div>
      </section>

      {/* Mobile Experience Showcase */}
      <section className="py-32 bg-neutral-900 px-6">
        <div className="container mx-auto max-w-6xl">
           <div className="grid md:grid-cols-2 items-end gap-12 mb-24">
              <div>
                 <p className="text-indigo-400 font-black uppercase tracking-[0.4em] text-[10px] mb-4">SYSTEM ARCHITECTURE</p>
                 <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter italic text-white uppercase leading-none">The Digital <br />Interface</h2>
              </div>
              <p className="text-white/40 text-xl font-light italic leading-relaxed max-w-md">
                 A modular design system optimized for high-velocity interaction and deep cloud integration.
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <MobileMockup title="Onboarding" desc="Biometric Linkage" />
              <MobileMockup title="Dashboard" desc="Live Print Monitoring" />
              <MobileMockup title="Cloud Connect" desc="Deep API Integrations" />
              <MobileMockup title="Settings" desc="Personalized Thresholds" />
           </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <footer className="py-32 text-center bg-white border-t border-neutral-100 px-6">
         <h3 className="text-4xl font-display font-black mb-12 text-neutral-900">Thank you for reviewing this mobile journey</h3>
         <button 
           onClick={onClose}
           className="px-12 py-5 bg-indigo-600 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-indigo-100"
         >
           Close Case Study
         </button>
      </footer>
    </motion.div>
  );
}

function HeroInfo({ label, value }: { label: string, value: string }) {
  return (
    <div>
      <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-1">{label}</p>
      <p className="font-bold text-xs uppercase tracking-tighter text-neutral-900">{value}</p>
    </div>
  );
}

function Objective({ title, desc }: { title: string, desc: string }) {
  return (
    <div>
      <h4 className="font-bold text-sm uppercase tracking-widest mb-2 italic">{title}</h4>
      <p className="text-[10px] text-neutral-400 font-bold leading-relaxed">{desc}</p>
    </div>
  );
}

function PipelineNode({ label, sub, icon: Icon, color }: { label: string, sub: string, icon: LucideIcon, color: string }) {
  return (
    <div className="flex flex-col items-center text-center max-w-[200px]">
       <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl ${color}`}>
          <Icon size={24} />
       </div>
       <h5 className="font-bold text-sm uppercase tracking-widest mb-2 text-neutral-900">{label}</h5>
       <p className="text-[10px] text-neutral-400 font-bold leading-relaxed">{sub}</p>
    </div>
  );
}

function ComparisonFinding({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="flex gap-6 items-start group">
       <div className="mt-1">
          <CheckCircle2 className="text-blue-400" size={20} />
       </div>
       <div>
          <h4 className="font-bold text-xl tracking-tight mb-2 italic group-hover:text-blue-400 transition-colors uppercase">{title}</h4>
          <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
       </div>
    </div>
  );
}

function ComparisonCard({ type, title, points, isBefore = false }: { type: 'BEFORE' | 'AFTER', title: string, points: string[], isBefore?: boolean }) {
  return (
    <div className="bg-white rounded-[3rem] p-12 md:p-16 border border-neutral-100 group hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-all duration-700 relative overflow-hidden flex flex-col justify-between h-full">
       {/* Visual element instead of image */}
       <div className={`absolute top-0 right-0 w-64 h-64 blur-[100px] rounded-full -mr-32 -mt-32 transition-all duration-1000 ${isBefore ? 'bg-red-500/10 group-hover:bg-red-500/20' : 'bg-indigo-500/10 group-hover:bg-indigo-500/20'}`} />
       
       <div className="relative z-10">
          <div className={`inline-flex items-center gap-2 px-6 py-2 rounded-full font-black uppercase tracking-[0.2em] text-[10px] mb-12 shadow-sm ${isBefore ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-indigo-50 text-indigo-600 border border-indigo-100'}`}>
             <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${isBefore ? 'bg-red-600' : 'bg-indigo-600'}`} />
             {type}
          </div>
          
          <h4 className="text-4xl md:text-5xl font-display font-black tracking-tight leading-[0.9] mb-16 text-neutral-900 uppercase italic">
            {title}
          </h4>
          
          <div className="space-y-6">
             {points.map((point, i) => (
                <div key={i} className="flex gap-6 items-start group/item">
                   <div className={`mt-1 flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 ${isBefore ? 'bg-red-50 text-red-400 group-hover/item:bg-red-100' : 'bg-indigo-50 text-indigo-600 group-hover/item:bg-indigo-100'}`}>
                      {isBefore ? <X size={20} /> : <CheckCircle2 size={20} />}
                   </div>
                   <div className="pt-2">
                      <p className="text-sm font-black uppercase tracking-widest text-neutral-400 group-hover/item:text-neutral-900 transition-colors duration-300 italic">{point}</p>
                   </div>
                </div>
             ))}
          </div>
       </div>

       <div className="mt-20 pt-8 border-t border-neutral-50 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="text-[10px] font-black tracking-widest text-neutral-300 uppercase leading-none italic">{isBefore ? "LEGACY FRICITION" : "MODERN EFFICIENCY"}</span>
          <div className={`h-1 flex-grow mx-8 rounded-full ${isBefore ? 'bg-red-100' : 'bg-indigo-100'}`} />
          <div className={`w-2 h-2 rounded-full ${isBefore ? 'bg-red-400' : 'bg-indigo-600'}`} />
       </div>
    </div>
  );
}

function LearningCard({ icon: Icon, title, desc }: { icon: LucideIcon, title: string, desc: string }) {
  return (
    <div className="p-12 rounded-[3.5rem] bg-white/5 border border-white/5 group hover:bg-white/10 transition-colors">
       <Icon className="text-blue-400 mb-8" size={32} />
       <h4 className="text-2xl font-display font-black mb-4 uppercase tracking-tighter italic">{title}</h4>
       <p className="text-white/40 text-sm leading-relaxed font-light">{desc}</p>
    </div>
  );
}

function MobileMockup({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="flex flex-col h-full bg-white/5 p-10 rounded-[3rem] border border-white/5 hover:border-indigo-400/30 hover:bg-white/10 hover:shadow-2xl transition-all duration-500 group">
       <div className="mb-12">
          <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-500">
             <Smartphone className="text-indigo-400" size={28} />
          </div>
          <h5 className="font-display font-black text-3xl uppercase tracking-tighter mb-2 text-white italic transform group-hover:skew-x-[-2deg] transition-transform">{title}</h5>
          <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em]">{desc}</p>
       </div>
       <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between opacity-20 group-hover:opacity-100 transition-opacity">
          <span className="text-[8px] font-black uppercase tracking-widest text-white/40">SYSTEM MODULE</span>
          <ArrowRight size={14} className="text-indigo-400 transform group-hover:translate-x-2 transition-transform" />
       </div>
    </div>
  );
}
