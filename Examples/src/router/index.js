import {createRouter, createWebHistory} from 'vue-router'
import PropsExample from '@/pages/PropsExample.vue'
import EmitsExample from '@/pages/EmitsExample.vue'
import ParentExample from '@/pages/ParentExample.vue'
import AttrsExample from '@/pages/AttrsExample.vue'
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
    },
    {
        path: '/attrs',
        name: 'attrsExample',
        component: AttrsExample
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router