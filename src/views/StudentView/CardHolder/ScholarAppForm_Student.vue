<template>
    <v-app>
      <StudentNavbar />
      <ScholarshipForm />
    </v-app>
  </template>
    
    <script>
  import StudentNavbar from "@/views/Navigation/StudentNavbar.vue";
  import ScholarshipForm from "@/views/Forms/ScholarshipForm.vue";
  
  export default {
    components: {
        StudentNavbar,
      ScholarshipForm,
    },
  };
  </script>