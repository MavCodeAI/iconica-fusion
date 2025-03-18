
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Filter, 
  Grid3X3, 
  Grid2X2,
  Download,
  Search,
  SlidersHorizontal
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample illustrations data
const ILLUSTRATIONS = [
  {
    id: 1,
    title: "Business Meeting",
    previewUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&h=300",
    category: "Business",
    tags: ["meeting", "office", "teamwork"],
    premium: false
  },
  {
    id: 2,
    title: "Workspace Setup",
    previewUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=300&h=300",
    category: "Workspace",
    tags: ["desk", "computer", "productivity"],
    premium: true
  },
  {
    id: 3,
    title: "Technology Background",
    previewUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&h=300",
    category: "Technology",
    tags: ["tech", "digital", "futuristic"],
    premium: false
  },
  {
    id: 4,
    title: "Remote Work",
    previewUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=300&h=300",
    category: "Lifestyle",
    tags: ["remote", "work", "laptop"],
    premium: true
  },
  {
    id: 5,
    title: "Coding Session",
    previewUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&h=300",
    category: "Technology",
    tags: ["coding", "programming", "developer"],
    premium: false
  },
  {
    id: 6,
    title: "Modern Workplace",
    previewUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=300&h=300",
    category: "Business",
    tags: ["modern", "workplace", "office"],
    premium: true
  },
  {
    id: 7,
    title: "Digital Marketing",
    previewUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&h=300",
    category: "Marketing",
    tags: ["digital", "marketing", "strategy"],
    premium: false
  },
  {
    id: 8,
    title: "Team Collaboration",
    previewUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=300&h=300",
    category: "Teamwork",
    tags: ["team", "collaboration", "meeting"],
    premium: true
  }
];

const Illustrations = () => {
  const { toast } = useToast();
  const [gridSize, setGridSize] = useState<'normal' | 'large'>('normal');
  const [activeTab, setActiveTab] = useState('all');
  
  const handleDownload = (id: number) => {
    toast({
      title: "Downloading Illustration",
      description: "Your download has started"
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Illustrations</h1>
            <p className="text-gray-600">
              Browse our collection of high-quality illustrations for your website, app, or presentation
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search illustrations..." 
                className="pl-9"
              />
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              
              <Button variant="outline">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filter
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
          
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="technology">Technology</TabsTrigger>
              <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className={`grid ${gridSize === 'normal' 
              ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' 
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'} gap-6`}>
            {ILLUSTRATIONS.map((illustration) => (
              <Card key={illustration.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative aspect-square">
                  <img 
                    src={illustration.previewUrl} 
                    alt={illustration.title}
                    className="object-cover w-full h-full"
                  />
                  {illustration.premium && (
                    <Badge className="absolute top-2 right-2 bg-brand-500">PRO</Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{illustration.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {illustration.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {illustration.category}
                    </span>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleDownload(illustration.id)}
                    >
                      <Download className="h-3.5 w-3.5 mr-1" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button variant="outline">Load More Illustrations</Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Illustrations;
