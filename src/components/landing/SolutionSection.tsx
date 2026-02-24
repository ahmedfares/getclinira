import { Phone, Brain, CalendarCheck, Clock, Users, Settings } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  { icon: Phone, title: "Answers Calls Instantly", desc: "Zero wait time. Every patient gets a live response within seconds." },
  { icon: Brain, title: "Sounds Natural & Human-Like", desc: "Advanced AI that converses naturally, not like a robotic IVR." },
  { icon: CalendarCheck, title: "Schedules Appointments Automatically", desc: "Books, reschedules, and confirms — all without human intervention." },
  { icon: Clock, title: "Works 24/7, 365 Days", desc: "Nights, weekends, holidays — Clinira never takes a day off." },
  { icon: Users, title: "Reduces Staff Workload", desc: "Free your team to focus on in-clinic patient care." },
  { icon: Settings, title: "Syncs with Existing Systems", desc: "Integrates with your EHR, calendar, and scheduling tools seamlessly." },
];

const SolutionSection = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            The Solution
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
            Meet Clinira — Your Smart Voice AI Receptionist
          </h2>
          <p className="text-lg text-muted-foreground">
            An intelligent voice agent built specifically for medical practices.
            It handles every call with the care your patients expect.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold font-display text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
