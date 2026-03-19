import { motion } from "framer-motion";
import { Rocket, MessageCircle } from "lucide-react";

const CTASection = () => (
  <section className="section-spacing radial-hero-bg">
    <div className="container text-center max-w-2xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display text-2xl md:text-4xl font-bold tracking-wider mb-4"
      >
        READY TO BUILD SOMETHING{" "}
        <span className="text-primary">AMAZING?</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-muted-foreground mb-10"
      >
        Join hundreds of students and turn your ideas into reality.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="https://forms.gle/ah5iHKB5pS9nxQQd7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl gold-glow gold-glow-hover text-sm md:text-base"
        >
          <Rocket className="w-5 h-5" />
          Register Now
        </a>
        <a
          href="https://chat.whatsapp.com/BlyWTrncNkC8ZoLRmq4QcA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-primary/50 text-primary font-semibold px-8 py-4 rounded-xl gold-glow-hover hover:bg-primary/10 transition-colors text-sm md:text-base"
        >
          <MessageCircle className="w-5 h-5" />
          Join WhatsApp
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
