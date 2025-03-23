import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Desenvolva seu sistema robusto e escalável',
    description:
      'Criação de sistemas eficientes, escaláveis e de alta performance. Desenvolvemos websites modernos, interfaces intuitivas e soluções personalizadas. Especializados em APIs, microsserviços, UI/UX design e aplicações web inovadoras, transformamos ideias em projetos digitais de alto nível.',
    openGraph: {
      type: 'website',
      url: 'https://gc-technology.vercel.app/',
      title: 'Desenvolvimento de Sistemas e Websites',
      description:
        'Criação de sistemas eficientes, escaláveis e de alta performance. Desenvolvemos websites modernos, interfaces intuitivas e soluções personalizadas. Especializados em APIs, microsserviços, UI/UX design e aplicações web inovadoras, transformamos ideias em projetos digitais de alto nível.',
      images: [
        {
          url: 'https://gc-technology.vercel.app/Logo.svg',
          width: 1200,
          height: 630,
          alt: 'Logo do portfólio',
        },
      ],
      siteName: 'Desenvolvimento de Sistemas',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@SeuPerfilTwitter',
      creator: '@devgustavogantois_',
      title: 'Desenvolvimento de Sistemas e Websites',
      description:
        'Criação de sistemas eficientes, escaláveis e de alta performance. Desenvolvemos websites modernos, interfaces intuitivas e soluções personalizadas. Especializados em APIs, microsserviços, UI/UX design e aplicações web inovadoras, transformamos ideias em projetos digitais de alto nível.',
      images: ['https://gc-technology.vercel.app/Logo.svg'],
    },
    robots: {
      index: true,
      follow: true,
    },
    keywords: 'desenvolvimento web, sistemas escaláveis, criação de sites, UI/UX, APIs, microsserviços, design de interfaces, aplicações web, tecnologia',
};
