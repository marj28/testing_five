<template>
  <v-app>
    <admin-navbar />
    <v-main>
      <ProfileCard />
    </v-main>
  </v-app>
</template>
  
  <script>
import ProfileCard from "@/views/AdminView/CardHolder/ProfileCard.vue";
export default {
  components: {
    ProfileCard,
  },
};
</script>