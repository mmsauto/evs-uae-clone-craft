-- Create pages table for storing page content
CREATE TABLE public.pages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  meta_description TEXT,
  meta_keywords TEXT,
  h1_title TEXT,
  content JSONB NOT NULL DEFAULT '{}',
  is_published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create page_sections table for managing reusable sections
CREATE TABLE public.page_sections (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_id UUID REFERENCES public.pages(id) ON DELETE CASCADE,
  section_type TEXT NOT NULL, -- 'hero', 'services', 'branches', etc.
  title TEXT,
  content JSONB NOT NULL DEFAULT '{}',
  order_index INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create seo_settings table for global SEO settings
CREATE TABLE public.seo_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  site_name TEXT NOT NULL DEFAULT 'EVS UAE',
  default_meta_description TEXT,
  og_image_url TEXT,
  twitter_handle TEXT,
  schema_org JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.page_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.seo_settings ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Pages are publicly readable" 
ON public.pages 
FOR SELECT 
USING (is_published = true);

CREATE POLICY "Page sections are publicly readable" 
ON public.page_sections 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "SEO settings are publicly readable" 
ON public.seo_settings 
FOR SELECT 
USING (true);

-- Admin policies (for future admin implementation)
CREATE POLICY "Admins can manage pages" 
ON public.pages 
FOR ALL 
USING (auth.role() = 'service_role');

CREATE POLICY "Admins can manage page sections" 
ON public.page_sections 
FOR ALL 
USING (auth.role() = 'service_role');

CREATE POLICY "Admins can manage SEO settings" 
ON public.seo_settings 
FOR ALL 
USING (auth.role() = 'service_role');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_pages_updated_at
  BEFORE UPDATE ON public.pages
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_page_sections_updated_at
  BEFORE UPDATE ON public.page_sections
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_seo_settings_updated_at
  BEFORE UPDATE ON public.seo_settings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert initial data for homepage
INSERT INTO public.pages (slug, title, meta_description, meta_keywords, h1_title, content) VALUES 
('home', 'EVS UAE - Electric Vehicle Service Center', 'Professional EV service center in UAE. Performance, trust, and total care for your electric vehicle. Book your EV check today.', 'EV service, electric vehicle, UAE, car service, EV maintenance', 'EV SERVICE REDEFINED', '{
  "hero": {
    "title": "EV SERVICE REDEFINED.",
    "subtitle": "Performance, trust, and total care.",
    "buttonText": "BOOK YOUR EV CHECK"
  },
  "services": [
    {
      "title": "Warranty Plans",
      "description": "Drive confidently. We''ve got you covered.",
      "buttonText": "View Warranty Packages"
    },
    {
      "title": "Smart Diagnostics",
      "description": "Software, updates, control — all under one roof.",
      "buttonText": "View Service"
    },
    {
      "title": "Quick Maintenance",
      "description": "Get in. Get serviced. Get moving.",
      "buttonText": "View Service"
    }
  ]
}');

-- Insert initial SEO settings
INSERT INTO public.seo_settings (site_name, default_meta_description, og_image_url, schema_org) VALUES 
('EVS UAE', 'Professional EV service center in UAE offering performance, trust, and total care for electric vehicles.', '/hero-bg.jpg', '{
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "EVS UAE",
  "description": "Professional Electric Vehicle Service Center in UAE",
  "url": "https://evs-uae.com",
  "telephone": "+971-XXX-XXXX",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "AE",
    "addressRegion": "UAE"
  }
}');