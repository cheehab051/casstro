import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    { question: "What dental services do you offer?", answer: "We offer a wide range of services including dental implants, teeth whitening, orthodontics, and cosmetic dentistry." },
    { question: "How long does a typical treatment take?", answer: "Treatment duration varies depending on the procedure. A consultation with our dentists can provide a more accurate timeline for your specific case." },
    { question: "Do you accept insurance?", answer: "Yes, we accept most major insurance plans. Please contact our office for more information about your specific insurance coverage." },
    { question: "Is the clinic open on weekends?", answer: "We are open on Saturdays for limited hours. Please check our contact page for our current operating hours." },
  ]

  return (
    <section id="faq" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

