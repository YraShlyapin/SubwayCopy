import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
let menuList = defineAsyncComponent(() => import('@/menu-list.vue'))
//https://stackoverflow.com/questions/67044999/how-to-use-createasynccomponent-in-vuerouter4-0-0-vue3
let mealList = defineAsyncComponent(() => import('@/meal-list.vue'))

const routes = [
    {
        path: '/',
        component: menuList
    },
    {
        path: '/menu',
        component: menuList
    },
    {
        path: '/menu/:link',
        component: mealList
    },
    // {
    //     path: '/ADMIN',
    //     component: 
    // }
]

export default createRouter({
    history: createWebHistory(),
    routes
})