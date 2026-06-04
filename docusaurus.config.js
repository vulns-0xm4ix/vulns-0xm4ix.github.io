import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "0xM4IX",
  tagline: "Security Research & Notes",
  favicon: "img/favicon-32x32.png",

  future: {
    v4: true,
  },

  url: "https://vulns-0xm4ix.github.io",
  baseUrl: "/",
  organizationName: "vulns-0xm4ix",
  projectName: "0xm4ix-docs",

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
          type: "search",
          position: "right",
        },
        {
          href: "https://0xm4ix.github.io",
          label: "Writeups ",
          position: "left",
          target: "_blank",
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
