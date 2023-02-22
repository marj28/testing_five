<template>
  <v-app id="inspire">
    <AdminNavbar />
    <v-main>
      <StatusCard />
      <v-divider class="test"></v-divider>

      <v-row class="pa-4">
        <v-col cols="12" md="6">
          <TodoChart />
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="pa-2" elevation="20">
            <Donut />
          </v-card>
        </v-col>
      </v-row>

      <v-row class="pa-4">
        <v-col cols="12" md="6" sm="12">
          <Chart />
        </v-col>
        <v-col cols="6" md="3" sm="6">
          <Chart />
        </v-col>
        <v-col cols="6" md="3" sm="6">
          <Chart />
        </v-col>
      </v-row>
    </v-main>
    <router-view> </router-view>
  </v-app>
</template>
  
  <script>
import AdminNavbar from "../Navigation/AdminNavbar.vue";
import Chart from "@/components/ChartComponent.vue";
import TodoChart from "@/components/TodoChart.vue";
import Donut from "@/components/DonutComponent.vue";
import Sample from "@/components/SampleComponent.vue";
import StatusCard from "@/views/AdminView/StatusCard.vue";

export default {
  components: {
    AdminNavbar,
    Chart,
    Donut,
    Sample,
    StatusCard,
    TodoChart,
  },

  data: () => ({}),
};
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto);

body {
  font-family: Roboto, sans-serif;
}
.test {
  border-width: 1px !important;
  border-color: green !important;
  height: 100%;
}
</style>