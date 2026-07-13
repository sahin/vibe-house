/*
  CURATED PRODUCTS — The Biological Founder's Pharmacy
  Every product in the house was chosen for a reason.
  This page tells the story of why.
  Same dictionary-definition typography as the rest of the site.
*/

import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X, ChevronDown, Droplets, Wind, Leaf, Coffee, Pill, Sparkles, Gem, Moon, Droplet, ChefHat, Search } from "lucide-react";
import { Link } from "wouter";
import { useState, useMemo, useEffect } from "react";
import { useBranding } from "@/hooks/useBranding";

// Typography — matching site-wide system
const T = {
  xl: "font-display font-normal leading-[1.02] text-[clamp(3rem,8vw,7rem)]",
  l: "font-display font-normal leading-[1.1] text-[clamp(2rem,5vw,3.5rem)]",
  m: "leading-relaxed text-[clamp(1.15rem,2.5vw,1.5rem)]",
  s: "leading-relaxed text-[clamp(1rem,2vw,1.25rem)]",
  nav: "text-xs tracking-[0.08em] uppercase",
  label: "text-xs tracking-[0.12em] uppercase text-foreground/40",
};

// Icon map
const ICONS: Record<string, React.ElementType> = {
  Droplets, Wind, Leaf, Coffee, Pill, Sparkles, Gem, Moon, Droplet, ChefHat,
  Honey: Droplets,
};

// Fade-in animation wrapper
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}

// Divider line
function Divider({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="w-full h-px bg-foreground/10 my-8 md:my-10"
      initial={{ scaleX: 0, originX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
    />
  );
}

// Product data
interface Product {
  name: string;
  brand: string;
  health: string;
  url?: string;
}

// Amazon product links (legacy - kept for backward compatibility)
const AMAZON_LINKS: Record<string, string> = {
  "Frankincense Essential Oil": "https://www.amazon.com/dp/B07PRDSY6J?tag=lovie084-20",
  "Rosemary Essential Oil": "https://www.amazon.com/Majestic-Pure-Rosemary-Essential-Oil/dp/B07G8M3DTX?tag=lovie084-20",
  "Peppermint Essential Oil": "https://www.amazon.com/Majestic-Pure-Peppermint-Essential-Therapeutic/dp/B00PV15BPW?tag=lovie084-20",
  "Lemongrass Essential Oil": "https://www.amazon.com/Majestic-Pure-Lemongrass-Essential-Therapeutic/dp/B01BKB3C98?tag=lovie084-20",
  "Lemon Essential Oil": "https://www.amazon.com/Majestic-Pure-Lemon-Essential-Oil/dp/B01LXALVDG?tag=lovie084-20",
  "Cedarwood Essential Oil": "https://www.amazon.com/Majestic-Pure-Cedarwood-Essential-Therapeutic/dp/B01BKB3B1W?tag=lovie084-20",
  "Geranium Essential Oil": "https://www.amazon.com/Majestic-Pure-Geranium-Essential-Therapeutic/dp/B01BKVFNPO?tag=lovie084-20",
  "Basil Essential Oil": "https://www.amazon.com/Majestic-Pure-Basil-Essential-Oil/dp/B07GZLNFHM?tag=lovie084-20",
  "Meditation Essential Oil Set": "https://www.amazon.com/Majestic-Pure-Essential-Aromatherapy-Therapeutic/dp/B0C7LBFPKR?tag=lovie084-20",
  "Waterless Nebulizing Diffuser": "https://www.amazon.com/Airversa-Waterless-Essential-Nebulizing-Aromatherapy/dp/B0CNXPQHGM?tag=lovie084-20",
  "Professional Nebulizing Diffuser": "https://www.amazon.com/Minidiva-Nebulizing-Essential-Aromatherapy-Adjustable/dp/B0BVFXJZ4R?tag=lovie084-20",
  "Butterfly Pea Flower Tea": "https://www.amazon.com/Butterfly-Flower-Dried-Clitoria-Ternatea/dp/B08GFBG3QT?tag=lovie084-20",
  "Dandelion Root Tea": "https://www.amazon.com/Wellness-Naturals-Dandelion-Root-Tea/dp/B07PXKQBHZ?tag=lovie084-20",
  "Soursop Leaves Tea (Guanábana)": "https://www.amazon.com/B-Experts-Soursop-Leaves-Graviola-Guanabana/dp/B0BXWF8KWY?tag=lovie084-20",
  "Çaykur Rize Turkish Black Tea": "https://www.amazon.com/Caykur-Rize-Turkish-Black-500g/dp/B00HQIO5RM?tag=lovie084-20",
  "Organic Whole Coriander Seeds": "https://www.amazon.com/Spicy-Organic-Coriander-Seeds-Whole/dp/B0B5GFHQVF?tag=lovie084-20",
  "Organic Ceylon Cinnamon Sticks": "https://www.amazon.com/52USA-Organic-Ceylon-Cinnamon-Sticks/dp/B07PPWXFP3?tag=lovie084-20",
  "Whole Cloves": "https://www.amazon.com/Anthonys-Organic-Whole-Cloves-Gluten-Free/dp/B07GVJXBZQ?tag=lovie084-20",
  "Star Anise": "https://www.amazon.com/52USA-Star-Anise-Seeds-Whole/dp/B07PQVBMJY?tag=lovie084-20",
  "Tea Strainers for Loose Tea": "https://www.amazon.com/Reinmoson-Strainers-Stainless-Strainer-Steeping/dp/B0D4ZCXLZS?tag=lovie084-20",
  "Mushroom Coffee K-Cups": "https://www.amazon.com/Kalba-Mushroom-Coffee-K-Cups-Chaga/dp/B0D2BNXQJT?tag=lovie084-20",
  "Arzum Okka Turkish Coffee Maker": "https://www.amazon.com/Arzum-Automatic-Turkish-Coffee-Machine/dp/B01DUAWPSI?tag=lovie084-20",
  "Arzum Tea Tock Turkish Tea Maker": "https://www.amazon.com/Arzum-AR3055-Stainless-Electric-Kettle/dp/B0D7QLQFWG?tag=lovie084-20",
  "Kurukahveci Mehmet Efendi Turkish Coffee": "https://www.amazon.com/Kurukahveci-Mehmet-Efendi-Turkish-Coffee/dp/B000JVBR4C?tag=lovie084-20",
  "Death Wish Coffee Variety Pack": "https://www.amazon.com/Death-Wish-Coffee-Variety-Pack/dp/B0DQXHQJCB?tag=lovie084-20",
  "INTASTING Glass Electric Tea Kettle": "https://www.amazon.com/INTASTING-Electric-Kettle-Temperature-Stainless/dp/B0C7FVVJQJ?tag=lovie084-20",
  "Cosori Electric Kettle": "https://www.amazon.com/COSORI-Electric-Stainless-Auto-Off-Protection/dp/B07Y1GVMFP?tag=lovie084-20",
  "GEM Daily Bite": "https://www.amazon.com/GEM-Vitamins-Superfoods-B-Complex-Prebiotics/dp/B0B2ZM3FB2?tag=lovie084-20",
  "GEM Energy Bite": "https://www.amazon.com/GEM-Caffeinated-Sustained-Metabolism-L-Theanine/dp/B0DMQM673G?tag=lovie084-20",
  "GEM Calm Bite": "https://www.amazon.com/GEM-Chill-Out-Magnesium-Non-Habit-Chlorella/dp/B0CLVTSXKG?tag=lovie084-20",
  "Organic Haritaki Capsules": "https://www.amazon.com/Organic-Haritaki-Capsules-Detoxification-Rejuvenation/dp/B01EZW47EI?tag=lovie084-20",
  "Organic Haritaki Powder": "https://www.amazon.com/Organic-Haritaki-Powder-Ounce-Certified/dp/B07N8KV85Y?tag=lovie084-20",
  "Propolis Nasal Rinse Spray": "https://www.amazon.com/Beekeepers-Naturals-Eucalyptus-Congestion-Moisturizes/dp/B0BQ5JJWW4?tag=lovie084-20",
  "Nate's Organic Raw Unfiltered Honey": "https://www.amazon.com/Nature-Nates-Unfiltered-Certified-Wholesome/dp/B00CMQD3VS?tag=lovie084-20",
  "Nova Maple Cream": "https://www.amazon.com/Nova-Maple-Cream-Grade-Butter/dp/B01EM5XUO6?tag=lovie084-20",
  "Solely Organic Dried Mango": "https://www.amazon.com/SOLELY-Organic-Strips-Ingredient-Non-GMO/dp/B0897C8Z4T?tag=lovie084-20",
  "Maldon Sea Salt Flakes": "https://www.amazon.com/Maldon-Natural-Hand-Harvested-Generations-Packaging/dp/B00017028M?tag=lovie084-20",
  "Healing Crystal Wand Set (7 stones)": "https://www.amazon.com/dp/B07T1LNJ3X?tag=lovie084-20",
  "Orgonite Crystal Wand Set": "https://www.amazon.com/Healing-Crystal-Wand-Set-Tourmaline/dp/B07VP1QNLT?tag=lovie084-20",
  "Green Aventurine Tumbled Stones": "https://www.amazon.com/MAIBAOTA-Aventurine-Meditation-Gemstones-Decorative/dp/B09TSTR17C?tag=lovie084-20",
  "Citrine Crystals": "https://www.amazon.com/MAIBAOTA-Citrine-Pendulum-Divination-Spiritual/dp/B0D5TLGS13?tag=lovie084-20",
  "Tiger Eye Stones": "https://www.amazon.com/MAIBAOTA-Crystals-Meditation-Gemstones-Decorative/dp/B09TVX6GH8?tag=lovie084-20",
  "Sacred Geometry Crystal Grid Boards": "https://www.amazon.com/FINGERINSPIRE-Inspirational-Spiritual-Meditation-Decoration/dp/B0F5BSX91Y?tag=lovie084-20",
  "Pure Castile Liquid Soap (Peppermint)": "https://www.amazon.com/Brittanies-Thyme-Castile-Peppermint-Luxurious/dp/B0CKGJPS3F?tag=lovie084-20",
  "Organic Castile Liquid Soap (Unscented)": "https://www.amazon.com/Brittanies-Thyme-Organic-Natural-Unscented/dp/B08QLCRDM9?tag=lovie084-20",
  "Goat Milk Soap with Honey": "https://www.amazon.com/Handmade-Goat-Milk-Honey-Soap/dp/B00SV62QWA?tag=lovie084-20",
  "Ruby Grapefruit Hand Soap": "https://www.amazon.com/Everyone-Grapefruit-Plant-Based-Cleanser-Essential/dp/B082BWTR4X?tag=lovie084-20",
  "Dried Rose Petals and Buds": "https://www.amazon.com/Dried-Rose-Petals-Buds-oz/dp/B0FNPC1D67?tag=lovie084-20",
  "LOFE Organic Pillow": "https://www.amazon.com/Lofe-Standard-Pillowcase-Adjustable-Hypoallergenic/dp/B07KFVQPTW?tag=lovie084-20",
  "Bamboo Viscose Cooling Sheets": "https://www.amazon.com/SLEEP-SANCTUARY-Organic-Viscose-Derived/dp/B0DDV1G96X?tag=lovie084-20",
  "Pure Bamboo Duvet Cover": "https://www.amazon.com/s?k=Pure+Bamboo+Duvet+Cover&tag=lovie084-20",
  "Serta Goose Feather Down Comforter": "https://www.amazon.com/Serta-Thread-Feather-Seasons-Comforter/dp/B082YL5ZT1?tag=lovie084-20",
  "Green Tea Memory Foam Mattress": "https://www.amazon.com/Mattress-Patented-Contour-CertiPUR-US-Certified/dp/B00Q7EPSHI?tag=lovie084-20",
  "Mountain Valley Spring Water (Glass)": "https://www.amazon.com/Mountain-Valley-Spring-Bottle-ounces/dp/B07ZPGDC77?tag=lovie084-20",
  "Cobbe Filtered Shower Head": "https://www.amazon.com/Cobbe-Handheld-Pressure-Showerhead-Substance/dp/B0BJDQDZCT?tag=lovie084-20",
  "LUXE Bidet NEO 185": "https://www.amazon.com/LUXE-Bidet-Non-Electric-Attachment-Self-cleaning/dp/B00P2XZIP2?tag=lovie084-20",
  "KIWIBIRD Water Flosser": "https://www.amazon.com/KIWIBIRD-Cordless-Portable-Irrigator-Waterproof/dp/B0DRBBT5F5?tag=lovie084-20",
  "Hooga Grounding Mat": "https://www.amazon.com/Grounding-Hooga-Meditation-Protection-Inflammation/dp/B07VSRK68V?tag=lovie084-20",
  "Puracy Multi-Surface Cleaner": "https://www.amazon.com/Puracy-Natural-Purpose-Concentrate-Streak-Free/dp/B00T56KW8K?tag=lovie084-20",
  "Seventh Generation Disinfecting Cleaner": "https://www.amazon.com/Seventh-Generation-Lemongrass-Disinfecting-Multi-Surface/dp/B0933MCB1J?tag=lovie084-20",
  "ECOLipak Bamboo Toilet Paper": "https://www.amazon.com/ECOLipak-Bamboo-Absorbent-Friendly-Dye-Free/dp/B0DTJY4MWM?tag=lovie084-20",
  "Betterway Bamboo Paper Towels": "https://www.amazon.com/Betterway-Bamboo-Paper-Towels-Compostable/dp/B08L5JSX8R?tag=lovie084-20",
  "CAROTE Nonstick Cookware Set": "https://www.amazon.com/CAROTE-Nonstick-Cookware-Induction-Saucepans/dp/B0C8HPJW4J?tag=lovie084-20",
  "Glass Water Pitcher": "https://www.amazon.com/Delove-Shatterproof-Stainless-Borosilicate-Beverage/dp/B087M4BCMT?tag=lovie084-20",
  "Wooden Plates": "https://www.amazon.com/4-11inch-Unbreakable-Lightweight-Housewarming-Christmas/dp/B08NFDV9S8?tag=lovie084-20",
};

interface Category {
  id: string;
  title: string;
  icon: string;
  philosophy: string;
  image?: string;
  products: Product[];
}

const CATEGORIES: Category[] = [
  {
    id: "essential-oils",
    title: "Essential Oils & Aromatherapy",
    icon: "Droplets",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/120748616/D66doBaWmncxm5rVMvJ4yM/cat-essential-oils-fnZ2S2S66eS6d5PSM4BWHn.webp",
    philosophy: "Scent is the most primal sense — it bypasses cognition and rewires the nervous system directly. We stock therapeutic-grade essential oils not as luxury, but as infrastructure for focus, calm, and creative flow.",
    products: [
      { name: "Frankincense Essential Oil", brand: "Majestic Pure", health: "Used for millennia in meditation traditions. Contains boswellic acids that reduce inflammation and support immune function.", url: "https://www.amazon.com/dp/B07PRDSY6J?tag=lovie084-20" },
      { name: "Rosemary Essential Oil", brand: "Majestic Pure", health: "Clinically shown to improve memory and cognitive performance. Contains 1,8-cineole which increases acetylcholine.", url: "https://www.amazon.com/dp/B07G8M3DTX?tag=lovie084-20" },
      { name: "Peppermint Essential Oil", brand: "Majestic Pure", health: "Activates cold-sensitive receptors that increase alertness and improve sustained attention and memory.", url: "https://www.amazon.com/dp/B00PV15BPW?tag=lovie084-20" },
      { name: "Lemongrass Essential Oil", brand: "Majestic Pure", health: "Natural anxiolytic with antimicrobial properties. Contains citral for cortisol reduction and stress relief.", url: "https://www.amazon.com/dp/B01BKB3C98?tag=lovie084-20" },
      { name: "Lemon Essential Oil", brand: "Majestic Pure", health: "Limonene-rich oil shown to elevate mood and reduce anxiety. Normalizes stress hormone levels.", url: "https://www.amazon.com/dp/B00QR6SS6O?tag=lovie084-20" },
      { name: "Cedarwood Essential Oil", brand: "Majestic Pure", health: "Contains cedrol which increases parasympathetic nervous system activity for deep, restorative sleep.", url: "https://www.amazon.com/dp/B079ZN8SC9?tag=lovie084-20" },
      { name: "Geranium Essential Oil", brand: "Majestic Pure", health: "Balances hormonal fluctuations and reduces anxiety. Lowers blood pressure during stressful situations.", url: "https://www.amazon.com/dp/B07GPXSBDW?tag=lovie084-20" },
      { name: "Basil Essential Oil", brand: "Majestic Pure", health: "Adaptogenic oil containing linalool and eugenol. Reduces mental fatigue and improves cognitive clarity.", url: "https://www.amazon.com/dp/B075KWWVR6?tag=lovie084-20" },
      { name: "Sandalwood Essential Oil", brand: "Majestic Pure", health: "Grounding aroma used in meditation for centuries. Promotes calm focus and spiritual awareness.", url: "https://www.amazon.com/dp/B07G8Q4WG2?tag=lovie084-20" },
      { name: "Meditation Essential Oil Set", brand: "Majestic Pure", health: "Curated blend of Rosemary, Sandalwood, Clary Sage, and Patchouli for meditative states.", url: "https://www.amazon.com/dp/B0F1TLQ281?tag=lovie084-20" },
    ],
  },
  {
    id: "diffusers",
    title: "Essential Oil Diffusers",
    icon: "Wind",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/120748616/D66doBaWmncxm5rVMvJ4yM/cat-diffusers-XS95a7CQ5RqZgF7QMkZWhX.webp",
    philosophy: "The delivery system matters as much as the oil. Waterless nebulizing diffusers use pressurized air to shatter oils into micro-fine particles, preserving the full molecular complexity. No water dilution, no heat degradation.",
    products: [
      { name: "Waterless Nebulizing Diffuser", brand: "Airversa", health: "Atomizes pure essential oil into particles under 3 microns. No water means no mold risk, no bacterial growth.", url: "https://www.amazon.com/dp/B0CNXPQHGM?tag=lovie084-20" },
      { name: "Professional Nebulizing Diffuser", brand: "Minidiva", health: "Clinical-grade nebulization preserving the complete volatile compound profile. Adjustable output intensity.", url: "https://www.amazon.com/dp/B0BVFXJZ4R?tag=lovie084-20" },
    ],
  },
  {
    id: "teas",
    title: "Teas, Coffee & Herbal Infusions",
    icon: "Leaf",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/120748616/D66doBaWmncxm5rVMvJ4yM/cat-teas-coffee-kpy5UqgbHf5DNpgqB2yQCu.webp",
    philosophy: "Tea is not a beverage — it is a ritual of presence. Every cup is a micro-meditation. The compounds in these teas — L-theanine, polyphenols, adaptogens — sharpen the mind while protecting the body.",
    products: [
      { name: "Butterfly Pea Flower Tea", brand: "Blue Tea", health: "Rich in anthocyanins. Changes color with pH. Traditionally used in Ayurveda to enhance memory and neural function.", url: "https://www.amazon.com/dp/B09ZYFZKTZ?tag=lovie084-20" },
      { name: "Butterfly Pea Flower Tea (Loose Leaf)", brand: "Real Naturals", health: "Antioxidant-rich flower tea that supports brain health and cognitive function.", url: "https://www.amazon.com/dp/B0DHXMSX1M?tag=lovie084-20" },
      { name: "Dandelion Root Tea", brand: "U.S. Wellness Naturals", health: "Powerful liver detoxifier. Supports bile production and acts as a prebiotic for gut microbiome health.", url: "https://www.amazon.com/dp/B0C4VK7FNR?tag=lovie084-20" },
      { name: "Soursop Leaves Tea (Guan\u00e1bana)", brand: "B-Experts", health: "Contains acetogenins for potent antioxidant properties. Traditional Caribbean medicine for immune support.", url: "https://www.amazon.com/dp/B0CYFHH37C?tag=lovie084-20" },
      { name: "Caykur Rize Turkish Black Tea", brand: "Caykur", health: "Grown in the mineral-rich Black Sea region. High in L-theanine for calm alertness.", url: "https://www.amazon.com/dp/B00EEZ2U6E?tag=lovie084-20" },
      { name: "Do Ghazal Cardamom Tea", brand: "Do Ghazal", health: "Pure Ceylon cardamom loose leaf tea. Traditional Middle Eastern tea rich in antioxidants.", url: "https://www.amazon.com/dp/B00KVVSMIU?tag=lovie084-20" },
      { name: "Shamshiri Persian Tea", brand: "Shamshiri", health: "Traditional Persian tea rich in antioxidants and polyphenols.", url: "https://www.amazon.com/dp/B073RQ11D6?tag=lovie084-20" },
      { name: "Organic Ceylon Cinnamon Sticks", brand: "52USA", health: "True Ceylon cinnamon improves insulin sensitivity and blood sugar regulation. Low in coumarin.", url: "https://www.amazon.com/dp/B0F68QD99P?tag=lovie084-20" },
      { name: "Whole Cloves", brand: "Anthony's Organic", health: "Highest ORAC antioxidant score of any spice. Contains eugenol, a powerful anti-inflammatory.", url: "https://www.amazon.com/dp/B07893T3BH?tag=lovie084-20" },
      { name: "Star Anise", brand: "52USA", health: "Natural source of shikimic acid. Contains anethole with anti-fungal and anti-bacterial properties.", url: "https://www.amazon.com/dp/B0CJ5K1NK6?tag=lovie084-20" },
      { name: "KORACAO Instant Ceremonial Cacao", brand: "KORACAO", health: "High-flavanol ceremonial cacao powder. Rich in flavonoids and antioxidants for mind and body.", url: "https://www.amazon.com/dp/B0FMKY5PN7?tag=lovie084-20" },
      { name: "Organic Cocoa Powder", brand: "Anthony's", health: "Unsweetened organic cacao rich in flavonoids and antioxidants.", url: "https://www.amazon.com/dp/B00F7SU63G?tag=lovie084-20" },
      { name: "Kurukahveci Mehmet Efendi Turkish Coffee", brand: "Kurukahveci Mehmet Efendi", health: "Authentic Turkish coffee. Arabica beans, rich aroma, original taste since 1871.", url: "https://www.amazon.com/dp/B01MRZAMO9?tag=lovie084-20" },
      { name: "Dandy Blend Instant Herbal Beverage", brand: "Dandy Blend", health: "Caffeine-free dandelion-based coffee alternative with herbal benefits.", url: "https://www.amazon.com/dp/B000SMN0DO?tag=lovie084-20" },
      { name: "Pour Over Coffee Dripper (Stainless Steel)", brand: "LHS", health: "Stainless steel paperless coffee filter. Zero waste brewing, no microplastic leaching.", url: "https://www.amazon.com/dp/B07MX87HH9?tag=lovie084-20" },
      { name: "MUD/WTR Morning Ritual Starter Kit", brand: "MUD/WTR", health: "Mushroom-based coffee alternative with lion's mane, chaga, reishi. 1/7th the caffeine.", url: "https://www.amazon.com/dp/B0BXKZQJ8P?tag=lovie084-20" },
      { name: "RYZE Mushroom Coffee", brand: "RYZE", health: "6-mushroom blend coffee with adaptogens. Sustained energy without jitters or crash.", url: "https://www.amazon.com/dp/B09RQGZQHP?tag=lovie084-20" },
      { name: "Four Sigmatic Gut Health Coffee", brand: "Four Sigmatic", health: "Organic medium roast with turkey tail & chaga mushrooms plus probiotics for gut health and immune support.", url: "https://www.amazon.com/dp/B087YHP3HQ?tag=lovie084-20" },
      { name: "Four Sigmatic Focus Coffee", brand: "Four Sigmatic", health: "Organic ground coffee with lion's mane & chaga mushrooms for enhanced focus and cognitive performance.", url: "https://www.amazon.com/dp/B0756D1D39?tag=lovie084-20" },
      { name: "Four Sigmatic Calm Decaf Coffee", brand: "Four Sigmatic", health: "Swiss water decaf with reishi & chaga mushroom extracts for relaxation without caffeine.", url: "https://www.amazon.com/dp/B077YJ8L65?tag=lovie084-20" },
      { name: "Four Sigmatic Balance Adaptogen Coffee", brand: "Four Sigmatic", health: "Medium roast with ashwagandha, chaga, eleuthero & tulsi for balanced energy and stress resilience.", url: "https://www.amazon.com/dp/B081R15GB2?tag=lovie084-20" },
    ],
  },
  {
    id: "supplements",
    title: "Supplements & Superfoods",
    icon: "Pill",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/120748616/D66doBaWmncxm5rVMvJ4yM/cat-supplements-jCa79ctUvdF8srbWeNjWUo.webp",
    philosophy: "We do not do pills — we do whole-food nutrition in concentrated form. Every supplement in the house is chosen for bioavailability, clean ingredients, and evidence-based formulation.",
    products: [
      { name: "GEM Daily Bite", brand: "GEM", health: "20+ vitamins and minerals from real food sources. Contains zinc, vitamin D, B-complex, turmeric, and prebiotics.", url: "https://www.amazon.com/dp/B0B2ZM3FB2?tag=lovie084-20" },
      { name: "GEM Energy Bite", brand: "GEM", health: "40mg natural caffeine plus ginseng and L-theanine for sustained energy without jitters.", url: "https://www.amazon.com/dp/B0DMQM673G?tag=lovie084-20" },
      { name: "GEM Calm Bite", brand: "GEM", health: "Magnesium L-Threonate (crosses the blood-brain barrier), Golden Chlorella, and Lemon Balm for clarity.", url: "https://www.amazon.com/dp/B0B9NWFFYS?tag=lovie084-20" },
      { name: "GEM Sleep Aid Nighttime Bite", brand: "GEM", health: "Melatonin-free sleep aid with L-Theanine and magnesium for restorative rest.", url: "https://www.amazon.com/dp/B0FCXV7K5R?tag=lovie084-20" },
      { name: "Organic Haritaki Capsules", brand: "Kailash Herbals", health: "Known as the 'King of Medicines' in Ayurveda. Supports gut motility and cognitive function.", url: "https://www.amazon.com/dp/B075DNLV3P?tag=lovie084-20" },
      { name: "Organic Haritaki Powder", brand: "Jiva Organics", health: "USDA certified organic. One of three fruits in Triphala, the cornerstone of Ayurvedic detoxification.", url: "https://www.amazon.com/dp/B07N8KV85Y?tag=lovie084-20" },
      { name: "Collagen Peptide Powder", brand: "Anthony's", health: "Grass-fed collagen peptides for skin, joints, and gut health.", url: "https://www.amazon.com/dp/B071S8D69C?tag=lovie084-20" },
      { name: "High Flavanol Cocoa Powder", brand: "Black Forest", health: "Concentrated flavanols and flavonoids for cardiovascular and cognitive support.", url: "https://www.amazon.com/dp/B0CTJ67LK1?tag=lovie084-20" },
      { name: "Trace Minerals Enhanced Complex", brand: "Dr. Berg", health: "70+ trace minerals for comprehensive micronutrient support.", url: "https://www.amazon.com/dp/B0858L173M?tag=lovie084-20" },
      { name: "Fasting Electrolyte Supplement", brand: "FAST LYTE", health: "Clean electrolyte formula for optimal hydration and mineral balance during fasting.", url: "https://www.amazon.com/dp/B0BDLT1HFM?tag=lovie084-20" },
      { name: "Organic Spirulina", brand: "Micro Ingredients", health: "Superfood algae rich in protein, vitamins, and antioxidants.", url: "https://www.amazon.com/dp/B01DPW5DC4?tag=lovie084-20" },
      { name: "Spermidine Supplement", brand: "Neurogan", health: "Longevity supplement that promotes cellular autophagy and anti-aging.", url: "https://www.amazon.com/dp/B0BTY4RJ4H?tag=lovie084-20" },
      { name: "High Dose Vitamin C Immune-Ade", brand: "Sufficient-C", health: "High-dose vitamin C with L-lysine and bromelain for immune support.", url: "https://www.amazon.com/dp/B00HAMTFYI?tag=lovie084-20" },
      { name: "NMN Pro", brand: "ProHealth Longevity", health: "NMN supplement for NAD+ production — key longevity molecule for cellular energy.", url: "https://www.amazon.com/dp/B0C1J1GKXP?tag=lovie084-20" },
      { name: "NAD+ with NMN, Resveratrol & Spermidine", brand: "Force Factor", health: "All-in-one longevity stack combining NAD+, resveratrol, spermidine, and astaxanthin.", url: "https://www.amazon.com/dp/B0DMTGWTM1?tag=lovie084-20" },
      { name: "Youngr NMN", brand: "Wonderfeel", health: "Clinically studied NMN with ergothioneine and olive fruit extract — premium longevity formula.", url: "https://www.amazon.com/dp/B0BN2FZWJW?tag=lovie084-20" },
      { name: "NAD Regen", brand: "BIOSTACK", health: "Advanced NAD regeneration supplement with spermidine synergy for cellular renewal.", url: "https://www.amazon.com/dp/B0DDCT3NP5?tag=lovie084-20" },
      { name: "Apigenin", brand: "Double Wood", health: "Apigenin for sleep — Andrew Huberman recommended. Promotes deep sleep without grogginess.", url: "https://www.amazon.com/dp/B0CXQJ8PPA?tag=lovie084-20" },
      { name: "Magnesium L-Threonate", brand: "Momentous", health: "Crosses blood-brain barrier — Huberman Lab recommended for sleep and cognition.", url: "https://www.amazon.com/dp/B0DXQJ8PPB?tag=lovie084-20" },
      { name: "Magnesium Bath Flakes", brand: "Ancient Minerals", health: "Transdermal magnesium absorption for muscle recovery and deep sleep.", url: "https://www.amazon.com/dp/B005F1ATJQ?tag=lovie084-20" },
    ],
  },
  {
    id: "functional-beverages",
    title: "Functional Beverages",
    icon: "Coffee",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/120748616/D66doBaWmncxm5rVMvJ4yM/cat-functional-beverages-e8LGLL3SyzS8kfJ5Dq3oeM.webp",
    philosophy: "Every drink in the house earns its place. Prebiotic sodas, adaptogen seltzers, real-fruit sparkling water — beverages that nourish the gut, sharpen the mind, or calm the nervous system.",
    products: [
      { name: "OLIPOP Prebiotic Soda", brand: "OLIPOP", health: "Prebiotic soda with gut health benefits — healthy soda alternative with only 2-5g sugar.", url: "https://www.amazon.com/dp/B0DWH3NDP5?tag=lovie084-20" },
      { name: "Poppi Sparkling Prebiotic Soda", brand: "Poppi", health: "Apple cider vinegar-based prebiotic soda for gut health and digestion.", url: "https://www.amazon.com/dp/B0CZY3XG8H?tag=lovie084-20" },
      { name: "TRIP Adaptogen Seltzer", brand: "TRIP", health: "Contains adaptogens (ashwagandha, lion's mane) for stress relief and focus.", url: "https://www.amazon.com/dp/B0DCZWTK5Q?tag=lovie084-20" },
      { name: "Juni Sparkling Adaptogen Drink", brand: "Juni", health: "Zero sugar sparkling adaptogen drink with mushroom complex for focus and calm.", url: "https://www.amazon.com/dp/B0D9KXHQZP?tag=lovie084-20" },
    ],
  },
  {
    id: "healthy-snacks",
    title: "Healthy Snacks",
    icon: "Leaf",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/120748616/D66doBaWmncxm5rVMvJ4yM/cat-healthy-snacks-JsQH4JfcMdvxQyDZnFpcQ4.webp",
    philosophy: "Snacking should build you up, not break you down. Seed-oil-free chips, freeze-dried fruit, whole olives — every snack here is a single-ingredient or clean-label choice that satisfies without inflammation.",
    products: [
      { name: "Solely Organic Dried Mango", brand: "SOLELY", health: "Single ingredient — organic mango. No added sugar, fiber slows glucose absorption.", url: "https://www.amazon.com/dp/B07NRPGD9N?tag=lovie084-20" },
      { name: "Freeze-Dried Fruit Variety (Strawberries & Tangerines)", brand: "Claros Farm", health: "Preserves nutrients without additives — clean snacking at its best.", url: "https://www.amazon.com/dp/B0GM1TN9LG?tag=lovie084-20" },
      { name: "Freeze-Dried Fig Slices", brand: "Drybox", health: "Nutrient-dense dried figs with no additives or preservatives.", url: "https://www.amazon.com/dp/B0FCGDS5LW?tag=lovie084-20" },
      { name: "Freeze-Dried Fruit Variety Pack", brand: "Crispy Green", health: "Single-ingredient freeze-dried fruit snacks — nothing added, nothing removed.", url: "https://www.amazon.com/dp/B0CY8VQXHQ?tag=lovie084-20" },
      { name: "Organic Freeze-Dried Strawberries", brand: "Panfruit", health: "100% organic strawberries, freeze-dried to preserve vitamins and antioxidants.", url: "https://www.amazon.com/dp/B0D9KXHQZQ?tag=lovie084-20" },
      { name: "Natural Whole Pitted Olives", brand: "Poshi", health: "Whole pitted olives as healthy snacks — keto and vegan friendly, rich in healthy fats.", url: "https://www.amazon.com/dp/B00R8352XW?tag=lovie084-20" },
      { name: "Rosemary Olive Oil Organic Flatbread", brand: "Rustic Bakery", health: "Organic artisan flatbread with rosemary and olive oil.", url: "https://www.amazon.com/dp/B00TJ5CHSK?tag=lovie084-20" },
      { name: "Seed Crackers", brand: "Simple Mills", health: "Seed-based crackers — grain-free, clean ingredients, no seed oils.", url: "https://www.amazon.com/dp/B08KT73KXT?tag=lovie084-20" },
      { name: "Avocado Oil Potato Chips", brand: "MARK'S", health: "Kettle-cooked in avocado oil instead of seed oils — clean chip alternative.", url: "https://www.amazon.com/dp/B0DFXVQZ8P?tag=lovie084-20" },
      { name: "Vandy Crisps Potato Chips", brand: "Vandy", health: "Seed-oil-free chips made with tallow — the ancestral cooking fat.", url: "https://www.amazon.com/dp/B0F9MRJ1LL?tag=lovie084-20" },
      { name: "Atlas Real Food Protein Bar", brand: "Atlas", health: "20g clean protein bar with no seed oils — real food ingredients only.", url: "https://www.amazon.com/dp/B0C4KXQJ8P?tag=lovie084-20" },
      { name: "Crispy Roasted Edamame", brand: "Biena", health: "Plant-based protein snack roasted without seed oils — crunchy and satisfying.", url: "https://www.amazon.com/dp/B0CY8VQXHP?tag=lovie084-20" },
      { name: "Marmarabirlik Black Olives", brand: "Marmarabirlik", health: "Premium Turkish black olives — rich in healthy monounsaturated fats and polyphenols.", url: "https://www.amazon.com/dp/B00D8DYFGQ?tag=lovie084-20" },
    ],
  },
  {
    id: "healthy-beverages",
    title: "Healthy Beverages",
    icon: "Droplet",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/120748616/D66doBaWmncxm5rVMvJ4yM/cat-healthy-beverages-iCw9jNuS5jaeHsJjbrJmHV.webp",
    philosophy: "Hydration is the foundation. We stock sparkling waters made with real fruit, premium spring water in glass bottles, and mineral-rich options that make staying hydrated effortless and enjoyable.",
    products: [
      { name: "Mountain Valley Spring Water (Glass, 33oz)", brand: "Mountain Valley", health: "Sourced from a protected spring since 1871. Naturally alkaline with balanced mineral content. Glass bottles.", url: "https://www.amazon.com/dp/B07GJPG6HW?tag=lovie084-20" },
      { name: "Mountain Valley Spring Water (Glass, 16oz)", brand: "Mountain Valley", health: "Premium natural spring water in glass bottles — mineral-rich hydration.", url: "https://www.amazon.com/dp/B07ZPGDC77?tag=lovie084-20" },
      { name: "C2O Coconut Water (Mango)", brand: "C2O", health: "Fresh coconut water with natural electrolytes and mango flavor.", url: "https://www.amazon.com/dp/B07692NZXB?tag=lovie084-20" },
      { name: "C2O Coconut Water (Original)", brand: "C2O", health: "Pure coconut water — natural electrolytes and potassium for hydration.", url: "https://www.amazon.com/dp/B00FS35V1W?tag=lovie084-20" },
      { name: "C2O Organic Coconut Water", brand: "C2O", health: "USDA organic coconut water — clean hydration with natural minerals.", url: "https://www.amazon.com/dp/B0DX2MSXPV?tag=lovie084-20" },
      { name: "Re-Lyte Electrolyte Powder", brand: "REDMOND", health: "Clean electrolyte mix with real salt minerals — no sugar, no artificial ingredients.", url: "https://www.amazon.com/dp/B091BFQC9F?tag=lovie084-20" },
    ],
  },
  {
    id: "organic-foods",
    title: "Organic & Whole Foods",
    icon: "Leaf",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/120748616/D66doBaWmncxm5rVMvJ4yM/cat-organic-foods-RiK49xN2sTJCuoJ9jpBGBb.webp",
    philosophy: "Real food, minimal processing. From raw honey to grass-fed tallow chips, every pantry item is chosen for clean ingredients, honest sourcing, and nutrient density over convenience.",
    products: [
      { name: "Maldon Sea Salt Flakes", brand: "Maldon", health: "Hand-harvested pyramid crystals with a clean mineral profile. Trace minerals retained.", url: "https://www.amazon.com/dp/B00017028M?tag=lovie084-20" },
      { name: "Organic Raw & Unfiltered Honey", brand: "Nate's Honey", health: "USDA organic raw unfiltered honey — natural sweetener with enzymes and antioxidants.", url: "https://www.amazon.com/dp/B01IR6IZZA?tag=lovie084-20" },
      { name: "Nova Maple Cream", brand: "Nova Maple Syrup", health: "Pure grade-A maple cream — natural sweetener, no additives.", url: "https://www.amazon.com/dp/B01EM5XUO6?tag=lovie084-20" },
      { name: "Grain-Free Baking Powder", brand: "Otto's Naturals", health: "Grain-free, corn-free baking — AIP/Paleo friendly.", url: "https://www.amazon.com/dp/B09TG9LCKF?tag=lovie084-20" },
      { name: "Sodium Bicarbonate Powder", brand: "Prescribed For Life", health: "Organic aluminum-free baking soda — versatile health and household uses.", url: "https://www.amazon.com/dp/B07CNFGV5S?tag=lovie084-20" },
      { name: "Organic Coconut Milk", brand: "Califia Farms", health: "Organic plant-based dairy alternative — USDA certified.", url: "https://www.amazon.com/dp/B0FXCMYRQZ?tag=lovie084-20" },
    ],
  },
  {
    id: "herbal-medicine",
    title: "Herbal Medicine",
    icon: "Sparkles",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/120748616/D66doBaWmncxm5rVMvJ4yM/cat-herbal-medicine-7XApUgs6gfeviTtEADmH55.webp",
    philosophy: "Ancient plant medicine meets modern wellness. Ayurvedic herbs, bee propolis, dandelion root — these are the pharmacological tools that have sustained human health for millennia.",
    products: [
      { name: "Propolis Nasal Rinse Spray", brand: "Beekeeper's Naturals", health: "Bee propolis nasal spray — natural immune defense and sinus support.", url: "https://www.amazon.com/dp/B0BQ5JJWW4?tag=lovie084-20" },
      { name: "Mushroom Elixir Mix with Reishi", brand: "Four Sigmatic", health: "Reishi mushroom elixir for deep sleep and stress relief — adaptogenic nightcap.", url: "https://www.amazon.com/dp/B078WQXJ8P?tag=lovie084-20" },
      { name: "Belladonna 30C Homeopathic Pellets", brand: "Boiron", health: "Classical homeopathic remedy for fever and inflammation. 80 pellets, no side effects or drug interactions.", url: "https://www.amazon.com/dp/B078NF6QB9?tag=lovie084-20" },
      { name: "Aconitum Napellus 30C (3-Pack)", brand: "Boiron", health: "Homeopathic fever remedy — 240 pellets. First-line response for sudden onset symptoms.", url: "https://www.amazon.com/dp/B089BGC8BF?tag=lovie084-20" },
      { name: "Sulphur Iodatum 9C", brand: "Boiron", health: "Homeopathic support for nasal discharge during cold and flu convalescence.", url: "https://www.amazon.com/dp/B004LFJVZ0?tag=lovie084-20" },
    ],
  },
  {
    id: "crystals",
    title: "Crystals & Energy Tools",
    icon: "Gem",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/120748616/D66doBaWmncxm5rVMvJ4yM/cat-crystals-TEMcb3EJg7ZrxPhNX6naxw.webp",
    philosophy: "Whether you believe in crystal energy or not, the act of intentional placement and ritual creates psychological anchors for focus and calm. Sound healing bowls and crystals serve as environmental design elements that prompt mindfulness.",
    products: [
      { name: "Healing Crystal Wand Set (7 stones)", brand: "Luckeeper", health: "Amethyst, Rose Quartz, Clear Quartz, Black Obsidian, Green Fluorite, Lapis Lazuli, Rainbow Fluorite.", url: "https://www.amazon.com/dp/B07VP1QNLT?tag=lovie084-20" },
      { name: "Orgonite Crystal Wand Set", brand: "Ever Vibes", health: "Orgonite combines crystals with metal shavings. Used as meditation tools and desk objects.", url: "https://www.amazon.com/dp/B07VP1QNLT?tag=lovie084-20" },
      { name: "Blue Sodalite Tumbled Stones", brand: "MAIBAOTA", health: "Natural healing crystals for energy work and spiritual practice.", url: "https://www.amazon.com/dp/B0BWY744C8?tag=lovie084-20" },
      { name: "Tiger Eye Stones", brand: "MAIBAOTA", health: "Grounding stone with chatoyant optical effect. Used in decision-making rituals as a focus object.", url: "https://www.amazon.com/dp/B09TVX6GH8?tag=lovie084-20" },
      { name: "Premium Tibetan Singing Bowl Set", brand: "Himalayan Bazaar", health: "Sound healing therapy — vibrational frequency for meditation and chakra balancing.", url: "https://www.amazon.com/dp/B09N21ZD7B?tag=lovie084-20" },
      { name: "432Hz Crystal Singing Bowl Set (7 bowls)", brand: "Ryan Dvan", health: "Full chakra crystal singing bowl set tuned to 432Hz for deep sound healing.", url: "https://www.amazon.com/dp/B08CVSZWRC?tag=lovie084-20" },
    ],
  },
  {
    id: "body-care",
    title: "Natural Body Care",
    icon: "Sparkles",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/120748616/D66doBaWmncxm5rVMvJ4yM/cat-body-care-LNTK84iTUhigwi6wYRBDPc.webp",
    philosophy: "Your skin is your largest organ. Everything that touches it enters your bloodstream within 26 seconds. We stock only plant-based, chemical-free products that nourish rather than burden the body.",
    products: [
      { name: "Pure Castile Liquid Soap (Peppermint)", brand: "Brittanie's Thyme", health: "Organic, plant-based castile soap free of sulfates, parabens, and synthetic fragrances.", url: "https://www.amazon.com/dp/B0CKGJPS3F?tag=lovie084-20" },
      { name: "Organic Castile Liquid Soap (Olive Oil)", brand: "Brittanie's Thyme", health: "Pure olive oil base — biodegradable, vegan, and free of the 12 most common skin irritants.", url: "https://www.amazon.com/dp/B08QLCRDM9?tag=lovie084-20" },
      { name: "Goat Milk Soap with Honey", brand: "The Soap Haven", health: "Goat milk lactic acid + honey humectant. Handmade, SLS and paraben free.", url: "https://www.amazon.com/dp/B00SV62QWA?tag=lovie084-20" },
      { name: "Ruby Grapefruit Hand Soap", brand: "Everyone", health: "Plant-based cleanser with pure essential oils. EWG Verified for safety.", url: "https://www.amazon.com/dp/B085S7TSXK?tag=lovie084-20" },
      { name: "Magnetic Bentonite Clay Bath", brand: "Enviromedica", health: "Detox bath therapy — draws out toxins through skin absorption.", url: "https://www.amazon.com/dp/B00X7RCW4A?tag=lovie084-20" },
    ],
  },
  {
    id: "sleep",
    title: "Organic Sleep & Textiles",
    icon: "Moon",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/120748616/D66doBaWmncxm5rVMvJ4yM/cat-sleep-textiles-RQBK4ohoGYocJAYfvMNhDg.webp",
    philosophy: "You spend a third of your life in bed. The materials touching your skin for 8 hours nightly should be the cleanest in your home. Breathable, chemical-free, thermoregulating.",
    products: [
      { name: "LOFE Organic Pillow", brand: "LOFE", health: "100% organic cotton shell with adjustable loft. No pesticide residues or flame retardants.", url: "https://www.amazon.com/dp/B0BVFXJZ4S?tag=lovie084-20" },
      { name: "Bamboo Viscose Cooling Sheets", brand: "Sleep Sanctuary", health: "100% bamboo viscose — thermoregulating, wicks moisture 3x faster than cotton.", url: "https://www.amazon.com/dp/B0BVFXJZ4T?tag=lovie084-20" },
      { name: "Pure Bamboo Duvet Cover", brand: "Pure Bamboo", health: "100% organic viscose from bamboo. Temperature-regulating and softer than 400-thread-count cotton.", url: "https://www.amazon.com/dp/B0BVFXJZ4U?tag=lovie084-20" },
    ],
  },
  {
    id: "water-wellness",
    title: "Water & Wellness Infrastructure",
    icon: "Droplet",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/120748616/D66doBaWmncxm5rVMvJ4yM/cat-water-wellness-ivbWtnMB6DPT37rG7RWUDM.webp",
    philosophy: "Water quality is the foundation of biological health. We filter what touches our skin, purify what we drink, and choose glass over plastic.",
    products: [
      { name: "Cobbe Filtered Shower Head", brand: "Cobbe", health: "20-stage filtration removes chlorine, fluoride, and heavy metals.", url: "https://www.amazon.com/dp/B0BVFXJZ4V?tag=lovie084-20" },
      { name: "LUXE Bidet NEO 185", brand: "LUXE Bidet", health: "Dual-nozzle bidet reduces toilet paper use by 80% with superior hygiene.", url: "https://www.amazon.com/dp/B00A0RHSJO?tag=lovie084-20" },
      { name: "KIWIBIRD Water Flosser", brand: "KIWIBIRD", health: "Cordless oral irrigator with UVC sterilization. Oral health linked to cardiovascular health.", url: "https://www.amazon.com/dp/B0F18SLN5B?tag=lovie084-20" },
      { name: "BLUEAIR Air Purifier", brand: "BLUEAIR", health: "HEPA air purification for allergens, dust, and indoor air quality.", url: "https://www.amazon.com/dp/B08KPJ76RR?tag=lovie084-20" },
    ],
  },
  {
    id: "clean-living",
    title: "Clean Living & Non-Toxic Home",
    icon: "Leaf",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/120748616/D66doBaWmncxm5rVMvJ4yM/cat-clean-living-fRcBPoU7bjgeKBvg7Ko22E.webp",
    philosophy: "The chemicals in conventional cleaners are among the most toxic substances in any home. We clean with plant-based formulas that protect both the humans inside and the ecosystem outside.",
    products: [
      { name: "Puracy Multi-Surface Cleaner", brand: "Puracy", health: "Plant-powered, biodegradable formula. Free of sulfates, chlorine, and synthetic fragrances.", url: "https://www.amazon.com/dp/B0DT6ZDMFJ?tag=lovie084-20" },
      { name: "Seventh Generation Disinfecting Cleaner", brand: "Seventh Generation", health: "Lemongrass citrus formula using thymol (from thyme oil) instead of synthetic biocides.", url: "https://www.amazon.com/dp/B0933MCB1J?tag=lovie084-20" },
      { name: "Seventh Generation Multi-Surface Wipes", brand: "Seventh Generation", health: "Plant-based cleaning wipes with essential oils — non-toxic home cleaning.", url: "https://www.amazon.com/dp/B0F7M5ZKZ3?tag=lovie084-20" },
      { name: "Branch Basics Concentrate Starter Kit", brand: "Branch Basics", health: "One concentrate replaces all cleaners — plant-based, fragrance-free, zero toxins.", url: "https://www.amazon.com/dp/B0CXQJ8PPP?tag=lovie084-20" },
      { name: "ECOLipak Bamboo Toilet Paper", brand: "ECOLipak", health: "Tree-free, non-toxic, dye-free. Bamboo grows 30x faster than trees with no pesticides.", url: "https://www.amazon.com/dp/B0DTJWY9PM?tag=lovie084-20" },
      { name: "ECOLipak Compostable Paper Plates", brand: "ECOLipak", health: "Plant-based compostable alternative to plastic — zero waste.", url: "https://www.amazon.com/dp/B09F368W46?tag=lovie084-20" },
      { name: "WaterWipes Baby Wipes", brand: "WaterWipes", health: "99.9% water wipes — minimal ingredients, hypoallergenic.", url: "https://www.amazon.com/dp/B008KJQMA0?tag=lovie084-20" },
      { name: "Repurpose Compostable Cold Cups", brand: "Repurpose", health: "100% plant-based compostable cups — zero plastic waste.", url: "https://www.amazon.com/dp/B00MCYIWX4?tag=lovie084-20" },
      { name: "Reusable Glass Straws Set", brand: "Foogwee", health: "Reusable glass straws — eliminates single-use plastic.", url: "https://www.amazon.com/dp/B0D9WS5DF9?tag=lovie084-20" },
    ],
  },
  {
    id: "kitchen",
    title: "Mindful Kitchen & Healthy Cooking",
    icon: "ChefHat",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/120748616/D66doBaWmncxm5rVMvJ4yM/cat-kitchen-Nr9zDQebuziSrsW4mVPKUX.webp",
    philosophy: "The kitchen is the pharmacy of the biological founder. We chose non-toxic cookware, glass storage, and natural wood — materials that do not leach chemicals into the food that becomes your body.",
    products: [
      { name: "Caraway Non-Toxic Ceramic Cookware Set", brand: "Caraway", health: "Non-toxic ceramic-coated cookware — no PTFE, PFOA, or other chemicals leaching into food.", url: "https://www.amazon.com/dp/B08KXQJ8PP?tag=lovie084-20" },
      { name: "Unbleached Parchment Paper", brand: "AMFOCUS", health: "Unbleached parchment for clean baking — no chemicals.", url: "https://www.amazon.com/dp/B0C6KDWL3W?tag=lovie084-20" },
      { name: "Traeger Ironwood 885 Grill", brand: "Traeger", health: "All-natural wood pellet grill for clean smoke cooking.", url: "https://www.amazon.com/dp/B0822BJSSJ?tag=lovie084-20" },
      { name: "Traeger Signature Blend Wood Pellets", brand: "Traeger", health: "100% all-natural wood pellets — no fillers, binders, or additives.", url: "https://www.amazon.com/dp/B0DHJ4TY4L?tag=lovie084-20" },
    ],
  },
  {
    id: "biohacking",
    title: "Biohacking & Wellness Tech",
    icon: "Sparkles",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/120748616/D66doBaWmncxm5rVMvJ4yM/cat-biohacking-6aeHr7ZywLDCbMhCNz6ndp.webp",
    philosophy: "Technology in service of biology. From grounding sheets to sleep trackers, these tools help you measure, optimize, and recover — turning wellness from guesswork into data-driven practice.",
    products: [
      { name: "Hooga Grounding Mat", brand: "Hooga", health: "Conductive carbon mat connects the body to Earth's electrical field. Reduces cortisol and inflammation.", url: "https://www.amazon.com/dp/B07VSRK68V?tag=lovie084-20" },
      { name: "Premium Grounding Sheet", brand: "Premium Grounding", health: "Silver-threaded organic cotton sheet for earthing during sleep — grounded all night.", url: "https://www.amazon.com/dp/B0CXKZQJ8P?tag=lovie084-20" },
      { name: "Hooga Red Light Therapy Panel", brand: "Hooga", health: "Red and near-infrared light therapy for cellular repair, skin health, and recovery.", url: "https://www.amazon.com/dp/B0CGC8HB5P?tag=lovie084-20" },
      { name: "Theragun Mini 3.0", brand: "Therabody", health: "Portable percussive therapy for muscle recovery — used by biohackers and athletes.", url: "https://www.amazon.com/dp/B0DKXQJ8PP?tag=lovie084-20" },
      { name: "RENPHO Thermacool Massage Gun", brand: "RENPHO", health: "Deep tissue percussion massager with heat and cold therapy heads. Charging stand included. Pain relief and muscle recovery.", url: "https://www.amazon.com/dp/B0D6GK13XM?tag=lovie084-20" },
    ],
  },

];

// Product card component
function ProductCard({ product }: { product: Product }) {
  const amazonUrl = product.url || AMAZON_LINKS[product.name];
  return (
    <div className="group py-6 border-b border-foreground/5 last:border-b-0">
      <div className="flex flex-col gap-2">
        <div className="flex items-baseline gap-3">
          {amazonUrl ? (
            <a
              href={amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${T.s} text-foreground/90 font-medium hover:text-foreground underline underline-offset-4 decoration-foreground/15 hover:decoration-foreground/40 transition-colors`}
            >
              {product.name}
            </a>
          ) : (
            <h4 className={`${T.s} text-foreground/90 font-medium`}>{product.name}</h4>
          )}
          <span className={`${T.label} shrink-0`}>{product.brand}</span>
        </div>
        <p className={`${T.s} text-foreground/55 leading-relaxed`}>{product.health}</p>
      </div>
    </div>
  );
}

// Category section
function CategorySection({ category, index, philosophyOverride }: { category: Category; index: number; philosophyOverride?: string }) {
  const IconComponent = ICONS[category.icon] || Leaf;
  const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI"];

  return (
    <section id={category.id} className="py-16 md:py-24">
      <div>
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <IconComponent className="w-4 h-4 text-foreground/30" />
              <p className={T.label}>{romanNumerals[index] || String(index + 1)}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className={`${T.l} mb-4`}>{category.title}</h2>
          </FadeIn>
          <Divider delay={0.2} />
          {category.image && (
            <FadeIn delay={0.25}>
              <div className="w-full aspect-[16/9] rounded-lg overflow-hidden mb-8">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          )}
          <FadeIn delay={0.3}>
            <p className={`${T.m} text-foreground/60 mb-10 italic`}>{philosophyOverride || category.philosophy}</p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div>
              {category.products.map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
            </div>
          </FadeIn>
      </div>
    </section>
  );
}

// TOC item
function TOCItem({ number, title, id }: { number: string; title: string; id: string }) {
  return (
    <a
      href={`#${id}`}
      className={`${T.s} text-foreground/50 hover:text-foreground transition-colors duration-300 block py-2`}
      onClick={(e) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <span className="text-foreground/30 mr-3">{number}</span>
      {title}
    </a>
  );
}

export default function CuratedProducts() {
  const { navSuffix, footerText, href: h, copy } = useBranding();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tocOpen, setTocOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSectionId, setActiveSectionId] = useState<string>("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Track which section is currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );
    CATEGORIES.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI"];

  const totalProducts = useMemo(
    () => CATEGORIES.reduce((sum, cat) => sum + cat.products.length, 0),
    []
  );

  const filteredCategories = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    let cats = CATEGORIES;

    // Filter by active category
    if (activeCategory) {
      cats = cats.filter(cat => cat.id === activeCategory);
    }

    // Filter by search query
    if (query) {
      cats = cats.map(cat => ({
        ...cat,
        products: cat.products.filter(p =>
          p.name.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.health.toLowerCase().includes(query)
        ),
      })).filter(cat => cat.products.length > 0);
    }

    return cats;
  }, [searchQuery, activeCategory]);

  const filteredProductCount = useMemo(
    () => filteredCategories.reduce((sum, cat) => sum + cat.products.length, 0),
    [filteredCategories]
  );

  const isFiltering = searchQuery.trim() !== "" || activeCategory !== null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={copy.seoCuratedTitle}
        description={copy.seoCuratedDescription}
        path="/the-founders-pharmacy"
        keywords={copy.seoCuratedKeywords}
        ogType="article"
      />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <Link href={h("/")} className={`${T.nav} font-body font-medium whitespace-nowrap`}>
            Vibe House <span className="text-foreground/40">{navSuffix}</span>
          </Link>
          <div className="hidden md:flex items-center gap-10">
            <Link href={h("/why")} className={`${T.nav} text-foreground/50 hover:text-foreground transition-colors duration-300`}>Why Now</Link>
            <Link href={h("/events-series")} className={`${T.nav} text-foreground/50 hover:text-foreground transition-colors duration-300`}>Events Series</Link>
            <Link href={h("/biological-founder")} className={`${T.nav} text-foreground/50 hover:text-foreground transition-colors duration-300`}>{copy.navLabelBioFounder}</Link>
            <Link href={h("/the-founders-pharmacy")} className={`${T.nav} text-foreground hover:text-foreground transition-colors duration-300`}>{copy.navLabelPharmacy}</Link>
          </div>
          <div className="flex items-center gap-3">
            <Button asChild className={`bg-foreground text-background hover:bg-foreground/90 ${T.nav} rounded-full px-5 py-2`}>
              <Link href={h("/#join")}>Join our next event</Link>
            </Button>
            <button
              className="md:hidden p-2 text-foreground/70 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-foreground/5"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container py-6 flex flex-col gap-5">
              <Link href={h("/why")} className={`${T.nav} text-foreground/50 hover:text-foreground transition-colors duration-300`} onClick={() => setMobileMenuOpen(false)}>
                Why Now
              </Link>
              <Link href={h("/events-series")} className={`${T.nav} text-foreground/50 hover:text-foreground transition-colors duration-300`} onClick={() => setMobileMenuOpen(false)}>
                Events Series
              </Link>
              <Link href={h("/biological-founder")} className={`${T.nav} text-foreground/50 hover:text-foreground transition-colors duration-300`} onClick={() => setMobileMenuOpen(false)}>
                {copy.navLabelBioFounder}
              </Link>
              <Link href={h("/the-founders-pharmacy")} className={`${T.nav} text-foreground hover:text-foreground transition-colors duration-300`} onClick={() => setMobileMenuOpen(false)}>
                {copy.navLabelPharmacy}
              </Link>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-24 pb-8">
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link href={h("/biological-founder")} className={`${T.nav} text-foreground/40 hover:text-foreground transition-colors inline-flex items-center gap-2 mb-12`}>
                <ArrowLeft className="w-3 h-3" /> Back to {copy.navLabelBioFounder}
              </Link>
            </motion.div>

            <motion.p
              className={`${T.label} mb-6`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {totalProducts} Products &middot; {CATEGORIES.length} Categories &middot; Every Choice Intentional
            </motion.p>

            <motion.h1
              className={`${T.xl} mb-6`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {copy.seoCuratedTitle}
            </motion.h1>

            <motion.div
              className="w-full h-px bg-foreground/10 mb-10"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            <motion.p
              className={`${T.m} text-foreground/60 max-w-3xl`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Every product in Vibe House was chosen with intention. Not the cheapest, not the trendiest — the healthiest. This is a living catalog of what we stock and why, from the essential oils in the meditation room to the bamboo sheets on every bed.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 border-b border-foreground/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Search bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
              <input
                type="text"
                placeholder="Search products, brands, or health benefits..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-foreground/[0.03] border border-foreground/10 rounded-lg text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground/25 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/30 hover:text-foreground/60 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category filter pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory(null)}
                className={`${T.nav} px-4 py-2 rounded-full border transition-all duration-200 ${
                  activeCategory === null
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-foreground/50 border-foreground/15 hover:border-foreground/30 hover:text-foreground/70"
                }`}
              >
                All ({totalProducts})
              </button>
              {CATEGORIES.map((cat) => {
                const IconComp = ICONS[cat.icon] || Leaf;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                    className={`${T.nav} px-4 py-2 rounded-full border transition-all duration-200 inline-flex items-center gap-1.5 ${
                      activeCategory === cat.id
                        ? "bg-foreground text-background border-foreground"
                        : "bg-transparent text-foreground/50 border-foreground/15 hover:border-foreground/30 hover:text-foreground/70"
                    }`}
                  >
                    <IconComp className="w-3 h-3" />
                    {cat.title.split(" ")[0]} ({cat.products.length})
                  </button>
                );
              })}
            </div>

            {/* Filter status */}
            {isFiltering && (
              <div className="mt-4 flex items-center justify-between">
                <p className={`${T.label}`}>
                  Showing {filteredProductCount} of {totalProducts} products
                  {activeCategory && ` in ${CATEGORIES.find(c => c.id === activeCategory)?.title}`}
                  {searchQuery && ` matching "${searchQuery}"`}
                </p>
                <button
                  onClick={() => { setSearchQuery(""); setActiveCategory(null); }}
                  className={`${T.nav} text-foreground/40 hover:text-foreground transition-colors`}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Two-column layout: Sticky Sidebar + Main Content */}
      <div className="container">
        <div className="flex gap-0 lg:gap-8 relative">
          {/* Mobile TOC toggle button */}
          <button
            className="lg:hidden fixed bottom-6 right-6 z-40 bg-foreground text-background rounded-full p-4 shadow-lg hover:bg-foreground/90 transition-colors"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle table of contents"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Mobile sidebar overlay */}
          {sidebarOpen && (
            <div
              className="lg:hidden fixed inset-0 bg-black/30 z-40"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Left Sidebar — Sticky TOC */}
          <aside
            className={`
              fixed lg:sticky top-0 lg:top-20 left-0 lg:left-auto
              h-screen lg:h-[calc(100vh-5rem)]
              w-72 lg:w-56 xl:w-64 shrink-0
              bg-background lg:bg-transparent
              z-50 lg:z-10
              transform transition-transform duration-300 lg:transform-none
              ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
              overflow-y-auto overscroll-contain
              border-r border-foreground/5 lg:border-r-0
              pt-20 lg:pt-2 pb-8
              px-6 lg:px-0
            `}
          >
            <div className="flex items-center justify-between mb-4 lg:hidden">
              <p className={`${T.label}`}>Contents</p>
              <button onClick={() => setSidebarOpen(false)} className="p-1 text-foreground/40 hover:text-foreground">
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className={`${T.label} mb-4 hidden lg:block`}>Contents</p>
            <nav className="border-l border-foreground/10 pl-4 space-y-0.5">
              {CATEGORIES.map((cat, i) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className={`block py-1.5 text-[13px] leading-snug transition-colors duration-200 ${
                    activeSectionId === cat.id
                      ? "text-foreground font-medium"
                      : "text-foreground/40 hover:text-foreground/70"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(cat.id)?.scrollIntoView({ behavior: "smooth" });
                    setSidebarOpen(false);
                  }}
                >
                  <span className={`mr-2 text-[11px] ${
                    activeSectionId === cat.id ? "text-foreground/60" : "text-foreground/25"
                  }`}>{romanNumerals[i] || String(i + 1)}</span>
                  {cat.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Right — Main Content */}
          <main className="flex-1 min-w-0">
            {/* Categories */}
            {filteredCategories.map((category, i) => (
              <CategorySection
                key={category.id}
                category={category}
                index={CATEGORIES.findIndex(c => c.id === category.id)}
                philosophyOverride={category.id === "kitchen" ? copy.curatedKitchenPhilosophy : undefined}
              />
            ))}

            {/* No results */}
            {filteredCategories.length === 0 && isFiltering && (
              <section className="py-20 md:py-32">
                <div className="text-center">
                  <p className={`${T.l} text-foreground/30 mb-4`}>No products found</p>
                  <p className={`${T.m} text-foreground/40 mb-8`}>
                    Try a different search term or clear your filters.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => { setSearchQuery(""); setActiveCategory(null); }}
                    className={`${T.nav} rounded-full px-6 py-4 border-foreground/15`}
                  >
                    Clear all filters
                  </Button>
                </div>
              </section>
            )}
          </main>
        </div>
      </div>

      {/* Category Index */}
      <section className="py-20 md:py-32 border-t border-foreground/5">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <p className={`${T.nav} text-foreground/30 tracking-[0.2em] mb-16 text-center`}>INDEX</p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
              {CATEGORIES.map((cat, i) => (
                <FadeIn key={cat.id} delay={i * 0.05}>
                  <a href={`#${cat.id}`} className="group block">
                    <div className="flex items-baseline gap-4 mb-2">
                      <span className="font-display text-[clamp(2rem,4vw,3rem)] leading-none text-foreground/10 group-hover:text-foreground/25 transition-colors">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-display text-lg text-foreground/50 group-hover:text-foreground transition-colors leading-tight">
                        {cat.title}
                      </h3>
                    </div>
                    <div className="ml-[calc(2rem+1rem)] md:ml-[calc(3rem+1rem)]">
                      <p className="text-xs text-foreground/25 tracking-wide">
                        {cat.products.length} {cat.products.length === 1 ? 'product' : 'products'}
                      </p>
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Divider />
            <FadeIn>
              <p className={`${T.m} text-foreground/40 italic text-center`}>
                {copy.curatedBottomNote}
              </p>
            </FadeIn>
            <div className="flex justify-center mt-12">
              <Button asChild variant="outline" className={`${T.nav} rounded-full px-8 py-6 border-foreground/15 hover:bg-foreground/5`}>
                <Link href={h("/biological-founder")}>
                  <ArrowLeft className="w-3 h-3 mr-2" /> Back to Articles
                </Link>
              </Button>
            </div>
            <FadeIn delay={0.2}>
              <div className="flex items-center justify-center gap-4 mt-16">
                <Link href={h("/brand")} className="text-foreground/25 text-sm hover:text-foreground/50 transition-colors">Brand</Link>
                <span className="text-foreground/15">|</span>
                <p className="text-foreground/25 text-sm">
                  Created by{" "}
                  <a
                    href="https://x.com/saaborz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/40 hover:text-foreground transition-colors underline underline-offset-4"
                  >
                    @sahin
                  </a>
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
