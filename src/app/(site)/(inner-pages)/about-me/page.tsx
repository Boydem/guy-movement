import { Metadata } from "next"
import Hero from "../../sections/hero"
import Intro from "../../sections/intro"
import Cards from "../../sections/cards"
import Mentorship from "../../sections/mentorship"
import Contact from "../../sections/contact"
import Testimonials from "../../sections/testimonials"

export const metadata: Metadata = {
  title: "About me",
  description: "Home page",
}

export default function IndexPage() {
  return (
    <>
      <Hero />
      <Intro />
      <Cards />
      <Mentorship />
      <Testimonials />
      <Contact />
    </>
  )
}
