/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Root component (App.vue)
import App from './App.vue'

// For organising and manging component logic in a more modular and reusable way
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
