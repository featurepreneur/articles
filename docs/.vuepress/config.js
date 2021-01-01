module.exports = {
  title: 'Featurepreneur Articles',
  base: '/articles/',
  description: 'Featurepreneur Articles - Where ML Enthusiasts can share their knowledge',
  logo: './assets/img/logo.png',
  theme: require.resolve('../../'),
  themeConfig: {
  authors: [
      {
      name: 'Naveen',
      avatar: 'https://avatarfiles.alphacoders.com/145/thumb-145059.png',
      link: 'https://featurepreneur.com/donate',
      linktext: 'Follow',
      },
      {
        name: 'Raja CSP',
        avatar: 'https://avatarfiles.alphacoders.com/169/thumb-169234.png',
        link: 'https://medium.com/@rajacsp',
        linktext: 'Follow',
      },
      {
        name: 'Sainadh Akula',
        avatar: 'https://avatarfiles.alphacoders.com/211/thumb-211527.png',
        link: 'https://medium.com/@rajacsp',
        linktext: 'Follow',
      },
      {
        name: 'Divya',
        avatar: 'https://avatarfiles.alphacoders.com/805/thumb-80592.png',
        link: 'https://divya07msd.medium.com/',
        linktext: 'Follow',
      },
      {
        name: 'Eswara Prasad',
        avatar: 'https://avatarfiles.alphacoders.com/201/thumb-201668.png',
        link: 'https://divya07msd.medium.com/',
        linktext: 'Follow',
      },
      {
        name: 'Atul',
        avatar: 'https://avatarfiles.alphacoders.com/119/thumb-119076.jpg',
        link: 'https://divya07msd.medium.com/',
        linktext: 'Follow',
      },
      {
        name: 'Sakthi',
        avatar: 'https://avatarfiles.alphacoders.com/264/thumb-264313.jpg',
        link: 'https://divya07msd.medium.com/',
        linktext: 'Follow',
      },

      // more avatars: https://avatars.alphacoders.com/avatars/random
    ],
    footer: {
      contact: [
        {
          type: 'codepen',
          link: '#',
        },
        {
          type: 'facebook',
          link: '#',
        },
        {
          type: 'github',
          link: 'https://github.com/featurepreneur',
        },
        {
          type: 'gitlab',
          link: '#',
        },
        {
          type: 'instagram',
          link: '#',
        },
        {
          type: 'linkedin',
          link: '#',
        },
        {
          type: 'mail',
          link: '#',
        },
        {
          type: 'messenger',
          link: '#',
        },
        {
          type: 'phone',
          link: '#',
        },
        {
          type: 'twitter',
          link: '#',
        },
        {
          type: 'web',
          link: '#',
        }
      ],
      copyright: [
        {
          text: '2020 - 2021 @ Featureprenur',
          link: 'http://featurepreneur.com/',
        },
        {
          text: 'Micro appreciation platform for ML Enthusiasts',
          link: 'http://featurepreneur.com/',
        },
      ],
    },

    sitemap: {
      hostname: 'https://github.com/featurepreneur/articles'
    },
    comment: {
      service: 'disqus',
      shortname: 'demowebsite',
    },
    newsletter: {
      endpoint: '#'
    },
    feed: {
      canonical_base: 'https://github.com/featurepreneur/articles/',
    },
    smoothScroll: true
  },
}
