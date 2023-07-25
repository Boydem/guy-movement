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
  variant?: "slideUp" | "slideDown" | null
}

const variants = {
  slideDown: "-translate-y-10",
  slideUp: "translate-y-10",
}

export default function AnimationOnScroll({
  children,
  classNameInView = "opacity-1",
  classNameNotInView = "opacity-0",
  delay = 100,
  duration = 1000,
  className = "",
  variant = "slideDown",
}: AnimationOnScrollProps) {
  const { ref, inView } = useInView({ rootMargin: "-80px 0% 0% 0%" })
  if (variant) {
    classNameInView += " translate-y-0"
    classNameNotInView += " " + variants[variant]
  }
  console.log("classNameInView:", classNameInView)
  console.log("classNameNotInView:", classNameNotInView)
  return (
    <div
      ref={ref}
      className={cn(
        "transition-all",
        inView ? classNameInView : classNameNotInView,
        inView && delay ? `delay-${delay}` : "delay-0",
        inView && duration ? `duration-${duration}` : "duration-0",
        className
      )}
    >
      {children}
    </div>
  )
}
