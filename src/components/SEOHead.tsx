import { Helmet } from "react-helmet-async";
import { useSeoSettings } from "@/hooks/usePageContent";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  image?: string;
  structuredData?: any;
}

export const SEOHead = ({
  title,
  description,
  keywords,
  canonicalUrl,
  image,
  structuredData
}: SEOHeadProps) => {
  const { data: seoSettings } = useSeoSettings();

  const siteTitle = seoSettings?.site_name || "EVS UAE";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const metaDescription = description || seoSettings?.default_meta_description || "";
  const ogImage = image || seoSettings?.og_image_url || "/hero-bg.jpg";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      {seoSettings?.twitter_handle && (
        <meta name="twitter:site" content={seoSettings.twitter_handle} />
      )}
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Default structured data from settings */}
      {seoSettings?.schema_org && (
        <script type="application/ld+json">
          {JSON.stringify(seoSettings.schema_org)}
        </script>
      )}
    </Helmet>
  );
};