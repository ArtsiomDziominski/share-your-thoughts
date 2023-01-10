import axios from "axios";
import {BURL, HEADER_CONTENT_TYPE} from "@/const/const.request-server";
import {TOKEN} from "@/const/const";

const state = () => ({})

const getters = {
    requestServerPost: () => (urlBody, body) => {
        const token = localStorage.getItem(TOKEN);
        return axios.post(BURL + urlBody, body, {
            headers: {
                'Content-Type': HEADER_CONTENT_TYPE,
                'Authorization': 'Bearer ' + token
            }
        })
    },
    requestServerGet: () => (urlBody) => {
        const token = localStorage.getItem(TOKEN);
        return axios.get(BURL + urlBody, {
            headers: {
                'Content-Type': HEADER_CONTENT_TYPE,
                'Authorization': 'Bearer ' + token
            }
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
}