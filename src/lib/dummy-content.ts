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
    cfStream: 'c3d80455237782f5c12f3c0a2e0aaeba',
  },
  {
    id: 'brand-films',
    label: 'Pillar 02',
    title: 'AI Brand Films & Commercials',
    desc: 'Cinematic brand stories at the speed of culture. AI-accelerated production, human-directed vision. Delivered in 2 weeks.',
    href: '/ai-brand-films',
    video: DUMMY_VIDEOS.brandFilm,
    cfStream: '0c58e4bd8a779358d93794ed1dcb501f',
  },
  {
    id: 'micro-drama',
    label: 'Pillar 03',
    title: 'AI Micro Drama Production',
    desc: "AI-powered episodic storytelling built for mobile-first audiences. Faster production cycles, lower costs, higher retention.",
    href: '/micro-drama-production',
    video: DUMMY_VIDEOS.microDrama,
    cfStream: 'd3e154fe3eb6b08a4760f24dffc7330e',
  },
  {
    id: 'ad-creatives',
    label: 'Pillar 04',
    title: 'Performance Marketing Ads',
    desc: '3+ ad variants per campaign. AI-powered. Human-approved.',
    href: '/ai-ad-creatives',
    video: DUMMY_VIDEOS.adCreatives,
    cfStream: '7df6448ee29eaeb8c84bb44d6254bb31',
  },
  {
    id: 'social-content',
    label: 'Pillar 05',
    title: 'Social Media Content',
    desc: 'AI-powered content that drives organic growth. 20+ pieces per week across Instagram, YouTube Shorts, and LinkedIn.',
    href: '/social-media-content',
    video: DUMMY_VIDEOS.socialContent,
    cfStream: '853d906e65db42a1dcc9e0854720aaa4',
  },
]

export const PROJECTS = [
  { id: 'ramayana',          client: 'OTT',            title: 'Ramayana',                category: 'OTT Production',  video: '/videos/ramayana.mp4',                    cfStream: '8834f79fa14cfd6eb0c1ec544b7d0e34', aspect: '16/9' },
  { id: 'adani-ndtv',        client: 'Adani X NDTV',   title: 'FutureX Quiz Announcement',category: 'Brand Film',      video: '/videos/adani-ndtv.mp4',                  cfStream: 'b72bcef661201b2de0afa5edd01c7db3', aspect: '16/9' },
  { id: 'cars24',            client: 'Cars24',          title: 'Cars24',                  category: 'Brand Film',      video: '/videos/cars24.mp4',                      cfStream: '466b01620c29279a0a63ee1e451fe59c', aspect: '16/9' },
  { id: 'kedarnath',         client: 'Tourism',         title: 'Kedarnath',               category: 'Brand Film',      video: '/videos/kedarnath.mp4',                   cfStream: '7020a0f1039c9c610d2a2ac6b903b36f', aspect: '9/16' },
  { id: 'wildstone-edge',    client: 'Wildstone',       title: 'Wildstone Edge',          category: 'Ad Creative',     video: '/videos/wildstone-edge.mp4',              cfStream: 'bbd1702aedda2389ad0e9ae9e7e8f361', aspect: '16/9' },
  { id: 'wildstone-ultra',   client: 'Wildstone',       title: 'Wildstone Ultra Sensual', category: 'Ad Creative',     video: '/videos/wildstone-ultra-sensual.mp4',     cfStream: '416e9a651ab6e32a997a63167c5ef096', aspect: '9/16' },
  { id: 'swiggy',            client: 'Swiggy',          title: 'Swiggy',                  category: 'Brand Film',      video: '/videos/swiggy.mp4',                      cfStream: '7fe1be5e9318f4bae80bf4ddcac39d25', aspect: '9/16' },
  { id: 'meesho',            client: 'Meesho',          title: 'Meesho',                  category: 'Ad Creative',     video: '/videos/meesho.mp4',                      cfStream: '6a915f97456a3b7a1b363fe6e87ceab7', aspect: '16/9' },
  { id: 'vaishno-devi',      client: 'Tourism',         title: 'Vaishno Devi',            category: 'Brand Film',      video: '/videos/vaishno-devi.mp4',                cfStream: 'd3e154fe3eb6b08a4760f24dffc7330e', aspect: '9/16' },
  { id: 'rabitat',           client: 'Rabitat',         title: 'Rabitat',                 category: 'Brand Film',      video: '/videos/rabitat.mp4',                     cfStream: '36066418062700740ca08867814d58e1', aspect: '9/16' },
  { id: 'mederma',           client: 'Mederma',         title: 'Mederma',                 category: 'Ad Creative',     video: '/videos/mederma.mp4',                     cfStream: '53dbe3243e96592f9f09899f807a98de', aspect: '9/16' },
  { id: 'country-delight',   client: 'Country Delight', title: 'Country Delight',         category: 'Brand Film',      video: '/videos/country-delight.mp4',             cfStream: 'dc10155ea4a6da6a8fdf4a97a6eed7a0', aspect: '9/16' },
  { id: 'vama',              client: 'Vama',            title: 'Vama',                    category: 'Brand Film',      video: '/videos/vama.mov',                        cfStream: '83451e3dafac471452fa068ce85e6896', aspect: '9/16' },
  { id: 'goodscore',         client: 'GoodScore',       title: 'GoodScore',               category: 'Brand Film',      video: '/videos/goodscore.mp4',                   cfStream: 'b1f7e94fee9ca28d6c94ef0f65b0215b', aspect: '9/16' },
  { id: 'inyou',             client: 'InYou',           title: 'InYou',                   category: 'Brand Film',      video: '/videos/inyou.mp4',                       cfStream: '1c4159bc6fce242d637766f33c9dd43c', aspect: '9/16' },
  { id: 'revision-app',      client: 'Revision App',    title: 'Revision App',            category: 'Ad Creative',     video: '/videos/revision-app.mp4',                cfStream: '1789b86b944efc35e207364614492b76', aspect: '9/16' },
  { id: 'dharmruchi',        client: 'Dharmruchi',      title: 'Dharmruchi Angaar',       category: 'OTT Production',  video: '/videos/dharmruchi-angaar.mp4',           cfStream: 'aa75b375be00df015e31fdbdf7e40a73', aspect: '16/9' },
  { id: 'kapil-muni',        client: 'Kapil Muni',      title: 'Kapil Muni',              category: 'OTT Production',  video: '/videos/kapil-muni.mp4',                  cfStream: '2781cd26fdcf6d8a83f909173cf917c1', aspect: '16/9' },
  { id: 'holy-tirthankars',  client: 'Spiritual',       title: 'The Holy Tirthankars',    category: 'OTT Production',  video: '/videos/the-holy-tirthankars.mp4',        cfStream: '1e09d5e68dd02a6c6ff1f71051fd4855', aspect: '16/9' },
  { id: 'bharat-ki-soch',    client: 'Social',          title: 'Bharat Ki Soch',          category: 'Social Content',  video: '/videos/bharat-ki-soch.mp4',              cfStream: '38d25d2d4974f61f94c8ebfdd4933b1e', aspect: '9/16' },
  { id: 'madhusudhan-ghee',  client: 'Madhusudhan',     title: 'Madhusudhan Ghee',        category: 'Ad Creative',     video: '/videos/madhusudhan-ghee.mov',            cfStream: 'ac46b166e20adfb6b0462145d06f4044', aspect: '9/16' },
  { id: 'kissansay',         client: 'KissanSay',       title: 'KissanSay',               category: 'Social Content',  video: '/videos/kissansay.mp4',                   cfStream: 'fb2ec13f628715cc390884d2c21c471e', aspect: '9/16' },
  { id: 'jito',              client: 'JITO',            title: 'JITO',                    category: 'Brand Film',      video: '/videos/jito.mp4',                        cfStream: 'dbbae800596137218b933d0105cf7c5a', aspect: '16/9' },
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
  { label: 'Partners', href: '/partners' },
  { label: 'About',    href: '/about' },
  { label: 'Blog',     href: '/blog' },
]
