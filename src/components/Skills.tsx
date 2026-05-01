import { motion } from 'motion/react';
import { Palette, Code, Layers, Globe, Cpu, Smartphone } from 'lucide-react';

const skills = [
  { 
    name: 'Design Systems', 
    icon: Layers, 
    color: '#9333ea', 
    level: 95, 
    tags: ['Scalable', 'Consistent', 'System-Driven'] 
  },
  { 
    name: 'UI/UX Strategy', 
    icon: Palette, 
    color: '#0891b2', 
    level: 92, 
    tags: ['Logical', 'Precise', 'Flow-Driven'] 
  },
  { 
    name: 'SaaS Interfaces', 
    icon: Smartphone, 
    color: '#f59e0b', 
    level: 90, 
    tags: ['Functional', 'Clean', 'Data-First'] 
  },
  { 
    name: 'Prototyping', 
    icon: Cpu, 
    color: '#10b981', 
    level: 88, 
    tags: ['High-Fi', 'Interactive', 'Testable'] 
  },
  { 
    name: 'Frontend Engineering', 
    icon: Code, 
    color: '#ef4444', 
    level: 85, 
    tags: ['React', 'Tailwind', 'Clean Code'] 
  },
  { 
    name: 'Product Thinking', 
    icon: Globe, 
    color: '#6366f1', 
    level: 94, 
    tags: ['Problem-Solver', 'Goal-Driven', 'Strategic'] 
  },
];

export default function Skills() {
  return (
    <section className="py-32 bg-white/[0.02]" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500 mb-6">Capabilities</h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-display font-black tracking-tighter mb-6"
          >
            DESIGN <span className="text-white/20 italic">CAPABILITIES</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl relative overflow-hidden group backdrop-blur-md"
            >
              <div 
                className="absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-20 transition-opacity group-hover:opacity-40"
                style={{ backgroundColor: skill.color }}
              />
              
              <div className="flex items-center justify-between mb-8">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-500"
                  style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                >
                  <skill.icon size={28} />
                </div>
                <span className="text-sm font-mono text-white/30 uppercase tracking-widest">Skill 0{idx + 1}</span>
              </div>

              <h3 className="text-2xl font-display font-bold mb-4">{skill.name}</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-bold text-white/40 uppercase tracking-wider">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span key={tag} className="text-[10px] px-2 py-1 rounded bg-white/5 text-white/30 uppercase font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
