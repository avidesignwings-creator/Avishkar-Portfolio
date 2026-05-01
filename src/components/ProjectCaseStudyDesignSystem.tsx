import { motion } from 'motion/react';
import { X, Layers, Users, Zap, Shield, BookOpen, Layout, Palette, Type, Grid, Code, CheckCircle2, AlertTriangle, ArrowRight, TrendingUp, Search, LucideIcon } from 'lucide-react';

interface ProjectCaseStudyDesignSystemProps {
  onClose: () => void;
}

export default function ProjectCaseStudyDesignSystem({ onClose }: ProjectCaseStudyDesignSystemProps) {
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
        className="fixed top-8 right-8 z-[60] w-12 h-12 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors border border-black/10 backdrop-blur-md"
      >
        <X size={24} className="text-black" />
      </button>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-6 bg-[#f8f9ff] overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-8">CASE STUDY • 2024</p>
              <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-8 leading-tight">
                Building a <span className="text-blue-600 italic">Scalable Design System</span> to Improve Consistency and Speed.
              </h1>
              <p className="text-neutral-500 text-lg mb-12 font-light max-w-lg leading-relaxed">
                A growing product team faced inconsistent UI, slow design cycles, and poor developer handoff due to lack of a centralized design system.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-neutral-200">
                <HeroInfo label="ROLE" value="Lead Product Designer" />
                <HeroInfo label="TIMELINE" value="6-8 weeks" />
                <HeroInfo label="DELIVERABLES" value="100+ Components" />
                <HeroInfo label="IMPACT" value="35% Faster Design" />
              </div>
            </div>
            <div className="relative">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, rotate: -5 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="relative z-10 bg-blue-600 rounded-[3rem] p-12 aspect-square flex items-center justify-center shadow-3xl shadow-blue-600/20"
              >
                <div className="w-full h-full border-4 border-white/20 rounded-[2rem] flex items-center justify-center relative overflow-hidden">
                   <div className="absolute top-4 left-4 w-12 h-12 border-2 border-white/40" />
                   <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-white/40" />
                   <Layers size={120} className="text-white" />
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-white/10 rotate-45" />
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-white/10 -rotate-45" />
                </div>
              </motion.div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/20 blur-[80px] rounded-full" />
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-200/30 blur-[100px] rounded-full" />
            </div>
          </div>
        </div>
      </header>

      {/* Key Insights Stats */}
      <section className="py-20 px-6 border-b border-neutral-100">
         <div className="container mx-auto max-w-6xl text-center">
            <div className="grid md:grid-cols-3 gap-12">
               <InsightStat value="40%" label="Design inconsistencies across products before system implementation" />
               <InsightStat value="30%" label="Increase in design time due to rework and component recreation" />
               <InsightStat value="High" label="Dev handoff issues causing project delays with no shared library" />
            </div>
         </div>
      </section>

      {/* Core Objectives */}
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
            OBJECTIVES
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
             <ObjectiveItem icon={BookOpen} title="Single Source of Truth" desc="Create a centralized design system accessible to all teams." delay={0.1} />
             <ObjectiveItem icon={Users} title="Improve Collaboration" desc="Bridge the gap between design and development teams." delay={0.2} />
             <ObjectiveItem icon={Zap} title="Increase Delivery Speed" desc="Accelerate feature development with reusable components." delay={0.3} />
             <ObjectiveItem icon={Shield} title="Ensure UI Consistency" desc="Maintain unified visual language across all products." delay={0.4} />
          </div>
        </div>
      </section>

      {/* What I Designed */}
      <section className="py-24 bg-neutral-50 px-6">
        <div className="container mx-auto max-w-6xl">
           <div className="grid lg:grid-cols-2 gap-20 mb-20">
              <div>
                 <h2 className="text-8xl font-display font-black tracking-tighter leading-none mb-8">What <br /><span className="text-blue-600">IDesigned</span></h2>
                 <p className="text-neutral-500 text-xl leading-relaxed font-light">This section demonstrates system-level thinking beyond individual screens. A comprehensive system requires foundations, components, patterns, documentation, and governance.</p>
              </div>
              <div className="space-y-8">
                 <div className="p-8 bg-white rounded-3xl border border-neutral-200">
                    <p className="text-[10px] font-black uppercase text-blue-600 mb-4 tracking-widest">SYSTEMS LEVEL</p>
                    <p className="font-bold text-lg leading-tight">Moving from screen-focused output to architectural integrity.</p>
                 </div>
                 <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
                    <p className="text-[10px] font-black uppercase text-blue-600 mb-4 tracking-widest">CROSS-FUNCTIONAL</p>
                    <p className="font-bold text-lg leading-tight text-blue-900">Bridges the gap between design vision and engineering reality.</p>
                 </div>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Foundations */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-10 rounded-[3rem] bg-white border border-neutral-100 shadow-sm"
              >
                 <div className="w-12 h-12 bg-neutral-50 rounded-2xl flex items-center justify-center text-neutral-400 mb-8">
                    <Palette size={20} />
                 </div>
                 <h4 className="text-3xl font-display font-black mb-8">Foundations</h4>
                 <div className="space-y-4">
                    <FoundationPill label="COLOR SYSTEM" value="Primary & Semantic Modes" />
                    <FoundationPill label="TYPOGRAPHY" value="Modular Type Scales" />
                    <FoundationPill label="SPACING" value="8pt Grid Architecture" />
                 </div>
              </motion.div>

              {/* Components */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-10 rounded-[3rem] bg-blue-600 text-white lg:row-span-2 flex flex-col justify-between"
              >
                 <div>
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                       <Layout size={20} />
                    </div>
                    <h4 className="text-5xl font-display font-black mb-12">Components</h4>
                    <ul className="space-y-6">
                       <ComponentItem text="Buttons & Inputs" />
                       <ComponentItem text="Cards & Containers" />
                       <ComponentItem text="Modals & Dialogs" />
                       <ComponentItem text="Navigation Clusters" />
                    </ul>
                 </div>
                 <div className="mt-20 pt-10 border-t border-white/10 italic text-white/40 text-sm">
                    Atomic level design elements
                 </div>
              </motion.div>

              {/* Patterns */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-10 rounded-[3rem] bg-indigo-600 text-white"
              >
                 <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                    <Grid size={20} />
                 </div>
                 <h4 className="text-3xl font-display font-black mb-8">Patterns</h4>
                 <div className="space-y-4">
                    <p className="text-[10px] font-black uppercase text-white/40 tracking-widest">FLOW INTELLIGENCE</p>
                    <p className="font-bold mb-6">Dynamic Forms & Validation</p>
                    <p className="text-[10px] font-black uppercase text-white/40 tracking-widest">DATA DISPLAY</p>
                    <p className="font-bold mb-6">Complex Tables & Dashboards</p>
                    <p className="text-[10px] font-black uppercase text-white/40 tracking-widest">EDGE CASES</p>
                    <p className="font-bold">Error & Empty State Logic</p>
                 </div>
              </motion.div>

              {/* Documentation */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-10 rounded-[3rem] bg-white border border-neutral-100 shadow-sm md:col-span-2 lg:col-span-1"
              >
                 <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8">
                    <BookOpen size={20} />
                 </div>
                 <h4 className="text-3xl font-display font-black mb-8">Documentation</h4>
                 <div className="grid grid-cols-2 gap-4">
                    <DocItem label="Usage Guidelines" value="When and how to use every element." />
                    <DocItem label="Do's & Don't's" value="Visual guardrails for creators." />
                    <DocItem label="Dev Handoff" value="Token mappings and specs." />
                    <DocItem label="Accessibility" value="WCAG 2.1 AA compliance rules." />
                 </div>
              </motion.div>

              {/* Governance */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-10 rounded-[3rem] bg-neutral-100 lg:col-span-1"
              >
                 <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-neutral-400 mb-8 shadow-sm">
                    <Code size={20} />
                 </div>
                 <h4 className="text-3xl font-display font-black mb-8">Governance</h4>
                 <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-neutral-500">
                       <div className="w-2 h-2 rounded-full bg-blue-600" />
                       VERSION CONTROL
                    </li>
                    <li className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-neutral-500">
                       <div className="w-2 h-2 rounded-full bg-blue-600" />
                       CONTRIBUTION
                    </li>
                    <li className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-neutral-500">
                       <div className="w-2 h-2 rounded-full bg-blue-600" />
                       SUPPORT
                    </li>
                 </ul>
              </motion.div>
           </div>
        </div>
      </section>

      {/* Scope Matters */}
      <section className="py-24 bg-white px-6">
         <div className="container mx-auto max-w-5xl">
            <div className="p-16 rounded-[4rem] bg-blue-50 border border-blue-100 flex flex-col md:flex-row gap-20">
               <div className="md:w-1/2">
                  <h2 className="text-6xl font-display font-black tracking-tighter mb-8 leading-tight">Why This <br /><span className="text-blue-600">Scope Matters</span></h2>
                  <p className="text-neutral-500 text-lg leading-relaxed">Systemic design isn't just about pixels; it's about building a scalable infrastructure that empowers product teams.</p>
               </div>
               <div className="md:w-1/2 space-y-12">
                  <div className="flex gap-6">
                     <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                        <Zap size={20} className="text-blue-600" />
                     </div>
                     <div>
                        <h4 className="font-bold text-xl mb-2">Seniority Signal</h4>
                        <p className="text-neutral-500 text-sm">Strategic thinking that prioritizes longevity and team ownership.</p>
                     </div>
                  </div>
                  <div className="flex gap-6">
                     <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                        <Users size={20} className="text-blue-600" />
                     </div>
                     <div>
                        <h4 className="font-bold text-xl mb-2">Cross-Functional Impact</h4>
                        <p className="text-neutral-500 text-sm">Defining how design interacts with engineering and product management.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* The Problem Breakdown */}
      <section className="py-24 bg-[#0f0f0f] text-white px-6 text-center">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-6xl font-display font-black tracking-tighter mb-2 text-white/5 uppercase italic"
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
            SYSTEMIC FRAGMENTS
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8 text-left">
             <ProblemBox 
               title="No Standardization" 
               desc="Every designer creates components from scratch, resulting in multiple versions of the same UI elements."
               stats={[
                  { value: '12+', label: 'BUTTON VARIANTS' },
                  { value: '25+', label: 'COLOR VARIATIONS' }
               ]}
             />
             <ProblemBox 
               title="No Documentation" 
               desc="No guidelines on when or how to use components. Teams make conflicting decisions without direction."
               stats={[
                  { value: 'High', label: 'FRICTION' },
                  { value: 'Low', label: 'ADOPTION' }
               ]}
             />
             <ProblemBox 
               title="Poor Scalability" 
               desc="As the product grows, design inconsistencies multiply. No systematic way to maintain quality at scale."
               stats={[
                  { value: '30%', label: 'SPRINT WASTE' },
                  { value: 'Slow', label: 'TIME TO MARKET' }
               ]}
             />
          </div>
          <div className="mt-32 pt-20 border-t border-white/10">
            <p className="text-[10px] font-black uppercase text-neutral-500 mb-12 tracking-[0.4em] text-center">Impact on Business</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               <ImpactMetric label="EFFICIENCY LOSS" value="+30%" sub="Design time increase due to rework" />
               <ImpactMetric label="COMMUNICATION" value="5–7x" sub="Dev-design iterations per feature" />
               <ImpactMetric label="QUALITY ISSUES" value="40%" sub="UI inconsistencies of screens audited" />
               <ImpactMetric label="FEEDBACK" value="High" sub="User confusion reports documented" />
            </div>
          </div>
        </div>
      </section>

      {/* Research Insights */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="container mx-auto max-w-6xl">
           <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-12">
              <h2 className="text-7xl md:text-9xl font-display font-black tracking-tighter leading-none">Research <br /><span className="italic opacity-10">Insights</span></h2>
              <p className="text-neutral-500 text-lg max-w-lg">Comprehensive audit and stakeholder interviews to understand current state and requirements.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ResearchCard icon={Layout} title="UI Audit" desc="Comprehensive analysis of existing screens to identify patterns and inconsistencies." stats={[{ label: 'SCREENS AUDITED', value: '20+' }, { label: 'COMPONENTS CATALOGED', value: '150+' }, { label: 'INCONSISTENCIES FOUND', value: '200+' }]} />
              <ResearchCard icon={Code} title="Developer Interviews" desc="One-on-one sessions with engineering team to understand technical constraints." stats={[{ label: 'INTERVIEWS', value: '8 Developers' }, { label: 'DURATION', value: '45 min' }, { label: 'KEY THEMES', value: '5' }]} />
              <ResearchCard icon={Users} title="Design Team Feedback" desc="Survey and workshops with designers to understand pain points and needs." stats={[{ label: 'DESIGNERS SURVEYED', value: '12' }, { label: 'WORKSHOPS', value: '3 Sessions' }, { label: 'RESPONSE RATE', value: '100%' }]} />
           </div>

           <div className="mt-32">
              <div className="grid md:grid-cols-2 gap-20">
                 <div>
                    <h3 className="text-5xl font-display font-black tracking-tighter mb-12">Key Findings</h3>
                    <p className="text-neutral-500 text-lg mb-12 italic">Our research exposed a critical bottleneck in the design-to-development workflow, categorized into four core operational failures.</p>
                 </div>
                 <div className="space-y-16">
                    <FindingItem num="01" title="Inconsistency Everywhere" desc="UI audit revealed widespread inconsistencies in spacing, colors, typography, and component styles." />
                    <FindingItem num="02" title="No Reusability" desc="Designers create components from scratch for each project, leading to massive efficiency leakage." quote="I spend 2-3 hours at the start of every project recreating basic components instead of focusing on the actual problem." author="SENIOR PRODUCT DESIGNER" />
                    <FindingItem num="03" title="Developer Confusion" desc="Lack of clear specifications leads to interpretation errors and friction during handoff." quote="I have to guess spacing values and colors... Then designers tell me it's wrong and I have to redo it." author="FRONTEND DEVELOPER" />
                    <FindingItem num="04" title="Scaling Problems" desc="Hypergrowth exacerbated internal friction, making onboarding unsustainable." stats={[{ value: '3x', label: 'TEAM GROWTH / 12MO' }, { value: '4–6w', label: 'ONBOARDING TIME' }]} />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Audit Findings Visualization */}
      <section className="py-20 bg-neutral-50 px-6">
         <div className="container mx-auto max-w-6xl">
            <h4 className="text-[10px] font-black uppercase text-neutral-300 tracking-[0.4em] text-center mb-16">Audit Findings Visualization</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <AuditStat title="COMPONENTS" value="12" sub="Variants" target="Target: 3-4 Max" />
               <AuditStat title="COLOR PALETTE" value="25+" sub="Hex Codes" target="Target: 10-12 Tokens" />
               <AuditStat title="LAYOUT RHYTHM" value="15+" sub="Spacing Values" target="Target: 8pt System" />
            </div>
         </div>
      </section>

      {/* Stakeholder Personas */}
      <section className="py-24 bg-white px-6">
        <div className="container mx-auto max-w-6xl">
           <div className="text-center mb-20">
              <h2 className="text-6xl font-display font-black tracking-tighter">Stakeholder Personas</h2>
              <p className="text-neutral-400 mt-4 max-w-2xl mx-auto italic">Understanding the needs of different team members shows cross-functional thinking.</p>
           </div>

           <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-neutral-50 p-12 rounded-[3rem] border border-neutral-200">
                 <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-xl">
                       <span className="text-white font-black text-2xl uppercase">RK</span>
                    </div>
                    <div>
                       <h4 className="text-2xl font-black tracking-tighter">Rahul Kumar</h4>
                       <p className="text-xs font-black uppercase text-blue-600 tracking-widest">Developer</p>
                    </div>
                 </div>
                 <div className="space-y-6">
                    <p className="text-sm font-bold text-neutral-500 italic">"I spend more time asking other designers how they did something than actually designing."</p>
                    <div className="flex flex-wrap gap-2">
                       <PersonaTag text="Clear specs" bg="bg-blue-600 text-white" />
                       <PersonaTag text="Consistency" bg="bg-blue-600 text-white" />
                    </div>
                 </div>
              </div>

              <div className="bg-neutral-50 p-12 rounded-[3rem] border border-neutral-200">
                 <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center shadow-xl">
                       <span className="text-white font-black text-2xl uppercase">AB</span>
                    </div>
                    <div>
                       <h4 className="text-2xl font-black tracking-tighter">Avishkar Bhandare</h4>
                       <p className="text-xs font-black uppercase text-indigo-600 tracking-widest">Designer</p>
                    </div>
                 </div>
                 <div className="space-y-6">
                    <p className="text-sm font-bold text-neutral-500 italic">"I have to guess spacing values and colors... Then designers tell me it's wrong and I have to redo it."</p>
                    <div className="flex flex-wrap gap-2">
                       <PersonaTag text="Fast design" bg="bg-indigo-600 text-white" />
                       <PersonaTag text="Reuse" bg="bg-indigo-600 text-white" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Design System Hierarchy */}
      <section className="py-24 bg-[#0f0f0f] text-white px-6">
        <div className="container mx-auto max-w-6xl">
           <div className="grid lg:grid-cols-2 gap-20 mb-32 items-end">
              <div>
                 <h2 className="text-7xl md:text-8xl font-display font-black tracking-tighter leading-none mb-8">Design System <br /><span className="italic text-white/20">Structure & Logic</span></h2>
                 <h3 className="text-3xl font-bold uppercase tracking-widest mb-12">System Hierarchy</h3>
              </div>
              <p className="text-white/40 text-xl font-light italic">Defining the architectural framework that bridges the gap between design vision and engineering execution through a tiered modular approach.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <HierarchyCard level="1" title="Tokens" desc="Centralized values that ripple across design and development without manual overrides." items={['Colors', 'Typography', 'Spacing', 'Shadow']} />
              <HierarchyCard level="2" title="Components" desc="Atomic UI elements that serve as the building blocks for more complex features." items={['Buttons', 'Inputs', 'Toggles', 'Badges']} highlighted />
              <HierarchyCard level="3" title="Patterns" desc="Reusable layouts and functional clusters for common user behaviors." items={['Navigation Bars', 'Cards', 'Forms', 'Search']} />
              <HierarchyCard level="4" title="Documentation" desc="The rulebook for when and how to use every element in the system." items={['Style Guides', 'Best Practices', 'Version History']} />
           </div>

           <div className="mt-32 pt-20 border-t border-white/10 grid lg:grid-cols-2 gap-20">
              <div>
                 <h3 className="text-4xl font-display font-black mb-12">Why Tokens?</h3>
                 <div className="space-y-8">
                    <TokenFeature title="Single Source of Truth" desc="Updates to a single token value ripple across design and development without manual overrides." />
                    <TokenFeature title="Consistency" desc="Eliminating pixel-pushing by constraining choices to a predefined set of variables." />
                    <TokenFeature title="Theming" desc="Effortlessly switch between Light, Dark, and Brand themes via variable swapping." />
                    <TokenFeature title="Scalable" desc="Built for growth, allowing for system-wide updates in seconds rather than hours." />
                 </div>
              </div>
              <div className="bg-neutral-800 rounded-[3rem] p-12 border border-white/5 font-mono text-sm overflow-hidden relative group">
                 <div className="flex gap-2 mb-8">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                 </div>
                 <pre className="text-blue-300">
                    <code>
{`:root {
  --color-primary: #5250f3;
  --spacing-md: 16px;
  --font-size-lg: 18px;
  --radius-full: 9999px;
  --shadow-flat: 0 4px 6px -1px;
}`}
                    </code>
                 </pre>
                 <div className="absolute top-12 right-12 text-white/5 group-hover:text-white/10 transition-colors">
                    <Code size={160} />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Components Showcase */}
      <section className="py-24 bg-white px-6 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
           <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32">
              <h2 className="text-7xl md:text-9xl font-display font-black tracking-tighter leading-none">Design System <br /><span className="italic text-blue-600">Components</span></h2>
              <p className="text-neutral-500 text-lg max-w-md">Comprehensive library of 100+ reusable components with multiple variants and states, engineered for precision and scale.</p>
           </div>

           <div className="space-y-32">
              {/* Buttons Section */}
              <div className="grid lg:grid-cols-3 gap-20">
                 <div>
                    <h3 className="text-3xl font-black mb-8 border-b-4 border-blue-600 inline-block">Buttons</h3>
                    <div className="space-y-6 text-neutral-500 text-sm">
                       <p className="font-bold text-neutral-900 mb-2 uppercase tracking-widest text-[10px]">TECHNICAL SPECIFICATIONS</p>
                       <div className="flex justify-between border-b border-neutral-100 pb-2"><span>Height</span><span className="font-mono text-blue-600 uppercase">48px</span></div>
                       <div className="flex justify-between border-b border-neutral-100 pb-2"><span>Padding (X/Y)</span><span className="font-mono text-blue-600 uppercase">16px / 18px</span></div>
                       <div className="flex justify-between border-b border-neutral-100 pb-2"><span>Border Radius</span><span className="font-mono text-blue-600 uppercase">8px</span></div>
                       <div className="flex justify-between border-b border-neutral-100 pb-2"><span>Font Weight</span><span className="font-mono text-blue-600 uppercase">600 (Semibold)</span></div>
                    </div>
                 </div>
                 <div className="lg:col-span-2 bg-neutral-50 rounded-[4rem] p-16 border border-neutral-100">
                    <div className="grid md:grid-cols-2 gap-20">
                       <div>
                          <p className="text-[10px] font-black uppercase text-neutral-300 mb-8 tracking-widest">STANDARD VARIANTS</p>
                          <div className="flex flex-wrap gap-4">
                             <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm">Primary Action</button>
                             <button className="px-8 py-3 bg-neutral-200 text-neutral-600 rounded-xl font-bold text-sm">Secondary</button>
                             <button className="px-8 py-3 text-blue-600 font-bold text-sm">Tertiary</button>
                             <button className="px-8 py-3 bg-neutral-100 text-neutral-400 rounded-xl font-bold text-sm cursor-not-allowed">Disabled</button>
                          </div>
                       </div>
                       <div>
                          <p className="text-[10px] font-black uppercase text-neutral-300 mb-8 tracking-widest">SIZES & ICONS</p>
                          <div className="space-y-6">
                             <div className="flex items-center gap-4">
                                <button className="px-4 py-1.5 bg-blue-600 text-white rounded-lg font-bold text-xs uppercase tracking-tighter">Small</button>
                                <button className="px-8 py-2 bg-blue-600 text-white rounded-xl font-bold text-sm uppercase tracking-tighter">Medium</button>
                             </div>
                             <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black text-lg uppercase tracking-tight">Large</button>
                             <div className="flex gap-4">
                                <button className="p-4 bg-indigo-600 text-white rounded-2xl flex items-center justify-center gap-2 font-bold text-sm"><Layout size={18} /> Leading</button>
                                <button className="p-4 bg-indigo-600 text-white rounded-2xl flex items-center justify-center gap-2 font-bold text-sm">Trailing <ArrowRight size={18} /></button>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Input Fields Section */}
              <div className="grid lg:grid-cols-3 gap-20">
                 <div>
                    <h3 className="text-3xl font-black mb-8 border-b-4 border-blue-600 inline-block">Input Fields</h3>
                    <div className="space-y-6 text-neutral-500 text-sm">
                       <p className="font-bold text-neutral-900 mb-2 uppercase tracking-widest text-[10px]">TECHNICAL SPECIFICATIONS</p>
                       <p className="italic">Minimalist design utilizing <span className="font-mono text-blue-600">surface-container-low</span> with a 2px high-contrast <span className="font-mono text-blue-600">primary</span> left-border accent on focus states.</p>
                    </div>
                 </div>
                 <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                    <div className="space-y-8">
                       <div className="space-y-2">
                          <p className="text-[10px] font-black uppercase text-neutral-300 tracking-widest">DEFAULT STATE</p>
                          <div className="p-4 rounded-xl border border-neutral-200 bg-white text-neutral-400 text-sm">Enter full name</div>
                       </div>
                       <div className="space-y-2">
                          <p className="text-[10px] font-black uppercase text-red-400 tracking-widest">ERROR STATE</p>
                          <div className="p-4 rounded-xl border border-red-200 bg-red-50 text-red-600 text-sm">invalid-input-data</div>
                          <p className="text-[10px] text-red-600 font-medium pl-1">Please enter a valid technical string</p>
                       </div>
                    </div>
                    <div className="space-y-8">
                       <div className="space-y-2">
                          <p className="text-[10px] font-black uppercase text-blue-600 tracking-widest">WITH VALUE</p>
                          <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-white shadow-sm text-neutral-900 font-bold text-sm">design@technical.curator</div>
                       </div>
                       <div className="space-y-2">
                          <p className="text-[10px] font-black uppercase text-neutral-300 tracking-widest">DISABLED STATE</p>
                          <div className="p-4 rounded-xl border border-neutral-100 bg-neutral-50 text-neutral-300 text-sm italic">Read-only system data</div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Tonal Layering Section */}
              <div className="grid lg:grid-cols-3 gap-20">
                 <div>
                    <h3 className="text-3xl font-black mb-8 border-b-4 border-blue-600 inline-block">Content Cards</h3>
                    <div className="space-y-6 text-neutral-500 text-sm">
                       <p className="font-bold text-neutral-900 mb-2 uppercase tracking-widest text-[10px]">TONAL LAYERING RULE</p>
                       <p className="italic">Hierarchy is defined through background shifts from <span className="font-mono text-blue-600 uppercase">surface</span> to <span className="font-mono text-blue-600 uppercase">surface-container-lowest</span>. 24px internal guttering.</p>
                    </div>
                 </div>
                 <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="p-8 rounded-[2.5rem] bg-indigo-600 text-white relative overflow-hidden flex flex-col justify-between"
                    >
                       <div className="absolute top-6 right-6 px-3 py-1 bg-white/20 rounded-full text-[8px] font-black uppercase tracking-widest">PRO FEATURE</div>
                       <div>
                          <Layers className="text-white/40 mb-8" size={32} />
                          <h4 className="text-3xl font-display font-black mb-4">Architecture <br /> Insight</h4>
                          <p className="text-white/60 text-sm leading-relaxed mb-6">Deep dive into the structural foundations of the editorial design system.</p>
                       </div>
                       <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest group">View Blueprint <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></button>
                    </motion.div>
                    <div className="p-10 rounded-[2.5rem] bg-white border border-neutral-100 shadow-xl flex flex-col items-center justify-center text-center">
                       <TrendingUp size={48} className="text-blue-600 mb-8" />
                       <p className="text-[10px] font-black uppercase text-neutral-300 mb-2 tracking-widest">TOTAL DEPLOYMENTS</p>
                       <p className="text-7xl font-display font-black leading-none tracking-tighter">1,234</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Button Documentation Detail */}
      <section className="py-24 bg-[#121212] text-white px-6">
        <div className="container mx-auto max-w-6xl">
           <div className="max-w-3xl mb-32">
              <h2 className="text-7xl font-display font-black tracking-tighter leading-none mb-12">Button Documentation</h2>
              <p className="text-white/40 text-xl font-light leading-relaxed italic">Buttons are used to initialize an action. The label of a button must clearly describe the outcome of the action to be taken. We provide three distinct levels of hierarchy to guide user attention.</p>
           </div>

           <div className="grid md:grid-cols-2 gap-20">
              <div className="space-y-12">
                 <h4 className="text-[10px] font-black uppercase text-neutral-500 tracking-[0.4em] mb-12">USAGE GUIDELINES</h4>
                 <div className="flex items-center gap-8 border-b border-white/5 pb-8 group">
                    <button className="px-10 py-4 bg-blue-600 text-white rounded-xl font-black text-xs uppercase tracking-widest shrink-0 shadow-lg shadow-blue-600/20">Primary</button>
                    <div>
                       <h5 className="font-bold text-lg mb-1 group-hover:text-blue-600 transition-colors">High Emphasis</h5>
                       <p className="text-white/40 text-sm italic">Used for the most important action on a screen.</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-8 border-b border-white/5 pb-8 group">
                    <button className="px-10 py-4 bg-white/10 text-white border border-white/10 rounded-xl font-black text-xs uppercase tracking-widest shrink-0">Secondary</button>
                    <div>
                       <h5 className="font-bold text-lg mb-1 group-hover:text-neutral-300 transition-colors">Medium Emphasis</h5>
                       <p className="text-white/40 text-sm italic">For secondary actions that complement the primary goal.</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-8 group">
                    <button className="px-10 py-4 text-neutral-500 rounded-xl font-black text-xs uppercase tracking-widest italic shrink-0 hover:text-white transition-colors">Tertiary</button>
                    <div>
                       <h5 className="font-bold text-lg mb-1 group-hover:text-neutral-300 transition-colors">Low Emphasis</h5>
                       <p className="text-white/40 text-sm italic">For less important tasks or optional navigation paths.</p>
                    </div>
                 </div>
              </div>
              <div className="space-y-12 bg-white/5 p-12 rounded-[3rem] border border-white/10">
                 <h4 className="text-[10px] font-black uppercase text-neutral-500 tracking-[0.4em] mb-12">DO'S & DON'T'S</h4>
                 <div className="space-y-12">
                    <div className="flex gap-6">
                       <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={24} />
                       <div>
                          <h5 className="font-bold text-xl uppercase tracking-tighter text-green-500 mb-2 underline underline-offset-4">DO</h5>
                          <p className="text-white/40 text-sm leading-relaxed">Use clear, actionable verbs for labels. "Create Account" is better than "Submit".</p>
                       </div>
                    </div>
                    <div className="flex gap-6">
                       <X className="text-red-500 shrink-0 mt-1" size={24} />
                       <div>
                          <h5 className="font-bold text-xl uppercase tracking-tighter text-red-500 mb-2 underline underline-offset-4">DON'T</h5>
                          <p className="text-white/40 text-sm leading-relaxed">Don't use two primary buttons in the same container. This confuses user priority.</p>
                       </div>
                    </div>
                 </div>
                 <div className="mt-12 pt-12 border-t border-white/10 font-mono text-blue-400 text-xs">
                    <p className="text-white/20 mb-4 uppercase tracking-widest font-sans text-[8px] font-black">REACT COMPONENT IMPLEMENTATION</p>
                    <code>import &#123; Button &#125; from "@curator/ui";</code>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Measuring Success */}
      <section className="py-20 bg-blue-600 text-white px-6">
         <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-12">
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter">Measuring Success</h2>
            <p className="text-white/60 text-xl md:text-2xl font-light italic text-right max-w-lg leading-snug">The design system delivered significant improvements across design, development, and business metrics.</p>
         </div>
      </section>

      {/* Component Lifecycle Pipeline */}
      <section className="py-24 bg-white px-6 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
           <div className="text-center mb-24 font-display italic">
              <h2 className="text-6xl font-black tracking-tighter">The Component Lifecycle</h2>
           </div>
           
           <div className="relative p-12 bg-neutral-50 rounded-[4rem] border border-neutral-100">
              <div className="flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
                 <PipelineNode label="Discovery" sub="Identifying global patterns" icon={Search} color="bg-blue-100 text-blue-600" />
                 <ArrowRight className="text-neutral-200 hidden md:block" />
                 <PipelineNode label="Design" sub="Figma component architecture" icon={Layout} color="bg-indigo-100 text-indigo-600" />
                 <ArrowRight className="text-neutral-200 hidden md:block" />
                 <PipelineNode label="Implementation" sub="React + Storybook build" icon={Code} color="bg-purple-100 text-purple-600" />
                 <ArrowRight className="text-neutral-200 hidden md:block" />
                 <PipelineNode label="Governance" sub="Release & Documentation" icon={BookOpen} color="bg-green-100 text-green-600" />
              </div>
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-neutral-100 -translate-y-1/2 hidden md:block" />
           </div>
        </div>
      </section>

      {/* Before vs After */}
      <section className="py-24 bg-white px-6">
        <div className="container mx-auto max-w-6xl text-neutral-900 border-t border-b border-neutral-100 py-20">
           <div className="grid md:grid-cols-2 gap-20">
              <div className="space-y-12">
                 <div className="inline-block px-6 py-2 rounded-lg font-black uppercase tracking-widest text-[10px] bg-red-100 text-red-600">
                    BEFORE
                 </div>
                 <h2 className="text-6xl font-display font-black tracking-tighter italic">Hyper-fragmented <br />Experience.</h2>
                 <div className="space-y-6">
                    {["No shared component library", "Hardcoded hex values", "Inconsistent spacing logic", "Average 2 week component build"].map((point, i) => (
                       <div key={i} className="flex gap-4 items-center group">
                          <X size={16} className="text-red-400 group-hover:scale-125 transition-transform" />
                          <p className="text-sm font-bold text-neutral-400 uppercase tracking-tight italic group-hover:text-neutral-900 transition-colors">{point}</p>
                       </div>
                    ))}
                 </div>
              </div>
              <div className="space-y-12">
                 <div className="inline-block px-6 py-2 rounded-lg font-black uppercase tracking-widest text-[10px] bg-blue-100 text-blue-600">
                    AFTER
                 </div>
                 <h2 className="text-6xl font-display font-black tracking-tighter italic">The Design <br />Infrastructure.</h2>
                 <div className="space-y-6">
                    {["Single Source of Truth", "Token-based styling", "Standardized 8pt Grid", "48h discovery-to-code speed"].map((point, i) => (
                       <div key={i} className="flex gap-4 items-center group">
                          <CheckCircle2 size={16} className="text-blue-500 group-hover:scale-125 transition-transform" />
                          <p className="text-sm font-bold text-neutral-900 uppercase tracking-tight italic">{point}</p>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-24 bg-neutral-900 text-white px-6">
         <div className="container mx-auto max-w-6xl">
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-20">Key <br /><span className="opacity-20 italic">Learnings</span></h2>
            <div className="grid md:grid-cols-3 gap-8">
               <LearningCard icon={Zap} title="People > Pixels" desc="The success of a design system is 20% design and 80% adoption. Stakeholder buy-in is the most critical component." />
               <LearningCard icon={Shield} title="Technical Debt" desc="Retrofitting a system into a legacy codebase is hard. Start with tokens and foundations first to build early momentum." />
               <LearningCard icon={BookOpen} title="Documentation Is UX" desc="If a component isn't documented, it doesn't exist. Documentation is the user experience for the product team." />
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

function LearningCard({ icon: Icon, title, desc }: { icon: LucideIcon, title: string, desc: string }) {
  return (
    <div className="p-12 rounded-[3.5rem] bg-white/5 border border-white/5 group hover:bg-white/10 transition-colors">
       <Icon className="text-blue-400 mb-8" size={32} />
       <h4 className="text-2xl font-display font-black mb-4 uppercase tracking-tighter italic">{title}</h4>
       <p className="text-white/40 text-sm leading-relaxed font-light">{desc}</p>
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

function HeroInfo({ label, value }: { label: string, value: string }) {
  return (
    <div>
      <p className="text-[8px] font-black text-neutral-400 uppercase mb-2 tracking-widest">{label}</p>
      <p className="font-bold text-xs uppercase tracking-tighter text-neutral-900">{value}</p>
    </div>
  );
}

function InsightStat({ value, label }: { value: string, label: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-12 rounded-[2.5rem] bg-indigo-50 border border-indigo-100 flex flex-col justify-between"
    >
       <h4 className="text-7xl font-display font-black tracking-tighter text-indigo-600 mb-4">{value}</h4>
       <p className="text-neutral-500 text-sm leading-relaxed">{label}</p>
    </motion.div>
  );
}

function ObjectiveItem({ icon: Icon, title, desc, delay = 0 }: { icon: LucideIcon, title: string, desc: string, delay?: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="p-8 rounded-3xl bg-neutral-50 border border-neutral-100 flex flex-col gap-4 group hover:bg-blue-600 transition-all duration-500"
    >
       <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-sm transition-transform group-hover:scale-110">
          <Icon size={24} />
       </div>
       <div>
          <h4 className="text-xl font-bold mb-4 italic tracking-tight group-hover:text-white transition-colors">{title}</h4>
          <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-white/60 transition-colors">{desc}</p>
       </div>
    </motion.div>
  );
}

function FoundationPill({ label, value }: { label: string, value: string }) {
  return (
    <div>
       <p className="text-[8px] font-black uppercase text-neutral-300 tracking-[0.2em] mb-1">{label}</p>
       <p className="font-bold text-neutral-600 text-xs italic">{value}</p>
    </div>
  );
}

function ComponentItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-4 text-xl font-bold tracking-tighter italic group cursor-default">
       <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white group-hover:scale-150 transition-all" />
       {text}
    </li>
  );
}

function DocItem({ label, value }: { label: string, value: string }) {
  return (
    <div className="group">
       <p className="text-[10px] font-black uppercase text-blue-600 mb-1 group-hover:translate-x-1 transition-transform">{label}</p>
       <p className="font-bold text-xs leading-tight">{value}</p>
    </div>
  );
}

function ProblemBox({ title, desc, stats }: { title: string, desc: string, stats: { value: string, label: string }[] }) {
  return (
    <div className="p-12 rounded-[3.5rem] bg-white/5 border border-white/10">
       <h4 className="text-3xl font-black mb-6">{title}</h4>
       <p className="text-white/40 text-lg leading-relaxed mb-12">{desc}</p>
       <div className="grid grid-cols-3 gap-4">
          {stats.map((s, i) => (
             <div key={i} className="space-y-1">
                <p className="text-2xl font-black text-blue-500">{s.value}</p>
                <p className="text-[8px] font-black uppercase tracking-widest text-white/20 leading-none">{s.label}</p>
             </div>
          ))}
       </div>
    </div>
  );
}

function ImpactMetric({ label, value, sub }: { label: string, value: string, sub: string }) {
  return (
    <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 text-center group hover:border-white/10 hover:bg-white/10 transition-all">
       <p className="text-[8px] font-black uppercase text-neutral-500 mb-4 tracking-widest">{label}</p>
       <p className="text-4xl font-display font-black mb-2">{value}</p>
       <p className="text-[10px] text-white/30 italic text-center font-medium leading-tight">{sub}</p>
    </div>
  );
}

function ResearchCard({ icon: Icon, title, desc, stats }: { icon: LucideIcon, title: string, desc: string, stats: { label: string, value: string }[] }) {
  return (
    <div className="p-10 rounded-[3rem] bg-neutral-900 text-white border border-white/5 flex flex-col justify-between">
       <div>
          <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-blue-600 mb-8">
             <Icon size={20} />
          </div>
          <h4 className="text-2xl font-bold uppercase tracking-tighter mb-4 italic leading-tight">{title}</h4>
          <p className="text-white/40 text-sm leading-relaxed mb-12">{desc}</p>
       </div>
       <div className="space-y-4 pt-10 border-t border-white/5">
          {stats.map((s, i) => (
             <div key={i} className="flex justify-between items-end">
                <p className="text-[10px] font-black uppercase text-neutral-500 tracking-widest">{s.label}</p>
                <p className="font-bold text-sm">{s.value}</p>
             </div>
          ))}
       </div>
    </div>
  );
}

function FindingItem({ num, title, desc, quote, author, stats }: { num: string, title: string, desc: string, quote?: string, author?: string, stats?: { value: string, label: string }[] }) {
  return (
    <div className="relative pl-16 group">
       <span className="absolute left-0 top-0 text-xl font-black text-neutral-100 group-hover:text-blue-600 transition-colors leading-none">{num}</span>
       <h4 className="text-2xl font-bold mb-4 uppercase tracking-tighter italic">{title}</h4>
       <p className="text-neutral-500 text-sm leading-relaxed mb-6">{desc}</p>
       {quote && (
          <div className="pl-6 border-l-2 border-neutral-100 italic">
             <p className="text-sm text-neutral-400 mb-2">"{quote}"</p>
             <p className="text-[8px] font-black text-neutral-300 uppercase tracking-widest">— {author}</p>
          </div>
       )}
       {stats && (
          <div className="flex gap-12 mt-6">
             {stats.map((s, i) => (
                <div key={i}>
                   <p className="text-2xl font-black text-blue-600 mb-1">{s.value}</p>
                   <p className="text-[10px] font-black text-neutral-300 uppercase tracking-widest">{s.label}</p>
                </div>
             ))}
          </div>
       )}
    </div>
  );
}

function AuditStat({ title, value, sub, target }: { title: string, value: string, sub: string, target: string }) {
  return (
    <div className="p-10 rounded-[2.5rem] bg-white border border-neutral-100 shadow-sm flex flex-col items-center justify-center text-center">
       <p className="text-[10px] font-black text-neutral-300 uppercase tracking-widest mb-2">{title}</p>
       <p className="text-5xl font-display font-black leading-none mb-2">{value}</p>
       <p className="text-neutral-400 text-xs font-bold uppercase mb-6">{sub}</p>
       <div className="px-6 py-2 bg-blue-50 text-blue-600 rounded-full font-bold text-[10px] uppercase tracking-widest flex items-center gap-2">
          <ArrowRight size={12} /> {target}
       </div>
    </div>
  );
}

function PersonaTag({ text, bg }: { text: string, bg: string }) {
  return (
    <span className={`px-4 py-1.5 rounded-full ${bg} font-black text-[9px] uppercase tracking-widest`}>
       {text}
    </span>
  );
}

function HierarchyCard({ level, title, desc, items, highlighted = false }: { level: string, title: string, desc: string, items: string[], highlighted?: boolean }) {
  return (
    <div className={`p-10 rounded-[3rem] ${highlighted ? 'bg-blue-600 text-white' : 'bg-white/5 border border-white/5'} flex flex-col justify-between aspect-square group hover:scale-[1.02] transition-transform`}>
       <div className="space-y-6">
          <div className="flex items-center gap-4">
             <div className={`w-8 h-8 rounded-2xl flex items-center justify-center text-[10px] font-black ${highlighted ? 'bg-white/20' : 'bg-blue-600'}`}>{level.padStart(2, '0')}</div>
             <div className={`h-[1px] flex-1 ${highlighted ? 'bg-white/10' : 'bg-white/5'}`} />
          </div>
          <h4 className="text-2xl font-bold uppercase tracking-tighter italic">{title}</h4>
          <p className={`text-sm leading-relaxed ${highlighted ? 'text-white/60' : 'text-white/40'}`}>{desc}</p>
       </div>
       <div className="flex flex-wrap gap-2 mt-8">
          {items.map((item, i) => (
             <span key={i} className={`px-3 py-1 rounded-lg ${highlighted ? 'bg-white/10' : 'bg-white/5'} text-[8px] font-black uppercase tracking-widest`}>{item}</span>
          ))}
       </div>
    </div>
  );
}

function TokenFeature({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="group">
       <h4 className="font-bold text-xl mb-2 group-hover:text-blue-600 transition-colors uppercase tracking-tight italic">{title}</h4>
       <p className="text-white/40 text-sm leading-relaxed italic">{desc}</p>
    </div>
  );
}
