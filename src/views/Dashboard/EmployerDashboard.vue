<template>
  <v-app id="inspire">
    <EmployerNavbar />
    <v-main>
      <StatusCard />
      <v-divider light class="test"></v-divider>
      <v-row class="pa-1">
        <v-col cols="12" md="6" class="ml-2">
          <AppointmentCard />
          <ApplicantCard />
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
import EmployerNavbar from "../Navigation/EmployerNavbar.vue";

import StatusCard from "@/views/EmployerView/StatusCard.vue";

import AppointmentCard from "@/views/EmployerView/CardHolder/AppointmentCard.vue";
import JobPostingCard from "@/views/EmployerView/CardHolder/JobPostingCard.vue";
import ApplicantCard from "@/views/EmployerView/CardHolder/ApplicantCard.vue";

export default {
  components: {
    EmployerNavbar,
    StatusCard,
    AppointmentCard,
    JobPostingCard,
    ApplicantCard,
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