import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { PageData, SeoSettings } from "@/types/content";

export const usePageContent = (slug: string) => {
  return useQuery({
    queryKey: ["page-content", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("pages")
        .select("*")
        .eq("slug", slug)
        .eq("is_published", true)
        .single();

      if (error) throw error;
      return {
        ...data,
        content: data.content as any
      } as PageData;
    },
  });
};

export const useSeoSettings = () => {
  return useQuery({
    queryKey: ["seo-settings"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("seo_settings")
        .select("*")
        .single();

      if (error) throw error;
      return data as SeoSettings;
    },
  });
};