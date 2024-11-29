export default function About() {
  return (
    <section id="about" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Our Clinic</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://vip.veneerdent.com/CLINIC%2015.jpg" alt="Our Dental Clinic" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg text-gray-700 mb-4">
              Our dental clinic in Istanbul is dedicated to providing top-quality dental care in a comfortable and modern environment. With a team of experienced professionals and state-of-the-art technology, we offer a wide range of dental services to meet all your oral health needs.
            </p>
            <p className="text-lg text-gray-700">
              From routine check-ups to advanced cosmetic procedures, we are committed to helping you achieve and maintain a healthy, beautiful smile. Our patient-centered approach ensures that you receive personalized care and attention throughout your dental journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

