import type { FC } from 'react';
import { TypographyH1, TypographyH2 } from './ui/typography';
import Balancer from 'react-wrap-balancer'

const AboutSection: FC = () => {
    return (
        <section className='container min-h-[45vh] flex items-center'>
            <TypographyH2 className='max-w-[750px] border-b-0'>
            <Balancer>
            הגעתם למסע שלכם.
המסע שבו קורות תנועות בגוף ובנפש, לא סתם כי אם בתשוקה.
משימתי המרכזית היא להיות אתכם, ללוות, להדריך ולהעניק כלים.
מטרתי היא ברורה - לפתח בכם עצמאות גופנית מלאה ובלתי מוגבלת.
            </Balancer>
            </TypographyH2>
        </section>
    );
}

export default AboutSection;
