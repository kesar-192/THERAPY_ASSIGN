export type NavItem = { label: string; href: string };
export type FaqItem = { question: string; answer: string };
export type ServiceItem = { number: string; title: string; description: string };

export const siteContent = {
  practice: {
    fullName: 'Dr. Maya Reynolds, PsyD',
    shortName: 'Dr. Maya Reynolds',
    descriptor: 'Licensed Clinical Psychologist',
    location: 'Santa Monica, California',
    address: '123th Street 45 W, Santa Monica, CA 90401',
  },
  nav: [
    { label: 'About', href: '#about' },
    { label: 'How I work', href: '#approach' },
    { label: 'Focus areas', href: '#focus' },
    { label: 'Our office', href: '#office' },
    { label: 'FAQs', href: '#faqs' },
  ] satisfies NavItem[],
  hero: {
    eyebrow: 'Adult therapy · Santa Monica, CA',
    title: 'Therapy for anxiety, trauma, and burnout in Santa Monica.',
    accent: 'Santa Monica.',
    description:
      'A warm, grounded space for adults who feel overwhelmed, overextended, or quietly stuck in the pressure of everyday life.',
  },
  about: {
    eyebrow: 'A place to begin',
    title: 'Practical tools with depth-oriented work for adults in Santa Monica.',
    paragraphs: [
      'I’m Dr. Maya Reynolds, a licensed clinical psychologist offering therapy for adults in Santa Monica and secure telehealth for clients located in California.',
      'Many of the people I work with are thoughtful, capable, and high-achieving—but internally feel stuck in overthinking, emotionally on edge, or disconnected from themselves. Together, we make room for insight, resilience, and a steadier relationship with yourself.',
    ],
    image: {
      src: '/images/therapy-about.jpg',
      alt: 'A calm reading corner with a soft armchair, warm throw, and cup of tea',
    },
  },
  approach: {
    eyebrow: 'How I work',
    title: 'Warm, collaborative, and grounded therapy.',
    description:
      'Sessions are structured enough to feel supportive while leaving room for reflection and depth. I integrate evidence-based methods so we can work with both the emotional and psychological sides of what you are experiencing.',
    image: {
      src: '/images/therapy-approach.jpg',
      alt: 'Two armchairs facing each other in warm afternoon light, set up for an in-person therapy session',
    },
  },
  services: [
    {
      number: '01',
      title: 'Anxiety & panic',
      description:
        'Support for constant worry, tension, difficulty sleeping, and the feeling that you are never truly able to relax.',
    },
    {
      number: '02',
      title: 'Trauma & earlier experiences',
      description:
        'Paced work for single-incident trauma, childhood experiences, relationship wounds, or chronic stress, with safety and stabilization at the center.',
    },
    {
      number: '03',
      title: 'Burnout & perfectionism',
      description:
        'A space to slow down and reconnect when years of pushing through stress have left you feeling disconnected, pressured, or depleted.',
    },
  ] satisfies ServiceItem[],
  focus: {
    eyebrow: 'Focus areas',
    title: 'Support for the patterns that keep you feeling on edge.',
    image: {
      src: '/images/therapy-focus.jpg',
      alt: 'Hands resting calmly on a wooden table beside a folded blanket, a river stone, and a cup of tea',
    },
  },
  office: {
    eyebrow: 'Our office',
    title: 'A quiet, private space to feel more at ease.',
    description:
      'The Santa Monica office is naturally lit, comfortable, and uncluttered—a setting designed to feel calm and grounding from the moment you arrive. In-person therapy is available here, alongside secure telehealth for clients located in California.',
  },
  modalities: ['Cognitive-behavioral therapy', 'EMDR', 'Mindfulness-based practices', 'Body-oriented techniques'],
  faqs: [
    {
      question: 'Do you offer in-person and telehealth sessions?',
      answer:
        'Yes. I offer in-person therapy from my Santa Monica office and secure telehealth sessions for clients located in California.',
    },
    {
      question: 'Who do you work with?',
      answer:
        'I work with adults, including high-achieving, thoughtful people navigating anxiety, panic, trauma, burnout, perfectionism, and high internal pressure.',
    },
    {
      question: 'What approaches do you use?',
      answer:
        'I integrate cognitive-behavioral therapy, EMDR, mindfulness-based practices, and body-oriented techniques. Sessions are shaped around your needs rather than a fixed formula.',
    },
    {
      question: 'Do you work with entrepreneurs or high-pressure professionals?',
      answer:
        'Yes. Many of the people I work with are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through stress. Therapy can become a space to slow down, reconnect, and build more sustainable ways of living and working.',
    },
    {
      question: 'Where are sessions available?',
      answer:
        'In-person sessions take place at the Santa Monica office. Secure telehealth is available for clients located in California.',
    },
    {
      question: 'What happens when I reach out?',
      answer:
        'Share a little about what brings you here and whether you prefer in-person or telehealth. The next step is a conversation about whether the practice feels like a good fit.',
    },
  ] satisfies FaqItem[],
} as const;
