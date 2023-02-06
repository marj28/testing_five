<template>
  <v-app id="inspire">
    <ApplicantNavbar />
    <v-main>
      <StatusCard />
      <v-divider light class="test"></v-divider>
      <v-row class="pa-2">
        <v-col cols="12" md="6" sm="6">
          <AvailableJobs />
        </v-col>
        <v-col cols="12" md="6">
          <AvailableTraining />
        </v-col>
      </v-row>
    </v-main>
    <router-view> </router-view>
  </v-app>
</template>
      
      <script>
import ApplicantNavbar from "../Navigation/ApplicantNavbar.vue";
import StatusCard from "@/views/ApplicantView/StatusCard.vue";


import AvailableJobs from "@/views/ApplicantView/CardHolder/AvailableJobs.vue";
import AvailableTraining from "@/views/ApplicantView/CardHolder/AvailableTraining.vue";

export default {
  components: {
    ApplicantNavbar,
    StatusCard,
    AvailableJobs,
    AvailableTraining,
  },

  data: () => ({
    doSomething() {
      show: false;
    },
  }),
};
</script>
    <style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto);

body {
  font-family: Roboto, sans-serif;
}
.test {
  border-width: 1px !important;
  border-color: green !important;
  height: 100%;
}
</style>