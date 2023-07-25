"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site.config"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { useLayoutEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [isWindowScrolled, setIsWindowScrolled] = useState(false)

  useLayoutEffect(() => {
    const checkScrollPosition = () =>
      setIsWindowScrolled(window.scrollY > 0 ? true : false)
    window.addEventListener("scroll", checkScrollPosition)
    checkScrollPosition()
    return () => window.removeEventListener("scroll", checkScrollPosition)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-40 w-full transition-colors delay-75",
        isWindowScrolled
          ? "text-foreground bg-background shadow-sm"
          : "text-background"
      )}
    >
      <div
        className={
          "container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0"
        }
      >
        <Link href="/" className="flex items-center gap-2">
          <Icons.logo className="w-10" />
        </Link>
        <div className="flex items-center gap-6">
          <MainNav items={siteConfig.mainNav} />
        </div>
      </div>
    </header>
  )
}
