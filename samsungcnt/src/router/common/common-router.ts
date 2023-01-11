export default {
    path: '/', name: '',  component: () => import("@/views/layout/DefaultLayout.vue"),
    children: [
        {
            path: '/mypage',
            name: 'mypage',
            component: () => import("@/views/common/user/Mypage.vue"),
            meta: {title: '마이페이지'},
        },
        {
            path: '/',
            name: 'home',
            meta: {title: '메인화면'},
            component: () => import("@/views/Home.vue"),
        },
    ]
}
