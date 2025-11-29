export const homePage = {
  metadata: {
    metadataBase: new URL("https://litedocs.dev"),
    title: {
      default: "LiteDocs - A Next.js documentation template created with MDX, Tailwind CSS, and Content Collections. Built for speed and customization.",
      template: `%s | LiteDocs`,
    },
    description:
      "A Next.js documentation template created with MDX, Tailwind CSS, and Content Collections. Built for speed and customization.",
    keywords: [
      "LiteDocs",
      "Documentation Template",
      "Next.js Documentation",
      "MDX Documentation",
      "React Documentation",
      "Open Source Documentation",
    ],
    openGraph: {
      title: "LiteDocs",
      description:
        "A Next.js documentation template created with MDX, Tailwind CSS, and Content Collections. Built for speed and customization.",
      url: "https://litedocs.dev",
      siteName: "LiteDocs",
      locale: "en-US",
      type: "website",
    },
    twitter: {
      title: "LiteDocs",
      card: "summary_large_image",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-snippet": -1,
      },
    },
  },
  title: "LiteDocs",
  description:
    "A Next.js documentation template created with MDX, Tailwind CSS, and Content Collections. Built for speed and customization.",
  url: "https://litedocs.dev",
  avatar_url: "/images/logo.svg",
};

export interface SidebarItem {
  title: string;
  href?: string;
  items?: SidebarItem[];
}

/**
 * Sidebar navigation configuration
 * Used for the left sidebar documentation navigation
 */
export const sidebarNavLinks: SidebarItem[] = [
  {
    title: "Overview",
    items: [
      {
        title: "Getting Started",
        href: "/overview/getting-started",
      },
      {
        title: "Changelog",
        href: "/overview/changelog",
      },
      {
        title: "About",
        href: "/overview/about",
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        title: "Themes",
        href: "/components/themes",
      },
      {
        title: "Code Block",
        href: "/components/code-block",
      },
      {
        title: "Table of Contents",
        href: "/components/table-of-contents",
      },
    ],
  },
];
