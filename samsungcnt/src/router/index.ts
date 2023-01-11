import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import commonRouter from "@/router/common/common-router";
import SigninRouter from "@/router/signin/signin-router";

const routes: RouteRecordRaw[] = [
  commonRouter,
  SigninRouter
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
