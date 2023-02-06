<template>
  <v-app id="inspire">
    <StudentNavbar />
    <v-main>
      <StatusCard />
      <v-divider light class="test"></v-divider>
      <v-row>
        <v-col cols="12" md="8">
          <ScholarshipAvail id="availscholar" />
          <ScholarshipApplied id="appliedscholar" />
        </v-col>
        <v-col cols="12" md="4">
          <StudentAnnouncement id="studentannouncement" />
        </v-col>
      </v-row>
    </v-main>
    <router-view> </router-view>
  </v-app>
</template>
    
    <script>
import StudentNavbar from "../Navigation/StudentNavbar.vue";
import ScholarshipAvail from "@/views/StudentView/CardHolder/ScholarshipAvail.vue";
import ScholarshipApplied from "@/views/StudentView/CardHolder/ScholarshipApplied.vue";
import StudentAnnouncement from "@/views/StudentView/CardHolder/StudentAnnouncement.vue";
import StatusCard from "@/views/StudentView/StatusCard.vue";

export default {
  components: {
    StudentNavbar,
    StatusCard,
    ScholarshipAvail,
    ScholarshipApplied,
    StudentAnnouncement,
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