
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { 
  Bell, 
  CreditCard, 
  Download, 
  Key, 
  Lock, 
  User, 
  UserCog 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const profileFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  bio: z.string().max(160).optional(),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
});

const notificationsFormSchema = z.object({
  marketingEmails: z.boolean(),
  socialNotifications: z.boolean(),
  securityEmails: z.boolean().default(true),
  favoritesNotifications: z.boolean(),
});

const Settings = () => {
  const { toast } = useToast();
  
  const profileForm = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      username: "johndoe",
      email: "john.doe@example.com",
      name: "John Doe",
      bio: "Icon designer with a passion for minimal and playful designs."
    },
  });
  
  const notificationsForm = useForm<z.infer<typeof notificationsFormSchema>>({
    resolver: zodResolver(notificationsFormSchema),
    defaultValues: {
      marketingEmails: true,
      socialNotifications: true,
      securityEmails: true,
      favoritesNotifications: false,
    },
  });

  function onProfileSubmit(data: z.infer<typeof profileFormSchema>) {
    toast({
      title: "Profile updated",
      description: "Your profile information has been updated.",
    });
    console.log(data);
  }

  function onNotificationsSubmit(data: z.infer<typeof notificationsFormSchema>) {
    toast({
      title: "Notification preferences updated",
      description: "Your notification preferences have been saved.",
    });
    console.log(data);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Account Settings</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
            {/* Sidebar navigation */}
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <Tabs defaultValue="profile" orientation="vertical" className="w-full">
                    <TabsList className="flex flex-col h-auto items-start justify-start gap-1 bg-transparent">
                      <TabsTrigger 
                        value="profile" 
                        className="w-full justify-start text-left px-2 py-1.5"
                      >
                        <User className="h-4 w-4 mr-2" />
                        Profile
                      </TabsTrigger>
                      <TabsTrigger 
                        value="account" 
                        className="w-full justify-start text-left px-2 py-1.5"
                      >
                        <UserCog className="h-4 w-4 mr-2" />
                        Account
                      </TabsTrigger>
                      <TabsTrigger 
                        value="notifications" 
                        className="w-full justify-start text-left px-2 py-1.5"
                      >
                        <Bell className="h-4 w-4 mr-2" />
                        Notifications
                      </TabsTrigger>
                      <TabsTrigger 
                        value="security" 
                        className="w-full justify-start text-left px-2 py-1.5"
                      >
                        <Lock className="h-4 w-4 mr-2" />
                        Security
                      </TabsTrigger>
                      <TabsTrigger 
                        value="billing" 
                        className="w-full justify-start text-left px-2 py-1.5"
                      >
                        <CreditCard className="h-4 w-4 mr-2" />
                        Billing
                      </TabsTrigger>
                      <TabsTrigger 
                        value="api" 
                        className="w-full justify-start text-left px-2 py-1.5"
                      >
                        <Key className="h-4 w-4 mr-2" />
                        API
                      </TabsTrigger>
                      <TabsTrigger 
                        value="downloads" 
                        className="w-full justify-start text-left px-2 py-1.5"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Downloads
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </CardContent>
              </Card>
              
              <Card className="bg-yellow-50 border-yellow-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Upgrade to Pro</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground mb-2">Get unlimited downloads and premium icons</p>
                  <Button size="sm" className="w-full">Upgrade</Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Main content */}
            <div>
              <Tabs defaultValue="profile">
                <TabsContent value="profile" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Profile Information</CardTitle>
                      <CardDescription>
                        Update your profile information and how it appears to others.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Form {...profileForm}>
                        <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={profileForm.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Your name" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={profileForm.control}
                              name="username"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Username</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Username" {...field} />
                                  </FormControl>
                                  <FormDescription>
                                    This is your public display name.
                                  </FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <FormField
                            control={profileForm.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input placeholder="email@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={profileForm.control}
                            name="bio"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Bio</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Tell us a little bit about yourself" 
                                    className="resize-none" 
                                    {...field} 
                                  />
                                </FormControl>
                                <FormDescription>
                                  Brief description for your profile.
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <Button type="submit">Save Changes</Button>
                        </form>
                      </Form>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="notifications" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Notification Preferences</CardTitle>
                      <CardDescription>
                        Configure which notifications you want to receive.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Form {...notificationsForm}>
                        <form onSubmit={notificationsForm.handleSubmit(onNotificationsSubmit)} className="space-y-6">
                          <div className="space-y-4">
                            <FormField
                              control={notificationsForm.control}
                              name="marketingEmails"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                  <div className="space-y-0.5">
                                    <FormLabel className="text-base">Marketing emails</FormLabel>
                                    <FormDescription>
                                      Receive emails about new products, features, and more.
                                    </FormDescription>
                                  </div>
                                  <FormControl>
                                    <Switch
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={notificationsForm.control}
                              name="socialNotifications"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                  <div className="space-y-0.5">
                                    <FormLabel className="text-base">Social notifications</FormLabel>
                                    <FormDescription>
                                      Receive notifications when someone follows you or likes your icons.
                                    </FormDescription>
                                  </div>
                                  <FormControl>
                                    <Switch
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={notificationsForm.control}
                              name="securityEmails"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                  <div className="space-y-0.5">
                                    <FormLabel className="text-base">Security emails</FormLabel>
                                    <FormDescription>
                                      Receive emails about your account security.
                                    </FormDescription>
                                  </div>
                                  <FormControl>
                                    <Switch
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                      disabled
                                    />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={notificationsForm.control}
                              name="favoritesNotifications"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                  <div className="space-y-0.5">
                                    <FormLabel className="text-base">Favorites notifications</FormLabel>
                                    <FormDescription>
                                      Receive notifications when your favorite icons are updated.
                                    </FormDescription>
                                  </div>
                                  <FormControl>
                                    <Switch
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <Button type="submit">Save Preferences</Button>
                        </form>
                      </Form>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="account" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Settings</CardTitle>
                      <CardDescription>
                        Manage your account settings and preferences.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium">Account Type</h3>
                        <p className="text-sm text-muted-foreground mt-2">Pro Plan - Renewed on July 15, 2023</p>
                        <div className="mt-4 flex gap-4">
                          <Button variant="outline" size="sm">Change Plan</Button>
                          <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">Cancel Subscription</Button>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="text-lg font-medium">Language & Region</h3>
                        <p className="text-sm text-muted-foreground mt-2">Set your preferred language and region settings.</p>
                        <div className="mt-4 grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium">Language</label>
                            <select className="w-full mt-1 border rounded-md p-2">
                              <option>English (US)</option>
                              <option>Spanish</option>
                              <option>French</option>
                              <option>German</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-sm font-medium">Time Zone</label>
                            <select className="w-full mt-1 border rounded-md p-2">
                              <option>Eastern Time (US & Canada)</option>
                              <option>Central Time (US & Canada)</option>
                              <option>Pacific Time (US & Canada)</option>
                              <option>UTC</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="text-lg font-medium text-red-500">Danger Zone</h3>
                        <p className="text-sm text-muted-foreground mt-2">Permanently delete your account and all of your content.</p>
                        <div className="mt-4">
                          <Button variant="destructive" size="sm">Delete Account</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="security">
                  <Card>
                    <CardHeader>
                      <CardTitle>Security</CardTitle>
                      <CardDescription>
                        Manage your security settings and connected accounts.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Security settings content coming soon.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="billing">
                  <Card>
                    <CardHeader>
                      <CardTitle>Billing</CardTitle>
                      <CardDescription>
                        Manage your billing information and view your invoices.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Billing content coming soon.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="api">
                  <Card>
                    <CardHeader>
                      <CardTitle>API Access</CardTitle>
                      <CardDescription>
                        Manage your API keys and access tokens.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>API settings coming soon.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="downloads">
                  <Card>
                    <CardHeader>
                      <CardTitle>Download History</CardTitle>
                      <CardDescription>
                        View your recent downloads and download activity.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Download history coming soon.</p>
                    </CardContent>
                  </Card>
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

export default Settings;
