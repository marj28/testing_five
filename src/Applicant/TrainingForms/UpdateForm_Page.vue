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
            Project Update Virtual and Digital Training
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
              A program which aims to provide virtual and digital training
              opportunities for Tagumenyos. This is an alternative route for the
              constituents to acquire work onsite or even work from home.
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
                @click="UpdateForm_Register = true"
              >
                Register
              </v-btn>
            </v-col>
          </v-container>
        </v-card>
        <v-card class="mx-auto" v-show="UpdateForm_Register">
          <update-form />
        </v-card>
      </v-col>
      <!-- <CBTEDForm /> -->
    </v-main>
  </v-app>
</template>
      <script>
import ApplicantNavbar from "@/views/Navigation/ApplicantNavbar.vue";
import UpdateForm from "./UpdateForm.vue";
//   import CBTEDForm from "@/views/ApplicantView/TrainingForms/CBTEDForm.vue"
export default {
  components: {
    ApplicantNavbar,
    UpdateForm,
    //   CBTEDForm,
  },
  data: () => ({
    UpdateForm_Register: false,
  }),
};
</script>