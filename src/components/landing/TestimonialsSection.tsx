import { CheckCircle, Phone, CalendarCheck, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const DEMO_LINK = "https://cal.com/ahmed-fares-pczlxl/30min";

const stats = [
  {
    icon: Phone,
    value: "100%",
    label: "Calls Answered",
    desc: "Every patient call picked up instantly, 24/7/365.",
  },
  {
    icon: CalendarCheck,
    value: "95%+",
    label: "Booking Rate",
    desc: "Automated scheduling that converts callers into patients.",
  },
  {
    icon: TrendingUp,
    value: "3x",
    label: "ROI in 90 Days",
    desc: "Clinics see measurable revenue growth within the first quarter.",
  },
  {
    icon: CheckCircle,
    value: "<24hrs",
    label: "Setup Time",
    desc: "Go live in under a day with zero disruption to your practice.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Why Clinics Choose Clinira
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
            Built for Results, Not Just Promises
          </h2>
          <p className="text-lg text-muted-foreground">
            Clinira is engineered to deliver measurable impact from day one.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {stats.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-card border border-border p-6 shadow-soft text-center"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary mx-auto mb-4 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-3xl font-extrabold font-display text-foreground mb-1">{item.value}</div>
              <div className="text-sm font-semibold text-primary mb-2">{item.label}</div>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button variant="hero" size="lg" className="text-base px-8 py-6" asChild>
            <a href={DEMO_LINK} target="_blank" rel="noopener noreferrer">
              See It For Yourself
              <ArrowRight className="w-5 h-5 ml-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
