import { Phone, Bot, CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Patient Calls Your Clinic",
    desc: "A patient dials your number — during business hours, after hours, or even on holidays.",
  },
  {
    icon: Bot,
    step: "02",
    title: "Clinira Answers & Assists",
    desc: "Clinira picks up instantly, greets the patient by name, and handles their request conversationally.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Appointment Confirmed & Synced",
    desc: "The appointment is booked, confirmed via SMS, and synced directly to your scheduling system.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Simple Setup
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting started with Clinira takes less than 24 hours. No complex integrations needed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-border" />
              )}
              <div className="w-24 h-24 rounded-2xl gradient-primary mx-auto mb-6 flex items-center justify-center shadow-cta relative">
                <item.icon className="w-10 h-10 text-primary-foreground" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                  {item.step}
                </span>
              </div>
              <h3 className="text-xl font-bold font-display text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
