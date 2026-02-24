import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Owner, Bright Smile Dental",
    quote: "Since switching to Clinira, we've reduced missed calls by 90% and booked 35% more appointments. Our front desk team finally has time to focus on patients in the office.",
    rating: 5,
  },
  {
    name: "Dr. James Okafor",
    role: "Medical Director, ClearSkin Dermatology",
    quote: "We were losing patients after hours. Clinira handles everything — scheduling, cancellations, even insurance questions. It paid for itself in the first month.",
    rating: 5,
  },
  {
    name: "Maria Gonzalez",
    role: "Practice Manager, Family Health Partners",
    quote: "Our patients love it. They can't tell it's AI. And the analytics dashboard gives us insights we never had before. Clinira is a game-changer.",
    rating: 5,
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
            Loved by Clinics
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
            What Healthcare Professionals Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-card border border-border p-8 shadow-soft"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">"{item.quote}"</p>
              <div>
                <div className="font-semibold text-foreground">{item.name}</div>
                <div className="text-sm text-muted-foreground">{item.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
