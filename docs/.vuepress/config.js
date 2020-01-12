const pluginConf = require('../../config/pluginConf.js');
const navConf = require('../../config/navConf.js');
const sidebarConf = require('../../config/sidebarConf/index.js');

module.exports = {
    title: '飞跃高山',//标题
    description: '飞跃高山与大洋的鱼的文档',//利于seo
    head: [
      ['link', { rel: 'icon', href: '/Favicon.ico' }],
      ['link', { rel: 'manifest', href: '/mainfest.json' }]
    ],
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
          lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
        }
    },
    base: '/vuepressBlog/',//如果你打算发布到 https://<USERNAME>.github.io/，则可以省略这一步，因为 base 默认即是 "/"。如果你打算发布到 https://<USERNAME>.github.io/<REPO>/（也就是说你的仓库在 https://github.com/<USERNAME>/<REPO>），则将 base 设置为 "/<REPO>/"。
    plugins: pluginConf,
    themeConfig: {//导航链接
    //   navbar: false,//禁用所有导航栏
      repo: 'WkArtist/vuepressBlog',
      lastUpdated: '上次更新',
      nav: navConf,
      sidebar: sidebarConf,
      sidebarDepth: 2,//设置层级
      displayAllHeaders: true,//展开所有层级
      // 默认是 false, 设置为 true 来启用
      editLinks: true,
      // 默认为 "Edit this page"
      editLinkText: '帮助我们改善此页面！',
      docsDir: 'docs/'
    }
  }
  