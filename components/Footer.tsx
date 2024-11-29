import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Phone, Mail, Calendar } from 'lucide-react'
import AppointmentPopup from './AppointmentPopup' // Import AppointmentPopup

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Dental Clinic Istanbul</h3>
            <p>Providing top-quality dental care in Istanbul</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#services" className="hover:text-gray-300">Services</Link></li>
              <li><Link href="#doctors" className="hover:text-gray-300">Doctors</Link></li>
              <li><Link href="#prices" className="hover:text-gray-300">Prices</Link></li>
              <li><Link href="#contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>123 Main Street</p>
            <p>Istanbul, Turkey 34435</p>
            <p>Phone: +90 (212) 123-4567</p>
            <p>Email: info@castrodentalclinicistanbul.com</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Castro Dental Clinic Istanbul. All rights reserved.</p>
        </div>
      </div>
      
      {/* Floating CTAs */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
        <Button className="bg-green-500 hover:bg-green-600">
          <Phone className="mr-2 h-4 w-4" /> Call Now
        </Button>
        <Button className="bg-blue-500 hover:bg-blue-600">
          <Mail className="mr-2 h-4 w-4" /> Email Us
        </Button>
        {/* Wrap AppointmentPopup to replace the 'Book Appointment' button */}
        <AppointmentPopup />
      </div>
    </footer>
  )
}
