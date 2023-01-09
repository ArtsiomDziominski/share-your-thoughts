import {createRouter, createWebHashHistory} from "vue-router";
import PostView from "@/views/PostView.vue";
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
            path: '/post',
            name: 'post',
            component: PostView
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: DetailPostView
        }
    ]
})
