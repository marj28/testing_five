<template>
    <v-app>
      <StudentNavbar />
      <v-main>
        <ScholarshipAvail />
      </v-main>
    </v-app>
  </template>
    
    <script>
  import StudentNavbar from "../Navigation/StudentNavbar.vue";
  import ScholarshipAvail from "@/views/StudentView/CardHolder/ScholarshipAvail.vue";
  export default {
    components: {
      StudentNavbar,
      ScholarshipAvail,
    },
  };
  </script>