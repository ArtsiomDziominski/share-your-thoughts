import axios from "axios";
import {HEADER_REQUEST, LOGIN_USER, URL} from "@/const/const.request-server";

const state = () => ({
    isShowDialogLogin: false
})

const getters = {
    requestLoginUser: () => (user) => {
        return axios.post(URL + LOGIN_USER, {
            login: user.login,
            password: user.password,
        }, {headers: HEADER_REQUEST})
    },
    stateModalWindowLogin(state) {
        return state.isShowDialogLogin;
    }
}

const actions  = {
    async toggleModalWindowLogin({commit}) {
        commit('changeModalWindowLogin')
    }
}

const mutations = {
    changeModalWindowLogin: (state) => {
        state.isShowDialogLogin = !state.isShowDialogLogin;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}