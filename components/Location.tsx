export default function Location() {
  return (
    <section id="location" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Location</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.1375984920924!2d28.97797731541551!3d41.03710297929822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zVGFrc2ltIE1leWRhbsSxLCBHw7xtw7zFn3N1eXUsIDM0NDM1IEJleW_En2x1L8Swc3RhbmJ1bCwgVHVya2V5!5e0!3m2!1sen!2sus!4v1655669073025!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-xl font-semibold mb-4">Dental Clinic Istanbul</h3>
            <p className="mb-2">123 Main Street</p>
            <p className="mb-2">Istanbul, Turkey 34435</p>
            <p className="mb-2">Phone: +90 (212) 123-4567</p>
            <p className="mb-2">Email: info@dentalclinicistanbul.com</p>
            <p className="mb-2">
              Hours: Monday-Friday 9:00 AM - 6:00 PM<br />
              Saturday 9:00 AM - 2:00 PM<br />
              Sunday Closed
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

