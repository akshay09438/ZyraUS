import dynamic from 'next/dynamic'
import { HeroSection } from '@/components/home/HeroSection'

// Below-fold sections: code-split so the initial JS bundle stays small
const LogoTicker        = dynamic(() => import('@/components/work/LogoTicker').then(m => ({ default: m.LogoTicker })))
const ZyraManifestoSection = dynamic(() => import('@/components/home/ZyraManifestoSection').then(m => ({ default: m.ZyraManifestoSection })))
const FourStudiosSection   = dynamic(() => import('@/components/home/FourStudiosSection').then(m => ({ default: m.FourStudiosSection })))
const WorkSection          = dynamic(() => import('@/components/home/WorkSection').then(m => ({ default: m.WorkSection })))
const GetInTouchSection    = dynamic(() => import('@/components/home/GetInTouchSection').then(m => ({ default: m.GetInTouchSection })))


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
