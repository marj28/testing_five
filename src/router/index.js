import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import AdminDashboard from '../views/Dashboard/AdminDashboard.vue'
import StudentDashboard from '../views/Dashboard/StudentDashboard.vue'
import EmployerDashboard from '../views/Dashboard/EmployerDashboard.vue'
import ApplicantDashboard from '../views/Dashboard/ApplicantDashboard.vue'

import Line from '../components/LineComponent.vue'

//authentication
import LoginPage from '@/authentication/LoginPage.vue'
import RegistrationPage from '@/authentication/RegistrationPage.vue'
import RegisterPage from '@/authentication/RegisterPage.vue'

//Students View
import ScholarshipForm from '../views/Forms/ScholarshipForm.vue'
import SkillsSurvey from '../views/Forms/SkillsSurvey.vue'
import StudentProfile from '../views/StudentView/StudentProfile.vue'

//Employer View
import JobPosts from '../views/EmployerView/JobPosts.vue'
import EmpAppointment from '../views/EmployerView/EmpAppointment.vue'
import EmployerProfile from '../views/EmployerView/EmployerProfile.vue'

//Applicant View
import ApplicantProfile from '../views/ApplicantView/ApplicantProfile.vue'

//Admin View
import AdminProfile from '../views/AdminView/AdminProfile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  
  //authentication
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/registration',
    name: 'RegistrationPage',
    component: RegistrationPage
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage
  },
  {
    path: '/admindashboard',
    name: 'AdminDashboard',
    component: AdminDashboard
  },
  {
    path: '/studentdashboard',
    name: 'StudentDashboard',
    component: StudentDashboard
  },
  {
    path: '/employerdashboard',
    name: 'EmployerDashboard',
    component: EmployerDashboard
  },
  {
    path: '/applicantdashboard',
    name: 'ApplicantDashboard',
    component: ApplicantDashboard
  },
  //students_view
  {
    path: '/scholarship',
    name: 'ScholarshipForm',
    component: ScholarshipForm
  },
  {
    path: '/skillssurvey',
    name: 'SkillsSurvey',
    component: SkillsSurvey
  },
  {
    path: '/StudentProfile',
    name: 'StudentProfile',
    component: StudentProfile
  },
  //employer_view
  {
    path: '/EmployerJobPosts',
    name: 'EmployerJobPosts',
    component: JobPosts
  },
  {
    path: '/EmployerAppointments',
    name: 'EmployerAppointments',
    component: EmpAppointment
  },
  {
    path: '/EmployerProfile',
    name: 'EmployerProfile',
    component: EmployerProfile
  },
  {
    path: '/line',
    name: 'Line',
    component: Line
  },
  //applicant_view
  {
    path: '/ApplicantProfile',
    name: 'ApplicantProfile',
    component: ApplicantProfile
  },
  //admin_view
  {
    path: '/AdminProfile',
    name: 'AdminProfile',
    component: AdminProfile
  },

]

const router = new VueRouter({
  routes,
  mode :"history"
})

// router.beforeEach((to, from, next) => {

//   if (to.name == 'AdminDashboard' && localStorage.getItem('auth') == null)
//     next({ name: 'LoginPage' });
//   else if (localStorage.getItem('auth') != null && (to.name == 'RegisterPage' || to.name == 'LoginPage'))
//     next({ name: 'AdminDashboard' });
//   else
//     next();

// });

export default router
