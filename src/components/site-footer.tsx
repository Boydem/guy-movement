
import Link from "next/link"

import { siteConfig } from "@/config/site.config"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import MarqueeSlider from "./marquee-slider"
import { TypographyH1, TypographyH4 } from "./ui/typography"


export function SiteFooter() {

  return (
    <footer className="z-40 w-full bg-primary text-background">
        <div className="container flex flex-col">
      <div className='py-12 flex items-start justify-between space-x-4 transition-colors delay-75 sm:justify-between sm:space-x-0'>
          <Icons.logo className="w-[7.5rem]"/>
      <div className="flex flex-col gap-6">
        <TypographyH4 font="display" className="text-muted-foreground font-normal">
            ניווט מהיר
        </TypographyH4>
        <MainNav items={siteConfig.mainNav} direction="vertical" itemClassNames="hover:text-accent hover:underline" />
      </div>
      </div>
      <div className="w-full flex items-center justify-between">
            <ul className="flex items-center gap-12">
                {Object.entries(siteConfig.links).map(([key, value]) => (
                    <li key={key}>
                        <Link className="capitalize hover:text-accent hover:underline" href={value}>
                            {key}
                        </Link>
                    </li>
                ))}
            </ul>

      </div>
        </div>
        <div className="py-12">
        <MarqueeSlider speed={40} itemsGap="5rem" >
            <TypographyH1 className="text-accent lg:text-[5rem]">
            {siteConfig.footer.sliderText}
            </TypographyH1>
        </MarqueeSlider>
        </div>
        <div className="container pb-6">
            <div className="flex items-center justify-between gap-12 border-t border-muted-foreground pt-6">
                <div className="flex items-center gap-12">
                    <TypographyH4 className="uppercase font-normal text-muted-foreground">All rights reserved</TypographyH4>
                    <TypographyH4 className="uppercase font-normal text-muted-foreground">{siteConfig.name} 2023</TypographyH4>
                </div>
                <Link href={siteConfig.footer.siteByLink}>
                    <TypographyH4 className="uppercase font-normal text-muted-foreground hover:text-accent hover:underline">Site By Noam Dahan</TypographyH4>
                </Link>
            </div>
        </div>
    </footer>
  )
}
