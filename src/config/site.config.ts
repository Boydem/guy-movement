import { innerPagesConfig } from "./inner-pages.config"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Movement Guy",
  description:
    "Platform for anyone who wants to schedule appointments with guy.",
  mainNav: innerPagesConfig.pages.map((page) => ({
    title: innerPagesConfig[page].title,
    href: innerPagesConfig[page].href,
  })),
  links: {
    instagram: "https://www.instagram.com/movement__guy/",
    facebook: "https://www.facebook.com/guymovementcoach",
    whatsapp: "https://wa.me/972542169595",
  },
  footer: {
    sliderText: "תנועה, חיות, מודעות התפתחותית",
    siteByLink: "https://shadcn.com",
  },
}
