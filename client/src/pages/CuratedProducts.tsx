/*
  CURATED PRODUCTS — The Biological Founder's Pharmacy
  Every product in the house was chosen for a reason.
  This page tells the story of why.
  Same dictionary-definition typography as the rest of the site.
*/

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X, ChevronDown, Droplets, Wind, Leaf, Coffee, Pill, Sparkles, Gem, Moon, Droplet, ChefHat, Dumbbell } from "lucide-react";
import { Link } from "wouter";
import { useState, useMemo } from "react";

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
  Droplets, Wind, Leaf, Coffee, Pill, Sparkles, Gem, Moon, Droplet, ChefHat, Dumbbell,
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

// Amazon product links
const AMAZON_LINKS: Record<string, string> = {
  "Frankincense Essential Oil": "https://www.amazon.com/Majestic-Pure-Frankincense-Essential-Natural/dp/B07PRDSY6J",
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
  "Neoprene Dumbbell (10lb)": "https://www.amazon.com/dp/B01D20PUWW",
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
      { name: "Frankincense Essential Oil", brand: "Majestic Pure", health: "Used for millennia in meditation traditions. Contains boswellic acids that reduce inflammation and support immune function. Studies show it activates TRPV3 ion channels in the brain, producing calming effects." },
      { name: "Rosemary Essential Oil", brand: "Majestic Pure", health: "Clinically shown to improve memory and cognitive performance by up to 75% in aroma exposure studies. Contains 1,8-cineole which increases acetylcholine, the neurotransmitter of learning." },
      { name: "Peppermint Essential Oil", brand: "Majestic Pure", health: "Activates cold-sensitive receptors that increase alertness. Research shows inhaling peppermint improves sustained attention, memory, and physical performance during demanding tasks." },
      { name: "Lemongrass Essential Oil", brand: "Majestic Pure", health: "Natural anxiolytic with antimicrobial properties. Contains citral, which has been shown to reduce cortisol levels and modulate GABA receptors for stress relief." },
      { name: "Lemon Essential Oil", brand: "Majestic Pure", health: "Limonene-rich oil shown to elevate mood and reduce anxiety. Japanese studies found lemon aroma normalizes stress hormone levels and boosts immune function via NK cell activity." },
      { name: "Cedarwood Essential Oil", brand: "Majestic Pure", health: "Contains cedrol, which research shows increases parasympathetic nervous system activity — the 'rest and digest' state. Traditionally used to promote deep, restorative sleep." },
      { name: "Geranium Essential Oil", brand: "Majestic Pure", health: "Balances hormonal fluctuations and reduces anxiety. Studies show it lowers systolic blood pressure and respiratory rate during stressful situations." },
      { name: "Basil Essential Oil", brand: "Majestic Pure", health: "Adaptogenic oil containing linalool and eugenol. Research demonstrates it reduces mental fatigue and improves cognitive clarity — the 'holy basil' of aromatherapy." },
      { name: "Meditation Essential Oil Set", brand: "Majestic Pure", health: "Curated blend of Rosemary, Sandalwood, Clary Sage, and Patchouli — each targeting different aspects of meditative states from grounding to transcendence." },
    ],
  },
  {
    id: "diffusers",
    title: "Essential Oil Diffusers",
    icon: "Wind",
    philosophy: "The delivery system matters as much as the oil. Most diffusers use ultrasonic vibration or heat to disperse oils — both methods degrade the delicate terpenes, phenols, and sesquiterpenes that make essential oils therapeutic. Waterless nebulizing diffusers use pressurized air to shatter oils into micro-fine particles, preserving the full molecular complexity. No water dilution, no heat degradation — just pure, concentrated therapeutic vapor that saturates a room in minutes. This is pharmaceutical-grade aromatherapy.",
    products: [
      { name: "Waterless Nebulizing Diffuser", brand: "Airversa", health: "Uses Bernoulli's principle to atomize pure essential oil into particles under 3 microns — small enough to remain suspended in air for hours and penetrate deep into the respiratory system. No water means no mold risk, no bacterial growth, and no diluted output. Battery-operated and whisper-quiet for placement in meditation rooms, bedrooms, or workspaces without disruption." },
      { name: "Professional Nebulizing Diffuser", brand: "Minidiva", health: "Clinical-grade nebulization that preserves the complete volatile compound profile — including monoterpenes (limonene, pinene), sesquiterpenes (chamazulene), and phenols (eugenol, thymol) that are destroyed above 40°C by heat-based diffusers. Adjustable output intensity lets you micro-dose aromatherapy throughout the day or saturate a room for deep meditation sessions." },
    ],
  },
  {
    id: "teas",
    title: "Teas & Herbal Infusions",
    icon: "Leaf",
    philosophy: "Tea is not a beverage — it's a ritual of presence. Every cup is a micro-meditation. The compounds in these teas — L-theanine, polyphenols, adaptogens — don't just protect the body. They sharpen the mind. When inflammation drops, when blood sugar stabilizes, when the gut-brain axis is nourished, cognition deepens. Better health means better deep thinking. Better deep thinking means better prompts, better code, better decisions. We source teas that are both ancient medicine and daily cognitive infrastructure.",
    products: [
      { name: "Butterfly Pea Flower Tea", brand: "Blue Tea / Real Naturals", health: "Rich in anthocyanins — the same antioxidants found in blueberries. Traditionally used in Ayurveda to enhance memory and neural function. Contains proanthocyanidins that cross the blood-brain barrier." },
      { name: "Dandelion Root Tea", brand: "U.S. Wellness Naturals", health: "Powerful liver detoxifier containing taraxacin and inulin. Supports bile production, acts as a prebiotic for gut microbiome health, and provides potassium for electrolyte balance." },
      { name: "Soursop Leaves Tea (Guanábana)", brand: "B-Experts", health: "Contains acetogenins studied for their potent antioxidant properties. Traditional Caribbean medicine uses soursop leaves for immune support, sleep quality, and inflammation reduction." },
      { name: "Çaykur Rize Turkish Black Tea", brand: "Çaykur", health: "Grown in the mineral-rich Black Sea region of Turkey. High in L-theanine which promotes alpha brain waves — the state of calm alertness. Turkish tea culture emphasizes slow, social consumption." },
      { name: "Organic Whole Coriander Seeds", brand: "Spicy Organic", health: "Rich in linalool, a compound with anxiolytic and neuroprotective properties. Ayurvedic medicine uses coriander to cool inflammation and support digestion." },
      { name: "Organic Ceylon Cinnamon Sticks", brand: "52USA", health: "True Ceylon cinnamon (not cassia) contains cinnamaldehyde which improves insulin sensitivity and blood sugar regulation. Low in coumarin, making it safe for daily use." },
      { name: "Whole Cloves", brand: "Anthony's Organic", health: "Highest ORAC antioxidant score of any spice. Contains eugenol, a powerful anti-inflammatory and analgesic. Traditional medicine uses cloves for oral health and digestive support." },
      { name: "Star Anise", brand: "52USA", health: "The natural source of shikimic acid — the precursor to Tamiflu. Contains anethole with anti-fungal and anti-bacterial properties. Used in Traditional Chinese Medicine for digestive warming." },
      { name: "Tea Strainers for Loose Tea", brand: "Reinmoson", health: "304 stainless steel mesh for brewing loose-leaf teas without microplastic leaching from tea bags. Studies show many commercial tea bags release billions of microplastic particles per cup." },
    ],
  },
  {
    id: "supplements",
    title: "Supplements & Superfoods",
    icon: "Pill",
    philosophy: "We don't do pills — we do whole-food nutrition in concentrated form. Every supplement in the house is chosen for bioavailability, clean ingredients, and evidence-based formulation.",
    products: [
      { name: "GEM Daily Bite", brand: "GEM", health: "20+ vitamins and minerals from real food sources — not synthetic isolates. Contains zinc, vitamin D, B-complex, turmeric, fiber, prebiotics, and beta glucan for GLP-1 support and immunity." },
      { name: "GEM Energy Bite", brand: "GEM", health: "40mg caffeine from natural sources plus ginseng root and L-theanine for sustained energy without jitters. The L-theanine smooths caffeine's curve, promoting calm focus over anxious stimulation." },
      { name: "GEM Calm Bite", brand: "GEM", health: "Magnesium L-Threonate (the only form that crosses the blood-brain barrier), Golden Chlorella, and Lemon Balm. Non-habit forming support for mental clarity and stress resilience." },
      { name: "Organic Haritaki Capsules", brand: "Kailash Herbals", health: "Known as the 'King of Medicines' in Ayurveda. Terminalia chebula supports gut motility, cognitive function, and is rich in tannins with powerful antioxidant activity. Traditionally linked to 'third eye' awakening." },
      { name: "Organic Haritaki Powder", brand: "Jiva Organics", health: "USDA certified organic. Haritaki is one of three fruits in Triphala, the cornerstone of Ayurvedic detoxification. Contains chebulic acid, a potent free radical scavenger." },
    ],
  },
  {
    id: "natural-sweeteners",
    title: "Natural Sweeteners & Whole Foods",
    icon: "Honey",
    philosophy: "Sugar is inflammatory. We replace it with whole foods that nourish — fiber-bound fruit sweetness, mineral-rich sea salt, and single-ingredient snacks that satisfy without spiking blood glucose.",
    products: [
      { name: "Solely Organic Dried Mango", brand: "SOLELY", health: "Single ingredient — organic mango. Rich in vitamin C, beta-carotene, and digestive enzymes (amylases). No added sugar means the fiber slows glucose absorption, unlike juice or candy." },
      { name: "Maldon Sea Salt Flakes", brand: "Maldon", health: "Hand-harvested pyramid crystals with a clean mineral profile. Sea salt retains trace minerals (magnesium, potassium, calcium) stripped from table salt. The flake structure means you use less while tasting more." },
    ],
  },
  {
    id: "crystals",
    title: "Crystals & Energy Tools",
    icon: "Gem",
    philosophy: "Whether you believe in crystal energy or not, the act of intentional placement and ritual creates psychological anchors for focus and calm. We use crystals as environmental design elements that prompt mindfulness.",
    products: [
      { name: "Healing Crystal Wand Set (7 stones)", brand: "Luckeeper", health: "Amethyst (calming), Rose Quartz (heart-opening), Clear Quartz (clarity), Black Obsidian (grounding), Green Fluorite (focus), Lapis Lazuli (communication), Rainbow Fluorite (balance). Each stone serves as a tactile meditation anchor." },
      { name: "Orgonite Crystal Wand Set", brand: "Ever Vibes", health: "Orgonite combines crystals with metal shavings in resin. Used as desk objects and meditation tools — the tactile weight and visual beauty create micro-moments of presence during the workday." },
      { name: "Green Aventurine Tumbled Stones", brand: "MAIBAOTA", health: "Known as the 'Stone of Opportunity.' Used in workspace placement to create visual anchors for intention-setting. The green color itself has documented calming effects on the nervous system." },
      { name: "Citrine Crystals", brand: "MAIBAOTA", health: "Associated with solar plexus energy and creative confidence. Placed in workspaces as visual reminders of abundance mindset — a physical token for psychological priming." },
      { name: "Tiger Eye Stones", brand: "MAIBAOTA", health: "Grounding stone with chatoyant optical effect that naturally draws the eye, creating brief meditative pauses. Used in decision-making rituals as a tactile focus object." },
      { name: "Sacred Geometry Crystal Grid Boards", brand: "FINGERINSPIRE", health: "Metatron's Cube pattern for crystal arrangement. The geometric patterns serve as visual meditation tools — sacred geometry has been shown to activate the brain's pattern-recognition centers, inducing flow states." },
    ],
  },
  {
    id: "body-care",
    title: "Natural Body Care",
    icon: "Sparkles",
    philosophy: "Your skin is your largest organ. Everything that touches it enters your bloodstream within 26 seconds. We stock only plant-based, chemical-free products that nourish rather than burden the body.",
    products: [
      { name: "Pure Castile Liquid Soap (Peppermint)", brand: "Brittanie's Thyme", health: "Organic, plant-based castile soap free of sulfates, parabens, and synthetic fragrances. Peppermint oil provides natural antimicrobial action without endocrine-disrupting chemicals found in conventional soaps." },
      { name: "Organic Castile Liquid Soap (Unscented)", brand: "Brittanie's Thyme", health: "Pure olive oil base — the same formula used since the Crusades. Biodegradable, vegan, and free of the 12 most common skin irritants. Safe for sensitive skin and the environment." },
      { name: "Goat Milk Soap with Honey", brand: "The Soap Haven", health: "Goat milk contains lactic acid (gentle exfoliant), vitamins A and E, and fatty acids that repair the skin barrier. Honey adds humectant and antimicrobial properties. Handmade, SLS and paraben free." },
      { name: "Ruby Grapefruit Hand Soap", brand: "Everyone", health: "Plant-based cleanser with pure essential oils. EWG Verified for safety. Free of synthetic fragrances, parabens, and triclosan — chemicals linked to hormonal disruption and antibiotic resistance." },
    ],
  },
  {
    id: "sleep",
    title: "Organic Sleep & Textiles",
    icon: "Moon",
    philosophy: "You spend a third of your life in bed. The materials touching your skin for 8 hours nightly should be the cleanest in your home. We chose bamboo and organic cotton — breathable, chemical-free, thermoregulating.",
    products: [
      { name: "LOFE Organic Pillow", brand: "LOFE", health: "100% organic cotton shell with adjustable loft. Organic certification means no pesticide residues, flame retardants, or formaldehyde off-gassing — chemicals linked to respiratory issues and hormonal disruption during sleep." },
      { name: "Bamboo Viscose Cooling Sheets", brand: "Sleep Sanctuary", health: "100% bamboo viscose is naturally thermoregulating, wicking moisture 3x faster than cotton. Bamboo fiber is naturally hypoallergenic and antimicrobial, reducing dust mite populations." },
      { name: "Pure Bamboo Duvet Cover", brand: "Pure Bamboo", health: "Genuine 100% organic viscose from bamboo. Bamboo fabric is naturally temperature-regulating and softer than 400-thread-count cotton, promoting uninterrupted sleep cycles." },
      { name: "Serta Goose Feather Down Comforter", brand: "Serta", health: "100% cotton shell with natural goose feather fill. Hypoallergenic construction. Natural down provides superior temperature regulation compared to synthetic fills, supporting the body's circadian rhythm." },
    ],
  },
  {
    id: "water-wellness",
    title: "Water & Wellness Infrastructure",
    icon: "Droplet",
    philosophy: "Water quality is the foundation of biological health. We filter what touches our skin, purify what we drink, and choose glass over plastic. The infrastructure of wellness is invisible but essential.",
    products: [
      { name: "Mountain Valley Spring Water (Glass)", brand: "Mountain Valley", health: "Sourced from a protected spring in the Ouachita Mountains since 1871. Naturally alkaline (pH 7.3–7.7) with balanced mineral content. Glass bottles eliminate microplastic and BPA exposure." },
      { name: "AquaBliss Shower Filter", brand: "AquaBliss", health: "Removes chlorine, heavy metals, and sediment from shower water. Chlorine exposure through skin and inhalation during hot showers is linked to dry skin, eczema, and respiratory irritation." },
      { name: "Cobbe Filtered Shower Head", brand: "Cobbe", health: "20-stage filtration removes chlorine, fluoride, and heavy metals. High pressure design maintains water efficiency. Reduces the 'chlorine load' that accumulates through daily skin absorption." },
      { name: "LUXE Bidet NEO 185", brand: "LUXE Bidet", health: "Dual-nozzle bidet reduces toilet paper use by 80% and provides superior hygiene. Studies show bidets reduce UTI risk, hemorrhoid irritation, and are gentler on sensitive skin than paper." },
      { name: "KIWIBIRD Water Flosser", brand: "KIWIBIRD", health: "Cordless oral irrigator with UVC sterilization. Water flossing removes up to 99.9% of plaque from treated areas — oral health is directly linked to cardiovascular health and systemic inflammation." },
      { name: "Hooga Grounding Mat", brand: "Hooga", health: "Conductive carbon mat connects the body to Earth's electrical field. Peer-reviewed studies show grounding reduces blood viscosity, cortisol levels, and inflammation markers while improving sleep quality." },
    ],
  },
  {
    id: "clean-living",
    title: "Clean Living Products",
    icon: "Leaf",
    philosophy: "The chemicals in conventional cleaners are among the most toxic substances in any home. We clean with plant-based formulas that protect both the humans inside and the ecosystem outside.",
    products: [
      { name: "Puracy Multi-Surface Cleaner", brand: "Puracy", health: "Plant-powered, biodegradable formula. Free of sulfates, chlorine, and synthetic fragrances. Conventional cleaners contain VOCs linked to respiratory disease, hormonal disruption, and cancer risk." },
      { name: "Seventh Generation Disinfecting Cleaner", brand: "Seventh Generation", health: "Lemongrass citrus formula kills 99.99% of bacteria using thymol (from thyme oil) instead of synthetic biocides. Plant-based disinfection without the toxic residue of conventional products." },
      { name: "ECOLipak Bamboo Toilet Paper", brand: "ECOLipak", health: "Tree-free, non-toxic, dye-free. Conventional toilet paper can contain formaldehyde, chlorine bleach, and BPA from recycled thermal paper. Bamboo grows 30x faster than trees with no pesticides." },
      { name: "Betterway Bamboo Paper Towels", brand: "Betterway", health: "PFAS-free, plastic-free, compostable. Many conventional paper towels contain PFAS ('forever chemicals') for wet strength — linked to cancer, thyroid disease, and immune suppression." },
    ],
  },
  {
    id: "kitchen",
    title: "Mindful Kitchen",
    icon: "ChefHat",
    philosophy: "The kitchen is the pharmacy of the biological founder. We chose non-toxic cookware, glass storage, and wooden serving — materials that don't leach chemicals into the food that becomes your body.",
    products: [
      { name: "CAROTE Nonstick Cookware Set", brand: "CAROTE", health: "PFOS and PFOA free granite coating. Traditional nonstick cookware releases toxic perfluorinated compounds when heated. This set provides non-stick convenience without the forever-chemical burden." },
      { name: "Glass Storage Containers with Bamboo Lids", brand: "HomArtist", health: "High borosilicate glass with airtight bamboo lids. Eliminates BPA, phthalates, and microplastic leaching from plastic containers — especially dangerous when storing hot or acidic foods." },
      { name: "Glass Water Pitcher", brand: "Delove", health: "Borosilicate glass with stainless steel lid. Glass is the only food-contact material that is truly inert — no chemical migration regardless of temperature or acidity of contents." },
      { name: "Wooden Plates", brand: "FANICHI", health: "Acacia wood plates — naturally antimicrobial and free of synthetic coatings. Wood's natural tannins inhibit bacterial growth. Unbreakable and beautiful, encouraging slower, more mindful eating." },
      { name: "GreenWorks Compostable Plates", brand: "GreenWorks", health: "Unbleached bamboo fiber plates — fully compostable and free of PFAS coatings found in many 'eco-friendly' disposable plates. No chlorine bleaching means no dioxin residues." },
    ],
  },
  {
    id: "movement",
    title: "Movement & Fitness",
    icon: "Dumbbell",
    philosophy: "The body is the founder's first instrument. We keep weights accessible — not in a gym, but in the living space — because movement should be woven into the day, not scheduled around it.",
    products: [
      { name: "Neoprene Dumbbell (10lb)", brand: "Gaiam", health: "Resistance training increases bone density, improves insulin sensitivity, and boosts BDNF (brain-derived neurotrophic factor) — the protein that grows new neurons. Keeping weights visible reduces friction to movement." },
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
function CategorySection({ category, index }: { category: Category; index: number }) {
  const IconComponent = ICONS[category.icon] || Leaf;
  const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"];

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
            <p className={`${T.m} text-foreground/60 mb-10 italic`}>{category.philosophy}</p>
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tocOpen, setTocOpen] = useState(true);

  const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"];

  const totalProducts = useMemo(
    () => CATEGORIES.reduce((sum, cat) => sum + cat.products.length, 0),
    []
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <Link href="/" className={`${T.nav} font-body font-medium whitespace-nowrap`}>
            Vibe House <span className="text-foreground/40">SF</span>
          </Link>
          <div className="hidden md:flex items-center gap-10">
            <Link href="/why" className={`${T.nav} text-foreground/50 hover:text-foreground transition-colors duration-300`}>Why Now</Link>
            <Link href="/biological-founder" className={`${T.nav} text-foreground/50 hover:text-foreground transition-colors duration-300`}>Biological Founder</Link>
            <Link href="/biological-founder/curated-products" className={`${T.nav} text-foreground hover:text-foreground transition-colors duration-300`}>Curated Products</Link>
          </div>
          <div className="flex items-center gap-3">
            <Button asChild className={`bg-foreground text-background hover:bg-foreground/90 ${T.nav} rounded-full px-5 py-2`}>
              <Link href="/#join">Join our next event</Link>
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
              <Link href="/why" className={`${T.nav} text-foreground/50 hover:text-foreground transition-colors duration-300`} onClick={() => setMobileMenuOpen(false)}>
                Why Now
              </Link>
              <Link href="/biological-founder" className={`${T.nav} text-foreground/50 hover:text-foreground transition-colors duration-300`} onClick={() => setMobileMenuOpen(false)}>
                Biological Founder
              </Link>
              <Link href="/biological-founder/curated-products" className={`${T.nav} text-foreground hover:text-foreground transition-colors duration-300`} onClick={() => setMobileMenuOpen(false)}>
                Curated Products
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
              <Link href="/biological-founder" className={`${T.nav} text-foreground/40 hover:text-foreground transition-colors inline-flex items-center gap-2 mb-12`}>
                <ArrowLeft className="w-3 h-3" /> Back to Biological Founder
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
              The Founder's Pharmacy
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
        <CategorySection key={category.id} category={category} index={i} />
      ))}

      {/* Footer note */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Divider />
            <FadeIn>
              <p className={`${T.m} text-foreground/40 italic text-center`}>
                This catalog is a living document. As we discover better products, we update the house — and this page. The biological founder never stops optimizing the environment.
              </p>
            </FadeIn>
            <div className="flex justify-center mt-12">
              <Button asChild variant="outline" className={`${T.nav} rounded-full px-8 py-6 border-foreground/15 hover:bg-foreground/5`}>
                <Link href="/biological-founder">
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
                {" "}&{" "}
                <a
                  href="https://manus.im"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/40 hover:text-foreground transition-colors underline underline-offset-4"
                >
                  Manus
                </a>
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
