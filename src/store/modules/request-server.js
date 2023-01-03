import axios from "axios";
import {CREATE_USER, URL} from "@/components/const";

const state = () => ({
})

const getters = {
    requestCreateUser: () => (params) => {
        return axios.post(URL + CREATE_USER, {
            login: params.login,
            password: params.password
        }, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
    },
}

export default {
    namespaced: true,
    state,
    getters,
}