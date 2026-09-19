import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { siteContent } from '@/content/site-content';
import { Reveal } from '@/components/motion/reveal';

export function OfficeSection() {
  const { office, practice } = siteContent;

  return (
    <section id="office" className="scroll-mt-24 bg-background py-24 md:py-36" aria-labelledby="office-heading">
      <div className="site-wrap grid gap-14 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-24">
        <Reveal className="grid grid-cols-2 gap-3">
          <Image
            src="/images/office-lounge.jpg"
            alt="Lounge seating beside tall windows in Dr. Reynolds's Santa Monica office"
            width={800}
            height={600}
            loading="lazy"
            className="mt-10 aspect-[3/4] w-full object-cover"
          />
          <Image
            src="/images/office-sitting.jpg"
            alt="Private therapy seating area with bookshelves and soft light"
            width={800}
            height={600}
            loading="lazy"
            className="aspect-[3/4] w-full object-cover"
          />
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow text-primary">{office.eyebrow}</p>
            <span className="mt-6 block font-mono-ui text-5xl text-accent/80">05</span>
            <h2
              id="office-heading"
              className="font-display mt-7 text-[clamp(2.2rem,4.2vw,3.6rem)] leading-[1.05] tracking-[-0.03em]"
            >
              {office.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-[525px] text-base leading-8 text-muted-foreground">{office.description}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-9 flex items-start gap-3 border-t border-border pt-5">
              <MapPin size={18} className="mt-0.5 shrink-0 text-primary" strokeWidth={1.5} />
              <address className="not-italic text-sm leading-6 text-muted-foreground">{practice.address}</address>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
