import axios from "axios";
import {GET_ALL_POSTS, HEADER_CONTENT_TYPE, BURL} from "@/const/const.request-server";

const getters = {
    requestAllPosts() {
        return axios.get(BURL + GET_ALL_POSTS, { headers: { 'Content-Type': HEADER_CONTENT_TYPE } })
    }
}

export default {
    namespaced: true,
    getters,
}