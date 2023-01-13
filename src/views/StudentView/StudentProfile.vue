<template>
  <v-app>
    <StudentNavbar />
    <v-main>
      <ProfileCard />
    </v-main>
  </v-app>
</template>
  
  <script>
import StudentNavbar from "../Navigation/StudentNavbar.vue";
import ProfileCard from "@/views/StudentView/CardHolder/ProfileCard.vue";
export default {
  components: {
    StudentNavbar,
    ProfileCard,
  },
};
</script>