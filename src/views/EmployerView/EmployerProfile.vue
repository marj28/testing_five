<template>
  <v-app>
    <employer-navbar />
    <v-main>
      <v-row class="pa-3">
        <v-col>
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
              <p class="font-weight-black">Employer Name</p>
              <p class="font-weight-bold">Employer Position</p>
              <p class="font-weight-medium">Company Name and Address</p>
            </v-card-text>
            <v-card>
              <v-col cols="12" sm="12" md="12" lg="12">
                <v-radio-group label="Establishment Type" row>
                  <v-spacer></v-spacer>
                  <v-radio
                    color="success"
                    label="Private"
                    value="private"
                    @click="profilecard_government = false, profilecard_private = true"
                  ></v-radio>
                  <v-spacer></v-spacer>
                  <v-radio
                    color="success"
                    label="Government"
                    value="government"
                    @click="profilecard_government = true, profilecard_private = false"
                  ></v-radio>
                  <v-spacer></v-spacer>
                </v-radio-group>
              </v-col>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-show="profilecard_private">
        <v-col style="margin-top: -45px;" >
          <profile-card-private />
        </v-col>
        </v-row>
        <v-row v-show="profilecard_government">
        <v-col style="margin-top: -45px;" >
          <profile-card-government />
        </v-col>
      </v-row>
      
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {
  },
  data: () => ({
    profilecard_government: false,
    profilecard_private: false,
  })
};
</script>