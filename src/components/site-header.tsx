'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { siteContent } from '@/content/site-content';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-background/95 backdrop-blur-sm">
      <div className="site-wrap flex h-[76px] items-center justify-between">
         <a href="#top" className="focus-ring group leading-none">
          <span className="font-display text-[1.35rem] tracking-[-0.04em]">
            {siteContent.practice.shortName}
          </span>
          <span className="mt-1 block font-mono-ui text-[0.53rem] uppercase tracking-[0.2em] text-primary">
            {siteContent.practice.descriptor}
          </span>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {siteContent.nav.map((item) => (
            <a
              href={item.href}
              key={item.href}
               className="focus-ring font-mono-ui text-[0.58rem] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
             className="focus-ring border border-primary px-5 py-3 font-mono-ui text-[0.58rem] uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
           className="focus-ring p-2 text-primary lg:hidden"
        >
          {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {menuOpen && (
        <nav aria-label="Mobile navigation" className="border-t border-border bg-background px-5 pb-6 pt-3 lg:hidden">
          {siteContent.nav.map((item) => (
            <a
              href={item.href}
              key={item.href}
              onClick={() => setMenuOpen(false)}
               className="focus-ring block border-b border-border py-4 font-mono-ui text-[0.65rem] uppercase tracking-[0.14em]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
             className="focus-ring mt-5 inline-block bg-primary px-5 py-3 font-mono-ui text-[0.62rem] uppercase tracking-[0.14em] text-primary-foreground"
          >
            Contact {siteContent.practice.shortName.replace('Dr. ', '')}
          </a>
        </nav>
      )}
    </header>
  );
}
