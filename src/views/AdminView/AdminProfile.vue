<template>
  <v-app>
    <AdminNavbar />
    <v-main>
      <ProfileCard />
    </v-main>
  </v-app>
</template>
  
  <script>
import AdminNavbar from "../Navigation/AdminNavbar.vue";
import ProfileCard from "@/views/AdminView/CardHolder/ProfileCard.vue";
export default {
  components: {
    AdminNavbar,
    ProfileCard,
  },
};
</script>