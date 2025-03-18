
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, Menu, X, LogIn, User } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Temporary state for demo

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-brand-500 flex items-center">
            <svg viewBox="0 0 24 24" className="h-8 w-8 mr-2" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            Iconica
          </Link>
        </div>

        {!isMobile && (
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link to="/icons" className="text-gray-600 hover:text-brand-500">Icons</Link>
            <Link to="/illustrations" className="text-gray-600 hover:text-brand-500">Illustrations</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-brand-500">Pricing</Link>
            <Link to="/about" className="text-gray-600 hover:text-brand-500">About</Link>
          </div>
        )}

        <div className="flex items-center space-x-3">
          {!isMobile && (
            <Link to="/search" className="text-gray-600 hover:text-brand-500">
              <Search className="h-5 w-5" />
            </Link>
          )}

          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/collections">My Collections</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/favorites">Favorites</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="ghost" size="sm" className="hidden md:flex" onClick={() => setIsLoggedIn(true)}>
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
          )}

          <Button size="sm" className="hidden md:flex">Sign Up</Button>

          {isMobile && (
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
          <nav className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Link to="/icons" className="text-gray-600 hover:text-brand-500 py-2">Icons</Link>
            <Link to="/illustrations" className="text-gray-600 hover:text-brand-500 py-2">Illustrations</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-brand-500 py-2">Pricing</Link>
            <Link to="/about" className="text-gray-600 hover:text-brand-500 py-2">About</Link>
            <Link to="/search" className="text-gray-600 hover:text-brand-500 py-2">Search</Link>
            
            <div className="flex space-x-2 pt-2">
              <Button variant="outline" className="w-1/2" onClick={() => setIsLoggedIn(true)}>
                Login
              </Button>
              <Button className="w-1/2">Sign Up</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
