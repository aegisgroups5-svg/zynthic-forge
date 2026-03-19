import { motion } from "framer-motion";

const steps = [
  "Team Formation",
  "Problem Statement Release",
  "Idea Development",
  "Prototype Building",
  "Final Presentation",
];

const HackathonFlow = () => (
  <section id="flow" className="section-spacing">
    <div className="container max-w-2xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display text-2xl md:text-4xl font-bold tracking-wider text-center mb-14"
      >
        HACKATHON <span className="text-primary">FLOW</span>
      </motion.h2>

      <div className="relative">
        {/* Vertical gold line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-primary/30" />

        <div className="space-y-10">
          {steps.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex items-center gap-6 pl-2"
            >
              <div className="relative z-10 w-10 h-10 rounded-full bg-card border border-primary/50 flex items-center justify-center shrink-0">
                <span className="text-primary font-display text-sm font-bold">{i + 1}</span>
              </div>
              <div className="gold-border-card flex-1 !py-4 !px-6">
                <p className="font-semibold text-foreground">{step}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HackathonFlow;
