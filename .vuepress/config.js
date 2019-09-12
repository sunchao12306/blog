module.exports = {
  head: [],
  port: 3000,
  host: '127.0.0.1',
  extraWatchFiles: [ // 额外监听文件
    '/README.md'
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '今天是周五',
      description: '前端技术博客'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Today is Friday',
      description: 'Front-end Technology Blog'
    }
  },
  markdown: {
    lineNumbers: true
  },
  cofigureWebpack: {
    alias: {
      '@static': '/.vuepress/public'
    }
  },
  themeConfig: {
    searchMaxSuggestions: 5,
    repo: 'https://github.com/dongbusi/blog',
    repoLabel: 'Github',
    editLinks: true,
    lastUpdated: '最后更新时间',
    displayAllHeaders: true,
    locales: {
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        nav: [
          { text: 'home', link: '/'},
          { text: 'layout', items: [
            { text: 'HTML', link: '/html/'},
            { text: 'CSS', link: '/css/'},
            { text: 'SCSS/SASS', link: '/sass/'},
          ]},
        ]
      },
      '/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        nav: [
          { text: '主页', link: '/'},
          { text: '布局', items: [
            { text: 'HTML', link: '/html/'},
            { text: 'CSS', link: '/css/'},
            { text: 'SCSS/SASS', link: '/sass/'},
          ]},
        ],
        sidebar: 'auto'
      }
    }
  }
}