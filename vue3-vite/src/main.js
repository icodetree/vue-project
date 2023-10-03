import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.js';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import funcPlugins from './plugins/func';
import objPlugins from './plugins/obj';
import person from './plugins/person';
import globalDirectives from './plugins/global-directives';
import dayjs from './plugins/day';

// import globalComponents from './plugins/global-components';

const app = createApp(App);

// app.directive('focus', focus);
app
  .use(funcPlugins)
  // .use(globalComponents)
  .use(globalDirectives)
  .use(dayjs)
  .use(createPinia())
  .use(person, { name: '홍길동' })
  .use(objPlugins, { name: 'bhy' })
  .use(router)
  .mount('#app');

// console.log('VITE_APP_API_URL', import.meta.env.VITE_APP_API_URL);
// tet
