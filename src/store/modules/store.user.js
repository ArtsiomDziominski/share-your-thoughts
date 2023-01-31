import axios from "axios";
import {GET_USER, HEADER_CONTENT_TYPE, UPDATE_USER_INFO, BURL} from "@/const/const.request-server";
import {TOKEN} from "@/const/const";

const state = () => ({
    isShowDialogInfoUser: false,
    isActiveUser: false,
    user: {
        id: '',
        login: '',
        mail: '',
        phone: '',
    },
    token: ''
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
}

const actions = {
    async toggleModalWindowInfoUser({commit}) {
        commit('changeModalWindowInfoUser')
    },
    async toggleActiveUser({commit}, isActive) {
        commit('changeActiveUser', isActive)
    },
    async setUserInfo({commit}, user) {
        commit('updateUserInfo', user)
    },
    async setUserToken({commit}, token) {
        console.log(token)
        commit('setUserToken', token)
    }
}

const mutations = {
    changeModalWindowInfoUser: (state) => {
        state.isShowDialogInfoUser = !state.isShowDialogInfoUser;
    },
    changeActiveUser: (state, isActive) => {
        state.isActiveUser = isActive;
    },
    updateUserInfo: (state, user) => {
        state.user = user;
    },
    setUserToken: (state, token) => {
        state.isActiveUser = !!token;
        console.log(state.isActiveUser)
        state.token = token;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}