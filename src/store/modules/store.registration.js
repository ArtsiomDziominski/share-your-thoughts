import axios from "axios";
import {GET_USER_NAME, URL} from "@/const/const.request-server";

const state = () => ({})

const getters = {
    checkValidLoginPassword: () => (params, passwordControl) => {
        return params.password === passwordControl && params.login.length > 4;
    },
    checkUserRepeat: () => (login) => {
        return axios.post(URL + GET_USER_NAME, {
            login: login,
        }, {headers: {HEADER_REQUEST}})
    },

}

export default {
    namespaced: true,
    state,
    getters,
}