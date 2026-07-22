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
      { text: 'API', link: '/api/core' },
      { text: 'Datasets', link: '/guide/datasets' },
      { text: 'Architecture', link: '/architecture/overview' },
      { text: 'Ops', link: '/ops/priorities' },
      {
        text: 'Repos',
        items: [
          { text: 'SDK', link: 'https://github.com/GeoAtlasHQ/geoatlas-sdk' },
          { text: 'Datasets', link: 'https://github.com/GeoAtlasHQ/geo-datasets' },
          { text: 'Customer demo', link: 'https://github.com/GeoAtlasHQ/geo-atlas-customer' },
          { text: 'Docs', link: 'https://github.com/GeoAtlasHQ/geo-atlas-docs' },
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
          { text: 'Notable vs Popular', link: '/guide/notable-vs-popular' },
        ],
      },
      {
        text: 'SDK API (DOCS-03)',
        items: [
          { text: 'Getting started', link: '/api/getting-started' },
          { text: 'Core API', link: '/api/core' },
          { text: 'React API', link: '/api/react' },
          { text: 'Angular API', link: '/api/angular' },
          { text: 'Examples', link: '/api/examples' },
          { text: 'FAQ', link: '/api/faq' },
          { text: 'Popular Places', link: '/api/popular-places' },
        ],
      },
      {
        text: 'Architecture',
        items: [
          { text: 'Overview', link: '/architecture/overview' },
          { text: 'Vision', link: '/architecture/vision' },
          { text: 'Five planes', link: '/architecture/planes' },
          { text: 'Point intelligence', link: '/architecture/point-intelligence' },
          { text: 'Classification', link: '/architecture/classification' },
          { text: 'Repository map', link: '/architecture/repos' },
        ],
      },
      {
        text: 'Ecosystem',
        items: [{ text: 'Development order', link: '/ecosystem/development-order' }],
      },
      {
        text: 'Operations',
        items: [
          { text: 'Priorities', link: '/ops/priorities' },
          { text: 'Execution entry', link: '/ops/execution' },
          { text: 'Enable Pages', link: '/ops/pages' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GeoAtlasHQ/geo-atlas-docs' },
    ],
    footer: {
      message: 'GeoAtlasHQ · MIT',
      copyright: 'Consumer docs · deep architecture SSOT remains platform handbook',
    },
    search: {
      provider: 'local',
    },
  },
});
