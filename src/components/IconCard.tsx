
import React from 'react';
import { Icon } from '@/data/icons';
import { Button } from '@/components/ui/button';
import { Heart, Download, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface IconCardProps {
  icon: Icon;
  size?: 'sm' | 'md' | 'lg';
}

const IconCard: React.FC<IconCardProps> = ({ icon, size = 'md' }) => {
  const { toast } = useToast();
  const [isFavorite, setIsFavorite] = React.useState(false);
  
  const IconComponent = icon.component;
  
  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (icon.isPremium) {
      toast({
        title: "Premium Content",
        description: "This icon requires a premium subscription",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Icon Downloaded",
        description: `${icon.name} has been downloaded successfully`,
      });
    }
  };
  
  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      description: `${icon.name} has been ${isFavorite ? 'removed from' : 'added to'} your favorites`,
    });
  };
  
  const handleAddToCollection = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast({
      title: "Add to Collection",
      description: "Feature coming soon!",
    });
  };
  
  const sizeClasses = {
    sm: 'p-3 h-24 w-24',
    md: 'p-4 h-32 w-32',
    lg: 'p-5 h-40 w-40',
  };
  
  const iconSizes = {
    sm: 18,
    md: 24,
    lg: 32,
  };

  return (
    <div className={cn("icon-card", sizeClasses[size])}>
      {icon.isPremium && (
        <Badge className="absolute top-2 right-2 bg-brand-500" variant="default">PRO</Badge>
      )}
      
      <div className="mb-2 flex justify-center items-center h-1/2">
        <IconComponent size={iconSizes[size]} strokeWidth={1.5} />
      </div>
      
      <div className="mt-2 text-center">
        <h3 className="text-sm font-medium text-gray-900 truncate">{icon.name}</h3>
        <p className="text-xs text-gray-500 mt-1">{icon.downloads.toLocaleString()} downloads</p>
      </div>
      
      <div className="icon-actions">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white"
          onClick={handleFavorite}
        >
          <Heart className={cn("h-4 w-4", isFavorite ? "fill-red-500 text-red-500" : "")} />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white"
          onClick={handleDownload}
        >
          <Download className="h-4 w-4" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white"
          onClick={handleAddToCollection}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default IconCard;
