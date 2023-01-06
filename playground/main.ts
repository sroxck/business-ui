import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {EButton} from "../dist/business-ui.js"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(ElementPlus)
app.use(EButton)
app.mount('#app')
