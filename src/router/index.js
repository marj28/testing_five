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

//Students View
import ScholarshipForm from '../views/Forms/ScholarshipForm.vue'
import SkillsSurvey from '../views/Forms/SkillsSurvey.vue'

//Employer View
import JobPosts from '../views/EmployerView/JobPosts.vue'
import EmpAppointment from '../views/EmployerView/EmpAppointment.vue'

//Applicant View

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
    path: '/line',
    name: 'Line',
    component: Line
  }

]

const router = new VueRouter({
  routes,
  mode :"history"
})

export default router
