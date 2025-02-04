import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n';

import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // นำเข้า styles ของ Vuetify

import { aliases, mdi } from 'vuetify/iconsets/mdi'; // สำหรับ Material Design Icons
import '@mdi/font/css/materialdesignicons.css'; // นำเข้าไอคอน

import en from './locales/en.json';
import th from './locales/th.json';

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#6200ea', // กำหนดสีหลัก
          secondary: '#03dac6',
        },
      },
    },
  },
});


const i18n = createI18n({
    legacy: false, 
    locale: localStorage.getItem('language') || 'en', 
    fallbackLocale: 'en',
    messages: {
      en,
      th
    }
  });
const app = createApp(App)
app.use(router)
app.use(i18n);
app.use(vuetify);


app.mount('#app')
