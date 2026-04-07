import { HeroSection } from '@/components/home/HeroSection'
import { LogoTicker } from '@/components/work/LogoTicker'
import { ZyraManifestoSection } from '@/components/home/ZyraManifestoSection'
import { FourStudiosSection } from '@/components/home/FourStudiosSection'
import { WorkSection } from '@/components/home/WorkSection'
import { GetInTouchSection } from '@/components/home/GetInTouchSection'


export default function Home() {
  return (
    <>
      {/* 1 — Hero: "Where AI meets Cinema" */}
      <HeroSection />

      {/* 2 — Trusted by brands that shape the world + sliding logos */}
      <LogoTicker />

      {/* 3 — ZYRA zooms out → manifesto cross-fades in → scroll line grows */}
      <ZyraManifestoSection />

      {/* 4 — Five Studios: stacking sticky panels */}
      <FourStudiosSection />

      {/* 5 — Selected Work: horizontal scroll portfolio */}
      <WorkSection />

      {/* 6 — Get in Touch */}
      <GetInTouchSection />
    </>
  )
}
