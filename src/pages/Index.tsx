
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import IconCard from '@/components/IconCard';
import CategoryCard from '@/components/CategoryCard';
import { Button } from '@/components/ui/button';
import { categories, getTrendingIcons, getNewestIcons } from '@/data/icons';
import { ChevronRight, Bookmark, Crown, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const trendingIcons = getTrendingIcons(8);
  const newestIcons = getNewestIcons(4);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-brand-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Thousands of icons at your fingertips
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Access a comprehensive library of high-quality icons and illustrations for your next project
            </p>
            
            <div className="max-w-2xl mx-auto mb-12">
              <SearchBar />
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/icons">Browse Icons</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/pricing">Get Premium</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Categories</h2>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/categories" className="flex items-center">
                  View all <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Trending Icons Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Trending Icons</h2>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/trending" className="flex items-center">
                  View all <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {trendingIcons.map((icon) => (
                <Link to={`/icon/${icon.id}`} key={icon.id}>
                  <IconCard icon={icon} size="md" />
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* New Icons Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">New Releases</h2>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/new" className="flex items-center">
                  View all <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {newestIcons.map((icon) => (
                <Link to={`/icon/${icon.id}`} key={icon.id}>
                  <IconCard icon={icon} size="lg" />
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center">
              Features designed for designers
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="p-3 bg-brand-50 rounded-lg inline-block mb-4">
                  <Bookmark className="h-6 w-6 text-brand-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Save your favorites</h3>
                <p className="text-gray-600">
                  Bookmark icons for quick access. Create collections to organize your projects.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="p-3 bg-brand-50 rounded-lg inline-block mb-4">
                  <Crown className="h-6 w-6 text-brand-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Premium content</h3>
                <p className="text-gray-600">
                  Get access to thousands of premium icons with a subscription plan.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="p-3 bg-brand-50 rounded-lg inline-block mb-4">
                  <Upload className="h-6 w-6 text-brand-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Become a contributor</h3>
                <p className="text-gray-600">
                  Upload your own icon designs and earn from every download.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of designers and developers who use Iconica to power their projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-brand-500 hover:bg-brand-600" asChild>
                <Link to="/signup">Sign Up Free</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                <Link to="/pricing">See Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
