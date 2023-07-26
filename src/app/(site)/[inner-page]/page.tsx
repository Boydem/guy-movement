import { Metadata } from "next"
import { innerPagesConfig, InnerPageKeys } from "@/config/inner-pages.config"
import { notFound } from "next/navigation"
import Image from "next/image"
import AnimationOnScroll from "@/components/animation-on-scroll"
import {
  TypographyH1,
  TypographyH2,
  TypographyLarge,
} from "@/components/ui/typography"
import { Balancer } from "react-wrap-balancer"
import { buttonVariants } from "@/components/ui/button"
import Contact from "../sections/contact"
import Link from "next/link"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "About me",
  description: "Home page",
}

interface PageProps {
  params: {
    "inner-page": string
  }
}

export async function generateStaticParams() {
  const pages = innerPagesConfig.pages
  return pages.map((page) => ({ page }))
}

// Custom type guard function to check if the page is a valid InnerPage key
function isInnerPageKey(page: string): page is InnerPageKeys {
  if (page === "pages") return false
  return innerPagesConfig.hasOwnProperty(page)
}

export default function InnerPages({ params }: PageProps) {
  const { "inner-page": innerPageParam } = params

  if (!isInnerPageKey(innerPageParam)) {
    notFound()
    return null
  }

  const currPage = innerPagesConfig[innerPageParam]

  return (
    <>
      <section className="w-full bg-primary min-h-[85vh] relative py-20 z-[0] flex">
        <Image
          src={currPage.img}
          alt="Movement Guy"
          fill
          className="object-cover object-center grayscale brightness-[0.65] contrast-[0.85] z-[1] pointer-events-none"
        />
        <div className="container z-[2] flex-1 flex flex-col justify-center items-center gap-6">
          <AnimationOnScroll>
            <TypographyH1 className="text-background text-center lg:text-[5rem]">
              {currPage.title}
            </TypographyH1>
          </AnimationOnScroll>
          <div className="flex flex-col items-center gap-10 max-w-[1000px]">
            <AnimationOnScroll delay={150}>
              <TypographyH1 className="text-primary opacity-85 mix-blend-difference invert text-center">
                <Balancer>{currPage.subtitle}</Balancer>
              </TypographyH1>
            </AnimationOnScroll>
            <AnimationOnScroll variant={"slideUp"} delay={200}>
              <Link
                href={`/${innerPageParam}#contact-section`}
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "rounded-full px-10 h-auto bg-accent transition-all hover:bg-accent hover:brightness-[1.05] text-accent-foreground font-display"
                )}
              >
                <TypographyH2 className="border-none pb-0">
                  לפרטים נוספים
                </TypographyH2>
              </Link>
            </AnimationOnScroll>
          </div>
        </div>
      </section>
      <section className="max-w-[750px] mx-auto py-20 z-[0] flex items-center justify-center">
        <TypographyLarge>{currPage.text}</TypographyLarge>
      </section>
      <Contact />
    </>
  )
}
