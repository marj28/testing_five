<template>
  <v-app>
    <EmployerNavbar />
    <v-main >
      <JobPostingCard />
    </v-main>
  </v-app>
    
  </template>
  
  <script>
  
import EmployerNavbar from "../Navigation/EmployerNavbar.vue";
import StatusCard from "@/views/EmployerView/StatusCard.vue"
import JobPostingCard from "@/views/EmployerView/CardHolder/JobPostingCard.vue"

  export default {
    components: {
    EmployerNavbar,
    StatusCard,
    JobPostingCard
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
  