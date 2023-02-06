<template>
  <v-app>
    <ApplicantNavbar />
    <v-main>
      <ApplicantAnnouncement />
    </v-main>
  </v-app>
</template>
    
    <script>
import ApplicantNavbar from "../Navigation/ApplicantNavbar.vue";
import ApplicantAnnouncement from "@/views/ApplicantView/CardHolder/ApplicantAnnouncement.vue";
export default {
  components: {
    ApplicantNavbar,
    ApplicantAnnouncement,
  },
};
</script>