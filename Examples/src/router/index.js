import {createRouter, createWebHistory} from 'vue-router'
import PropsExample from '@/pages/PropsExample.vue'
import EmitsExample from '@/pages/EmitsExample.vue'
import ParentExample from '@/pages/ParentExample.vue'

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
    },
    {
        path: '/parent',
        name: 'parentExample',
        component: ParentExample
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router