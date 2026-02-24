import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative gradient-hero pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6"
          >
            <CheckCircle className="w-4 h-4" />
            Trusted by 100+ Clinics Worldwide
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-display leading-tight tracking-tight text-foreground mb-6"
          >
            Your 24/7 AI Receptionist That{" "}
            <span className="text-gradient">Never Misses</span> a Patient Call
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Clinira instantly answers every patient call, schedules appointments, and handles inquiries
            — so your clinic never loses a patient to a missed call again.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="lg" className="text-base px-8 py-6">
              Book a Demo
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
            <Button variant="heroOutline" size="lg" className="text-base px-8 py-6">
              <Play className="w-5 h-5 mr-1" />
              See How It Works
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="rounded-2xl shadow-elevated overflow-hidden border border-border bg-card">
            <img
              src={dashboardMockup}
              alt="Clinira AI receptionist dashboard showing call analytics, appointment scheduling, and patient queue management"
              className="w-full h-auto"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
