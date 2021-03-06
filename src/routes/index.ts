export default [
  {
    name: 'home',
    path: '/',
    component: () => import('@/pages/Home/Home.vue'),
  },
  {
    name: 'typescript',
    path: '/typescript',
    component: () => import('@/pages/Home/TypeScriptIntro.vue'),
  },
  {
    name: 'vue',
    path: '/vue',
    component: () => import('@/pages/Home/VueIntro.vue'),
  },
];
