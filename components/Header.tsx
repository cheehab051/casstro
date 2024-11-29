import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { MessageSquare } from 'lucide-react'

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <img 
            src="https://castro.atract.net/elements/img/logo_1732538816.png" 
            alt="Castro Dental Logo" 
            className="h-48"
          />
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Button variant="ghost" className="text-white hover:text-black/80" asChild>
            <Link href="#services">Services</Link>
          </Button>
          <Button variant="ghost" className="text-white hover:text-black/80" asChild>
            <Link href="#doctors">Doctors</Link>
          </Button>
          <Button variant="ghost" className="text-white hover:text-black/80" asChild>
            <Link href="#results">Results</Link>
          </Button>
          <Button variant="ghost" className="text-white hover:text-black/80" asChild>
            <Link href="#prices">Prices</Link>
          </Button>
          <Button variant="ghost" className="text-white hover:text-black/80" asChild>
            <Link href="#contact">Contact</Link>
          </Button>
        </nav>
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            className="text-black border-white hover:bg-white hover:text-black"
            asChild
          >
            <Link href="https://wa.me/905421488824?text=Hello%20%21" target="_blank">
              WhatsApp
            </Link>
          </Button>
          <Button 
            className="bg-[#95b6a3] hover:bg-[#7a9989] text-white"
            asChild
          >
            <Link href="https://wa.me/905421488824?text=Hello%20%21">
              <MessageSquare className="h-4 w-4 mr-2" />
              Message
            </Link>
          </Button>
          <Button 
            variant="secondary"
            className="bg-white text-black hover:bg-gray-100"
            asChild
          >
            <Link href="https://wa.me/905421488824?text=Hello%20%21">Register</Link>
          </Button>
          <Button 
            variant="ghost" 
            className="text-white hover:text-black/80"
          >
            EN
          </Button>
        </div>
      </div>
    </header>
  )
}

