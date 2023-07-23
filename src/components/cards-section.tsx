import {  TypographyH1, TypographyH2, TypographyH4 } from './ui/typography';
import Balancer from 'react-wrap-balancer'
import { Card,CardContent,CardHeader } from './ui/card';
import Image from 'next/image';

const CardsSection = () => {
    return (
        <section className='min-h-[45vh] py-20 bg-stone-200'>
            <div className="container flex items-start gap-12 flex-nowrap">
            <TypographyH2 className='border-b-0'>
            <Balancer>
            הזמנה לאורח חיים מלא תנועה
            </Balancer>
            </TypographyH2>
            <div className="flex gap-3 items-center flex-1">
                <Card className='group relative z-0 rounded-none shadow-sm flex-1 transition-all'>
                    <Image src='/imgs/2.webp' fill alt='guy moves it' className='z-[-1] object-cover grayscale brightness-50 transition-all opacity-0 group-hover:opacity-100' />
                    <CardHeader className='px-10'>
                                <TypographyH4 className='uppercase font-normal text-3xl tracking-normal border-t border-foreground text-foreground group-hover:text-background group-hover:border-background'>
                                לפגוש את האני האמיתי שלך
                                </TypographyH4>
                    </CardHeader>
                    <CardContent className='px-10'>
                            <TypographyH1 className='[-webkit-text-stroke:_2px_hsl(var(--foreground))] text-background lg:text-[13rem]'>
                                01
                            </TypographyH1>
                    </CardContent>
                </Card>
                <Card className='group relative z-0 rounded-none shadow-sm flex-1 '>
                <Image src='/imgs/1.webp' fill alt='guy moves it' className='z-[-1] object-cover grayscale brightness-50 transition-all opacity-0 group-hover:opacity-100' />

                    <CardHeader className='px-10'>
                                <TypographyH4 className='uppercase font-normal text-3xl tracking-normal border-t border-foreground text-foreground group-hover:text-background group-hover:border-background'>
                                    להבין את טבע ההתפתחות
                                </TypographyH4>
                    </CardHeader>
                    <CardContent className='px-10'>
  
                            <TypographyH1 className='[-webkit-text-stroke:_2px_hsl(var(--foreground))] text-background lg:text-[13rem]'>
                                02
                            </TypographyH1>
                    </CardContent>
                </Card>
                <Card className='group relative z-0 rounded-none shadow-sm flex-1 '>
                <Image src='/imgs/2.webp' fill alt='guy moves it' className='z-[-1] object-cover grayscale brightness-50 transition-all opacity-0 group-hover:opacity-100' />

                    <CardHeader className='px-10'>
                                <TypographyH4 className='uppercase font-normal text-3xl tracking-normal border-t border-foreground text-foreground group-hover:text-background group-hover:border-background'>
                                לגלות ולפתח יכולות חדשות
                                </TypographyH4>
                    </CardHeader>
                    <CardContent className='px-10'>
                            <TypographyH1 className='[-webkit-text-stroke:_2px_hsl(var(--foreground))] text-background lg:text-[13rem]'>
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
