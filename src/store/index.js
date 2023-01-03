import { createStore, createLogger } from 'vuex'
import storeMenuLoginRegistration from './modules/store.menu-login-registration'
import storeCreateOrEditPost from './modules/store.create-edit-post'
import requestServer from './modules/request-server'
import registration from './modules/store.registration'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        storeMenuLoginRegistration,
        storeCreateOrEditPost,
        requestServer,
        registration
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})