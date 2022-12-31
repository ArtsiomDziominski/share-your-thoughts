import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state: {
        isShowDialogRegistration: false
    },
    mutations: {
        CHANGE_MODAL_WINDOW_REGISTRATION: (state) => {
            state.isShowDialogRegistration = !state.isShowDialogRegistration;
        }
    },
    actions: {
        TOGGLE_MODAL_WINDOW_REGISTRATION({commit}) {
            commit('CHANGE_MODAL_WINDOW_REGISTRATION')
        }
    },
    getters: {
        STATE_MODAL_WINDOW_REGISTRATION(state) {
            return state.isShowDialogRegistration;
        }
    }
})

export default store;