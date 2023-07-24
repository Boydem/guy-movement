import Image from "next/image"
import type { FC } from "react"
import MarqueeSlider from "./marquee-slider"
import { TypographyH3 } from "./ui/typography"
import { Icons } from "./icons"
import AnimationOnScroll from "./animation-on-scroll"

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <section className="overflow-hidden relative h-screen w-full">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 grayscale contrast-75"
        preload="auto"
        playsInline
        autoPlay
        muted
        loop
        poster="https://res.cloudinary.com/dsperrtyj/image/upload/v1674840044/samples/cloudinary-group.jpg"
      >
        <source
          src="https://res.cloudinary.com/dsperrtyj/video/upload/v1674840051/samples/cld-sample-video.mp4"
          type="video/mp4"
        />
      </video>
      <div className="pointer-events-none absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center mix-blend-difference invert">
        <AnimationOnScroll
          classNameInView="opacity-1"
          classNameNotInView="opacity-0"
          duration={500}
        >
          <Image
            src="/SVG/movement-guy-text.svg"
            alt="logo"
            fill
            className="container"
          />
        </AnimationOnScroll>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 border-t border-background text-background flex items-center justify-center">
        <MarqueeSlider itemsGap="2rem">
          <div className="flex items-center gap-8">
            <TypographyH3>תנועה מביאה לשינוי</TypographyH3>
            <Icons.logo className="w-8" />
          </div>
        </MarqueeSlider>
      </div>
    </section>
  )
}

export default HeroSection
