import {
  JetBrains_Mono as FontMono,
  Open_Sans as FontSans,
  Karantina as FontDisplay,
} from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontDisplay = FontDisplay({
  weight: ["300", "400", "700"],
  subsets: ["hebrew", "latin"],
  variable: "--font-display",
})
