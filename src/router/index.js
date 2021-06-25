import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

import Landing from "../views/Landing.vue";
import Home from "../views/Home.vue";
import Blogs from "../views/blog/Blogs.vue";
import Blog from "../views/blog/Blog.vue";
import AddBlog from "../views/blog/AddBlog.vue";
import EditBlog from "../views/blog/EditBlog.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      requireLogin: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
    meta: {
      requireLogin: true,
    },
  },
  {
    path: "/add-blog",
    name: "AddBlog",
    component: AddBlog,
    meta: {
      requireLogin: true,
    },
  },
  {
    path: "/edit-blog/:id",
    name: "EditBlog",
    component: EditBlog,
    meta: {
      requireLogin: true,
    },
  },
  {
    path: "/blogs/:id",
    name: "Blog",
    component: Blog,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requireLogin) &&
    !store.state.isAuthenticated
  ) {
    next("/login");
  } else {
    next();
  }
});

export default router;
