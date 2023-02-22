<template>
    <v-app>
      <AdminNavbar />
      <EnterpriseDevelopmentForm />
    </v-app>
  </template>
    
    <script>
  import AdminNavbar from "@/views/Navigation/AdminNavbar.vue";
  import EnterpriseDevelopmentForm from "@/views/Forms/EnterpriseDevelopmentForm.vue";
  
  export default {
    components: {
      AdminNavbar,
      EnterpriseDevelopmentForm,
    },
  };
  </script>