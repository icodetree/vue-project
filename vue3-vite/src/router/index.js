// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';

import PostCreateView from '@/views/posts/PostCreateView.vue';
import PosDetailView from '@/views/posts/PosDetailView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import MoviePopup from '@/views/popup/MoviePopup.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/posts',
    component: PostListView,
  },
  {
    path: '/posts/create',
    component: PostCreateView,
  },
  {
    path: '/posts/:id',
    component: PosDetailView,
  },
  {
    path: '/posts/:id/edit',
    component: PostEditView,
  },
  {
    path: '/movie',
    component: MoviePopup,
  },
];
const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
