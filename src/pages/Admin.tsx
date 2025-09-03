import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { usePageContent, useSeoSettings } from "@/hooks/usePageContent";
import { useQueryClient } from "@tanstack/react-query";
import type { PageContent } from "@/types/content";

const Admin = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { data: homeContent } = usePageContent("home");
  const { data: seoSettings } = useSeoSettings();
  
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdatePageContent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const title = formData.get("title") as string;
      const metaDescription = formData.get("metaDescription") as string;
      const metaKeywords = formData.get("metaKeywords") as string;
      const heroTitle = formData.get("heroTitle") as string;
      const heroSubtitle = formData.get("heroSubtitle") as string;
      const heroButton = formData.get("heroButton") as string;

      const content: PageContent = {
        hero: {
          title: heroTitle,
          subtitle: heroSubtitle,
          buttonText: heroButton
        },
        services: homeContent?.content?.services || []
      };

      const { error } = await supabase
        .from("pages")
        .update({
          title,
          meta_description: metaDescription,
          meta_keywords: metaKeywords,
          content: content as any
        })
        .eq("slug", "home");

      if (error) throw error;

      queryClient.invalidateQueries({ queryKey: ["page-content", "home"] });
      toast({
        title: "Success",
        description: "Page content updated successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update page content. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateSeoSettings = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const siteName = formData.get("siteName") as string;
      const defaultMetaDescription = formData.get("defaultMetaDescription") as string;
      const ogImageUrl = formData.get("ogImageUrl") as string;
      const twitterHandle = formData.get("twitterHandle") as string;

      const { error } = await supabase
        .from("seo_settings")
        .update({
          site_name: siteName,
          default_meta_description: defaultMetaDescription,
          og_image_url: ogImageUrl,
          twitter_handle: twitterHandle
        })
        .eq("id", seoSettings?.id);

      if (error) throw error;

      queryClient.invalidateQueries({ queryKey: ["seo-settings"] });
      toast({
        title: "Success",
        description: "SEO settings updated successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update SEO settings. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Admin Dashboard - Content Management"
        description="Admin dashboard for managing EVS UAE website content and SEO settings."
      />
      
      <Navigation />
      
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-foreground mb-8">Admin Dashboard</h1>
              
              <Tabs defaultValue="content" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="content">Page Content</TabsTrigger>
                  <TabsTrigger value="seo">SEO Settings</TabsTrigger>
                </TabsList>
                
                <TabsContent value="content">
                  <Card>
                    <CardHeader>
                      <CardTitle>Homepage Content</CardTitle>
                      <CardDescription>
                        Update the main content displayed on the homepage.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleUpdatePageContent} className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="title">Page Title</Label>
                          <Input
                            id="title"
                            name="title"
                            defaultValue={homeContent?.title || ""}
                            placeholder="Enter page title"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="metaDescription">Meta Description</Label>
                          <Textarea
                            id="metaDescription"
                            name="metaDescription"
                            defaultValue={homeContent?.meta_description || ""}
                            placeholder="Enter meta description for SEO"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="metaKeywords">Meta Keywords</Label>
                          <Input
                            id="metaKeywords"
                            name="metaKeywords"
                            defaultValue={homeContent?.meta_keywords || ""}
                            placeholder="Enter meta keywords separated by commas"
                          />
                        </div>
                        
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Hero Section</h3>
                          
                          <div className="space-y-2">
                            <Label htmlFor="heroTitle">Hero Title</Label>
                            <Input
                              id="heroTitle"
                              name="heroTitle"
                              defaultValue={homeContent?.content?.hero?.title || ""}
                              placeholder="Enter hero title"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="heroSubtitle">Hero Subtitle</Label>
                            <Input
                              id="heroSubtitle"
                              name="heroSubtitle"
                              defaultValue={homeContent?.content?.hero?.subtitle || ""}
                              placeholder="Enter hero subtitle"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="heroButton">Hero Button Text</Label>
                            <Input
                              id="heroButton"
                              name="heroButton"
                              defaultValue={homeContent?.content?.hero?.buttonText || ""}
                              placeholder="Enter hero button text"
                            />
                          </div>
                        </div>
                        
                        <Button type="submit" disabled={isLoading}>
                          {isLoading ? "Updating..." : "Update Content"}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="seo">
                  <Card>
                    <CardHeader>
                      <CardTitle>SEO Settings</CardTitle>
                      <CardDescription>
                        Manage global SEO settings for the website.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleUpdateSeoSettings} className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="siteName">Site Name</Label>
                          <Input
                            id="siteName"
                            name="siteName"
                            defaultValue={seoSettings?.site_name || ""}
                            placeholder="Enter site name"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="defaultMetaDescription">Default Meta Description</Label>
                          <Textarea
                            id="defaultMetaDescription"
                            name="defaultMetaDescription"
                            defaultValue={seoSettings?.default_meta_description || ""}
                            placeholder="Enter default meta description"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="ogImageUrl">Open Graph Image URL</Label>
                          <Input
                            id="ogImageUrl"
                            name="ogImageUrl"
                            defaultValue={seoSettings?.og_image_url || ""}
                            placeholder="Enter OG image URL"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="twitterHandle">Twitter Handle</Label>
                          <Input
                            id="twitterHandle"
                            name="twitterHandle"
                            defaultValue={seoSettings?.twitter_handle || ""}
                            placeholder="Enter Twitter handle (e.g., @evsuae)"
                          />
                        </div>
                        
                        <Button type="submit" disabled={isLoading}>
                          {isLoading ? "Updating..." : "Update SEO Settings"}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Admin;