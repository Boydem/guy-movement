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
  { id: "01", title: "לפגוש את האני האמיתי שלך", img: "https://res.cloudinary.com/dsperrtyj/image/upload/v1690536008/movement-guy/2_xgegzu.webp" },
  { id: "02", title: "להבין את טבע ההתפתחות", img: "https://res.cloudinary.com/dsperrtyj/image/upload/v1690536008/movement-guy/3_i8vpvv.webp" },
  { id: "03", title: "לגלות ולפתח יכולות חדשות", img: "https://res.cloudinary.com/dsperrtyj/image/upload/v1690536054/movement-guy/23_dpjjnh.webp" },
]

const Cards = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container max-xl:flex-col flex items-start gap-12 flex-nowrap">
        <AnimationOnScroll>
          <TypographyH2 className="border-b-0">
            <Balancer>הזמנה לאורח חיים מלא תנועה</Balancer>
          </TypographyH2>
        </AnimationOnScroll>
        <div className="no-scrollbar snap-x flex gap-3 items-stretch flex-1 max-lg:overflow-x-scroll overflow-y-hidden w-full max-w-full min-h-[20rem] scroll-smooth">
          {cards.map((card, idx) => (
            <AnimationOnScroll
              className="flex-1 snap-end max-md:translate-y-0"
              variant={"slideUp"}
              delay={idx === 0 ? 300 : idx === 1 ? 500 : 700}
              duration={500}
              key={card.id}
            >
              <Card className="group flex flex-col relative z-0 rounded-none shadow-sm transition-all w-[20rem] lg:w-auto h-full">
                <Image
                  src={card.img}
                  fill
                  alt="guy moves it"
                  className="z-[-1] object-cover grayscale brightness-50 transition-all opacity-0 group-hover:opacity-100"
                />
                <CardHeader>
                  <TypographyH4 className="uppercase font-normal text-3xl tracking-normal border-t border-foreground text-secondary-foreground group-hover:text-background group-hover:border-background">
                    {card.title}
                  </TypographyH4>
                </CardHeader>
                <CardContent className="flex-1 flex items-end">
                  <TypographyH1 className="[-webkit-text-stroke:_2px_hsl(var(--foreground))] text-background max-lg:text-[8rem] lg:text-[13rem]">
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
