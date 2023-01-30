import {createRouter, createWebHashHistory} from "vue-router";
import allPosts from "@/views/AllPostsView.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: allPosts
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: () => import("@/views/DetailPostView.vue"),
        }
    ]
})
