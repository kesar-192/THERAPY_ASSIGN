import Image from 'next/image';
import { siteContent } from '@/content/site-content';
import { Reveal } from '@/components/motion/reveal';

export function AboutSection() {
  const { about, practice } = siteContent;

  return (
    <section id="about" className="scroll-mt-24 bg-background py-24 md:py-36" aria-labelledby="about-heading">
      <div className="site-wrap grid gap-14 md:grid-cols-[.6fr_1fr_.9fr] md:gap-12">
        <div>
          <Reveal>
            <p className="eyebrow text-primary">{about.eyebrow}</p>
            <span className="mt-6 block font-mono-ui text-5xl text-accent/80">02</span>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <h2
              id="about-heading"
              className="font-display text-[clamp(2.2rem,4.2vw,3.6rem)] leading-[1.05] tracking-[-0.03em]"
            >
              {about.title}
            </h2>
          </Reveal>
          <div className="mt-10 space-y-6 text-[1.05rem] leading-8 text-muted-foreground">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={0.1 + index * 0.1}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div className="mt-12 h-px w-full bg-border" />
            <p className="mt-5 font-mono-ui text-[0.63rem] uppercase tracking-[0.16em] text-muted-foreground">
              {practice.fullName} · {practice.location}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="order-first md:order-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
            <Image
              src={about.image.src}
              alt={about.image.alt}
              fill
              sizes="(min-width: 768px) 25vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
