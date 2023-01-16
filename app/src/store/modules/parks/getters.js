export default {
    parks(state) {
        return state.parks;
    },

    getParkById: (state) => (id) => {
        console.log(id, state)
        const park = state.parks.find(park => park.id === id)

        return park;
    },

    getUserLocation(state) {
        return state.coords;
    }

}