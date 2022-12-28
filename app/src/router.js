import { createRouter, createWebHistory } from 'vue-router';

// Load Below components and their paths only when they are needed
const ParkItem = () => import('./views/parks/ParkItem.vue');
const ParkList = () => import('./views/parks/ParkList.vue')
const NotFound = () => import('./views/NotFound.vue');

// Init and store a reference to Vue's Router object in a constant
const router = createRouter({
    // Set how the browser should manage and handle routing history
    history: createWebHistory(),

    // Routes registration and configuration
    routes: [

        {
            path: '/', redirect: '/parks'
        },

        {
            path: '/parks', component: ParkList
        },

        {
            path: '/parks/:id', props: true, component: ParkItem
        },

        {
            path: "/:notFound(.*)", component: NotFound
        }
    ]
})

// Export router const to use throughout the app
export default router