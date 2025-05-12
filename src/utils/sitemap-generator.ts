
/**
 * Sitemap Generator Utility
 * 
 * This utility can be used to generate a sitemap.xml file for the website.
 * In a production environment, this would be run as part of the build process
 * or as a scheduled task to update the sitemap periodically.
 */

interface SitemapUrl {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

/**
 * Generates XML content for a sitemap
 * @param baseUrl The base URL of the website
 * @param paths Array of paths to include in the sitemap
 */
export const generateSitemapXml = (baseUrl: string, urls: SitemapUrl[]): string => {
  // Ensure baseUrl ends with a slash
  const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  
  // XML header
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add each URL
  urls.forEach(({ url, lastmod, changefreq, priority }) => {
    const fullUrl = url.startsWith('http') ? url : `${normalizedBaseUrl}${url.startsWith('/') ? url.substring(1) : url}`;
    
    xml += '  <url>\n';
    xml += `    <loc>${fullUrl}</loc>\n`;
    
    if (lastmod) {
      xml += `    <lastmod>${lastmod}</lastmod>\n`;
    }
    
    if (changefreq) {
      xml += `    <changefreq>${changefreq}</changefreq>\n`;
    }
    
    if (priority !== undefined) {
      xml += `    <priority>${priority}</priority>\n`;
    }
    
    xml += '  </url>\n';
  });
  
  // Close XML
  xml += '</urlset>';
  
  return xml;
};

/**
 * Example usage:
 * 
 * This function would be used in a build script or server-side rendering context
 * to generate and save the sitemap.xml file.
 */
export const createSitemap = (baseUrl: string): string => {
  const today = new Date().toISOString().split('T')[0];
  
  const urls: SitemapUrl[] = [
    { 
      url: '/', 
      lastmod: today, 
      changefreq: 'weekly', 
      priority: 1.0 
    },
    { 
      url: '/#features', 
      lastmod: today, 
      changefreq: 'monthly', 
      priority: 0.8 
    },
    { 
      url: '/#plans', 
      lastmod: today, 
      changefreq: 'weekly', 
      priority: 0.9 
    },
    { 
      url: '/#about', 
      lastmod: today, 
      changefreq: 'monthly', 
      priority: 0.7 
    },
    { 
      url: '/#contact', 
      lastmod: today, 
      changefreq: 'monthly', 
      priority: 0.7 
    }
    // Dashboard and checkout pages are excluded as they require authentication
    // or contain sensitive information
  ];
  
  return generateSitemapXml(baseUrl, urls);
};

// This is a placeholder for the actual implementation
// In a real project, this would be used in a build script or server endpoint
export const saveSitemap = (sitemapXml: string): void => {
  console.log('Sitemap generated. In a real project, this would be saved to a file.');
  console.log(sitemapXml);
  // In a real implementation, this would write the XML to a file
  // or serve it through an API endpoint
};
