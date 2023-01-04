import axios from "axios";
import {HEADER_REQUEST, CREATE_USER, URL} from "@/const/const.request-server";

const state = () => ({})

const getters = {
    requestCreateUser: () => (params) => {
        return axios.post(URL + CREATE_USER, {
            login: params.login,
            password: params.password
        }, {headers: HEADER_REQUEST})
    },
}

export default {
    namespaced: true,
    state,
    getters,
}