import axios from "axios";
import {HEADER_REQUEST, LOGIN_USER, URL} from "@/const/const.request-server";

const state = () => ({})

const getters = {
    requestLoginUser: () => (params) => {
        console.log(params)
        return axios.post(URL + LOGIN_USER, {
            login: params.login,
            password: params.password,
        }, {headers: HEADER_REQUEST})
    },
}

export default {
    namespaced: true,
    state,
    getters,
}