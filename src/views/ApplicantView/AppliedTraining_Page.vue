<template>
    <v-app>
      <ApplicantNavbar />
      <v-main>
      <AppliedTraining />
      </v-main>
    </v-app>
  </template>
  <script>
  import ApplicantNavbar from "../Navigation/ApplicantNavbar.vue";
  import AppliedTraining from "../ApplicantView/CardHolder/AppliedTraining.vue"
  export default {
    components: {
      ApplicantNavbar,
      AppliedTraining,
    },
  };
  </script>