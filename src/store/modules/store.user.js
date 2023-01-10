import axios from "axios";
import {GET_USER, HEADER_CONTENT_TYPE, UPDATE_USER_INFO, BURL} from "@/const/const.request-server";
import {TOKEN} from "@/const/const";

const state = () => ({
    isShowDialogInfoUser: false,
    isActiveUser: false,
    user: {
        id: '2',
        login: '2',
        mail: '2',
        phone: '2',
    }
})

const getters = {
    getUserInfo: () => () => {
        const token = localStorage.getItem(TOKEN);
        return axios.get(BURL + GET_USER, {
            headers: {
                'Content-Type': HEADER_CONTENT_TYPE,
                'Authorization': 'Bearer ' + token
            }
        })
    },
    requestUpdateUserInfo: () => (mail, phone) => {
        const token = localStorage.getItem(TOKEN);
        return axios.post(BURL + UPDATE_USER_INFO, {mail, phone}, {
            headers: {
                'Content-Type': HEADER_CONTENT_TYPE,
                'Authorization': 'Bearer ' + token
            }
        })
    },
    stateModalWindowInfoUser(state) {
        return state.isShowDialogInfoUser;
    },
    stateActiveUser(state) {
        return state.isActiveUser;
    },
    stateUserInfo(state) {
        return state.user;
    },
}

const actions = {
    async toggleModalWindowInfoUser({commit}) {
        commit('changeModalWindowInfoUser')
    },
    async toggleActiveUser({commit}, isActive) {
        commit('changeActiveUser', isActive)
    },
    async setUserInfo({commit}, user) {
        commit('changeUserInfo', user)
    }
}

const mutations = {
    changeModalWindowInfoUser: (state) => {
        state.isShowDialogInfoUser = !state.isShowDialogInfoUser;
    },
    changeActiveUser: (state, isActive) => {
        state.isActiveUser = isActive;
    },
    changeUserInfo: (state, user) => {
        state.user = user;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}