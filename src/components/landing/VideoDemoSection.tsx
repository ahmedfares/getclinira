import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const DEMO_LINK = "https://cal.com/ahmed-fares-pczlxl/30min";

const VideoDemoSection = () => {
  return (
    <section id="video-demo" className="py-20 lg:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            See It In Action
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
            Watch Clinira Handle a Real Patient Call
          </h2>
          <p className="text-lg text-muted-foreground">
            No scripts, no edits — see exactly how Clinira answers, schedules, and assists your patients in real time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-10"
        >
          <div className="rounded-2xl overflow-hidden shadow-elevated border border-border bg-card">
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
              <iframe
                src="https://www.loom.com/embed/3831cd1145464a2eac4f2da375fe1d77?sid=auto&hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
                frameBorder="0"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                title="Clinira AI Receptionist Demo"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <Button variant="hero" size="lg" className="text-base px-8 py-6" asChild>
            <a href={DEMO_LINK} target="_blank" rel="noopener noreferrer">
              Book Your Free Demo
              <ArrowRight className="w-5 h-5 ml-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoDemoSection;
