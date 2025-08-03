import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import 'tom-select/dist/css/tom-select.css'

createApp(App).use(router).mount('#app')
