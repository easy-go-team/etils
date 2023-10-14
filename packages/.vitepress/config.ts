const Guide = [{ text: '使用指南', link: '/guide/' }];

const functions = [Guide, { text: 'storage', link: '/tool/storage/' }, { text: 'file', link: '/tool/file/' }];

const AIGorithms = [
  { text: '栈', link: '/core/stack/' },
  { text: '队列', link: '/core/queue/' },
];

const reactHooks = [functions, { text: '建设中', link: '' }];

const DefaultSideBar = [
  { text: '指南', items: Guide },
  { text: '工具函数集合', items: functions },
  { text: '数据结构与算法', items: AIGorithms },
  { text: 'React Hooks集合', items: reactHooks },
];

export default {
  base: '/',
  title: 'Etils',
  lang: 'zh-CN',
  themeConfig: {
    logo: '/logo.png',
    lastUpdated: true,
    lastUpdatedText: '最后修改时间',
    socialLinks: [{ icon: 'github', link: 'https://github.com/nhdeng/etils' }],
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '工具函数集合', link: '/tool/storage/' },
      { text: '数据结构与算法', link: '/core/stack/' },
    ],
    // 侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '',
          items: DefaultSideBar,
        },
      ],
      '/tool/': [
        {
          text: '',
          items: DefaultSideBar,
        },
      ],
      '/core/': [
        {
          text: '',
          items: DefaultSideBar,
        },
      ],
    },
  },
};
