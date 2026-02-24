import { PhoneOff, DollarSign, Clock, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  {
    icon: PhoneOff,
    stat: "85%",
    title: "of patients won't call back",
    desc: "One missed call is a permanently lost patient — and thousands in lifetime revenue gone.",
  },
  {
    icon: DollarSign,
    stat: "$36K+",
    title: "average annual receptionist cost",
    desc: "Salary, benefits, training, and turnover — adding up to a huge overhead for small practices.",
  },
  {
    icon: Clock,
    stat: "40%",
    title: "of calls come after hours",
    desc: "Nearly half your potential bookings happen when no one's at the desk to answer.",
  },
  {
    icon: AlertTriangle,
    stat: "23%",
    title: "scheduling error rate with manual booking",
    desc: "Human errors lead to double bookings, no-shows, and frustrated patients.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-secondary-foreground mb-4">
            Every Missed Call Is Lost Revenue
          </h2>
          <p className="text-lg text-secondary-foreground/70">
            Your front desk is overwhelmed. Calls go unanswered. Patients move on.
            The problem isn't your team — it's the system.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-secondary-foreground/5 border border-secondary-foreground/10 p-6 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="text-4xl font-extrabold font-display text-accent mb-1">{item.stat}</div>
              <div className="text-sm font-semibold text-secondary-foreground mb-2">{item.title}</div>
              <p className="text-sm text-secondary-foreground/60">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
