<template>
  <v-app>
    <EmployerNavbar />
    <v-main>
      <ProfileCard />
    </v-main>
  </v-app>
</template>

<script>
import EmployerNavbar from "../Navigation/EmployerNavbar.vue";
import ProfileCard from "@/views/EmployerView/CardHolder/ProfileCard.vue";
export default {
  components: {
    EmployerNavbar,
    ProfileCard,
  },
};
</script>