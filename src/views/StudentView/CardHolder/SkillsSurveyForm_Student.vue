<template>
    <v-app>
      <StudentNavbar />
      <SkillsSurvey />
    </v-app>
  </template>
    
    <script>
  import StudentNavbar from "@/views/Navigation/StudentNavbar.vue";
  import SkillsSurvey from "@/views/Forms/SkillsSurvey.vue";
  
  export default {
    components: {
        StudentNavbar,
        SkillsSurvey,
    },
  };
  </script>