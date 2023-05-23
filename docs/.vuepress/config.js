module.exports={
    title:'ThreshBlog',
    description:'炊事博客',
    head:[
        ['link',{rel:'icon',href:'/favicon.ico'}],
        //增加manifest.json
        ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
      nav:[ // 导航栏配置
        {text: '首页', link: '/' },
        {text: '文章', link: '/artical/'},
        {text: '留言', link: '/mess/'},
        {text: '友链', link: '/chain/'},
        {text: '关于', link:'/about/'}    
      ],
      sidebar: 'auto', // 侧边栏配置
      sidebarDepth: 2, // 侧边栏显示2级
    },
    plugins:[
        [
            '@vuepress/back-to-top'
        ],
        [
            '@vuepress/pwa', {
               serviceWorker: true,
               updatePopup: true
             }
        ]
    ]
};
