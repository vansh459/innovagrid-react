import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What services does InnovaGrid provide?",
      answer: "We specialize in website development, mobile apps, and custom digital solutions. Our expertise covers modern web technologies, iOS and Android app development, and comprehensive tech consulting services.",
    },
    {
      question: "How can I request a project?",
      answer: "You can contact us via our website form or freelancing platforms like Upwork. We'll schedule a consultation to discuss your project requirements and provide a detailed proposal.",
    },
    {
      question: "Do you offer long-term support?",
      answer: "Yes, we provide ongoing maintenance and updates based on client needs. Our support packages include bug fixes, security updates, feature enhancements, and technical assistance.",
    },
    {
      question: "Can I apply for an internship?",
      answer: "Absolutely! Click on 'Apply for Internship' to submit your application. We offer internship opportunities for students and recent graduates in web development, mobile app development, and UI/UX design.",
    },
    {
      question: "Where are you located?",
      answer: "We are a remote-first company working with clients worldwide. Our distributed team allows us to provide services across different time zones and collaborate with international clients effectively.",
    },
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services and processes.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-xl shadow-md border-0 px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-4">
            Still have questions?
          </p>
          <button 
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="text-primary font-semibold hover:text-primary-hover transition-colors duration-200"
          >
            Contact us for more information →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;