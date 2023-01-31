const state = () => ({
    isActiveDialogCreateEdit: false
})

const actions = {
    toggleModalWindowCreateOrEditPost({commit}) {
        commit('changeModalWindowCreateOrEditPost')
    },
}

const mutations = {
    changeModalWindowCreateOrEditPost: (state) => {
        state.isActiveDialogCreateEdit = !state.isActiveDialogCreateEdit;
    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
}