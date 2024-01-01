// Import necessary functions from the vue-router package
import { createRouter, createWebHistory } from 'vue-router'

import RecruitmentList from '../views/recruitments/RecruitmentList'
import PostRecruitment from '../views/recruitments/PostRecruitment'
import Calendar from '../views/Calendar'
import Dashboard from '../views/Dashboard'
import Recruitments from '../views/recruitments/Recruitments'
import Login from '../views/Login.vue'
import ApplicantList from '../views/recruitments/ApplicantList'
import AssignmentList from '../views/recruitments/AssignmentList'
import CancellationRequestList from '../views/recruitments/cancellationRequestList'
import AvailableStudentList from '../views/recruitments/availableStudentList'
import CalendarView from '../views/CalendarView'

// Create a Vue Router instance with the defined routes
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),// Use browser history mode for routing
//   routes,// Pass the routes config to the router instance 
// })
routes: [
  {
    path: '/',
    name: 'login',
    component: Login
  },

  {
    path: '/home',
    name: 'home',
    component: RecruitmentList
  },  

  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },

  {
    path: '/postRecruitment',
    name: 'postRecruitment',
    component: PostRecruitment
  },

  // {
  //   path: '/calendar',
  //   name: 'calendar-view',
  //   component: Calendar
  // },

  

  {
    path: '/recruitments',
    name: 'recruitments',
    component: Recruitments,
  },

  {
    path: '/applicantList',
    name: 'applicantList',
    component: ApplicantList,
  },

  {
    path: '/assignmentList',
    name: 'assignmentList',
    component: AssignmentList,
  },

  {
    path: '/cancellationRequestList',
    name: 'cancellationRequestList',
    component: CancellationRequestList,
  },

  {
    path: '/availableStudentList',
    name: 'availableStudentList',
    component: AvailableStudentList,
  },

  {
    path: '/calendarView',
    name: 'calendarView',
    component: CalendarView,
  },
]
});

// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresStaffID){
//     const staffID = getStaffID();

//     if (!staffID){
//       next({name: 'Login'});
//     } else{
//       next();
//     }
//   }else{
//     next();
//   }
// });

// function getStaffID(){
//   return sessionStorage.getItem('staffID');
// }

// Export the Vue Router instance for use in application
export default router
