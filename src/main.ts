import { createApp } from 'vue'
import plugin from './plugin'
import App from './App.vue'

const app = createApp(App)
app.use(plugin)

app.mount('#app')