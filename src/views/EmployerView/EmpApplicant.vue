<template>
    <v-app>
      <EmployerNavbar />
      <v-main >
        <ApplicantCard />
      </v-main>
    </v-app>
      
    </template>
    
    <script>
    
  import EmployerNavbar from "../Navigation/EmployerNavbar.vue";
  import ApplicantCard from "@/views/EmployerView/CardHolder/ApplicantCard.vue";
  
    export default {
      components: {
      EmployerNavbar,
      ApplicantCard
    },
      data: () => ({
       
      }),
    };
    </script>