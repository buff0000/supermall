import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router'

createApp(App).use(router).mount('#app')

//以下写法不起作用，为啥
// const app = createApp({App})
// app.use(router)
// app.mount('#app')

 
