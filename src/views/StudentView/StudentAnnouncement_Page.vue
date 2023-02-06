<template>
  <v-app>
    <StudentNavbar />
    <v-main>
      <StudentAnnouncement />
    </v-main>
  </v-app>
</template>
  
  <script>
import StudentNavbar from "../Navigation/StudentNavbar.vue";
import StudentAnnouncement from "@/views/StudentView/CardHolder/StudentAnnouncement.vue";
export default {
  components: {
    StudentNavbar,
    StudentAnnouncement,
  },
};
</script>