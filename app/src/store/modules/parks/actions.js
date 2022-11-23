export default {

    // Actions that are all specific to parks items and preform any asynchronous actions like API requests

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
                context.commit('initParks', parks)
            } else {
                throw new Error('Something went wrong')
            }
        } catch (error) {
            console.log(error)
        }
    }
}