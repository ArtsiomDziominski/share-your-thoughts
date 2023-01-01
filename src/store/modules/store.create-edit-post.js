import { createApp } from 'vue'
import { createStore } from 'vuex'

const storeCreateEditPost = createStore({
    state: {
        isShowDialogCreateEdit: false
    },
    mutations: {
        CHANGE_MODAL_WINDOW_CREATE_EDIT_POST: (state) => {
            state.isShowDialogCreateEdit = !state.isShowDialogCreateEdit;
        },
    },
    actions: {
        TOGGLE_MODAL_WINDOW_CREATE_EDIT_POST({commit}) {
            commit('CHANGE_MODAL_WINDOW_CREATE_EDIT_POST')
        },
    },
    getters: {
        STATE_MODAL_WINDOW_CREATE_EDIT_POST(state) {
            return state.isShowDialogCreateEdit;
        },
    }
})

export default storeCreateEditPost;