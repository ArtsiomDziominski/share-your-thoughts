import { createStore, createLogger } from 'vuex'
import storeMenuLoginRegistration from './modules/store.menu-login-registration'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        storeMenuLoginRegistration,
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})