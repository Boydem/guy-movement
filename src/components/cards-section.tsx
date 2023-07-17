import type { FC } from 'react';
import {  TypographyH1, TypographyH2, TypographyH4 } from './ui/typography';
import Balancer from 'react-wrap-balancer'
import { Card,CardContent,CardHeader } from './ui/card';

const CardsSection: FC = () => {
    return (
        <section className='min-h-[45vh] py-20 bg-stone-200'>
            <div className="container flex items-start gap-12 flex-nowrap">
            <TypographyH2 className='border-b-0'>
            <Balancer>
            WE SHARE OUR KNOWLEDGE AND EXPERIENCE IN
            </Balancer>
            </TypographyH2>
            <div className="flex gap-3 items-center flex-1">
                <Card className='rounded-none shadow-sm flex-1'>
                    <CardHeader className='px-10'>
                                <TypographyH4 className='uppercase font-bold tracking-normal border-t border-foreground'>
                                    Creative thinking
                                </TypographyH4>
                    </CardHeader>
                    <CardContent className='px-10'>
                            <TypographyH1 className='[text-shadow:_2px_2px_0px_rgb(0_0_0_/_100%),_-2px_-2px_0px_rgb(0_0_0_/_100%)] text-background lg:text-[13rem]'>
                                01
                            </TypographyH1>
                    </CardContent>
                </Card>
                <Card className='rounded-none shadow-sm flex-1'>
                    <CardHeader className='px-10'>
                                <TypographyH4 className='uppercase font-bold tracking-normal border-t border-foreground'>
                                    Physical performance
                                </TypographyH4>
                    </CardHeader>
                    <CardContent className='px-10'>
                            <TypographyH1 className='[text-shadow:_2px_2px_0px_rgb(0_0_0_/_100%),_-2px_-2px_0px_rgb(0_0_0_/_100%)] text-background lg:text-[13rem]'>
                                02
                            </TypographyH1>
                    </CardContent>
                </Card>
                <Card className='rounded-none shadow-sm flex-1'>
                    <CardHeader className='px-10'>
                                <TypographyH4 className='uppercase font-bold tracking-normal border-t border-foreground'>
                                    Rehabilation
                                </TypographyH4>
                    </CardHeader>
                    <CardContent className='px-10'>
                            <TypographyH1 className='[text-shadow:_2px_2px_0px_rgb(0_0_0_/_100%),_-2px_-2px_0px_rgb(0_0_0_/_100%)] text-background lg:text-[13rem]'>
                                03
                            </TypographyH1>
                    </CardContent>
                </Card>
            </div>
            </div>
        </section>
    );
}

export default CardsSection;
