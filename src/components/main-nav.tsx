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
    <Icons.menu className="cursor-pointer w-10 hidden max-xs:block" onClick={()=>{setIsOpen(true)}}/>
      {items?.length ? (
        <nav
          className={cn("max-xs:z-10 max-xs:justify-center max-xs:items-center max-xs:translate-x-full max-xs:transition-all max-xs:absolute max-xs:left-0 max-xs:top-0 max-xs:w-full max-xs:h-screen max-xs:bg-background max-xs:text-foreground max-xs:flex-col sm:flex-row flex gap-6"
          , direction === "vertical" && "flex-col",
          isOpen && "max-xs:translate-x-0")}
        >
          <Icons.close className="cursor-pointer hidden max-xs:block w-10 absolute top-5 left-5" onClick={()=>setIsOpen(false)} />
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center max-xs:text-5xl max-xs:font-display text-sm font-medium uppercase",
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
