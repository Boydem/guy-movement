"use client"

import { cn } from "@/lib/utils"

interface HeadingProps extends React.HTMLProps<HTMLHeadingElement> {
  className?: string
  font?: "display" | "sans"
}

interface ParagraphProps extends React.HTMLProps<HTMLParagraphElement> {
  className?: string
  font?: "display" | "sans"
}

export function TypographyH1({
  children,
  className,
  font = "display",
  ...props
}: HeadingProps) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-5xl font-extrabold tracking-normal lg:text-5xl",
        className,
        font === "display" ? "font-display" : "font-sans"
      )}
    >
      {children}
    </h1>
  )
}

export function TypographyH2({
  children,
  className,
  font = "display",
  ...props
}: HeadingProps) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-4xl font-normal tracking-normal transition-colors first:mt-0",
        className,
        font === "display" ? "font-display" : "font-sans"
      )}
    >
      {children}
    </h2>
  )
}

export function TypographyH3({
  children,
  className,
  font = "display",
  ...props
}: HeadingProps) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-3xl font-normal tracking-wider",
        className,
        font === "display" ? "font-display" : "font-sans"
      )}
    >
      {children}
    </h3>
  )
}

export function TypographyH4({
  children,
  className,
  font = "display",
  ...props
}: HeadingProps) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-wide",
        className,
        font === "display" ? "font-display" : "font-sans"
      )}
    >
      {children}
    </h4>
  )
}

export function TypographyP({
  children,
  className,
  font = "sans",
  ...props
}: ParagraphProps) {
  return (
    <p
      className={cn(
        "leading-7 [&:not(:first-child)]:mt-6",
        className,
        font === "display" ? "font-display" : "font-sans"
      )}
    >
      {children}
    </p>
  )
}

export function TypographyBlockquote({
  children,
  className,
  font = "sans",
  ...props
}: ParagraphProps) {
  return (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic",
        className,
        font === "display" ? "font-display" : "font-sans"
      )}
    >
      {children}
    </blockquote>
  )
}

export function TypographyLead({
  children,
  className,
  font = "display",
  ...props
}: ParagraphProps) {
  return (
    <p
      className={cn(
        "text-xl text-muted-foreground",
        className,
        font === "display" ? "font-display" : "font-sans"
      )}
    >
      {children}
    </p>
  )
}

export function TypographyHero({
  children,
  className,
  font = "display",
  ...props
}: ParagraphProps) {
  return (
    <div
      className={cn(
        "scroll-m-20 leading-[.75] text-4xl font-extrabold uppercase tracking-tight lg:text-[16rem]",
        className,
        font === "display" ? "font-display" : "font-sans"
      )}
    >
      {children}
    </div>
  )
}

export function TypographyPreLarge({
  children,
  className,
  font = "sans",
  ...props
}: ParagraphProps) {
  return (
    <pre
      className={cn(
        "text-lg font-semibold",
        className,
        font === "display" ? "font-display" : "font-sans"
      )}
    >
      {children}
    </pre>
  )
}

export function TypographyLarge({
  children,
  className,
  font = "sans",
  ...props
}: ParagraphProps) {
  return (
    <div
      className={cn(
        "text-lg font-semibold",
        className,
        font === "display" ? "font-display" : "font-sans"
      )}
    >
      {children}
    </div>
  )
}

export function TypographySmall({
  children,
  className,
  font = "sans",
  ...props
}: ParagraphProps) {
  return (
    <small
      className={cn(
        "text-sm font-medium leading-none",
        className,
        font === "display" ? "font-display" : "font-sans"
      )}
    >
      {children}
    </small>
  )
}

export function TypographyMuted({
  children,
  className,
  font = "sans",
  ...props
}: ParagraphProps) {
  return (
    <p
      className={cn(
        "text-sm text-muted-foreground",
        className,
        font === "display" ? "font-display" : "font-sans"
      )}
    >
      {children}
    </p>
  )
}
