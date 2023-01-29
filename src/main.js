import App from './App.vue'
import {createApp} from 'vue'
import components from '@/UI'
import store from '@/store'
import router from '@/router'
import './assets/css/main.css'

const app = createApp(App)

app.use(store)
app.use(router)

components.forEach(component => {
    app.component(component.name, component)
})

app.mount('#app')