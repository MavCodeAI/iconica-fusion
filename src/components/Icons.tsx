
import { 
  AlertCircle, 
  ArrowRight, 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  Command, 
  CreditCard, 
  File, 
  FileText, 
  HelpCircle, 
  Image, 
  Laptop, 
  Loader2, 
  LucideProps, 
  Menu, 
  Moon, 
  MoreVertical, 
  Pizza, 
  Plus, 
  Settings, 
  SunMedium, 
  Trash, 
  Twitter, 
  User, 
  X, 
  type Icon as LucideIcon
} from "lucide-react";

import { cn } from "@/lib/utils";

export type IconProps = LucideProps & {
  name?: string;
};

// A mapping of icon names to their Lucide components
const iconMap = {
  "arrow-right": ArrowRight,
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  "credit-card": CreditCard,
  "file-text": FileText,
  "alert-circle": AlertCircle,
  "help-circle": HelpCircle,
  "sun-medium": SunMedium,
  "more-vertical": MoreVertical,
  "loader-2": Loader2,
  check: Check,
  command: Command,
  file: File,
  image: Image,
  laptop: Laptop,
  menu: Menu,
  moon: Moon,
  pizza: Pizza,
  plus: Plus,
  settings: Settings,
  trash: Trash,
  twitter: Twitter,
  user: User,
  x: X,
};

export const Icons = {
  logo: ({ ...props }: LucideProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 17L12 22L22 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12L12 17L22 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  spinner: ({ className, ...props }: LucideProps) => (
    <Loader2 className={cn("animate-spin", className)} {...props} />
  ),
  // Function to return a random icon from the iconMap
  random: ({ className, ...props }: LucideProps) => {
    const icons = Object.values(iconMap);
    const RandomIcon = icons[Math.floor(Math.random() * icons.length)];
    return <RandomIcon className={cn(className)} {...props} />;
  },
  // Dynamically get an icon by name
  get: ({ name, ...props }: IconProps) => {
    if (!name) return <HelpCircle {...props} />;
    
    // Get the icon component directly from the iconMap
    const IconComponent = iconMap[name as keyof typeof iconMap];
    
    if (!IconComponent) {
      console.warn(`Icon "${name}" not found in iconMap`);
      return <HelpCircle {...props} />;
    }
    
    return <IconComponent {...props} />;
  },
  // Add an explicit map of all icons for easier lookup
  ...iconMap,
};
