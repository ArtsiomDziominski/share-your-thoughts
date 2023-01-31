const state = () => ({
    isShowDialogRegistration: false,
})

const getters = {
    stateModalWindowRegistration(state) {
        return state.isShowDialogRegistration;
    },
}

const actions = {
    async toggleModalWindowRegistration({commit}) {
        commit('changeModalWindowRegistration')
    },
}

const mutations = {
    changeModalWindowRegistration: (state) => {
        state.isShowDialogRegistration = !state.isShowDialogRegistration;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}