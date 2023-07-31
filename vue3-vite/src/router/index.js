// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';

import PostCreateView from '@/views/posts/PostCreateView.vue';
import PosDetailView from '@/views/posts/PosDetailView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import VimeoPopup from '@/views/popup/VimeoPopup.vue';
import YoutubePopup from '@/views/popup/YoutubePopup.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import NestedView from '@/views/nested/NestedView.vue';

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
    props: true,
  },
  {
    path: '/posts/:id/edit',
    name: 'PostEdit',
    component: PostEditView,
  },
  {
    path: '/vimeo',
    name: 'Vimeo',
    component: VimeoPopup,
  },
  {
    path: '/youtube',
    name: 'Youtube',
    component: YoutubePopup,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Not Found',
    component: NotFoundView,
  },
  {
    path: '/nested',
    name: 'Nested',
    component: NestedView,
  },
];
const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
