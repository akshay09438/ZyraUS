export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  body: { type: 'p' | 'h2' | 'h3' | 'blockquote'; text: string }[]
  date: string
  readTime: string
  category: string
  poster: string
  featured?: boolean
}

export const ALL_POSTS: BlogPost[] = [
  {
    slug: 'ai-brand-films-future',
    title: 'Why AI Brand Films Will Dominate Indian Marketing in 2026',
    excerpt: 'The economics are changing. OTT-level production is no longer a luxury, it\'s a competitive requirement.',
    date: 'March 2026',
    readTime: '5 min read',
    category: 'Industry',
    poster: 'https://picsum.photos/seed/blog1/1200/700',
    featured: true,
    body: [
      { type: 'p', text: 'Three years ago, a 60-second brand film cost ₹30–80 lakhs and took three months. Today, the same quality output costs ₹4–8 lakhs and takes two weeks. This is not a marginal improvement, it is a structural shift in how content gets made.' },
      { type: 'h2', text: 'The Production Cost Collapse' },
      { type: 'p', text: 'AI-assisted production compresses the most expensive parts of traditional filmmaking: pre-production visualisation, location scouting, talent fees, and post-production. What once required a 30-person crew and 6 weeks of post can now be achieved with a 5-person creative team and a well-trained AI pipeline.' },
      { type: 'p', text: 'The result is that brands who previously could only afford one brand film per year can now produce four, one per quarter, each tailored to a seasonal moment or campaign beat.' },
      { type: 'h2', text: 'The Quality Threshold Has Moved' },
      { type: 'p', text: 'Indian consumers now watch Netflix, Prime, and JioCinema. Their visual expectations have been calibrated by OTT production values. A 2019-quality brand film looks tired in 2026. The bar has moved, and brands that don\'t move with it will feel it in every brand health metric.' },
      { type: 'blockquote', text: 'The question is no longer whether AI production can match traditional quality. The question is why you would pay 10× more for the same result.' },
      { type: 'h2', text: 'What This Means for Brand Teams' },
      { type: 'p', text: 'Brand teams need to recalibrate their content budgets. The era of one big annual film and several small tactical pieces is over. The new model is continuous cinematic storytelling, a rhythm of premium content that keeps the brand present and premium in the consumer\'s mind year-round.' },
      { type: 'p', text: 'The brands that understand this first will be the ones that pull away from their category in the next 18 months.' },
    ],
  },
  {
    slug: 'micro-drama-playbook',
    title: 'The Micro Drama Playbook: How Brands Are Winning With Episodic Content',
    excerpt: 'Short-form serialised storytelling is the fastest-growing content format in India. Here\'s how to do it right.',
    date: 'February 2026',
    readTime: '8 min read',
    category: 'Playbook',
    poster: 'https://picsum.photos/seed/blog2/1200/700',
    body: [
      { type: 'p', text: 'The micro drama format, serialised fiction in 3–7 minute episodes, is not a gimmick. It is the dominant entertainment format on mobile in China, South Korea, and increasingly in India. And brands that understand its mechanics are using it to build the kind of audience loyalty that no ad budget can buy.' },
      { type: 'h2', text: 'Why Episodic Beats Single-Piece Content' },
      { type: 'p', text: 'A single brand film, no matter how good, is consumed once. A micro drama series creates return viewers. Episode 2 brings back the audience from Episode 1. The algorithm rewards this return behaviour with organic reach. The brand gets repeated impressions, without repeated media spend.' },
      { type: 'h2', text: 'The Three Rules of Branded Micro Drama' },
      { type: 'h3', text: 'Rule 1: The Brand Must Serve the Story' },
      { type: 'p', text: 'The most common mistake is brand integration that interrupts the narrative. The product must be present because the story requires it, not because the brief required it. When NeoBank appeared in "The Last Algorithm", it was because the character needed a loan, not because NeoBank paid for it to be there.' },
      { type: 'h3', text: 'Rule 2: End on a Cliffhanger, Always' },
      { type: 'p', text: 'Every episode must end with unresolved tension. This is not optional, it is the mechanical engine of the format. Without the cliffhanger, there is no return viewing. Without return viewing, there is no compounding organic reach.' },
      { type: 'h3', text: 'Rule 3: Mobile-First Is Non-Negotiable' },
      { type: 'p', text: '73% of micro drama consumption in India happens on a phone, in portrait mode, with one thumb. Every creative decision, framing, pacing, caption size, sound design, must be made for that context first.' },
      { type: 'blockquote', text: 'A micro drama produced for TV and resized for mobile is not a micro drama. It is a mistake.' },
      { type: 'h2', text: 'The ROI Framework' },
      { type: 'p', text: 'Measure micro drama performance on three metrics: return view rate (target >40%), series completion rate (target >60% of viewers who watch episode 1 watch all 5), and brand recall lift (measure with a 2-week post-series survey).' },
    ],
  },
  {
    slug: 'performance-creative-formula',
    title: '50 Ad Variants in a Week: The Performance Creative Formula',
    excerpt: 'How we scaled one campaign\'s creative output by 10× without sacrificing quality, and dropped CPA by 40%.',
    date: 'January 2026',
    readTime: '6 min read',
    category: 'Performance',
    poster: 'https://picsum.photos/seed/blog3/1200/700',
    body: [
      { type: 'p', text: 'Creative is the largest controllable variable in performance marketing. Yet the average D2C brand runs 4–6 ad variants and wonders why their CPA climbs every 6 weeks. The answer is always the same: audience fatigue from creative that has been seen too many times.' },
      { type: 'h2', text: 'The Hook Matrix' },
      { type: 'p', text: 'Before we produce a single frame, we build a hook matrix. This maps every possible entry point for the audience: pain-led hooks ("Still paying too much for..."), gain-led hooks ("What if you could..."), social proof hooks ("47,000 customers trust..."), and curiosity hooks ("Most people don\'t know this about...").' },
      { type: 'p', text: 'A thorough hook matrix yields 8–12 distinct hook types. Each becomes a creative variant. Multiply across 4 formats (story, feed, pre-roll, display) and you have 32–48 base variants before you touch messaging or visual treatment.' },
      { type: 'h2', text: 'Why Volume Wins' },
      { type: 'p', text: 'The Meta and Google algorithms are optimisation machines. They need data to find your best audience. More creative variants means more data signals, faster. A campaign running 50 variants will find its winning creative in week 1. A campaign running 5 variants may never find it.' },
      { type: 'blockquote', text: 'The brand that tests more, wins more. There is no shortcut to this truth.' },
      { type: 'h2', text: 'The 6-Day Delivery Process' },
      { type: 'p', text: 'Day 1: Brief intake and hook matrix. Day 2: Concept approval on 8 hook directions. Days 3–5: Production of all 50+ variants in parallel. Day 6: QA pass, taxonomy structuring, and delivery. The media team receives a fully organised creative library, ready to upload.' },
      { type: 'h2', text: 'What 40% CPA Reduction Actually Means' },
      { type: 'p', text: 'For a brand spending ₹20L/month on Meta, a 40% CPA reduction is ₹8L/month in recaptured budget. In year 1, that is ₹96L. The cost of the creative programme that delivered it was a fraction of that. The ROI on creative investment is the most underestimated metric in performance marketing.' },
    ],
  },
  {
    slug: 'social-content-engine',
    title: 'How to Build a Social Content Engine That Doesn\'t Burn Out Your Team',
    excerpt: 'A sustainable system for producing 20+ pieces per week without creative exhaustion or quality drop.',
    date: 'December 2025',
    readTime: '7 min read',
    category: 'Operations',
    poster: 'https://picsum.photos/seed/blog4/1200/700',
    body: [
      { type: 'p', text: 'The most common failure mode of social media content programmes is not creative quality, it is creative exhaustion. Teams that start with ambition and energy hit a wall at week 6. Output drops. Quality drops. Then the whole programme quietly dies.' },
      { type: 'h2', text: 'The Rhythm Model' },
      { type: 'p', text: 'Sustainable content volume requires a rhythm model, not an ad-hoc brief model. Each week has a fixed content structure: 2 Reels (educational), 1 Reel (brand story), 3 carousels (product/tips), 2 statics (announcements), 5 stories (engagement).' },
      { type: 'p', text: 'When the structure is fixed, creative energy goes into making each piece excellent, not into deciding what to make. This is the difference between creative paralysis and creative flow.' },
      { type: 'h2', text: 'The Monthly Strategy Layer' },
      { type: 'p', text: 'Above the weekly rhythm sits a monthly strategy layer: the campaign moment, the seasonal beat, the product focus. This determines what themes flow through the fixed weekly structure. Strategy sets direction. Rhythm delivers volume.' },
      { type: 'blockquote', text: 'Structure is not the enemy of creativity. It is the scaffolding that makes creativity sustainable.' },
      { type: 'h2', text: 'AI in the Production Pipeline' },
      { type: 'p', text: 'AI does not replace creative thinking. It accelerates execution. Script to rough cut used to take 3 days. With AI-assisted production, it takes 4 hours. This compression is what makes 20+ pieces per week achievable without a proportionally large team.' },
    ],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return ALL_POSTS.find(p => p.slug === slug)
}
