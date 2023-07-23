import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"

interface MainNavProps {
  items?: NavItem[]
  direction?: 'horizontal' | 'vertical'
  itemClassNames?:string
}

export function MainNav({ items,direction='horizontal', itemClassNames }: MainNavProps) {
  return (
    <>
      {items?.length ? (
        <nav className={cn("flex gap-6",
        direction==='vertical' && 'flex-col')}>
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium uppercase",
                    item.disabled && "cursor-not-allowed opacity-80",itemClassNames
                  )}
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
