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
}

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
    philosophy: "The delivery system matters as much as the oil. Waterless nebulizing diffusers preserve the full molecular complexity of essential oils — no heat degradation, no dilution, just pure therapeutic vapor.",
    products: [
      { name: "Waterless Nebulizing Diffuser", brand: "Airversa", health: "Nebulizing technology breaks oils into micro-fine particles without heat or water, preserving all therapeutic compounds. Battery-operated for placement anywhere in the house." },
      { name: "Professional Nebulizing Diffuser", brand: "Minidiva", health: "Full-spectrum oil diffusion without water or heat. Nebulizing preserves volatile compounds like terpenes and phenols that are destroyed by ultrasonic or heat-based diffusers." },
    ],
  },
  {
    id: "teas",
    title: "Teas & Herbal Infusions",
    icon: "Leaf",
    philosophy: "Tea is not a beverage — it's a ritual of presence. Every cup is a micro-meditation. We source teas that are both ancient medicine and daily ceremony.",
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
    id: "coffee",
    title: "Mindful Coffee",
    icon: "Coffee",
    philosophy: "Coffee is the founder's sacrament — but we choose it intentionally. Mushroom-enhanced blends for neurotropic benefits, Turkish preparation for ritual, and high-quality beans for clean energy without the crash.",
    products: [
      { name: "Mushroom Coffee K-Cups", brand: "Kalba", health: "Infused with Lion's Mane (neurogenesis), Chaga (immune modulation), Turkey Tail (gut health), and Nigella Sativa (anti-inflammatory). Functional coffee that supports cognition beyond caffeine." },
      { name: "Arzum Okka Turkish Coffee Maker", brand: "Arzum Okka", health: "Turkish coffee retains the grounds, delivering higher concentrations of chlorogenic acid (a potent antioxidant) and cafestol. The slow preparation ritual itself reduces cortisol." },
      { name: "Arzum Tea Tock Turkish Tea Maker", brand: "Arzum", health: "Double-kettle system for traditional Turkish tea preparation. The slow steeping process extracts maximum polyphenols while the ritual of preparation creates mindful transitions between work sessions." },
      { name: "Kurukahveci Mehmet Efendi Turkish Coffee", brand: "Kurukahveci Mehmet Efendi", health: "Since 1871. Ultra-fine ground Arabica beans. Turkish coffee's unfiltered preparation preserves diterpenes (cafestol and kahweol) which have anti-cancer and anti-inflammatory properties." },
      { name: "Death Wish Coffee Variety Pack", brand: "Death Wish Coffee", health: "High-caffeine, USDA organic and Fair Trade certified. For founders who need sustained energy — the organic certification ensures no pesticide residues that disrupt endocrine function." },
      { name: "INTASTING Glass Electric Tea Kettle", brand: "INTASTING", health: "Borosilicate glass with precise temperature control. Glass eliminates BPA and microplastic concerns from plastic kettles. Temperature precision ensures optimal extraction of tea compounds." },
      { name: "Cosori Electric Kettle", brand: "COSORI", health: "Borosilicate glass body with no plastic contact points on the water path. Eliminates chemical leaching concerns while providing rapid, precise heating for optimal tea and coffee preparation." },
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
      { name: "Propolis Nasal Rinse Spray", brand: "Beekeeper's Naturals", health: "Bee propolis contains over 300 bioactive compounds including pinocembrin (neuroprotective flavonoid). Combined with eucalyptus and oregano for sinus health and immune defense." },
    ],
  },
  {
    id: "natural-sweeteners",
    title: "Natural Sweeteners & Whole Foods",
    icon: "Honey",
    philosophy: "Sugar is inflammatory. We replace it with foods that nourish — raw honey for its enzymes, maple cream for its minerals, and whole dried fruit for its fiber-bound sweetness.",
    products: [
      { name: "Nate's Organic Raw Unfiltered Honey", brand: "Nate's Honey", health: "USDA organic, raw and unfiltered — preserving bee pollen, propolis, and live enzymes destroyed by pasteurization. Contains hydrogen peroxide and methylglyoxal for natural antimicrobial activity." },
      { name: "Nova Maple Cream", brand: "Nova Maple Syrup", health: "Pure Grade-A maple cream contains 65+ polyphenols and is rich in manganese (bone health) and zinc (immune function). Lower glycemic index than refined sugar with actual nutritional value." },
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
      { name: "Biotin B-Complex Thickening Shampoo", brand: "Avalon Organics", health: "Biotin (B7) supports keratin infrastructure for hair strength. B-complex vitamins nourish hair follicles. Free of sulfates, parabens, and phthalates that strip natural oils and disrupt hormones." },
      { name: "Dried Rose Petals and Buds", brand: "OneDove", health: "Food-grade rose petals for tea, baths, and aromatherapy. Rose contains geraniol and citronellol — compounds shown to reduce cortisol and promote parasympathetic nervous system activation." },
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
      { name: "Green Tea Memory Foam Mattress", brand: "Zinus", health: "Infused with green tea extract (natural antioxidant) and activated charcoal to absorb moisture and odors. CertiPUR-US certified foams — free of formaldehyde, mercury, and other heavy metals." },
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
  return (
    <div className="group py-6 border-b border-foreground/5 last:border-b-0">
      <div className="flex flex-col gap-2">
        <div className="flex items-baseline gap-3">
          <h4 className={`${T.s} text-foreground/90 font-medium`}>{product.name}</h4>
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
          </div>
        </div>
      </section>
    </div>
  );
}
