<template>
    <v-app>
      <ApplicantNavbar />
      <v-main>
        <ProfileCard />
      </v-main>
    </v-app>
  </template>
  
  <script>
  import ApplicantNavbar from "../Navigation/ApplicantNavbar.vue";
  import ProfileCard from "@/views/ApplicantView/CardHolder/ProfileCard.vue";
  export default {
    components: {
        ApplicantNavbar,
      ProfileCard,
    },
  };
  </script>