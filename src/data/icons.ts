
import { 
  Home, 
  Heart, 
  Star, 
  Settings, 
  Mail, 
  User, 
  Calendar, 
  Clock, 
  Search, 
  Bell, 
  Camera, 
  Phone, 
  ArrowRight, 
  ArrowLeft, 
  ArrowUp, 
  ArrowDown,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  X,
  Check,
  Plus,
  Minus,
  Edit,
  Trash,
  Download,
  Upload,
  Share,
  ShoppingCart,
  Gift,
  MessageCircle,
  Play,
  Pause,
  Music,
  Volume
} from 'lucide-react';

export type Icon = {
  id: string;
  name: string;
  component: any;
  tags: string[];
  category: string;
  downloads: number;
  isPremium: boolean;
  uploadedBy: string;
  uploadDate: string;
  colors: string[];
};

export type Category = {
  id: string;
  name: string;
  icon: any;
  count: number;
  description: string;
};

// Create icon data
export const icons: Icon[] = [
  {
    id: '1',
    name: 'Home',
    component: Home,
    tags: ['home', 'house', 'building', 'homepage'],
    category: 'User Interface',
    downloads: 12450,
    isPremium: false,
    uploadedBy: 'Iconica',
    uploadDate: '2023-01-15',
    colors: ['black', 'gray'],
  },
  {
    id: '2',
    name: 'Heart',
    component: Heart,
    tags: ['heart', 'love', 'like', 'favorite'],
    category: 'User Interface',
    downloads: 9870,
    isPremium: false,
    uploadedBy: 'Iconica',
    uploadDate: '2023-01-17',
    colors: ['black', 'red'],
  },
  {
    id: '3',
    name: 'Star',
    component: Star,
    tags: ['star', 'favorite', 'rating', 'bookmark'],
    category: 'User Interface',
    downloads: 8654,
    isPremium: false,
    uploadedBy: 'Iconica',
    uploadDate: '2023-01-20',
    colors: ['black', 'yellow'],
  },
  {
    id: '4',
    name: 'Settings',
    component: Settings,
    tags: ['settings', 'gear', 'preferences', 'options'],
    category: 'User Interface',
    downloads: 7632,
    isPremium: false,
    uploadedBy: 'Iconica',
    uploadDate: '2023-01-25',
    colors: ['black', 'gray'],
  },
  {
    id: '5',
    name: 'Mail',
    component: Mail,
    tags: ['mail', 'email', 'message', 'envelope'],
    category: 'Communication',
    downloads: 6543,
    isPremium: false,
    uploadedBy: 'Iconica',
    uploadDate: '2023-02-01',
    colors: ['black', 'blue'],
  },
  {
    id: '6',
    name: 'User',
    component: User,
    tags: ['user', 'person', 'profile', 'account'],
    category: 'User Interface',
    downloads: 9832,
    isPremium: false,
    uploadedBy: 'Iconica',
    uploadDate: '2023-02-05',
    colors: ['black', 'gray'],
  },
  {
    id: '7',
    name: 'Calendar',
    component: Calendar,
    tags: ['calendar', 'date', 'schedule', 'event'],
    category: 'Time & Date',
    downloads: 5467,
    isPremium: true,
    uploadedBy: 'Iconica Pro',
    uploadDate: '2023-02-10',
    colors: ['black', 'blue'],
  },
  {
    id: '8',
    name: 'Clock',
    component: Clock,
    tags: ['clock', 'time', 'watch', 'hour'],
    category: 'Time & Date',
    downloads: 4321,
    isPremium: false,
    uploadedBy: 'Iconica',
    uploadDate: '2023-02-15',
    colors: ['black', 'gray'],
  },
  {
    id: '9',
    name: 'Search',
    component: Search,
    tags: ['search', 'find', 'magnifier', 'look'],
    category: 'User Interface',
    downloads: 12345,
    isPremium: false,
    uploadedBy: 'Iconica',
    uploadDate: '2023-02-20',
    colors: ['black', 'gray'],
  },
  {
    id: '10',
    name: 'Bell',
    component: Bell,
    tags: ['bell', 'notification', 'alert', 'reminder'],
    category: 'User Interface',
    downloads: 6789,
    isPremium: false,
    uploadedBy: 'Iconica',
    uploadDate: '2023-02-25',
    colors: ['black', 'yellow'],
  },
  {
    id: '11',
    name: 'Camera',
    component: Camera,
    tags: ['camera', 'photo', 'picture', 'image'],
    category: 'Media',
    downloads: 7890,
    isPremium: true,
    uploadedBy: 'Iconica Pro',
    uploadDate: '2023-03-01',
    colors: ['black', 'gray'],
  },
  {
    id: '12',
    name: 'Phone',
    component: Phone,
    tags: ['phone', 'call', 'telephone', 'contact'],
    category: 'Communication',
    downloads: 6543,
    isPremium: false,
    uploadedBy: 'Iconica',
    uploadDate: '2023-03-05',
    colors: ['black', 'green'],
  },
  {
    id: '13',
    name: 'Arrow Right',
    component: ArrowRight,
    tags: ['arrow', 'right', 'direction', 'next'],
    category: 'Arrows',
    downloads: 8765,
    isPremium: false,
    uploadedBy: 'Iconica',
    uploadDate: '2023-03-10',
    colors: ['black', 'gray'],
  },
  {
    id: '14',
    name: 'Arrow Left',
    component: ArrowLeft,
    tags: ['arrow', 'left', 'direction', 'previous'],
    category: 'Arrows',
    downloads: 7654,
    isPremium: false,
    uploadedBy: 'Iconica',
    uploadDate: '2023-03-15',
    colors: ['black', 'gray'],
  },
  {
    id: '15',
    name: 'Arrow Up',
    component: ArrowUp,
    tags: ['arrow', 'up', 'direction', 'upward'],
    category: 'Arrows',
    downloads: 6543,
    isPremium: false,
    uploadedBy: 'Iconica',
    uploadDate: '2023-03-20',
    colors: ['black', 'gray'],
  },
  {
    id: '16',
    name: 'Arrow Down',
    component: ArrowDown,
    tags: ['arrow', 'down', 'direction', 'downward'],
    category: 'Arrows',
    downloads: 5432,
    isPremium: false,
    uploadedBy: 'Iconica',
    uploadDate: '2023-03-25',
    colors: ['black', 'gray'],
  },
  {
    id: '17',
    name: 'Chevron Right',
    component: ChevronRight,
    tags: ['chevron', 'right', 'arrow', 'direction'],
    category: 'Arrows',
    downloads: 9876,
    isPremium: true,
    uploadedBy: 'Iconica Pro',
    uploadDate: '2023-04-01',
    colors: ['black', 'gray'],
  },
  {
    id: '18',
    name: 'Chevron Left',
    component: ChevronLeft,
    tags: ['chevron', 'left', 'arrow', 'direction'],
    category: 'Arrows',
    downloads: 8765,
    isPremium: true,
    uploadedBy: 'Iconica Pro',
    uploadDate: '2023-04-05',
    colors: ['black', 'gray'],
  },
  {
    id: '19',
    name: 'Chevron Up',
    component: ChevronUp,
    tags: ['chevron', 'up', 'arrow', 'direction'],
    category: 'Arrows',
    downloads: 7654,
    isPremium: true,
    uploadedBy: 'Iconica Pro',
    uploadDate: '2023-04-10',
    colors: ['black', 'gray'],
  },
  {
    id: '20',
    name: 'Chevron Down',
    component: ChevronDown,
    tags: ['chevron', 'down', 'arrow', 'direction'],
    category: 'Arrows',
    downloads: 6543,
    isPremium: true,
    uploadedBy: 'Iconica Pro',
    uploadDate: '2023-04-15',
    colors: ['black', 'gray'],
  },
  {
    id: '21',
    name: 'Close',
    component: X,
    tags: ['close', 'x', 'cancel', 'delete'],
    category: 'User Interface',
    downloads: 12345,
    isPremium: false,
    uploadedBy: 'Iconica',
    uploadDate: '2023-04-20',
    colors: ['black', 'red'],
  },
  {
    id: '22',
    name: 'Check',
    component: Check,
    tags: ['check', 'tick', 'correct', 'done'],
    category: 'User Interface',
    downloads: 9876,
    isPremium: false,
    uploadedBy: 'Iconica',
    uploadDate: '2023-04-25',
    colors: ['black', 'green'],
  },
  {
    id: '23',
    name: 'Plus',
    component: Plus,
    tags: ['plus', 'add', 'new', 'create'],
    category: 'User Interface',
    downloads: 8765,
    isPremium: false,
    uploadedBy: 'Iconica',
    uploadDate: '2023-05-01',
    colors: ['black', 'green'],
  },
  {
    id: '24',
    name: 'Minus',
    component: Minus,
    tags: ['minus', 'subtract', 'remove', 'delete'],
    category: 'User Interface',
    downloads: 7654,
    isPremium: false,
    uploadedBy: 'Iconica',
    uploadDate: '2023-05-05',
    colors: ['black', 'red'],
  },
  {
    id: '25',
    name: 'Edit',
    component: Edit,
    tags: ['edit', 'pencil', 'write', 'modify'],
    category: 'User Interface',
    downloads: 6543,
    isPremium: false,
    uploadedBy: 'Iconica',
    uploadDate: '2023-05-10',
    colors: ['black', 'blue'],
  },
  {
    id: '26',
    name: 'Trash',
    component: Trash,
    tags: ['trash', 'delete', 'bin', 'remove'],
    category: 'User Interface',
    downloads: 5432,
    isPremium: false,
    uploadedBy: 'Iconica',
    uploadDate: '2023-05-15',
    colors: ['black', 'red'],
  },
  {
    id: '27',
    name: 'Download',
    component: Download,
    tags: ['download', 'arrow', 'save', 'store'],
    category: 'User Interface',
    downloads: 12345,
    isPremium: true,
    uploadedBy: 'Iconica Pro',
    uploadDate: '2023-05-20',
    colors: ['black', 'blue'],
  },
  {
    id: '28',
    name: 'Upload',
    component: Upload,
    tags: ['upload', 'arrow', 'send', 'share'],
    category: 'User Interface',
    downloads: 9876,
    isPremium: true,
    uploadedBy: 'Iconica Pro',
    uploadDate: '2023-05-25',
    colors: ['black', 'blue'],
  },
  {
    id: '29',
    name: 'Share',
    component: Share,
    tags: ['share', 'send', 'social', 'network'],
    category: 'Communication',
    downloads: 8765,
    isPremium: false,
    uploadedBy: 'Iconica',
    uploadDate: '2023-06-01',
    colors: ['black', 'blue'],
  },
  {
    id: '30',
    name: 'Shopping Cart',
    component: ShoppingCart,
    tags: ['cart', 'shopping', 'ecommerce', 'buy'],
    category: 'E-commerce',
    downloads: 7654,
    isPremium: false,
    uploadedBy: 'Iconica',
    uploadDate: '2023-06-05',
    colors: ['black', 'blue'],
  },
  {
    id: '31',
    name: 'Gift',
    component: Gift,
    tags: ['gift', 'present', 'box', 'birthday'],
    category: 'E-commerce',
    downloads: 6543,
    isPremium: true,
    uploadedBy: 'Iconica Pro',
    uploadDate: '2023-06-10',
    colors: ['black', 'red'],
  },
  {
    id: '32',
    name: 'Message Circle',
    component: MessageCircle,
    tags: ['message', 'chat', 'comment', 'talk'],
    category: 'Communication',
    downloads: 5432,
    isPremium: false,
    uploadedBy: 'Iconica',
    uploadDate: '2023-06-15',
    colors: ['black', 'blue'],
  },
  {
    id: '33',
    name: 'Play',
    component: Play,
    tags: ['play', 'start', 'video', 'audio'],
    category: 'Media',
    downloads: 12345,
    isPremium: false,
    uploadedBy: 'Iconica',
    uploadDate: '2023-06-20',
    colors: ['black', 'green'],
  },
  {
    id: '34',
    name: 'Pause',
    component: Pause,
    tags: ['pause', 'stop', 'video', 'audio'],
    category: 'Media',
    downloads: 9876,
    isPremium: false,
    uploadedBy: 'Iconica',
    uploadDate: '2023-06-25',
    colors: ['black', 'gray'],
  },
  {
    id: '35',
    name: 'Music',
    component: Music,
    tags: ['music', 'note', 'audio', 'sound'],
    category: 'Media',
    downloads: 8765,
    isPremium: true,
    uploadedBy: 'Iconica Pro',
    uploadDate: '2023-07-01',
    colors: ['black', 'purple'],
  },
  {
    id: '36',
    name: 'Volume',
    component: Volume,
    tags: ['volume', 'speaker', 'sound', 'audio'],
    category: 'Media',
    downloads: 7654,
    isPremium: true,
    uploadedBy: 'Iconica Pro',
    uploadDate: '2023-07-05',
    colors: ['black', 'blue'],
  },
];

// Create categories
export const categories: Category[] = [
  {
    id: '1',
    name: 'User Interface',
    icon: Settings,
    count: 12,
    description: 'Icons for user interfaces and application design',
  },
  {
    id: '2',
    name: 'Arrows',
    icon: ArrowRight,
    count: 8,
    description: 'Directional arrows and indicators',
  },
  {
    id: '3',
    name: 'Communication',
    icon: MessageCircle,
    count: 4,
    description: 'Icons related to messaging and communication',
  },
  {
    id: '4',
    name: 'Media',
    icon: Play,
    count: 4,
    description: 'Icons for audio, video, and other media',
  },
  {
    id: '5',
    name: 'E-commerce',
    icon: ShoppingCart,
    count: 2,
    description: 'Icons for online shopping and e-commerce',
  },
  {
    id: '6',
    name: 'Time & Date',
    icon: Clock,
    count: 2,
    description: 'Icons related to time, clocks, and calendars',
  },
];

// Get all unique tags from the icons
export const getAllTags = (): string[] => {
  const tagsSet = new Set<string>();
  icons.forEach(icon => {
    icon.tags.forEach(tag => tagsSet.add(tag));
  });
  return Array.from(tagsSet);
};

// Get icons by category
export const getIconsByCategory = (categoryName: string): Icon[] => {
  return icons.filter(icon => icon.category === categoryName);
};

// Get icons by tag
export const getIconsByTag = (tag: string): Icon[] => {
  return icons.filter(icon => icon.tags.includes(tag.toLowerCase()));
};

// Search icons by name or tags
export const searchIcons = (query: string): Icon[] => {
  const lowerCaseQuery = query.toLowerCase();
  return icons.filter(
    icon => 
      icon.name.toLowerCase().includes(lowerCaseQuery) || 
      icon.tags.some(tag => tag.includes(lowerCaseQuery))
  );
};

// Get trending icons (most downloaded)
export const getTrendingIcons = (limit: number = 10): Icon[] => {
  return [...icons].sort((a, b) => b.downloads - a.downloads).slice(0, limit);
};

// Get newest icons
export const getNewestIcons = (limit: number = 10): Icon[] => {
  return [...icons].sort((a, b) => 
    new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()
  ).slice(0, limit);
};

// Get free icons
export const getFreeIcons = (): Icon[] => {
  return icons.filter(icon => !icon.isPremium);
};

// Get premium icons
export const getPremiumIcons = (): Icon[] => {
  return icons.filter(icon => icon.isPremium);
};
