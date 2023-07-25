import { type FC } from "react"
import Image from "next/image"
import { Balancer } from "react-wrap-balancer"
import AnimationOnScroll from "@/components/animation-on-scroll"
import { TypographyH1, TypographyH2 } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
interface MentorshipProps {}

const Mentorship: FC<MentorshipProps> = () => {
  return (
    <section className="w-full bg-primary min-h-[95vh] relative py-20 z-[0] flex">
      <Image
        src={"/imgs/6.webp"}
        alt="Movement Guy"
        fill
        className="object-cover object-bottom grayscale brightness-[0.65] contrast-[0.85] z-[1] pointer-events-none"
      />
      <div className="container z-[2] flex-1 flex flex-col justify-between">
        <AnimationOnScroll>
          <TypographyH1 className="text-primary opacity-85 mix-blend-difference invert">
            מנטורינג
          </TypographyH1>
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
          <AnimationOnScroll variant={"slideUp"} delay={200}>
            <Button
              className="rounded-full px-10 h-auto bg-accent transition-all hover:bg-accent hover:brightness-[1.05] text-accent-foreground font-display"
              variant={"secondary"}
            >
              <TypographyH2 className="border-none pb-0">
                לפרטים נוספים
              </TypographyH2>
            </Button>
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  )
}

export default Mentorship
