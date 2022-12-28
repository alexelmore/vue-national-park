import { createRouter, createWebHistory } from 'vue-router';

// Load Below components and their paths only when they are needed
const ParkDetail = () => import('./views/parks/ParkDetail.vue');
const HubPage = () => import('./views/HubPage.vue')
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
            path: '/parks', component: HubPage
        },

        {
            path: '/parks/:id', props: true, component: ParkDetail
        },

        {
            path: "/:notFound(.*)", component: NotFound
        }
    ]
})

// Export router const to use throughout the app
export default router