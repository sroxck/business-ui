import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {Button,EButton} from "@ui/Button/index"
import {TableWithAddRows,SrTableWithAddRows} from "@ui/TableWithAddRows/index"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(ElementPlus)
app.use(EButton)
app.use(SrTableWithAddRows)
app.mount('#app')
