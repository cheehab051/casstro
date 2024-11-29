import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Doctors() {
  const doctors = [
    { name: "Dr. John Doe", specialty: "Implant Specialist", image: "https://vip.veneerdent.com/WhatsApp%20Image%202024-11-24%20%C3%A0%2010.35.33_d5901079.jpg" },
    { name: "Dr. Jane Smith", specialty: "Orthodontist", image: "https://vip.veneerdent.com/a-medium-shot-of-a-young-turkish-dentist-smiling-c-ZeSVRWq-Q_uV-Qk6WRG6Lg-_q9UNk3XSCeqnr4tu7JM-Q.jpeg" },
    { name: "Dr. Mike Johnson", specialty: "Cosmetic Dentist", image: "https://vip.veneerdent.com/WhatsApp%20Image%202024-11-24%20%C3%A0%2010.35.34_e0ed222c.jpg" },
  ];

  return (
    <section id="doctors" className="py-24 bg-gray-50">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Doctors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardHeader className="h-[500px]">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover object-center rounded-t-lg" 
                />
              </CardHeader>
              <CardContent className="flex-1 p-4 flex flex-col justify-between">
                <CardTitle className="text-lg font-semibold">{doctor.name}</CardTitle>
                <CardDescription className="text-gray-600">{doctor.specialty}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
