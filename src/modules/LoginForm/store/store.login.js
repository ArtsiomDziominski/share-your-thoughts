const state = () => ({
    isShowDialogLogin: false
})

const getters = {
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