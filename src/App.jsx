import AboutSection from './components/About/AboutSection'
import ContactSection from './components/Contact/ContactSection'
import FocusSection from './components/Focus/FocusSection'
import FooterSection from './components/Footer/FooterSection'
import Header from './components/Header/Header'
import HomeSection from './components/Home/HomeSection'
import ServiceSection from './components/Services/ServiceSection'
import TestimonialsSection from './components/Testimonials/TestimonialSection'

function App() {
  return (
    <>
      <Header />
      <HomeSection />
      <AboutSection />
      <ServiceSection />
      <FocusSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </>
  )
}

export default App
