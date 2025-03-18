
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { 
  Filter, 
  Grid3X3, 
  Plus, 
  Search,
  Lock, 
  Users
} from 'lucide-react';
import { Icons } from '@/components/Icons';

const COLLECTIONS = [
  {
    id: 1,
    name: "Essential UI Icons",
    description: "Basic icons for web interfaces and applications",
    iconCount: 246,
    author: "Iconica Team",
    isOfficial: true,
    premium: false,
    previewIcons: [0, 1, 2, 3, 4, 5, 6, 7]
  },
  {
    id: 2,
    name: "Social Media Pack",
    description: "Icons for all popular social media platforms",
    iconCount: 124,
    author: "John Designer",
    isOfficial: false,
    premium: true,
    previewIcons: [8, 9, 10, 11, 12, 13, 14, 15]
  },
  {
    id: 3,
    name: "Business & Finance",
    description: "Professional icons for business presentations",
    iconCount: 188,
    author: "Iconica Team",
    isOfficial: true,
    premium: false,
    previewIcons: [16, 17, 18, 19, 20, 21, 22, 23]
  },
  {
    id: 4,
    name: "Weather Icons",
    description: "Comprehensive weather icon set",
    iconCount: 72,
    author: "MeteoDesigns",
    isOfficial: false,
    premium: false,
    previewIcons: [24, 25, 26, 27, 28, 29, 30, 31]
  },
  {
    id: 5,
    name: "Gradient Pack",
    description: "Beautiful gradient style icons",
    iconCount: 156,
    author: "ColorStudio",
    isOfficial: false,
    premium: true,
    previewIcons: [32, 33, 34, 35, 36, 37, 38, 39]
  },
  {
    id: 6,
    name: "Navigation & Maps",
    description: "Icons for maps and navigation interfaces",
    iconCount: 94,
    author: "Iconica Team",
    isOfficial: true,
    premium: false,
    previewIcons: [40, 41, 42, 43, 44, 45, 46, 47]
  },
  {
    id: 7,
    name: "Technology Icons",
    description: "Modern technology and device icons",
    iconCount: 218,
    author: "TechDesigns",
    isOfficial: false,
    premium: true,
    previewIcons: [0, 10, 20, 30, 40, 50, 60, 70]
  },
  {
    id: 8,
    name: "Minimalist Set",
    description: "Clean and simple minimalist icons",
    iconCount: 132,
    author: "MinimalStudio",
    isOfficial: false,
    premium: false,
    previewIcons: [5, 15, 25, 35, 45, 55, 65, 75]
  }
];

const Collections = () => {
  const { toast } = useToast();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Icon Collections</h1>
            <p className="text-gray-600">
              Discover curated sets of icons for your next project. Browse through official collections
              or explore community-created sets.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search collections..." 
                className="pl-9"
              />
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              
              <Button variant="outline">
                <Grid3X3 className="h-4 w-4 mr-2" />
                Sort
              </Button>
              
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Collection
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {COLLECTIONS.map((collection) => (
              <Card key={collection.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">
                        {collection.name}
                        {collection.premium && (
                          <Badge className="ml-2 bg-brand-500">PRO</Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        by {collection.author}
                        {collection.isOfficial && (
                          <Badge variant="outline" className="ml-2 text-xs">Official</Badge>
                        )}
                      </CardDescription>
                    </div>
                    {collection.premium ? (
                      <Lock className="h-4 w-4 text-brand-500" />
                    ) : (
                      <Users className="h-4 w-4 text-gray-400" />
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {collection.previewIcons.map((iconIndex) => (
                      <div 
                        key={iconIndex} 
                        className="aspect-square bg-gray-100 rounded-md p-1.5 flex items-center justify-center"
                      >
                        <Icons.random className="h-full w-full text-gray-700" />
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {collection.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {collection.iconCount} icons
                    </span>
                    
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/collections/${collection.id}`}>
                        View Collection
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button variant="outline">Load More Collections</Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Collections;
