<template>
  <v-app id="inspire">
    <applicant-navbar />
    <v-main>
      <StatusCard />
      <v-divider light class="test"></v-divider>
      <v-row class="pa-2">
        <v-col cols="12" md="8" sm="8">
          <available-jobs />
          <available-training />
        </v-col>
        <v-col cols="12" md="4">
          <applicant-announcement />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>
      
      <script>
import StatusCard from "@/views/ApplicantView/StatusCard.vue";

export default {
  components: {
    StatusCard,
  },

  data: () => ({
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