<template>
  <div>
    <v-col md="12" class="pa-2">
      <v-card outlined color="#1B5E20">
        <v-card-title class="subtitle-2" 
          ><span style="border-bottom: 1px solid white; color: white"
            >AVAILABLE SCHOLARSHIP<v-icon right small color="white"
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
            hide-default-footer
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
    headers: [
      {
        text: "FISHCAR",
        align: "left",
        value: "name",
      },
      { text: "COSTUMER", value: "customer" },
      { text: "ITEM", value: "item" },
      { text: "TIMESTAMP)", value: "time" },
    ],
    pending: [
      {
        name: "Department of Science and Technology (DOST)",
        customer: "Documents",
        item: "",
        time: "21",
      },
      {
        name: "Commission on Higher Education (CHED)",
        customer: "Documents",
        item: "",
        time: "21",
      },
      {
        name: "GSIS educational subsidy program or GSIS Scholarship",
        customer: "Documents",
        item: "",
        time: "21",
      },
      {
        name: "Philippines' Landbank Fisheries Scholarship Program",
        customer: "Documents",
        item: "",
        time: "21",
      },
    ],
  }),
};
</script>
