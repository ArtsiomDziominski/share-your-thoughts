const state = () => ({
    allPosts: [],
})

const getters = {
    getAllPosts(state) {
        return state.allPosts;
    },
}

const actions = {
    async updateAllPosts({commit}, updatePost) {
        commit('updateAllPosts', updatePost)
    },
}

const mutations = {
    updateAllPosts: (state, updatePost) => {
        state.allPosts = updatePost;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}