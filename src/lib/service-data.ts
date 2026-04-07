import { DUMMY_VIDEOS } from './dummy-content'

export interface Deliverable {
  icon: string   // Lucide icon name
  title: string
  desc: string
}

export interface ProcessStep {
  num: string
  title: string
  desc: string
}

export interface FAQ {
  q: string
  a: string
}

export interface Stat {
  value: string
  label: string
}

export interface ServiceData {
  slug: string
  label: string
  title: string
  subtitle: string
  video: string
  heroImage: string
  metaTitle: string
  metaDesc: string

  statsHeadline: string
  stats: Stat[]
  problemStat: string
  problemStatLabel: string
  problemBody: string[]

  deliverables: Deliverable[]
  process: ProcessStep[]
  faqs: FAQ[]

  relatedSlugs: string[]
}

export const ALL_SERVICES: ServiceData[] = [
  // ── OTT PRODUCTION ──────────────────────────────────────────────────────────
  {
    slug: 'ott-production',
    label: 'Service 01',
    title: 'AI Native Film Production',
    subtitle: 'Full-length series, films, and specials built for streaming platforms.',
    video: DUMMY_VIDEOS.ottProduction,
    heroImage: '/posters/hero-ott.png',
    metaTitle: 'OTT Production India | Zyra - AI-Powered Streaming Content',
    metaDesc: 'India\'s fastest OTT production studio. Full-length series, films, and specials for JioCinema, MX Player, YouTube, and global streaming platforms.',

    statsHeadline: 'We made',
    stats: [
      { value: '10+',    label: 'Episodes' },
      { value: '200hr+', label: 'Content Created' },
    ],
    problemStat: '₹2Cr+',
    problemStatLabel: 'Typical OTT series production cost',
    problemBody: [
      'Getting a series or film onto an OTT platform has always required studio-scale budgets - pre-production alone can run for months before a single frame is shot.',
      'Our AI-accelerated pipeline compresses development, production, and post into a single continuous workflow - without sacrificing the cinematic quality streaming audiences expect.',
      'The result: series-ready content at a fraction of traditional cost, delivered on timelines that actually match the pace of streaming culture.',
    ],

    deliverables: [
      { icon: 'Clapperboard', title: 'Feature / Series Production', desc: 'Full-length films or multi-episode series, streaming-spec ready.' },
      { icon: 'Film',         title: '4K Cinematic Master',         desc: 'Colour-graded, platform-compliant 4K delivery files.' },
      { icon: 'Music',        title: 'Original Score & Sound',      desc: 'Custom soundtrack composed and mixed for the project.' },
      { icon: 'Languages',    title: 'Multilingual Audio & Subs',   desc: 'Dubbed and subtitled versions for Hindi, English, Tamil, Telugu.' },
      { icon: 'Globe',        title: 'Platform Submission Pack',    desc: 'Spec-compliant exports for JioCinema, MX, Amazon, Netflix, YouTube.' },
      { icon: 'BarChart2',    title: 'Trailer & Promo Package',     desc: 'Theatrical trailer, teaser, and social promo cuts for launch.' },
    ],

    process: [
      { num: '01', title: 'Development & Greenlight',  desc: 'Story, script, lookbook, and production plan. We go into production with a fully approved creative blueprint.' },
      { num: '02', title: 'Pre-Production',             desc: 'AI-assisted visual development, storyboarding, casting brief, location design, and shoot schedule - compressed to days, not months.' },
      { num: '03', title: 'Production Sprint',          desc: 'AI-accelerated principal production with human creative oversight at every stage.' },
      { num: '04', title: 'Post & Finishing',           desc: 'Edit, VFX, colour grade, sound design, music, and delivery master - handled in a single integrated pipeline.' },
      { num: '05', title: 'Platform Delivery',          desc: 'All platform-spec exports, trailers, stills, and metadata delivered with a launch-ready press package.' },
    ],

    faqs: [
      { q: 'What types of OTT content do you produce?',                                 a: 'Feature films, limited series (3–8 episodes), docudramas, branded entertainment specials, and YouTube originals.' },
      { q: 'Which streaming platforms do you deliver to?',                              a: 'JioCinema, MX Player, Amazon Prime Video, Netflix, Disney+ Hotstar, YouTube Originals, and Sony LIV. We handle all platform-spec compliance.' },
      { q: 'How is AI used in OTT production?',                                         a: 'AI accelerates visual development, scene generation, background compositing, and post-production - while human directors maintain creative control at every stage.' },
      { q: 'What is the typical production timeline for a series?',                     a: 'A 4-episode series typically runs 8–10 weeks from brief to delivery. A feature film runs 6–8 weeks.' },
      { q: 'Can branded content be produced for OTT platforms?',                        a: 'Yes. We specialise in branded entertainment where the commercial objective is woven into the narrative - not placed on top of it.' },
    ],

    relatedSlugs: ['ai-brand-films', 'micro-drama-production', 'social-media-content'],
  },

  // ── AI BRAND FILMS ──────────────────────────────────────────────────────────
  {
    slug: 'ai-brand-films',
    label: 'Service 02',
    title: 'AI Brand Films & Commercials',
    subtitle: 'Cinematic brand stories at the speed of culture. Two-week delivery.',
    video: DUMMY_VIDEOS.brandFilm,
    heroImage: '/posters/hero-brand-films.png',
    metaTitle: 'AI Brand Film Production India | Zyra - 2-Week Delivery',
    metaDesc: 'India\'s fastest AI brand film studio. OTT-quality commercials and brand films delivered in 2 weeks. Trusted by D2C, fintech, and FMCG brands.',

    statsHeadline: "We've made",
    stats: [
      { value: '50+', label: 'Brand Films & Ads Created' },
    ],
    problemStat: '3 Months',
    problemStatLabel: 'Traditional production timeline',
    problemBody: [
      'Most brands wait 3 months and spend ₹30–80L for a single brand film - before a single frame is approved. By the time it airs, the cultural moment has passed.',
      'AI production changes the equation entirely. We compress pre-production, concept visualisation, and post into a single, fast-moving pipeline.',
      'The result: cinematic storytelling at a fraction of the cost and a fraction of the time. Without the compromise.',
    ],

    deliverables: [
      { icon: 'Film',        title: '60–90s Hero Film',         desc: 'Full cinematic brand narrative, broadcast-ready.' },
      { icon: 'Scissors',    title: 'Cut-downs (15s / 30s)',     desc: 'Social and pre-roll edits from the hero film.' },
      { icon: 'Globe',       title: 'Eye-Balls Ready Video',    desc: 'Colour-graded 4K delivery for streaming platforms.' },
      { icon: 'Languages',   title: 'Multilingual Versions',    desc: 'Hindi, Tamil, Telugu, English - same quality, every version.' },
      { icon: 'Subtitles',   title: 'Subtitle & Caption Pack',  desc: 'Burnt-in and SRT for accessibility and social.' },
      { icon: 'BarChart2',   title: 'A/B Creative Variants',    desc: 'Two alternate cut approaches to test performance.' },
    ],

    process: [
      { num: '01', title: 'Brief & Discovery',      desc: 'One structured session to extract brand truth, audience insight, and campaign objective. We leave with everything we need.' },
      { num: '02', title: 'Concept & Storyboard',   desc: 'Three distinct creative directions. Full AI-visualised storyboard. You pick one, or we hybridise.' },
      { num: '03', title: 'Production',              desc: 'AI-assisted generation, voiceover recording, music composition, and VFX in a single accelerated pipeline.' },
      { num: '04', title: 'Review & Refinement',     desc: 'Two structured rounds of feedback. No runaway revisions. Clear, fast, decisive.' },
      { num: '05', title: 'Delivery',                desc: 'All formats, all platforms, all resolutions. Delivered day 14.' },
    ],

    faqs: [
      { q: 'How is AI brand film production different from traditional production?',       a: 'AI production compresses 3-month traditional timelines into 2 weeks by automating concept visualisation, scene generation, and post-production workflows - while maintaining cinematic quality.' },
      { q: 'Do the films look "AI-generated"?',                                            a: 'No. Our pipeline combines AI generation with human creative direction, colour grading, voiceover, and music to produce films indistinguishable from traditional production.' },
      { q: 'What is included in the 2-week delivery?',                                     a: 'Hero film (60–90s), 15s and 30s cut-downs, OTT-ready 4K master, two language versions, subtitle pack, and two A/B variants.' },
      { q: 'Can you match our existing brand guidelines?',                                 a: 'Yes. We conduct a brand immersion session before production begins. Every frame is aligned to your visual identity, tone, and positioning.' },
      { q: 'What is the typical investment for an AI brand film?',                         a: 'Projects typically start at ₹4–8L - 80–90% less than traditional production - with the same output quality.' },
    ],

    relatedSlugs: ['ott-production', 'micro-drama-production', 'ai-ad-creatives'],
  },

  // ── MICRO DRAMA ─────────────────────────────────────────────────────────────
  {
    slug: 'micro-drama-production',
    label: 'Service 03',
    title: 'AI Micro Drama Production',
    subtitle: "India's $10B content opportunity. We make it real.",
    video: DUMMY_VIDEOS.microDrama,
    heroImage: '/posters/hero-micro-drama.png',
    metaTitle: 'Micro Drama Production India | Zyra AI Content Studio',
    metaDesc: 'Episodic mobile-first micro dramas for brands and OTT platforms. 3–7 minute episodes, serial storytelling, AI-accelerated production.',

    statsHeadline: "We've generated",
    stats: [
      { value: '10M+', label: 'Views Generated' },
    ],
    problemStat: '$10B',
    problemStatLabel: 'India short-drama market by 2028',
    problemBody: [
      'Short-form serialised drama is the fastest-growing content format in India. Platforms like MX TakaTak, Josh, and Instagram are actively hungry for episodic content.',
      'But traditional drama production is prohibitively expensive for most brands and indie creators. A single 5-episode series can cost ₹1–2Cr.',
      'Our AI-accelerated pipeline makes episodic micro drama accessible - 5 episodes, 3–7 minutes each, cinematic quality, delivered in under 6 weeks.',
    ],

    deliverables: [
      { icon: 'Clapperboard', title: '5-Episode Series',          desc: '3–7 minute episodes, complete narrative arc.' },
      { icon: 'Smartphone',   title: 'Mobile-First Format',       desc: '9:16 primary cut, optimised for Reels, Shorts, TakaTak.' },
      { icon: 'Music',        title: 'Original Score',            desc: 'Custom music per episode - theme + scene cues.' },
      { icon: 'Captions',     title: 'Episodic Title Cards',      desc: 'Branded chapter titles, recap cards, cliffhanger frames.' },
      { icon: 'Share2',       title: 'Social Trailer Pack',       desc: '15s and 30s episode teasers for pre-release distribution.' },
      { icon: 'Download',     title: 'Platform-Ready Masters',    desc: 'Spec-compliant exports for MX, JioCinema, YouTube, Instagram.' },
    ],

    process: [
      { num: '01', title: 'Story Development',     desc: 'Character arcs, episode breakdowns, brand integration brief. The creative foundation everything else is built on.' },
      { num: '02', title: 'Script & Storyboard',   desc: 'Full episode scripts with shot-by-shot AI storyboard. Approved before a single frame is rendered.' },
      { num: '03', title: 'Production Sprint',      desc: 'All 5 episodes produced in parallel using our AI pipeline. Voiceover, music, and VFX in one continuous flow.' },
      { num: '04', title: 'Series Assembly',        desc: 'Edit, colour grade, sound mix. Each episode reviewed and refined with one round of changes.' },
      { num: '05', title: 'Launch Package',         desc: 'All platform masters, trailers, social assets, and a release calendar. Ready to publish.' },
    ],

    faqs: [
      { q: 'What is a micro drama?',                                                       a: 'A micro drama is a serialised fictional story in 3–7 minute episodes, designed for mobile-first consumption. Episodes end on cliffhangers to drive return viewing.' },
      { q: 'Can brands be integrated naturally into the story?',                           a: 'Yes - we specialise in branded entertainment where the product or message becomes part of the narrative, not an interruption to it.' },
      { q: 'How many episodes are produced in one engagement?',                            a: 'Our standard package is a 5-episode series. We also produce 3-episode pilots and 10-episode full seasons.' },
      { q: 'What languages do you produce in?',                                            a: 'Hindi, English, Tamil, Telugu, Kannada, Bengali. Multilingual versions of the same series are available.' },
      { q: 'How long does a 5-episode series take to produce?',                            a: 'From brief to final delivery: 5–6 weeks. This includes story development, scripting, full production, and post.' },
    ],

    relatedSlugs: ['ott-production', 'ai-brand-films', 'ai-ad-creatives'],
  },

  // ── AD CREATIVES ────────────────────────────────────────────────────────────
  {
    slug: 'ai-ad-creatives',
    label: 'Service 04',
    title: 'Performance Marketing Ads',
    subtitle: '3+ variants per campaign. AI-powered. Human-approved.',
    video: DUMMY_VIDEOS.adCreatives,
    heroImage: '/posters/hero-ad-creatives.png',
    metaTitle: 'AI Performance Creative Production India | Zyra - 3+ Variants',
    metaDesc: 'Scale your performance creative output. 3+ ad variants per campaign in one week. Video, static, carousel - optimised for Meta, Google, and programmatic.',

    statsHeadline: "We've managed",
    stats: [
      { value: '2000+', label: 'Ads Created' },
      { value: '$10M',  label: 'Ad Spend Managed' },
    ],
    problemStat: '40%',
    problemStatLabel: 'Average CPA reduction on month one',
    problemBody: [
      'Creative is the largest controllable variable in performance marketing. Yet most brands run 3–5 ad variants and wonder why CPA stays flat.',
      'The winning formula is creative volume combined with structured variation - different hooks, formats, aspect ratios, and copy treatments - tested simultaneously.',
      'Our AI pipeline produces 3+ variants in a week. Your media team gets more data, faster learnings, and a CPA that moves.',
    ],

    deliverables: [
      { icon: 'Video',        title: 'Video Ads (6s / 15s / 30s)',  desc: 'Hook-first video creatives with multiple format cuts.' },
      { icon: 'Image',        title: 'Static Display Ads',          desc: 'Full-bleed statics across all IAB standard sizes.' },
      { icon: 'LayoutGrid',   title: 'Carousel Sequences',          desc: 'Product-led carousel ads for Meta and Google.' },
      { icon: 'Type',         title: 'UGC-Style Variations',        desc: 'Lo-fi, authentic-feeling creatives designed to bypass ad fatigue.' },
      { icon: 'RefreshCw',    title: 'Refresh Packs',               desc: 'Monthly creative refresh to prevent audience fatigue.' },
      { icon: 'BarChart2',    title: 'Naming & Taxonomy System',    desc: 'Structured naming so your team knows exactly what to test.' },
    ],

    process: [
      { num: '01', title: 'Creative Brief Intake',   desc: 'Audience, objective, platform, budget, and winning creative benchmarks. We go into production with full context.' },
      { num: '02', title: 'Hook Matrix',             desc: 'We map 10+ hooks across pain/gain/fear/social proof. Every variant starts with a different hook.' },
      { num: '03', title: 'AI Production Sprint',    desc: 'All 3+ variants produced across video, static, and carousel formats in parallel.' },
      { num: '04', title: 'Quality Pass',            desc: 'Human review of every creative. Brand safety, messaging accuracy, and platform compliance checked.' },
      { num: '05', title: 'Delivery & Taxonomy',     desc: 'Organised delivery with naming convention, platform specs, and recommended test structure.' },
    ],

    faqs: [
      { q: 'How do you ensure 3+ variants without sacrificing quality?',                  a: 'Our AI pipeline handles production at scale while human creative directors review every asset before delivery. Volume and quality are not in conflict here.' },
      { q: 'Which platforms do you optimise for?',                                         a: 'Meta (Facebook + Instagram), Google (Display + YouTube), Programmatic (DV360), and Snapchat. Platform-specific specs applied to every creative.' },
      { q: 'How quickly will we see CPA improvement?',                                     a: 'Most clients see measurable CPA reduction within 30 days of deploying the first batch - typically 25–45% improvement on their control creative.' },
      { q: 'Do you handle copy, or just visuals?',                                         a: 'Both. Every creative includes headline, body copy, and CTA copy written for the specific hook and audience segment.' },
      { q: 'Can we get monthly creative refreshes?',                                       a: 'Yes. We offer monthly retainer packages that deliver a fresh batch of 20–30 variants each month to prevent audience fatigue.' },
    ],

    relatedSlugs: ['ai-brand-films', 'social-media-content', 'micro-drama-production'],
  },

  // ── SOCIAL CONTENT ──────────────────────────────────────────────────────────
  {
    slug: 'social-media-content',
    label: 'Service 05',
    title: 'Social Media Content',
    subtitle: '20+ pieces per week. Always on. Always sharp.',
    video: DUMMY_VIDEOS.socialContent,
    heroImage: '/posters/hero-social-media.png',
    metaTitle: 'Social Media Content Production India | Zyra - 20+ Pieces/Week',
    metaDesc: 'India\'s fastest social content engine. 20+ pieces per week across Instagram, YouTube Shorts, and LinkedIn. Reels, carousels, stories - consistently excellent.',

    statsHeadline: "We've generated",
    stats: [
      { value: '60M+', label: 'Views Generated' },
    ],
    problemStat: '20+',
    problemStatLabel: 'Content pieces delivered per week',
    problemBody: [
      'Social media rewards consistency above everything else. Brands that publish 15–20 pieces per week see 3× the organic reach of brands publishing 3–5.',
      'But producing that volume at quality is a full-time job. Most brand teams are under-resourced and end up with an inconsistent feed that loses algorithmic favour.',
      'We act as your always-on content engine - strategy, production, and delivery - so your team can focus on brand decisions, not content operations.',
    ],

    deliverables: [
      { icon: 'Film',       title: 'Reels & Short-Form Video',   desc: '6–60s vertical video for Instagram, YouTube Shorts, TakaTak.' },
      { icon: 'LayoutGrid', title: 'Carousels & EDU Posts',      desc: 'Swipeable carousels for product, tips, and thought leadership.' },
      { icon: 'Image',      title: 'Static Feed Posts',          desc: 'On-brand static posts for feed curation and announcements.' },
      { icon: 'Layers',     title: 'Story Templates',            desc: '24-hour story sequences - polls, countdowns, product reveals.' },
      { icon: 'MessageSquare', title: 'Caption & Copy Library',  desc: 'Hook-led captions, hashtag sets, and CTA copy for every post.' },
      { icon: 'Calendar',   title: 'Weekly Content Calendar',    desc: 'Structured posting schedule aligned to campaign moments.' },
    ],

    process: [
      { num: '01', title: 'Brand & Audience Audit',  desc: 'We analyse your existing content performance, competitor benchmarks, and audience behaviour patterns before writing a single brief.' },
      { num: '02', title: 'Monthly Content Strategy', desc: 'Themes, campaigns, and a content mix mapped to your business calendar and platform algorithms.' },
      { num: '03', title: 'Weekly Production Sprint', desc: '20+ pieces produced each week - video, static, carousels - ahead of schedule so your team can review without pressure.' },
      { num: '04', title: 'Approval & Scheduling',    desc: 'You approve via a shared review board. We handle scheduling and platform publishing.' },
      { num: '05', title: 'Monthly Performance Review', desc: 'Data-led review of what worked. The next month\'s strategy adapts based on performance.' },
    ],

    faqs: [
      { q: 'What does "20+ pieces per week" include?',                                    a: 'A typical weekly delivery includes 4–6 Reels, 3–4 carousels, 3–4 static posts, and 5–7 story frames. The exact mix is aligned to your platform strategy.' },
      { q: 'Do you handle publishing, or just production?',                               a: 'Both options are available. We can deliver assets for your team to publish, or manage end-to-end scheduling and publishing via a shared content calendar tool.' },
      { q: 'Can you match our existing brand aesthetic?',                                 a: 'Yes. We begin with a brand immersion - your guidelines, tone of voice, and content reference - before any production begins.' },
      { q: 'What platforms do you cover?',                                                a: 'Instagram (Feed, Reels, Stories), YouTube Shorts, LinkedIn, and X (Twitter). Pinterest and Snapchat available on request.' },
      { q: 'Is there a minimum commitment period?',                                       a: 'Our standard engagement is 3 months, which allows enough time to build a content rhythm and see measurable algorithm growth.' },
    ],

    relatedSlugs: ['ott-production', 'ai-brand-films', 'micro-drama-production'],
  },
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return ALL_SERVICES.find(s => s.slug === slug)
}
