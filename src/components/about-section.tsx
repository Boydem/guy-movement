import type { FC } from 'react';
import { TypographyH1, TypographyH2 } from './ui/typography';
import Balancer from 'react-wrap-balancer'

const AboutSection: FC = () => {
    return (
        <section className='container min-h-[45vh] flex items-center'>
            <TypographyH2 className='max-w-[750px] border-b-0'>
            <Balancer>
            We are developing and teaching adaptive strategies for an unpredictable, and complex world in which we need to find creative solutions to the challenges we face.
            </Balancer>
            </TypographyH2>
        </section>
    );
}

export default AboutSection;
