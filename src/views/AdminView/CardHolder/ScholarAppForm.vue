<template>
    <v-app>
      <AdminNavbar />
      <ScholarshipForm />
    </v-app>
  </template>
    
    <script>
  import AdminNavbar from "@/views/Navigation/AdminNavbar.vue";
  import ScholarshipForm from "@/views/Forms/ScholarshipForm.vue";
  
  export default {
    components: {
      AdminNavbar,
      ScholarshipForm,
    },
  };
  </script>