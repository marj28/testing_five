<template>
    <v-app>
      <AdminNavbar />
      <EstablishmentSurveyForm />
    </v-app>
  </template>
    
    <script>
  import AdminNavbar from "@/views/Navigation/AdminNavbar.vue";
  import EstablishmentSurveyForm from "@/views/Forms/EstablishmentSurveyForm.vue";
  
  export default {
    components: {
      AdminNavbar,
      EstablishmentSurveyForm,
    },
  };
  </script>