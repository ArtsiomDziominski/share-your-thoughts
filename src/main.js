import App from './App.vue'
import {createApp} from 'vue'
import components from '@/components/UI'
import storeMenuLoginRegistration from './store/store.menu-login-registration'

import './assets/main.css'


const app = createApp(App)
app.use(storeMenuLoginRegistration)

components.forEach(component => {
    app.component(component.name, component)
})

app.mount('#app')

