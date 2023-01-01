const state = () => ({
    isShowDialogRegistration: false,
    isShowDialogLogin: false
})

const getters = {
    stateModalWindowRegistration(state) {
        return state.isShowDialogRegistration;
    },
    stateModalWindowLogin(state) {
        return state.isShowDialogLogin;
    }
}

const actions = {
    async toggleModalWindowRegistration({commit}) {
        commit('changeModalWindowRegistration')
    },
    async toggleModalWindowLogin({commit}) {
        commit('changeModalWindowLogin')
    }
}

const mutations = {
    changeModalWindowRegistration: (state) => {
        state.isShowDialogRegistration = !state.isShowDialogRegistration;
    },
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