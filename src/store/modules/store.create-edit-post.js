const state = () => ({
    isShowDialogCreateEdit: false
})

const getters = {
    stateModalWindowCreateOrEditPost(state) {
        return state.isShowDialogCreateEdit;
    },
}

const actions = {
    toggleModalWindowCreateOrEditPost({commit}) {
        commit('changeModalWindowCreateOrEditPost')
    },
}

const mutations = {
    changeModalWindowCreateOrEditPost: (state) => {
        state.isShowDialogCreateEdit = !state.isShowDialogCreateEdit;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}