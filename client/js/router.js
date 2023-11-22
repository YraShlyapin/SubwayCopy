import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import menuList from '@/menu-list.vue'
import mealList from '@/meal-list.vue'

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