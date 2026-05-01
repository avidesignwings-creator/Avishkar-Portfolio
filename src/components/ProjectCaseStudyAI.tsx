import React from 'react';
import { motion } from 'motion/react';
import { X, Brain, Zap, Target, Shield, Users, LineChart, FileText, Search, Activity, CheckCircle2, AlertCircle, ArrowRight, LucideIcon, Sparkles } from 'lucide-react';

interface ProjectCaseStudyAIProps {
  onClose: () => void;
}

export default function ProjectCaseStudyAI({ onClose }: ProjectCaseStudyAIProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-[#fafafa] text-neutral-900 font-sans"
    >
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="fixed top-8 right-8 z-[60] w-12 h-12 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors border border-black/10 backdrop-blur-md"
      >
        <X size={24} className="text-black" />
      </button>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-6 bg-white overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex gap-4 mb-8">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600">CASE STUDY 2024</p>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400">ENTERPRISE AI</p>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-8 leading-tight">
                Designing an AI System for <span className="text-indigo-600">Continuous Performance Intelligence</span> & Fair Appraisals.
              </h1>
              
              <div className="flex flex-wrap gap-12 py-8 border-t border-neutral-100">
                <HeroInfo label="ROLE" value="Lead Product Designer" />
                <HeroInfo label="TIMELINE" value="6-8 weeks" />
                <HeroInfo label="METHODS" value="UX Strategy, AI Interaction" />
              </div>
            </div>
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="flex flex-col justify-center shadow-2xl relative overflow-hidden group"
              >
                <img 
                  src="/regenerated_image_1777581942701.png" 
                  alt="AI Performance Intelligence Hero"
                  className="w-full h-auto object-contain transition-transform duration-700"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* The Fragmentation of Truth */}
      <section className="py-24 bg-white border-y border-neutral-100">
        <div className="container mx-auto max-w-4xl text-center px-6">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-6xl font-display font-black tracking-tighter mb-2 text-indigo-600/10 uppercase italic"
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
            FRAGMENTATION OF TRUTH
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-12 text-left">
            <ProblemItem 
              icon={Activity} 
              title="The Periodic Lag" 
              desc="Current processes are strictly periodic, forcing managers to recall months of work in a single sitting." 
            />
            <ProblemItem 
              icon={Brain} 
              title="Systemic Recency Bias" 
              desc="Without continuous intelligence, appraisals default to the most recent memory only." 
            />
            <ProblemItem 
              icon={Target} 
              title="Manual Tracking" 
              desc="Impact is lost in Slack threads and Jira tickets as manual recording is often neglected." 
            />
          </div>
        </div>
      </section>

      {/* Quantifying the Friction */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
           <div className="flex justify-between items-end mb-20 border-b border-neutral-100 pb-8">
              <h2 className="text-5xl font-display font-black tracking-tighter">Quantifying the Friction</h2>
              <p className="text-[10px] font-black uppercase text-neutral-400 tracking-widest">INTERNAL RESEARCH METRICS</p>
           </div>
           <div className="grid md:grid-cols-4 gap-4">
              <div className="md:col-span-2 bg-[#1a1a1a] text-white p-12 rounded-[3rem] relative overflow-hidden group">
                 <div className="relative z-10">
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-12">Low Trust</p>
                    <h4 className="text-7xl font-display font-black mb-4">Low Trust</h4>
                    <p className="text-white/40 italic">Of high-performing employees reported low trust in the manual appraisal system.</p>
                 </div>
                 <div className="absolute bottom-0 right-0 p-8">
                    <Activity className="text-white/10 group-hover:scale-110 transition-transform" size={120} />
                 </div>
              </div>
              <div className="md:col-span-2 grid grid-cols-2 gap-4">
                 <MetricCard value="70%" label="Recency Bias" desc="Decisions heavily influenced by the last 30 days of performance only." />
                 <div className="space-y-4">
                    <div className="bg-neutral-100 p-8 rounded-[2rem]">
                       <p className="text-4xl font-display font-black">60%</p>
                       <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">FORGOT TO LOG IMPACT</p>
                    </div>
                    <div className="bg-neutral-100 p-8 rounded-[2rem]">
                       <p className="text-4xl font-display font-black">5-8h</p>
                       <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">SPENT PER MANAGER/CYCLE</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 bg-neutral-100 px-6">
         <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-20 items-center">
               <div>
                  <h2 className="text-5xl font-display font-black tracking-tighter mb-8 leading-tight">Problem Statement</h2>
                  <p className="text-neutral-500 text-xl font-light leading-relaxed">
                     Employees and managers lack a reliable, continuous, and unbiased system to track and evaluate performance, resulting in: <span className="font-bold text-neutral-900 border-b-2 border-indigo-600">Missed achievements, Biased evaluations, High manual effort, Lack of transparency.</span>
                  </p>
               </div>
               <div className="space-y-6">
                  <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">PROBLEM BREAKDOWN</p>
                  <ProblemList text="Employees forget to log artifacts" />
                  <ProblemList text="Performance data is scattered across tools" />
                  <ProblemList text="Reviews depend on recent memory (recency bias)" />
                  <ProblemList text="No structured way to measure impact" />
               </div>
            </div>
         </div>
      </section>

      {/* Project Objectives */}
      <section className="py-24 bg-white px-6 text-center">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-6xl font-display font-black tracking-tighter mb-2 text-indigo-600/5 uppercase italic"
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
            OBJECTIVES
          </motion.h3>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 text-left">
             <ObjectiveRow num="01" text="Automate artifact tracking" icon={Sparkles} />
             <ObjectiveRow num="02" text="Reduce evaluation bias" icon={Target} />
             <ObjectiveRow num="03" text="Continuous insights" icon={Brain} />
             <ObjectiveRow num="04" text="Improve transparency" icon={Shield} />
             <ObjectiveRow num="05" text="Reduce manual effort" icon={Zap} />
          </div>
        </div>
      </section>

      {/* System Structure */}
      <section className="py-24 bg-neutral-50 px-6">
        <div className="container mx-auto max-w-6xl">
           <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24 border-b border-neutral-200 pb-12">
              <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter leading-none italic uppercase">System <br /><span className="text-indigo-600 font-sans not-italic">Architecture</span></h2>
              <p className="text-neutral-500 text-lg max-w-md italic">Defined via a dual-node architecture that separates individual impact from organizational intelligence.</p>
           </div>
           
           <div className="grid lg:grid-cols-2 gap-8">
              {/* Node 01 */}
              <div className="p-12 bg-white rounded-[4rem] border border-neutral-100 shadow-sm relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8">
                    <span className="text-8xl font-black text-neutral-50 italic">01</span>
                 </div>
                 <div className="relative z-10">
                    <p className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.3em] mb-8">NODE ALPHA • INDIVIDUAL</p>
                    <h3 className="text-4xl font-display font-black mb-12 tracking-tighter italic">Employee Experience</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                       {['Dashboard', 'Artifacts', 'AI Insights', 'Timeline', 'Summary', 'Settings'].map(item => (
                          <div key={item} className="p-6 bg-neutral-50 rounded-2xl border border-neutral-100 flex items-center gap-3 group/item hover:bg-white hover:shadow-xl transition-all">
                             <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 scale-0 group-hover/item:scale-100 transition-transform" />
                             <p className="font-bold text-[10px] uppercase tracking-widest text-neutral-400 group-hover/item:text-neutral-900 transition-colors">{item}</p>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>

              {/* Node 02 */}
              <div className="p-12 bg-[#0a0a0a] text-white rounded-[4rem] relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8">
                    <span className="text-8xl font-black text-white/5 italic">02</span>
                 </div>
                 <div className="relative z-10">
                    <p className="text-indigo-400 font-black text-[10px] uppercase tracking-[0.3em] mb-8">NODE BETA • LEADERSHIP</p>
                    <h3 className="text-4xl font-display font-black mb-12 tracking-tighter italic">Manager Intelligence</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                       {['Team Hub', 'Profiles', 'Comparison', 'Review Panel', 'Bias Guard', 'Settings'].map(item => (
                          <div key={item} className="p-6 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-3 group/item hover:bg-white/10 hover:border-white/10 transition-all">
                             <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 scale-0 group-hover/item:scale-100 transition-transform" />
                             <p className="font-bold text-[10px] uppercase tracking-widest text-white/30 group-hover/item:text-white transition-colors">{item}</p>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* IA Thinking */}
      <section className="py-24 bg-[#1a1a1a] text-white px-6">
         <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-4 gap-4">
               <IAReasoning icon={Activity} title="Centralized all performance data into one system" />
               <IAReasoning icon={Users} title="Separated employee vs manager workflows" />
               <IAReasoning icon={Brain} title="Designed for continuous tracking, not yearly reviews" />
               <IAReasoning icon={Target} title="Prioritized insights over raw data" />
            </div>
         </div>
      </section>

      {/* AI Intelligence Pipeline */}
      <section className="py-24 bg-white px-6 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
           <div className="text-center mb-24">
              <h2 className="text-6xl font-display font-black tracking-tighter">AI System Intelligence Pipeline</h2>
           </div>
           
           <div className="relative p-12 bg-neutral-50 rounded-[4rem] border border-neutral-100">
              <div className="flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
                 <PipelineNode label="Data Input" sub="Slack, Jira, Docs, Emails" icon={FileText} color="bg-indigo-100 text-indigo-600" />
                 <ArrowRight className="text-neutral-200 hidden md:block" />
                 <PipelineNode label="AI Processing" sub="Extract tasks, identify contributions, map skills" icon={Brain} color="bg-indigo-100 text-indigo-600" />
                 <ArrowRight className="text-neutral-200 hidden md:block" />
                 <PipelineNode label="Artifact Creation" sub="Impact Assessment, Contribution Analysis" icon={Target} color="bg-purple-100 text-purple-600" />
                 <ArrowRight className="text-neutral-200 hidden md:block" />
                 <PipelineNode label="Output Generation" sub="Dashboard, Reports, Summary" icon={LineChart} color="bg-green-100 text-green-600" />
              </div>
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-neutral-100 -translate-y-1/2 hidden md:block" />
           </div>
        </div>
      </section>

      {/* Research & Insights */}
      <section className="py-24 bg-white px-6">
        <div className="container mx-auto max-w-6xl">
           <div className="grid lg:grid-cols-2 gap-20 pb-20 border-b border-neutral-100">
              <div>
                 <h2 className="text-6xl font-display font-black tracking-tighter mb-8 leading-none italic">Research & <br /><span className="text-indigo-600">Insights</span></h2>
                 <div className="space-y-4">
                    {['Interviews with employees (ICs)', 'Interviews with managers', 'Analysis of appraisal workflows', 'Review of existing HR tools'].map(item => (
                       <div key={item} className="flex items-center gap-4 text-sm font-bold uppercase tracking-tight text-neutral-400 group cursor-default">
                          <div className="w-6 h-[1px] bg-neutral-200 group-hover:w-10 group-hover:bg-indigo-600 transition-all" />
                          {item}
                       </div>
                    ))}
                 </div>
              </div>
              <div className="grid grid-cols-2 gap-12">
                 <InsightBlock num="1" title="Missing Artifacts" desc="Employees often forget to track their work, especially small but impactful contributions that happen between major releases." />
                 <InsightBlock num="2" title="Bias in Evaluation" desc="Managers tend to focus on recent work instead of overall performance, leading to skewed assessments and perceived unfairness." />
                 <InsightBlock num="3" title="Manual Effort" desc="Managers spend significant time—often hours—compiling feedback and reviewing scattered data for each report." />
                 <InsightBlock num="4" title="Lack of Transparency" desc="Employees don't understand how their performance is evaluated, creating a 'black box' effect that breeds anxiety." />
              </div>
           </div>
        </div>
      </section>

      {/* Core Structure */}
      <section className="py-24 bg-neutral-50 px-6">
        <div className="container mx-auto max-w-6xl">
           <div className="flex justify-between items-end mb-20 border-b border-neutral-200 pb-12">
              <h2 className="text-5xl font-display font-black tracking-tighter">Core Structure & IA Thinking</h2>
              <p className="text-neutral-400 max-w-md text-right text-xs italic">Centralizing scattered data from multiple tools into a single intelligence layer.</p>
           </div>
           
           <div className="grid md:grid-cols-4 gap-4">
              <IAFeature icon={LineChart} title="Dashboard" />
              <IAFeature icon={FileText} title="My Contributions" />
              <IAFeature icon={Brain} title="AI Insights" />
              <IAFeature icon={Activity} title="Performance Timeline" />
              <IAFeature icon={FileText} title="Review Summary" />
              <IAFeature icon={Users} title="Team Dashboard" />
              <IAFeature icon={Shield} title="Bias Detection" />
              <IAFeature icon={Zap} title="Settings" />
           </div>
        </div>
      </section>

      {/* Personas */}
      <section className="py-24 bg-white px-6">
        <div className="container mx-auto max-w-6xl">
           <div className="text-center mb-20 font-display italic">
              <h2 className="text-7xl font-black tracking-tighter">Who are we designing for?</h2>
           </div>
           
           <div className="grid md:grid-cols-2 gap-8">
              <PersonaCard 
                name="Neha" 
                role="Individual Contributor" 
                quote="I work hard all year but I always forget the details when review time comes. I just want my impact to be visible and fair." 
                needs={["Wants recognition for long-term effort", "Forgets to log artifacts regularly", "Feels reviews are subjective and unfair"]}
                icon={Users}
              />
              <PersonaCard 
                name="Raj" 
                role="Engineering Manager" 
                quote="Evaluating 10+ people is a nightmare. I hate feeling like I'm missing something important during the appraisal process." 
                needs={["Needs to evaluate multiple reports fairly", "Struggles with fragmented data sources", "Wants objective data for fair decisions"]}
                icon={Brain}
              />
           </div>
        </div>
      </section>

      {/* Competitive Landscape */}
      <section className="py-24 bg-[#4c1d95] text-white px-6 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
           <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-60">SECTION 7: COMPETITOR ANALYSIS</p>
           <h2 className="text-6xl font-display font-black tracking-tighter mb-20">The Competitive Landscape</h2>
           
           <div className="grid lg:grid-cols-2 gap-20">
              <div>
                 <p className="text-xs font-black uppercase tracking-widest mb-8 opacity-40">ANALYZED TOOLS</p>
                 <div className="flex gap-4 mb-12">
                    {['Workday', 'BambooHR', 'Lattice'].map(tool => (
                       <div key={tool} className="px-8 py-4 bg-white/10 rounded-xl font-bold italic tracking-tight">{tool}</div>
                    ))}
                 </div>
                 
                 <div className="bg-white p-12 rounded-[3.5rem] text-neutral-900">
                    <p className="text-indigo-600 font-black text-[10px] uppercase tracking-widest mb-4">THE OPPORTUNITY</p>
                    <h4 className="text-4xl font-display font-black tracking-tighter leading-none mb-6">Move from tracking tools to an intelligent performance system.</h4>
                 </div>
              </div>
              
              <div className="space-y-12">
                 <p className="text-xs font-black uppercase tracking-widest opacity-40">KEY FINDINGS</p>
                 <ComparisonFinding title="Strong tracking systems" desc="Existing tools excel at basic data entry and compliance tracking but stop there." />
                 <ComparisonFinding title="Heavy manual input required" desc="Most tools place the entire burden of data entry and synthesis on the user." />
                 <ComparisonFinding title="No AI-driven insights" desc="Current systems lack intelligence to synthesize data or highlight impact automatically." />
                 <ComparisonFinding title="No bias detection" desc="None of the leading tools actively monitor for or prevent subjective evaluation biases." />
              </div>
           </div>
        </div>
      </section>

      {/* System Mechanics */}
      <section className="py-24 bg-[#0a0a0a] text-white px-6">
        <div className="container mx-auto max-w-6xl">
           <div className="text-center mb-32">
              <p className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">System Mechanics</p>
              <h2 className="text-7xl font-display font-black tracking-tighter">How it Works</h2>
           </div>
           
           <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                 <MechanicalStep title="Collect data from tools (Slack, Jira, Docs)" />
                 <MechanicalStep title="AI detects contributions" />
                 <MechanicalStep title="Converts into structured artifacts" />
                 <MechanicalStep title="Analyzes impact and skills" />
                 <MechanicalStep title="Generates insights and summaries" />
              </div>
              <div className="relative">
                 <div className="bg-indigo-600 rounded-[4rem] p-16 aspect-square flex flex-col justify-center">
                    <Sparkles className="text-white/20 mb-12" size={80} />
                    <p className="text-3xl font-display font-black leading-tight italic">
                       "Don't ask users to log work — detect it automatically"
                    </p>
                 </div>
                 <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/20 blur-[80px]" />
              </div>
           </div>
        </div>
      </section>

      {/* High Fidelity Designs */}
      <section className="py-24 bg-white px-6 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
           <div className="mb-32 text-center">
              <h2 className="text-7xl font-display font-black tracking-tighter">High Fidelity Designs</h2>
              <div className="w-20 h-1 bg-indigo-600 mx-auto mt-8" />
           </div>

           <div className="grid grid-cols-1 gap-32">
              <DesignShowcase 
                title="Artifact Detection" 
                desc="A real-time feed that clusters activities from across the tech stack into meaningful, verifiable work artifacts."
                image="/regenerated_image_1777489793330.png"
              />
              <DesignShowcase 
                title="AI Insight Generation" 
                desc="Moving from raw data to structural integrity. AI analyzes the narrative flow and architectural impact of technical work."
                image="/regenerated_image_1777489906729.png"
              />
              <DesignShowcase 
                title="Manager Dashboard" 
                desc="Aggregated insights that highlight outliers, bias detection, and overall team sentiment without manual digging."
                image="/regenerated_image_1777490009594.png"
              />
           </div>
        </div>
      </section>

      {/* Before vs After */}
      <section className="py-24 bg-neutral-900 text-white px-6">
         <div className="container mx-auto max-w-4xl">
            <h2 className="text-6xl font-display font-black tracking-tighter text-center mb-24 leading-none">Before vs <br /><span className="text-indigo-500">After</span></h2>
            <div className="grid md:grid-cols-2 gap-8">
               <div className="space-y-4">
                  <ComparisonItem label="BEFORE" icon={AlertCircle} text="Fragmented tools" color="text-red-400" />
                  <ComparisonItem label="" icon={AlertCircle} text="Manual effort" color="text-red-400" />
                  <ComparisonItem label="" icon={AlertCircle} text="Low trust" color="text-red-400" />
               </div>
               <div className="space-y-4">
                  <ComparisonItem label="AFTER" icon={Sparkles} text="Unified platform" color="text-indigo-400" />
                  <ComparisonItem label="" icon={Sparkles} text="Automated tracking" color="text-indigo-400" />
                  <ComparisonItem label="" icon={Sparkles} text="Transparent evaluation" color="text-indigo-400" />
               </div>
            </div>
         </div>
      </section>

      {/* Key Learnings */}
      <section className="py-24 bg-white px-6">
        <div className="container mx-auto max-w-6xl">
           <h2 className="text-6xl font-display font-black tracking-tighter mb-20">Key Learnings</h2>
           <div className="grid md:grid-cols-3 gap-12">
              <LearningCard 
                icon={Brain} 
                title="AI explainability" 
                desc="AI must be explainable to build trust. Users need to see the 'why' behind every detected artifact." 
              />
              <LearningCard 
                icon={Zap} 
                title="Support, not replace" 
                desc="Automation should support, not replace human judgment. The system acts as a co-pilot for managers." 
              />
              <LearningCard 
                icon={Activity} 
                title="Continuous value" 
                desc="Continuous tracking is more valuable than periodic reviews. Real-time feedback loops drive growth." 
              />
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 text-center bg-white border-t border-neutral-100 px-6">
         <h3 className="text-4xl font-display font-black mb-12">Thank you for reviewing this work</h3>
         <p className="text-neutral-400 mb-12 italic leading-relaxed">Interested in discussing this project or exploring collaboration opportunities?</p>
         <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="px-12 py-5 rounded-full bg-black text-white font-black hover:bg-neutral-800 transition-all uppercase tracking-widest text-xs">Get In Touch</button>
            <button onClick={onClose} className="px-12 py-5 rounded-full bg-white border border-neutral-200 font-black hover:bg-neutral-50 transition-all uppercase tracking-widest text-xs">View More Work</button>
         </div>
      </footer>
    </motion.div>
  );
}

function HeroInfo({ label, value }: { label: string, value: string }) {
  return (
    <div>
      <p className="text-[8px] font-black text-neutral-400 uppercase mb-2 tracking-widest">{label}</p>
      <p className="font-bold text-xs uppercase tracking-tighter">{value}</p>
    </div>
  );
}

function ProblemItem({ icon: Icon, title, desc }: { icon: LucideIcon, title: string, desc: string }) {
  return (
    <div className="group">
       <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 transition-transform group-hover:rotate-12">
             <Icon size={20} />
          </div>
          <h4 className="font-bold text-xl tracking-tight uppercase italic">{title}</h4>
       </div>
       <p className="text-neutral-500 text-sm leading-relaxed border-l-2 border-neutral-100 pl-6">{desc}</p>
    </div>
  );
}

function MetricCard({ value, label, desc }: { value: string, label: string, desc: string }) {
  return (
    <div className="bg-neutral-100 p-10 rounded-[2.5rem] flex flex-col justify-between">
       <div>
          <p className="text-6xl font-display font-black tracking-tighter mb-4">{value}</p>
          <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-4">{label}</p>
       </div>
       <p className="text-xs text-neutral-500 italic leading-relaxed">{desc}</p>
    </div>
  );
}

function ProblemList({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 group">
       <div className="w-2 h-2 rounded-full bg-indigo-600 group-hover:scale-150 transition-transform" />
       <p className="text-sm font-medium text-neutral-600 italic">{text}</p>
    </div>
  );
}

function ObjectiveRow({ num, text, icon: Icon }: { num: string, text: string, icon: LucideIcon }) {
  return (
    <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-100 flex flex-col gap-4 group hover:bg-indigo-600 transition-all duration-500">
       <div className="flex justify-between items-start">
          <Icon className="text-indigo-600 group-hover:text-white transition-colors" size={24} />
          <span className="text-lg font-display font-black text-neutral-200 group-hover:text-white/20 transition-colors">{num}</span>
       </div>
       <p className="text-sm font-bold uppercase tracking-tight group-hover:text-white transition-colors">{text}</p>
    </div>
  );
}

function MechanicalStep({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-6 group">
       <div className="w-2 h-2 bg-indigo-500 rotate-45 group-hover:rotate-90 transition-transform duration-500" />
       <p className="text-lg font-bold italic tracking-tighter opacity-60 group-hover:opacity-100 transition-opacity">{title}</p>
    </div>
  );
}

function DesignShowcase({ title, desc, image, reverse = false }: { title: string, desc: string, image: string, reverse?: boolean }) {
  return (
    <div className={`flex flex-col md:flex-row gap-20 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
       <div className="md:w-5/12">
          <h4 className="text-4xl font-display font-black tracking-tighter mb-6 underline decoration-indigo-600 decoration-4 underline-offset-8 decoration-dashed italic uppercase">{title}</h4>
          <p className="text-neutral-500 text-xl font-light leading-relaxed mb-8 italic">{desc}</p>
       </div>
       <div 
         className="md:w-7/12 relative group overflow-hidden"
       >
          <img 
            src={image} 
            alt={title} 
            className="w-full h-auto block shadow-2xl transition-transform duration-700 group-hover:scale-105" 
          />
       </div>
    </div>
  );
}

function ComparisonItem({ label, icon: Icon, text, color }: { label: string, icon: LucideIcon, text: string, color: string }) {
  return (
    <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
       {label && <p className="text-[10px] font-black uppercase text-white/20 mb-4 tracking-widest">{label}</p>}
       <div className="flex items-center gap-6">
          <Icon className={color} size={24} />
          <p className="text-xl font-bold italic tracking-tight">{text}</p>
       </div>
    </div>
  );
}

function LearningCard({ icon: Icon, title, desc }: { icon: LucideIcon, title: string, desc: string }) {
  return (
    <div className="p-12 rounded-[3.5rem] bg-indigo-50 border border-indigo-100 group">
       <Icon className="text-indigo-600 mb-8" size={32} />
       <h4 className="text-2xl font-display font-black mb-4 uppercase tracking-tighter italic">{title}</h4>
       <p className="text-neutral-500 text-sm leading-relaxed font-light">{desc}</p>
    </div>
  );
}

function IAReasoning({ icon: Icon, title }: { icon: LucideIcon, title: string }) {
  return (
    <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
       <Icon size={32} className="text-indigo-400 mb-8 group-hover:scale-110 transition-transform" />
       <h4 className="text-xl font-bold tracking-tight italic opacity-80 group-hover:opacity-100 transition-opacity">{title}</h4>
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

function InsightBlock({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <div className="group">
       <div className="text-2xl font-display font-black text-indigo-600/20 mb-4 group-hover:text-indigo-600 transition-colors italic">{num}</div>
       <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter italic">{title}</h4>
       <p className="text-neutral-500 text-xs leading-relaxed">{desc}</p>
    </div>
  );
}

function IAFeature({ icon: Icon, title }: { icon: LucideIcon, title: string }) {
  return (
    <div className="p-8 bg-white rounded-3xl border border-neutral-100 flex flex-col items-center justify-center text-center group hover:bg-indigo-600 transition-all duration-500 shadow-sm cursor-default">
       <Icon className="text-indigo-600 mb-4 group-hover:text-white transition-colors" size={24} />
       <p className="font-black uppercase tracking-widest text-[9px] group-hover:text-white transition-colors">{title}</p>
    </div>
  );
}

function PersonaCard({ name, role, quote, needs, icon: Icon }: { name: string, role: string, quote: string, needs: string[], icon: LucideIcon }) {
  return (
    <div className="bg-neutral-50 p-12 rounded-[4rem] border border-neutral-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-2xl transition-all duration-700">
       <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border border-neutral-100 mb-8 shadow-sm group-hover:scale-110 transition-transform">
          <Icon className="text-indigo-600" size={40} />
       </div>
       <h4 className="text-4xl font-display font-black tracking-tighter leading-none mb-2">{name}</h4>
       <p className="text-[10px] font-black uppercase text-indigo-600 tracking-widest mb-8">{role}</p>
       <p className="text-neutral-500 italic mb-12 leading-relaxed">"{quote}"</p>
       <div className="space-y-4 w-full text-left">
          {needs.map((need, i) => (
             <div key={i} className="flex gap-4 items-center">
                <X className="text-red-400 shrink-0" size={14} />
                <p className="text-xs font-bold text-neutral-400 uppercase tracking-tight italic">{need}</p>
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
          <CheckCircle2 className="text-indigo-400" size={20} />
       </div>
       <div>
          <h4 className="font-bold text-xl tracking-tight mb-2 italic group-hover:text-indigo-400 transition-colors uppercase">{title}</h4>
          <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
       </div>
    </div>
  );
}
