import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/components/HomeView"
import TourPackage from "@/components/TourPackage";

const routes = [
  { path: "/", 
    name: "Home",
     component: HomeView
     },

  { path: "/tourpack", name: "Tourpackage", component: TourPackage },
];

const router = createRouter({
  history: createWebHistory(process.env.Base_URL),
  routes,
});

export default router;