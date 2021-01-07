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
      avatar: 'https://miro.medium.com/fit/c/262/262/0*gMBbmWkbCglnrz_-',
      link: 'https://featurepreneur.com/donate',
      linktext: 'Follow',
      },
      {
        name: 'Raja CSP',
        avatar: 'https://miro.medium.com/fit/c/262/262/1*ESWo3C7POnPUL5bMBJxlKA.jpeg',
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
      {
        name: 'Shruti',
        avatar: 'https://miro.medium.com/fit/c/262/262/1*qV8vjbsMZc0TFFPIYFf4jg.jpeg',
        link: 'https://medium.com/@shrued',
        linktext: 'Follow',
      },
      {
        name: 'Vaishnavi V',
        avatar: 'https://miro.medium.com/fit/c/96/96/0*taIGTw7Hm9Pgm2i6.jpg',
        link: 'https://medium.com/@vaishnavivenkat26',
        linktext: 'Follow',
      },
      {
        name: 'TactLabs',
        avatar: 'https://miro.medium.com/fit/c/262/262/0*go2alZqQzHzfP4W9.jpg',
        link: 'https://tactlabs.medium.com/',
        linktext: 'Follow',
      },
      {
        name: 'Gokul Prakash',
        avatar: 'https://miro.medium.com/fit/c/131/131/0*HkEU8rzmi-9j6epg',
        link: 'https://medium.com/@gokulprakash22',
        linktext: 'Follow',
      },
      {
        name: 'Charles Samuel R',
        avatar: 'https://miro.medium.com/fit/c/262/262/1*Eeg1Z7n_OxZqClLJnzy8qA.jpeg',
        link: 'https://medium.com/@gokulprakash22',
        linktext: 'Follow',
      }


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
