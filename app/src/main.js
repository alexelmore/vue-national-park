import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import store from './store/index.js'
import './assets/tailwind.css'

// Load below components only when they are needed
const BaseSpinner = defineAsyncComponent(() => import('./components/base/BaseSpinner.vue'))

// Vue app initialization
const app = createApp(App);

// Inject Vue store into our Vue App
app.use(store);

// Add the below as Global app wide components
app.component('BaseSpinner', BaseSpinner)

// Mount our Vue app to the DOM
app.mount('#app')