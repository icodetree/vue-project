// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';

import PostCreateView from '@/views/posts/PostCreateView.vue';
import PosDetailView from '@/views/posts/PosDetailView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import BemeoPopup from '@/views/popup/BemeoPopup.vue';
import YoutubePopup from '@/views/popup/YoutubePopup.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/posts',
    name: 'PostList',
    component: PostListView,
  },
  {
    path: '/posts/create',
    name: 'PostCreate',
    component: PostCreateView,
  },
  {
    path: '/posts/:id',
    name: 'PostDetail',
    component: PosDetailView,
  },
  {
    path: '/posts/:id/edit',
    name: 'PostEdit',
    component: PostEditView,
  },
  {
    path: '/bemeo',
    name: 'bemeo',
    component: BemeoPopup,
  },
  {
    path: '/youtube',
    name: 'youtube',
    component: YoutubePopup,
  },
];
const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
