import dynamic from 'next/dynamic'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Doctors from '../components/Doctors'
import Prices from '../components/Prices'
import Testimonials from '../components/Testimonials'
import About from '../components/About'
import FAQ from '../components/FAQ'
import Location from '../components/Location'
import Footer from '../components/Footer'
import { Toast } from '../components/ui/toast'

const AppointmentPopup = dynamic(() => import('../components/AppointmentPopup'), { ssr: false })
const ContactForm = dynamic(() => import('../components/ContactForm'), { ssr: false })
const FastDiagnosis = dynamic(() => import('../components/FastDiagnosis'), { ssr: false })
const Results = dynamic(() => import('../components/Results'), { ssr: false })

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Doctors />
      <Results />
      <Prices />
      <FastDiagnosis />
      <Testimonials />
      <About />
      <FAQ />
      <ContactForm />
      <Location />
      <Footer />
      <AppointmentPopup />
      <Toast />
    </main>
  )
}

