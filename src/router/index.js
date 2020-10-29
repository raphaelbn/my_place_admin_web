import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/:catchAll(.*)",
    component: Login,
  },
  {
    path: "/:/login",
    name: "Login",
    component: Login
  },
  {
    path: "/home",
    name: "Home",
    // route level code-splitting
    // this generates a separate chunk (home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/sign-up",
    name: "SignUp",
    // route level code-splitting
    // this generates a separate chunk (sign-up.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "sign-up" */ "../views/SignUp.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
