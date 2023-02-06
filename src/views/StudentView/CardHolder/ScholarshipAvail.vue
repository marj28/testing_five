<template>
  <div>
    <v-col md="12" class="pa-4">
      <v-card outlined color="#1B5E20">
        <v-card-title class="subtitle-2" >
          AVAILABLE PROGRAMS
          <v-spacer></v-spacer
          ><v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            dark
            outlined
            rounded
            dense
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
        value: "SName",
      },
      { text: "Offering Company", value: "OCompany" },
      { text: "Date of Application", value: "DApplication" },
      { text: "Applicant Count", value: "ACount" },
    ],
    pending: [
      {
        SName: "Department of Science and Technology (DOST)",
        OCompany: "DOST",
        DApplication: "January 23, 2023 - June 26, 2023",
        ACount: "21",
      },
      {
        SName: "Commission on Higher Education (CHED)",
        OCompany: "CHED",
        DApplication: "January 23, 2023 - June 26, 2023",
        ACount: "21",
      },
      {
        SName: "GSIS educational subsidy program or GSIS Scholarship",
        OCompany: "GSIS",
        DApplication: "January 23, 2023 - June 26, 2023",
        ACount: "21",
      },
      {
        SName: "Philippines' Landbank Fisheries Scholarship Program",
        OCompany: "Landbank",
        DApplication: "January 23, 2023 - June 26, 2023",
        ACount: "21",
      },
      {
        SName: "Philippines' Landbank Fisheries Scholarship Program",
        OCompany: "Landbank",
        DApplication: "January 23, 2023 - June 26, 2023",
        ACount: "21",
      },
      {
        SName: "Philippines' Landbank Fisheries Scholarship Program",
        OCompany: "Landbank",
        DApplication: "January 23, 2023 - June 26, 2023",
        ACount: "21",
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