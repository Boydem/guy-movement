import { Metadata } from "next"
import Hero from "./sections/hero"
import Intro from "./sections/intro"
import Cards from "./sections/cards"
import Mentorship from "./sections/mentorship"
import Testimonials from "./sections/testimonials"
import Contact from "./sections/contact"

export const metadata: Metadata = {
  title: "עמוד הבית",
  description:
    "הגעתם למסע שלכם. המסע שבו קורות תנועות בגוף ובנפש, לא סתם כי אם בתשוקה. משימתי המרכזית היא להיות אתכם, ללוות, להדריך ולהעניק כלים. מטרתי היא ברורה - לפתח בכם עצמאות גופנית מלאה ובלתי מוגבלת.",
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
