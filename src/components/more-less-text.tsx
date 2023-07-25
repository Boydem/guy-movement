"use client"

import type { PropsWithChildren, FC } from "react"
import { useState, useRef, useLayoutEffect } from "react"
import { Button } from "./ui/button"
import { cn, debounce } from "@/lib/utils"

interface MoreLessTextProps extends PropsWithChildren {
  maxHeight?: string
}

const MoreLessText: FC<MoreLessTextProps> = ({
  children,
  maxHeight = "100px",
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [elementHeight, setElementHeight] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!contentRef.current) return
    const handleResize = () => {
      if (contentRef.current) {
        setElementHeight(contentRef.current.scrollHeight)
      }
    }
    handleResize()
    const debouncedResizeHandler = debounce(handleResize)
    window.addEventListener("resize", debouncedResizeHandler)
    return () => window.removeEventListener("resize", debouncedResizeHandler)
  }, [contentRef.current])

  return (
    <div className="flex flex-col gap-6 items-center">
      <div
        ref={contentRef}
        style={{
          maxHeight: isExpanded && elementHeight ? elementHeight : maxHeight,
        }}
        className={cn(
          "overflow-hidden transition-all duration-300 relative after:pointer-events-none after:w-full after:h-16 after:bottom-0 after:left-0 after:absolute",
          isExpanded
            ? ""
            : "after:bg-gradient-to-t after:from-secondary after:to-transparent"
        )}
      >
        {children}
      </div>
      <Button
        variant={"link"}
        className="text-muted-foreground"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "הצג פחות" : "הצג הכל"}
      </Button>
    </div>
  )
}

export default MoreLessText
