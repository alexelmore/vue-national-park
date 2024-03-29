// Import all park Vuex modules
import parksActions from './actions'
import parksMutations from './mutations'
import parksGetters from './getters'
// Export park state so rest of app can utilize it
export default {

    // Use namespace to keep park state specific 
    namespaced: true,

    // State object that contains,combines and returns all state that is specific to the parks store module.
    state() {
        return {
            parks: [],
            locationGranted: false,
            coords: { latitude: null, longitude: null }
        }
    },
    actions: parksActions,
    mutations: parksMutations,
    getters: parksGetters
}
