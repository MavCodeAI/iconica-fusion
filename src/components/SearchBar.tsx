
import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { searchIcons, Icon, getAllTags } from '@/data/icons';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Icon[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const allTags = getAllTags();
    setSuggestions(allTags);
  }, []);

  useEffect(() => {
    if (query.length >= 2) {
      const searchResults = searchIcons(query);
      setResults(searchResults.slice(0, 5));
      setShowResults(true);
    } else {
      setResults([]);
      setShowResults(false);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setShowResults(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    navigate(`/search?q=${encodeURIComponent(suggestion)}`);
    setShowResults(false);
  };

  const filteredSuggestions = suggestions
    .filter(suggestion => suggestion.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 5);

  return (
    <div className="relative" ref={searchRef}>
      <form onSubmit={handleSearch}>
        <div className="relative">
          <input
            type="text"
            className="search-input pl-10"
            placeholder="Search icons, illustrations, and more..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => query.length >= 2 && setShowResults(true)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
      </form>

      {showResults && (query.length >= 2) && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
          {results.length > 0 ? (
            <div>
              <div className="p-2 text-xs font-semibold text-gray-500 border-b">MATCHING ICONS</div>
              <ul>
                {results.map((icon) => (
                  <li key={icon.id} className="px-4 py-2 hover:bg-gray-50 cursor-pointer" onClick={() => navigate(`/icon/${icon.id}`)}>
                    <div className="flex items-center">
                      <span className="font-medium">{icon.name}</span>
                      {icon.isPremium && <span className="ml-2 text-xs font-semibold text-brand-500">PRO</span>}
                    </div>
                    <div className="text-xs text-gray-500">{icon.tags.join(', ')}</div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="p-4 text-center text-gray-500">No results found</div>
          )}

          {filteredSuggestions.length > 0 && (
            <div>
              <div className="p-2 text-xs font-semibold text-gray-500 border-b border-t">SUGGESTIONS</div>
              <ul>
                {filteredSuggestions.map((suggestion, index) => (
                  <li 
                    key={index} 
                    className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm" 
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="p-2 border-t text-center">
            <button 
              className="text-brand-500 text-sm hover:underline" 
              onClick={handleSearch}
            >
              Show all results
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
