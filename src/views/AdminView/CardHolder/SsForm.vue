<template>
  <v-app>
    <AdminNavbar />
    <SkillsSurvey />
  </v-app>
</template>
  
  <script>
import AdminNavbar from "@/views/Navigation/AdminNavbar.vue";
import SkillsSurvey from "@/views/Forms/SkillsSurvey.vue";

export default {
  components: {
    AdminNavbar,
    SkillsSurvey,
  },
};
</script>
  