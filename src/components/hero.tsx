import Image from 'next/image';
import type { FC } from 'react';
import MarqueeText from './marque-text';

interface HeroSectionProps { }

const HeroSection: FC<HeroSectionProps> = () => {
    return (
    <section className='overflow-hidden relative h-screen w-full'>
        <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0 grayscale contrast-75"
            preload="auto"
            playsInline
            autoPlay
            muted
            loop
            poster="https://res.cloudinary.com/dsperrtyj/image/upload/v1674840044/samples/cloudinary-group.jpg"
        >
            <source src="https://res.cloudinary.com/dsperrtyj/video/upload/v1674840051/samples/cld-sample-video.mp4" type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center mix-blend-difference invert">
            <Image src="/SVG/movement-guy-text.svg" alt="logo" fill={true} className="container" />
        </div>
        <div className='absolute bottom-0 left-0 w-full h-16 border-t border-background text-background flex items-center justify-center'>
        <MarqueeText className='tracking-wide' text='תנועה מביאה לשינוי'/>
        </div>
    </section>
    );
}

export default HeroSection;
