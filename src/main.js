import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import ElementPlus from 'element-plus'
import { createVfm } from 'vue-final-modal'
import 'vue-final-modal/style.css'

import 'element-plus/dist/index.css'

import "@/asset/style/main.scss"

const app = createApp(App);
const vfm = createVfm()
window.$vfm = vfm
app.config.globalProperties.$vfm = vfm
app.use(vfm)
app.use(router);
app.use(ElementPlus);
app.mount('#app');

