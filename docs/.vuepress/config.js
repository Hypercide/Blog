module.exports = {
    title: 'Hypercide',
    description: 'Hypercide个人博客,vuepress学习',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        repo: 'Hypercide/Blog',
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
                    ['/skill/mysql/', 'MySQL']
                ]
            },
        ]
    }
}