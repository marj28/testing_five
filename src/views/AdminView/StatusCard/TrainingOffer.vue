<template>
  <v-app>
    <admin-navbar />
    <v-main>
        <v-col md="12" class="pa-4">
          <v-card outlined color="#1B5E20">
            <!-- <v-card-title class="subtitle-2">
          TRAININGS OFFERING
          <v-spacer></v-spacer
          ><v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            outlined
            rounded
            dark
            dense
          ></v-text-field> -->
          <v-spacer></v-spacer>
          <AddTraining
            :visible="showAddTraining"
            @close="showAddTraining = true"
          />
        <!-- </v-card-title> -->
            <v-card-text>
              <v-data-table
                class=""
                :headers="headers"
                :items="pending"               
              >
              </v-data-table>
            </v-card-text>
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
      headers: [
        {
          text: "TRAINING TITLE",
          align: "left",
          value: "training_title",
        },
        { text: "NATURE OF TRAINING", value: "nature_training" },
        { text: "PLACE OF TRAINING", value: "place_training" },
        { text: "PARTICIPANT COUNT", value: "participant_count" },
        { text: "ACTION", value: "location" },
      ],
      pending: [
          {
            training_title: "Computer Programming ",
            nature_training: "Whole Day",
            place_training: "City Hall of Tagum - Atrium",
            participant_count: "58",
          },
          {
            training_title: "PESLA",
            nature_training: "Half Day",
            place_training: "City Hall of Tagum - Medication Center",
            participant_count: "15",
          },
          {
            training_title: "Computer Technicalities ",
            nature_training: "Whole Day",
            place_training: "City Hall of Tagum - Atrium",
            participant_count: "28",
          },
        ],
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