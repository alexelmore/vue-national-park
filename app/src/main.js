import { createApp, defineAsyncComponent } from 'vue'
import router from './router'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import store from './store/index.js'
import './assets/tailwind.css'

// Load below components only when they are needed
const BaseSpinner = defineAsyncComponent(() => import('./components/base/BaseSpinner.vue'))
const BaseCard = defineAsyncComponent(() =>
    import('./components/base/BaseCard.vue'))
const BaseButton = defineAsyncComponent(() => import('./components/base/BaseButton.vue'))

// Vue app initialization
const app = createApp(App);

// Inject Vue store and router into our Vue App
app.use(store);
app.use(router)

// Inject Vue Lazy Load module and its lazy Component property for img assets

app.use(VueLazyload, {
    lazyComponent: true
});

// Add the below as Global app wide components
app.component('BaseSpinner', BaseSpinner)
app.component('BaseCard', BaseCard)
app.component('BaseButton', BaseButton)

// Mount our Vue app to the DOM
app.mount('#app')