<template>
  <v-app>
    <ApplicantNavbar />
    <v-main>
      <v-col>
        <v-card outlined color="#1B5E20">
          <v-card-title
            class="
              d-flex
              flex-column
              justify-space-between
              align-center
              white--text
            "
            color="success"
          >
            <v-avatar size="100">
              <img src="@/assets/form2.png" />
            </v-avatar>
            Community-based Training for Enterprise Development (CBTED)
          </v-card-title>
          <v-container>
            <h5
              class="
                d-flex
                flex-column
                justify-space-between
                align-center
                white--text
              "
            >
              The LGU Tagum continuous its thrust to conduct skills training in
              partnership with TESDA to equip people with necessary skills
              needed in the labor market. PEESO aims to tap health and wellness
              industry, construction and other sector to provide free trainings
              for those practitioners with no National Certificate.
            </h5>
            <v-divider dark></v-divider>
            <v-col
              align="center"
              justify="space-around"
              style="margin-bottom: -50px"
            >
              <v-btn
                color="success"
                class="text-center mb-6"
                dark
                @click="CBTED_Register = true"
              >
                Register
              </v-btn>
            </v-col>
          </v-container>
        </v-card>
        <v-card class="mx-auto" v-show="CBTED_Register">
          <cbted-form />
        </v-card>
      </v-col>
      <!-- <CBTEDForm /> -->
    </v-main>
  </v-app>
</template>
  <script>
import ApplicantNavbar from "@/views/Navigation/ApplicantNavbar.vue";
//   import CBTEDForm from "@/views/ApplicantView/TrainingForms/CBTEDForm.vue"
export default {
  components: {
    ApplicantNavbar,
    //   CBTEDForm,
  },
  data: () => ({
    CBTED_Register: false,
  }),
};
</script>