import Vue from "vue";
import VueRouter from "vue-router";

import LandingPage from "../components/LandingPage.vue";
import LoginPage from "../components/LoginPage.vue";
import MainPage from "../components/MainPage.vue";

Vue.use(VueRouter);

const routeList = [
  {
    path: "/",
    redirect: "/LandingPage",
  },
  {
    path: "/LandingPage",
    component: LandingPage,
  },
  {
    path: "/LoginPage",
    component: LoginPage,
  },
  {
    path: "/MainPage",
    component: MainPage,
  }
];




export const router = new VueRouter({
  routes: routeList,
});



