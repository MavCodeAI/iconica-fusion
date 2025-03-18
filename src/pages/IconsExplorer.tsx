
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IconCard from '@/components/IconCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { 
  Filter, 
  Grid, 
  List, 
  ChevronDown, 
  Check, 
  ChevronUp,
  Download
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { getAllIcons, categories } from '@/data/icons';

const IconsExplorer = () => {
  const { toast } = useToast();
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popular');
  const [showColorFilter, setShowColorFilter] = useState(false);
  const [showStyleFilter, setShowStyleFilter] = useState(false);
  const [showCategoryFilter, setShowCategoryFilter] = useState(true);
  
  const allIcons = getAllIcons();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold">Icons Explorer</h1>
              <p className="text-gray-600">Browse our collection of {allIcons.length.toLocaleString()} icons</p>
            </div>
            
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Download className="h-4 w-4 mr-1" />
                Bulk Download
              </Button>
              
              <div className="border-l h-6 mx-2" />
              
              <div className="flex border rounded-md overflow-hidden">
                <Button 
                  variant={view === 'grid' ? 'default' : 'ghost'} 
                  size="icon" 
                  className="rounded-none h-8 w-8"
                  onClick={() => setView('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button 
                  variant={view === 'list' ? 'default' : 'ghost'} 
                  size="icon" 
                  className="rounded-none h-8 w-8"
                  onClick={() => setView('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    Sort: {sortBy === 'popular' ? 'Popular' : sortBy === 'newest' ? 'Newest' : 'Trending'}
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem 
                    onClick={() => setSortBy('popular')}
                    className="flex items-center justify-between"
                  >
                    Popular
                    {sortBy === 'popular' && <Check className="h-4 w-4" />}
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => setSortBy('newest')}
                    className="flex items-center justify-between"
                  >
                    Newest
                    {sortBy === 'newest' && <Check className="h-4 w-4" />}
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => setSortBy('trending')}
                    className="flex items-center justify-between"
                  >
                    Trending
                    {sortBy === 'trending' && <Check className="h-4 w-4" />}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="w-full lg:w-64 space-y-6">
              <div className="bg-white rounded-lg border p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Filters</h3>
                  <Button variant="ghost" size="sm" onClick={() => toast({ title: "Filters cleared" })}>
                    Clear all
                  </Button>
                </div>
                
                <div className="relative">
                  <Input 
                    placeholder="Search icons..." 
                    className="pl-8" 
                  />
                  <svg 
                    className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                    />
                  </svg>
                </div>
                
                <div>
                  <Tabs defaultValue="all">
                    <TabsList className="w-full">
                      <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
                      <TabsTrigger value="free" className="flex-1">Free</TabsTrigger>
                      <TabsTrigger value="premium" className="flex-1">Premium</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
                
                <Separator />
                
                <div>
                  <button 
                    className="flex items-center justify-between w-full text-left font-medium"
                    onClick={() => setShowCategoryFilter(!showCategoryFilter)}
                  >
                    Categories
                    {showCategoryFilter ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  
                  {showCategoryFilter && (
                    <div className="mt-3 space-y-2 max-h-44 overflow-y-auto">
                      {categories.map((category) => (
                        <div key={category.id} className="flex items-center space-x-2">
                          <Checkbox id={`category-${category.id}`} />
                          <Label 
                            htmlFor={`category-${category.id}`}
                            className="text-sm cursor-pointer"
                          >
                            {category.name} ({category.count})
                          </Label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <Separator />
                
                <div>
                  <button 
                    className="flex items-center justify-between w-full text-left font-medium"
                    onClick={() => setShowStyleFilter(!showStyleFilter)}
                  >
                    Style
                    {showStyleFilter ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  
                  {showStyleFilter && (
                    <div className="mt-3 space-y-2">
                      {['Filled', 'Outlined', 'Colored', 'Gradient', 'Hand Drawn', 'Flat'].map((style) => (
                        <div key={style} className="flex items-center space-x-2">
                          <Checkbox id={`style-${style}`} />
                          <Label 
                            htmlFor={`style-${style}`}
                            className="text-sm cursor-pointer"
                          >
                            {style}
                          </Label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <Separator />
                
                <div>
                  <button 
                    className="flex items-center justify-between w-full text-left font-medium"
                    onClick={() => setShowColorFilter(!showColorFilter)}
                  >
                    Colors
                    {showColorFilter ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  
                  {showColorFilter && (
                    <div className="mt-3 grid grid-cols-4 gap-2">
                      {['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33F3', '#33FFF3', '#000000', '#FFFFFF'].map((color) => (
                        <div 
                          key={color} 
                          className="w-8 h-8 rounded-full cursor-pointer border border-gray-200"
                          style={{ backgroundColor: color }}
                          onClick={() => toast({ title: `Color ${color} selected` })}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="bg-brand-50 rounded-lg border border-brand-200 p-4">
                <h3 className="font-medium text-brand-800 mb-2">Pro Subscription</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get unlimited access to all premium icons and new releases.
                </p>
                <Button size="sm" className="w-full bg-brand-500 hover:bg-brand-600">
                  Upgrade to Pro
                </Button>
              </div>
            </div>
            
            {/* Icons Content */}
            <div className="flex-1">
              <div className="bg-white rounded-lg border p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-medium">
                    {allIcons.length.toLocaleString()} icons found
                  </h2>
                  
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Additional Filters
                    </Button>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="rounded-full px-3 py-1 flex items-center gap-1">
                    Free Only
                    <button className="ml-1 text-gray-500 hover:text-gray-800">×</button>
                  </Badge>
                  <Badge variant="outline" className="rounded-full px-3 py-1 flex items-center gap-1">
                    Category: Business
                    <button className="ml-1 text-gray-500 hover:text-gray-800">×</button>
                  </Badge>
                </div>
                
                {view === 'grid' ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {allIcons.slice(0, 30).map((icon) => (
                      <Link to={`/icon/${icon.id}`} key={icon.id}>
                        <IconCard icon={icon} size="md" />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-2">
                    {allIcons.slice(0, 15).map((icon) => (
                      <div 
                        key={icon.id} 
                        className="flex items-center border rounded-lg p-2 hover:shadow-sm"
                      >
                        <div className="h-12 w-12 flex items-center justify-center">
                          {React.createElement(icon.component, { size: 24 })}
                        </div>
                        <div className="ml-4 flex-1">
                          <h3 className="font-medium">{icon.name}</h3>
                          <p className="text-xs text-gray-500">
                            {icon.tags.slice(0, 3).join(', ')}
                          </p>
                        </div>
                        <div className="flex items-center mr-2">
                          {icon.isPremium && (
                            <Badge variant="default" className="bg-brand-500 mr-2">
                              PRO
                            </Badge>
                          )}
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="flex justify-center mt-8">
                  <Button>Load More Icons</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default IconsExplorer;
