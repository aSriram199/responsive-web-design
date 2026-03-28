import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "When and where will Avishkar 2K26 be conducted?", a: "Avishkar 2K26 will be conducted on 12th April, 2026 and 13th April, 2026 at Vignana Bharathi Institute of Technology." },
  { q: "Who can participate in Avishkar 2K26?", a: "All first-year students of VBIT are eligible to participate." },
  { q: "Is it an individual or team event?", a: "Avishkar supports both individual and team participation." },
  { q: "What is the format of the competition?", a: "It consists of two rounds: Preliminary Round and Final Round." },
  { q: "What are the prizes?", a: "Winners will be awarded mementos and certificates." },
  { q: "How do I register?", a: "You can register through the registration link provided on the website." },
  { q: "What is the deadline for abstract submission?", a: "Please check the timeline section on the home page for deadlines." },
  { q: "Can I change my problem statement after submission?", a: "No, changes are not allowed after submission." },
  { q: "What format should the abstract be in?", a: "The abstract must be in .docx format following the specified guidelines." },
  { q: "Who should I contact for queries?", a: "Please reach out through the contact page." },
  { q: "Is there a registration fee?", a: "Details about registration fees will be shared during the registration process." },
  { q: "What domains are available for the presentation?", a: "Multiple domains are available. Check the problem statements for details." },
];

const FAQs = () => (
  <Layout>
    <div className="page-container">
      <h1 className="page-title">FAQ's</h1>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible>
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="group bg-secondary/50 mb-3 rounded-lg border border-border border-l-4 border-l-transparent px-4
                         transition-all duration-300 ease-in-out
                         hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01] hover:bg-background hover:border-l-primary"
            >
              <AccordionTrigger className="text-sm sm:text-base text-foreground font-medium hover:no-underline transition-colors duration-300 group-hover:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </Layout>
);

export default FAQs;
