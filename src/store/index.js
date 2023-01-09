import { createStore, createLogger } from 'vuex'
import storeRegistration from './modules/store.registration'
import storeCreateOrEditPost from './modules/store.create-edit-post'
import requestServer from './modules/request-server'
import loginUser from './modules/store.login'
import storeInfoUser from './modules/store.info-user'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        storeRegistration,
        storeCreateOrEditPost,
        requestServer,
        loginUser,
        storeInfoUser,
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})