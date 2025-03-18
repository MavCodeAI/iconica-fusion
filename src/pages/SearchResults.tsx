
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IconCard from '@/components/IconCard';
import SearchBar from '@/components/SearchBar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { searchIcons, Icon } from '@/data/icons';
import { SlidersHorizontal, ArrowUpDown, Grid3X3, Grid2X2 } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') || '';
  const [results, setResults] = useState<Icon[]>([]);
  const [filteredResults, setFilteredResults] = useState<Icon[]>([]);
  const [sortBy, setSortBy] = useState('relevance');
  const [gridSize, setGridSize] = useState<'normal' | 'large'>('normal');
  const [categoryFilters, setCategoryFilters] = useState<string[]>([]);
  const [showPremium, setShowPremium] = useState(true);
  const [showFree, setShowFree] = useState(true);
  
  useEffect(() => {
    if (query) {
      const searchResults = searchIcons(query);
      setResults(searchResults);
      setFilteredResults(searchResults);
    }
  }, [query]);
  
  useEffect(() => {
    let filtered = [...results];
    
    // Filter by category
    if (categoryFilters.length > 0) {
      filtered = filtered.filter(icon => categoryFilters.includes(icon.category));
    }
    
    // Filter by premium/free
    if (!showPremium) {
      filtered = filtered.filter(icon => !icon.isPremium);
    }
    
    if (!showFree) {
      filtered = filtered.filter(icon => icon.isPremium);
    }
    
    // Sort results
    if (sortBy === 'downloads') {
      filtered.sort((a, b) => b.downloads - a.downloads);
    } else if (sortBy === 'newest') {
      filtered.sort((a, b) => 
        new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()
      );
    }
    
    setFilteredResults(filtered);
  }, [results, categoryFilters, showPremium, showFree, sortBy]);
  
  const handleCategoryFilterChange = (category: string) => {
    setCategoryFilters(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };
  
  // Get unique categories from results
  const categories = Array.from(new Set(results.map(icon => icon.category)));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Search results for "{query}"</h1>
          <p className="text-gray-600">Found {filteredResults.length} icons</p>
        </div>
        
        <div className="mb-8">
          <SearchBar />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Column */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 sticky top-20">
              <h2 className="font-semibold text-gray-900 mb-4">Filters</h2>
              
              <Accordion type="multiple" defaultValue={['type', 'category']}>
                <AccordionItem value="type">
                  <AccordionTrigger>Type</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="free" 
                          checked={showFree} 
                          onCheckedChange={() => setShowFree(!showFree)}
                        />
                        <label htmlFor="free" className="text-sm cursor-pointer">Free</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="premium" 
                          checked={showPremium} 
                          onCheckedChange={() => setShowPremium(!showPremium)}
                        />
                        <label htmlFor="premium" className="text-sm cursor-pointer">Premium</label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="category">
                  <AccordionTrigger>Category</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {categories.map((category, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Checkbox 
                            id={category} 
                            checked={categoryFilters.includes(category)} 
                            onCheckedChange={() => handleCategoryFilterChange(category)}
                          />
                          <label htmlFor={category} className="text-sm cursor-pointer">{category}</label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => {
                    setCategoryFilters([]);
                    setShowPremium(true);
                    setShowFree(true);
                    setSortBy('relevance');
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </div>
          </div>
          
          {/* Icons Column */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <SlidersHorizontal className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Sort by:</span>
                  <Select defaultValue="relevance" onValueChange={setSortBy}>
                    <SelectTrigger className="w-[160px] border-none shadow-none ml-2 h-8">
                      <SelectValue placeholder="Relevance" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevance</SelectItem>
                      <SelectItem value="downloads">Most downloads</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button 
                    variant={gridSize === 'normal' ? 'default' : 'outline'} 
                    size="icon" 
                    onClick={() => setGridSize('normal')}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant={gridSize === 'large' ? 'default' : 'outline'} 
                    size="icon" 
                    onClick={() => setGridSize('large')}
                  >
                    <Grid2X2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            {filteredResults.length > 0 ? (
              <div className={`grid ${gridSize === 'normal' ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'} gap-4`}>
                {filteredResults.map((icon) => (
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
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchResults;
