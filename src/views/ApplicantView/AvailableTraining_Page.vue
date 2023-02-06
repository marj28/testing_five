<template>
    <v-app>
      <ApplicantNavbar />
      <v-main>
      <AvailableTraining />
      </v-main>
    </v-app>
  </template>
  <script>
  import ApplicantNavbar from "../Navigation/ApplicantNavbar.vue";
  import AvailableTraining from "../ApplicantView/CardHolder/AvailableTraining.vue"
  export default {
    components: {
      ApplicantNavbar,
      AvailableTraining,
    },
  };
  </script>