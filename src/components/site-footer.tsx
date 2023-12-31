import Link from "next/link"

import { siteConfig } from "@/config/site.config"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import MarqueeSlider from "./marquee-slider"
import { TypographyH1, TypographyH4 } from "./ui/typography"
import AnimationOnScroll from "./animation-on-scroll"
import { cn } from "@/lib/utils"

export function SiteFooter() {
  return (
    <footer className="z-20 w-full bg-primary text-background">
      <AnimationOnScroll>
        <div className="container flex flex-col">
          <div className="py-12 flex items-start justify-between space-x-4 transition-colors delay-75 sm:justify-between sm:space-x-0">
            <Icons.logo className="w-[7.5rem]" />
            <div className="flex flex-col gap-6">
              <TypographyH4
                font="display"
                className="text-muted-foreground font-normal"
              >
                ניווט מהיר
              </TypographyH4>
              <nav className="flex flex-col gap-6">
                {siteConfig.mainNav.map(
                  (item, index) =>
                    item.href && (
                      <Link
                        key={index}
                        href={item.href}
                        className={cn(
                          "flex items-center text-sm font-medium uppercase hover:text-accent hover:underline"
                        )}
                      >
                        {item.title}
                      </Link>
                    )
                )}
              </nav>
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <ul className="flex items-center gap-12">
              {Object.entries(siteConfig.links).map(([key, value]) => (
                <li key={key}>
                  <Link
                    className="capitalize hover:text-accent hover:underline"
                    href={value}
                  >
                    {key}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimationOnScroll>

      <div className="py-12">
        <AnimationOnScroll>
          <MarqueeSlider speed={40} itemsGap="5rem">
            <TypographyH1 className="text-accent text-[2.5rem] leading-none md:text-[5rem]">
              {siteConfig.footer.sliderText}
            </TypographyH1>
          </MarqueeSlider>
        </AnimationOnScroll>
      </div>
      <div className="container pb-6">
        <AnimationOnScroll variant={"slideUp"}>
          <div className="flex items-center justify-between gap-12 border-t border-muted-foreground pt-6">
            <div className="flex items-center gap-12">
              <TypographyH4 className="uppercase font-normal text-muted-foreground">
                All rights reserved
              </TypographyH4>
              <TypographyH4 className="uppercase font-normal text-muted-foreground">
                {siteConfig.name} 2023
              </TypographyH4>
            </div>
            <Link href={siteConfig.footer.siteByLink}>
              <TypographyH4 className="uppercase font-normal text-muted-foreground hover:text-accent hover:underline">
                Site By Noam Dahan
              </TypographyH4>
            </Link>
          </div>
        </AnimationOnScroll>
      </div>
    </footer>
  )
}
