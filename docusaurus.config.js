const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const path = require('path');


/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'wooodhead', // Usually your GitHub org/user name.
  projectName: 'wooodhead.com', // Usually your repo name.
  themeConfig: {
    docs: {
      sidebar: { hideable: true }
    },
    // colorMode: {
    // disableSwitch: true,
    // respectPrefersColorScheme: false,
    // },
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   type: 'doc',
        //   docId: 'intro',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        {
          to: '/react',    // ./docs-api/Intro.md
          label: 'React',
          position: 'left',
          // activeBaseRegex: `/react/`,
        },
        // {
        //   to: '/typescript/intro',    // ./docs-api/Intro.md
        //   label: 'TypeScript',
        //   position: 'left',
        //   activeBaseRegex: `/typescript/`,
        // },
        // {
        //   to: '/docs-system/intro',  // ./docs-system/Intro.md
        //   label: 'My System',
        //   position: 'left',
        //   activeBaseRegex: `/docs-system/`,
        // },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/wooodhead/wooodhead.com',
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
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
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright ?? ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          '@/components': path.resolve(__dirname, './src/components'),
        },
      },
    ],
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    path.resolve(__dirname, "plugins/loaders"),
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'react',
        path: 'react',
        routeBasePath: 'react',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'typescript',
        path: 'typescript',
        routeBasePath: 'typescript',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-system',
        path: 'docs-system',
        routeBasePath: 'docs-system',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ]
};
