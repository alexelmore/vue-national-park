import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'
import './assets/tailwind.css'

// Vue app initialization
const app = createApp(App);

// Inject Vue store into our Vue App
app.use(store);

// Mount our Vue app to the DOM
app.mount('#app')