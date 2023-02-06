<template>
    <div>
        <v-col md="12" class="pa-4">
          <v-card outlined color="#1B5E20">
            <v-card-title class="subtitle-2">
          APPOINTMENTS
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
          ></v-text-field>
          <v-spacer></v-spacer>
          <AddAppointment
            :visible="showAddAppointment"
            @close="showAddAppointment = true"
          />
        </v-card-title>
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
      </div>
</template>
<script>
import AddAppointment from "@/views/EmployerView/AddAppointment.vue"

  export default {
    components: {
      AddAppointment
  },
    data: () => ({
      headers: [
        {
          text: "JOB POST",
          align: "left",
          value: "name",
        },
        { text: "APPOINTMENT", value: "type_appointment" },
        { text: "DATE", value: "date" },
        { text: "TIME", value: "time" },
        { text: "LOCATION", value: "location" },
        { text: "NUMBER OF APPLICANTS", value: "no_applicants" },
      ],
      pending: [
          {
            name: "Computer Programmer",
            type_appointment: "Initial Interview",
            date: "January 31, 2023",
            time: "8:00 AM - 9:00 AM",
            location: "City Hall of Tagum - Atrium",
            no_applicants: "45",
          },
          {
            name: "Computer Programmer",
            type_appointment: "Initial Interview",
            date: "January 31, 2023",
            time: "8:00 AM - 9:00 AM",
            location: "City Hall of Tagum - Atrium",
            no_applicants: "45",
          },
          {
            name: "Computer Programmer",
            type_appointment: "Initial Interview",
            date: "January 31, 2023",
            time: "8:00 AM - 9:00 AM",
            location: "City Hall of Tagum - Atrium",
            no_applicants: "45",
           
          },
          {
            name: "Computer Programmer",
            type_appointment: "Initial Interview",
            date: "January 31, 2023",
            time: "8:00 AM - 9:00 AM",
            location: "City Hall of Tagum - Atrium",
            no_applicants: "45",
           
          },
          {
            name: "Computer Programmer",
            type_appointment: "Initial Interview",
            date: "January 31, 2023",
            time: "8:00 AM - 9:00 AM",
            location: "City Hall of Tagum - Atrium",
            no_applicants: "45",
            
          },
        ],
    }),
  };
  </script>
  