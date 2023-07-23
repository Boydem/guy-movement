'use client'

import type { FC } from 'react'
import {useState} from 'react'
import { TypographyH1 } from './ui/typography'

interface TestimonialsSectionProps {
    testimonials:
        {
            image: string
            name: string
            title: string
            text: string
        }[]
}

const TestimonialsSection: FC<TestimonialsSectionProps> = ({testimonials}) => {
    const [current, setCurrent] = useState(0)
    return (<section className='w-full bg-secondary min-h-[75vh]'>
        <div className='container flex flex-col gap-12'>
            <TypographyH1 className='text-background'>
                מנטורינג
            </TypographyH1>
            <div className='flex items-center justify-center'>
                
            </div>
        </div>
    </section>);
}

export default TestimonialsSection;
