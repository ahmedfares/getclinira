import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Does Clinira replace my receptionist?",
    a: "Not necessarily. Clinira is designed to augment your team, not replace it. It handles overflow calls, after-hours inquiries, and routine tasks — freeing your staff to focus on in-person patient care. Many clinics use Clinira alongside their existing team.",
  },
  {
    q: "Is Clinira HIPAA compliant?",
    a: "Yes. Clinira is built with healthcare compliance at its core. All patient data is encrypted in transit and at rest, and we follow strict HIPAA guidelines. We also sign BAAs with all our healthcare clients.",
  },
  {
    q: "Can it integrate with my scheduling software?",
    a: "Absolutely. Clinira integrates with major EHR and scheduling platforms including Athenahealth, DrChrono, Dentrix, and more. Our team handles the integration for you during onboarding.",
  },
  {
    q: "Does it sound robotic?",
    a: "Not at all. Clinira uses advanced natural language processing and voice synthesis to sound warm, professional, and human-like. Most patients can't tell the difference.",
  },
  {
    q: "How long does setup take?",
    a: "Most clinics are fully operational within 24-48 hours. Our team configures your scripts, integrations, and workflows so you can start taking calls immediately.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Clinira.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl bg-card border border-border px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
