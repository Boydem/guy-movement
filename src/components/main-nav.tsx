'use client'

import {useEffect, useState} from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import { Icons } from "./icons"

interface MainNavProps {
  items?: NavItem[]
  direction?: "horizontal" | "vertical"
  itemClassNames?: string
}

export function MainNav({
  items,
  direction = "horizontal",
  itemClassNames,
}: MainNavProps) {
  const [isOpen,setIsOpen] = useState<boolean>(false)


  return (
    <>
    <Icons.menu className="cursor-pointer w-10 hidden max-sm:block" onClick={()=>{setIsOpen(true)}}/>
      {items?.length ? (
        <nav
          className={cn("max-sm:z-10 max-sm:justify-center max-sm:items-center max-sm:translate-x-full max-sm:transition-transform max-sm:absolute max-sm:left-0 max-sm:top-0 max-sm:w-full max-sm:h-screen max-sm:bg-background max-sm:text-foreground max-sm:flex-col sm:flex-row flex gap-6"
          , direction === "vertical" && "flex-col",
          isOpen && "max-sm:translate-x-0")}
        >
          <Icons.close className="cursor-pointer hidden max-sm:block w-10 absolute top-5 left-5" onClick={()=>setIsOpen(false)} />
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center max-sm:text-5xl max-sm:font-display text-sm font-medium uppercase",
                    item.disabled && "cursor-not-allowed opacity-80",
                    itemClassNames
                  )}
                  onClick={()=>setIsOpen(false)}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </>
  )
}
