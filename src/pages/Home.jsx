import Navbar from '@/components/navbar/Navbar'
import Hero from '@/components/hero/Hero'
import Services from '@/components/services/Services'
import Doctors from '@/components/doctors/Doctors'
import WhyChooseUs from '@/components/why-choose-us/WhyChooseUs'
import Testimonials from '@/components/testimonials/Testimonials'
import Appointment from '@/components/appointment/Appointment'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Doctors />
        <Testimonials />
        <Appointment />
      </main>
      <Footer />
    </div>
  )
}
