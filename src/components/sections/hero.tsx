import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { siteContent } from '@/content/site-content';
import { Reveal } from '@/components/motion/reveal';

export function HeroSection() {
  const { hero } = siteContent;
  const [beforeAccent] = hero.title.split(hero.accent);

  return (
    <section
      className="relative overflow-hidden border-b border-border bg-secondary/40"
      aria-labelledby="hero-heading"
    >
      <div className="site-wrap grid min-h-[680px] items-center gap-12 py-20 md:grid-cols-[minmax(260px,0.8fr)_1.2fr] md:gap-20 md:py-24 lg:min-h-[700px]">
        <div className="relative order-2 md:order-1">
          <div
            className="absolute -left-8 -top-8 h-24 w-24 rounded-full border border-accent/60 md:-left-14 md:-top-12"
            aria-hidden="true"
          />
          <Reveal>
            <div className="relative aspect-[4/5] max-w-[430px] overflow-hidden bg-muted shadow-[18px_18px_0_hsl(var(--accent)/.35)]">
              <Image
                src="/images/maya-portrait.png"
                alt="Dr. Maya Reynolds smiling in her office"
                width={600}
                height={750}
                priority
                className="h-full w-full object-cover object-top"
              />
            </div>
            <p className="mt-5 max-w-[260px] text-sm leading-relaxed text-muted-foreground">
              A private, naturally lit office in the heart of Santa Monica.
            </p>
          </Reveal>
        </div>

        <div className="order-1 max-w-[700px] md:order-2">
          <Reveal>
            <p className="eyebrow text-primary">{hero.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1
              id="hero-heading"
              className="font-display mt-7 text-[clamp(3rem,6.4vw,6.2rem)] leading-[.98] tracking-[-0.045em] text-foreground"
            >
              {beforeAccent}
              <em className="text-primary">{hero.accent}</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-9 max-w-[510px] text-base leading-7 text-muted-foreground md:text-lg">
              {hero.description}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <a
              href="#contact"
             className="focus-ring mt-9 inline-flex items-center gap-3 border-b border-primary pb-2 font-mono-ui text-[0.65rem] uppercase tracking-[0.16em] text-primary transition-colors hover:border-accent hover:text-accent"
            >
              Begin with a conversation <ArrowUpRight size={15} strokeWidth={1.5} />
            </a>
          </Reveal>
        </div>
      </div>
      <div
        className="absolute bottom-5 right-8 hidden font-mono-ui text-[0.6rem] tracking-[0.16em] text-muted-foreground md:block"
        aria-hidden="true"
      >
        01 / 06
      </div>
    </section>
  );
}
