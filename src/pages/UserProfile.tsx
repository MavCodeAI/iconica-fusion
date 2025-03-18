
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from '@/components/Icons';
import { Badge } from '@/components/ui/badge';
import { Edit, LogOut, Settings, Star, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import IconCard from '@/components/IconCard';
import { getTrendingIcons } from '@/data/icons';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("collections");
  const userIcons = getTrendingIcons(12); // Mock user's icons for now
  
  const handleEditProfile = () => {
    toast({
      title: "Edit Profile",
      description: "Profile editing feature coming soon!"
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* User info sidebar */}
            <div className="w-full md:w-1/3 lg:w-1/4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex flex-col items-center mb-4">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <h2 className="text-2xl font-bold text-center">John Doe</h2>
                    <p className="text-gray-500 text-center">@johndoe</p>
                    <Badge className="mt-2 bg-brand-500">Pro Member</Badge>
                  </div>
                  <div className="flex justify-center gap-2 mt-4">
                    <Button size="sm" variant="outline" onClick={handleEditProfile}>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link to="/settings">
                        <Settings className="h-4 w-4 mr-2" />
                        Settings
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 py-4 text-center border-y">
                    <div>
                      <p className="text-2xl font-bold">124</p>
                      <p className="text-sm text-gray-500">Icons</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">8.2k</p>
                      <p className="text-sm text-gray-500">Downloads</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">15</p>
                      <p className="text-sm text-gray-500">Collections</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="font-medium mb-2">Bio</h3>
                    <p className="text-sm text-gray-600">
                      Icon designer with a passion for minimal and playful designs. 
                      Creating icons for apps and websites since 2015.
                    </p>
                  </div>
                  
                  <div className="mt-6">
                    <Button variant="destructive" className="w-full" size="sm">
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Content area */}
            <div className="w-full md:w-2/3 lg:w-3/4">
              <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="collections">Collections</TabsTrigger>
                  <TabsTrigger value="uploads">Uploads</TabsTrigger>
                  <TabsTrigger value="favorites">Favorites</TabsTrigger>
                </TabsList>
                
                <TabsContent value="collections" className="mt-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">My Collections</h2>
                    <Button size="sm" variant="outline">
                      <Plus className="h-4 w-4 mr-2" />
                      New Collection
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <Card key={item} className="hover:shadow-md transition-all">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-md">
                            {['UI Elements', 'App Icons', 'Social Media', 'Arrows & Navigation', 'Business'][item - 1]}
                          </CardTitle>
                          <CardDescription>
                            {[24, 18, 32, 15, 27][item - 1]} icons
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-4 gap-2">
                            {Array(4).fill(0).map((_, idx) => (
                              <div key={idx} className="bg-gray-100 rounded-md p-2 flex items-center justify-center">
                                <Icons.random className="h-6 w-6 text-gray-700" />
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="uploads" className="mt-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">My Uploads</h2>
                    <Button size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Icons
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {userIcons.slice(0, 6).map((icon) => (
                      <Link to={`/icon/${icon.id}`} key={icon.id}>
                        <IconCard icon={icon} size="md" />
                      </Link>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="favorites" className="mt-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">My Favorites</h2>
                    <Button size="sm" variant="outline">
                      <Star className="h-4 w-4 mr-2" />
                      Manage Favorites
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {userIcons.slice(6, 12).map((icon) => (
                      <Link to={`/icon/${icon.id}`} key={icon.id}>
                        <IconCard icon={icon} size="md" />
                      </Link>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UserProfile;
