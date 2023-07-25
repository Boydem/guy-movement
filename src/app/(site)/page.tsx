import { Metadata } from "next"
import Hero from "./sections/hero"
import Intro from "./sections/intro"
import Cards from "./sections/cards"
import Mentorship from "./sections/mentorship"
import Testimonials from "./sections/testimonials"
import Contact from "./sections/contact"

export const metadata: Metadata = {
  title: "Home",
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
