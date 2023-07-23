export type SiteConfig = typeof siteConfig

export const siteConfig = {
    name: 'Movement Guy',
    description: 'Platform for anyone who wants to schedule appointments with guy.',
    mainNav: [
        {
            title: 'על עצמי',
            href: '/',
        },
        {
            title: 'איפה מתחילים',
            href: '/',
        },
        {
            title: 'מהי תנועה',
            href: '/',
        },
        {
            title: 'יצירת קשר',
            href: '/',
        },
    ],
    links: {
        instagram: 'https://www.instagram.com/movement__guy/',
        facebook: 'https://www.facebook.com/guymovementcoach',
        whatsapp: 'https://github.com/shadcn/ui',
    },
    footer:{
        sliderText: 'תנועה, חיות, מודעות התפתחותית',
        siteByLink: 'https://shadcn.com',
    }
}
