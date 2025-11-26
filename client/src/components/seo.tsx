import { useEffect } from "react";

interface SeoProps {
  title: string;
  description?: string;
}

export function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = `${title} | Le Guide Cadeaux`;
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      }
    }
  }, [title, description]);

  return null;
}
