import { defineConfig } from 'vitepress';

const isPages = process.env.VITEPRESS_BASE === 'pages';

export default defineConfig({
  title: 'GeoAtlas Docs',
  description: 'Location Intelligence — SDK, datasets, architecture, and execution hub',
  base: isPages ? '/geo-atlas-docs/' : '/',
  cleanUrls: true,
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: 'Quickstart', link: '/guide/quickstart' },
      { text: 'SDK', link: '/guide/sdk' },
      { text: 'Datasets', link: '/guide/datasets' },
      { text: 'Architecture', link: '/architecture/overview' },
      { text: 'Ops', link: '/ops/execution' },
      {
        text: 'Repos',
        items: [
          { text: 'SDK', link: 'https://github.com/GeoAtlasHQ/geoatlas-sdk' },
          { text: 'Datasets', link: 'https://github.com/GeoAtlasHQ/geo-datasets' },
          { text: 'Customer demo', link: 'https://github.com/GeoAtlasHQ/geo-atlas-customer' },
          { text: 'Generator', link: 'https://github.com/GeoAtlasHQ/geo-data-generator' },
        ],
      },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Quickstart', link: '/guide/quickstart' },
          { text: 'SDK', link: '/guide/sdk' },
          { text: 'Datasets', link: '/guide/datasets' },
        ],
      },
      {
        text: 'Architecture',
        items: [
          { text: 'Overview', link: '/architecture/overview' },
          { text: 'Repository map', link: '/architecture/repos' },
        ],
      },
      {
        text: 'Operations',
        items: [{ text: 'Execution entry', link: '/ops/execution' }],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GeoAtlasHQ/geo-atlas-docs' },
    ],
    footer: {
      message: 'GeoAtlasHQ · MIT',
      copyright: 'Consumer docs · deep architecture lives in platform handbook SSOT',
    },
    search: {
      provider: 'local',
    },
  },
});
