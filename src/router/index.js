import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

// dashboard
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
import ScholarAppForm_Student from '../views/StudentView/CardHolder/ScholarAppForm_Student.vue'
import SkillsSurveyForm_Student from '../views/StudentView/CardHolder/SkillsSurveyForm_Student.vue'
import StudentProfile from '../views/StudentView/StudentProfile.vue'

//Employer View
import JobPosts from '../views/EmployerView/JobPosts.vue'
import EmpAppointment from '../views/EmployerView/EmpAppointment.vue'
import EmployerProfile from '../views/EmployerView/EmployerProfile.vue'

//Applicant View
import ApplicantProfile from '../views/ApplicantView/ApplicantProfile.vue'

//Admin View
import AdminProfile from '../views/AdminView/AdminProfile.vue'
import AdminForms from '../views/AdminView/AdminForms.vue'
import SsForm from '../views/AdminView/CardHolder/SsForm.vue'
import ScholarAppForm from '../views/AdminView/CardHolder/ScholarAppForm.vue'
import EnterpriseDevelopment from '../views/AdminView/CardHolder/EnterpriseDevelopment.vue'
import EstablishmentSurvey from '../views/AdminView/CardHolder/EstablishmentSurvey.vue'
import EntrepreneurialProgram from '../views/AdminView/CardHolder/EntrepreneurialProgram.vue'
import StudentList from '../views/AdminView/ListHolder/StudentList.vue'
import ApplicantList from '../views/AdminView/ListHolder/ApplicantList.vue'
import EmployerList from '../views/AdminView/ListHolder/EmployerList.vue'
import ApprovalList from '../views/AdminView/ListHolder/ApprovalList.vue'
import RecommendationList from '../views/AdminView/ListHolder/RecommendationList.vue'
import ProcessingList from '../views/AdminView/ListHolder/ProcessingList.vue'
import TrainingOffer from '../views/AdminView/StatusCard/TrainingOffer.vue'
import DialogStudentList from '../views/AdminView/Dialog/DialogStudentList.vue'

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
    path: '/ScholarAppForm_Student',
    name: 'ScholarAppForm_Student',
    component: ScholarAppForm_Student
  },
  {
    path: '/SkillsSurveyForm_Student',
    name: 'SkillsSurveyForm_Student',
    component: SkillsSurveyForm_Student
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
  {
    path: '/AdminForms',
    name: 'AdminForms',
    component: AdminForms
  },
  {
    path: '/SsForm',
    name: 'SsForm',
    component: SsForm
  },
  {
    path: '/ScholarAppForm',
    name: 'ScholarAppForm',
    component: ScholarAppForm
  },
  {
    path: '/EnterpriseDevelopment',
    name: 'EnterpriseDevelopment',
    component: EnterpriseDevelopment
  },
  {
    path: '/EstablishmentSurvey',
    name: 'EstablishmentSurvey',
    component: EstablishmentSurvey
  },
  {
    path: '/EntrepreneurialProgram',
    name: 'EntrepreneurialProgram',
    component: EntrepreneurialProgram
  },
  {
    path: '/StudentList',
    name: 'StudentList',
    component: StudentList
  },
  {
    path: '/ApplicantList',
    name: 'ApplicantList',
    component: ApplicantList
  },
  {
    path: '/EmployerList',
    name: 'EmployerList',
    component: EmployerList
  },
  {
    path: '/ApprovalList',
    name: 'ApprovalList',
    component: ApprovalList
  },
  {
    path: '/RecommendationList',
    name: 'RecommendationList',
    component: RecommendationList
  },
  {
    path: '/ProcessingList',
    name: 'ProcessingList',
    component: ProcessingList
  },
  {
    path: '/TrainingOffer',
    name: 'TrainingOffer',
    component: TrainingOffer
  },
  {
    path: '/DialogStudentList',
    name: 'DialogStudentList',
    component: DialogStudentList
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
