import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import ProjectCaseStudy from './ProjectCaseStudy';
import ProjectCaseStudySaaS from './ProjectCaseStudySaaS';
import ProjectCaseStudyCheckout from './ProjectCaseStudyCheckout';
import ProjectCaseStudyDesignSystem from './ProjectCaseStudyDesignSystem';
import ProjectCaseStudyAI from './ProjectCaseStudyAI';
import ProjectCaseStudyMobile from './ProjectCaseStudyMobile';
import ProjectCaseStudyWeb from './ProjectCaseStudyWeb';

const projects = [
  {
    id: 'fintech-kyc',
    title: 'Astra Identity',
    category: 'FINTECH AI',
    image: '/regenerated_image_1777382442740.png',
    color: '#3b82f6',
    hasCaseStudy: true
  },
  {
    id: 'ai-analytics',
    title: 'Nexus Intelligence',
    category: 'SAAS PRODUCT',
    image: '/regenerated_image_1777382445979.png',
    color: '#10b981',
    hasCaseStudy: true
  },
  {
    id: 'checkout-optimization',
    title: 'Swift Checkout',
    category: 'E-COMMERCE UX',
    image: '/regenerated_image_1777458964702.png',
    color: '#e2ff46',
    hasCaseStudy: true
  },
  {
    id: 'design-system',
    title: 'Scalable Design System',
    category: 'SYSTEMS DESIGN',
    image: '/regenerated_image_1777384486042.png',
    color: '#3b82f6',
    hasCaseStudy: true
  },
  {
    id: 'ai-performance',
    title: 'Continuum AI',
    category: 'ENTERPRISE AI',
    image: '/regenerated_image_1777382449437.png',
    color: '#6366f1',
    hasCaseStudy: true
  },
  {
    id: 'mobile-printing',
    title: 'Epson Cloud Print',
    category: 'MOBILE APP',
    image: '/regenerated_image_1777382451669.png',
    color: '#2563eb',
    hasCaseStudy: true
  },
  {
    id: 'web-showcase',
    title: 'Simulations Builder',
    category: 'WEB PLATFORM',
    image: '/regenerated_image_1777374860306.png',
    color: '#00d2ff',
    hasCaseStudy: true
  }
];

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  return (
    <section className="py-32 bg-black" id="work">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                <span className="text-xs font-bold">03</span>
              </div>
              <span className="text-sm font-bold tracking-[0.3em] text-white/40 uppercase">Selected Work</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-display font-black tracking-tighter">
              FEATURED <br /> <span className="text-white/20 italic">PROJECTS</span>
            </h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 text-lg font-bold group"
          >
            VIEW ALL WORK 
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-300">
              <ArrowRight size={20} />
            </div>
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group cursor-pointer"
              onClick={() => project.hasCaseStudy && setSelectedProjectId(project.id)}
            >
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-8">
                <div 
                  className="absolute inset-0 opacity-40 transition-transform group-hover:scale-105 duration-700"
                  style={{ background: `linear-gradient(to tr, ${project.color}, transparent)` }}
                />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                
                <div className="absolute bottom-8 left-8 z-10 transition-transform group-hover:translate-y-[-10px]">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white mb-2 opacity-60">0{idx + 1} / 0{projects.length}</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-1" style={{ color: project.color }}>{project.category}</div>
                  <h3 className="text-3xl font-black">{project.title}</h3>
                </div>

                <div className="absolute top-8 right-8 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center">
                     <ArrowRight size={24} />
                   </div>
                </div>

                {project.hasCaseStudy && (
                  <div className="absolute top-8 left-8 z-10">
                    <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[9px] font-bold uppercase tracking-widest text-white">
                      View Case Study
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProjectId === 'fintech-kyc' && (
          <ProjectCaseStudy onClose={() => setSelectedProjectId(null)} />
        )}
        {selectedProjectId === 'ai-analytics' && (
          <ProjectCaseStudySaaS onClose={() => setSelectedProjectId(null)} />
        )}
        {selectedProjectId === 'checkout-optimization' && (
          <ProjectCaseStudyCheckout onClose={() => setSelectedProjectId(null)} />
        )}
        {selectedProjectId === 'design-system' && (
          <ProjectCaseStudyDesignSystem onClose={() => setSelectedProjectId(null)} />
        )}
        {selectedProjectId === 'ai-performance' && (
          <ProjectCaseStudyAI onClose={() => setSelectedProjectId(null)} />
        )}
        {selectedProjectId === 'mobile-printing' && (
          <ProjectCaseStudyMobile onClose={() => setSelectedProjectId(null)} />
        )}
        {selectedProjectId === 'web-showcase' && (
          <ProjectCaseStudyWeb onClose={() => setSelectedProjectId(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
