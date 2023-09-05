// Import necessary functions from the vue-router package
import { createRouter, createWebHistory } from 'vue-router'
import BeachList from '../views/beaches/BeachList'

// Define the routes 
// const routes = [
//   {
//     path: '/',// *Single route
//     component: () => import('@/layouts/default/Default.vue'),// Layout component for root route
//     children: [
//       {
//         path: '',// Child route
//         name: 'Home',
//         // route level code-splitting
//         // this generates a separate chunk (about.[hash].js) for this route
//         // which is lazy-loaded when the route is visited.
//         component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),//Component for home route
//       },
//     ],
//   },
// ]

// Create a Vue Router instance with the defined routes
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),// Use browser history mode for routing
//   routes,// Pass the routes config to the router instance 
// })
routes: [
  {
    path: '/',
    name: 'home',
    component: BeachList
  }
]
})

// Export the Vue Router instance for use in application
export default router
