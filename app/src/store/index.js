
// Create Store and merge all of the App's modules into it.
import { createStore } from "vuex";
import parksModule from "./modules/parks/index.js"

// Init Store Instance
const store = createStore({
    // Combine all App modules into App's global state
    modules: {
        parks: parksModule
    }
})

// Export store instance for global App use
export default store;