"use client"

import type { FC } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Image from "next/image"
import AnimationOnScroll from "@/components/animation-on-scroll"
import { TypographyH1, TypographyH2 } from "@/components/ui/typography"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  email: z.string().email("אימייל לא תקין"),
  name: z.string().min(2, "שם קצר מדי").max(50, "שם ארוך מדי"),
  message: z.string().min(2, "הודעה קצרה מדי").max(500, "הודעה ארוכה מדי"),
})

const Contact: FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <section className="w-full py-20 bg-primary-foreground relative z-[0]">
      <Image
        src={"/imgs/5.webp"}
        alt="Movement Guy"
        fill
        className="object-cover object-center grayscale contrast-75 brightness-[0.75] z-[1] pointer-events-none"
      />
      <div className="container flex flex-col gap-12 z-[2] relative">
        <AnimationOnScroll>
          <TypographyH1 className="text-primary opacity-85 mix-blend-difference invert">
            יצירת קשר
          </TypographyH1>
        </AnimationOnScroll>
        <AnimationOnScroll delay={150}>
          <div className="flex">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-wrap gap-8 max-w-[600px]"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      {/* <FormLabel>
                <TypographyH3>
                שם
                </TypographyH3>
              </FormLabel> */}
                      <FormControl>
                        <Input
                          className="text-primary-foreground placeholder:text-primary-foreground placeholder:opacity-75 placeholder:focus-within:opacity-100 bg-transparent ring-accent rounded-xl font-display text-3xl font-normal tracking-wider py-6 focus-visible:outline-none focus-visible:ring-0 focus-visible:border-accent"
                          placeholder="שם"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      {/* <FormLabel>
                <TypographyH3>
                אימייל
                </TypographyH3>
              </FormLabel> */}
                      <FormControl>
                        <Input
                          className="text-primary-foreground placeholder:text-primary-foreground placeholder:opacity-75 placeholder:focus-within:opacity-100 bg-transparent ring-accent rounded-xl font-display text-3xl font-normal tracking-wider py-6 focus-visible:outline-none focus-visible:ring-0 focus-visible:border-accent"
                          placeholder="אימייל"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      {/* <FormLabel>
                <TypographyH3>
                הודעה
                </TypographyH3>
              </FormLabel> */}
                      <FormControl>
                        <Textarea
                          className="text-primary-foreground placeholder:text-primary-foreground placeholder:opacity-75 placeholder:focus-within:opacity-100 bg-transparent ring-accent rounded-xl font-display text-3xl font-normal tracking-wider py-6 focus-visible:outline-none focus-visible:ring-0 focus-visible:border-accent"
                          placeholder="במה אוכל לעזור ?"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="rounded-full px-10 h-auto bg-accent transition-all hover:bg-accent hover:brightness-[1.05] text-accent-foreground font-display"
                  variant={"secondary"}
                >
                  <TypographyH2 className="border-none pb-0">
                    שליחה
                  </TypographyH2>
                </Button>
              </form>
            </Form>
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  )
}

export default Contact
