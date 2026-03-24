import { motion } from "framer-motion";
import { Instagram, Phone } from "lucide-react";

const phones = [
  "8438266090",
  "9342182089",
  "9025065835",
  "9342365313",
];

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

      <div className="flex flex-col gap-4 items-center">
        <motion.a
          href="https://www.instagram.com/_zynthic_"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="gold-border-card flex items-center gap-4 hover:border-primary/60 transition-colors w-full max-w-md"
        >
          <Instagram className="w-6 h-6 text-primary shrink-0" />
          <span className="text-foreground text-sm md:text-base">Instagram: _zynthic_</span>
        </motion.a>

        {phones.map((num, i) => (
          <motion.a
            key={num}
            href={`tel:+91${num}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i + 1) * 0.1 }}
            className="gold-border-card flex items-center gap-4 hover:border-primary/60 transition-colors w-full max-w-md"
          >
            <Phone className="w-5 h-5 text-primary shrink-0" />
            <span className="text-foreground text-sm md:text-base">{num}</span>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
