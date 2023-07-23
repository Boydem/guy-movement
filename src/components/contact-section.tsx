'use client'

import type { FC } from 'react';
import {useForm} from 'react-hook-form'
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
import { TypographyH1,  TypographyH3 } from './ui/typography';
import { Textarea } from './ui/textarea';

const formSchema = z.object({
    email: z.string().email('אימייל לא תקין'),
    name: z.string().min(2, 'שם קצר מדי').max(50, 'שם ארוך מדי'),
    message: z.string().min(2, 'הודעה קצרה מדי').max(500, 'הודעה ארוכה מדי'),
  })

const ContactSection: FC = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            name: "",
            message: "",
        }
      })
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
    return (
    <section className='w-full py-20'>
        <div className="container flex flex-col gap-12">
        <TypographyH1 className='text-secondary-foreground'>
                יצירת קשר
        </TypographyH1>
        <div className="flex items-center justify-center">
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center justify-center flex-wrap gap-8 max-w-[600px]">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
              <FormItem className='flex-1'>
              {/* <FormLabel>
                <TypographyH3>
                שם
                </TypographyH3>
                </FormLabel> */}
              <FormControl>
                <Input className='rounded-none border-t-0 border-x-0 shadow-none font-display text-3xl font-normal tracking-wider placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:border-accent' placeholder="שם" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
              <FormItem className='flex-1'>
              {/* <FormLabel>
                <TypographyH3>
                אימייל
                </TypographyH3>
                </FormLabel> */}
              <FormControl>
                <Input className='rounded-none border-t-0 border-x-0 shadow-none font-display text-3xl font-normal tracking-wider placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:border-accent' placeholder="אימייל" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
              <FormItem className='w-full'>
              {/* <FormLabel>
                <TypographyH3>
                הודעה
                </TypographyH3>
                </FormLabel> */}
              <FormControl>
                <Textarea className='rounded-none border-t-0 border-x-0 font-display text-3xl font-normal tracking-wider placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:border-accent' placeholder="במה אוכל לעזור ?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
        <Button type="submit" variant={'secondary'} className='h-auto px-10'>
            <TypographyH3>שליחה</TypographyH3>
        </Button>
      </form>
        </Form>
        </div>
        </div>
    </section>
        );
}

export default ContactSection;
