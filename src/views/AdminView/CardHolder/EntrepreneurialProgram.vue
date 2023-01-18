<template>
    <v-app>
      <AdminNavbar />
      <EntrepreneurialProgramForm />
    </v-app>
  </template>
    
    <script>
  import AdminNavbar from "@/views/Navigation/AdminNavbar.vue";
  import EntrepreneurialProgramForm from "@/views/Forms/EntrepreneurialProgramForm.vue";
  
  export default {
    components: {
      AdminNavbar,
      EntrepreneurialProgramForm,
    },
  };
  </script>