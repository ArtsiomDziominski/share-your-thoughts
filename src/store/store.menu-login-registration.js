import { createApp } from 'vue'
import { createStore } from 'vuex'

const storeMenuLoginRegistration = createStore({
    state: {
        isShowDialogRegistration: false,
        isShowDialogLogin: false
    },
    mutations: {
        CHANGE_MODAL_WINDOW_REGISTRATION: (state) => {
            state.isShowDialogRegistration = !state.isShowDialogRegistration;
        },
        CHANGE_MODAL_WINDOW_LOGIN: (state) => {
            state.isShowDialogLogin = !state.isShowDialogLogin;
        }
    },
    actions: {
        TOGGLE_MODAL_WINDOW_REGISTRATION({commit}) {
            commit('CHANGE_MODAL_WINDOW_REGISTRATION')
        },
        TOGGLE_MODAL_WINDOW_LOGIN({commit}) {
            commit('CHANGE_MODAL_WINDOW_LOGIN')
        }
    },
    getters: {
        STATE_MODAL_WINDOW_REGISTRATION(state) {
            return state.isShowDialogRegistration;
        },
        STATE_MODAL_WINDOW_LOGIN(state) {
            return state.isShowDialogLogin;
        }
    }
})

export default storeMenuLoginRegistration;