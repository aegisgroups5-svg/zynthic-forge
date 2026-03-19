import { motion } from "framer-motion";
import { IndianRupee, Users, UtensilsCrossed, Monitor } from "lucide-react";

const details = [
  { icon: IndianRupee, text: "Registration Fee: ₹100 per person" },
  { icon: Users, text: "Team Size: Maximum 3 members" },
  { icon: UtensilsCrossed, text: "Lunch will be provided for the final participants" },
  { icon: Monitor, text: "3 rounds (Online), Final round (Offline)" },
];

const EventDetails = () => (
  <section id="details" className="section-spacing">
    <div className="container max-w-3xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display text-2xl md:text-4xl font-bold tracking-wider text-center mb-14"
      >
        EVENT <span className="text-primary">DETAILS</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {details.map((d, i) => (
          <motion.div
            key={d.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="gold-border-card flex items-center gap-4"
          >
            <d.icon className="w-6 h-6 text-primary shrink-0" />
            <p className="text-foreground text-sm md:text-base">{d.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EventDetails;
