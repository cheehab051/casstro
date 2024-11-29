import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Smile } from 'lucide-react'
import AppointmentPopup from './AppointmentPopup' // Import AppointmentPopup

export default function Hero() {
  return (
    <section className="relative h-screen">
      {/* Background image with gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url("https://castro.atract.net/elements/img/main_8.png"), linear-gradient(to right, rgba(215, 100, 48, 0.6), rgba(108, 164, 136, 0.7))', // Adjusted alpha values for transparency
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundBlendMode: 'overlay',
          height: '100%',
          width: '100%',
        }}
      />

      {/* Content overlay */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-lg">
          Dental Clinic In Istanbul
        </h1>
        <h2 className="text-2xl md:text-3xl mb-8 text-shadow-md">
          Comprehensive Cosmetic Dental Services For A Perfect Smile
        </h2>
        <p className="max-w-2xl text-lg mb-12 text-shadow-sm">
          Welcome to our dental clinic in Turkey, where we provide an extensive array of services,
          from cosmetic dentistry to implants. Our skilled team is committed to delivering tailored
          care for a healthy and radiant smile.
        </p>

        {/* AppointmentPopup to trigger the form with the "New Smile" button */}
        <AppointmentPopup>
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-full"
          >
            <span className="mr-2">New Smile</span>
            <Smile className="h-5 w-5" />
          </Button>
        </AppointmentPopup>
      </div>
    </section>
  )
}
