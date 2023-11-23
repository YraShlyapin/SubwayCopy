import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import ListOfSkelet from '@/skeleton/menu-list-skelet.vue'
//let App = defineAsyncComponent(() => import('@/App.vue'))
//https://stackoverflow.com/questions/67044999/how-to-use-createasynccomponent-in-vuerouter4-0-0-vue3

const routes = [
    {
        path: '/',
        component: () => import('@/App.vue'),
        children: [
            {
                path: '',
                component: defineAsyncComponent({
                    loader: () => import('@/menu-list.vue'),
                    loadingComponent: ListOfSkelet
                })
            },
            {
                path: 'menu',
                component: defineAsyncComponent({
                    loader: () => import('@/menu-list.vue'),
                    loadingComponent: ListOfSkelet
                })
            },
            {
                path: 'menu/:link',
                component: defineAsyncComponent({
                    loader: () => import('@/meal-list.vue'),
                    loadingComponent: ListOfSkelet
                })
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