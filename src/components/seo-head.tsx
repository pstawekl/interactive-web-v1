import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  noindex?: boolean;
}

export function SEOHead({
  title,
  description,
  keywords,
  ogImage = 'https://interactive.net.pl/logo-horizontal.png',
  ogUrl,
  noindex = false,
}: SEOHeadProps) {
  const defaultTitle = 'Interactive – Profesjonalne Strony Internetowe Zduńska Wola | Tworzenie Stron WWW';
  const defaultDescription = 'Interactive – tworzymy profesjonalne strony internetowe w Zduńskiej Woli. Nowoczesne, szybkie i responsywne strony www dla firm. Skontaktuj się, aby otrzymać darmową wycenę.';
  const defaultKeywords = 'strona internetowa Zduńska Wola, strony internetowe Zduńska Wola, tworzenie stron internetowych Zduńska Wola, projektowanie stron www Zduńska Wola, strony www, strony internetowe';
  
  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const finalUrl = ogUrl || (typeof window !== 'undefined' ? window.location.href : 'https://interactive.net.pl/');
  
  useEffect(() => {
    // Update title
    document.title = finalTitle;
    
    // Helper function to update or create meta tag
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.content = content;
    };
    
    // Helper function to update or create link tag
    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!element) {
        element = document.createElement('link');
        element.rel = rel;
        document.head.appendChild(element);
      }
      element.href = href;
    };
    
    // Update meta tags
    updateMetaTag('description', finalDescription);
    updateMetaTag('keywords', finalKeywords);
    
    if (noindex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      updateMetaTag('robots', 'index, follow');
    }
    
    // Open Graph tags
    updateMetaTag('og:title', finalTitle, 'property');
    updateMetaTag('og:description', finalDescription, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:url', finalUrl, 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:locale', 'pl_PL', 'property');
    updateMetaTag('og:site_name', 'Interactive', 'property');
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', finalTitle, 'name');
    updateMetaTag('twitter:description', finalDescription, 'name');
    updateMetaTag('twitter:image', ogImage, 'name');
    
    // Canonical URL
    updateLinkTag('canonical', finalUrl);
  }, [finalTitle, finalDescription, finalKeywords, ogImage, finalUrl, noindex]);
  
  return null;
}

