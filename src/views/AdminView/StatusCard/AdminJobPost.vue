<template>
    <v-app>
      <admin-navbar />
      <v-main>
          <v-col md="12" class="pa-4">
            <v-card outlined color="#1B5E20">
            <v-spacer></v-spacer>
            <AddAdminJobPost
              :visible="showAddAdminJobPost"
              @close="showAddAdminJobPost = true"
            />
            </v-card>
          </v-col>
      </v-main>
    </v-app>
  </template>
    
    <script>
  import AddAdminJobPost from '@/views/AdminView/AddAdminJobPost.vue'
  
  export default {
    components: {
        AddAdminJobPost
    },
    data: () => ({
        search: "",
        showAddAdminJobPost: false,
      }),
  };
  </script>
    <style>
  .container {
    padding: 2rem 1rem;
  }
  h4 {
    margin: 2rem 0rem 1rem;
  }
  </style>