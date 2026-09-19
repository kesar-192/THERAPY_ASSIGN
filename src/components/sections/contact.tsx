'use client';

import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { Reveal } from '@/components/motion/reveal';

export function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="scroll-mt-24 bg-accent/12 py-24 md:py-32" aria-labelledby="contact-heading">
      <div className="site-wrap grid gap-14 md:grid-cols-[1fr_1fr] md:gap-24">
        <Reveal>
          <p className="eyebrow text-primary">Take the next step</p>
          <h2
            id="contact-heading"
            className="font-display mt-7 text-[clamp(2.6rem,5vw,4.6rem)] leading-[.98] tracking-[-0.04em]"
          >
            You do not have to have it all figured out.
          </h2>
          <p className="mt-8 max-w-[470px] leading-7 text-foreground/70">
            Tell me a little about what brings you here. We can start with a conversation about whether working
            together feels right.
          </p>
          <p className="mt-10 max-w-[430px] border-l border-primary pl-5 text-sm leading-7 text-foreground/70">
            This draft includes a working visual form for the demo. It does not send real email yet.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="bg-background p-7 md:p-10">
          {sent ? (
            <div className="flex min-h-[320px] flex-col justify-center">
              <Check size={24} className="text-primary" strokeWidth={1.5} />
              <h3 className="font-display mt-7 text-4xl">Thank you for reaching out.</h3>
              <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
                Your note is ready for this demo. A production version would connect this form to the practice&apos;s
                email workflow.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="focus-ring mt-8 w-fit border-b border-primary pb-1 font-mono-ui text-[0.62rem] uppercase tracking-[0.16em] text-primary"
              >
                Send another note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="eyebrow text-muted-foreground">
                  Your name
                </label>
                <input
                  required
                  id="name"
                  name="name"
                  className="focus-ring mt-3 w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="eyebrow text-muted-foreground">
                  Email address
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  className="focus-ring mt-3 w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="eyebrow text-muted-foreground">
                  A little about what brings you here
                </label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={4}
                  className="focus-ring mt-3 w-full resize-none border-0 border-b border-border bg-transparent px-0 py-3 text-sm leading-6 outline-none transition-colors focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="focus-ring mt-3 inline-flex items-center gap-3 bg-primary px-5 py-4 font-mono-ui text-[0.62rem] uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-foreground"
              >
                Send a note <ArrowUpRight size={15} strokeWidth={1.5} />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
