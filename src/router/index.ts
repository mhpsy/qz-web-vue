import {createRouter, createWebHistory} from 'vue-router'
import HomeView from "@/views/HomeView.vue";

// @ts-ignore
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/login',
            name: 'login',
            component: () => import("@/views/login/index.vue"),
        }
    ]
})

export default router
