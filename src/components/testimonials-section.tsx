
import type { FC } from 'react'
import { TypographyH1, TypographyH3, TypographyP } from './ui/typography'
import { Tabs , TabsContent , TabsList , TabsTrigger } from './ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Balancer } from 'react-wrap-balancer'
import MoreLessText from './more-less-text'

interface TestimonialsSectionProps {
    testimonials:
        {
            id:string
            image: string
            name: string
            title: string
            text: string
        }[]
}

const TestimonialsSection: FC<TestimonialsSectionProps> = ({testimonials}) => {
    return (<section className='w-full bg-secondary py-20'>
        <div className='container flex flex-col gap-12'>
            <TypographyH1 className='text-secondary-foreground'>
                ממליצים
            </TypographyH1>
            <div className='flex items-center justify-center'>
            <Tabs dir='rtl' defaultValue={testimonials[Math.floor(testimonials.length / 2)].id}  className="max-w-[550px]">
                <TabsList className='bg-transparent flex items-center justify-center h-auto'>
                    {testimonials.map(testimonial => (
                    <TabsTrigger className='p-0 mx-[-.5rem] bg-none ring-accent data-[state=active]:mx-0 data-[state=active]:z-[1] data-[state=active]:bg-transparent data-[state=active]:ring-2 rounded-full focus-visible:ring-accent' key={testimonial.id} value={testimonial.id}>
                        <Avatar className='w-20 h-20'>
                            <AvatarImage src={testimonial.image} alt={testimonial.name}/>
                            <AvatarFallback>
                                <TypographyH3>
                                    {testimonial.name.split(' ').map(namePart => namePart[0]).join('')}
                                </TypographyH3>

                            </AvatarFallback>
                        </Avatar>
                    </TabsTrigger>
                    ))}
                </TabsList>
                {testimonials.map(testimonial => (
                    <TabsContent className='mt-6' key={testimonial.id} value={testimonial.id}>
                        <div className='flex flex-col items-center justify-center gap-2'>
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
                        </div>
                    </TabsContent>
                 ))}
            </Tabs>
            </div>
        </div>
    </section>);
}

export default TestimonialsSection;
