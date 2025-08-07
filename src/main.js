import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import 'tom-select/dist/css/tom-select.css'
if (localStorage.theme === 'dark') {
  document.documentElement.classList.add('dark')
}
createApp(App).use(router).mount('#app')
