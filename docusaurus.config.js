const math = require('remark-math')
const katex = require('rehype-katex')
module.exports = {
  title: 'SynFutures Docs',
  tagline: 'Future is here!',
  url: 'https://SynFutures.github.io',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'SynFutures', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,
    },
    navbar: {
      logo: {
        alt: 'SynFutures Logo',
        src: 'img/logo_w_24@2x.png',
        href: '/docs/docs',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: "https://synfutures.com",
          label: "Exchange",
          position: "left",
        },
        {
          href: 'https://github.com/SynFutures/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/channels/780750138229522453/780750138229522456',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/Syn_Futures',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SynFutures, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // Please change this to your repo.
          editUrl:
            'https://github.com/SynFutures/docs/edit/master/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
