<template>
    <v-row class="pa-4">
      <v-col cols="6" md="3">
        <v-card height="100" dark class="pa-2 rounded-lg" 
        style="background: linear-gradient(75.7deg, rgb(34, 126, 34) 3.8%, rgb(99, 162, 17) 87.1%);"
        @click="$router.push({path: 'AppliedJobs'})">
        
        <h2 class="ma-1"> <v-icon
            dark
            right
            size="40"
          >
          mdi-post-outline
          </v-icon> 
          224 </h2>
          <p class="ma-2"> Applied Jobs</p>
        </v-card>
      </v-col>
      <v-col cols="6" md="3">
        <v-card height="100" dark class="pa-2 rounded-lg" 
        style="background: linear-gradient(75.7deg, rgb(34, 126, 34) 3.8%, rgb(99, 162, 17) 87.1%);"
        @click="$router.push({path: 'AvailableJobs'})">
        
        <h2 class="ma-1"> <v-icon
            dark
            right
            size="40"
          >
          mdi-post-outline
          </v-icon> 
          224 </h2>
          <p class="ma-2"> Available Jobs</p>
        </v-card>
      </v-col>
      
      <v-col cols="6" md="3">
        <v-card height="100" dark class="pa-2 rounded-lg" 
        style="background: linear-gradient(75.7deg, rgb(34, 126, 34) 3.8%, rgb(99, 162, 17) 87.1%);"
        @click="$router.push({path: 'AvailableTraining'})">
        
        <h2 class="ma-1"> <v-icon
            dark
            right
            size="40"
          >
          mdi-post-outline
          </v-icon> 
          224 </h2>
          <p class="ma-2"> Available Training</p>
        </v-card>
      </v-col>
      <v-col cols="6" md="3">
        <v-card height="100" dark class="pa-2 rounded-lg" 
        style="background: linear-gradient(75.7deg, rgb(34, 126, 34) 3.8%, rgb(99, 162, 17) 87.1%);"
        @click="$router.push({path: 'ApplicantAnnouncement'})">
        
        <h2 class="ma-1"> <v-icon
            dark
            right
            size="40"
          >
          mdi-post-outline
          </v-icon> 
          224 </h2>
          <p class="ma-2"> Announcement</p>
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
