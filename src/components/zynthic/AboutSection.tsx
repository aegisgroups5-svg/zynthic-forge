import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="section-spacing">
    <div className="container max-w-3xl text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display text-2xl md:text-4xl font-bold tracking-wider mb-8"
      >
        ABOUT <span className="text-primary">ZYNTHIC</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-muted-foreground text-base md:text-lg leading-relaxed"
      >
        ZYNTHIC is a student conference combined with a hackathon that encourages innovation,
        problem-solving, and collaboration. Participants explore emerging technologies and develop
        solutions for real-world problems.
      </motion.p>
    </div>
  </section>
);

export default AboutSection;
