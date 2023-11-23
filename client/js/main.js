import { createApp, h } from 'vue'
import vueRouter from './router.js'
import apolloProvider from './apoloClient.js'
import { createPinia } from 'pinia'
import Empty from '@/Empty.vue'

import 'style/main.scss'

const app = createApp({
    render: () => h(Empty)
})

app.use(vueRouter)
app.use(createPinia())
app.use(apolloProvider)
app.mount('#app')