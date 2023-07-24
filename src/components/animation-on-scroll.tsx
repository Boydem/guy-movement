"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

interface AnimationOnScrollProps {
  children: React.ReactNode
  classNameInView?: string
  classNameNotInView?: string
  delay?: 0 | 75 | 100 | 150 | 200 | 300 | 500 | 700 | 1000
  duration?: 0 | 75 | 100 | 150 | 200 | 300 | 500 | 700 | 1000
  className?: string
}

export default function AnimationOnScroll({
  children,
  classNameInView = "opacity-1 translate-y-0",
  classNameNotInView = "opacity-0 -translate-y-10",
  delay = 100,
  duration = 1000,
  className = "",
}: AnimationOnScrollProps) {
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref}
      className={cn(
        "transition-all",
        className,
        inView ? classNameInView : classNameNotInView,
        delay && `delay-${delay}`,
        duration && `duration-${duration}`
      )}
    >
      {children}
    </div>
  )
}
