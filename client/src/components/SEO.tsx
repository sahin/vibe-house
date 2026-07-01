import { Helmet } from "react-helmet-async";
import { useBranding } from "@/hooks/useBranding";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: string;
  twitterHandle?: string;
  keywords?: string;
}

const DEFAULT_OG_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/120748616/D66doBaWmncxm5rVMvJ4yM/vibe-house-og-image-v2_55312207.png";

export default function SEO({
  title,
  description,
  path,
  ogImage,
  ogType = "website",
  twitterHandle = "@sahin",
  keywords,
}: SEOProps) {
  const { isLovie, siteName, baseUrl, ogImage: brandingOgImage } = useBranding();
  const fullUrl = `${baseUrl}${path}`;
  const fullTitle = path === "/" ? title : `${title} — ${siteName}`;
  const resolvedOgImage = ogImage || brandingOgImage || DEFAULT_OG_IMAGE;

  const organizationJsonLd = isLovie
    ? {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Vibe House | Lovie HQ",
        alternateName: "Lovie",
        url: "https://www.lovie.co/about/location",
        logo: "https://d2xsxph8kpxj0f.cloudfront.net/120748616/D66doBaWmncxm5rVMvJ4yM/lovie-favicon-192_4c6f1eeb.png",
        description:
          "A new kind of home base for the Lovie team to vibe code together.",
        sameAs: [
          "https://x.com/@sahin",
          "https://www.linkedin.com/in/sahinboydas",
          "https://www.lovie.co",
        ],
        founder: {
          "@type": "Person",
          name: "Sahin Boydas",
          url: "https://www.linkedin.com/in/sahinboydas",
          sameAs: [
            "https://x.com/@sahin",
            "https://www.linkedin.com/in/sahinboydas",
          ],
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "San Francisco",
          addressRegion: "CA",
          addressCountry: "US",
        },
      }
    : {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Vibe House SF",
        alternateName: "SF Vibe House",
        url: "https://www.sfvibehouse.com",
        logo: "https://d2xsxph8kpxj0f.cloudfront.net/120748616/D66doBaWmncxm5rVMvJ4yM/superfounders-favicon-192_324dd3cb.png",
        description:
          "A new type of hacker house for exited founders to vibe code together in San Francisco.",
        sameAs: [
          "https://x.com/@sahin",
          "https://www.linkedin.com/in/sahinboydas",
          "https://www.superfoundersbook.com",
        ],
        founder: {
          "@type": "Person",
          name: "Sahin Boydas",
          url: "https://www.linkedin.com/in/sahinboydas",
          sameAs: [
            "https://x.com/@sahin",
            "https://www.linkedin.com/in/sahinboydas",
          ],
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "San Francisco",
          addressRegion: "CA",
          addressCountry: "US",
        },
      };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={resolvedOgImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={resolvedOgImage} />
      <meta name="twitter:creator" content={twitterHandle} />

      {/* Additional */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={siteName} />

      {/* JSON-LD Organization Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationJsonLd)}
      </script>
    </Helmet>
  );
}
