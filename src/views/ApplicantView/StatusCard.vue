<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card height="130" dark class="pa-2" color="#1B5E20">
          <h5>Applied Jobs</h5>
          <h4>57</h4>
          <v-divider></v-divider>
          <Chart />
        </v-card>
      </v-col>
      <v-col>
        <v-card height="130" dark class="pa-2" color="#1B5E20">
          <h5>Available Jobs</h5>
          <h4>57</h4>
          <v-divider></v-divider>
          <Chart />
        </v-card>
      </v-col>
      <v-col>
        <v-card height="130" dark class="pa-2" color="#1B5E20 ">
          <h5>Available Training</h5>
          <h4>2</h4>
          <v-divider></v-divider>
          <Chart />
        </v-card>
      </v-col>
      <v-col>
        <v-card height="130" dark class="pa-2" color="#1B5E20 ">
          <h5>Announcement</h5>
          <h4>2</h4>
          <v-divider></v-divider>
          <Chart />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Chart from "@/components/ChartComponent.vue";

export default {
  components: {
    Chart,
  },
};
</script>
