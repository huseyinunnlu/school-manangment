import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Notifications from '@kyvg/vue3-notification'
import loader from "vue-ui-preloader";
import axios from 'axios'
const app = createApp(App);
axios.defaults.baseURL = 'http://localhost:8000/api/';

app.use(store)
app.use(router)
app.use(Notifications)
app.use(loader)
app.mount('#app')
