'use client'

import type { FC } from 'react';
import {motion as m  } from 'framer-motion'
import { TypographyH1, TypographyH3 } from './ui/typography';
import MoreLessText from './more-less-text';
import { Balancer } from 'react-wrap-balancer';
import { Testimonial } from './testimonials-section';

interface TestimonialContentProps {
    testimonial:Testimonial
}

export const TestimonialContent: FC<TestimonialContentProps> = ({testimonial}) => {
    return (
        <m.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5,delay:0.1}} className='flex flex-col items-center justify-center gap-2'>
            <TypographyH1 className='text-secondary-foreground'>
                {testimonial.name}
            </TypographyH1>
            <TypographyH3 className='text-secondary-foreground'>
                {testimonial.title}
            </TypographyH3>
            <div className='text-secondary-foreground text-center leading-7 mt-4'>
                    <MoreLessText>
                        <Balancer>
                        {testimonial.text}
                        </Balancer>
                    </MoreLessText>
            </div>
        </m.div>
        );
}

