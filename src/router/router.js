import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login/index.vue"
import Home from "../components/home.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
];

const router = new VueRouter({
  routes,
});

export default router;
