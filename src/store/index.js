import { createStore, createLogger } from 'vuex'
import storeRegistration from '../modules/RegistrationForm/store/store.registration'
import storeCreateOrEditPost from '../modules/CreateAndEditPost/store/store.create-edit-post'
import loginUser from '../modules/LoginForm/store/store.login'
import storeUser from './modules/store.user'
import storeAllPosts from './modules/store.all-posts'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        storeRegistration,
        storeCreateOrEditPost,
        loginUser,
        storeUser,
        storeAllPosts,
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})