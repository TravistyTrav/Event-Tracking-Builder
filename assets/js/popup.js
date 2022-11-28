import { createApp } from 'vue';
import {createRouter, createWebHistory} from 'vue-router';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import Popup from './components/Popup.vue';
import Welcome from './components/Welcome.vue';
import Settings from './components/Settings.vue';
import Builder from './components/Builder.vue';

const routes = [
    { path: '/', name: 'Home', component: Welcome },
    { path: '/settings', name: 'Settings', component: Settings },
    { path: '/builder', name: 'Builder', component: Builder },
  ]

const router = createRouter({
    history: createWebHistory('index.html'),
    routes,
})

createApp(Popup).use(router).use(Antd).mount('#app'); 