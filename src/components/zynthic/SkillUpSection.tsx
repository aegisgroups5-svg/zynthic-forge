import { motion } from "framer-motion";
import { Brain, FileText, Cpu, CircuitBoard, Cloud } from "lucide-react";

const sessions = [
  { title: "Agentic AI & Tools", icon: Brain },
  { title: "Paper Catalyst", icon: FileText },
  { title: "AI/ML for Undecidable Problems", icon: Cpu },
  { title: "AI in Embedded Systems", icon: CircuitBoard },
  { title: "Cloud Connect", icon: Cloud },
];

const SkillUpSection = () => (
  <section id="skillup" className="section-spacing">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display text-2xl md:text-4xl font-bold tracking-wider text-center mb-14"
      >
        SKILL-UP <span className="text-primary">SESSIONS</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {sessions.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="gold-border-card gold-glow-hover flex flex-col items-center text-center gap-4"
          >
            <s.icon className="w-8 h-8 text-primary" />
            <h3 className="font-semibold text-foreground">{s.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillUpSection;
