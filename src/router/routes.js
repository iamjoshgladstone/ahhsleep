const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("src/pages/Home.vue"),
      },
      {
        path: "/timer",
        name: "Timer",
        component: () => import("src/pages/Timer.vue"),
      },
      {
        path: "/about",
        name: "About",
        component: () => import("src/pages/About.vue"),
      },
      {
        path: "/test",
        name: "test",
        component: () => import("src/pagesold/HomeOLD.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
