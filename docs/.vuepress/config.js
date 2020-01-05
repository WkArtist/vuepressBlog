module.exports = {
    title: '飞跃高山',//标题
    description: '飞跃高山与大洋的鱼的文档',//利于seo
    head: [
      ['link', { rel: 'icon', href: '/Favicon.ico' }]
    ],
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
          lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
        }
    },
    // base: '/vuepressBlog',
    themeConfig: {//导航链接
    //   navbar: false,//禁用所有导航栏
      repo: 'WkArtist/wkBlog',
      lastUpdated: '上次更新',
      nav: [
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
      ],
    //   sidebar: 'auto'//自动生成目录
    //   sidebar: [
    //     // '/',
    //     // '/css/',
    //     // '/about/test',
    //     // ['/javascript/','js']
    //     {
    //         title: 'Group 1',   // 必要的
    //         path: '/css/',      // 可选的, 应该是一个绝对路径
    //         collapsable: true, // 折叠
    //         sidebarDepth: 1,    // 可选的, 默认值是 1
    //         children: [
    //             '/css/',
    //             '/css/css1',
    //             '/css/css2'
    //         ]
    //     },
    //     {
    //         title: 'Group 2',
    //         path: '/javascript/',      // 可选的, 应该是一个绝对路径
    //         collapsable: true, // 折叠
    //         sidebarDepth: 1,    // 可选的, 默认值是 1
    //         children: [
    //             '/javascript/',
    //             '/javascript/javascript1',
    //             '/javascript/javascript2'
    //         ]
    //     }
    //   ],
       sidebar: {
        '/css/': [
          '',     /* /foo/ */
          'css1',  /* /foo/one.html */
          'css2'   /* /foo/two.html */
        ],
  
        '/javascript/': [
          '',      /* /bar/ */
          'javascript1', /* /bar/three.html */
          'javascript2'   /* /bar/four.html */
        ],
  
        // fallback
        '/': [
          '',        /* / */
          '/about/', /* /contact.html */
          '/about/test'    /* /about.html */
        ]
      },
      sidebarDepth: 2,//设置层级
      displayAllHeaders: true,//展开所有层级
    }
  }
  