import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login/index.vue"
import Home from "../views/Home/index.vue"
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
  // {
  //   path:"/aa",
  //   name:"aa",
  //   component:()=>{import }
  // }
];

const router = new VueRouter({
  routes,
});

export default router;
