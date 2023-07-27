import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import SuccessSignUp from "../views/SuccessSignUp.vue";

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/success-sign-up', name: 'SuccessSignUp', component: SuccessSignUp},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router