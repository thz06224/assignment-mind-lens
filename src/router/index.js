import { createRouter, createWebHistory } from "vue-router";
import exampleView from "../views/exampleView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Example of button and alert notification",
      component: exampleView,
    }
  ],
});

export default router;
