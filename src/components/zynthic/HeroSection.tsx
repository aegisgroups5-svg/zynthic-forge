import { motion } from "framer-motion";
import { Rocket, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center radial-hero-bg overflow-hidden">
      {/* Decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-primary/5" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[900px] h-[900px] rounded-full border border-primary/[0.03]" />
      </div>

      <div className="container relative z-10 text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground text-sm md:text-base tracking-widest uppercase mb-6"
        >
          Department of Computer Science & Engineering
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display font-bold text-4xl sm:text-6xl md:text-8xl tracking-wider text-foreground mb-4"
        >
          ZYNTHIC <span className="text-primary">2026</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-display text-xs sm:text-sm md:text-base tracking-[0.3em] text-primary/80 uppercase mb-6"
        >
          Student Conference + Hackathon
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-muted-foreground text-base md:text-lg max-w-md mx-auto mb-10 italic"
        >
          "Where ideas turn into real-world solutions."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://forms.gle/ah5iHKB5pS9nxQQd7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl gold-glow gold-glow-hover animate-pulse-glow text-sm md:text-base"
          >
            <Rocket className="w-5 h-5" />
            Register Now
          </a>
          <a
            href="https://chat.whatsapp.com/BlyWTrncNkC8ZoLRmq4QcA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-primary/50 text-primary font-semibold px-8 py-4 rounded-xl gold-glow-hover text-sm md:text-base hover:bg-primary/10 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Join WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
