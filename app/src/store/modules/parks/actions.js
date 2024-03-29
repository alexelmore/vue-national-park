import * as geolib from "geolib";
export default {

    // Async method that reaches out to the NPS Endpoint to get all the National Parks
    async getParks(context) {

        // Base Endpoint URL
        const baseUrl = `https://developer.nps.gov/api/v1/parks?api_key=`

        // API Key ---> Will move to secure location later
        const key = `xCADBwfuow2NVWDCki60u4JQpkuhDbfzLCD6xW4Q
        `
        // Request URL
        const requestUrl = `${baseUrl}${key}`;

        // Await the Fetch request to NPS Endpoint
        const request = await fetch(requestUrl);

        // Await and Parse the returned data into JSON
        const data = await request.json();

        // Setup try/catch block for endpoint response
        try {

            if (request.ok && request.status === 200) {
                const copy = Object.assign({}, data)
                const parks = copy.data;
                for (let i in copy.data) {
                    parks[i].actNames = []
                    parks[i].activities.map((act) => {
                        parks[i].actNames.push(act.name)
                    })
                }
                context.commit('initParks', parks)
            } else {
                throw new Error('Something went wrong')
            }
        } catch (error) {
            console.log(error)
        }
    },

    // Action that call the setUserLocation mutation, passing it the user's coordinate
    setUserLocation(context, position) {
        context.commit('setUserLocation', position)
    },

    // Action that sets the user's distance from each park in the list of parks
    setParkDistance({ state, commit }) {
        const parks = state.parks;

        for (let i in parks) {
            parks[i].actNames = []
            parks[i].activities.map((act) => {
                parks[i].actNames.push(act.name)
            })

            const distance = geolib.getDistance(
                { latitude: +state.coords.latitude, longitude: +state.coords.longitude },
                { latitude: +parks[i].latitude, longitude: +parks[i].longitude }
            )
            parks[i].distanceFromUser = +distance
        }
        commit('initParks', parks)
    },
}