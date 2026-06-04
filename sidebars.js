/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "category",
      label: "Welcome 👋",
      collapsible: false,
      items: [
        { type: "doc", id: "intro", label: "0xM4IX " },
        {
          type: "category",
          label: "Active Directory",
          link: {
            type: "doc",
            id: "active-directory/index",
          },
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "active-directory/kerberos-attacks",
              label: "Kerberos Attacks",
            },
            {
              type: "doc",
              id: "active-directory/credential-attacks",
              label: "Credential Attacks",
            },
            {
              type: "doc",
              id: "active-directory/adcs-attacks",
              label: "AD CS Attacks",
            },
            {
              type: "doc",
              id: "active-directory/delegation-abuse",
              label: "Delegation Abuse",
            },
          ],
        },
        { type: "doc", id: "linux", label: "Linux" },
        { type: "doc", id: "footholds", label: "Footholds" },
        { type: "doc", id: "methodology", label: "Methodology" },
      ],
    },
  ],
};

export default sidebars;
