import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutStrip } from '@/components/sections/AboutStrip'
import { PartnersStrip } from '@/components/sections/PartnersStrip'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { WhyIDMC } from '@/components/sections/WhyIDMC'
import { StatsSection } from '@/components/sections/StatsSection'
import { ProjectsPreview } from '@/components/sections/ProjectsPreview'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'IDMC — International Development Management Construction',
  description: 'IDMC est votre partenaire de confiance pour des projets durables en immobilier, électrification, événementiel et formation professionnelle.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutStrip />
      <PartnersStrip />
      <ServicesGrid />
      <WhyIDMC />
      <StatsSection />
      <ProjectsPreview />
      <CTASection />
    </>
  )
}
