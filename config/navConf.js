module.exports = [
    { text: 'Home', link: '/' },
    { text: 'Guide', link: '/guide/' },
    { text: 'External', link: 'https://google.com' },
    {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' },
          { text: '亚洲', items: [
            { text: 'Chinese', link: '/language/chinese/' },
            { text: 'Japanese', link: '/language/japanese/' }
          ] },
        ]
    }
  ]