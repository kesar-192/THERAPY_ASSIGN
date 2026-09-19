'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { siteContent } from '@/content/site-content';
import { Reveal, RevealGroup, revealItemVariants } from '@/components/motion/reveal';

export function FocusSection() {
  const { focus, services } = siteContent;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="focus" className="scroll-mt-24 bg-secondary/35 py-24 md:py-36" aria-labelledby="focus-heading">
      <div className="site-wrap">
        <div className="grid gap-10 md:grid-cols-[1.3fr_.9fr] md:items-end md:gap-12">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <Reveal>
              <p className="eyebrow text-primary">{focus.eyebrow}</p>
              <h2
                id="focus-heading"
                className="font-display mt-6 max-w-[560px] text-[clamp(2.2rem,4.2vw,3.6rem)] leading-[1.05] tracking-[-0.03em]"
              >
                {focus.title}
              </h2>
            </Reveal>
            <span className="font-mono-ui text-5xl text-accent/80">04</span>
          </div>

          <Reveal delay={0.1}>
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={focus.image.src}
                alt={focus.image.alt}
                fill
                sizes="(min-width: 768px) 35vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <RevealGroup className="mt-16 grid border-t border-border md:grid-cols-3" stagger={0.12}>
          {services.map((service) => (
            <motion.article
              key={service.number}
              variants={revealItemVariants(shouldReduceMotion)}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="group border-b border-border py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <p className="font-mono-ui text-xs text-accent">{service.number}</p>
              <h3 className="font-display mt-10 text-3xl leading-tight tracking-[-0.03em]">{service.title}</h3>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">{service.description}</p>
              <div className="mt-8 h-px w-10 bg-primary transition-all duration-300 group-hover:w-20" />
            </motion.article>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
