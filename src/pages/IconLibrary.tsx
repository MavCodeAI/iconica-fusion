
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IconCard from '@/components/IconCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { icons, Icon as IconType } from '@/data/icons';
import { Link } from 'react-router-dom';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';
import { useToast } from '@/hooks/use-toast';

const ICONS_PER_PAGE = 60;

const IconLibrary = () => {
  const { toast } = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredIcons, setFilteredIcons] = useState<IconType[]>(icons);

  // Calculate total pages
  const totalPages = Math.ceil(filteredIcons.length / ICONS_PER_PAGE);
  
  // Get current icons for page
  const currentIcons = filteredIcons.slice(
    (currentPage - 1) * ICONS_PER_PAGE,
    currentPage * ICONS_PER_PAGE
  );

  // Handle search
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredIcons(icons);
    } else {
      const filtered = icons.filter(
        icon => 
          icon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          icon.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredIcons(filtered);
    }
    setCurrentPage(1); // Reset to first page on search
  }, [searchTerm]);

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // Generate pagination items
  const getPaginationItems = () => {
    const items = [];
    const maxPagesToShow = 5;
    
    // Always show first page
    items.push(
      <PaginationItem key="first">
        <PaginationLink 
          onClick={() => handlePageChange(1)} 
          isActive={currentPage === 1}
        >
          1
        </PaginationLink>
      </PaginationItem>
    );

    // Show ellipsis if needed
    if (currentPage > 3) {
      items.push(
        <PaginationItem key="ellipsis-start">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    // Add pages around current page
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      if (i === 1 || i === totalPages) continue; // Skip first and last as they're always shown
      items.push(
        <PaginationItem key={i}>
          <PaginationLink 
            onClick={() => handlePageChange(i)} 
            isActive={currentPage === i}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // Show ellipsis if needed
    if (currentPage < totalPages - 2) {
      items.push(
        <PaginationItem key="ellipsis-end">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    // Always show last page if there's more than one page
    if (totalPages > 1) {
      items.push(
        <PaginationItem key="last">
          <PaginationLink 
            onClick={() => handlePageChange(totalPages)} 
            isActive={currentPage === totalPages}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold">Icon Library</h1>
              <p className="text-gray-600">Browse our collection of {filteredIcons.length.toLocaleString()} icons</p>
            </div>
            
            <div className="w-full md:w-64 mt-4 md:mt-0">
              <Input
                type="search"
                placeholder="Search icons..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
          </div>
          
          {currentIcons.length === 0 ? (
            <div className="bg-white rounded-lg border p-8 text-center">
              <h2 className="text-xl font-medium mb-2">No icons found</h2>
              <p className="text-gray-600">Try a different search term</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setSearchTerm('')}
              >
                Clear search
              </Button>
            </div>
          ) : (
            <div className="bg-white rounded-lg border p-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {currentIcons.map((icon) => (
                  <Link to={`/icon/${icon.id}`} key={icon.id}>
                    <IconCard icon={icon} size="md" />
                  </Link>
                ))}
              </div>
              
              {totalPages > 1 && (
                <div className="mt-8">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious 
                          onClick={() => handlePageChange(currentPage - 1)}
                          className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                        />
                      </PaginationItem>
                      
                      {getPaginationItems()}
                      
                      <PaginationItem>
                        <PaginationNext 
                          onClick={() => handlePageChange(currentPage + 1)}
                          className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

// Helper component for ellipsis
const PaginationEllipsis = () => (
  <span className="flex h-9 w-9 items-center justify-center">...</span>
);

export default IconLibrary;
