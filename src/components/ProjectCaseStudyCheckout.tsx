import { motion } from 'motion/react';
import { X, ShoppingCart, UserMinus, ShieldCheck, Zap, ArrowRight, MousePointer2, AlertCircle, CheckCircle2, UserPlus, CreditCard, Lock, Eye, Clock, LucideIcon, TrendingUp, Layout, Search } from 'lucide-react';

interface ProjectCaseStudyCheckoutProps {
  onClose: () => void;
}

export default function ProjectCaseStudyCheckout({ onClose }: ProjectCaseStudyCheckoutProps) {
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
      <header className="relative pt-32 pb-40 px-6 bg-[#0f0f0f] text-white overflow-hidden min-h-screen flex items-center">
        <div className="container mx-auto max-w-[1400px] relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative z-20">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 mb-12 px-4 py-1.5 rounded-full bg-[#e2ff46]/10 border border-[#e2ff46]/20"
              >
                <div className="w-2 h-2 rounded-full bg-[#e2ff46] animate-pulse" />
                <span className="text-[#e2ff46] text-[10px] font-black uppercase tracking-widest">Case Study • Conversion Optimization</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-7xl md:text-8xl xl:text-9xl font-display font-black tracking-tightest mb-12 leading-[0.8] uppercase"
              >
                Optimizing Checkout <br />
                <span className="text-[#e2ff46] italic">Experience.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-white/60 text-xl leading-relaxed font-light max-w-xl mb-16 italic"
              >
                Redesigning the end-to-end transactional flow to reduce cart abandonment and drive record-breaking conversion growth.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="grid grid-cols-3 gap-12 py-10 border-t border-white/10"
              >
                <HeroInfo label="ROLE" value="Product Designer" />
                <HeroInfo label="IMPACT" value="+28% Conv." />
                <HeroInfo label="TIMELINE" value="5 Weeks" />
              </motion.div>
            </div>

            {/* Right Column: 3D Visual Section */}
            <div className="relative perspective-[2000px]">
              <motion.div 
                initial={{ opacity: 0, rotateY: 20, rotateX: 10, scale: 0.9, x: 50 }}
                animate={{ opacity: 1, rotateY: 10, rotateX: 5, scale: 1, x: 0 }}
                whileHover={{ rotateY: 0, rotateX: 0, scale: 1.02 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ transformStyle: 'preserve-3d' }}
                className="relative z-10"
              >
                <div className="relative aspect-square md:aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border border-white/10">
                   <img 
                    src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1200" 
                    alt="Checkout Interaction" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-neutral-900/40 mix-blend-overlay" />
                  
                  {/* Floating Action Button */}
                  <motion.div 
                    style={{ transform: 'translateZ(100px)' }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#e2ff46] text-black px-10 py-5 rounded-full font-black text-2xl flex items-center gap-4 shadow-3xl"
                  >
                    Checkout 🥳
                  </motion.div>
                </div>

                {/* Floating Stats Card */}
                <motion.div 
                  initial={{ opacity: 0, z: -50, scale: 0.8 }}
                  animate={{ opacity: 1, z: 50, scale: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  style={{ transform: 'translateZ(50px)' }}
                  className="absolute -bottom-10 -right-10 w-64 h-40 bg-neutral-900 border border-white/10 rounded-[2.5rem] p-8 shadow-2xl z-20 flex flex-col justify-between"
                >
                  <div className="flex justify-between items-center">
                    <TrendingUp className="text-[#e2ff46]" size={24} />
                    <div className="px-3 py-1 bg-[#e2ff46]/10 rounded-full">
                       <span className="text-[8px] font-black uppercase text-[#e2ff46]">Live Tracker</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-4xl font-display font-black tracking-tighter italic">92%</p>
                    <p className="text-[10px] font-black uppercase text-white/30 tracking-widest">Efficiency</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e2ff46]/10 blur-[150px] rounded-full -z-10" />
            </div>
          </div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </header>

      {/* KPI Section */}
      <section className="py-24 bg-white border-b border-neutral-100 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-6xl font-display font-black tracking-tighter mb-2 text-neutral-900/5 uppercase"
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
            KEY METRICS
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-12 text-left">
            <KPIItem label="Cart Abandonment" value="72%" sub="INDUSTRY AVERAGE: 69.8%" trend="up" />
            <KPIItem label="Payment Drop-off" value="40%" sub="CRITICAL FRICTION POINT" trend="neutral" />
            <KPIItem label="Checkout Time" value="4.5m" sub="TARGET: UNDER 2 MINUTES" trend="down" />
          </div>

          <div className="mt-20 p-12 bg-neutral-900 text-white rounded-[3rem] inline-block">
             <p className="text-[10px] font-black uppercase text-neutral-500 mb-4 tracking-[0.2em]">Estimated Impact</p>
             <div className="text-7xl font-display font-black tracking-tighter text-[#e2ff46]">+28%</div>
             <p className="text-sm font-bold uppercase tracking-tight text-white/40 mt-2">Conversion increase</p>
          </div>
        </div>
      </section>

      {/* Strategic Architecture */}
      <section className="py-24 bg-white px-6 text-center">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-6xl font-display font-black tracking-tighter mb-2 text-rose-600/5 uppercase italic"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
             <ObjectiveCard icon={TrendingUp} title="Increase conversion" desc="Reduce drop-offs at each stage of the checkout process." color="text-amber-500" delay={0.2} />
             <ObjectiveCard icon={UserMinus} title="Reduce friction" desc="Simplify payment selection and form completion." color="text-yellow-500" delay={0.3} />
             <ObjectiveCard icon={ShieldCheck} title="Improve trust" desc="Add security markers and transparent pricing." color="text-green-600" delay={0.4} />
             <ObjectiveCard icon={Zap} title="Enable faster checkout" desc="Implement guest checkout and autofill features." color="text-blue-600" delay={0.5} />
          </div>
        </div>
      </section>

      {/* System Structure */}
      <section className="py-24 bg-neutral-50 px-6">
        <div className="container mx-auto max-w-6xl">
           <div className="text-center mb-24">
              <h2 className="text-5xl font-display font-black tracking-tighter">System Hierarchy Mapping</h2>
           </div>
           
           <div className="relative">
              <div className="flex justify-center mb-12">
                 <div className="bg-neutral-900 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs">CHECKOUT ROOT</div>
              </div>
              <div className="grid md:grid-cols-2 gap-8 relative">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-neutral-200 hidden md:block" />
                 
                 {/* Identification & Options */}
                 <div className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm">
                    <div className="bg-amber-500 text-white px-6 py-2 rounded-lg inline-block font-black uppercase tracking-widest text-[10px] mb-8">USER IDENTIFICATION</div>
                    <div className="space-y-3">
                       {['Guest Checkout Path', 'Social Login (Auth)', 'Member Recognition', 'Password Retrieval', 'Saved Prefs (Autofill)', 'Identity Verification'].map(item => (
                          <div key={item} className="p-4 bg-neutral-50 rounded-xl text-sm font-bold text-neutral-600 italic hover:bg-amber-50 transition-colors cursor-default">{item}</div>
                       ))}
                    </div>
                 </div>

                 {/* Transactional Engine */}
                 <div className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm">
                    <div className="bg-neutral-800 text-white px-6 py-2 rounded-lg inline-block font-black uppercase tracking-widest text-[10px] mb-8">TRANSACTIONAL ENGINE</div>
                    <div className="space-y-3">
                       {['Cart Persistence', 'Inventory Check', 'Tax/Tax Calc', 'Shipping Selection', 'Payment Gateway Integration', 'Order Confirmation'].map(item => (
                          <div key={item} className="p-4 bg-neutral-50 rounded-xl text-sm font-bold text-neutral-600 italic hover:bg-neutral-100 transition-colors cursor-default">{item}</div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Checkout Pipeline */}
      <section className="py-24 bg-white px-6 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
           <div className="text-center mb-24">
              <h2 className="text-6xl font-display font-black tracking-tighter">The Optimized Flow Pipeline</h2>
           </div>
           
           <div className="relative p-12 bg-neutral-50 rounded-[4rem] border border-neutral-100">
              <div className="flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
                 <PipelineNode label="Entry Point" sub="Cart Overview & Selection" icon={ShoppingCart} color="bg-blue-100 text-blue-600" />
                 <ArrowRight className="text-neutral-200 hidden md:block" />
                 <PipelineNode label="Identity" sub="Guest vs Registry choice" icon={UserPlus} color="bg-indigo-100 text-indigo-600" />
                 <ArrowRight className="text-neutral-200 hidden md:block" />
                 <PipelineNode label="Fulfillment" sub="Address & Shipping logic" icon={Layout} color="bg-purple-100 text-purple-600" />
                 <ArrowRight className="text-neutral-200 hidden md:block" />
                 <PipelineNode label="Settlement" sub="Payment & Confirmation" icon={CreditCard} color="bg-green-100 text-green-600" />
              </div>
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-neutral-100 -translate-y-1/2 hidden md:block" />
           </div>
        </div>
      </section>

      {/* Competitive Landscape */}
      <section className="py-24 bg-[#2d3748] text-white px-6 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
           <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-60">COMPETITOR ANALYSIS</p>
           <h2 className="text-6xl font-display font-black tracking-tighter mb-20">The Market Landscape</h2>
           
           <div className="grid lg:grid-cols-2 gap-20">
              <div>
                 <p className="text-xs font-black uppercase tracking-widest mb-8 opacity-40">ANALYZED PLATFORMS</p>
                 <div className="flex gap-4 mb-12">
                    {['Amazon', 'Shopify', 'Nike'].map(tool => (
                       <div key={tool} className="px-8 py-4 bg-white/10 rounded-xl font-bold italic tracking-tight">{tool}</div>
                    ))}
                 </div>
                 
                 <div className="bg-white p-12 rounded-[3.5rem] text-neutral-900">
                    <p className="text-amber-500 font-black text-[10px] uppercase tracking-widest mb-4">OPPORTUNITY</p>
                    <h4 className="text-4xl font-display font-black tracking-tighter leading-none mb-6">Moving from multi-step forms to a single-touch transactional journey.</h4>
                 </div>
              </div>
              
              <div className="space-y-12">
                 <p className="text-xs font-black uppercase tracking-widest opacity-40">KEY FINDINGS</p>
                 <ComparisonFinding title="Fragmented Experiences" desc="Most platforms separate cart and checkout into two entirely different visual systems." />
                 <ComparisonFinding title="Mandatory Friction" desc="High-end brands often force high-friction sign-ups, assuming high value overcomes pain." />
                 <ComparisonFinding title="Dark Patterns" desc="Surprise costs added at the absolute final moment to minimize early abandonment." />
                 <ComparisonFinding title="Lack of UPI focus" desc="Many global players still prioritize CC/DC over easier regional payment methods like UPI." />
              </div>
           </div>
        </div>
      </section>

      {/* Before vs After */}
      <section className="py-24 bg-white px-6">
        <div className="container mx-auto max-w-6xl">
           <div className="text-center mb-20 font-display italic">
              <h2 className="text-7xl font-black tracking-tighter">The Transformation</h2>
           </div>
           
           <div className="grid md:grid-cols-2 gap-8">
              <ComparisonCard 
                type="BEFORE" 
                title="8-10 Step Multi-Page Checkout" 
                points={["Forced account creation", "Confusing address forms", "Hidden costs at final step", "Slow page transitions"]}
                isBefore
              />
              <ComparisonCard 
                type="AFTER" 
                title="3-Step Optimized Conversion Flow" 
                points={["Seamless Guest Checkout", "Autofill & Smart Lookup", "Transparent pricing breakdown", "1-Tap UPI / Wallet payments"]}
              />
           </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-24 bg-neutral-900 text-white px-6">
         <div className="container mx-auto max-w-6xl">
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-20">Key <br /><span className="opacity-20 italic">Learnings</span></h2>
            <div className="grid md:grid-cols-3 gap-8">
               <LearningCard icon={Zap} title="Speed = Trust" desc="The faster a user can complete a transaction, the more they trust the system's efficiency and security." />
               <LearningCard icon={Search} title="Transparency" desc="Users abandon for many reasons, but perceived dishonesty regarding pricing is the hardest to recover from." />
               <LearningCard icon={ShieldCheck} title="Micro-Signals" desc="Small trust badges and security indicators at the payment stage significantly reduce anxiety for high-value purchases." />
            </div>
         </div>
      </section>

      {/* Solution Framework */}
      <section className="py-24 bg-neutral-100 px-6 overflow-hidden">
         <div className="container mx-auto max-w-6xl">
            <div className="bg-white rounded-[4rem] overflow-hidden shadow-sm border border-neutral-200 flex flex-col md:flex-row">
               <div className="p-16 md:w-2/5 flex flex-col justify-center">
                  <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-12">The Solution <br /> Framework.</h2>
                  <div className="p-8 rounded-3xl bg-neutral-900 text-white">
                     <p className="text-[10px] font-black uppercase text-neutral-500 mb-4 tracking-widest">CORE FOCUS</p>
                     <p className="text-2xl font-bold italic">Simplifying the journey from cart to confirmation.</p>
                  </div>
               </div>
               <div className="md:w-3/5 bg-neutral-200">
                  <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200" alt="Framework" className="w-full h-full object-cover" />
               </div>
            </div>
         </div>
      </section>

      {/* The Problem Breakdown */}
      <section className="py-24 bg-[#0f0f0f] text-white px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <p className="text-[10px] font-black uppercase text-neutral-500 tracking-[0.2em] mb-8">USER JOURNEY ANALYSIS</p>
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-12 leading-tight">
              Users abandon purchases due to a long, confusing, and trust-deficient checkout experience
            </h2>
            <p className="text-white/40 text-lg italic">Our analysis revealed multiple friction points that create barriers to purchase completion.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
             <ProblemBox 
               icon={UserPlus} 
               title="Forced Login" 
               desc="Users are required to create an account before checkout, creating unnecessary friction." 
               quote="I just wanted to buy... why create account?"
             />
             <ProblemBox 
               icon={Clock} 
               title="Long Forms" 
               desc="8-10 steps spread across multiple pages increase cognitive load and abandonment." 
               quote="CURRENT: 8-10 STEPS"
             />
             <ProblemBox 
               icon={Eye} 
               title="Hidden Pricing" 
               desc="Shipping charges and taxes shown late in the process cause sticker shock and exits." 
               quote="Unexpected costs at checkout"
             />
             <ProblemBox 
               icon={Lock} 
               title="Trust Issues" 
               desc="Lack of security indicators and unclear payment options reduce user confidence." 
               stat="68%"
               statLabel="USERS CONCERNED ABOUT SAFETY"
             />
          </div>

          <div className="pt-20 border-t border-white/10">
             <p className="text-[10px] font-black uppercase text-neutral-500 text-center mb-16 tracking-[0.4em]">THE CURRENT BREAKDOWN FLOW</p>
             <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                <FlowStep number="1" title="Add to cart" desc="User selects products — No friction" />
                <FlowStep number="2" title="Forced login" desc="Major drop-off point — Users exit here" highlight />
                <FlowStep number="3" title="Fill long forms" desc="Multiple pages of information entry" />
                <FlowStep number="4" title="Surprise costs" desc="Hidden shipping and taxes revealed" />
                <FlowStep number="X" title="EXIT" desc="Cart abandoned — Purchase incomplete" isEnd />
             </div>
          </div>
        </div>
      </section>

      {/* Research Insights */}
      <section className="py-24 bg-white px-6">
        <div className="container mx-auto max-w-6xl">
           <div className="grid md:grid-cols-2 gap-12 items-end mb-20">
              <h2 className="text-6xl md:text-9xl font-display font-black tracking-tighter leading-[0.85]">Research <br /><span className="italic opacity-10">Insights</span></h2>
              <p className="text-neutral-500 text-lg">We conducted comprehensive user research to understand pain points and behaviors. By triangulating qualitative interviews with quantitative analytics, we uncovered friction points that stall conversion.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <InsightCard title="USER INTERVIEWS" desc="5 in-depth interviews with recent shoppers focusing on specific checkout friction." meta="DURATION: 45 MIN EACH" />
              <InsightCard title="ANALYTICS REVIEW" desc="Cart abandonment funnel analysis using behavioral tracking across the end-to-end journey." meta="SESSIONS: 50K+" />
              <InsightCard title="APP REVIEWS" desc="Analysis of user feedback and ratings to identify common recurring complaints." meta="REVIEWS: 200+ ANALYZED" />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-12 rounded-[3rem] bg-[#0f0f0f] text-white flex flex-col justify-center">
                 <h4 className="text-5xl font-black mb-4 text-[#e2ff46]">65%</h4>
                 <p className="text-xl font-bold uppercase tracking-tighter leading-tight">Forced Login Friction</p>
                 <p className="text-white/40 text-sm mt-4">High abandonment rate for forced account creation compared to only 28% for returning users.</p>
              </div>
              <QuoteCard quote="I just wanted to buy... why create account?" author="FIRST-TIME BUYER, AGE 28" color="bg-neutral-50" />
              <QuoteCard quote="The final price was $30 more than I expected. I left." author="ONLINE SHOPPER, AGE 34" color="bg-neutral-50" />
              <div className="p-12 rounded-[3rem] bg-neutral-100 flex flex-col justify-center">
                 <h4 className="text-5xl font-black mb-4">40%</h4>
                 <p className="text-xl font-bold uppercase tracking-tighter leading-tight">Unexpected Costs</p>
                 <p className="text-neutral-500 text-sm mt-4">Users cited 'surprise shipping charges' at the final step as a primary reason for immediate cart exit.</p>
              </div>
              <div className="p-12 rounded-[3rem] bg-neutral-900 text-white flex flex-col justify-center">
                 <IconBoxSmall icon={MousePointer2} color="text-[#e2ff46]" title="Complex Payment Flow" desc="Multi-step processes confused mobile users, leading to high drop-offs mid-transaction." />
              </div>
              <QuoteCard quote="Too many steps. I gave up halfway through." author="MOBILE USER, AGE 25" color="bg-neutral-50" />
           </div>
        </div>
      </section>

      {/* User Persona */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-[4rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
             <div className="md:w-1/2 p-20 flex flex-col justify-between">
                <div>
                   <h2 className="text-5xl font-black tracking-tighter mb-4">Ankit Verma</h2>
                   <p className="text-neutral-400 font-bold uppercase tracking-widest text-xs mb-12">AGE 30 • MUMBAI • SOFTWARE ENGINEER</p>
                   
                   <div className="grid grid-cols-2 gap-12">
                      <div>
                         <h5 className="text-[10px] font-black uppercase text-neutral-300 mb-4">GOALS</h5>
                         <ul className="text-xs font-bold space-y-2">
                            <li>Quick checkout</li>
                            <li>Secure payment</li>
                            <li>Transparent pricing</li>
                            <li>Easy tracking</li>
                         </ul>
                      </div>
                      <div>
                         <h5 className="text-[10px] font-black uppercase text-neutral-300 mb-4">PAIN POINTS</h5>
                         <ul className="text-xs font-bold space-y-2">
                            <li>Forced creation</li>
                            <li>Long forms</li>
                            <li>Hidden charges</li>
                            <li>Unclear security</li>
                         </ul>
                      </div>
                   </div>
                </div>
                
                <div className="mt-12 bg-neutral-50 p-6 rounded-2xl flex gap-4 overflow-x-auto whitespace-nowrap">
                   <Tag text="FREQUENT SHOPPER" />
                   <Tag text="MOBILE-FIRST" />
                   <Tag text="UPI/WALLETS" />
                </div>
             </div>
             <div className="md:w-1/2 aspect-square md:aspect-auto">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
             </div>
          </div>
        </div>
      </section>

      {/* Solution Strategy */}
      <section className="py-24 bg-[#0f0f0f] text-white px-6">
        <div className="container mx-auto max-w-6xl">
           <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div>
                 <h2 className="text-7xl md:text-9xl font-display font-black tracking-tighter leading-none mb-8">Solution Strategy</h2>
                 <p className="text-white/40 text-xl font-light italic">Based on our research insights, we designed targeted solutions to address each pain point...</p>
              </div>
              <div className="text-right">
                 <h3 className="text-2xl font-display font-black italic mb-2">Transformation</h3>
                 <p className="text-neutral-500 uppercase tracking-widest text-xs font-black">OPERATIONAL PHASE II</p>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <StrategyCard icon={UserPlus} title="Guest Checkout" desc="Allow users to complete purchases without creating an account." impact="+25% conversion" />
              <StrategyCard icon={Layout} title="One-Page Checkout" desc="Consolidate steps to reduce friction and cognitive load." impact="60% fewer steps" />
              <StrategyCard icon={Eye} title="Clear Pricing Upfront" desc="100% transparency with no hidden charges throughout the flow." impact="100% clarity" />
              <StrategyCard icon={ShieldCheck} title="Trust Signals" desc="Security badges and SSL indicators at every point of entry." impact="+45% score" />
           </div>

           <div className="mt-32 pt-20 border-t border-white/10">
              <h3 className="text-4xl font-display font-black text-center mb-20 tracking-tight">User Journey Transformation</h3>
              <div className="space-y-4">
                 <JourneyTrack label="CURRENT PAIN POINTS" steps={['Add to cart', 'Forced login', 'Long forms', 'Surprise costs']} result="72% abandon" color="bg-red-500/10 border-red-500/20" />
                 <JourneyTrack label="OPTIMIZED STRATEGY" steps={['Add to cart', 'Guest checkout', 'Autofill', 'Quick payment']} result="Success" highlight color="bg-green-500/10 border-green-500/20" />
              </div>
           </div>
        </div>
      </section>

      {/* Final Visuals */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="container mx-auto max-w-6xl">
           <h2 className="text-8xl md:text-[10rem] font-display font-black tracking-tighter leading-none mb-4">Checkout</h2>
           <h3 className="text-8xl md:text-[10rem] font-display font-black tracking-tighter leading-none italic opacity-10 mb-12">Flow Designs</h3>
           <p className="text-neutral-400 text-xl font-light mb-20 max-w-2xl">High-fidelity designs showcasing the optimized checkout experience across 9 key screens.</p>
           
           <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-full border border-neutral-100 bg-neutral-50 shadow-sm"
           >
              <img 
                src="/regenerated_image_1777487764321.png" 
                alt="Checkout Flow Design" 
                className="w-full h-auto block"
              />
           </motion.div>
        </div>
      </section>

      {/* Confirmation Section */}
      <section className="py-24 bg-white text-center px-6">
         <div className="container mx-auto max-w-3xl">
            <div className="w-24 h-24 rounded-full bg-green-500 text-white flex items-center justify-center mx-auto mb-12 shadow-xl shadow-green-500/20">
               <CheckCircle2 size={48} />
            </div>
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-4">Order Confirmed</h2>
            <p className="text-neutral-400 font-bold uppercase tracking-[0.2em] mb-16">ORDER ID: #MONO-92834-SL</p>
            <div className="p-12 bg-neutral-50 rounded-[3rem] border border-neutral-100 max-w-md mx-auto">
               <p className="text-[10px] font-black uppercase text-neutral-300 mb-2">Expected Delivery</p>
               <p className="text-3xl font-display font-black">Friday, Dec 14</p>
            </div>
         </div>
      </section>

      {/* Design System */}
      <section className="py-24 bg-neutral-900 text-white px-6">
        <div className="container mx-auto max-w-6xl">
           <div className="flex justify-between items-end mb-20 border-b border-white/10 pb-12">
              <h2 className="text-9xl font-display font-black tracking-tighter">Design S</h2>
           </div>
           <div className="grid lg:grid-cols-2 gap-20">
              <div>
                 <h4 className="text-[10px] font-black uppercase text-neutral-500 mb-8 tracking-widest">PALETTE</h4>
                 <div className="flex gap-4">
                    <ColorBox color="bg-[#0f0f0f]" label="Jet" />
                    <ColorBox color="bg-[#e2ff46]" label="Lime" />
                    <ColorBox color="bg-white" border label="Pure" />
                    <ColorBox color="bg-red-500" label="Accent" />
                    <ColorBox color="bg-green-500" label="Success" />
                 </div>
                 <div className="mt-20">
                    <h4 className="text-[10px] font-black uppercase text-neutral-500 mb-8 tracking-widest">TYPE HIERARCHY</h4>
                    <h2 className="text-7xl font-display font-black mb-4">Headline</h2>
                    <p className="text-xl font-light text-neutral-400">Functional body copy set in Mono-ope.</p>
                 </div>
              </div>
              <div className="space-y-12">
                 <div>
                    <h4 className="text-[10px] font-black uppercase text-neutral-500 mb-8 tracking-widest">ACTION ELEMENTS</h4>
                    <div className="flex gap-4">
                       <div className="px-12 py-5 rounded-full bg-blue-600 font-black text-xs uppercase tracking-widest">Primary Build</div>
                       <div className="px-12 py-5 rounded-full bg-white/5 border border-white/10 font-black text-xs uppercase tracking-widest">Secondary Ghost</div>
                    </div>
                 </div>
                 <div className="grid grid-cols-2 gap-12">
                    <div>
                       <h4 className="text-[10px] font-black uppercase text-neutral-500 mb-8 tracking-widest">INPUTS</h4>
                       <div className="border-b border-white/20 pb-4 mb-4">
                          <p className="text-[10px] text-neutral-500 font-black mb-2 uppercase">Full Name</p>
                          <p className="font-bold">Julian Casablancas</p>
                       </div>
                       <div className="border-b-2 border-blue-600 pb-4">
                          <p className="text-[10px] text-blue-500 font-black mb-2 uppercase">Active State</p>
                          <p className="font-bold">Type here...</p>
                       </div>
                    </div>
                    <div>
                       <h4 className="text-[10px] font-black uppercase text-neutral-500 mb-8 tracking-widest">DESIGN FEATURES</h4>
                       <div className="space-y-6">
                           <div className="flex items-center gap-3"><Zap size={20} className="text-amber-500" /> <span className="font-bold text-xs uppercase tracking-widest">Autofill Forms</span></div>
                           <div className="flex items-center gap-3"><CheckCircle2 size={20} className="text-green-500" /> <span className="font-bold text-xs uppercase tracking-widest">Trust Indicators</span></div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 text-center bg-white border-t border-neutral-100">
         <h3 className="text-4xl font-display font-black mb-12">Thank you for reviewing this work</h3>
         <p className="text-neutral-400 mb-12 italic">Interested in discussing this project or exploring collaboration opportunities?</p>
         <div className="flex justify-center gap-6">
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
      <p className="text-[10px] font-black text-neutral-500 uppercase mb-1 tracking-widest">{label}</p>
      <p className="font-bold text-sm">{value}</p>
    </div>
  );
}

function KPIItem({ label, value, sub, trend }: { label: string, value: string, sub: string, trend: 'up' | 'down' | 'neutral' }) {
  return (
    <div>
       <div className="flex justify-between items-end mb-2">
          <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">{label}</p>
          <p className="text-2xl font-display font-black text-neutral-900">{value}</p>
       </div>
       <div className="h-[2px] w-full bg-neutral-100 relative mb-2">
          <div className={`absolute top-0 left-0 h-full ${trend === 'up' ? 'bg-red-500' : trend === 'down' ? 'bg-green-500' : 'bg-neutral-300'} w-2/3`} />
       </div>
       <p className="text-[10px] font-black text-neutral-300 uppercase tracking-widest italic">{sub}</p>
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
    <div className="bg-neutral-50 rounded-[4rem] overflow-hidden border border-neutral-100 group hover:shadow-2xl transition-all duration-700">
       <div className="p-12">
          <div className={`inline-block px-6 py-2 rounded-lg font-black uppercase tracking-widest text-[10px] mb-8 ${isBefore ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
             {type}
          </div>
          <h4 className="text-3xl font-display font-black tracking-tighter leading-tight mb-8">{title}</h4>
          <div className="space-y-4">
             {points.map((point, i) => (
                <div key={i} className="flex gap-4 items-center">
                   {isBefore ? <X className="text-red-400 shrink-0" size={14} /> : <CheckCircle2 className="text-green-500 shrink-0" size={14} />}
                   <p className="text-xs font-bold text-neutral-400 uppercase tracking-tight italic">{point}</p>
                </div>
             ))}
          </div>
       </div>
    </div>
  );
}

function ComparisonFinding({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="flex gap-6 items-start group">
       <div className="mt-1">
          <CheckCircle2 className="text-amber-400" size={20} />
       </div>
       <div>
          <h4 className="font-bold text-xl tracking-tight mb-2 italic group-hover:text-amber-400 transition-colors uppercase">{title}</h4>
          <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
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

function ObjectiveCard({ icon: Icon, title, desc, color, delay = 0 }: { icon: LucideIcon, title: string, desc: string, color: string, delay?: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="p-8 rounded-3xl bg-neutral-50 border border-neutral-100 flex flex-col gap-4 group hover:bg-rose-600 transition-all duration-500"
    >
       <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-rose-600 shadow-sm transition-transform group-hover:scale-110">
          <Icon size={24} />
       </div>
       <div>
          <h4 className="text-xl font-bold mb-4 tracking-tight group-hover:text-white transition-colors">{title}</h4>
          <p className="text-neutral-500 text-sm leading-relaxed group-hover:text-white/60 transition-colors">{desc}</p>
       </div>
    </motion.div>
  );
}

function ProblemBox({ icon: Icon, title, desc, quote, stat, statLabel }: { icon: LucideIcon, title: string, desc: string, quote?: string, stat?: string, statLabel?: string }) {
  return (
    <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 group hover:border-white/20 transition-colors">
       <Icon className="text-amber-500 mb-8" size={24} />
       <h4 className="text-2xl font-bold mb-4">{title}</h4>
       <p className="text-white/40 text-sm leading-relaxed mb-8">{desc}</p>
       {quote && (
          <div className="pl-6 border-l-2 border-white/10 italic text-white/20 text-xs">
             "{quote}"
          </div>
       )}
       {stat && (
          <div className="mt-8">
             <p className="text-3xl font-black mb-1">{stat}</p>
             <p className="text-[10px] font-black uppercase text-neutral-500 tracking-widest">{statLabel}</p>
          </div>
       )}
    </div>
  );
}

function FlowStep({ number, title, desc, highlight = false, isEnd = false }: { number: string, title: string, desc: string, highlight?: boolean, isEnd?: boolean }) {
  return (
    <div className="flex-1 w-full md:w-auto">
       <div className="flex items-center gap-4 mb-4">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black ${highlight ? 'bg-amber-500 text-black' : isEnd ? 'bg-red-600 text-white' : 'bg-white/10 text-white'}`}>
             {number}
          </div>
          <div className="h-[1px] flex-grow bg-white/10 hidden md:block" />
       </div>
       <h4 className={`text-sm font-bold mb-2 uppercase tracking-widest ${highlight ? 'text-amber-500' : isEnd ? 'text-red-500' : 'text-white'}`}>{title}</h4>
       <p className="text-white/20 text-[10px] font-medium leading-tight">{desc}</p>
    </div>
  );
}

function InsightCard({ title, desc, meta }: { title: string, desc: string, meta: string }) {
  return (
    <div className="p-10 rounded-[3rem] bg-[#0f0f0f] text-white border border-white/10">
       <IconBoxSmall icon={Search} color="text-white/20" title={title} desc={desc} />
       <p className="text-[10px] font-black uppercase text-neutral-500 mt-8 tracking-widest">{meta}</p>
    </div>
  );
}

function IconBoxSmall({ icon: Icon, color, title, desc }: { icon: LucideIcon, color: string, title: string, desc: string }) {
  return (
    <div className="space-y-6">
       <Icon className={color} size={24} />
       <h4 className="text-xl font-bold uppercase tracking-widest">{title}</h4>
       <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function QuoteCard({ quote, author, color }: { quote: string, author: string, color: string }) {
  return (
    <div className={`p-12 rounded-[3rem] ${color} flex flex-col justify-between`}>
       <p className="text-2xl font-display font-black leading-tight italic">"{quote}"</p>
       <p className="text-[10px] font-black uppercase text-neutral-300 tracking-widest mt-8">{author}</p>
    </div>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <span className="px-4 py-2 border border-neutral-100 rounded-full font-black text-[10px] text-neutral-300 uppercase tracking-widest shrink-0">
      {text}
    </span>
  );
}

function StrategyCard({ icon: Icon, title, desc, impact }: { icon: LucideIcon, title: string, desc: string, impact: string }) {
  return (
    <div className="p-10 rounded-[3rem] border border-white/10 flex flex-col justify-between aspect-square group hover:bg-white hover:text-black transition-all">
       <div>
          <Icon className="text-white/20 group-hover:text-amber-500 mb-8" size={24} />
          <h4 className="text-2xl font-bold mb-4 leading-tight">{title}</h4>
          <p className="text-white/40 group-hover:text-black/60 text-sm leading-relaxed">{desc}</p>
       </div>
       <div className="mt-8">
          <p className="text-[10px] font-black uppercase tracking-widest opacity-20 group-hover:opacity-100 group-hover:text-amber-500">IMPACT</p>
          <p className="text-lg font-black italic">{impact}</p>
       </div>
    </div>
  );
}

function JourneyTrack({ label, steps, result, color, highlight = false }: { label: string, steps: string[], result: string, color: string, highlight?: boolean }) {
  return (
    <div className={`p-10 rounded-3xl border ${color}`}>
       <div className="grid grid-cols-1 md:grid-cols-6 items-center gap-8">
          <div className="text-[10px] font-black uppercase tracking-widest opacity-20">{label}</div>
          <div className="md:col-span-4 flex gap-4 flex-wrap">
             {steps.map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                   <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold">{step}</div>
                   {i < steps.length - 1 && <ArrowRight size={14} className="opacity-10" />}
                </div>
             ))}
          </div>
          <div className={`text-right font-black uppercase tracking-widest text-xs ${highlight ? 'text-green-500' : 'text-red-500'}`}>
             {result}
          </div>
       </div>
    </div>
  );
}

function ShowcaseItem({ title, desc, tag, tagDesc, image }: { title: string, desc: string, tag: string, tagDesc: string, image: string }) {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
       <div>
          <h3 className="text-7xl font-display font-black tracking-tighter mb-8 leading-none">{title}</h3>
          <p className="text-neutral-500 text-lg leading-relaxed mb-12">{desc}</p>
          <div className="flex gap-4">
             <div className="p-4 rounded-2xl bg-white border border-neutral-200">
                <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest mb-1">
                   <MousePointer2 size={12} className="text-amber-500" /> {tag}
                </span>
                <p className="text-[10px] text-neutral-400 font-medium">{tagDesc}</p>
             </div>
          </div>
       </div>
       <div className="aspect-square rounded-[4rem] overflow-hidden bg-neutral-200 shadow-2xl">
          <img src={image} className="w-full h-full object-cover" />
       </div>
    </div>
  );
}

function PaymentOption({ icon: Icon, title, selected = false }: { icon: LucideIcon, title: string, selected?: boolean }) {
  return (
    <div className={`flex items-center justify-between p-4 rounded-2xl border transition-colors ${selected ? 'border-blue-600 bg-blue-50/50' : 'border-neutral-100 hover:bg-neutral-50'}`}>
       <div className="flex items-center gap-4">
          <Icon className={selected ? 'text-blue-600' : 'text-neutral-300'} size={20} />
          <span className={`text-sm font-bold uppercase tracking-widest ${selected ? 'text-neutral-900' : 'text-neutral-400'}`}>{title}</span>
       </div>
       <div className={`w-4 h-4 rounded-full border-2 ${selected ? 'border-blue-600 bg-white flex items-center justify-center' : 'border-neutral-200'}`}>
          {selected && <div className="w-2 h-2 rounded-full bg-blue-600" />}
       </div>
    </div>
  );
}

function ColorBox({ color, label, border = false }: { color: string, label: string, border?: boolean }) {
  return (
    <div>
       <div className={`w-12 h-12 rounded-xl ${color} ${border ? 'border border-white/20' : ''} mb-2`} />
       <p className="text-[10px] font-black uppercase text-neutral-500 tracking-widest text-center">{label}</p>
    </div>
  );
}
