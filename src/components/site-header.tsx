import Link from "next/link"

import { siteConfig } from "@/config/site.config"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"


export function SiteHeader() {
  return (
    <header className="fixed top-0 z-40 w-full">
      <div className="container flex h-16 items-center space-x-4 text-background sm:justify-between sm:space-x-0">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      <div className="flex items-center gap-6">
        <MainNav items={siteConfig.mainNav} />
        <ThemeToggle />
      </div>
      </div>
    </header>
  )
}
