import { fontDisplay } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface TypographyProps extends PropsWithChildren{
    className?:string
    font?: 'display' | 'sans'
}

export function TypographyH1({children,className,font='display',...props}:TypographyProps) {
    return (
      <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className, font==='display' ?'font-display' : 'font-sans')}>
       {children}
      </h1>
    )
  }

  export function TypographyH2({children,className,font='display',...props}:TypographyProps) {
    return (
      <h2 className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0", className, font==='display' ?'font-display' : 'font-sans')}>
      {children}
      </h2>
    )
  }
  
  export function TypographyH3({children,className,font='display',...props}:TypographyProps) {
    return (
      <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight",
       className, font==='display' ?'font-display' : 'font-sans')}>
       {children}
      </h3>
    )
  }
  
  export function TypographyH4({children,className,font='display',...props}:TypographyProps) {
    return (
      <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight",className,font==='display'?'font-display':'font-sans')}>
       {children}
      </h4>
    )
  }
  
  export function TypographyP({children,className,font='sans',...props}:TypographyProps) {
    return (
      <p className={cn("leading-7 [&:not(:first-child)]:mt-6",className,font==='display'?'font-display':'font-sans')}>
       {children}
      </p>
    )
  }
  
  export function TypographyBlockquote({children,className,font='sans',...props}:TypographyProps) {
    return (
      <blockquote className={cn("mt-6 border-l-2 pl-6 italic",className,font==='display'?'font-display':'font-sans')}>
       {children}
      </blockquote>
    )
  }
  
  export function TypographyLead({children,className,font='display',...props}:TypographyProps) {
    return (
      <p className={cn("text-xl text-muted-foreground",className,font==='display'?'font-display':'font-sans')}>
      {children}
      </p>
    )
  }

  export function TypographyLarge({children,className,font='sans',...props}:TypographyProps) {
    return (
      <div className={cn("text-lg font-semibold",className,font==='display'?'font-display':'font-sans')}>{children}</div>
    )
  }

  export function TypographySmall({children,className,font='sans',...props}:TypographyProps) {
    return (
      <small className={cn("text-sm font-medium leading-none",className,font==='display'?'font-display':'font-sans')}>{children}</small>
    )
  }

  export function TypographyMuted({children,className,font='sans',...props}:TypographyProps) {
    return (
      <p className={cn("text-sm text-muted-foreground",className,font==='display'?'font-display':'font-sans')}>{children}</p>
    )
  }