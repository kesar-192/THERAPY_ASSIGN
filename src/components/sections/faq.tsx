'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { siteContent } from '@/content/site-content';
import { Reveal } from '@/components/motion/reveal';

export function FaqSection() {
  const [open, setOpen] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="faqs" className="scroll-mt-24 bg-secondary/35 py-24 md:py-32" aria-labelledby="faq-heading">
      <div className="site-wrap grid gap-14 md:grid-cols-[.65fr_1.35fr] md:gap-24">
        <Reveal>
          <p className="eyebrow text-primary">A few questions</p>
          <span className="mt-6 block font-mono-ui text-5xl text-accent/80">06</span>
          <h2
            id="faq-heading"
            className="font-display mt-8 text-[clamp(2.2rem,3.6vw,3.2rem)] leading-[1.05] tracking-[-0.03em]"
          >
            Starting therapy and what to expect.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="border-t border-border">
          {siteContent.faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div key={faq.question} className="border-b border-border">
                <button
                  type="button"
                  id={`faq-question-${index}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="focus-ring flex w-full items-center justify-between gap-6 py-6 text-left text-base font-medium"
                >
                  <span>{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: 'easeOut' }}
                    className="shrink-0 text-primary"
                  >
                    <ChevronDown size={19} strokeWidth={1.5} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: 'easeOut' }}
                      className="overflow-hidden"
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                    >
                      <p className="pb-6 pr-10 text-sm leading-7 text-muted-foreground">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}