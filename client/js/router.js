import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
//let App = defineAsyncComponent(() => import('@/App.vue'))
//https://stackoverflow.com/questions/67044999/how-to-use-createasynccomponent-in-vuerouter4-0-0-vue3

const routes = [
    {
        path: '/',
        component: () => import('@/App.vue'),
        children: [
            {
                path: '',
                component: () => import('@/menu-list.vue')
            },
            {
                path: 'menu',
                component: () => import('@/menu-list.vue')
            },
            {
                path: 'menu/:link',
                component: () => import('@/meal-list.vue')
            },
            {
                path: 'menu/:catlink/:meallink',
                component: () => import('@/meal-about.vue')
            }
        ]
    },
    {
        path: '/admin',
        component: () => import('@/Admin/Admin.vue'),
        children: [
            {
                path: '',
                component: () => import('@adm/category-admin.vue')
            }
        ]
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})