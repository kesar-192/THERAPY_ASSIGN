import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { ApproachSection } from '@/components/sections/approach';
import { FocusSection } from '@/components/sections/focus';
import { OfficeSection } from '@/components/sections/office';
import { FaqSection } from '@/components/sections/faq';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ApproachSection />
        <FocusSection />
        <OfficeSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
