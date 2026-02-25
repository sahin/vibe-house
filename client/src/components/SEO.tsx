import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: string;
  twitterHandle?: string;
  keywords?: string;
}

const BASE_URL = "https://www.lovie.co/about/location";

export default function SEO({
  title,
  description,
  path,
  ogImage = "https://private-us-east-1.manuscdn.com/sessionFile/EYUEGdEJ1P4CEaW2SLZOhC/sandbox/lgQvb1oSQa2zmHxYUjbe3V-img-5_1770340079000_na1fn_dmliZS1ob3VzZS1leHRlcmlvcg.png?x-oss-process=image/resize,w_1200,h_630/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRVlVRUdkRUoxUDRDRWFXMlNMWk9oQy9zYW5kYm94L2xnUXZiMW9TUWEyem1IeFlVamJlM1YtaW1nLTVfMTc3MDM0MDA3OTAwMF9uYTFmbl9kbWxpWlMxb2IzVnpaUzFsZUhSbGNtbHZjZy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=N9aUG0~YgaU6ZOYuM8J63sTmTl3m51P5pzuKxDGt~q~5WeA7ynrYHUzXL2HK40jgG6wYdlu7AodQO2S3uB5sIu8YkzFJPTR2ZeB7c2XLtAf6YTI-LD6NC191txILp2oUVPlZhVC4I0RJTvlKm6MEe~LXWY2B-hx7pOlW6udVY16HhevR1EqGORB5RromOtc0N21CjrRc40M9LlnC~LE~rxSW0UCnoDRCJEH32n1QYoEkCTe0JXZTxXBGM3gyRaW5p95vs0kHGklHoId-yrkdAkU5ByuNJIQPCklyFzUVuDxmOHl7-V7RdVOnxfza-uWLSyiX2fIOWr~v7xKk9nXeFg__",
  ogType = "website",
  twitterHandle = "@saaborz",
  keywords,
}: SEOProps) {
  const fullUrl = `${BASE_URL}${path}`;
  const fullTitle = path === "/" ? title : `${title} — Vibe House SF`;

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
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Vibe House SF" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content={twitterHandle} />

      {/* Additional */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Vibe House SF" />
    </Helmet>
  );
}
