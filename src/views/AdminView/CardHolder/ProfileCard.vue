<template>
    <div>
      <v-col md="10" offset-md="1">
        <v-card outlined color="#1B5E20">
          <v-card-title
            class="d-flex flex-column justify-space-between align-center"
          >
            <v-avatar size="100">
              <img src="@/assets/download.png" />
            </v-avatar>
          </v-card-title>
          <v-card-text
            class="d-flex flex-column justify-space-between align-center"
            style="color: white"
          >
            <p class="font-weight-black">Admin Name</p>
            <p class="font-weight-bold">Admin Position</p>
            <p class="font-weight-medium">Admin Office</p>
          </v-card-text>
        </v-card>
        <v-card class="">
          <h3 class="ma-2 pa-2">User Profile</h3>
          <v-spacer></v-spacer>
          <v-row>
            <v-col cols="5">
              <v-subheader class="ml-5">Full Name</v-subheader>
            </v-col>
            <v-col cols="6">
              <v-text-field outlined dense></v-text-field>
            </v-col>
          </v-row>
          <v-row style="margin-top: -35px">
            <v-col cols="5">
              <v-subheader class="ml-5">Designation</v-subheader>
            </v-col>
            <v-col cols="6">
              <v-text-field outlined dense></v-text-field>
            </v-col>
          </v-row>
          <v-row style="margin-top: -35px">
            <v-col cols="5">
              <v-subheader class="ml-5">Department</v-subheader>
            </v-col>
            <v-col cols="6">
              <v-text-field outlined dense></v-text-field>
            </v-col>
          </v-row>
          <v-row style="margin-top: -35px">
            <v-col cols="5">
              <v-subheader class="ml-5">Email Address</v-subheader>
            </v-col>
            <v-col cols="6">
              <v-text-field outlined dense></v-text-field>
              <v-btn color="success" dark small  right="true" class="ma-2 "> SAVE </v-btn>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        
          <h3 class="ma-2 pa-2">Company Profile</h3>
          <v-spacer></v-spacer>
          <v-row>
            <v-col cols="5">
              <v-subheader class="ml-5">Company Name</v-subheader>
            </v-col>
            <v-col cols="6">
              <v-text-field outlined dense></v-text-field>
            </v-col>
          </v-row>
          <v-row style="margin-top: -35px">
            <v-col cols="5">
              <v-subheader class="ml-5">Industry</v-subheader>
            </v-col>
            <v-col cols="6">
              <v-text-field outlined dense></v-text-field>
            </v-col>
          </v-row>
          <v-row style="margin-top: -35px">
            <v-col cols="5">
              <v-subheader class="ml-5">Company Address</v-subheader>
            </v-col>
            <v-col cols="6">
              <v-text-field outlined dense></v-text-field>
            </v-col>
          </v-row>
          <v-row style="margin-top: -35px">
            <v-col cols="5">
              <v-subheader class="ml-5">Contact Number</v-subheader>
            </v-col>
            <v-col cols="6">
              <v-text-field outlined dense></v-text-field>
            </v-col>
          </v-row>
          <v-row style="margin-top: -35px">
            <v-col cols="5">
              <v-subheader class="ml-5">Website</v-subheader>
            </v-col>
            <v-col cols="6">
              <v-text-field outlined dense></v-text-field>
              <v-btn color="success" dark small  right="true" class="ma-2 "> SAVE </v-btn>
            </v-col>
          </v-row>
          <v-row>
            
          </v-row>
        </v-card>
      </v-col>
    </div>
  </template>
  <script>
  export default {
    components: {},
    data: () => ({
      headers: [
        {
          text: "",
          align: "left",
          value: "name",
        },
        { text: "", value: "customer" },
        // { text: "ITEM", value: "item" },
        { text: "TIMESTAMP)", value: "time" },
      ],
      pending: [
        {
          name: "Talent Interview",
          customer: "Full-Time",
          // item: "",
          time: "21",
        },
        {
          name: "Talent Onboarding",
          customer: "Full-Time",
          // item: "",
          time: "21",
        },
        {
          name: "Talent Offboarding",
          customer: "Full-Time",
          // item: "",
          time: "21",
        },
      ],
    }),
  };
  </script>
    