import type { FC } from "react"

import Image from "next/image"
import AnimationOnScroll from "@/components/animation-on-scroll"
import { TypographyH1 } from "@/components/ui/typography"
import ContactForm from "@/components/contact-form"

const Contact: FC = () => {
  return (
    <section
      id="contact-section"
      className="w-full py-20 bg-primary-foreground relative z-[0]"
    >
      <Image
        src={"/imgs/15.webp"}
        alt="Movement Guy"
        fill
        className="object-cover object-center grayscale contrast-75 brightness-[0.75] z-[1] pointer-events-none"
      />
      <div className="container flex flex-col gap-12 z-[2] relative">
        <AnimationOnScroll>
          <TypographyH1 className="text-primary opacity-85 mix-blend-difference invert">
            יצירת קשר
          </TypographyH1>
        </AnimationOnScroll>
        <AnimationOnScroll delay={150}>
          <div className="flex">
            <ContactForm />
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  )
}

export default Contact
