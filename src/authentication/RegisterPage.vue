<template>
  <div>
    <v-app id="inspire" class="background">
      <v-main class="d-flex justify-center align-center">
        <v-col cols="10" md="4" class="mx-auto">
          <v-form @submit.prevent="submitHandler" ref="form">
            <v-container>
              <v-layout row wrap>
                <v-card class="" style="margin-top: 150px">
                  <div class="text-center pa-4">
                    <h2>PEESO</h2>
                  </div>
                  <v-row class="text-center pa-4">
                    <v-col cols="12" sm="12" md="4">
                      <v-btn
                        type="submit"
                        color="green"
                        dark
                        small
                        outlined
                        @click="
                          (student = false),
                            (applicant = false),
                            (employer = true)
                        "
                        >I am an Employer</v-btn
                      >
                    </v-col>
                    <v-col cols="12" sm="12" md="4">
                      <v-btn
                        type="submit"
                        color="success"
                        outlined
                        small
                        @click="
                          (student = true),
                            (employer = false),
                            (applicant = false)
                        "
                        >I am a Student</v-btn
                      >
                    </v-col>
                    <v-col cols="12" sm="12" md="4">
                      <v-btn
                        type="submit"
                        color="success"
                        small
                        outlined
                        @click="
                          (student = false),
                            (employer = false),
                            (applicant = true)
                        "
                        >I am an Applicant</v-btn
                      >
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                  <v-row class="text-form pa-6">
                    <v-col>
                      <!-- start snackbar -->
                      <v-snackbar v-model="snackbar" :color="alertColor">
                        {{ text }}

                        <template v-slot:action="{ attrs }">
                          <v-btn
                            color="pink"
                            text
                            v-bind="attrs"
                            @click="snackbar = false"
                          >
                            Close
                          </v-btn>
                        </template>
                      </v-snackbar>
                      <!-- end of snacksbar -->
                      <!-- employer -->
                      <v-col
                        cols="12"
                        sm="12"
                        md="12"
                        v-show="employer"
                        style="margin-top: -50px"
                      >
                      
                        <h4 class="text-center pa-2 green--text">
                          Employer Registration
                        </h4>

                        <v-text-field
                          class="textbox"
                          v-model="business_name"
                          type="text"
                          label="Business Name"
                          prepend-inner-icon="mdi mdi-account mdi-green"
                          required
                          color="green"
                          outlined
                          dense
                        />

                        <v-text-field
                          class="textbox"
                          v-model="company_address"
                          type="text"
                          label="Company Address"
                          prepend-inner-icon="mdi mdi-account mdi-green"
                          required
                          color="green"
                          outlined
                          dense
                        />

                        <h5 class="mb-2 green--text" style="margin-top: -10px">
                          Contact Person
                        </h5>
                        <v-row>
                          <v-col cols="12" md="5">
                            <v-text-field
                              class="textbox"
                              v-model="first_name"
                              type="text"
                              label="First Name"
                              required
                              color="green"
                              outlined
                              dense
                            />
                          </v-col>
                          <v-col cols="12" md="4">
                            <v-text-field
                              class="textbox"
                              v-model="last_name"
                              type="text"
                              label="Last Name"
                              required
                              color="green"
                              outlined
                              dense
                            />
                          </v-col>
                          <v-col cols="12" md="3">
                            <v-select
                              :items="suffix"
                              label="Suffix"
                              outlined
                              dense
                            >
                            </v-select>
                          </v-col>
                        </v-row>
                        <v-row style="margin-top: -20px">
                          <v-col cols="12" md="6" lg="6">
                            <v-text-field
                              class="textbox"
                              v-model="contactNo"
                              type="email"
                              label="Contact Number"
                              required
                              color="green"
                              outlined
                              dense
                            />
                          </v-col>
                          <v-col cols="12" md="6" lg="6">
                            <v-text-field
                              class="textbox"
                              v-model="email"
                              type="email"
                              label="Business Email"
                              color="green"
                              outlined
                              dense
                            />
                          </v-col>
                        </v-row>

                        <v-divider class="mb-4"></v-divider>
                        <v-row>
                          <v-col cols="12" md="6" lg="6">
                            <v-text-field
                              class="textbox"
                              v-model="password"
                              :rules="pwdRules"
                              :type="passwordShow ? 'text' : 'password'"
                              label="Password"
                              prepend-inner-icon="mdi-key"
                              color="green"
                              outlined
                              dense
                            />
                          </v-col>
                          <v-col cols="12" md="6" lg="6">
                            <v-text-field
                              class="textbox"
                              v-model="pw2"
                              :rules="pwdConfirm"
                              :type="passwordShow ? 'text' : 'password'"
                              label="Confirm Password"
                              prepend-inner-icon="mdi-key"
                              color="green"
                              outlined
                              dense
                            />
                          </v-col>
                        </v-row>

                        <v-col align="center" justify="space-around">
                          <v-btn
                            type="submit"
                            color="green"
                            class="text-center"
                            @click="employerregister"
                            dark
                            block
                          >
                            <v-icon left>mdi-account-check</v-icon>
                            SIGN UP
                          </v-btn>
                        </v-col>
                        <v-divider></v-divider>
                        <v-col
                          align="center"
                          justify="space-around"
                          style="margin-bottom: -40px"
                        >
                          <p>Already a Member?</p>
                          <v-btn
                            color="#fada07"
                            class="text-center"
                            dark
                            @click="$router.push({ name: 'LoginPage' })"
                          >
                            Log In
                          </v-btn>
                        </v-col>
                      </v-col>
                      <!-- student -->

                      <v-col
                        cols="12"
                        sm="12"
                        md="12"
                        v-show="student"
                        style="margin-top: -50px"
                      >
                      <!-- <student-form :message="'Hello world!'"/> -->
                        <h4 class="text-center pa-2 green--text">
                          Student Registration
                        </h4>
                        <v-row>
                          <v-col cols="12" md="3">
                            <v-text-field
                              class="textbox"
                              v-model="last_name"
                              type="text"
                              label="Last Name"
                              required
                              color="green"
                              outlined
                              dense
                            />
                          </v-col>
                          <v-col cols="12" md="4">
                            <v-text-field
                              class="textbox"
                              v-model="first_name"
                              type="text"
                              label="First Name"
                              required
                              color="green"
                              outlined
                              dense
                            />
                          </v-col>
                          <v-col cols="12" md="2">
                            <v-text-field
                              class="textbox"
                              v-model="middle_initial"
                              type="text"
                              label="M.I."
                              required
                              color="green"
                              outlined
                              dense
                            />
                          </v-col>

                          <v-col cols="12" md="3">
                            <v-select
                              :items="suffix"
                              label="Suffix"
                              outlined
                              dense
                            >
                            </v-select>
                          </v-col>
                        </v-row>

                        <v-text-field
                          class="textbox"
                          v-model="email"
                          type="email"
                          label="Email"
                          prepend-inner-icon="mdi mdi-account mdi-green"
                          required
                          color="green"
                          outlined
                          dense
                        />
                        <v-row>
                          <v-col cols="12" md="6" lg="6">
                            <v-text-field
                              class="textbox"
                              v-model="password"
                              :rules="pwdRules"
                              :type="passwordShow ? 'text' : 'password'"
                              label="Password"
                              prepend-inner-icon="mdi-key"
                              color="green"
                              outlined
                              dense
                            />
                          </v-col>
                          <v-col cols="12" md="6" lg="6">
                            <v-text-field
                              class="textbox"
                              v-model="pw2"
                              :rules="pwdConfirm"
                              :type="passwordShow ? 'text' : 'password'"
                              label="Confirm Password"
                              prepend-inner-icon="mdi-key"
                              color="green"
                              outlined
                              dense
                            />
                          </v-col>
                        </v-row>

                        <v-col align="center" justify="space-around">
                          <v-btn
                            type="submit"
                            color="green"
                            class="text-center"
                            @click="studentregister"
                            dark
                            block
                          >
                            <v-icon left>mdi-account-check</v-icon>
                            SIGN UP
                          </v-btn>
                        </v-col>
                        <v-divider></v-divider>
                        <v-col
                          align="center"
                          justify="space-around"
                          style="margin-bottom: -40px"
                        >
                          <p>Already a Member?</p>
                          <v-btn
                            color="#fada07"
                            class="text-center"
                            dark
                            @click="$router.push({ name: 'LoginPage' })"
                          >
                            Log In
                          </v-btn>
                        </v-col>
                      </v-col>
                      <!-- end student -->
                      <!-- start applicant -->
                      <v-col
                        cols="12"
                        sm="12"
                        md="12"
                        v-show="applicant"
                        style="margin-top: -50px"
                      >
                        <h4 class="text-center pa-2 green--text">
                          Job Applicant Registration
                        </h4>
                        <v-row>
                          <v-col cols="12" md="6" lg="6">
                            <v-text-field
                              class="textbox"
                              v-model="first_name"
                              type="text"
                              label="Applicant First Name"
                              prepend-inner-icon="mdi mdi-account mdi-green"
                              required
                              color="green"
                              outlined
                              dense
                            />
                          </v-col>
                          <v-col cols="12" md="6" lg="6">
                            <v-text-field
                              class="textbox"
                              v-model="last_name"
                              type="text"
                              label="Last Name"
                              prepend-inner-icon="mdi mdi-account mdi-green"
                              required
                              color="green"
                              outlined
                              dense
                            />
                          </v-col>
                        </v-row>

                        <v-text-field
                          class="textbox"
                          v-model="email"
                          type="email"
                          label="Email"
                          prepend-inner-icon="mdi mdi-account mdi-green"
                          required
                          color="green"
                          outlined
                          dense
                        />
                        <v-row>
                          <v-col cols="12" md="6" lg="6">
                            <v-text-field
                              class="textbox"
                              v-model="password"
                              :rules="pwdRules"
                              :type="passwordShow ? 'text' : 'password'"
                              label="Password"
                              prepend-inner-icon="mdi-key"
                              color="green"
                              outlined
                              dense
                            />
                          </v-col>
                          <v-col cols="12" md="6" lg="6">
                            <v-text-field
                              class="textbox"
                              v-model="pw2"
                              :rules="pwdConfirm"
                              :type="passwordShow ? 'text' : 'password'"
                              label="Confirm Password"
                              prepend-inner-icon="mdi-key"
                              color="green"
                              outlined
                              dense
                            />
                          </v-col>
                        </v-row>

                        <v-col align="center" justify="space-around">
                          <v-btn
                            type="submit"
                            color="green"
                            class="text-center"
                            @click="applicantregister"
                            dark
                            block
                          >
                            <v-icon left>mdi-account-check</v-icon>
                            SIGN UP
                          </v-btn>
                        </v-col>
                        <v-divider></v-divider>
                        <v-col
                          align="center"
                          justify="space-around"
                          style="margin-bottom: -40px"
                        >
                          <p>Already a Member?</p>
                          <v-btn
                            color="#fada07"
                            class="text-center"
                            dark
                            @click="$router.push({ name: 'LoginPage' })"
                          >
                            Log In
                          </v-btn>
                        </v-col>
                      </v-col>
                      <!-- end applicant -->
                    </v-col>
                  </v-row>
                </v-card>
              </v-layout>
            </v-container>
          </v-form>
        </v-col>
        <!-- start dialog -->
        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-title class="text-h5"> Save Successfully </v-card-title>

            <v-card-text>
              {{ this.loginCorrection }}
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="green darken-1" text @click="dialog = false">
                OK
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- end dialog -->
      </v-main>
    </v-app>
  </div>
</template>
    
<script scoped>
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {},

  data: function () {
    return {
      alertColor: 'success',
      dialog: false,
      loading: false,
      snackbar: false,
      student: true,
      employer: false,
      applicant: false,

      suffix: ["Junior", "Senior", "III", "N/A"],

      text: `Please input fields`,
      selection: 1,
      first_name: "",
      last_name: "",
      email: "",

      password: "",
      pw2: "",
      pwdRules: [(v) => !!v || "Password required"],
      pwdConfirm: [
        (v) => !!v || "Confirm password",
        (v) => v === this.password || "Passwords do not match",
      ],
    };
  },

  methods: {
    ...mapActions("users", ["Registration"]),
    employerregister() {
      this.loading = true;
      let data = new FormData();
      data.append("first_name", this.first_name);
      data.append("last_name", this.last_name);
      data.append("email", this.email);
      data.append("password", this.password);

      if (this.first_name.length == 0) {
        this.snackbar = true;
      } else {
        this.Registration(data);
        setTimeout(() => {
          this.loading = false;
          this.$router.push("/EmployerDashboard");
        }, 2000);

        this.first_name = "";
        this.last_name = "";
        this.email = "";
        this.password = "";
        this.pw2 = "";
        this.$refs.form.reset();

        this.loginCorrection = "Message";
        this.dialog = true;
      }
    },
    userReg() {
      this.$createUserWithEmailAndPassword(this.$FBAUTH, this.email, this.password)
      .then((userCredintials) =>  {
        console.log(userCredintials)
        this.alertColor = 'success'
            this.snackbar = true
            this.text = "Registration Successful!"
            ///redirect somewhere
       
      }).catch(error=> {
        console.log(error.message)
        if(error.message == "Firebase: Error (auth/invalid-email).") {
           // alert("Pretty error message!")
           this.alertColor = 'error'
            this.snackbar = true
            this.text = "Pretty error message!"
        }
      })
    },
    studentregister() {
      // this.userReg()
      // return
      this.loading = true;
      let data = new FormData();
      data.append("first_name", this.first_name);
      data.append("last_name", this.last_name);
      data.append("email", this.email);
      data.append("password", this.password);

      if (this.first_name.length == 0) {
        this.snackbar = true;
      } else {
        this.Registration(data);
        setTimeout(() => {
          this.loading = false;
          this.$router.push("/StudentDashboard");
        }, 2000);

        this.first_name = "";
        this.last_name = "";
        this.email = "";
        this.password = "";
        this.pw2 = "";
        this.$refs.form.reset();

        this.loginCorrection = "Message";
        this.dialog = true;
      }
    },
    applicantregister() {
      this.loading = true;
      let data = new FormData();
      data.append("first_name", this.first_name);
      data.append("last_name", this.last_name);
      data.append("email", this.email);
      data.append("password", this.password);

      if (this.first_name.length == 0) {
        this.snackbar = true;
      } else {
        this.Registration(data);
        setTimeout(() => {
          this.loading = false;
          this.$router.push("/ApplicantDashboard");
        }, 2000);

        this.first_name = "";
        this.last_name = "";
        this.email = "";
        this.password = "";
        this.pw2 = "";
        this.$refs.form.reset();

        this.loginCorrection = "Message";
        this.dialog = true;
      }
    },
  },
};
</script>    
      
<style scoped>
input[type="sample"] {
  border-bottom: 1px solid rgb(28, 110, 4);
  outline: none;
  color: rgb(28, 110, 4);
}

input[type="password"] {
  outline: none;
  color: rgb(28, 110, 4);
}

.custom-placeholer-color input::placeholder {
  color: rgb(28, 110, 4) !important;
}

.custom-label-color .v-label {
  color: rgb(28, 110, 4);
  opacity: 1;
}

.custom-placeholer-color input,
.custom-label-color input {
  color: rgb(28, 110, 4) !important;
}

.v-sheet.v-card {
  border-radius: 10px 10px 10px 10px;
}

h2 {
  color: rgb(28, 110, 4);
  margin-top: 20px;
}

.wrapper {
  position: absolute;
  left: 50%;
  top: 250%;
  /* width: 400px; */
  transform: translate(-50%, -50%);
  border-radius: 20px;
  box-shadow: 10px 10px 15px rgba(49, 47, 47, 0.15);
  box-shadow: 0 0 8px rgb(201, 181, 1);
}

.background {
  margin: 0;
  padding: 0;
  background-image: url("../assets/cover1.jpg") !important;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
</style>
      
      
      
      