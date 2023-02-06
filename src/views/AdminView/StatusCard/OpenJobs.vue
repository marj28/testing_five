<template>
    <v-app>
      <AdminNavbar />
      <v-main>
        <v-container >
          <div id="app">
            <v-app id="inspire">
              <v-card elevation="20">
                <v-card-title>
                  Available Jobs
                  <v-spacer></v-spacer>
                  <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                  ></v-text-field>
                </v-card-title>
                <v-data-table
                  :headers="headers"
                  :items="desserts"
                  :search="search"
                ></v-data-table>
              </v-card>
            </v-app>
          </div>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import AdminNavbar from "@/views/Navigation/AdminNavbar.vue";
  
  export default {
    components: {
      AdminNavbar,
    },
    data() {
      return {
        search: "",
        headers: [
          {
            text: "Position Title",
            align: "start",
            sortable: false,
            value: "PTitle",
          },
          { text: "Company Name", sortable: false, value: "CName" },
          { text: "Nature of Work", sortable: false, value: "NWork" },
          { text: "Place of Work",  sortable: false, value: "PWork" },
          { text: "Vacancy Count", sortable: false, value: "VCount" },
        //   { text: "Iron (%)", value: "iron" },
        ],
        desserts: [
          {
            PTitle: "Frozen Yogurt",
            CName: 159,
            NWork: 6.0,
            PWork: 24,
            VCount: 4.0,
            // iron: 1,
          },
          {
            PTitle: "Frozen Yogurt",
            CName: 159,
            NWork: 6.0,
            PWork: 24,
            VCount: 4.0,
            // iron: 1,
          },
          {
            PTitle: "Frozen Yogurt",
            CName: 159,
            NWork: 6.0,
            PWork: 24,
            VCount: 4.0,
            // iron: 1,
          },
          {
            PTitle: "Frozen Yogurt",
            CName: 159,
            NWork: 6.0,
            PWork: 24,
            VCount: 4.0,
            // iron: 1,
          },
          {
            PTitle: "Frozen Yogurt",
            CName: 159,
            NWork: 6.0,
            PWork: 24,
            VCount: 4.0,
            // iron: 1,
          },
          {
            PTitle: "Frozen Yogurt",
            CName: 159,
            NWork: 6.0,
            PWork: 24,
            VCount: 4.0,
            // iron: 1,
          },
          {
            PTitle: "Frozen Yogurt",
            CName: 159,
            NWork: 6.0,
            PWork: 24,
            VCount: 4.0,
            // iron: 1,
          },
          {
            PTitle: "Frozen Yogurt",
            CName: 159,
            NWork: 6.0,
            PWork: 24,
            VCount: 4.0,
            // iron: 1,
          },
          {
            PTitle: "Frozen Yogurt",
            CName: 159,
            NWork: 6.0,
            PWork: 24,
            VCount: 4.0,
            // iron: 1,
          },
          {
            PTitle: "Frozen Yogurt",
            CName: 159,
            NWork: 6.0,
            PWork: 24,
            VCount: 4.0,
            // iron: 1,
          },
        ],
      };
    },
  };
  </script>