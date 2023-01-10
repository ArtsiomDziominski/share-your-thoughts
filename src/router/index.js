import {createRouter, createWebHashHistory} from "vue-router";
import allPosts from "@/views/AllPosts.vue";
import DetailPostView from "@/views/DetailPostView.vue";

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
            component: DetailPostView
        }
    ]
})
