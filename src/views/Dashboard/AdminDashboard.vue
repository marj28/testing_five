<template>
  <v-app id="inspire">
    <AdminNavbar />
    <v-main>
      <StatusCard />
      <v-container>
        <v-row>
          <v-col 
          cols="12"
          sm="4"
          xs="6"
          md="6">
            <v-card height="350" elevation="20">
              <TodoChart />
            </v-card>
          </v-col>
          <v-col cols="12"
          sm="4"
          xs="6"
          md="6">
            <v-card height="350" class="pa-0">
              <Donut />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row>
          <v-col>
            <v-card height="350">
              <Chart />
            </v-card>
          </v-col>
          <v-col>
            <v-card height="350">
              <Chart />
            </v-card>
          </v-col>
          <v-col>
            <v-card height="350">
              <Donut />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <router-view> </router-view>
  </v-app>
</template>
  
  <script>
import AdminNavbar from "../Navigation/AdminNavbar.vue";
import Chart from "@/components/ChartComponent.vue";
import TodoChart from "@/components/TodoChart.vue"
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
    TodoChart
  },

  data: () => ({
    
  }),
};
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto);

body {
  font-family: Roboto, sans-serif;
}
</style>