import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
        name: 'home',
      },
      { path: '/object/:id', component: () => import('pages/ObjectPage.vue') },
      {
        path: 'demo',
        component: () => import('pages/DemoPage.vue'),
        name: 'demo',
      },
      { path: 'team', component: () => import('pages/TeamPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
