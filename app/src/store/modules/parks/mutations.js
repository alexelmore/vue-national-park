export default {
    initParks(state, payload) {
        state.parks = payload
        console.log(payload)
    },

    setUserLocation(state, payload) {
        state.locationGranted = true;
        state.coords.latitude = payload.latitude;
        state.coords.longitude = payload.longitude;
    }
}