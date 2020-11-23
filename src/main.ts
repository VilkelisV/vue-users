import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import useApi from './modules/api';



createApp(App)
  .use(store)
  .use(router)
  .mount('#app');


useApi()
