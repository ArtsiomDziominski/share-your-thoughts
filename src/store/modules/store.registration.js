import axios from "axios";
import {GET_USER_NAME, URL} from "@/components/const";

const state = () => ({})

const getters = {
    checkValidLoginPassword: () => (params, passwordControl) => {
        return params.password === passwordControl && params.login.length > 4;
    },
    checkUserRepeat: () => (login) => {
        return axios.post(URL + GET_USER_NAME, {
            login: login,
        }, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
    },

}

export default {
    namespaced: true,
    state,
    getters,
}