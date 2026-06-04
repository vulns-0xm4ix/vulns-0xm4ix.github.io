import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "0xM4IX",
  tagline: "Security Research & Notes",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://vulns-0xm4ix.github.io",
  baseUrl: "/",

  organizationName: "vulns-0xm4ix",
  projectName: "vulns-0xm4ix.github.io",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: "/",
      },
    ],
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: "0xM4IX",

      logo: {
        alt: "0xM4IX",
        src: "img/doppi.svg",
      },

      items: [
        {
          to: "/active-directory",
          label: "Active Directory",
          position: "left",
        },
        {
          to: "/linux",
          label: "Linux",
          position: "left",
        },
        {
          to: "/windows",
          label: "Windows",
          position: "left",
        },
        {
          href: "https://0xm4ix.github.io",
          label: "Writeups",
          position: "left",
          target: "_blank",
        },
        {
          type: "search",
          position: "right",
        },
      ],
    },

    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: false,
      },
    },

    footer: {
      copyright: " ",
    },

    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "powershell", "python"],
    },
  },
};

export default config;