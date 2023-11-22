import { createApp, h } from 'vue'
import vueRouter from './router.js'
import apolloProvider from './apoloClient.js'
import { createPinia } from 'pinia'
import App from '@/App.vue'

import 'style/main.scss'

const app = createApp({
    render: () => h(App)
})

app.use(vueRouter)
app.use(createPinia())
app.use(apolloProvider)
app.mount('#app')