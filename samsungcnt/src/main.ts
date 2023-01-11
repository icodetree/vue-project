import { createApp } from "vue";
import App from "./App.vue";
import store, { key } from "./store";
import router from "./router";
import './style/style.css';
import globals from '@/utils/global'; // [전역변수]
import axios from 'axios';


const app = createApp(App)

app.config.globalProperties.axios = axios;

app
    .use(store, key)
    .use(router)
    .use(globals) // 전역변수
    .mount("#app");