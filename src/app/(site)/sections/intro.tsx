import AnimationOnScroll from "@/components/animation-on-scroll"
import { TypographyH2 } from "@/components/ui/typography"
import type { FC } from "react"
import Balancer from "react-wrap-balancer"

const Intro: FC = () => {
  return (
    <section className="container min-h-[45vh] flex items-center">
      <AnimationOnScroll>
        <TypographyH2 className="max-w-[750px] border-b-0">
          <Balancer>
            הגעתם למסע שלכם. המסע שבו קורות תנועות בגוף ובנפש, לא סתם כי אם
            בתשוקה. משימתי המרכזית היא להיות אתכם, ללוות, להדריך ולהעניק כלים.
            מטרתי היא ברורה - לפתח בכם עצמאות גופנית מלאה ובלתי מוגבלת.
          </Balancer>
        </TypographyH2>
      </AnimationOnScroll>
    </section>
  )
}

export default Intro
