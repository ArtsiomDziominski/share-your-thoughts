import { createStore, createLogger } from 'vuex'
import storeMenuLoginRegistration from './modules/store.menu-login-registration'
import storeCreateOrEditPost from './modules/store.create-edit-post'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        storeMenuLoginRegistration,
        storeCreateOrEditPost
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})