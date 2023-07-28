"use client"

import type { FC } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { TypographyH2 } from "./ui/typography"
import { Icons } from "./icons"
import { sendContactForm } from "@/services/mail.service"

export interface ContactFormProps extends z.infer<typeof formSchema> {}

const formSchema = z.object({
  email: z.string().email("אימייל לא תקין"),
  name: z.string().min(2, "שם קצר מדי").max(50, "שם ארוך מדי"),
  message: z.string().min(2, "הודעה קצרה מדי").max(500, "הודעה ארוכה מדי"),
})

const ContactForm: FC = () => {
  const form = useForm<ContactFormProps>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  })
  const { formState } = form
  async function onSubmit(values: ContactFormProps) {
    // ✅ This will be type-safe and validated.
    await sendContactForm(values)
    console.log(values)
  }
  return (
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
          disabled={formState.isSubmitting}
        >
          {formState.isSubmitting ? (
            <Icons.spinner className="ml-2 h-4 w-4 animate-spin" />
          ) : null}
          <TypographyH2 className="border-none pb-0">שליחה</TypographyH2>
        </Button>
      </form>
    </Form>
  )
}

export default ContactForm
