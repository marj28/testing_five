<template>
    <div>
      <v-col md="12" class="pa-2">
        <v-card outlined color="#1B5E20">
          <v-card-title class="subtitle-2" 
            ><span style="border-bottom: 1px solid white; color: white"
              >Job Posts<v-icon right small color="white"
                >mdi-open-in-new</v-icon
              >
            </span>
          </v-card-title>
          <v-card-text>
            <v-data-table
              class=""
              :headers="headers"
              :items="pending"
              hide-default-header
            >
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col> 
      </div>   
</template>

<script>

  export default {
    components: {
  },
    data: () => ({
      headers: [
        {
          text: "",
          align: "left",
          value: "name",
        },
        { text: "", value: "customer" },
        // { text: "ITEM", value: "item" },
        { text: "TIMESTAMP)", value: "time" },
      ],
      pending: [
        {
          name: "Data Analyst",
          customer: "Full-Time",
          // item: "",
          time: "21",
        },
        {
          name: "Computer Programmer",
          customer: "Full-Time",
         // item: "",
          time: "21",
        },
        {
          name: "Network Technician",
          customer: "Full-Time",
         // item: "",
          time: "21",
        },
        {
          name: "Computer Technician",
          customer: "Full-Time",
         // item: "",
          time: "21",
        },
      ],
    }),
  };
  </script>
  