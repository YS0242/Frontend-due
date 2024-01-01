// Root component (App.vue)
import App from './App.vue'

// For organising and manging component logic in a more modular and reusable way
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// Syncfusion API License Registration
import { registerLicense } from "@syncfusion/ej2-base";

import 'vuetify/dist/vuetify.min.css';

import 'bootstrap/dist/css/bootstrap.css';

import vuetify from './plugins/vuetify'

import router from './router';

import { createPinia } from 'pinia'

// License Key
registerLicense();

// 'Ngo9BigBOggjHTQxAR8/V1NHaF5c
// XmVCf1FpRmJGdld5fUVHYVZUTXxaS
// hihihi
// 00DNHVRdkdgWH9fd3RQRmdfWUF+X0Y='


const app = createApp(App)

const pinia = createPinia();

registerPlugins(app)

app.use(vuetify);

app.use(router);

app.use(pinia);

app.mount('#app')
