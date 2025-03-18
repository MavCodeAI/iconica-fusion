
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { FilePlus, Upload, X } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';

const UploadIcons = () => {
  const { toast } = useToast();
  const [files, setFiles] = useState<File[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState('');
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      const fileArray = Array.from(selectedFiles);
      setFiles([...files, ...fileArray]);
    }
  };
  
  const removeFile = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };
  
  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentTag.trim()) {
      e.preventDefault();
      if (!tags.includes(currentTag.trim())) {
        setTags([...tags, currentTag.trim()]);
      }
      setCurrentTag('');
    }
  };
  
  const removeTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (files.length === 0) {
      toast({
        title: "No files selected",
        description: "Please select at least one icon file to upload.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Icons submitted",
      description: `${files.length} icons have been submitted for review.`,
    });
    
    // In a real app, here you would upload the files to a server
    console.log("Files:", files);
    console.log("Tags:", tags);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-2">Upload Icons</h1>
          <p className="text-gray-600 mb-8">Share your icon designs with the community.</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-8">
            <div>
              <Tabs defaultValue="upload">
                <TabsList className="mb-6">
                  <TabsTrigger value="upload">Upload Icons</TabsTrigger>
                  <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
                  <TabsTrigger value="status">Upload Status</TabsTrigger>
                </TabsList>
                
                <TabsContent value="upload">
                  <Card>
                    <CardHeader>
                      <CardTitle>Upload Your Icons</CardTitle>
                      <CardDescription>
                        Upload your icon designs in SVG, PNG, or AI format. Max 10 files per upload.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="upload-file">Icon Files</Label>
                            <div 
                              className="border-2 border-dashed border-gray-300 rounded-lg p-8 mt-2 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                              onClick={() => document.getElementById('file-upload')?.click()}
                            >
                              <Upload className="h-8 w-8 mx-auto text-gray-400 mb-4" />
                              <p className="text-sm text-gray-600 mb-1">
                                Drag and drop your files here, or click to browse
                              </p>
                              <p className="text-xs text-gray-500">
                                SVG, PNG, AI (max 10 files, 5MB each)
                              </p>
                              <Input 
                                id="file-upload" 
                                type="file" 
                                className="hidden" 
                                multiple 
                                accept=".svg,.png,.ai"
                                onChange={handleFileChange}
                              />
                            </div>
                          </div>
                          
                          {files.length > 0 && (
                            <div className="space-y-2">
                              <Label>Selected Files ({files.length})</Label>
                              <div className="max-h-40 overflow-y-auto space-y-2 border rounded-md p-2">
                                {files.map((file, index) => (
                                  <div 
                                    key={index} 
                                    className="flex items-center justify-between bg-gray-50 p-2 rounded-md"
                                  >
                                    <div className="flex items-center">
                                      <FilePlus className="h-4 w-4 mr-2 text-brand-500" />
                                      <span className="text-sm truncate max-w-[200px]">
                                        {file.name}
                                      </span>
                                      <span className="text-xs text-gray-500 ml-2">
                                        ({(file.size / 1024).toFixed(1)} KB)
                                      </span>
                                    </div>
                                    <Button 
                                      type="button" 
                                      variant="ghost" 
                                      size="icon" 
                                      className="h-6 w-6"
                                      onClick={() => removeFile(index)}
                                    >
                                      <X className="h-4 w-4" />
                                    </Button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="collection">Collection Name</Label>
                              <Input id="collection" placeholder="e.g. Business Icons" />
                            </div>
                            <div>
                              <Label htmlFor="license">License Type</Label>
                              <select 
                                id="license" 
                                className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md"
                              >
                                <option value="standard">Standard License</option>
                                <option value="extended">Extended License</option>
                                <option value="exclusive">Exclusive License</option>
                              </select>
                            </div>
                          </div>
                          
                          <div>
                            <Label htmlFor="description">Description</Label>
                            <Textarea 
                              id="description" 
                              placeholder="Describe your icons collection..." 
                              className="resize-none"
                              rows={4}
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="tags">Tags</Label>
                            <Input 
                              id="tags" 
                              placeholder="Add tags (press Enter after each tag)"
                              value={currentTag}
                              onChange={(e) => setCurrentTag(e.target.value)}
                              onKeyDown={handleTagKeyDown}
                            />
                            {tags.length > 0 && (
                              <div className="flex flex-wrap gap-2 mt-2">
                                {tags.map((tag, index) => (
                                  <Badge key={index} variant="secondary" className="px-2 py-1">
                                    {tag}
                                    <Button 
                                      type="button" 
                                      variant="ghost" 
                                      size="icon" 
                                      className="h-4 w-4 ml-1"
                                      onClick={() => removeTag(tag)}
                                    >
                                      <X className="h-3 w-3" />
                                    </Button>
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                          
                          <Separator />
                          
                          <div className="flex justify-between items-center">
                            <div className="flex flex-col">
                              <h3 className="text-sm font-medium">Make icons premium</h3>
                              <p className="text-xs text-gray-500">
                                Premium icons are exclusive to paid subscribers
                              </p>
                            </div>
                            <Switch id="premium" />
                          </div>
                        </div>
                        
                        <div className="flex justify-end gap-4">
                          <Button type="button" variant="outline">Cancel</Button>
                          <Button type="submit">Submit Icons</Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="guidelines">
                  <Card>
                    <CardHeader>
                      <CardTitle>Designer Guidelines</CardTitle>
                      <CardDescription>
                        Follow these guidelines to ensure your icons meet our quality standards.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">File Requirements</h3>
                        <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                          <li>SVG files are preferred for vector icons</li>
                          <li>PNG files should be at least 512x512 pixels</li>
                          <li>All icons should have transparent backgrounds</li>
                          <li>File size should not exceed 5MB per icon</li>
                        </ul>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Design Guidelines</h3>
                        <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                          <li>Use a consistent style across your icon set</li>
                          <li>Ensure icons are aligned to a grid for uniformity</li>
                          <li>Maintain appropriate padding around your designs</li>
                          <li>Test icons at different sizes to ensure scalability</li>
                          <li>Use clear, recognizable metaphors for concepts</li>
                        </ul>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Submission Process</h3>
                        <p className="text-sm text-gray-600">
                          All submitted icons undergo a review process to ensure quality and 
                          compliance with our guidelines. This typically takes 2-3 business days.
                          You'll be notified via email once your icons are approved or if any 
                          revisions are needed.
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Licensing Options</h3>
                        <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                          <li><strong>Standard License:</strong> Users can use icons in personal and commercial projects</li>
                          <li><strong>Extended License:</strong> Includes rights for merchandise and other extended uses</li>
                          <li><strong>Exclusive License:</strong> Icons are sold exclusively through our platform</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="status">
                  <Card>
                    <CardHeader>
                      <CardTitle>Upload Status</CardTitle>
                      <CardDescription>
                        Track the status of your recent icon submissions.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded-md border">
                        <div className="p-4 text-center text-muted-foreground">
                          You don't have any recent uploads.
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Designer Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <div className="rounded-full bg-brand-100 p-1">
                        <span className="text-brand-500 font-bold">1</span>
                      </div>
                      <p>Use consistent stroke weights across your icon set</p>
                    </li>
                    <li className="flex gap-2">
                      <div className="rounded-full bg-brand-100 p-1">
                        <span className="text-brand-500 font-bold">2</span>
                      </div>
                      <p>Add detailed tags to make your icons discoverable</p>
                    </li>
                    <li className="flex gap-2">
                      <div className="rounded-full bg-brand-100 p-1">
                        <span className="text-brand-500 font-bold">3</span>
                      </div>
                      <p>Group related icons into meaningful collections</p>
                    </li>
                    <li className="flex gap-2">
                      <div className="rounded-full bg-brand-100 p-1">
                        <span className="text-brand-500 font-bold">4</span>
                      </div>
                      <p>Test your icons at multiple sizes before uploading</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-brand-50 border-brand-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Earning Potential</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    As a contributor, you earn commission for every download of your 
                    premium icons.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Standard commission</span>
                      <span className="font-bold">50%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Premium commission</span>
                      <span className="font-bold">70%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Exclusive commission</span>
                      <span className="font-bold">85%</span>
                    </div>
                    <Separator className="my-2" />
                    <p className="text-xs text-gray-500">
                      Commissions are paid monthly for all qualifying downloads.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Button variant="outline" className="w-full">
                View Designer Resources
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UploadIcons;
