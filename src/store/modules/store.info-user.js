import axios from "axios";
import {GET_USER, HEADER_CONTENT_TYPE, UPDATE_USER_INFO, BURL} from "@/const/const.request-server";
import {TOKEN} from "@/const/const";

const state = () => ({
    isShowDialogInfoUser: false
})

const getters = {
    getUserInfo: () => () => {
        const token = localStorage.getItem(TOKEN);
        return axios.get(BURL + GET_USER, {headers: {'Content-Type': HEADER_CONTENT_TYPE, 'Authorization': 'Bearer ' + token}})
    },
    stateModalWindowInfoUser(state) {
        return state.isShowDialogInfoUser;
    },
    requestUpdateUserInfo: () => (mail, phone) => {
        const token = localStorage.getItem(TOKEN);
        return axios.post(BURL + UPDATE_USER_INFO, {mail, phone}, {headers: {'Content-Type': HEADER_CONTENT_TYPE, 'Authorization': 'Bearer ' + token}})
    },
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