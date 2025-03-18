
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IconCard from '@/components/IconCard';
import SearchBar from '@/components/SearchBar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { getIconsByCategory, Icon } from '@/data/icons';
import { SlidersHorizontal, ChevronDown, Download, Grid3X3, Grid2X2 } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

const CategoryPage = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [icons, setIcons] = useState<Icon[]>([]);
  const [sortBy, setSortBy] = useState('popular');
  const [gridSize, setGridSize] = useState<'normal' | 'large'>('normal');
  const [showPremium, setShowPremium] = useState(true);
  const [showFree, setShowFree] = useState(true);
  
  // Format the category name for display (convert from URL format to readable format)
  const formattedCategoryName = categoryName 
    ? categoryName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    : '';
  
  useEffect(() => {
    if (categoryName) {
      // Convert URL format (e.g., "user-interface") to the actual category name (e.g., "User Interface")
      const properCategoryName = categoryName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      const categoryIcons = getIconsByCategory(properCategoryName);
      setIcons(categoryIcons);
    }
  }, [categoryName]);
  
  // Filter icons based on premium/free status
  const filteredIcons = icons.filter(icon => 
    (showPremium && icon.isPremium) || (showFree && !icon.isPremium)
  );
  
  // Sort icons based on selected sort option
  const sortedIcons = [...filteredIcons].sort((a, b) => {
    if (sortBy === 'popular') {
      return b.downloads - a.downloads;
    } else if (sortBy === 'newest') {
      return new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime();
    }
    return 0;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-10 bg-gradient-to-b from-brand-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {formattedCategoryName} Icons
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              Discover our collection of high-quality {formattedCategoryName.toLowerCase()} icons for your projects
            </p>
            
            <div className="max-w-2xl mx-auto mb-6">
              <SearchBar />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <Badge variant="outline" className="px-3 py-1 text-sm cursor-pointer hover:bg-gray-100">
                All {formattedCategoryName}
              </Badge>
              <Badge variant="outline" className="px-3 py-1 text-sm cursor-pointer hover:bg-gray-100">
                Business
              </Badge>
              <Badge variant="outline" className="px-3 py-1 text-sm cursor-pointer hover:bg-gray-100">
                Interfaces
              </Badge>
              <Badge variant="outline" className="px-3 py-1 text-sm cursor-pointer hover:bg-gray-100">
                Technology
              </Badge>
              <Badge variant="outline" className="px-3 py-1 text-sm cursor-pointer hover:bg-gray-100">
                Office
              </Badge>
              <Badge variant="outline" className="px-3 py-1 text-sm cursor-pointer hover:bg-gray-100">
                Communication
              </Badge>
            </div>
          </div>
        </section>
        
        {/* Content Section */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <SlidersHorizontal className="h-4 w-4" />
                    <span>Filter</span>
                  </Button>
                  
                  <Select defaultValue="popular" onValueChange={setSortBy}>
                    <SelectTrigger className="w-[160px] h-9">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <span>Premium</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-1"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download All</span>
                  </Button>
                  
                  <div className="flex items-center space-x-1">
                    <Button 
                      variant={gridSize === 'normal' ? 'default' : 'outline'} 
                      size="icon" 
                      className="h-9 w-9"
                      onClick={() => setGridSize('normal')}
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant={gridSize === 'large' ? 'default' : 'outline'} 
                      size="icon" 
                      className="h-9 w-9"
                      onClick={() => setGridSize('large')}
                    >
                      <Grid2X2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Icons Grid */}
            {sortedIcons.length > 0 ? (
              <div className={`grid ${gridSize === 'normal' ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'} gap-4`}>
                {sortedIcons.map((icon) => (
                  <Link to={`/icon/${icon.id}`} key={icon.id}>
                    <IconCard icon={icon} size={gridSize === 'normal' ? 'md' : 'lg'} />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900 mb-2">No icons found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters or search for something else</p>
                <Button asChild>
                  <Link to="/">Browse all icons</Link>
                </Button>
              </div>
            )}
            
            {/* Load More Button */}
            {sortedIcons.length > 0 && (
              <div className="text-center mt-10">
                <Button variant="outline" size="lg">
                  Load More
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
