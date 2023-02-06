<template>
  <v-dialog v-model="show" max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="success" dark v-bind="attrs" v-on="on">
        <v-icon> mdi-plus </v-icon>

        Create Appointment
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5" color="green">Create Appointment</span>
      </v-card-title>
      <v-divider color="green"></v-divider>

      <v-card class="mb-12">
        <v-card-text>
          <v-container fluid>
            <v-row>
                <v-col cols="3" sm="6" md="3">
                Job Posts:
              </v-col>
              <v-col cols="9" sm="6" md="9">
                <v-select
                        :items="job_post"
                        outlined                        
                        dense
                        color="green"
                      >
                      </v-select>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  label="Appointment Title"
                  required
                  outlined
                  dense
                  color="green"
                >
                </v-text-field>
              </v-col>
              <v-col cols="6" sm="6" md="6">
                <v-text-field
                  label="Date"
                  type="date"
                  required
                  outlined
                  dense
                  color="green"
                >
                </v-text-field>
              </v-col>
              <v-col cols="6" sm="6" md="6">
                <v-text-field
                  label="Time"
                  type="time"
                  required
                  outlined
                  dense
                  color="green"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  label="Location"
                  type="text"
                  required
                  outlined
                  dense
                  color="green"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                Target Applicants
              
                <v-select
                        :items="applicants"
                        outlined
                        small-chips
                        multiple
                        dense
                        color="green"
                      >
                      </v-select>
              </v-col>
            </v-row>
          </v-container>
          <v-btn id="v-btn-c" color="success"  @click.stop="dialog = true">
            Create
          </v-btn>
          <v-btn @click="show = false" class="ma-2"> Cancel </v-btn>
        </v-card-text>
      </v-card>
      <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-title class="text-h5"> UNSAVED CHANGES </v-card-title>

            <v-card-text>
              You have created an Appointment. Do you want to save or
              discard it?
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="green darken-1" text @click="dialog = false" >
                Discard
              </v-btn>

              <v-btn color="green darken-1" text @click="dialog = false, show = false" type="submit">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </v-card>
  </v-dialog>
</template>
  <script>
export default {
  data: () => ({
    show: false,
    dialog: false,
    applicants: [
      "Honey Curay",
      "Rey Alcala",
      "Joemarie Rendon",
      "Neil Roble",
      "Jograd Mahusay",
      "John Gerber Ungcad",
    ],
    job_post: [
    "Computer Programmer",
    "Computer Technician",
    "Network Technician"
    ],  
  }),
};
</script>
  