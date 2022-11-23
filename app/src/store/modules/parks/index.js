// Import all park Vuex modules


// Export park state so rest of app can utilize it
export default {

    // Use namespace to keep park state specific 
    namespaced: true,

    // State object that contains,combines and returns all state that is specific to the parks store module.
    state() {
        return {
            parks: []
        }
    }

}
