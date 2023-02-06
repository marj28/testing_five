<template>
  <v-app>
    <ApplicantNavbar />
    <v-main>
    <AvailableJobs />
    </v-main>
  </v-app>
</template>
<script>
import ApplicantNavbar from "../Navigation/ApplicantNavbar.vue";
import AvailableJobs from "../ApplicantView/CardHolder/AvailableJobs.vue"
export default {
  components: {
    ApplicantNavbar,
    AvailableJobs,
  },
};
</script>