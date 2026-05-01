import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { X, TrendingUp, Users, Clock, AlertCircle, CheckCircle2, Zap, ArrowRight, Target, Search, BarChart3, Fingerprint, LucideIcon, Upload } from 'lucide-react';

interface ProjectCaseStudyProps {
  onClose: () => void;
}

export default function ProjectCaseStudy({ onClose }: ProjectCaseStudyProps) {
  const [heroImage, setHeroImage] = useState("/regenerated_image_1777478203390.png");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setHeroImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-white text-neutral-900"
    >
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="fixed top-8 right-8 z-[60] w-12 h-12 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors border border-black/5"
      >
        <X size={24} />
      </button>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 px-6 bg-white overflow-hidden perspective-[2000px]">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-neutral-50/50 -skew-x-[20deg] translate-x-1/4 z-0" />
        
        <div className="container mx-auto max-w-[1400px] relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          >
            {/* Left Column: Typography Content */}
            <div className="lg:col-span-7 pr-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="flex items-center gap-4 mb-12">
                   <div className="h-px w-12 bg-blue-600" />
                   <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400">FINTECH TRANSFORMATION</span>
                </div>

                <div className="relative mb-16">
                  <motion.h1 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[7rem] md:text-[clamp(8rem,15vw,12rem)] font-display font-black tracking-tightest leading-tight mb-6"
                  >
                    ASTRA <br />
                    <span className="text-neutral-100 italic stroke-[1px] stroke-neutral-900 [-webkit-text-stroke:1px_#000]">IDENTITY</span>
                  </motion.h1>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl w-full">
                  <motion.div 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-6"
                   >
                    <p className="text-2xl font-light leading-snug text-neutral-800 italic">
                      "Redesigning the threshold of digital trust through seamless <span className="text-blue-600 font-medium">AI-powered</span> onboarding flow."
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['User Experience', 'Visual Identity', 'AI Integration'].map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-neutral-50 border border-neutral-100 text-[8px] font-black uppercase tracking-widest text-neutral-500">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col gap-8 pt-2"
                  >
                    <div className="flex items-center gap-12">
                      <Metric value="35%" label="Conversion" trend="up" />
                      <Metric value="28%" label="Drop-offs" trend="down" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: 3D Visual Component */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <motion.div 
                initial={{ rotateY: 30, rotateX: 10, opacity: 0, scale: 0.9, x: -50 }}
                animate={{ rotateY: 15, rotateX: 5, opacity: 1, scale: 1, x: 0 }}
                whileHover={{ rotateY: 5, rotateX: 0, scale: 1.02 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{ transformStyle: 'preserve-3d' }}
                className="relative z-10 w-full"
              >
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-[0_80px_100px_-20px_rgba(0,0,0,0.2)] group bg-neutral-100 cursor-pointer"
                  style={{ transform: 'translateZ(50px)' }}
                >
                   <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleImageUpload} 
                    className="hidden" 
                    accept="image/*"
                   />
                   <img 
                    src={heroImage} 
                    alt="Astra Identity Onboarding" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-600/5 mix-blend-multiply opacity-40" />
                </div>

                {/* Floating Elements with real Z-depth */}
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  style={{ transform: 'translateZ(150px)' }}
                  className="absolute -bottom-10 -right-10 bg-neutral-900 border border-white/10 text-white p-10 rounded-[2.5rem] shadow-2xl max-w-[280px] z-30"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                       <Fingerprint size={20} />
                    </div>
                    <div>
                       <p className="text-[8px] font-black uppercase tracking-widest opacity-40">System Status</p>
                       <p className="text-xs font-bold font-display italic text-blue-400">SECURE_ONBOARD</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                     {[1,2,3,4].map(i => (
                        <div key={i} className="w-1 h-1 rounded-full bg-blue-600" />
                     ))}
                  </div>
                </motion.div>

                {/* Shadow underneath */}
                <div className="absolute -bottom-10 inset-x-10 h-10 bg-black/10 blur-3xl opacity-50 -z-10" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-neutral-50 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-6xl font-display font-black tracking-tighter mb-2 opacity-10">THE</h2>
          <h3 className="text-5xl font-display font-black tracking-tighter mb-16 mt-[-40px]">PROBLEM</h3>
          
          <div className="grid md:grid-cols-3 gap-12 text-left">
            <IconBox 
              icon={Users} 
              title="High Drop-offs" 
              desc="Users leaving during verification stage due to complexity." 
            />
            <IconBox 
              icon={TrendingUp} 
              title="Increased Cost" 
              desc="Higher acquisition expenses per verified user." 
            />
            <IconBox 
              icon={AlertCircle} 
              title="Poor Experience" 
              desc="Frustrated first-time users losing trust in the platform." 
            />
          </div>
        </div>
      </section>

      {/* Objective Section */}
      <section className="py-24 bg-white px-6 text-center">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-6xl font-display font-black tracking-tighter mb-2 text-blue-600/5 uppercase italic"
          >
            THE
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-display font-black tracking-tighter mb-16 mt-[-40px] uppercase"
          >
            OBJECTIVE
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-12 text-left">
            <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-100 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <TrendingUp size={20} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Increase Completion</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">Boost onboarding completion rate across demographics.</p>
              </div>
            </div>
            
            <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-100 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <Zap size={20} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Reduce Friction</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">Simplify KYC flow steps and required fields.</p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-100 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <Target size={20} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Build Trust</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">Improve brand trust through clear messaging.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Structure / IA Diagram */}
      <section className="py-24 bg-white px-6 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
           <div className="text-center mb-32">
              <h2 className="text-6xl font-display font-black tracking-tighter text-neutral-900 uppercase">Information <br /><span className="opacity-10 italic">Architecture</span></h2>
           </div>
           
           <div className="relative max-w-5xl mx-auto">
              {/* Start Node */}
              <div className="flex justify-center mb-20 relative z-10">
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="bg-neutral-900 text-white p-8 rounded-2xl shadow-2xl relative group"
                 >
                    <div className="text-[10px] font-black opacity-30 text-center mb-2 tracking-[0.3em]">ENTRY_POINT</div>
                    <div className="font-display font-black text-2xl uppercase tracking-tighter">Root Onboarding</div>
                    <div className="absolute -bottom-10 left-1/2 w-[2px] h-10 bg-neutral-200" />
                 </motion.div>
              </div>

              {/* Connecting Lines SVG */}
              <div className="absolute inset-0 pointer-events-none hidden md:block">
                 <svg width="100%" height="100%" className="opacity-[0.05]">
                    <line x1="50%" y1="120" x2="50%" y2="180" stroke="black" strokeWidth="2" strokeDasharray="4" />
                    <path d="M 512 180 L 256 180 L 256 240" fill="none" stroke="black" strokeWidth="2" />
                    <path d="M 512 180 L 768 180 L 768 240" fill="none" stroke="black" strokeWidth="2" />
                 </svg>
              </div>

              <div className="grid md:grid-cols-2 gap-12 lg:gap-20 relative z-10">
                 {/* Identity Proofing Branch */}
                 <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                 >
                    <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg inline-block mb-4">
                       <div className="text-[8px] font-black opacity-40 mb-1 tracking-widest">FRONT_END</div>
                       <h4 className="font-display font-black text-lg uppercase">Identity Proofing</h4>
                    </div>
                    
                    <div className="grid gap-3">
                       {[
                          { id: 'IA_01', label: 'PAN Verification', sub: 'OCR + API Validation' },
                          { id: 'IA_02', label: 'Aadhar e-KYC', sub: 'OTP + XML Data' },
                          { id: 'IA_03', label: 'Liveness Check', sub: 'Bio-metirc Matching' },
                          { id: 'IA_04', label: 'Form 60 Flow', sub: 'Manual Override' }
                       ].map((item, idx) => (
                          <div key={item.id} className="group flex items-center gap-4 p-4 bg-neutral-50 rounded-xl border border-neutral-100 hover:border-blue-200 transition-all cursor-default">
                             <div className="w-8 h-8 rounded bg-white border border-neutral-100 flex items-center justify-center text-[8px] font-mono font-bold text-neutral-300 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">{idx + 1}</div>
                             <div>
                                <div className="text-sm font-black uppercase tracking-tight text-neutral-800">{item.label}</div>
                                <div className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest italic">{item.sub}</div>
                             </div>
                          </div>
                       ))}
                    </div>
                 </motion.div>

                 {/* System Verification Branch */}
                 <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                 >
                    <div className="bg-neutral-900 text-white p-6 rounded-2xl shadow-lg inline-block mb-4">
                       <div className="text-[8px] font-black opacity-40 mb-1 tracking-widest">BACK_END</div>
                       <h4 className="font-display font-black text-lg uppercase">Verification Engine</h4>
                    </div>

                    <div className="grid gap-3">
                       {[
                          { id: 'VE_01', label: 'Fraud Scoring', sub: 'Risk Analysis' },
                          { id: 'VE_02', label: 'Sanction Check', sub: 'Global AML Lists' },
                          { id: 'VE_03', label: 'Risk Profiling', sub: 'User Segmenting' },
                          { id: 'VE_04', label: 'Auto-Approval', sub: 'Decisioning logic' }
                       ].map((item, idx) => (
                          <div key={item.id} className="group flex items-center gap-4 p-4 bg-neutral-50 rounded-xl border border-neutral-100 hover:border-neutral-900 transition-all cursor-default">
                             <div className="w-8 h-8 rounded bg-white border border-neutral-100 flex items-center justify-center text-[8px] font-mono font-bold text-neutral-300 group-hover:text-black group-hover:bg-neutral-100 transition-colors uppercase">{idx + 1}</div>
                             <div>
                                <div className="text-sm font-black uppercase tracking-tight text-neutral-800">{item.label}</div>
                                <div className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest italic">{item.sub}</div>
                             </div>
                          </div>
                       ))}
                    </div>
                 </motion.div>
              </div>

              {/* End Node */}
              <div className="flex justify-center mt-20 relative z-10">
                 <div className="absolute top-[-80px] left-1/2 w-64 h-20 -translate-x-1/2 hidden md:block">
                    <svg width="100%" height="100%" className="opacity-[0.05]">
                       <path d="M 0 0 L 0 40 L 128 40 L 128 80" fill="none" stroke="black" strokeWidth="2" transform="translate(0, 0)" />
                       <path d="M 256 0 L 256 40 L 128 40 L 128 80" fill="none" stroke="black" strokeWidth="2" />
                    </svg>
                 </div>
                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="p-1 w-full max-w-sm bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl"
                 >
                    <div className="bg-white p-6 rounded-xl flex items-center justify-between">
                       <div>
                          <div className="text-[8px] font-black text-blue-600 mb-1 tracking-widest">FINAL_OUTCOME</div>
                          <div className="font-display font-black text-xl uppercase italic">Activation</div>
                       </div>
                       <CheckCircle2 className="text-green-500" size={32} />
                    </div>
                 </motion.div>
              </div>
           </div>
        </div>
      </section>

      {/* Intelligence Pipeline */}
      <section className="py-24 bg-white px-6 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
           <div className="text-center mb-24">
              <h2 className="text-6xl font-display font-black tracking-tighter">Automated KYC Pipeline</h2>
           </div>
           
           <div className="relative p-12 bg-neutral-50 rounded-[4rem] border border-neutral-100">
              <div className="flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
                 <PipelineNode label="Intake" sub="Document OCR Extraction" icon={Search} color="bg-blue-100 text-blue-600" />
                 <ArrowRight className="text-neutral-200 hidden md:block" />
                 <PipelineNode label="Validation" sub="Real-time External API hits" icon={Fingerprint} color="bg-indigo-100 text-indigo-600" />
                 <ArrowRight className="text-neutral-200 hidden md:block" />
                 <PipelineNode label="Risk Assessment" sub="AI Fraud detection layering" icon={AlertCircle} color="bg-red-100 text-red-600" />
                 <ArrowRight className="text-neutral-200 hidden md:block" />
                 <PipelineNode label="Decision" sub="Instant Virtual Account setup" icon={CheckCircle2} color="bg-green-100 text-green-600" />
              </div>
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-neutral-100 -translate-y-1/2 hidden md:block" />
           </div>
        </div>
      </section>

      {/* Before vs After */}
      <section className="py-24 bg-neutral-50 px-6">
        <div className="container mx-auto max-w-5xl">
           <div className="text-center mb-24">
              <h2 className="text-6xl font-display font-black tracking-tighter text-neutral-900 uppercase">The <br /><span className="opacity-10 italic">Transformation</span></h2>
           </div>
           
           <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
                 <div className="w-16 h-16 rounded-full bg-white shadow-xl border border-neutral-100 flex items-center justify-center font-display font-black text-xs italic text-blue-600">VS</div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 relative">
                 {/* Before Card */}
                 <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="bg-white p-12 rounded-[3rem] border border-neutral-100"
                 >
                    <div className="text-[10px] font-black text-red-600 mb-8 tracking-widest bg-red-50 inline-block px-4 py-1 rounded">LEGACY_STATE</div>
                    <h4 className="text-3xl font-display font-black tracking-tighter mb-8 leading-tight">12-Minute Manual <br />Verification</h4>
                    <div className="space-y-6">
                       {[
                          "Manual document uploads by users",
                          "Vague progress and processing updates",
                          "No real-time feedback on errors",
                          "High abandonment at selfie step"
                       ].map((point, i) => (
                          <div key={i} className="flex gap-4">
                             <X size={16} className="text-red-300 shrink-0 mt-1" />
                             <p className="text-sm font-bold text-neutral-500 uppercase tracking-tight italic">{point}</p>
                          </div>
                       ))}
                    </div>
                 </motion.div>

                 {/* After Card */}
                 <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="bg-neutral-900 p-12 rounded-[3rem] text-white"
                 >
                    <div className="text-[10px] font-black text-blue-400 mb-8 tracking-widest bg-white/5 inline-block px-4 py-1 rounded">OPTIMIZED_FLOW</div>
                    <h4 className="text-3xl font-display font-black tracking-tighter mb-8 leading-tight">Sub 3-Minute <br />Auto-Onboarding</h4>
                    <div className="space-y-6">
                       {[
                          "Single-touch DigiLocker flow",
                          "Real-time state validation logic",
                          "Gamified progress markers",
                          "One-shot Liveness verification"
                       ].map((point, i) => (
                          <div key={i} className="flex gap-4">
                             <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-1" />
                             <p className="text-sm font-bold text-white/60 uppercase tracking-tight italic">{point}</p>
                          </div>
                       ))}
                    </div>
                 </motion.div>
              </div>
           </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-32 bg-white text-neutral-900 px-6 border-y border-neutral-100 relative overflow-hidden">
         <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
               <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
               >
                  <h2 className="text-[12rem] font-display font-black tracking-tightest leading-none text-neutral-50 italic absolute -top-20 -left-10 select-none pointer-events-none z-0">07</h2>
                  <div className="relative z-10">
                    <h3 className="text-7xl font-display font-black tracking-tighter mb-12 leading-tight uppercase">Critical <br /><span className="text-blue-600">Insights</span></h3>
                    <p className="text-2xl font-light text-neutral-500 max-w-md leading-snug">
                      Through intensive user testing and data analysis, we identified three core pillars that defined the redesign strategy.
                    </p>
                  </div>
               </motion.div>
               
               <div className="space-y-12">
                  {[
                    { title: "Context over Speed", desc: "Users don't mind taking time if they understand why their data is being used and how it secures their account." },
                    { title: "Human Errors", desc: "Most drop-offs are due to poor lighting or camera angles. Proactive tips during liveness check improved success by 25%." },
                    { title: "Regional Focus", desc: "Fintech terminology is complex. Using regional language translations for key identifiers drastically reduced confusion." }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="group border-b border-neutral-100 pb-12 last:border-0"
                    >
                       <div className="text-[10px] font-black text-blue-600 mb-4 tracking-widest bg-blue-50 inline-block px-3 py-1 rounded">INSIGHT_0{idx + 1}</div>
                       <h4 className="text-3xl font-display font-black tracking-tight mb-4 uppercase italic transition-colors group-hover:text-blue-600">{item.title}</h4>
                       <p className="text-neutral-500 leading-relaxed max-w-xl">{item.desc}</p>
                    </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Research Section */}
      <section className="py-24 bg-neutral-900 text-white px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-4 text-center">RESEARCH <span className="opacity-30">INSIGHTS</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/5 p-10 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Search className="text-blue-400" /> Research Methods
              </h3>
              <div className="space-y-4">
                {[
                  '5 User interviews with recent app users',
                  'App reviews analysis (200+ reviews)',
                  'Competitor study (5 leading fintech apps)'
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 text-neutral-400">
                    <CheckCircle2 size={18} className="text-blue-400 shrink-0 mt-1" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-10 rounded-3xl text-neutral-900">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Target className="text-blue-600" /> Key Findings
              </h3>
              <ul className="space-y-4">
                {[
                  "Users don't trust apps with sensitive data",
                  "Too many steps create fatigue",
                  "No clarity on process duration",
                  "Errors cause frustration and abandonment"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-neutral-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* User Persona */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-20 text-center"
          >
            USER <span className="opacity-10 italic">PERSONA</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-50 rounded-[3rem] p-12 lg:p-20 shadow-sm border border-neutral-100"
          >
          <div className="flex flex-col md:flex-row gap-16 items-center md:items-start text-center md:text-left">
              <div className="flex-grow order-2 md:order-1">
                <div className="mb-10">
                  <h3 className="text-4xl font-bold mb-2">Rahul Sharma</h3>
                  <p className="text-neutral-400 uppercase tracking-widest text-sm font-bold">28 Years Old • Software Engineer • Pune</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-12 text-left">
                  <div>
                    <h4 className="text-xs font-black uppercase text-neutral-300 mb-6 tracking-widest">Needs</h4>
                    <ul className="space-y-4">
                       <li className="flex items-start gap-3 text-sm font-medium">
                         <span className="text-blue-600 font-bold">+</span>
                         <span>Wants quick and seamless onboarding</span>
                       </li>
                       <li className="flex items-start gap-3 text-sm font-medium">
                         <span className="text-blue-600 font-bold">+</span>
                         <span>Values data transparency and security</span>
                       </li>
                    </ul>
                  </div>
                  <div>
                     <h4 className="text-xs font-black uppercase text-neutral-300 mb-6 tracking-widest">Wants</h4>
                     <ul className="space-y-4 font-medium">
                        <li className="flex items-start gap-3 text-sm">
                          <span className="text-blue-600 font-bold">+</span>
                          <span>Prefers minimal, high-utility interfaces</span>
                        </li>
                     </ul>
                  </div>
                </div>
              </div>
              <div className="w-48 h-48 rounded-[2rem] overflow-hidden rotate-3 shadow-xl shrink-0 order-1 md:order-2">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Competitor Analysis */}
      <section className="py-24 bg-neutral-50 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-4 uppercase">Competitor <br /><span className="opacity-20 italic">Analysis</span></h2>
            <p className="text-neutral-500 max-w-2xl mx-auto">Analyzed 5 leading fintech apps to understand industry best practices and identify opportunities for differentiation.</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-neutral-200">
                  <th className="py-6 px-4 font-black uppercase tracking-tighter text-sm">App</th>
                  <th className="py-6 px-4 font-black uppercase tracking-tighter text-sm">Steps</th>
                  <th className="py-6 px-4 font-black uppercase tracking-tighter text-sm">Time</th>
                  <th className="py-6 px-4 font-black uppercase tracking-tighter text-sm">Progress Bar</th>
                  <th className="py-6 px-4 font-black uppercase tracking-tighter text-sm">Trust Signals</th>
                  <th className="py-6 px-4 font-black uppercase tracking-tighter text-sm">Key Insight</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {[
                  { name: 'Paytm', steps: '7', time: '4-5 min', progress: true, trust: true, insight: 'Good progress indicator but weak trust messaging' },
                  { name: 'PhonePe', steps: '6', time: '3-4 min', progress: true, trust: true, insight: 'Best trust signals, but still too many steps' },
                  { name: 'Google Pay', steps: '4', time: '2-3 min', progress: false, trust: true, insight: 'Fastest but lacks transparency and guidance' },
                  { name: 'CRED', steps: '8', time: '5-6 min', progress: true, trust: true, insight: 'Excellent UI but too long, exclusive feeling' },
                  { name: 'Jupiter', steps: '6', time: '4 min', progress: true, trust: true, insight: 'Modern UI with good trust elements' },
                  { name: 'FinX (Our Solution)', steps: '5', time: '2-3 min', progress: true, trust: true, insight: 'Optimal balance of speed, trust, and clarity', highlight: true }
                ].map((app, i) => (
                  <tr key={i} className={`group hover:bg-white transition-colors ${app.highlight ? 'bg-blue-50/50' : ''}`}>
                    <td className="py-6 px-4 font-bold">{app.name}</td>
                    <td className="py-6 px-4 text-neutral-500">{app.steps}</td>
                    <td className="py-6 px-4 text-neutral-500">{app.time}</td>
                    <td className="py-6 px-4">{app.progress ? <CheckCircle2 className="text-green-500" size={18} /> : <X className="text-red-400" size={18} />}</td>
                    <td className="py-6 px-4">{app.trust ? <CheckCircle2 className="text-green-500" size={18} /> : <X className="text-red-400" size={18} />}</td>
                    <td className="py-6 px-4 text-sm text-neutral-400">{app.insight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 text-center border-t border-neutral-100 pt-12">
            <div>
              <p className="text-xs font-black uppercase text-neutral-300 mb-1">Industry Average</p>
              <p className="font-bold">6.2 steps, 4.2 minutes</p>
            </div>
            <div>
              <p className="text-xs font-black uppercase text-neutral-300 mb-1">Our Target</p>
              <p className="font-bold text-blue-600">5 steps, 2-3 minutes</p>
            </div>
            <div>
              <p className="text-xs font-black uppercase text-neutral-300 mb-1">Improvement</p>
              <p className="font-bold text-green-500">19% fewer steps, 40% faster</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Breakdown */}
      <section className="py-24 bg-neutral-900 text-white px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-20">Problem <br /><span className="opacity-20 italic">Breakdown</span></h2>
          <div className="space-y-16">
            {[
              { id: '01', title: 'Lack of Transparency', desc: 'Users didn\'t understand why data was needed or how it would be used' },
              { id: '02', title: 'Cognitive Overload', desc: 'Too many steps and fields overwhelmed users and caused fatigue' },
              { id: '03', title: 'Weak Error Handling', desc: 'Poor guidance and unclear messages when errors occurred' },
              { id: '04', title: 'No Progress Visibility', desc: 'Users didn\'t know how many steps remained in the process' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="text-5xl font-black mb-4 group-hover:text-blue-500 transition-colors opacity-10 group-hover:opacity-100">{item.id}</div>
                <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                <p className="text-neutral-400 text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Journey Mapping */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="container mx-auto max-w-6xl">
           <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-4 uppercase">User Journey <br /><span className="opacity-10 italic">Mapping</span></h2>
            <p className="text-neutral-500">Mapped the complete user journey to identify pain points, emotions, and opportunities at each touchpoint.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { stage: 'Awareness', action: 'Downloads app, opens', emotion: 'Curious but cautious', thought: 'Is this trustworthy?', pain: 'Trust concerns', color: 'bg-red-50' },
              { stage: 'Engagement', action: 'Clicks "Get Started"', emotion: 'Hopeful, slightly anxious', thought: 'How long will this take?', pain: 'Unclear duration', color: 'bg-blue-50' },
              { stage: 'Input', action: 'Enters information', emotion: 'Frustrated, confused', thought: 'What if I make a mistake?', pain: 'Error anxiety', color: 'bg-yellow-50' },
              { stage: 'Verification', action: 'Takes selfie, submits', emotion: 'Cautiously optimistic', thought: 'Almost done!', pain: 'Camera quality issues', color: 'bg-blue-50' },
              { stage: 'Success', action: 'Starts exploring app', emotion: 'Relieved, happy', thought: 'That was easier than expected!', pain: 'N/A', color: 'bg-green-50' }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${step.color} p-6 rounded-3xl border border-neutral-100 flex flex-col`}
              >
                <div className="text-xs font-black uppercase text-neutral-400 mb-6">{step.stage}</div>
                <div className="space-y-6 flex-grow">
                  <div>
                    <h5 className="text-[10px] font-black uppercase text-neutral-300 mb-1">Action</h5>
                    <p className="text-xs font-bold leading-tight">{step.action}</p>
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black uppercase text-neutral-300 mb-1">Emotion</h5>
                    <p className="text-xs">{step.emotion}</p>
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black uppercase text-neutral-300 mb-1">Thought</h5>
                    <p className="text-xs italic">"{step.thought}"</p>
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black uppercase text-neutral-300 mb-1">Pain Point</h5>
                    <p className="text-xs text-red-500 font-bold">{step.pain}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-10 bg-neutral-50 rounded-3xl">
             <div className="flex justify-between items-center mb-8">
               <h4 className="font-bold text-sm uppercase tracking-widest">Emotional Journey</h4>
               <div className="flex gap-4 text-[10px] font-bold uppercase text-neutral-400">
                 <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500" /> Positive</span>
                 <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500" /> Neutral</span>
                 <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-red-500" /> Negative</span>
               </div>
             </div>
             <div className="h-6 whitespace-nowrap flex items-end gap-1 px-4">
                <div className="h-[40%] bg-blue-500 w-full rounded-t-sm" />
                <div className="h-[50%] bg-blue-500 w-full rounded-t-sm" />
                <div className="h-[30%] bg-red-500 w-full rounded-t-sm" />
                <div className="h-[60%] bg-blue-500 w-full rounded-t-sm" />
                <div className="h-[90%] bg-green-500 w-full rounded-t-sm" />
             </div>
             <div className="flex justify-between mt-4 px-4 text-[10px] font-bold text-neutral-300 uppercase">
                <span>Awareness</span>
                <span>Engagement</span>
                <span>Input</span>
                <span>Verification</span>
                <span>Success</span>
             </div>
          </div>
        </div>
      </section>

      {/* Key Design Decisions */}
      <section className="py-24 bg-neutral-50 px-6">
        <div className="container mx-auto max-w-6xl">
           <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-4 uppercase">Key Design <br /><span className="opacity-20 italic">Decisions</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
             {[
               { icon: BarChart3, title: 'Progress Transparency', desc: 'Added a visual progress bar on every screen so users know exactly where they are in the flow and how much is left.', color: 'bg-slate-950 text-white' },
               { icon: CheckCircle2, title: 'Trust Signals', desc: 'Prominently displayed security badges and bilingual reassurance to build user confidence with sensitive data.', color: 'bg-blue-600 text-white' },
               { icon: AlertCircle, title: 'Error Prevention', desc: 'Real-time validation with clear, actionable error messages and format examples instead of technical jargon.', color: 'bg-slate-900 text-white' },
               { icon: Zap, title: 'Reduced Steps', desc: 'Consolidated from 8 steps to 5 by merging redundant screens and removing unnecessary fields based on user research.', color: 'bg-amber-900 text-white' }
             ].map((item, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className={`${item.color} p-10 rounded-[2.5rem] shadow-xl`}
               >
                 <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-8">
                    <item.icon size={28} />
                 </div>
                 <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                 <p className="opacity-80 leading-relaxed">{item.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Solution Strategy */}
      <section className="py-24 bg-blue-600 text-white px-6">
        <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-16">SOLUTION <span className="opacity-30">STRATEGY</span></h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { num: '01', title: 'Simplify Flow', desc: 'Reduce steps from 8 to 5 essential screens.' },
                { num: '02', title: 'Trust Messaging', desc: 'Add security badges and clear explanations.' },
                { num: '03', title: 'Progress Indicators', desc: 'Show exactly where users are in the flow.' },
                { num: '04', title: 'Error Handling', desc: 'Actionable error messages with helpful tips.' }
              ].map((item, i) => (
                <div key={i} className="text-left bg-white/10 p-8 rounded-3xl backdrop-blur-md">
                   <div className="text-4xl font-black mb-6 opacity-30">{item.num}</div>
                   <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                   <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* UI Showcase */}
      <section className="py-24 bg-neutral-950 text-white px-6">
        <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-20 uppercase">Final <span className="opacity-20">UI Design</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { label: 'Welcome', img: '/regenerated_image_1777455996822.png' },
                { label: 'KYC Explanation', img: '/regenerated_image_1777455997734.png' },
                { label: 'PAN Input', img: '/regenerated_image_1777455998606.png' },
                { label: 'OTP Verify', img: '/regenerated_image_1777455999429.png' },
                { label: 'Selfie Capture', img: '/regenerated_image_1777456000194.png' },
                { label: 'Success', img: '/regenerated_image_1777456001389.png' }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="aspect-[9/19] rounded-2xl overflow-hidden border border-white/10 relative group bg-neutral-900 shadow-2xl">
                    <img 
                      src={item.img} 
                      alt={item.label} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                  <p className="text-[10px] uppercase tracking-widest font-black opacity-40 italic">{item.label}</p>
                </div>
              ))}
            </div>

        </div>
      </section>

      {/* Impact & Results */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
           <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-4 uppercase text-blue-600">Impact & <span className="text-neutral-900 italic opacity-20">Results</span></h2>
            <p className="text-neutral-500">Measurable improvements in efficiency, satisfaction, and business outcomes.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { val: '35%', label: 'Completion Rate', desc: 'More users successfully completing the onboarding process' },
              { val: '28%', label: 'Drop-off Rate', desc: 'Fewer users abandoning the flow midway' },
              { val: '40%', label: 'Time to Complete', desc: 'Faster, more efficient onboarding experience' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-12 rounded-[3rem] bg-neutral-50 border border-neutral-100"
              >
                <div className="text-6xl font-black text-blue-600 mb-4">{item.val}</div>
                <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter">{item.label}</h4>
                <p className="text-neutral-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 text-center border-t border-neutral-100">
         <p className="text-neutral-300 font-bold tracking-widest uppercase text-xs">Thank you for reviewing this work</p>
      </footer>
    </motion.div>
  );
}

function Metric({ value, label, trend }: { value: string, label: string, trend: 'up' | 'down' }) {
  return (
    <div>
      <div className="flex items-center gap-1 mb-1">
        <span className="text-2xl font-black">{trend === 'up' ? '↑' : '↓'} {value}</span>
      </div>
      <p className="text-[10px] uppercase font-bold text-neutral-400 tracking-widest">{label}</p>
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

function ComparisonCard({ type, title, points, image, isBefore = false }: { type: 'BEFORE' | 'AFTER', title: string, points: string[], image: string, isBefore?: boolean }) {
  return (
    <div className="bg-white rounded-[4rem] overflow-hidden border border-neutral-100 group hover:shadow-2xl transition-all duration-700">
       <div className="h-64 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
          <img src={image} className="w-full h-full object-cover" />
       </div>
       <div className="p-12">
          <div className={`inline-block px-6 py-2 rounded-lg font-black uppercase tracking-widest text-[10px] mb-8 ${isBefore ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
             {type}
          </div>
          <h4 className="text-3xl font-display font-black tracking-tighter leading-tight mb-8 text-neutral-900">{title}</h4>
          <div className="space-y-4">
             {points.map((point, i) => (
                <div key={i} className="flex gap-4 items-center text-neutral-400">
                   {isBefore ? <X size={14} className="text-red-400" /> : <CheckCircle2 size={14} className="text-green-500" />}
                   <p className="text-xs font-bold uppercase tracking-tight italic">{point}</p>
                </div>
             ))}
          </div>
       </div>
    </div>
  );
}

function PipelineNode({ label, sub, icon: Icon, color }: { label: string, sub: string, icon: LucideIcon, color: string }) {
  return (
    <div className="flex flex-col items-center text-center max-w-[200px]">
       <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl ${color}`}>
          <Icon size={24} />
       </div>
       <h5 className="font-bold text-sm uppercase tracking-widest mb-2">{label}</h5>
       <p className="text-[10px] text-neutral-400 font-bold leading-relaxed">{sub}</p>
    </div>
  );
}

function IconBox({ icon: Icon, title, desc }: { icon: LucideIcon, title: string, desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 rounded-2xl bg-white border border-neutral-100 shadow-sm flex items-center justify-center text-blue-600 shrink-0">
        <Icon size={20} />
      </div>
      <div>
        <h4 className="font-bold text-lg mb-1">{title}</h4>
        <p className="text-neutral-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
