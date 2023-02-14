export default {
    title: '円環 Ennkan',
    description: '',
    lastUpdated: true,
    cleanUrls: true,

    themeConfig: {
      siteTitle: '円環 Ennkan',

      nav: [
        { text: 'Home', link: '/' },
        { text: 'Blog', link: '/blog/' },
        { text: 'About', link: '/about' }
      ],
      socialLinks: [
        { icon: 'github', link: 'https://github.com/ennkan' },
      ],

      sidebar: {
        '/blog/': [
          {
            text: 'Blog',
            items: [
              { text: 'Index', link: '/blog/' },
              { text: 'はじめて', link: '/blog/2023-02-12-hajimete' },
              { text: 'Valentine\'s Day', link: '/blog/2023-02-14-valentine' },
            ]
          }
        ],
  
        '/about/': [
          {
            text: '关于本站',
            items: [
              { text: 'Index', link: '/about/' },
              { text: 'Three', link: '/config/three' },
              { text: 'Four', link: '/config/four' }
            ]
          }
        ]
      }
    }
  }
  