import { siteContent } from '@/content/site-content';

export function SiteFooter() {
  return (
    <footer className="bg-primary py-10 text-primary-foreground">
      <div className="site-wrap flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="font-display text-2xl">{siteContent.practice.fullName}</p>
          <p className="mt-2 font-mono-ui text-[0.58rem] uppercase tracking-[0.16em] text-primary-foreground/60">
            {siteContent.practice.descriptor} · {siteContent.practice.location}
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-primary-foreground/75 md:items-end">
           <a href="#contact" className="focus-ring transition-colors hover:text-accent-on-dark">
            Begin with a conversation
          </a>
          <p className="text-xs">
            © {new Date().getFullYear()} {siteContent.practice.fullName.replace('Dr. ', '')} Therapy
          </p>
        </div>
      </div>
    </footer>
  );
}
