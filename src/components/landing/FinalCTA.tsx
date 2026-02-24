import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const DEMO_LINK = "https://cal.com/ahmed-fares-pczlxl/30min";

const FinalCTA = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-secondary-foreground mb-6">
            Stop Losing Patients to Missed Calls
          </h2>
          <p className="text-lg text-secondary-foreground/70 mb-10 max-w-xl mx-auto">
            Join 100+ clinics already using Clinira to answer every call, book more appointments, and deliver exceptional patient experiences — 24/7.
          </p>
          <Button variant="cta" size="lg" className="text-lg px-10 py-7" asChild>
            <a href={DEMO_LINK} target="_blank" rel="noopener noreferrer">
              Book Your Free Demo Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
          <p className="text-sm text-secondary-foreground/50 mt-4">
            No credit card required • Setup in under 24 hours • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
