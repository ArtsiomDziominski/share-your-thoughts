import {createRouter, createWebHashHistory} from "vue-router";
import AllPostsView from "@/views/AllPostsView.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AllPostsView
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: () => import("@/views/DetailPostView.vue"),
        }
    ]
})
