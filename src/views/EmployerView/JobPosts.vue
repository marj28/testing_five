<template>
  <v-app>
    <employer-navbar />
    <v-main >
      <job-posting-card />
    </v-main>
  </v-app>
    
  </template>
  
  <script>
import StatusCard from "@/views/EmployerView/StatusCard.vue"

  export default {
    components: {
    StatusCard,
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
          name: "Data Analyst",
          customer: "Full-Time",
          item: "",
          time: "21",
        },
        {
          name: "Computer Programmer",
          customer: "Full-Time",
          item: "",
          time: "21",
        },
        {
          name: "Network Technician",
          customer: "Full-Time",
          item: "",
          time: "21",
        },
        {
          name: "Computer Technician",
          customer: "Full-Time",
          item: "",
          time: "21",
        },
      ],
    }),
  };
  </script>
  