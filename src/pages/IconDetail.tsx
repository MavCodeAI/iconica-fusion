
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { icons } from '@/data/icons';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Heart, Download, Share, Plus, ChevronDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';

const IconDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [isFavorite, setIsFavorite] = useState(false);
  const [iconSize, setIconSize] = useState(64);
  const [iconColor, setIconColor] = useState('#000000');
  const [formatType, setFormatType] = useState('svg');
  
  const icon = icons.find(icon => icon.id === id);
  
  if (!icon) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <h1 className="text-2xl text-gray-600">Icon not found</h1>
        </div>
        <Footer />
      </div>
    );
  }
  
  const IconComponent = icon.component;
  
  const handleDownload = () => {
    if (icon.isPremium) {
      toast({
        title: "Premium Content",
        description: "This icon requires a premium subscription",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Icon Downloaded",
        description: `${icon.name} has been downloaded as ${formatType.toUpperCase()}`,
      });
    }
  };
  
  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      description: `${icon.name} has been ${isFavorite ? 'removed from' : 'added to'} your favorites`,
    });
  };
  
  const handleShare = () => {
    toast({
      title: "Link Copied",
      description: "The link to this icon has been copied to your clipboard",
    });
  };
  
  const handleAddToCollection = () => {
    toast({
      title: "Add to Collection",
      description: "Feature coming soon!",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Icon Preview */}
          <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center">
            <div 
              className="p-8 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center"
              style={{ width: '100%', height: '100%', maxHeight: '400px' }}
            >
              <IconComponent size={iconSize} color={iconColor} strokeWidth={1.5} />
            </div>
          </div>
          
          {/* Icon Details */}
          <div>
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{icon.name}</h1>
                <div className="flex items-center mt-2">
                  <p className="text-sm text-gray-500">Uploaded by {icon.uploadedBy}</p>
                  {icon.isPremium && (
                    <Badge className="ml-2 bg-brand-500" variant="premium">PRO</Badge>
                  )}
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={handleFavorite}
                >
                  <Heart className={isFavorite ? "fill-red-500 text-red-500" : ""} />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={handleShare}
                >
                  <Share />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={handleAddToCollection}
                >
                  <Plus />
                </Button>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-gray-600">
                <span className="font-medium">Downloads:</span> {icon.downloads.toLocaleString()}
              </p>
              <p className="text-gray-600 mt-1">
                <span className="font-medium">Added:</span> {new Date(icon.uploadDate).toLocaleDateString()}
              </p>
              <p className="text-gray-600 mt-1">
                <span className="font-medium">Category:</span> {icon.category}
              </p>
              
              <div className="mt-4">
                <p className="font-medium text-gray-900 mb-2">Tags:</p>
                <div className="flex flex-wrap gap-2">
                  {icon.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-gray-600">{tag}</Badge>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Tabs defaultValue="customize">
                <TabsList className="w-full">
                  <TabsTrigger value="customize" className="flex-1">Customize</TabsTrigger>
                  <TabsTrigger value="download" className="flex-1">Download</TabsTrigger>
                </TabsList>
                
                <TabsContent value="customize" className="p-4 border border-gray-200 rounded-md mt-2">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="icon-size">Size: {iconSize}px</Label>
                      <Slider
                        id="icon-size"
                        min={16}
                        max={256}
                        step={4}
                        value={[iconSize]}
                        onValueChange={(value) => setIconSize(value[0])}
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="icon-color">Color</Label>
                      <div className="flex mt-2 gap-2">
                        <div 
                          className="h-10 w-10 rounded-md border border-gray-300 cursor-pointer"
                          style={{ backgroundColor: iconColor }}
                        >
                          <input 
                            type="color" 
                            value={iconColor}
                            onChange={(e) => setIconColor(e.target.value)}
                            className="opacity-0 w-full h-full cursor-pointer"
                          />
                        </div>
                        <Input 
                          id="icon-color"
                          type="text"
                          value={iconColor}
                          onChange={(e) => setIconColor(e.target.value)}
                          className="flex-1"
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="download" className="p-4 border border-gray-200 rounded-md mt-2">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="format-type">Format</Label>
                      <Select defaultValue="svg" onValueChange={setFormatType}>
                        <SelectTrigger className="w-full mt-2">
                          <SelectValue placeholder="Select a format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Vector</SelectLabel>
                            <SelectItem value="svg">SVG</SelectItem>
                            <SelectItem value="ai" disabled={!icon.isPremium}>AI</SelectItem>
                            <SelectItem value="eps" disabled={!icon.isPremium}>EPS</SelectItem>
                            
                            <SelectLabel>Raster</SelectLabel>
                            <SelectItem value="png">PNG</SelectItem>
                            <SelectItem value="webp">WEBP</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      
                      {formatType && (
                        <div className="mt-3 text-sm text-gray-500">
                          {formatType === 'svg' && 'Scalable Vector Graphics - Ideal for web and print, infinitely scalable.'}
                          {formatType === 'ai' && 'Adobe Illustrator - Editable vector format for Adobe Illustrator (Premium only).'}
                          {formatType === 'eps' && 'Encapsulated PostScript - Standard vector format for professional printing (Premium only).'}
                          {formatType === 'png' && 'Portable Network Graphics - Raster format with transparency support.'}
                          {formatType === 'webp' && 'WebP - Modern raster format with superior compression and quality.'}
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="download-size">Size</Label>
                      <Select defaultValue="64">
                        <SelectTrigger className="w-full mt-2">
                          <SelectValue placeholder="Select a size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="16">16 x 16 px</SelectItem>
                          <SelectItem value="24">24 x 24 px</SelectItem>
                          <SelectItem value="32">32 x 32 px</SelectItem>
                          <SelectItem value="48">48 x 48 px</SelectItem>
                          <SelectItem value="64">64 x 64 px</SelectItem>
                          <SelectItem value="128">128 x 128 px</SelectItem>
                          <SelectItem value="256">256 x 256 px</SelectItem>
                          <SelectItem value="512">512 x 512 px</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {formatType && formatType !== 'svg' && (
                      <div className="flex items-center mt-2">
                        <input type="checkbox" id="with-transparency" className="mr-2" />
                        <Label htmlFor="with-transparency" className="cursor-pointer">Include transparency</Label>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
              
              <Button className="w-full mt-6" size="lg" onClick={handleDownload}>
                {icon.isPremium ? 'Upgrade to Download' : 'Download'}
                <Download className="ml-2 h-4 w-4" />
              </Button>
              
              {icon.isPremium && (
                <p className="text-center text-sm text-gray-500 mt-2">
                  This icon requires a premium subscription
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default IconDetail;
