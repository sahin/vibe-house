/*
  CURATED PRODUCTS — The Biological Founder's Pharmacy
  Every product in the house was chosen for a reason.
  This page tells the story of why.
  Same dictionary-definition typography as the rest of the site.
*/

import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X, ChevronDown, Droplets, Wind, Leaf, Coffee, Pill, Sparkles, Gem, Moon, Droplet, ChefHat } from "lucide-react";
import { Link } from "wouter";
import { useState, useMemo } from "react";
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
  "Frankincense Essential Oil": "https://www.amazon.com/dp/B07PRDSY6J",
  "Rosemary Essential Oil": "https://www.amazon.com/Majestic-Pure-Rosemary-Essential-Oil/dp/B07G8M3DTX",
  "Peppermint Essential Oil": "https://www.amazon.com/Majestic-Pure-Peppermint-Essential-Therapeutic/dp/B00PV15BPW",
  "Lemongrass Essential Oil": "https://www.amazon.com/Majestic-Pure-Lemongrass-Essential-Therapeutic/dp/B01BKB3C98",
  "Lemon Essential Oil": "https://www.amazon.com/Majestic-Pure-Lemon-Essential-Oil/dp/B01LXALVDG",
  "Cedarwood Essential Oil": "https://www.amazon.com/Majestic-Pure-Cedarwood-Essential-Therapeutic/dp/B01BKB3B1W",
  "Geranium Essential Oil": "https://www.amazon.com/Majestic-Pure-Geranium-Essential-Therapeutic/dp/B01BKVFNPO",
  "Basil Essential Oil": "https://www.amazon.com/Majestic-Pure-Basil-Essential-Oil/dp/B07GZLNFHM",
  "Meditation Essential Oil Set": "https://www.amazon.com/Majestic-Pure-Essential-Aromatherapy-Therapeutic/dp/B0C7LBFPKR",
  "Waterless Nebulizing Diffuser": "https://www.amazon.com/Airversa-Waterless-Essential-Nebulizing-Aromatherapy/dp/B0CNXPQHGM",
  "Professional Nebulizing Diffuser": "https://www.amazon.com/Minidiva-Nebulizing-Essential-Aromatherapy-Adjustable/dp/B0BVFXJZ4R",
  "Butterfly Pea Flower Tea": "https://www.amazon.com/Butterfly-Flower-Dried-Clitoria-Ternatea/dp/B08GFBG3QT",
  "Dandelion Root Tea": "https://www.amazon.com/Wellness-Naturals-Dandelion-Root-Tea/dp/B07PXKQBHZ",
  "Soursop Leaves Tea (Guanábana)": "https://www.amazon.com/B-Experts-Soursop-Leaves-Graviola-Guanabana/dp/B0BXWF8KWY",
  "Çaykur Rize Turkish Black Tea": "https://www.amazon.com/Caykur-Rize-Turkish-Black-500g/dp/B00HQIO5RM",
  "Organic Whole Coriander Seeds": "https://www.amazon.com/Spicy-Organic-Coriander-Seeds-Whole/dp/B0B5GFHQVF",
  "Organic Ceylon Cinnamon Sticks": "https://www.amazon.com/52USA-Organic-Ceylon-Cinnamon-Sticks/dp/B07PPWXFP3",
  "Whole Cloves": "https://www.amazon.com/Anthonys-Organic-Whole-Cloves-Gluten-Free/dp/B07GVJXBZQ",
  "Star Anise": "https://www.amazon.com/52USA-Star-Anise-Seeds-Whole/dp/B07PQVBMJY",
  "Tea Strainers for Loose Tea": "https://www.amazon.com/Reinmoson-Strainers-Stainless-Strainer-Steeping/dp/B0D4ZCXLZS",
  "Mushroom Coffee K-Cups": "https://www.amazon.com/Kalba-Mushroom-Coffee-K-Cups-Chaga/dp/B0D2BNXQJT",
  "Arzum Okka Turkish Coffee Maker": "https://www.amazon.com/Arzum-Automatic-Turkish-Coffee-Machine/dp/B01DUAWPSI",
  "Arzum Tea Tock Turkish Tea Maker": "https://www.amazon.com/Arzum-AR3055-Stainless-Electric-Kettle/dp/B0D7QLQFWG",
  "Kurukahveci Mehmet Efendi Turkish Coffee": "https://www.amazon.com/Kurukahveci-Mehmet-Efendi-Turkish-Coffee/dp/B000JVBR4C",
  "Death Wish Coffee Variety Pack": "https://www.amazon.com/Death-Wish-Coffee-Variety-Pack/dp/B0DQXHQJCB",
  "INTASTING Glass Electric Tea Kettle": "https://www.amazon.com/INTASTING-Electric-Kettle-Temperature-Stainless/dp/B0C7FVVJQJ",
  "Cosori Electric Kettle": "https://www.amazon.com/COSORI-Electric-Stainless-Auto-Off-Protection/dp/B07Y1GVMFP",
  "GEM Daily Bite": "https://www.amazon.com/GEM-Vitamins-Superfoods-B-Complex-Prebiotics/dp/B0B2ZM3FB2",
  "GEM Energy Bite": "https://www.amazon.com/GEM-Caffeinated-Sustained-Metabolism-L-Theanine/dp/B0DMQM673G",
  "GEM Calm Bite": "https://www.amazon.com/GEM-Chill-Out-Magnesium-Non-Habit-Chlorella/dp/B0CLVTSXKG",
  "Organic Haritaki Capsules": "https://www.amazon.com/Organic-Haritaki-Capsules-Detoxification-Rejuvenation/dp/B01EZW47EI",
  "Organic Haritaki Powder": "https://www.amazon.com/Organic-Haritaki-Powder-Ounce-Certified/dp/B07N8KV85Y",
  "Propolis Nasal Rinse Spray": "https://www.amazon.com/Beekeepers-Naturals-Eucalyptus-Congestion-Moisturizes/dp/B0BQ5JJWW4",
  "Nate's Organic Raw Unfiltered Honey": "https://www.amazon.com/Nature-Nates-Unfiltered-Certified-Wholesome/dp/B00CMQD3VS",
  "Nova Maple Cream": "https://www.amazon.com/Nova-Maple-Cream-Grade-Butter/dp/B01EM5XUO6",
  "Solely Organic Dried Mango": "https://www.amazon.com/SOLELY-Organic-Strips-Ingredient-Non-GMO/dp/B0897C8Z4T",
  "Maldon Sea Salt Flakes": "https://www.amazon.com/Maldon-Natural-Hand-Harvested-Generations-Packaging/dp/B00017028M",
  "Healing Crystal Wand Set (7 stones)": "https://www.amazon.com/dp/B07T1LNJ3X",
  "Orgonite Crystal Wand Set": "https://www.amazon.com/Healing-Crystal-Wand-Set-Tourmaline/dp/B07VP1QNLT",
  "Green Aventurine Tumbled Stones": "https://www.amazon.com/MAIBAOTA-Aventurine-Meditation-Gemstones-Decorative/dp/B09TSTR17C",
  "Citrine Crystals": "https://www.amazon.com/MAIBAOTA-Citrine-Pendulum-Divination-Spiritual/dp/B0D5TLGS13",
  "Tiger Eye Stones": "https://www.amazon.com/MAIBAOTA-Crystals-Meditation-Gemstones-Decorative/dp/B09TVX6GH8",
  "Sacred Geometry Crystal Grid Boards": "https://www.amazon.com/FINGERINSPIRE-Inspirational-Spiritual-Meditation-Decoration/dp/B0F5BSX91Y",
  "Pure Castile Liquid Soap (Peppermint)": "https://www.amazon.com/Brittanies-Thyme-Castile-Peppermint-Luxurious/dp/B0CKGJPS3F",
  "Organic Castile Liquid Soap (Unscented)": "https://www.amazon.com/Brittanies-Thyme-Organic-Natural-Unscented/dp/B08QLCRDM9",
  "Goat Milk Soap with Honey": "https://www.amazon.com/Handmade-Goat-Milk-Honey-Soap/dp/B00SV62QWA",
  "Ruby Grapefruit Hand Soap": "https://www.amazon.com/Everyone-Grapefruit-Plant-Based-Cleanser-Essential/dp/B082BWTR4X",
  "Biotin B-Complex Thickening Shampoo": "https://www.amazon.com/Avalon-Organics-B-Complex-Thickening-Shampoo/dp/B008OL3UYK",
  "Dried Rose Petals and Buds": "https://www.amazon.com/Dried-Rose-Petals-Buds-oz/dp/B0FNPC1D67",
  "LOFE Organic Pillow": "https://www.amazon.com/Lofe-Standard-Pillowcase-Adjustable-Hypoallergenic/dp/B07KFVQPTW",
  "Bamboo Viscose Cooling Sheets": "https://www.amazon.com/SLEEP-SANCTUARY-Organic-Viscose-Derived/dp/B0DDV1G96X",
  "Pure Bamboo Duvet Cover": "https://www.amazon.com/s?k=Pure+Bamboo+Duvet+Cover",
  "Serta Goose Feather Down Comforter": "https://www.amazon.com/Serta-Thread-Feather-Seasons-Comforter/dp/B082YL5ZT1",
  "Green Tea Memory Foam Mattress": "https://www.amazon.com/Mattress-Patented-Contour-CertiPUR-US-Certified/dp/B00Q7EPSHI",
  "Mountain Valley Spring Water (Glass)": "https://www.amazon.com/Mountain-Valley-Spring-Bottle-ounces/dp/B07ZPGDC77",
  "AquaBliss Shower Filter": "https://www.amazon.com/AquaBliss-Output-12-Stage-Shower-Filter/dp/B01MUBU0YC",
  "Cobbe Filtered Shower Head": "https://www.amazon.com/Cobbe-Handheld-Pressure-Showerhead-Substance/dp/B0BJDQDZCT",
  "LUXE Bidet NEO 185": "https://www.amazon.com/LUXE-Bidet-Non-Electric-Attachment-Self-cleaning/dp/B00P2XZIP2",
  "KIWIBIRD Water Flosser": "https://www.amazon.com/KIWIBIRD-Cordless-Portable-Irrigator-Waterproof/dp/B0DRBBT5F5",
  "Hooga Grounding Mat": "https://www.amazon.com/Grounding-Hooga-Meditation-Protection-Inflammation/dp/B07VSRK68V",
  "Puracy Multi-Surface Cleaner": "https://www.amazon.com/Puracy-Natural-Purpose-Concentrate-Streak-Free/dp/B00T56KW8K",
  "Seventh Generation Disinfecting Cleaner": "https://www.amazon.com/Seventh-Generation-Lemongrass-Disinfecting-Multi-Surface/dp/B0933MCB1J",
  "ECOLipak Bamboo Toilet Paper": "https://www.amazon.com/ECOLipak-Bamboo-Absorbent-Friendly-Dye-Free/dp/B0DTJY4MWM",
  "Betterway Bamboo Paper Towels": "https://www.amazon.com/Betterway-Bamboo-Paper-Towels-Compostable/dp/B08L5JSX8R",
  "CAROTE Nonstick Cookware Set": "https://www.amazon.com/CAROTE-Nonstick-Cookware-Induction-Saucepans/dp/B0C8HPJW4J",
  "Glass Storage Containers with Bamboo Lids": "https://www.amazon.com/HomArtist-Canisters-Airtight-Storage-Containers/dp/B0BRQDD886",
  "Glass Water Pitcher": "https://www.amazon.com/Delove-Shatterproof-Stainless-Borosilicate-Beverage/dp/B087M4BCMT",
  "Wooden Plates": "https://www.amazon.com/4-11inch-Unbreakable-Lightweight-Housewarming-Christmas/dp/B08NFDV9S8",
  "GreenWorks Compostable Plates": "https://www.amazon.com/GreenWorks-Compostable-Plates-Bagasse-Disposable/dp/B0DMKF5QWJ",
};

interface Category {
  id: string;
  title: string;
  icon: string;
  philosophy: string;
  products: Product[];
}

const CATEGORIES: Category[] = [
  {
    id: "essential-oils",
    title: "Essential Oils & Aromatherapy",
    icon: "Droplets",
    philosophy: "Scent is the most primal sense — it bypasses cognition and rewires the nervous system directly. We stock therapeutic-grade essential oils not as luxury, but as infrastructure for focus, calm, and creative flow.",
    products: [
      { name: "Frankincense Essential Oil", brand: "Majestic Pure", health: "Used for millennia in meditation traditions. Contains boswellic acids that reduce inflammation and support immune function.", url: "https://www.amazon.com/dp/B07PRDSY6J" },
      { name: "Rosemary Essential Oil", brand: "Majestic Pure", health: "Clinically shown to improve memory and cognitive performance. Contains 1,8-cineole which increases acetylcholine.", url: "https://www.amazon.com/dp/B07G8M3DTX" },
      { name: "Peppermint Essential Oil", brand: "Majestic Pure", health: "Activates cold-sensitive receptors that increase alertness and improve sustained attention and memory.", url: "https://www.amazon.com/dp/B00PV15BPW" },
      { name: "Lemongrass Essential Oil", brand: "Majestic Pure", health: "Natural anxiolytic with antimicrobial properties. Contains citral for cortisol reduction and stress relief.", url: "https://www.amazon.com/dp/B01BKB3C98" },
      { name: "Lemon Essential Oil", brand: "Majestic Pure", health: "Limonene-rich oil shown to elevate mood and reduce anxiety. Normalizes stress hormone levels.", url: "https://www.amazon.com/dp/B00QR6SS6O" },
      { name: "Cedarwood Essential Oil", brand: "Majestic Pure", health: "Contains cedrol which increases parasympathetic nervous system activity for deep, restorative sleep.", url: "https://www.amazon.com/dp/B079ZN8SC9" },
      { name: "Geranium Essential Oil", brand: "Majestic Pure", health: "Balances hormonal fluctuations and reduces anxiety. Lowers blood pressure during stressful situations.", url: "https://www.amazon.com/dp/B07GPXSBDW" },
      { name: "Basil Essential Oil", brand: "Majestic Pure", health: "Adaptogenic oil containing linalool and eugenol. Reduces mental fatigue and improves cognitive clarity.", url: "https://www.amazon.com/dp/B075KWWVR6" },
      { name: "Sandalwood Essential Oil", brand: "Majestic Pure", health: "Grounding aroma used in meditation for centuries. Promotes calm focus and spiritual awareness.", url: "https://www.amazon.com/dp/B07G8Q4WG2" },
      { name: "Meditation Essential Oil Set", brand: "Majestic Pure", health: "Curated blend of Rosemary, Sandalwood, Clary Sage, and Patchouli for meditative states.", url: "https://www.amazon.com/dp/B0F1TLQ281" },
    ],
  },
  {
    id: "diffusers",
    title: "Essential Oil Diffusers",
    icon: "Wind",
    philosophy: "The delivery system matters as much as the oil. Waterless nebulizing diffusers use pressurized air to shatter oils into micro-fine particles, preserving the full molecular complexity. No water dilution, no heat degradation.",
    products: [
      { name: "Waterless Nebulizing Diffuser", brand: "Airversa", health: "Atomizes pure essential oil into particles under 3 microns. No water means no mold risk, no bacterial growth.", url: "https://www.amazon.com/dp/B0CNXPQHGM" },
      { name: "Professional Nebulizing Diffuser", brand: "Minidiva", health: "Clinical-grade nebulization preserving the complete volatile compound profile. Adjustable output intensity.", url: "https://www.amazon.com/dp/B0BVFXJZ4R" },
    ],
  },
  {
    id: "teas",
    title: "Teas, Coffee & Herbal Infusions",
    icon: "Leaf",
    philosophy: "Tea is not a beverage — it is a ritual of presence. Every cup is a micro-meditation. The compounds in these teas — L-theanine, polyphenols, adaptogens — sharpen the mind while protecting the body.",
    products: [
      { name: "Butterfly Pea Flower Tea", brand: "Blue Tea", health: "Rich in anthocyanins. Changes color with pH. Traditionally used in Ayurveda to enhance memory and neural function.", url: "https://www.amazon.com/dp/B09ZYFZKTZ" },
      { name: "Butterfly Pea Flower Tea (Loose Leaf)", brand: "Real Naturals", health: "Antioxidant-rich flower tea that supports brain health and cognitive function.", url: "https://www.amazon.com/dp/B0DHXMSX1M" },
      { name: "Dandelion Root Tea", brand: "U.S. Wellness Naturals", health: "Powerful liver detoxifier. Supports bile production and acts as a prebiotic for gut microbiome health.", url: "https://www.amazon.com/dp/B0C4VK7FNR" },
      { name: "Soursop Leaves Tea (Guan\u00e1bana)", brand: "B-Experts", health: "Contains acetogenins for potent antioxidant properties. Traditional Caribbean medicine for immune support.", url: "https://www.amazon.com/dp/B0CYFHH37C" },
      { name: "Caykur Rize Turkish Black Tea", brand: "Caykur", health: "Grown in the mineral-rich Black Sea region. High in L-theanine for calm alertness.", url: "https://www.amazon.com/dp/B00EEZ2U6E" },
      { name: "Do Ghazal Cardamom Tea", brand: "Do Ghazal", health: "Pure Ceylon cardamom loose leaf tea. Traditional Middle Eastern tea rich in antioxidants.", url: "https://www.amazon.com/dp/B00KVVSMIU" },
      { name: "Shamshiri Persian Tea", brand: "Shamshiri", health: "Traditional Persian tea rich in antioxidants and polyphenols.", url: "https://www.amazon.com/dp/B073RQ11D6" },
      { name: "Organic Ceylon Cinnamon Sticks", brand: "52USA", health: "True Ceylon cinnamon improves insulin sensitivity and blood sugar regulation. Low in coumarin.", url: "https://www.amazon.com/dp/B0F68QD99P" },
      { name: "Whole Cloves", brand: "Anthony's Organic", health: "Highest ORAC antioxidant score of any spice. Contains eugenol, a powerful anti-inflammatory.", url: "https://www.amazon.com/dp/B07893T3BH" },
      { name: "Star Anise", brand: "52USA", health: "Natural source of shikimic acid. Contains anethole with anti-fungal and anti-bacterial properties.", url: "https://www.amazon.com/dp/B0CJ5K1NK6" },
      { name: "KORACAO Instant Ceremonial Cacao", brand: "KORACAO", health: "High-flavanol ceremonial cacao powder. Rich in flavonoids and antioxidants for mind and body.", url: "https://www.amazon.com/dp/B0FMKY5PN7" },
      { name: "Organic Cocoa Powder", brand: "Anthony's", health: "Unsweetened organic cacao rich in flavonoids and antioxidants.", url: "https://www.amazon.com/dp/B00F7SU63G" },
      { name: "Kurukahveci Mehmet Efendi Turkish Coffee", brand: "Kurukahveci Mehmet Efendi", health: "Authentic Turkish coffee. Arabica beans, rich aroma, original taste since 1871.", url: "https://www.amazon.com/dp/B01MRZAMO9" },
      { name: "Dandy Blend Instant Herbal Beverage", brand: "Dandy Blend", health: "Caffeine-free dandelion-based coffee alternative with herbal benefits.", url: "https://www.amazon.com/dp/B000SMN0DO" },
      { name: "Pour Over Coffee Dripper (Stainless Steel)", brand: "LHS", health: "Stainless steel paperless coffee filter. Zero waste brewing, no microplastic leaching.", url: "https://www.amazon.com/dp/B07MX87HH9" },
      { name: "MUD/WTR Morning Ritual Starter Kit", brand: "MUD/WTR", health: "Mushroom-based coffee alternative with lion's mane, chaga, reishi. 1/7th the caffeine.", url: "https://www.amazon.com/dp/B0BXKZQJ8P" },
      { name: "RYZE Mushroom Coffee", brand: "RYZE", health: "6-mushroom blend coffee with adaptogens. Sustained energy without jitters or crash.", url: "https://www.amazon.com/dp/B09RQGZQHP" },
    ],
  },
  {
    id: "supplements",
    title: "Supplements & Superfoods",
    icon: "Pill",
    philosophy: "We do not do pills — we do whole-food nutrition in concentrated form. Every supplement in the house is chosen for bioavailability, clean ingredients, and evidence-based formulation.",
    products: [
      { name: "GEM Daily Bite", brand: "GEM", health: "20+ vitamins and minerals from real food sources. Contains zinc, vitamin D, B-complex, turmeric, and prebiotics.", url: "https://www.amazon.com/dp/B0B2ZM3FB2" },
      { name: "GEM Energy Bite", brand: "GEM", health: "40mg natural caffeine plus ginseng and L-theanine for sustained energy without jitters.", url: "https://www.amazon.com/dp/B0DMQM673G" },
      { name: "GEM Calm Bite", brand: "GEM", health: "Magnesium L-Threonate (crosses the blood-brain barrier), Golden Chlorella, and Lemon Balm for clarity.", url: "https://www.amazon.com/dp/B0B9NWFFYS" },
      { name: "GEM Sleep Aid Nighttime Bite", brand: "GEM", health: "Melatonin-free sleep aid with L-Theanine and magnesium for restorative rest.", url: "https://www.amazon.com/dp/B0FCXV7K5R" },
      { name: "Organic Haritaki Capsules", brand: "Kailash Herbals", health: "Known as the 'King of Medicines' in Ayurveda. Supports gut motility and cognitive function.", url: "https://www.amazon.com/dp/B075DNLV3P" },
      { name: "Organic Haritaki Powder", brand: "Jiva Organics", health: "USDA certified organic. One of three fruits in Triphala, the cornerstone of Ayurvedic detoxification.", url: "https://www.amazon.com/dp/B07N8KV85Y" },
      { name: "Collagen Peptide Powder", brand: "Anthony's", health: "Grass-fed collagen peptides for skin, joints, and gut health.", url: "https://www.amazon.com/dp/B071S8D69C" },
      { name: "High Flavanol Cocoa Powder", brand: "Black Forest", health: "Concentrated flavanols and flavonoids for cardiovascular and cognitive support.", url: "https://www.amazon.com/dp/B0CTJ67LK1" },
      { name: "Trace Minerals Enhanced Complex", brand: "Dr. Berg", health: "70+ trace minerals for comprehensive micronutrient support.", url: "https://www.amazon.com/dp/B0858L173M" },
      { name: "Fasting Electrolyte Supplement", brand: "FAST LYTE", health: "Clean electrolyte formula for optimal hydration and mineral balance during fasting.", url: "https://www.amazon.com/dp/B0BDLT1HFM" },
      { name: "Organic Spirulina", brand: "Micro Ingredients", health: "Superfood algae rich in protein, vitamins, and antioxidants.", url: "https://www.amazon.com/dp/B01DPW5DC4" },
      { name: "Spermidine Supplement", brand: "Neurogan", health: "Longevity supplement that promotes cellular autophagy and anti-aging.", url: "https://www.amazon.com/dp/B0BTY4RJ4H" },
      { name: "High Dose Vitamin C Immune-Ade", brand: "Sufficient-C", health: "High-dose vitamin C with L-lysine and bromelain for immune support.", url: "https://www.amazon.com/dp/B00HAMTFYI" },
      { name: "NMN Pro", brand: "ProHealth Longevity", health: "NMN supplement for NAD+ production — key longevity molecule for cellular energy.", url: "https://www.amazon.com/dp/B0C1J1GKXP" },
      { name: "NAD+ with NMN, Resveratrol & Spermidine", brand: "Force Factor", health: "All-in-one longevity stack combining NAD+, resveratrol, spermidine, and astaxanthin.", url: "https://www.amazon.com/dp/B0DMTGWTM1" },
      { name: "Youngr NMN", brand: "Wonderfeel", health: "Clinically studied NMN with ergothioneine and olive fruit extract — premium longevity formula.", url: "https://www.amazon.com/dp/B0BN2FZWJW" },
      { name: "NAD Regen", brand: "BIOSTACK", health: "Advanced NAD regeneration supplement with spermidine synergy for cellular renewal.", url: "https://www.amazon.com/dp/B0DDCT3NP5" },
      { name: "Apigenin", brand: "Double Wood", health: "Apigenin for sleep — Andrew Huberman recommended. Promotes deep sleep without grogginess.", url: "https://www.amazon.com/dp/B0CXQJ8PPA" },
      { name: "Magnesium L-Threonate", brand: "Momentous", health: "Crosses blood-brain barrier — Huberman Lab recommended for sleep and cognition.", url: "https://www.amazon.com/dp/B0DXQJ8PPB" },
      { name: "Magnesium Bath Flakes", brand: "Ancient Minerals", health: "Transdermal magnesium absorption for muscle recovery and deep sleep.", url: "https://www.amazon.com/dp/B005F1ATJQ" },
    ],
  },
  {
    id: "functional-beverages",
    title: "Functional Beverages",
    icon: "Coffee",
    philosophy: "Every drink in the house earns its place. Prebiotic sodas, adaptogen seltzers, real-fruit sparkling water — beverages that nourish the gut, sharpen the mind, or calm the nervous system.",
    products: [
      { name: "OLIPOP Prebiotic Soda", brand: "OLIPOP", health: "Prebiotic soda with gut health benefits — healthy soda alternative with only 2-5g sugar.", url: "https://www.amazon.com/dp/B0DWH3NDP5" },
      { name: "Poppi Sparkling Prebiotic Soda", brand: "Poppi", health: "Apple cider vinegar-based prebiotic soda for gut health and digestion.", url: "https://www.amazon.com/dp/B0CZY3XG8H" },
      { name: "TRIP Adaptogen Seltzer", brand: "TRIP", health: "Contains adaptogens (ashwagandha, lion's mane) for stress relief and focus.", url: "https://www.amazon.com/dp/B0DCZWTK5Q" },
      { name: "Juni Sparkling Adaptogen Drink", brand: "Juni", health: "Zero sugar sparkling adaptogen drink with mushroom complex for focus and calm.", url: "https://www.amazon.com/dp/B0D9KXHQZP" },
    ],
  },
  {
    id: "healthy-snacks",
    title: "Healthy Snacks",
    icon: "Leaf",
    philosophy: "Snacking should build you up, not break you down. Seed-oil-free chips, freeze-dried fruit, whole olives — every snack here is a single-ingredient or clean-label choice that satisfies without inflammation.",
    products: [
      { name: "Solely Organic Dried Mango", brand: "SOLELY", health: "Single ingredient — organic mango. No added sugar, fiber slows glucose absorption.", url: "https://www.amazon.com/dp/B07NRPGD9N" },
      { name: "Freeze-Dried Fruit Variety (Strawberries & Tangerines)", brand: "Claros Farm", health: "Preserves nutrients without additives — clean snacking at its best.", url: "https://www.amazon.com/dp/B0GM1TN9LG" },
      { name: "Freeze-Dried Fig Slices", brand: "Drybox", health: "Nutrient-dense dried figs with no additives or preservatives.", url: "https://www.amazon.com/dp/B0FCGDS5LW" },
      { name: "Freeze-Dried Fruit Variety Pack", brand: "Crispy Green", health: "Single-ingredient freeze-dried fruit snacks — nothing added, nothing removed.", url: "https://www.amazon.com/dp/B0CY8VQXHQ" },
      { name: "Organic Freeze-Dried Strawberries", brand: "Panfruit", health: "100% organic strawberries, freeze-dried to preserve vitamins and antioxidants.", url: "https://www.amazon.com/dp/B0D9KXHQZQ" },
      { name: "Natural Whole Pitted Olives", brand: "Poshi", health: "Whole pitted olives as healthy snacks — keto and vegan friendly, rich in healthy fats.", url: "https://www.amazon.com/dp/B00R8352XW" },
      { name: "Rosemary Olive Oil Organic Flatbread", brand: "Rustic Bakery", health: "Organic artisan flatbread with rosemary and olive oil.", url: "https://www.amazon.com/dp/B00TJ5CHSK" },
      { name: "Seed Crackers", brand: "Simple Mills", health: "Seed-based crackers — grain-free, clean ingredients, no seed oils.", url: "https://www.amazon.com/dp/B08KT73KXT" },
      { name: "Avocado Oil Potato Chips", brand: "MARK'S", health: "Kettle-cooked in avocado oil instead of seed oils — clean chip alternative.", url: "https://www.amazon.com/dp/B0DFXVQZ8P" },
      { name: "Vandy Crisps Potato Chips", brand: "Vandy", health: "Seed-oil-free chips made with tallow — the ancestral cooking fat.", url: "https://www.amazon.com/dp/B0F9MRJ1LL" },
      { name: "Atlas Real Food Protein Bar", brand: "Atlas", health: "20g clean protein bar with no seed oils — real food ingredients only.", url: "https://www.amazon.com/dp/B0C4KXQJ8P" },
      { name: "Crispy Roasted Edamame", brand: "Biena", health: "Plant-based protein snack roasted without seed oils — crunchy and satisfying.", url: "https://www.amazon.com/dp/B0CY8VQXHP" },
      { name: "Marmarabirlik Black Olives", brand: "Marmarabirlik", health: "Premium Turkish black olives — rich in healthy monounsaturated fats and polyphenols.", url: "https://www.amazon.com/dp/B00D8DYFGQ" },
    ],
  },
  {
    id: "healthy-beverages",
    title: "Healthy Beverages",
    icon: "Droplet",
    philosophy: "Hydration is the foundation. We stock sparkling waters made with real fruit, premium spring water in glass bottles, and mineral-rich options that make staying hydrated effortless and enjoyable.",
    products: [
      { name: "Mountain Valley Spring Water (Glass, 33oz)", brand: "Mountain Valley", health: "Sourced from a protected spring since 1871. Naturally alkaline with balanced mineral content. Glass bottles.", url: "https://www.amazon.com/dp/B07GJPG6HW" },
      { name: "Mountain Valley Spring Water (Glass, 16oz)", brand: "Mountain Valley", health: "Premium natural spring water in glass bottles — mineral-rich hydration.", url: "https://www.amazon.com/dp/B07ZPGDC77" },
      { name: "S.Pellegrino Sparkling Mineral Water", brand: "S.Pellegrino", health: "Premium natural mineral water with trace minerals from Italian Alps.", url: "https://www.amazon.com/dp/B07G6KHNXH" },
      { name: "La Croix Sparkling Water (Grapefruit)", brand: "La Croix", health: "Zero calorie, zero sweetener sparkling water with natural flavors.", url: "https://www.amazon.com/dp/B00EEN4OI8" },
      { name: "La Croix Sparkling Water (Lemon)", brand: "La Croix", health: "Zero calorie, zero sweetener sparkling water with natural flavors.", url: "https://www.amazon.com/dp/B00O79SKCU" },
      { name: "La Croix Sparkling Water (Strawberry Peach)", brand: "La Croix", health: "Zero calorie, zero sweetener sparkling water with natural flavors.", url: "https://www.amazon.com/dp/B0DKG4KR1V" },
      { name: "Spindrift Lemonade Variety Pack", brand: "Spindrift", health: "Made with real squeezed fruit — no artificial sweeteners or flavors.", url: "https://www.amazon.com/dp/B09NYBTP1N" },
      { name: "Spindrift Sparkling Water", brand: "Spindrift", health: "Sparkling water made with real squeezed fruit — clean and refreshing.", url: "https://www.amazon.com/dp/B07FCQKZ4F" },
      { name: "C2O Coconut Water (Mango)", brand: "C2O", health: "Fresh coconut water with natural electrolytes and mango flavor.", url: "https://www.amazon.com/dp/B07692NZXB" },
      { name: "C2O Coconut Water (Original)", brand: "C2O", health: "Pure coconut water — natural electrolytes and potassium for hydration.", url: "https://www.amazon.com/dp/B00FS35V1W" },
      { name: "C2O Organic Coconut Water", brand: "C2O", health: "USDA organic coconut water — clean hydration with natural minerals.", url: "https://www.amazon.com/dp/B0DX2MSXPV" },
      { name: "Re-Lyte Electrolyte Powder", brand: "REDMOND", health: "Clean electrolyte mix with real salt minerals — no sugar, no artificial ingredients.", url: "https://www.amazon.com/dp/B091BFQC9F" },
    ],
  },
  {
    id: "organic-foods",
    title: "Organic & Whole Foods",
    icon: "Leaf",
    philosophy: "Real food, minimal processing. From raw honey to grass-fed tallow chips, every pantry item is chosen for clean ingredients, honest sourcing, and nutrient density over convenience.",
    products: [
      { name: "Maldon Sea Salt Flakes", brand: "Maldon", health: "Hand-harvested pyramid crystals with a clean mineral profile. Trace minerals retained.", url: "https://www.amazon.com/dp/B00017028M" },
      { name: "Organic Raw & Unfiltered Honey", brand: "Nate's Honey", health: "USDA organic raw unfiltered honey — natural sweetener with enzymes and antioxidants.", url: "https://www.amazon.com/dp/B01IR6IZZA" },
      { name: "Nova Maple Cream", brand: "Nova Maple Syrup", health: "Pure grade-A maple cream — natural sweetener, no additives.", url: "https://www.amazon.com/dp/B01EM5XUO6" },
      { name: "Grain-Free Baking Powder", brand: "Otto's Naturals", health: "Grain-free, corn-free baking — AIP/Paleo friendly.", url: "https://www.amazon.com/dp/B09TG9LCKF" },
      { name: "Sodium Bicarbonate Powder", brand: "Prescribed For Life", health: "Organic aluminum-free baking soda — versatile health and household uses.", url: "https://www.amazon.com/dp/B07CNFGV5S" },
      { name: "Organic Coconut Milk", brand: "Califia Farms", health: "Organic plant-based dairy alternative — USDA certified.", url: "https://www.amazon.com/dp/B0FXCMYRQZ" },
    ],
  },
  {
    id: "herbal-medicine",
    title: "Herbal Medicine",
    icon: "Sparkles",
    philosophy: "Ancient plant medicine meets modern wellness. Ayurvedic herbs, bee propolis, dandelion root — these are the pharmacological tools that have sustained human health for millennia.",
    products: [
      { name: "Propolis Nasal Rinse Spray", brand: "Beekeeper's Naturals", health: "Bee propolis nasal spray — natural immune defense and sinus support.", url: "https://www.amazon.com/dp/B0BQ5JJWW4" },
      { name: "Mushroom Elixir Mix with Reishi", brand: "Four Sigmatic", health: "Reishi mushroom elixir for deep sleep and stress relief — adaptogenic nightcap.", url: "https://www.amazon.com/dp/B078WQXJ8P" },
    ],
  },
  {
    id: "crystals",
    title: "Crystals & Energy Tools",
    icon: "Gem",
    philosophy: "Whether you believe in crystal energy or not, the act of intentional placement and ritual creates psychological anchors for focus and calm. Sound healing bowls and crystals serve as environmental design elements that prompt mindfulness.",
    products: [
      { name: "Healing Crystal Wand Set (7 stones)", brand: "Luckeeper", health: "Amethyst, Rose Quartz, Clear Quartz, Black Obsidian, Green Fluorite, Lapis Lazuli, Rainbow Fluorite.", url: "https://www.amazon.com/dp/B07VP1QNLT" },
      { name: "Orgonite Crystal Wand Set", brand: "Ever Vibes", health: "Orgonite combines crystals with metal shavings. Used as meditation tools and desk objects.", url: "https://www.amazon.com/dp/B07VP1QNLT" },
      { name: "Blue Sodalite Tumbled Stones", brand: "MAIBAOTA", health: "Natural healing crystals for energy work and spiritual practice.", url: "https://www.amazon.com/dp/B0BWY744C8" },
      { name: "Tiger Eye Stones", brand: "MAIBAOTA", health: "Grounding stone with chatoyant optical effect. Used in decision-making rituals as a focus object.", url: "https://www.amazon.com/dp/B09TVX6GH8" },
      { name: "Premium Tibetan Singing Bowl Set", brand: "Himalayan Bazaar", health: "Sound healing therapy — vibrational frequency for meditation and chakra balancing.", url: "https://www.amazon.com/dp/B09N21ZD7B" },
      { name: "432Hz Crystal Singing Bowl Set (7 bowls)", brand: "Ryan Dvan", health: "Full chakra crystal singing bowl set tuned to 432Hz for deep sound healing.", url: "https://www.amazon.com/dp/B08CVSZWRC" },
    ],
  },
  {
    id: "body-care",
    title: "Natural Body Care",
    icon: "Sparkles",
    philosophy: "Your skin is your largest organ. Everything that touches it enters your bloodstream within 26 seconds. We stock only plant-based, chemical-free products that nourish rather than burden the body.",
    products: [
      { name: "Pure Castile Liquid Soap (Peppermint)", brand: "Brittanie's Thyme", health: "Organic, plant-based castile soap free of sulfates, parabens, and synthetic fragrances.", url: "https://www.amazon.com/dp/B0CKGJPS3F" },
      { name: "Organic Castile Liquid Soap (Olive Oil)", brand: "Brittanie's Thyme", health: "Pure olive oil base — biodegradable, vegan, and free of the 12 most common skin irritants.", url: "https://www.amazon.com/dp/B08QLCRDM9" },
      { name: "Goat Milk Soap with Honey", brand: "The Soap Haven", health: "Goat milk lactic acid + honey humectant. Handmade, SLS and paraben free.", url: "https://www.amazon.com/dp/B00SV62QWA" },
      { name: "Ruby Grapefruit Hand Soap", brand: "Everyone", health: "Plant-based cleanser with pure essential oils. EWG Verified for safety.", url: "https://www.amazon.com/dp/B085S7TSXK" },
      { name: "Biotin B-Complex Thickening Shampoo", brand: "Avalon Organics", health: "Organic biotin shampoo for hair health — plant-derived ingredients.", url: "https://www.amazon.com/dp/B008OL3UYK" },
      { name: "Hair/Skin/Nails Ultra Supplement", brand: "Pure Encapsulations", health: "Advanced beauty supplement with biotin, collagen, and hyaluronic acid.", url: "https://www.amazon.com/dp/B0063X0JL8" },
      { name: "Magnetic Bentonite Clay Bath", brand: "Enviromedica", health: "Detox bath therapy — draws out toxins through skin absorption.", url: "https://www.amazon.com/dp/B00X7RCW4A" },
    ],
  },
  {
    id: "sleep",
    title: "Organic Sleep & Textiles",
    icon: "Moon",
    philosophy: "You spend a third of your life in bed. The materials touching your skin for 8 hours nightly should be the cleanest in your home. Breathable, chemical-free, thermoregulating.",
    products: [
      { name: "LOFE Organic Pillow", brand: "LOFE", health: "100% organic cotton shell with adjustable loft. No pesticide residues or flame retardants.", url: "https://www.amazon.com/dp/B0BVFXJZ4S" },
      { name: "Bamboo Viscose Cooling Sheets", brand: "Sleep Sanctuary", health: "100% bamboo viscose — thermoregulating, wicks moisture 3x faster than cotton.", url: "https://www.amazon.com/dp/B0BVFXJZ4T" },
      { name: "Pure Bamboo Duvet Cover", brand: "Pure Bamboo", health: "100% organic viscose from bamboo. Temperature-regulating and softer than 400-thread-count cotton.", url: "https://www.amazon.com/dp/B0BVFXJZ4U" },
    ],
  },
  {
    id: "water-wellness",
    title: "Water & Wellness Infrastructure",
    icon: "Droplet",
    philosophy: "Water quality is the foundation of biological health. We filter what touches our skin, purify what we drink, and choose glass over plastic.",
    products: [
      { name: "AquaBliss Shower Filter", brand: "AquaBliss", health: "Removes chlorine, heavy metals, and sediment from shower water.", url: "https://www.amazon.com/dp/B01MUBU0YC" },
      { name: "Cobbe Filtered Shower Head", brand: "Cobbe", health: "20-stage filtration removes chlorine, fluoride, and heavy metals.", url: "https://www.amazon.com/dp/B0BVFXJZ4V" },
      { name: "LUXE Bidet NEO 185", brand: "LUXE Bidet", health: "Dual-nozzle bidet reduces toilet paper use by 80% with superior hygiene.", url: "https://www.amazon.com/dp/B00A0RHSJO" },
      { name: "KIWIBIRD Water Flosser", brand: "KIWIBIRD", health: "Cordless oral irrigator with UVC sterilization. Oral health linked to cardiovascular health.", url: "https://www.amazon.com/dp/B0F18SLN5B" },
      { name: "BLUEAIR Air Purifier", brand: "BLUEAIR", health: "HEPA air purification for allergens, dust, and indoor air quality.", url: "https://www.amazon.com/dp/B08KPJ76RR" },
    ],
  },
  {
    id: "clean-living",
    title: "Clean Living & Non-Toxic Home",
    icon: "Leaf",
    philosophy: "The chemicals in conventional cleaners are among the most toxic substances in any home. We clean with plant-based formulas that protect both the humans inside and the ecosystem outside.",
    products: [
      { name: "Puracy Multi-Surface Cleaner", brand: "Puracy", health: "Plant-powered, biodegradable formula. Free of sulfates, chlorine, and synthetic fragrances.", url: "https://www.amazon.com/dp/B0DT6ZDMFJ" },
      { name: "Seventh Generation Disinfecting Cleaner", brand: "Seventh Generation", health: "Lemongrass citrus formula using thymol (from thyme oil) instead of synthetic biocides.", url: "https://www.amazon.com/dp/B0933MCB1J" },
      { name: "Seventh Generation Multi-Surface Wipes", brand: "Seventh Generation", health: "Plant-based cleaning wipes with essential oils — non-toxic home cleaning.", url: "https://www.amazon.com/dp/B0F7M5ZKZ3" },
      { name: "Branch Basics Concentrate Starter Kit", brand: "Branch Basics", health: "One concentrate replaces all cleaners — plant-based, fragrance-free, zero toxins.", url: "https://www.amazon.com/dp/B0CXQJ8PPP" },
      { name: "ECOLipak Bamboo Toilet Paper", brand: "ECOLipak", health: "Tree-free, non-toxic, dye-free. Bamboo grows 30x faster than trees with no pesticides.", url: "https://www.amazon.com/dp/B0DTJWY9PM" },
      { name: "ECOLipak Compostable Paper Plates", brand: "ECOLipak", health: "Plant-based compostable alternative to plastic — zero waste.", url: "https://www.amazon.com/dp/B09F368W46" },
      { name: "WaterWipes Baby Wipes", brand: "WaterWipes", health: "99.9% water wipes — minimal ingredients, hypoallergenic.", url: "https://www.amazon.com/dp/B008KJQMA0" },
      { name: "Repurpose Compostable Cold Cups", brand: "Repurpose", health: "100% plant-based compostable cups — zero plastic waste.", url: "https://www.amazon.com/dp/B00MCYIWX4" },
      { name: "Reusable Glass Straws Set", brand: "Foogwee", health: "Reusable glass straws — eliminates single-use plastic.", url: "https://www.amazon.com/dp/B0D9WS5DF9" },
    ],
  },
  {
    id: "kitchen",
    title: "Mindful Kitchen & Healthy Cooking",
    icon: "ChefHat",
    philosophy: "The kitchen is the pharmacy of the biological founder. We chose non-toxic cookware, glass storage, and natural wood — materials that do not leach chemicals into the food that becomes your body.",
    products: [
      { name: "Caraway Non-Toxic Ceramic Cookware Set", brand: "Caraway", health: "Non-toxic ceramic-coated cookware — no PTFE, PFOA, or other chemicals leaching into food.", url: "https://www.amazon.com/dp/B08KXQJ8PP" },
      { name: "Non-Stick Ceramic Baking Sheet Set", brand: "BRONYPRO", health: "Non-toxic ceramic bakeware — PFOA/PTFE free cooking.", url: "https://www.amazon.com/dp/B0D5YHNRGM" },
      { name: "Glass Storage Containers with Lids", brand: "ComSaf", health: "Glass food storage — eliminates plastic containers and BPA exposure.", url: "https://www.amazon.com/dp/B0CV3W2CG8" },
      { name: "Glass Meal Prep Containers (10-Pack)", brand: "M MCIRCO", health: "Glass meal prep — no chemical migration regardless of temperature.", url: "https://www.amazon.com/dp/B0CY8VQXHR" },
      { name: "GreenWorks Compostable Plates", brand: "GreenWorks", health: "Unbleached bamboo fiber plates — fully compostable and free of PFAS coatings.", url: "https://www.amazon.com/dp/B0B9HDFDVN" },
      { name: "Unbleached Parchment Paper", brand: "AMFOCUS", health: "Unbleached parchment for clean baking — no chemicals.", url: "https://www.amazon.com/dp/B0C6KDWL3W" },
      { name: "Traeger Ironwood 885 Grill", brand: "Traeger", health: "All-natural wood pellet grill for clean smoke cooking.", url: "https://www.amazon.com/dp/B0822BJSSJ" },
      { name: "Traeger Signature Blend Wood Pellets", brand: "Traeger", health: "100% all-natural wood pellets — no fillers, binders, or additives.", url: "https://www.amazon.com/dp/B0DHJ4TY4L" },
    ],
  },
  {
    id: "biohacking",
    title: "Biohacking & Wellness Tech",
    icon: "Sparkles",
    philosophy: "Technology in service of biology. From grounding sheets to sleep trackers, these tools help you measure, optimize, and recover — turning wellness from guesswork into data-driven practice.",
    products: [
      { name: "Hooga Grounding Mat", brand: "Hooga", health: "Conductive carbon mat connects the body to Earth's electrical field. Reduces cortisol and inflammation.", url: "https://www.amazon.com/dp/B07VSRK68V" },
      { name: "Premium Grounding Sheet", brand: "Premium Grounding", health: "Silver-threaded organic cotton sheet for earthing during sleep — grounded all night.", url: "https://www.amazon.com/dp/B0CXKZQJ8P" },
      { name: "Hooga Red Light Therapy Panel", brand: "Hooga", health: "Red and near-infrared light therapy for cellular repair, skin health, and recovery.", url: "https://www.amazon.com/dp/B0CGC8HB5P" },
      { name: "Oura Ring Gen 4", brand: "Oura", health: "Gold standard sleep and HRV tracker — tracks readiness, sleep stages, and recovery.", url: "https://www.amazon.com/dp/B0DH8KXQZP" },
      { name: "Theragun Mini 3.0", brand: "Therabody", health: "Portable percussive therapy for muscle recovery — used by biohackers and athletes.", url: "https://www.amazon.com/dp/B0DKXQJ8PP" },
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
  const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV"];

  return (
    <section id={category.id} className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
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

  const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV"];

  const totalProducts = useMemo(
    () => CATEGORIES.reduce((sum, cat) => sum + cat.products.length, 0),
    []
  );

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

      {/* Table of Contents */}
      <section className="py-8">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <button
              className={`${T.label} flex items-center gap-2 mb-6 hover:text-foreground/60 transition-colors cursor-pointer`}
              onClick={() => setTocOpen(!tocOpen)}
            >
              Table of Contents
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-300 ${tocOpen ? "rotate-180" : ""}`}
              />
            </button>

            {tocOpen && (
              <motion.div
                className="border-l border-foreground/10 pl-6 space-y-1"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                {CATEGORIES.map((cat, i) => (
                  <TOCItem
                    key={cat.id}
                    number={romanNumerals[i]}
                    title={cat.title}
                    id={cat.id}
                  />
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Categories */}
      {CATEGORIES.map((category, i) => (
        <CategorySection
          key={category.id}
          category={category}
          index={i}
          philosophyOverride={category.id === "kitchen" ? copy.curatedKitchenPhilosophy : undefined}
        />
      ))}

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
              <p className="text-center text-foreground/25 text-sm mt-16">
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
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
