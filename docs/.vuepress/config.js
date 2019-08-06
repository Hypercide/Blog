const pluginConf = require('../../config/pluginConf.js');

module.exports = {
    title: 'Hypercide',
    description: 'Hypercide个人博客,vuepress学习',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    plugins: pluginConf,
    themeConfig: {
        nav: [
          { text: '我的Github', link: 'https://github.com/Hypercide' },
        ],
        sidebar: [
            '/',
            ['/about/', '关于我'],
            {
                title: '技术笔记',
                children: [
                    ['/skill/php/', 'PHP'],
                    ['/skill/redis/', 'Redis'],
                    ['/skill/mysql/', 'MySQL']
                ]
            },
            {
                title: '生活',
                children: [
                    ['/life/sanya/', '2018三亚游']
                ]
            },
        ]
    }
}