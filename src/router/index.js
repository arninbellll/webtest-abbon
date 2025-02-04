import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('@/views/HomeView.vue') },
  { path: '/list', component: () => import('@/views/ListView.vue') },
  { path: '/create', component: () => import('@/views/CreateView.vue') },
  { path: '/location', component: () => import('@/views/LocationView.vue') },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
