
import React from 'react';
import { Category } from '@/data/icons';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  category: Category;
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, className }) => {
  const IconComponent = category.icon;
  
  return (
    <Link 
      to={`/icons/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
      className={cn(
        "category-card group flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-brand-300 hover:shadow-md transition-all duration-200 bg-white text-center",
        className
      )}
    >
      <div className="mb-3 p-3 bg-brand-50 rounded-full text-brand-500 group-hover:bg-brand-100 transition-colors">
        <IconComponent className="h-8 w-8" />
      </div>
      <h3 className="font-medium text-gray-900">{category.name}</h3>
      <p className="text-sm text-gray-500 mt-1">{category.count} icons</p>
    </Link>
  );
};

export default CategoryCard;
