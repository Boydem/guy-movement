import { innerPagesConfig } from "./inner-pages.config"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Movement Guy",
  description:
    "גיא יחזקאל מדריך תנועה, מאמן אישי, מעביר סדנאות לכל הגילאים, עוזר למורים שרוצים להרחיב את סל הכלים שלהם, ומפתח תוכניות אימונים וטיפוליות לפי צרכי הלקוח. ועוזר לכל מי שרוצה להכניס תנועה והתפתחות פיזית הדרגתית בהתאמה אישית לאורח חיים בריא יותר ",
  mainNav: innerPagesConfig.map((page) => ({
    title: page.title,
    href: page.href,
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
