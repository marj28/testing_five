<template>
  <v-app id="inspire">
    <AdminNavbar />
    <v-main>
      <v-container>
        <v-row>
          <v-col v-for="(item, i) in items" :key="i" cols-md="3">
            <v-card :color="item.color" dark>
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    class="text-h8"
                    v-text="item.title"
                  ></v-card-title>

                  <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                  <v-card-actions>
                    <v-btn
                      v-if="item.artist === 'Ellie Goulding'"
                      class="ml-2 mt-3"
                      fab
                      icon
                      height="40px"
                      right
                      width="40px"
                    >
                      <v-icon>mdi-play</v-icon>
                    </v-btn>

                    <v-btn v-else class="ml-2 mt-5" outlined rounded small>
                      START RADIO
                    </v-btn>
                  </v-card-actions>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row>
          <v-col>
            <v-card height="350" >
              <Chart />
            </v-card>
          </v-col>
          <v-col>
            <v-card height="350">
              <Donut />
            </v-card>
          </v-col>
          <v-col>
            <v-card height="200"></v-card>
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
import Donut from "@/components/DonutComponent.vue"

export default {
  components: {
    AdminNavbar,
    Chart,
    Donut
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

/* #chart {
  max-width: 650px;
  margin: 35px auto;
} */
</style>