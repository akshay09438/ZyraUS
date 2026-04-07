// Local videos, served from /public/videos/
export const DUMMY_VIDEOS = {
  showreel:      '/videos/showreel.mp4',
  ottProduction: '/videos/pillar-ott-production.mp4',
  brandFilm:     '/videos/pillar-ai-brand-films.mp4',
  microDrama:    '/videos/pillar-micro-drama.mp4',
  adCreatives:   '/videos/pillar-performance-marketing.mp4',
  socialContent: '/videos/pillar-social-content.mov',
  zyraLogo:      '/videos/zyraLogo.mp4',
  poster:        '/posters/kedarnath-hero.webp',
}

export const DUMMY_YOUTUBE = {
  project1: 'https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&mute=1&loop=1&controls=0',
  project2: 'https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=1&mute=1&loop=1&controls=0',
  project3: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&controls=0',
}

export const SERVICES = [
  {
    id: 'ott-production',
    label: 'Pillar 01',
    title: 'AI Native Film Production',
    desc: 'Full-length series, films, and specials built for streaming platforms, powered by AI at every stage of production. Cinematic at every frame.',
    href: '/ott-production',
    video: DUMMY_VIDEOS.ottProduction,
  },
  {
    id: 'brand-films',
    label: 'Pillar 02',
    title: 'AI Brand Films & Commercials',
    desc: 'Cinematic brand stories at the speed of culture. AI-accelerated production, human-directed vision. Delivered in 2 weeks.',
    href: '/ai-brand-films',
    video: DUMMY_VIDEOS.brandFilm,
  },
  {
    id: 'micro-drama',
    label: 'Pillar 03',
    title: 'AI Micro Drama Production',
    desc: "AI-powered episodic storytelling built for mobile-first audiences. Faster production cycles, lower costs, higher retention.",
    href: '/micro-drama-production',
    video: DUMMY_VIDEOS.microDrama,
  },
  {
    id: 'ad-creatives',
    label: 'Pillar 04',
    title: 'Performance Marketing Ads',
    desc: '3+ ad variants per campaign. AI-powered. Human-approved.',
    href: '/ai-ad-creatives',
    video: DUMMY_VIDEOS.adCreatives,
  },
  {
    id: 'social-content',
    label: 'Pillar 05',
    title: 'Social Media Content',
    desc: 'AI-powered content that drives organic growth. 20+ pieces per week across Instagram, YouTube Shorts, and LinkedIn.',
    href: '/social-media-content',
    video: DUMMY_VIDEOS.socialContent,
  },
]

export const PROJECTS = [
  { id: 'ramayana',          client: 'OTT',           title: 'Ramayana',               category: 'OTT Production',       video: '/videos/ramayana.mp4' },
  { id: 'adani-ndtv',        client: 'Adani X NDTV',   title: 'FutureX Quiz Announcement',category: 'Brand Film',            video: '/videos/adani-ndtv.mp4' },
  { id: 'cars24',            client: 'Cars24',         title: 'Cars24',                 category: 'Brand Film',            video: '/videos/cars24.mp4' },
  { id: 'kedarnath',         client: 'Tourism',        title: 'Kedarnath',              category: 'Brand Film',            video: '/videos/kedarnath.mp4' },
  { id: 'wildstone-edge',    client: 'Wildstone',      title: 'Wildstone Edge',         category: 'Ad Creative',           video: '/videos/wildstone-edge.mp4' },
  { id: 'wildstone-ultra',   client: 'Wildstone',      title: 'Wildstone Ultra Sensual',category: 'Ad Creative',           video: '/videos/wildstone-ultra-sensual.mp4' },
  { id: 'bharat-ki-soch',    client: 'Social',         title: 'Bharat Ki Soch',         category: 'Social Content',        video: '/videos/bharat-ki-soch.mp4' },
  { id: 'meesho',            client: 'Meesho',         title: 'Meesho',                 category: 'Ad Creative',           video: '/videos/meesho.mp4' },
  { id: 'swiggy',            client: 'Swiggy',         title: 'Swiggy',                 category: 'Brand Film',            video: '/videos/swiggy.mp4' },
  { id: 'mederma',           client: 'Mederma',        title: 'Mederma',                category: 'Ad Creative',           video: '/videos/mederma.mp4' },
{ id: 'goodscore',         client: 'GoodScore',      title: 'GoodScore',              category: 'Brand Film',            video: '/videos/goodscore.mp4' },
  { id: 'country-delight',   client: 'Country Delight',title: 'Country Delight',        category: 'Brand Film',            video: '/videos/country-delight.mp4' },
  { id: 'inyou',             client: 'InYou',          title: 'InYou',                  category: 'Brand Film',            video: '/videos/inyou.mp4' },
  { id: 'vama',              client: 'Vama',           title: 'Vama',                   category: 'Brand Film',            video: '/videos/vama.mov' },
  { id: 'madhusudhan-ghee',  client: 'Madhusudhan',    title: 'Madhusudhan Ghee',       category: 'Ad Creative',           video: '/videos/madhusudhan-ghee.mov' },
  { id: 'kissansay',         client: 'KissanSay',      title: 'KissanSay',              category: 'Social Content',        video: '/videos/kissansay.mp4' },
  { id: 'jito',              client: 'JITO',           title: 'JITO',                   category: 'Brand Film',            video: '/videos/jito.mp4' },
  { id: 'rabitat',           client: 'Rabitat',        title: 'Rabitat',                category: 'Brand Film',            video: '/videos/rabitat.mp4' },
  { id: 'revision-app',      client: 'Revision App',   title: 'Revision App',           category: 'Ad Creative',           video: '/videos/revision-app.mp4' },
  { id: 'vaishno-devi',      client: 'Tourism',        title: 'Vaishno Devi',           category: 'Brand Film',            video: '/videos/vaishno-devi.mp4' },
  { id: 'kapil-muni',        client: 'Kapil Muni',     title: 'Kapil Muni',             category: 'OTT Production',        video: '/videos/kapil-muni.mp4' },
  { id: 'dharmruchi',        client: 'Dharmruchi',     title: 'Dharmruchi Angaar',      category: 'OTT Production',        video: '/videos/dharmruchi-angaar.mp4' },
  { id: 'holy-tirthankars',  client: 'Spiritual',      title: 'The Holy Tirthankars',   category: 'OTT Production',        video: '/videos/the-holy-tirthankars.mp4' },
]

export const STATS = [
  { value: 2,  suffix: ' Weeks', label: 'Average delivery time',          prefix: '' },
  { value: 3,  suffix: '+',      label: 'Ad variants per campaign',        prefix: '' },
  { value: 70, suffix: '%',      label: 'Cost savings vs traditional',     prefix: '' },
]

export const TESTIMONIALS = [
  {
    quote: 'Zyra delivered in 2 weeks what our previous agency took 3 months to do. The quality was cinematic.',
    name: 'Rahul Mehta', title: 'CMO', company: 'TechVenture Inc',
  },
  {
    quote: 'Our micro drama series went viral. 5 million views. Zyra understands storytelling at a level most agencies don\'t.',
    name: 'Priya Sharma', title: 'Head of Brand', company: 'NeoBank',
  },
  {
    quote: '3+ ad variants in a week. Our performance team couldn\'t believe it. CPA dropped 40% in month one.',
    name: 'Arjun Nair', title: 'Performance Lead', company: 'FashionForward',
  },
]

export const CLIENTS = [
  'Brand One', 'Studio Co', 'NeoBank', 'TechVenture', 'FashionFwd', 'MediaHouse',
]

export const NAV_LINKS = [
  { label: 'Work',     href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About',    href: '/about' },
  { label: 'Blog',     href: '/blog' },
]
