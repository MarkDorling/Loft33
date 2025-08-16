// app/materials/_data.tsx
export type Material = {
  slug: string;
  name: string;
  category: 'Fabrics' | 'Mesh' | 'Clear vinyl' | 'Thread' | 'Zippers & hardware' | 'Fasteners';
  tagline: string;
  intro: string;
  bestFor: string[];
  whyWeUseIt: string[];
  tradeOffs: string[];
  care?: string[];
};

export const materials: readonly Material[] = [
  {
    slug: 'weathermax',
    name: 'WeatherMax',
    category: 'Fabrics',
    tagline: 'Lightweight, tough canvas that stays tight and breathes.',
    intro:
      'Cutting-edge marine canvas engineered to resist UV, salt and temperature extremes. Slight elastic recovery keeps covers tight without bagging. Highly water-repellent yet breathable to reduce moisture build-up.',
    bestFor: ['Boat covers', 'Biminis', 'Enclosures', 'All-weather protection'],
    whyWeUseIt: [
      'Excellent UV stability and colourfastness',
      'Doesn’t sag; retains shape under load',
      'Water-repellent + breathable for mildew control',
      'Handles heat, cold and salt without cracking',
    ],
    tradeOffs: [
      'More technical look/hand than traditional acrylics',
      'Needs correct tensioning to show its best',
    ],
    care: ['Rinse salt regularly', 'Mild soap only', 'No harsh solvents or pressure washers'],
  },
  {
    slug: 'sunbrella',
    name: 'Sunbrella',
    category: 'Fabrics',
    tagline: 'The marine acrylic benchmark: classic look, serious longevity.',
    intro:
      '100% solution-dyed acrylic with colour all the way through the fibre. Soft woven hand, highly UV-stable and breathable. A proven standard for marine canvas and upholstery.',
    bestFor: ['Covers & biminis', 'Sail covers', 'Exterior upholstery', 'Sun shades'],
    whyWeUseIt: [
      'Outstanding fade resistance',
      'Breathable woven comfort with durable handle',
      'Massive colour range with dependable supply',
      'Stable: minimal shrink/stretch over time',
    ],
    tradeOffs: [
      'Heavier than some technical canvases',
      'Needs periodic cleaning to maintain repellency',
    ],
    care: ['Brush off loose dirt', 'Mild soap + water', 'Reproof occasionally with fabric guard'],
  },
  {
    slug: 'serge-ferrari-stamoid',
    name: 'Serge Ferrari — Stamoid',
    category: 'Fabrics',
    tagline: 'Vinyl-coated fabric for fully waterproof, crisp enclosures.',
    intro:
      'High-tenacity polyester coated both sides for absolute weatherproofing and dimensional stability. Smooth, dirt-repellent surface; strong UV and mildew resistance.',
    bestFor: ['Enclosures', 'Helm/console covers', 'Weather cloths', 'Sprayhoods'],
    whyWeUseIt: [
      'Truly waterproof with clean, modern finish',
      'Stable in heat/cold; resists shrink/expand',
      'Easy to wipe clean; resists mildew growth',
      'Available in multiple weights for the job',
    ],
    tradeOffs: [
      'Less breathable than woven canvas',
      'Vinyl look isn’t for everyone',
    ],
    care: ['Wipe with fresh water', 'Neutral detergent only', 'Avoid abrasives/solvents'],
  },
  {
    slug: 'serge-ferrari-batyline',
    name: 'Serge Ferrari — Batyline',
    category: 'Mesh',
    tagline: 'Premium open-weave mesh for seating and airy shades.',
    intro:
      'PVC-coated polyester mesh with exceptional tensile and abrasion strength. Dimensional stability prevents sagging; quick-drying and UV-stable.',
    bestFor: ['Sling seating', 'Sunshades', 'Catamaran trampolines', 'Ventilated panels'],
    whyWeUseIt: [
      'High strength without stretch or bagging',
      'Breathable and stays cooler in sun',
      'Fast drying and easy to clean',
    ],
    tradeOffs: ['See-through aesthetic', 'Edges require correct finishing for longevity'],
    care: ['Hose down regularly', 'Soft brush + mild soap', 'Avoid sharp creasing'],
  },
  {
    slug: 'tenara',
    name: 'Gore™ Tenara Thread (PTFE)',
    category: 'Thread',
    tagline: 'Lifetime stitching—UV, salt and chemical proof.',
    intro:
      'ePTFE thread that won’t degrade in sunlight, salt or chemicals. The seam lasts as long as the fabric—ideal when you never want to restitch.',
    bestFor: ['Premium covers', 'High-UV exposure jobs', '“Fit and forget” projects'],
    whyWeUseIt: [
      'Immune to UV rot and hydrolysis',
      'Doesn’t absorb water; no mildew',
      'Remains strong and flexible in heat/cold',
    ],
    tradeOffs: ['Higher material cost vs. UV polyester', 'Requires correct machine setup/tension'],
    care: ['No special care—just care for the fabric'],
  },
  {
    slug: 'ykk',
    name: 'YKK Zippers & Hardware',
    category: 'Zippers & hardware',
    tagline: 'The marine zipper standard—reliable in salt and sun.',
    intro:
      'We specify YKK (often Vislon® molded teeth) for smooth running, corrosion-resistant operation. UV-stabilised components handle sun and salt without seizing.',
    bestFor: ['Enclosures & clears', 'Cushions', 'Covers with access panels'],
    whyWeUseIt: [
      'Corrosion-proof molded teeth (no green metal rot)',
      'Self-lubricating glide, even with grit/salt',
      'Strong, consistent lock—no zipper creep',
    ],
    tradeOffs: ['Correct sizing matters (#10 for structure, #5 for light access)'],
    care: ['Rinse after salt', 'Occasional zipper lubricant (silicone-safe)'],
  },
  {
    slug: 'regalite',
    name: 'Regalite Clear Vinyl',
    category: 'Clear vinyl',
    tagline: 'Marine-grade press-polished PVC with crisp visibility.',
    intro:
      'Clear, flexible PVC sheets (commonly 0.75–1.0 mm / 30–40 ga) with smooth polished faces for good optical quality. Balanced clarity, durability and value.',
    bestFor: ['Side curtains', 'Aft covers', 'Dodgers'],
    whyWeUseIt: [
      'Clear view with minimal distortion',
      'Flexible and easy to handle/roll',
      'Solid UV inhibitors for marine use',
    ],
    tradeOffs: [
      'All PVC will slowly yellow/haze with years of UV',
      'Scratch-prone vs. coated premium clears',
    ],
    care: [
      'Rinse dust first',
      'Use specifically labelled clear-vinyl cleaners',
      'Soft microfibre only—no paper towels',
    ],
  },
  {
    slug: 'strataglass',
    name: 'Strataglass Premium Clear',
    category: 'Clear vinyl',
    tagline: 'Top-tier coated clear vinyl—near-glass clarity, tougher surface.',
    intro:
      'Press-polished PVC with a proprietary scratch-resistant, UV-protective coating (e.g., VueShield™). Delivers excellent optical clarity and longer service life.',
    bestFor: ['Front windscreens', 'Large, high-visibility panels', 'Premium enclosures'],
    whyWeUseIt: [
      'Superior clarity with reduced glare',
      'Coating resists fine scratches and hazing',
      'Better UV stability for long-term transparency',
    ],
    tradeOffs: [
      'Higher cost vs. standard clears',
      'Use only approved cleaners to preserve coating',
    ],
    care: [
      'Rinse first; use Strataglass-approved cleaners',
      'Store flat/loose—avoid tight rolls in heat',
    ],
  },
  {
    slug: 'achilles-rollglass',
    name: 'Achilles Rollglass',
    category: 'Clear vinyl',
    tagline: 'Japanese-engineered clear PVC with standout optical finish.',
    intro:
      'Extruded and polished clear PVC known for excellent transparency and UV resistance. Stays flexible and strong with minimal distortion.',
    bestFor: ['Marine enclosures', 'Spray dodgers', 'Patio clears'],
    whyWeUseIt: [
      'Crystal-clear view; low waviness',
      'Good UV inhibitors; resists yellowing',
      'Substantial “glass-like” look in thicker gauges',
    ],
    tradeOffs: ['Heavier feel in thicker sheets', 'Premium price vs. value clears'],
    care: ['Rinse first', 'Dedicated clear-vinyl cleaners', 'Avoid ammonia and solvents'],
  },
  {
    slug: 'dot-fasteners',
    name: 'DOT® Fasteners',
    category: 'Fasteners',
    tagline: 'Marine-proven snaps that don’t quit.',
    intro:
      'Durable™, Lift-the-DOT® and Common Sense® fasteners in corrosion-resistant brass/stainless. Industry standard for holding canvas under load.',
    bestFor: ['Covers & tonneaus', 'Cushions', 'Enclosures under tension'],
    whyWeUseIt: [
      'Corrosion-resistant alloys for marine life',
      'Consistent, heavy-duty engagement',
      'Options for one-way release or twist-locks',
    ],
    tradeOffs: ['Needs correct setting tools and backing to avoid pull-through'],
    care: ['Fresh-water rinse', 'Occasional snap lube to prevent galling'],
  },
  {
    slug: 'tenax',
    name: 'Tenax Fasteners',
    category: 'Fasteners',
    tagline: 'Self-locking studs for high-security canvas.',
    intro:
      'Locking push-button fasteners widely used in European marine/automotive. Secure hold that won’t release by accident; quick intentional removal.',
    bestFor: ['High-load covers', 'Tonneaus on trailers', 'Wind-exposed panels'],
    whyWeUseIt: [
      'Positive lock—won’t pop off with flapping',
      'Clean, low-profile hardware aesthetic',
      'Available in corrosion-resistant finishes',
    ],
    tradeOffs: ['Slightly slower on/off than press-stud snaps', 'Requires precise alignment'],
    care: ['Keep grit out of mechanisms', 'Periodic check of studs for tightness'],
  },
] as const;

export const categoriesInOrder: readonly Material['category'][] = [
  'Fabrics',
  'Mesh',
  'Clear vinyl',
  'Thread',
  'Zippers & hardware',
  'Fasteners',
];
