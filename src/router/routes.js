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
        path: "/about",
        name: "About",
        component: () => import("src/pages/About.vue"),
      },
      {
        path: "/test",
        name: "Test",
        component: () => import("src/pages/Test.vue"),
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
