import type { FC } from 'react';
import Marquee from "react-fast-marquee";
import { TypographyH3 } from './ui/typography';
import { cn } from '@/lib/utils';

interface MarqueeTextProps {
    text: string;
    speed?: number;
    className?: string;
}

const MarqueeText: FC<MarqueeTextProps> = ({text,speed=50,className}) => {
    return (
        <Marquee direction='right' autoFill={true} speed={speed} className='flex items-center gap-12 [&>*]:gap-12'>
            <TypographyH3 className={cn('whitespace-nowrap',className)}>{text}</TypographyH3>
        </Marquee>
    );
}

export default MarqueeText;
