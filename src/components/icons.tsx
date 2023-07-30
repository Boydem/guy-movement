import {
  Menu,
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Copy,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Loader2,
  LucideProps,
  Moon,
  MoreVertical,
  Plus,
  Settings,
  SunMedium,
  Trash,
  User,
  X,
  type LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  logo: (props: LucideProps) => (
    <svg
      width={"100%"}
      fill="currentColor"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 325.66 251.89"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M186.6,45.36q0,1.38-4.47,10.31Q179.37,60.14,177,65q-6.19,12.38-17.87,37.11-34,71.83-46.4,138.49-1,3.09-6.52,7.22t-7.91,4.12q-3.78,0-2.75-6.53,10-47.42,18.22-68.73,1.71-4.47,5.49-17.52-5.14,1.72-16.15,5.15-27.82,7.56-38.83,7.56-6.87,0-19.24-1Q25.09,168.74,12.54,156T0,126.12q0-22.34,21-51.21Q52.58,31.28,93.81,11.34,117.18,0,122.34,0q7.22,0,7.21,4.47,0,3.43-5.84,9.28c-.69.68-3.21,1-7.56,1q-10.31,0-35.39,15.46Q58.08,44.34,51.2,51.89,15.45,91.42,15.46,116.5q0,18.21,19.93,31.95,4.8,3.45,15.29,6.36t17,2.92q23,0,55.31-10,18.54-40.54,41.89-89.36-1.38-1.72-30.23,3.78a350.72,350.72,0,0,0-44.3,12q-.34,0-21.29,7.92-16.14,6.18-18.55,6.19A22,22,0,0,1,45.36,88q-2.05-1-2.06-4.46,0-8.6,11.34-12.38,4.13-.33,11.68-1.37,8.59-3.09,26.12-8.93,10-2.41,29.21-7.56Q149.13,46,185.22,41.92A12.09,12.09,0,0,1,186.6,45.36Z" />
          <path d="M321.42,47.36a7,7,0,0,1,4.2,7.2l-11.4,135.9a7.22,7.22,0,1,1-14.39-1.2l9.89-115.5-51,54a7.61,7.61,0,0,1-10.5,0l-52.5-57,13.2,120.3a7.24,7.24,0,0,1-14.4,1.5l-15.3-141.9a6.87,6.87,0,0,1,4.2-7.2,7,7,0,0,1,8.1,1.8l61.8,66.9,60-63.3A7.35,7.35,0,0,1,321.42,47.36Zm-99-9.9,32.4,36L284.22,36a7.12,7.12,0,0,1,9.9-1.2A6.94,6.94,0,0,1,295.33,45l-34.21,43.8a8.23,8.23,0,0,1-5.4,3,7.68,7.68,0,0,1-5.7-2.4l-38.4-42.3a6.82,6.82,0,0,1,.6-9.9A7.15,7.15,0,0,1,222.42,37.46Zm24,115.2a6.34,6.34,0,0,0,6.3,6.3,6.3,6.3,0,0,0,0-12.6A6.34,6.34,0,0,0,246.42,152.66Z" />
        </g>
      </g>
    </svg>
  ),
  menu: Menu,
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  check: Check,
  copy: Copy,
  copyDone: ClipboardCheck,
  sun: SunMedium,
  moon: Moon,
  aria: (props: LucideProps) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z" />
    </svg>
  ),
  google: (props: LucideProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
}
