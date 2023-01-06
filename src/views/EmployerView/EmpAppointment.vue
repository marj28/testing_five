<template>
    <v-app>
      <EmployerNavbar />
      <v-main >
        <StatusCard />
        <AppointmentCard />
      </v-main>
    </v-app>
      
    </template>
    
    <script>
    
  import EmployerNavbar from "../Navigation/EmployerNavbar.vue";
  import StatusCard from "@/views/EmployerView/StatusCard.vue";
  import AppointmentCard from "@/views/EmployerView/CardHolder/AppointmentCard.vue";
  
    export default {
      components: {
      EmployerNavbar,
      StatusCard,
      AppointmentCard
    },
      data: () => ({
        headers: [
          {
            text: "",
            align: "left",
            value: "name",
          },
          { text: "", value: "customer" },
          { text: "ITEM", value: "item" },
          { text: "TIMESTAMP)", value: "time" },
        ],
        pending: [
          {
            name: "Talent Interview",
            customer: "Full-Time",
            item: "",
            time: "21",
          },
          {
            name: "Talent Onboarding",
            customer: "Full-Time",
            item: "",
            time: "21",
          },
          {
            name: "Talent Offboarding",
            customer: "Full-Time",
            item: "",
            time: "21",
          }
        ],
      }),
    };
    </script>
    