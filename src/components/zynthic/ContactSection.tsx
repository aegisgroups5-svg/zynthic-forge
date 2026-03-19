import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-spacing">
    <div className="container max-w-2xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display text-2xl md:text-4xl font-bold tracking-wider text-center mb-14"
      >
        CONTACT <span className="text-primary">US</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex justify-center"
      >
        <a
          href="https://www.instagram.com/_zynthic_"
          target="_blank"
          rel="noopener noreferrer"
          className="gold-border-card flex items-center gap-4 hover:border-primary/60 transition-colors"
        >
          <Instagram className="w-6 h-6 text-primary shrink-0" />
          <span className="text-foreground text-sm md:text-base">Instagram: _zynthic_</span>
        </a>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
