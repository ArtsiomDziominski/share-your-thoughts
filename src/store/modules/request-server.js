import axios from "axios";
import {HEADER_REQUEST, CREATE_USER, BURL, HEADER_CONTENT_TYPE} from "@/const/const.request-server";
import {TOKEN} from "@/const/const";

const state = () => ({})

const getters = {
    requestCreateUser: () => (params) => {
        return axios.post(BURL + CREATE_USER, {
            login: params.login,
            password: params.password
        }, {headers: HEADER_REQUEST})
    },
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