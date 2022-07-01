import {createRouter, createWebHistory} from 'vue-router'
import PropsExample from '@/pages/PropsExample.vue'
import EmitsExample from '@/pages/EmitsExample.vue'
const routes = [
    {
        path: '/props',
        name: 'propsExample',
        component: PropsExample
    },
    {
        path: '/emits',
        name: 'emitsExample',
        component: EmitsExample
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router