import { type FC } from "react"
import { TypographyH1 } from "./ui/typography"
import Image from "next/image"
import { Balancer } from "react-wrap-balancer"
import { Button } from "./ui/button"
import AnimationOnScroll from "./animation-on-scroll"
interface MentorshipSectionProps {}

const MentorshipSection: FC<MentorshipSectionProps> = () => {
  return (
    <section className="w-full bg-primary min-h-[95vh] relative py-20 z-[0] flex">
      <Image
        src={"/imgs/1.webp"}
        alt="Movement Guy"
        fill
        className="object-cover object-center mix-blend-luminosity brightness-[0.65] contrast-[0.85] z-[1] pointer-events-none"
      />
      <div className="container z-[2] flex-1 flex flex-col justify-between">
        <AnimationOnScroll>
          <h1 className="text-background scroll-m-20 text-5xl font-extrabold tracking-normal lg:text-5xl font-display">
            מנטורינג
          </h1>
        </AnimationOnScroll>
        <div className="flex flex-col items-start gap-10 max-w-[1000px]">
          <AnimationOnScroll delay={150}>
            <TypographyH1 className="text-background lg:text-[5rem]">
              <Balancer>
                "אני כאן ללוות אותך בכל צעד במסע שלך, ולהעניק לך את הכלים לקידום
                אישי ותנועתי"
                <br />
                מנטורינג עם גיא יחזקאל
              </Balancer>
            </TypographyH1>
          </AnimationOnScroll>
          <AnimationOnScroll delay={200}>
            <Button className="rounded-full" size={"lg"}>
              לפרטים נוספים
            </Button>
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  )
}

export default MentorshipSection
