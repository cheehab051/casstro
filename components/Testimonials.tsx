import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Testimonials() {
  const testimonials = [
    { name: "Svetlana D.", text: "I'm so happy with my new smile! The team was professional and caring throughout my treatment." },
    { name: "Наташа Ш.", text: "The dental implant procedure was smooth and painless. I can't thank the doctors enough!" },
    { name: "Натали Адамчук.", text: "Excellent service and results. I highly recommend this dental clinic to everyone." },
  ]

  return (
    <section id="testimonials" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Patients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{testimonial.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

