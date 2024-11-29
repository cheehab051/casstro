import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function Services() {
  const services = [
    { title: "Dental Implants", description: "Replace missing teeth with natural-looking implants.", image: "https://www.barkoffdental.com/wp-content/uploads/dental-implants-1-920x690.jpg?height=200&width=300" },
    { title: "Teeth Whitening", description: "Brighten your smile with our professional whitening treatments.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZp3drU4_AkWNb4PlptQpQPuU1myIobyGWdg&s?height=200&width=300" },
    { title: "Hollywood Smile", description: "Have a Smile of a lifetime with a Hollywood Smile Procedure.", image: "https://erdemclinic.com/au/wp-content/uploads/2023/02/holly-wood-smile-turkey-630x420.webp?height=200&width=300" },
    { title: "Emax Veneers", description: "Enhance your smile with our Emax Veneers.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJmDVsVFxURo9chA-raJsqaKUpWG-Qe2OjEw&s?height=200&width=300" },
  ]

  return (
    <section id="services" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <Image src={service.image} alt={service.title} width={300} height={200} className="w-full h-48 object-cover rounded-t-lg" />
              </CardHeader>
              <CardContent>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

