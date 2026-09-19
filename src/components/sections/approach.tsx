import Image from 'next/image';
import { Check } from 'lucide-react';
import { siteContent } from '@/content/site-content';
import { Reveal } from '@/components/motion/reveal';

export function ApproachSection() {
  const { approach, modalities } = siteContent;

  return (
    <section
      id="approach"
      className="scroll-mt-24 bg-primary py-24 text-primary-foreground md:py-32"
      aria-labelledby="approach-heading"
    >
      <div className="site-wrap grid gap-14 md:grid-cols-[1fr_1fr_1.1fr] md:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow text-accent-on-dark">{approach.eyebrow}</p>
            <span className="mt-6 block font-mono-ui text-5xl text-accent-on-dark">03</span>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <h2
              id="approach-heading"
              className="font-display text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.05] tracking-[-0.03em]"
            >
              {approach.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-9 max-w-[520px] text-lg leading-8 text-primary-foreground/75">
              {approach.description}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12 grid grid-cols-1 border-t border-primary-foreground/20 sm:grid-cols-2">
              {modalities.map((modality, index) => (
                <div
                  key={modality}
                  className="flex items-center gap-4 border-b border-primary-foreground/20 py-5 text-sm"
                >
                  <Check size={15} className="text-accent-on-dark" strokeWidth={1.5} />
                  <span>{modality}</span>
                  <span className="ml-auto font-mono-ui text-[0.6rem] text-primary-foreground/45">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src={approach.image.src}
              alt={approach.image.alt}
              fill
              sizes="(min-width: 768px) 30vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
