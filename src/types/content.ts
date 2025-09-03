export interface HeroContent {
  title: string;
  subtitle: string;
  buttonText: string;
}

export interface ServiceContent {
  title: string;
  description: string;
  buttonText: string;
}

export interface PageContent {
  hero: HeroContent;
  services: ServiceContent[];
}

export interface PageData {
  id: string;
  slug: string;
  title: string;
  meta_description?: string;
  meta_keywords?: string;
  h1_title?: string;
  content: PageContent;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface SeoSettings {
  id: string;
  site_name: string;
  default_meta_description?: string;
  og_image_url?: string;
  twitter_handle?: string;
  schema_org?: any;
  created_at: string;
  updated_at: string;
}