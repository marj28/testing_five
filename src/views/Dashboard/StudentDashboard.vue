<template>
    <v-app id="inspire">
      <StudentNavbar />
      <v-main>
        <StatusCard />
        <v-container>
            <v-row>
                <v-col >
                    <ScholarshipAvail id="availscholar"/>
                </v-col>
            </v-row>
        </v-container>
      </v-main>
      <router-view> </router-view>
    </v-app>
  </template>
    
    <script>
  import StudentNavbar from "../Navigation/StudentNavbar.vue";
  import ScholarshipAvail from "@/views/StudentView/ScholarshipAvail.vue"
  import StatusCard from "@/views/StudentView/StatusCard.vue"
  
  export default {
    components: {
      StudentNavbar,
      StatusCard,
      ScholarshipAvail
    },
  
    data: () => ({

      doSomething() {
        show: false
      },
    }),
  };
  </script>
  <style scoped>
  @import url(https://fonts.googleapis.com/css?family=Roboto);
  
  body {
    font-family: Roboto, sans-serif;
  }
  </style>