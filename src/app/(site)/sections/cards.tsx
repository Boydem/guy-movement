import {
  TypographyH1,
  TypographyH2,
  TypographyH4,
} from "../../../components/ui/typography"
import Balancer from "react-wrap-balancer"
import { Card, CardContent, CardHeader } from "../../../components/ui/card"
import Image from "next/image"
import AnimationOnScroll from "../../../components/animation-on-scroll"

const cards = [
  { id: "01", title: "לפגוש את האני האמיתי שלך", img: "/imgs/1.webp" },
  { id: "02", title: "להבין את טבע ההתפתחות", img: "/imgs/6.webp" },
  { id: "03", title: "לגלות ולפתח יכולות חדשות", img: "/imgs/3.webp" },
]

const Cards = () => {
  return (
    <section className="min-h-[45vh] py-20 bg-secondary">
      <div className="container flex items-start gap-12 flex-nowrap">
        <AnimationOnScroll>
          <TypographyH2 className="border-b-0">
            <Balancer>הזמנה לאורח חיים מלא תנועה</Balancer>
          </TypographyH2>
        </AnimationOnScroll>
        <div className="flex gap-3 items-center flex-1">
          {cards.map((card, idx) => (
            <AnimationOnScroll
              className="flex-1"
              variant={"slideUp"}
              delay={idx === 0 ? 300 : idx === 1 ? 500 : 700}
              duration={500}
            >
              <Card
                key={card.id}
                className="group relative z-0 rounded-none shadow-sm transition-all"
              >
                <Image
                  src={card.img}
                  fill
                  alt="guy moves it"
                  className="z-[-1] object-cover grayscale brightness-50 transition-all opacity-0 group-hover:opacity-100"
                />
                <CardHeader className="px-10">
                  <TypographyH4 className="uppercase font-normal text-3xl tracking-normal border-t border-foreground text-secondary-foreground group-hover:text-background group-hover:border-background">
                    {card.title}
                  </TypographyH4>
                </CardHeader>
                <CardContent className="px-10">
                  <TypographyH1 className="[-webkit-text-stroke:_2px_hsl(var(--foreground))] text-background lg:text-[13rem]">
                    {card.id}
                  </TypographyH1>
                </CardContent>
              </Card>
            </AnimationOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cards
