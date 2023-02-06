<template>
  <div>
    <v-col md="12" class="pa-4">
      <v-card outlined color="#1B5E20">
        <v-card-title class="subtitle-2">
          PROGRAMS APPLIED
          <v-spacer></v-spacer
          ><v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            dark
          ></v-text-field>
        </v-card-title>
        <v-card-text>
          <v-data-table
            class=""
            :headers="headers"
            :items="pending"
            :search="search"
          >
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
  </div>
</template>
  
  <script>
export default {
  data: () => ({
    search: "",
    headers: [
      {
        text: "Program Name",
        align: "left",
        value: "P_Name",
      },
      { text: "Offering Company", value: "O_Company" },
      { text: "Date of Application", value: "D_Application" },
    ],
    pending: [
      {
        P_Name: "Department of Science and Technology (DOST)",
        O_Company: "DOST",
        D_Application: "January 23, 2023",
      },
      {
        P_Name: "Commission on Higher Education (CHED)",
        O_Company: "CHED",
        D_Application: "January 23, 2023",
      },
      {
        P_Name: "GSIS educational subsidy program or GSIS Scholarship",
        O_Company: "GSIS",
        D_Application: "January 23, 2023",
      },
      {
        P_Name: "Philippines' Landbank Fisheries Scholarship Program",
        O_Company: "Landbank",
        D_Application: "January 23, 2023",
      },
    ],
  }),
};
</script>
<style scoped>
.subtitle-2 {
  color: white;
}
</style>
  