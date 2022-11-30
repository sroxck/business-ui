import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {Button,EButton} from "@ui/Button/index"
const app = createApp(App)
app.use(EButton)
app.mount('#app')
