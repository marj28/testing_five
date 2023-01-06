<template>
  <v-app id="inspire">
    <AdminNavbar />
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <v-card height="130" dark class="pa-2" color="#1B5E20">
              <h5>Daily Applicants</h5>
              <h4>57</h4>
              <v-divider></v-divider>
              <Chart />
            </v-card>
          </v-col>
          <v-col>
            <v-card height="130" dark class="pa-2" color="#1B5E20">
              <h5>Open Jobs as Of</h5>
              <h4>57</h4>
              <v-divider></v-divider>
              <Chart />
            </v-card>
          </v-col>
          <v-col>
            <v-card height="130" dark class="pa-2" color="#1B5E20 ">
              <h5>Hired Applicants</h5>
              <h4>57</h4>
              <v-divider></v-divider>
              <Chart />
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-row>
          <v-col>
            <v-card height="350">
              <Line />
            </v-card>
          </v-col>
          <v-col>
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
import Donut from "@/components/DonutComponent.vue";
import Sample from "@/components/SampleComponent.vue";
import Line from "@/components/LineComponent.vue";

export default {
  components: {
    AdminNavbar,
    Chart,
    Donut,
    Sample,
    Line,
  },

  data: () => ({
    items: [
      {
        color: "#2E7D32",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
      {
        color: "#388E3C",
        title: "Supermodel",
        artist: "Foster the People",
      },
      {
        color: "#43A047",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
      {
        color: "#66BB6A",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
    ],
  }),
};
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto);

body {
  font-family: Roboto, sans-serif;
}
</style>