import axios from "axios";
import {GET_USER, HEADER_CONTENT_TYPE, URL} from "@/const/const.request-server";

const state = () => ({
    isShowDialogInfoUser: false
})

const getters = {
    getUserInfo: () => (token) => {
        return axios.get(URL + GET_USER, {headers: {'Content-Type': HEADER_CONTENT_TYPE, 'Authorization': 'Bearer ' + token}})
    },
    stateModalWindowInfoUser(state) {
        return state.isShowDialogInfoUser;
    }
}

const actions  = {
    async toggleModalWindowInfoUser({commit}) {
        commit('changeModalWindowInfoUser')
    }
}

const mutations = {
    changeModalWindowInfoUser: (state) => {
        state.isShowDialogInfoUser = !state.isShowDialogInfoUser;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}