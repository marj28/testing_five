<template>
  <v-app id="inspire">
    <ApplicantNavbar />
    <v-main>
      <StatusCard />
      <v-divider light></v-divider>
      <v-row>
        <v-col cols="12" md="6">
          <AppointmentCard />
        </v-col>
        <v-col>
          <JobPostingCard />
        </v-col>
      </v-row>
    </v-main>
    <router-view> </router-view>
  </v-app>
</template>
      
      <script>
import ApplicantNavbar from "../Navigation/ApplicantNavbar.vue";
import StatusCard from "@/views/ApplicantView/StatusCard.vue";


import AppointmentCard from "@/views/EmployerView/CardHolder/AppointmentCard.vue";
import JobPostingCard from "@/views/EmployerView/CardHolder/JobPostingCard.vue";

export default {
  components: {
    ApplicantNavbar,
    StatusCard,
    AppointmentCard,
    JobPostingCard,
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
</style>