<template>
  <v-app>
    <admin-navbar />
    <v-main>
        <v-col md="12" class="pa-4">
          <v-card outlined color="#1B5E20">
          <v-spacer></v-spacer>
          <AddTraining
            :visible="showAddTraining"
            @close="showAddTraining = true"
          />
          </v-card>
        </v-col>
    </v-main>
  </v-app>
</template>
  
  <script>
import AddTraining from '@/views/AdminView/AddTraining.vue'

export default {
  components: {
    AddTraining
  },
  data: () => ({
      search: "",
      showAddTraining: false,
    }),
};
</script>
  <style>
.container {
  padding: 2rem 1rem;
}
h4 {
  margin: 2rem 0rem 1rem;
}
</style>