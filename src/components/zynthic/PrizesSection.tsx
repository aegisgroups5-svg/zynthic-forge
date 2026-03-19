import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const prizes = [
  { place: "1st", amount: "₹3,000", emoji: "🥇", featured: true },
  { place: "2nd", amount: "₹2,000", emoji: "🥈", featured: false },
  { place: "3rd", amount: "₹1,000", emoji: "🥉", featured: false },
];

const PrizesSection = () => (
  <section id="prizes" className="section-spacing">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display text-2xl md:text-4xl font-bold tracking-wider text-center mb-14"
      >
        <Trophy className="inline w-8 h-8 text-primary mr-3 -mt-1" />
        PRIZES
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto items-end">
        {prizes.map((p, i) => (
          <motion.div
            key={p.place}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className={`gold-border-card text-center gold-glow-hover ${
              p.featured ? "gold-glow sm:scale-105 sm:-translate-y-2 border-primary/60" : ""
            }`}
          >
            <p className="text-4xl mb-3">{p.emoji}</p>
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">{p.place} Place</p>
            <p className="font-display text-2xl md:text-3xl font-bold text-primary">{p.amount}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PrizesSection;
