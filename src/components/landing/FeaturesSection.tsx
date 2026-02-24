import { Mic, CalendarSync, Moon, Globe, FileText, Sliders } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Mic, title: "Natural Human-like Voice", desc: "Patients can't tell the difference. Clinira speaks with warmth, clarity, and empathy." },
  { icon: CalendarSync, title: "Smart Scheduling & Calendar Sync", desc: "Real-time availability checks and automated appointment booking with your existing calendar." },
  { icon: Moon, title: "After-Hours Call Handling", desc: "Capture every after-hours call and convert it into a booked appointment before your competitors do." },
  { icon: Globe, title: "Multilingual Support", desc: "Serve diverse patient populations with support for multiple languages out of the box." },
  { icon: FileText, title: "Call Transcripts & Analytics", desc: "Full transcripts, sentiment analysis, and actionable insights from every patient interaction." },
  { icon: Sliders, title: "Customizable Clinic Scripts", desc: "Tailor responses, greetings, and workflows to match your clinic's unique brand and protocols." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 lg:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Feature-Rich
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
            Everything Your Clinic Needs in an AI Receptionist
          </h2>
          <p className="text-lg text-muted-foreground">
            Built for healthcare. Designed for efficiency. Optimized for patient satisfaction.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold font-display text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
