// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

import VimeoPopup from '@/views/popup/VimeoPopup.vue';
import YoutubePopup from '@/views/popup/YoutubePopup.vue';

import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import PostListView from '@/views/posts/PostListView.vue';

import NestedView from '@/views/nested/NestedView.vue';
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';
import NestedHomeView from '@/views/nested/NestedHomeView.vue';

import MyPage from '@/views/MyPage.vue';

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
    component: PostDetailView,
    props: true,

    // props: route => ({
    //   id: parseInt(route.params.id),
    // }),
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
    children: [
      {
        path: ' ',
        name: 'NestedHome',
        component: NestedHomeView,
      },
      {
        path: 'one',
        name: 'NestedOne',
        component: NestedOneView,
      },
      {
        path: 'two',
        name: 'NestedTwo',
        component: NestedTwoView,
      },
    ],
  },
  {
    path: '/my',
    name: 'MyPage',
    component: MyPage,

    // 라우터 가드
    beforeEnter: [removeQueryString],
  },
];

function removeQueryString(to) {
  if (Object.keys(to.query).length > 0) {
    return { path: to.path, query: {} };
  }
}

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

// 네비게이션 가등 : 첫번째 매개변수(to)는 이동할페이지,
// 두번째 매개변수(from)는 이동하기 전의 페이지,
router.beforeEach((to, from) => {
  // console.log('to: ', to);
  // console.log('from: ', from);
  // return 또는 다른페이지로 리다이렉션할 수 있다.
  // if (to.name === 'MyPage') {
  //   return { name: 'Home' };
  // }
});

export default router;
