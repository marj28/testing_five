<template>
  <v-row class="ma-1">
    <v-col cols="6" md="4" lg="4" xl="4">
      <v-card
        height="100"
        dark
        class="pa-2 rounded-lg"
        style="background: linear-gradient(75.7deg, rgb(34, 126, 34) 3.8%, rgb(128, 162, 17) 87.1%); "
        @click="$router.push({ path: 'ScholarshipApplied' })"
      >
        <h2 class="">
          <v-icon dark right size="40"> mdi-file-plus-outline </v-icon> 224
        </h2>
        <p class="ma-2">Programs Applied</p>
      </v-card>
    </v-col>
    <v-col cols="6" md="4">
      <v-card
        height="100"
        dark
        class="pa-2 rounded-lg"
        style="background: linear-gradient(75.7deg, rgb(34, 126, 34) 3.8%, rgb(128, 162, 17) 87.1%); "
        @click="$router.push({ path: 'ScholarshipAvail' })"
      >
        <h2 class="">
          <v-icon dark right size="40"> mdi-post-outline </v-icon> 224
        </h2>
        <p class="ma-2">Available Programs</p>
      </v-card>
    </v-col>
    <v-col cols="12" md="4">
      <v-card
        height="100"
        dark
        class="pa-2 rounded-lg"
        style="background: linear-gradient(75.7deg, rgb(34, 126, 34) 3.8%, rgb(128, 162, 17) 87.1%); "
        @click="$router.push({ path: 'StudentAnnouncement' })"
      >
        <h2 class="">
          <v-icon dark right size="40"> mdi-message-alert-outline </v-icon> 224
        </h2>
        <p class="ma-2">Announcement</p>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import Chart from "@/components/ChartComponent.vue";
export default {
  components: {
    Chart,
  },
};
</script>
