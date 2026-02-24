import { TrendingUp, Clock, PhoneCall, CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";

const comparisons = [
  {
    icon: TrendingUp,
    label: "Annual Cost",
    before: "$36,000+",
    beforeLabel: "Receptionist",
    after: "From $499/mo",
    afterLabel: "Clinira",
  },
  {
    icon: Clock,
    label: "Availability",
    before: "8hrs/day",
    beforeLabel: "Receptionist",
    after: "24/7/365",
    afterLabel: "Clinira",
  },
  {
    icon: PhoneCall,
    label: "Missed Calls",
    before: "30-50%",
    beforeLabel: "Receptionist",
    after: "0%",
    afterLabel: "Clinira",
  },
  {
    icon: CalendarCheck,
    label: "Booking Rate",
    before: "60%",
    beforeLabel: "Receptionist",
    after: "95%+",
    afterLabel: "Clinira",
  },
];

const ROISection = () => {
  return (
    <section id="roi" className="py-20 lg:py-28 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            ROI That Speaks
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
            Reduce Costs. Increase Appointments. Improve Patient Experience.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {comparisons.map((item, i) => (
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
              <div className="text-sm font-semibold text-muted-foreground mb-4">{item.label}</div>

              <div className="space-y-3">
                <div className="rounded-xl bg-destructive/10 p-3">
                  <div className="text-xl font-bold font-display text-destructive">{item.before}</div>
                  <div className="text-xs text-muted-foreground">{item.beforeLabel}</div>
                </div>
                <div className="rounded-xl bg-primary/10 p-3">
                  <div className="text-xl font-bold font-display text-primary">{item.after}</div>
                  <div className="text-xs text-muted-foreground">{item.afterLabel}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ROISection;
