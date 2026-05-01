import { motion } from 'motion/react';
import { X, TrendingUp, Users, Clock, AlertCircle, CheckCircle2, Zap, ArrowRight, Target, Search, BarChart3, Layout, MousePointer2, Settings2, Brain, Activity, LucideIcon } from 'lucide-react';

interface ProjectCaseStudySaaSProps {
  onClose: () => void;
}

export default function ProjectCaseStudySaaS({ onClose }: ProjectCaseStudySaaSProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-[#0a0a0b] text-white font-sans"
    >
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="fixed top-8 right-8 z-[60] w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10 backdrop-blur-md"
      >
        <X size={24} />
      </button>

      {/* Hero Section */}
      <header className="relative pt-32 pb-40 px-6 overflow-hidden min-h-screen flex items-center">
        <div className="container mx-auto max-w-[1400px] relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid lg:grid-cols-2 gap-20 items-center"
          >
            {/* Left Column: Text Content */}
            <div className="relative z-20">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest">SaaS Dashboard Re-design</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-7xl md:text-8xl xl:text-9xl font-display font-black tracking-tightest mb-8 leading-[0.9] uppercase"
              >
                Nexus <br />
                <span className="text-blue-500 italic">Intelligence</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-white/60 text-xl leading-relaxed font-light max-w-lg mb-12 italic"
              >
                Redesigned enterprise dashboard to reduce cognitive load and help business teams make faster, data-driven decisions through advanced 3D visual hierarchies.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex gap-8"
              >
                <div className="space-y-1">
                  <p className="text-blue-500 font-black text-3xl tracking-tighter">42%</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/30">Task Speed</p>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="space-y-1">
                  <p className="text-blue-500 font-black text-3xl tracking-tighter">56%</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/30">User Sat</p>
                </div>
              </motion.div>
            </div>

            {/* Right Column: 3D Scene */}
            <div className="relative perspective-[3000px] flex items-center justify-center h-full">
              <motion.div 
                initial={{ opacity: 0, rotateY: -30, rotateX: 20, scale: 0.8, x: 50 }}
                animate={{ opacity: 1, rotateY: -15, rotateX: 10, scale: 1, x: 0 }}
                whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ transformStyle: 'preserve-3d' }}
                className="relative z-10 w-full"
              >
                {/* Main Dashboard Surface */}
                <div className="relative bg-[#0d0d0f] rounded-[3rem] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden aspect-[4/3] md:aspect-[16/10]">
                  {/* Interface elements */}
                  <div className="absolute inset-0 p-8 flex flex-col gap-6">
                    <div className="flex justify-between items-center h-8">
                       <div className="w-24 h-2 bg-white/10 rounded-full" />
                       <div className="flex gap-2">
                          <div className="w-6 h-6 rounded-full bg-white/5" />
                          <div className="w-6 h-6 rounded-full bg-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
                       </div>
                    </div>
                    
                    <div className="flex-1 grid grid-cols-12 gap-6">
                      <div className="col-span-4 bg-white/[0.02] rounded-3xl border border-white/5 p-6 space-y-4">
                         <div className="w-full h-2 bg-white/10 rounded-full" />
                         <div className="w-2/3 h-2 bg-white/5 rounded-full" />
                         <div className="pt-8 space-y-3">
                            {[1,2,3,4].map(i => <div key={i} className="h-2 w-full bg-blue-500/10 rounded-full" />)}
                         </div>
                      </div>
                      <div className="col-span-8 bg-white/[0.02] rounded-3xl border border-white/5 p-8 flex flex-col justify-end">
                         <div className="flex items-end gap-2 h-40">
                            {[40, 70, 45, 90, 65, 80, 50, 85, 60].map((h, i) => (
                               <motion.div 
                                 key={i}
                                 initial={{ height: 0 }}
                                 animate={{ height: `${h}%` }}
                                 transition={{ delay: 1 + (i * 0.05), duration: 1 }}
                                 className="flex-1 bg-gradient-to-t from-blue-600/40 to-blue-400/20 rounded-t-sm"
                               />
                            ))}
                         </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                </div>

                {/* Floating Elements with real Z-depth */}
                <motion.div 
                  style={{ transform: 'translateZ(100px)' }}
                  className="absolute -top-10 -right-10 w-48 h-32 bg-blue-600 rounded-3xl p-6 shadow-2xl flex flex-col justify-between"
                >
                  <Activity size={24} />
                  <div>
                    <p className="text-[8px] font-black uppercase tracking-widest opacity-60">System Load</p>
                    <p className="text-2xl font-black italic">OPTIMIZED</p>
                  </div>
                </motion.div>

                <motion.div 
                  style={{ transform: 'translateZ(-50px)' }}
                  className="absolute -bottom-10 -left-10 w-56 h-40 bg-neutral-900 border border-white/10 rounded-[2.5rem] p-8 shadow-2xl opacity-80"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                       <div className="w-12 h-2 bg-white/10 rounded-full" />
                       <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                    {[1,2,3].map(i => (
                       <div key={i} className="flex gap-3 items-center">
                          <div className="w-6 h-6 rounded bg-white/5" />
                          <div className="h-1.5 w-full bg-white/5 rounded-full" />
                       </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Background Glows */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />
            </div>
          </motion.div>
        </div>

        {/* Hero Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-500/5 blur-[200px] rounded-full" />
           <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[#0a0a0b] skew-y-6 origin-bottom" />
        </div>
      </header>

      {/* Highlights Grid */}
      <section className="py-20 bg-[#0a0a0b] relative z-20">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-3 gap-12 p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-sm">
            <Metric value="42%" label="Task Speed" trend="up" />
            <Metric value="38%" label="Time to Insight" trend="down" />
            <Metric value="56%" label="User Satisfaction" trend="up" />
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 bg-white text-neutral-900 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-6xl font-display font-black tracking-tighter mb-2 text-blue-600/10 uppercase"
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
            PROBLEM
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-12 text-left">
            <IconBoxLight 
              icon={Clock} 
              title="Slow Decision Making" 
              desc="Users spending too much time finding data across disparate sources." 
              delay={0.2} 
            />
            <IconBoxLight 
              icon={AlertCircle} 
              title="Information Overload" 
              desc="Too many metrics without a clear visual hierarchy or priority." 
              delay={0.3} 
            />
            <IconBoxLight 
              icon={MousePointer2} 
              title="Poor Usability" 
              desc="Complex navigation patterns and hidden features causing frustration." 
              delay={0.4} 
            />
          </div>
        </div>
      </section>

      {/* The Objective */}
      <section className="py-24 bg-neutral-50 text-neutral-900 px-6 text-center">
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
             <ObjectiveItem title="Increase Efficiency" desc="Reduce time to complete key tasks through optimized UX." />
             <ObjectiveItem title="Improve Clarity" desc="Establish clear hierarchy for complex data sets." />
             <ObjectiveItem title="Enable Insights" desc="Make data actionable and accessible for all users." />
          </div>
        </div>
      </section>

      {/* System Structure */}
      <section className="py-24 bg-white text-neutral-900 px-6">
        <div className="container mx-auto max-w-6xl">
           <div className="grid lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-32">
                 <h2 className="text-6xl font-display font-black tracking-tighter mb-8 leading-[0.9]">Enterprise <br />Data <br /><span className="text-blue-600">Hierarchy</span></h2>
                 <p className="text-neutral-500 font-light text-lg">
                    A multi-tiered infrastructure designed to balance high-level oversight with granular administrative control and real-time processing.
                 </p>
              </div>
              
              <div className="lg:col-span-8 space-y-8">
                 <div className="bg-neutral-900 text-white p-10 rounded-[2.5rem] flex items-center justify-between">
                    <div>
                       <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-2">Primary Infrastructure</p>
                       <h3 className="text-4xl font-display font-black tracking-tight">DASHBOARD CORE</h3>
                    </div>
                    <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center">
                       <Activity className="text-blue-500" size={24} />
                    </div>
                 </div>

                 <div className="grid md:grid-cols-2 gap-8">
                    {/* Data Visualization */}
                    <div className="bg-neutral-50 p-10 rounded-[3rem] border border-neutral-100">
                       <div className="bg-blue-600 text-white px-6 py-2 rounded-lg inline-block font-black uppercase tracking-widest text-[10px] mb-8">INSIGHT LAYER</div>
                       <div className="space-y-3">
                          {['Real-time Analytics', 'KPI Scorecards', 'Predictive Trends', 'Anomaly Detection', 'Custom Report Builder', 'Data Export Engine'].map(item => (
                             <div key={item} className="p-4 bg-white rounded-xl text-sm font-bold text-neutral-600 italic hover:bg-blue-50 transition-colors cursor-default border border-neutral-100">{item}</div>
                          ))}
                       </div>
                    </div>

                    {/* Administrative Control */}
                    <div className="bg-neutral-50 p-10 rounded-[3rem] border border-neutral-100">
                       <div className="bg-neutral-800 text-white px-6 py-2 rounded-lg inline-block font-black uppercase tracking-widest text-[10px] mb-8">CONTROL LAYER</div>
                       <div className="space-y-3">
                          {['Team Management', 'Permission Matrix', 'Integration Hub', 'System Audit Logs', 'Brand Customization', 'Global Settings'].map(item => (
                             <div key={item} className="p-4 bg-white rounded-xl text-sm font-bold text-neutral-600 italic hover:bg-neutral-100 transition-colors cursor-default border border-neutral-100">{item}</div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Intelligence Pipeline */}
      <section className="py-24 bg-[#0a0a0b] text-white px-6 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
           <div className="text-center mb-24">
              <h2 className="text-6xl font-display font-black tracking-tighter">The SaaS Data Pipeline</h2>
           </div>
           
           <div className="relative p-12 bg-white/5 rounded-[4rem] border border-white/10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
                 <PipelineNode label="Aggregation" sub="Sourcing from 20+ APIs" icon={Search} color="bg-blue-500/10 text-blue-400" />
                 <ArrowRight className="text-white/10 hidden md:block" />
                 <PipelineNode label="Normalization" sub="Cleaning skewed data sets" icon={Zap} color="bg-purple-500/10 text-purple-400" />
                 <ArrowRight className="text-white/10 hidden md:block" />
                 <PipelineNode label="Analysis" sub="Calculating impact metrics" icon={Brain} color="bg-indigo-500/10 text-indigo-400" />
                 <ArrowRight className="text-white/10 hidden md:block" />
                 <PipelineNode label="Action" sub="Surfacing usable insights" icon={Target} color="bg-green-500/10 text-green-400" />
              </div>
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/5 -translate-y-1/2 hidden md:block" />
           </div>
        </div>
      </section>

      {/* Competitive Landscape */}
      <section className="py-24 bg-white text-neutral-900 px-6">
        <div className="container mx-auto max-w-6xl">
           <h2 className="text-7xl font-display font-black tracking-tighter mb-20 text-center">Competitive <span className="italic opacity-10">Landscape</span></h2>
           
           <div className="grid lg:grid-cols-2 gap-20">
              <div className="space-y-12">
                 <p className="text-xs font-black uppercase tracking-widest opacity-40">MARKET GAPS</p>
                 <ComparisonFinding title="Data Overload" desc="Most enterprise tools provide raw data without any layer of interpreted insight." />
                 <ComparisonFinding title="Mobile Neglect" desc="Almost all competitors treat mobile as an afterthought, with non-responsive tables." />
                 <ComparisonFinding title="Generic Workflows" desc="Fixed dashboards that don't adapt to specific business analyst needs." />
                 <ComparisonFinding title="Slow Load Times" desc="Heavy data processing causing significant latency during critical decision moments." />
              </div>
              
              <div className="bg-neutral-950 p-12 rounded-[3.5rem] text-white flex flex-col justify-between">
                 <div>
                    <p className="text-blue-500 font-black text-[10px] uppercase tracking-widest mb-4">OUR STRATEGIC EDGE</p>
                    <h4 className="text-4xl font-display font-black tracking-tighter leading-none mb-8">Focusing on "Time to Insight" rather than "Volume of Data".</h4>
                    <p className="text-white/40 font-light leading-relaxed">By reducing the cognitive load, we allow analysts to focus on what the numbers mean, not just finding them.</p>
                 </div>
                 <div className="mt-12 pt-12 border-t border-white/10">
                    <div className="flex justify-between items-end">
                       <div>
                          <p className="text-[10px] font-black uppercase text-white/20 mb-1">Efficiency Boost</p>
                          <p className="text-4xl font-display font-black text-blue-500">+42%</p>
                       </div>
                       <TrendingUp className="text-blue-500/20" size={80} />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Transformation */}
      <section className="py-24 bg-neutral-50 px-6">
        <div className="container mx-auto max-w-6xl">
           <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-4">
                 <h2 className="text-7xl font-display font-black tracking-tightest leading-[0.8] text-neutral-900 mb-8 uppercase italic">Trans<br />form<br />ation</h2>
                 <p className="text-neutral-400 font-black uppercase tracking-[0.2em] text-[10px] mb-4">Strategic Evolution</p>
                 <p className="text-neutral-500 font-light text-lg italic">
                    Moving from a data-heavy "report collector" to a lean, action-oriented intelligence engine that prioritizes outcome over volume.
                 </p>
              </div>
              
              <div className="lg:col-span-8">
                 <div className="grid md:grid-cols-2 gap-6">
                    <ComparisonCard 
                      type="BEFORE" 
                      title="Legacy Sludge" 
                      points={["Hidden navigation menus", "Inconsistent visual types", "Buried insights", "3m+ avg. latency"]}
                      isBefore
                    />
                    <ComparisonCard 
                      type="AFTER" 
                      title="Intelligence" 
                      points={["Pinned KPI scorecards", "Modular grid system", "AI anomaly detection", "<500ms speed"]}
                    />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-24 bg-[#0a0a0b] text-white px-6">
         <div className="container mx-auto max-w-6xl">
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-20">Key <br /><span className="opacity-20 italic">Learnings</span></h2>
            <div className="grid md:grid-cols-3 gap-8">
               <LearningCard icon={Activity} title="Hierarchy is King" desc="In data-heavy tools, visual weight should be directly proportional to business impact." />
               <LearningCard icon={Users} title="Customization ≠ Chaos" desc="Allowing users to customize their workspace doesn't have to lead to a broken experience if guided by constraints." />
               <LearningCard icon={TrendingUp} title="Mobile Metrics" desc="Analysts check their dashboard on the go more than we anticipated. A robust mobile summary is non-negotiable." />
            </div>
         </div>
      </section>

      {/* Research Section */}
      <section className="py-24 bg-[#121214] px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-4">RESEARCH <span className="text-blue-500 italic">INSIGHTS</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/5 p-10 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Search className="text-blue-400" /> Research Methods
              </h3>
              <ul className="space-y-6">
                {[
                  '12 User interviews with business analysts',
                  'Heatmap analysis of current dashboard usage',
                  'Competitor analysis (8 enterprise dashboards)',
                  'Task analysis & workflow mapping sessions'
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-neutral-400">
                    <CheckCircle2 size={18} className="text-blue-400 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 p-10 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Target className="text-purple-400" /> Key Findings
              </h3>
              <ul className="space-y-6">
                {[
                  'Users spend 40% of time just searching for data',
                  'Critical metrics are buried in secondary pages',
                  'Dark mode strongly preferred for long sessions',
                  'Customization is needed but too complex'
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-neutral-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* User Persona */}
      <section className="py-24 px-6 bg-white text-neutral-900">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-20 text-center">USER <span className="text-neutral-200 italic">PERSONA</span></h2>
          <div className="grid md:grid-cols-2 gap-12 items-center bg-neutral-950 text-white rounded-[3rem] overflow-hidden">
             <div className="p-12 lg:p-20 order-2 md:order-1">
                <div className="space-y-4 mb-12">
                   <PersonaTag text="Analyzes data daily" />
                   <PersonaTag text="Needs quick insights" />
                   <PersonaTag text="Prefers keyboard shortcuts" />
                </div>
                <div>
                   <h3 className="text-8xl font-black leading-none mb-4 italic text-blue-500">34</h3>
                   <p className="text-2xl font-bold leading-none mb-8 opacity-40">years <br /> old</p>
                   <h4 className="text-xl font-bold mb-2">Business Analyst</h4>
                   <p className="text-neutral-500 font-medium">Fortune 500 Company</p>
                </div>
             </div>
             <div className="aspect-square order-1 md:order-2 h-full">
                <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
             </div>
          </div>
        </div>
      </section>

      {/* Competitor Analysis */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase leading-tight">Competitor <br /><span className="text-blue-500 italic">Analysis</span></h2>
            <p className="text-white/40 max-w-md text-right">Analyzed 8 leading enterprise dashboard platforms to understand industry standards and identify differentiation opportunities</p>
          </div>
          
          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-8 px-6 font-black uppercase tracking-tighter text-xs opacity-40">Platform</th>
                  <th className="py-8 px-6 font-black uppercase tracking-tighter text-xs opacity-40">Customization</th>
                  <th className="py-8 px-6 font-black uppercase tracking-tighter text-xs opacity-40">Dark Mode</th>
                  <th className="py-8 px-6 font-black uppercase tracking-tighter text-xs opacity-40">Data Viz</th>
                  <th className="py-8 px-6 font-black uppercase tracking-tighter text-xs opacity-40">Performance</th>
                  <th className="py-8 px-6 font-black uppercase tracking-tighter text-xs opacity-40">Key Insight</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { name: 'Tableau', cust: true, dark: false, viz: true, perf: false, insight: 'Powerful but complex, steep learning curve' },
                  { name: 'Power BI', cust: true, dark: true, viz: true, perf: true, insight: 'Strong features but cluttered interface' },
                  { name: 'Looker', cust: false, dark: true, viz: true, perf: true, insight: 'Clean UI but limited customization' },
                  { name: 'Mixpanel', cust: true, dark: true, viz: false, perf: true, insight: 'Good UX but limited data types' },
                  { name: 'DataHub (Our Solution)', cust: true, dark: true, viz: true, perf: true, insight: 'Clean, customizable, enterprise-ready', highlight: true }
                ].map((app, i) => (
                  <tr key={i} className={`group hover:bg-white/5 transition-colors ${app.highlight ? 'bg-blue-500/10' : ''}`}>
                    <td className="py-8 px-6 font-bold">{app.name}</td>
                    <td className="py-8 px-6">{app.cust ? <CheckCircle2 className="text-blue-500" size={18} /> : <X className="text-red-400" size={18} />}</td>
                    <td className="py-8 px-6">{app.dark ? <CheckCircle2 className="text-blue-500" size={18} /> : <X className="text-red-400" size={18} />}</td>
                    <td className="py-8 px-6">{app.viz ? <CheckCircle2 className="text-blue-500" size={18} /> : <X className="text-red-400" size={18} />}</td>
                    <td className="py-8 px-6">{app.perf ? <CheckCircle2 className="text-blue-500" size={18} /> : <X className="text-red-400" size={18} />}</td>
                    <td className="py-8 px-6 text-sm text-white/40">{app.insight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Problem Breakdown */}
      <section className="py-24 bg-white text-neutral-900 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-20 items-center">
             <div>
                <h2 className="text-5xl font-display font-black tracking-tighter mb-12 uppercase leading-tight">Problem <br /><span className="text-blue-600 italic">Breakdown</span></h2>
                <div className="space-y-10">
                   <BreakdownItem title="Cluttered Interface" desc="Too many widgets and metrics competing for attention without clear hierarchy" />
                   <BreakdownItem title="Poor Data Visualization" desc="Charts difficult to read, no context or actionable insights provided" />
                   <BreakdownItem title="Complex Navigation" desc="Users getting lost in nested menus and unclear information architecture" />
                   <BreakdownItem title="No Personalization" desc="One-size-fits-all approach doesn't meet different user needs" />
                </div>
             </div>
             <div className="aspect-square rounded-[3rem] overflow-hidden">
                <img src="/regenerated_image_1777483570760.png" className="w-full h-full object-cover" />
             </div>
          </div>
        </div>
      </section>

      {/* Solution Strategy */}
      <section className="py-32 bg-neutral-50 text-neutral-900 px-6">
        <div className="container mx-auto max-w-6xl">
           <div className="grid lg:grid-cols-12 gap-20 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-32">
                 <div className="bg-blue-600 p-12 md:p-16 rounded-[4rem] flex flex-col justify-between text-white aspect-square shadow-2xl shadow-blue-500/20">
                    <h2 className="text-6xl md:text-8xl font-display font-black tracking-tightest uppercase leading-[0.85]">
                       Sol<br />ut<br />ion <br />
                       <span className="opacity-30 italic">Strat<br />egy</span>
                    </h2>
                    <div className="flex justify-between items-end">
                       <p className="text-blue-100/60 font-black uppercase tracking-widest text-[10px] max-w-[120px]">
                          Architecture & Visual Evolution
                       </p>
                       <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center">
                          <ArrowRight size={40} className="rotate-[-45deg]" />
                       </div>
                    </div>
                 </div>
              </div>
              
              <div className="lg:col-span-7 space-y-6">
                 {[
                   { icon: Layout, title: 'Implement Visual Hierarchy', desc: 'Prioritize key metrics using size, color, and positioning. Create clear focal points that draw the eye to the most critical data first.' },
                   { icon: MousePointer2, title: 'Simplify Navigation', desc: 'Flatten menu structure, add global search, implement breadcrumbs and quick actions to reduce time-to-task.' },
                   { icon: BarChart3, title: 'Enhance Data Visualization', desc: 'Use appropriate chart types, add context, enable drill-downs and comparisons to provide actionable insights rather than just data.' },
                   { icon: Settings2, title: 'Enable Customization', desc: 'Allow users to create custom views, save filters, and personalize their workspace to match their specific analytical needs.' }
                 ].map((item, i) => (
                   <div key={i} className="p-12 border border-neutral-200 rounded-[3rem] bg-white hover:border-blue-600 transition-all duration-500 group">
                      <div className="flex flex-col md:flex-row gap-8 items-start">
                         <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                           <item.icon size={32} />
                         </div>
                         <div>
                            <h4 className="text-2xl font-display font-black tracking-tight mb-4 uppercase">{item.title}</h4>
                            <p className="text-neutral-500 text-lg leading-relaxed font-light italic">{item.desc}</p>
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* User Journey Mapping */}
      <section className="py-24 bg-white text-neutral-900 px-6">
         <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-20">
               <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-blue-600 uppercase mb-4">User Journey <span className="text-neutral-200 italic">Mapping</span></h2>
               <p className="text-neutral-500">Mapped the typical workflow of a business analyst using the dashboard to understand pain points and opportunities</p>
            </div>
            
            <div className="grid grid-cols-5 gap-4 mb-20">
               {[
                 { label: 'Login', state: 'Neutral' },
                 { label: 'Find Data', state: 'Frustrated' },
                 { label: 'Analyze', state: 'Confused' },
                 { label: 'Insight', state: 'Satisfied' },
                 { label: 'Action', state: 'Confident' }
               ].map((step, i) => (
                 <div key={i} className="text-center">
                    <div className="w-full aspect-square rounded-full border-2 border-neutral-100 flex items-center justify-center mb-4 bg-neutral-50">
                       <span className="font-bold text-xs uppercase tracking-widest">{step.label}</span>
                    </div>
                    <p className="text-[10px] font-black uppercase text-neutral-300">{step.state}</p>
                 </div>
               ))}
            </div>

            <div className="bg-neutral-950 text-white p-12 rounded-[3rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="flex justify-between items-center mb-12 relative z-10">
                   <h3 className="text-2xl font-display font-black uppercase tracking-tightest italic">Emotional Journey</h3>
                   <div className="flex gap-4">
                      <div className="flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-red-500" />
                         <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Pain Point</span>
                      </div>
                      <div className="flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-green-500" />
                         <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Efficiency</span>
                      </div>
                   </div>
                </div>
                <div className="h-48 flex items-end gap-3 px-10 border-b border-white/5 pb-8 mb-8 relative z-10">
                   <div className="w-full h-[40%] bg-blue-500 rounded-t-xl hover:h-[45%] transition-all duration-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]" />
                   <div className="w-full h-[20%] bg-red-500 rounded-t-xl hover:h-[25%] transition-all duration-500 shadow-[0_0_20px_rgba(239,68,68,0.3)]" />
                   <div className="w-full h-[15%] bg-red-600 rounded-t-xl hover:h-[20%] transition-all duration-500 shadow-[0_0_20px_rgba(220,38,38,0.3)]" />
                   <div className="w-full h-[75%] bg-green-500 rounded-t-xl hover:h-[80%] transition-all duration-500 shadow-[0_0_20px_rgba(34,197,94,0.3)]" />
                   <div className="w-full h-[95%] bg-blue-400 rounded-t-xl hover:h-[100%] transition-all duration-500 shadow-[0_0_20px_rgba(96,165,250,0.3)]" />
                </div>
                <div className="flex justify-between px-10">
                   <div className="px-6 py-2 bg-red-600/20 rounded-full border border-red-500/30">
                      <span className="text-red-400 text-xs font-black uppercase tracking-[0.2em]">Before: Old Workflow</span>
                   </div>
                   <div className="px-6 py-2 bg-blue-600 rounded-full border border-blue-400/30">
                      <span className="text-white text-xs font-black uppercase tracking-[0.2em]">After: Redesigned Flow</span>
                   </div>
                </div>
            </div>
         </div>
      </section>

      {/* Design System */}
      <section className="py-24 bg-white text-neutral-900 px-6">
         <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
               <h2 className="text-6xl md:text-9xl font-display font-black tracking-tighter uppercase leading-tight">Design <br /><span className="text-blue-600 italic">System</span></h2>
               <div className="text-right">
                  <p className="text-xs font-black uppercase text-neutral-300 tracking-[0.2em] mb-4">Color Palette & Typography</p>
                  <div className="flex justify-end gap-2">
                     <div className="w-8 h-8 rounded-full bg-neutral-950" />
                     <div className="w-8 h-8 rounded-full bg-blue-600" />
                     <div className="w-8 h-8 rounded-full bg-green-500" />
                     <div className="w-8 h-8 rounded-full bg-red-400" />
                  </div>
               </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-20">
               <div>
                  <h4 className="text-xs font-black uppercase text-neutral-300 mb-8 tracking-widest">Typography</h4>
                  <div className="space-y-10">
                     <div>
                        <p className="text-neutral-400 text-xs mb-2 uppercase font-black tracking-widest">Display</p>
                        <h5 className="text-4xl font-display font-black tracking-tighter">Inter Black / 48px</h5>
                     </div>
                     <div>
                        <p className="text-neutral-400 text-xs mb-2 uppercase font-black tracking-widest">Heading</p>
                        <h5 className="text-2xl font-bold">Inter Bold / 24px</h5>
                     </div>
                     <div>
                        <p className="text-neutral-400 text-xs mb-2 uppercase font-black tracking-widest">Body</p>
                        <p className="text-lg">Inter Regular / 16px. Clean, readable and efficient for data-heavy applications.</p>
                     </div>
                  </div>
               </div>
               <div>
                  <h4 className="text-xs font-black uppercase text-neutral-300 mb-8 tracking-widest">UI Elements</h4>
                  <div className="grid grid-cols-2 gap-8">
                     <div className="space-y-4">
                        <div className="h-12 w-full rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xs uppercase tracking-widest">Primary</div>
                        <div className="h-12 w-full rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-900 font-bold text-xs uppercase tracking-widest">Secondary</div>
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="aspect-square rounded-2xl bg-neutral-950 flex items-center justify-center text-white font-bold text-[10px]">900</div>
                        <div className="aspect-square rounded-2xl bg-blue-600 flex items-center justify-center text-white font-bold text-[10px]">Blue</div>
                        <div className="aspect-square rounded-2xl bg-green-500 flex items-center justify-center text-white font-bold text-[10px]">Green</div>
                        <div className="aspect-square rounded-2xl bg-red-400 flex items-center justify-center text-white font-bold text-[10px]">Red</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Final Visuals */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="container mx-auto max-w-6xl text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-display font-black tracking-tighter mb-20 uppercase"
            >
              Final <span className="opacity-10 italic">Interfaces</span>
            </motion.h2>
            <div className="relative group">
               <motion.div 
                 initial={{ opacity: 0, y: 100 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1, ease: 'easeOut' }}
                 className="border border-white/10 shadow-3xl bg-neutral-900 relative"
               >
                 <img src="/regenerated_image_1777485333437.png" className="w-full h-auto" />
               </motion.div>
               <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-40 h-40 bg-blue-600/30 blur-[100px]" />
               <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-40 h-40 bg-purple-600/30 blur-[100px]" />
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 text-center border-t border-white/5 bg-[#0a0a0b]">
         <p className="text-white/20 font-black tracking-[0.5em] uppercase text-[10px] mb-8">Case Study Complete</p>
         <button 
           onClick={onClose}
           className="px-12 py-5 rounded-full bg-blue-600 text-white font-black hover:bg-blue-700 transition-all transform hover:scale-105 active:scale-95 uppercase tracking-[0.2em] text-xs"
         >
           Close Case Study
         </button>
      </footer>
    </motion.div>
  );
}

function Metric({ value, label, trend }: { value: string, label: string, trend: 'up' | 'down' }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-black mb-2 text-white">{value}</div>
      <p className="text-[10px] uppercase font-black text-white/40 tracking-widest leading-tight">{label}</p>
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

function ComparisonCard({ type, title, points, isBefore = false }: { type: 'BEFORE' | 'AFTER', title: string, points: string[], isBefore?: boolean }) {
  return (
    <div className={`p-10 rounded-[3rem] transition-all duration-500 ${isBefore ? 'bg-white border border-neutral-100 shadow-sm' : 'bg-neutral-900 text-white border border-neutral-800 shadow-xl'}`}>
       <div className={`inline-block px-5 py-1.5 rounded-full font-black uppercase tracking-widest text-[9px] mb-8 ${isBefore ? 'bg-red-50 text-red-500' : 'bg-blue-600 text-white'}`}>
          {type}
       </div>
       <h4 className={`text-4xl font-display font-black tracking-tight leading-tight mb-8 uppercase ${isBefore ? 'text-neutral-900' : 'text-white'}`}>{title}</h4>
       <div className="space-y-5">
          {points.map((point, i) => (
             <div key={i} className="flex gap-4 items-center">
                {isBefore ? <X className="text-red-400 shrink-0" size={16} /> : <CheckCircle2 className="text-blue-400 shrink-0" size={16} />}
                <p className={`text-sm font-bold uppercase tracking-tight italic ${isBefore ? 'text-neutral-400' : 'text-white/40 font-light'}`}>{point}</p>
             </div>
          ))}
       </div>
    </div>
  );
}

function ComparisonFinding({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="flex gap-6 items-start group">
       <div className="mt-1">
          <CheckCircle2 className="text-blue-500" size={20} />
       </div>
       <div>
          <h4 className="font-bold text-xl tracking-tight mb-2 italic group-hover:text-blue-600 transition-colors uppercase">{title}</h4>
          <p className="text-neutral-500 text-sm leading-relaxed">{desc}</p>
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
       <p className="text-[10px] text-white/40 font-bold leading-relaxed">{sub}</p>
    </div>
  );
}

function IconBoxLight({ icon: Icon, title, desc, delay = 0 }: { icon: LucideIcon, title: string, desc: string, delay?: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="flex gap-4"
    >
      <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
        <Icon size={20} />
      </div>
      <div>
        <h4 className="font-bold text-lg mb-1">{title}</h4>
        <p className="text-neutral-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

function ObjectiveItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="p-8 rounded-3xl bg-white border border-neutral-100 flex flex-col gap-4">
      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
        <Target size={20} />
      </div>
      <div>
        <h4 className="text-xl font-bold mb-1">{title}</h4>
        <p className="text-neutral-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function PersonaTag({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
       <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
       <span className="text-xs font-bold uppercase tracking-widest opacity-60">{text}</span>
    </div>
  );
}

function BreakdownItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="group">
       <h4 className="text-xl font-bold mb-2 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-blue-600" />
          {title}
       </h4>
       <p className="text-neutral-500 text-sm pl-5">{desc}</p>
    </div>
  );
}
