import App from './App.vue'
import {createApp} from 'vue'
import components from '@/components/UI'
import store from '@/store'
import './assets/main.css'

const app = createApp(App)

app.use(store)

components.forEach(component => {
    app.component(component.name, component)
})

app.mount('#app')

