<template>
    <v-app>
      <AdminNavbar />
      <v-main>
        <FormCard />
      </v-main>
    </v-app>
  </template>
    
    <script>
  import AdminNavbar from "../Navigation/AdminNavbar.vue";
  import FormCard from "@/views/AdminView/CardHolder/FormCard.vue";
  export default {
    components: {
      AdminNavbar,
      FormCard,
    },
  };
  </script>