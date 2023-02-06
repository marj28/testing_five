<template>
    <v-app>
      <StudentNavbar />
      <v-main>
        <ScholarshipApplied />
      </v-main>
    </v-app>
  </template>
    
    <script>
  import StudentNavbar from "../Navigation/StudentNavbar.vue";
  import ScholarshipApplied from "@/views/StudentView/CardHolder/ScholarshipApplied.vue";
  export default {
    components: {
      StudentNavbar,
      ScholarshipApplied,
    },
  };
  </script>