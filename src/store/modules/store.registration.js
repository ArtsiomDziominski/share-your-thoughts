const state = () => ({})

const getters = {
    checkValidLoginPassword: () => (login, password, passwordControl) => {
        return password === passwordControl && login.length > 4;
    }
}

export default {
    namespaced: true,
    state,
    getters,
}