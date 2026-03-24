import { motion } from "framer-motion";
import { FileText, Presentation } from "lucide-react";

const DownloadSection = () => (
  <section id="downloads" className="section-spacing">
    <div className="container max-w-2xl text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display text-2xl md:text-4xl font-bold tracking-wider mb-14"
      >
        DOWNLOADS
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="/files/Zynthic_Problem_Statements.docx"
          download="Zynthic_Problem_Statements.docx"
          className="inline-flex items-center gap-2 border border-primary/50 text-primary font-semibold px-6 py-3 rounded-xl gold-glow-hover hover:bg-primary/10 hover:scale-105 transition-all text-sm"
        >
          <FileText className="w-5 h-5" />
          Get Problem Statements
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-2 border border-primary/50 text-primary font-semibold px-6 py-3 rounded-xl gold-glow-hover hover:bg-primary/10 transition-colors text-sm"
        >
          <Presentation className="w-5 h-5" />
          Download PPT Template
        </a>
      </motion.div>
    </div>
  </section>
);

export default DownloadSection;
