import {createRouter, createWebHistory} from 'vue-router'
import {routers} from './router.js'

const router = createRouter({
    history: createWebHistory(),
    routes: routers,
})

export default router