<template>
  <div>
    <v-app id="inspire" class="background">
      <v-main class="d-flex justify-center align-center">
        <v-col cols="10" class="mx-auto">
          <v-form @submit.prevent="submitHandler" ref="form">
            <v-container>
              <v-layout row wrap>
                <v-card class="wrapper">
                  <div class="text-center">
                    <h2>PUBLIC EDUCATION AND EMPLOYMENT SERVICES OFFICE</h2>
                  </div>

                  <v-row class="text-form">
                    <v-col offset="1" md="10">
                      <v-snackbar v-model="snackbar" dark>
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
                      <v-text-field
                        class="custom-label-color"
                        v-model="email"
                        label="User Name"
                        color="white"
                        type="sample"
                        prepend-inner-icon="mdi mdi-account mdi-green"
                        required
                      ></v-text-field>

                      <v-text-field
                        v-model="password"
                        class="custom-label-color"
                        label="Password"
                        color="white"
                        type="password"
                        prepend-inner-icon="mdi-key mdi-green"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-container>
                    <!--  <v-card-actions class="justify-center"> -->
                    <v-row>
                      <v-col offset="2" size="9">
                        <v-btn
                          type="submit"
                          color="blue"
                          class="rounded-xl"
                          @click="userlogin"
                        >
                          <v-icon left>mdi-account-check</v-icon>
                          LOG IN
                        </v-btn>
                        <v-dialog v-model="dialog" max-width="290">
                          <v-card>
                            <v-card-title class="text-h5">
                              Login Denied
                            </v-card-title>

                            <v-card-text>
                              {{ this.loginCorrection }}
                            </v-card-text>

                            <v-card-actions>
                              <v-spacer></v-spacer>

                              <v-btn
                                color="green darken-1"
                                text
                                @click="dialog = false"
                              >
                                Got it!
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                      </v-col>

                      <v-col
                        offset=""
                        size="9"
                        @click="$router.push({ name: 'RegisterPage' })"
                      >
                        <v-btn color="green" class="rounded-xl">
                          <v-icon left>mdi-account-check</v-icon>
                          REGISTER
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-layout>
            </v-container>
          </v-form>
        </v-col>
      </v-main>
    </v-app>
  </div>
</template>

<script>
/* eslint-disable */
import { mapActions } from "vuex";
export default {
  name: "App",
  data: () => ({
    inputcheck: false,
    dialog: false,
    passwordShow: false,
    email: "",
    password: "",
    loginCorrection: "",
    snackbar: false,
    text: `Please input fields`,
  }),
  methods: {
    ...mapActions("users", ["Loginuser"]),
    submitHandler() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        setTimeout(() => {}, 3000);
      }
    },
    userlogin() {
      let data = new FormData();
      data.append("email", this.email);
      data.append("password", this.password);
      console.log(this.email);
      console.log(this.password);
      if (this.email.length == 0) {
        this.snackbar = true;
      } else {
        this.Loginuser(data).then((e) => {
          console.log("Hello!");
          if (e == 0) {
            this.loginCorrection = "Incorrect Password!";
            this.dialog = true;
          } else if (e == 2) {
            this.loginCorrection = "No user account found!";
            this.dialog = true;
          } else {
            this.$router.push("admindashboard");
          }
        });
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
  background: transparent;
  outline: none;
  color: rgb(28, 110, 4);
}

.custom-placeholer-color input::placeholder {
  color: rgb(28, 110, 4) !important;
  opacity: 1;
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
  border-radius: 25px 25px 25px 25px;
}

.v-btn {
  border-radius: 25px 25px 25px 25px;
}

h2 {
  color: rgb(28, 110, 4);
  -webkit-text-stroke-color: rgb(0, 0, 0);
  margin-top: 20px;
}

.wrapper {
  position: absolute;
  left: 50%;
  top: 250%;
  width: 400px;
  transform: translate(-50%, -50%);
  background: rgb(255, 255, 255, 0.8);
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

.text-form {
  margin-top: 20px;
  color: rgb(28, 110, 4);
}
</style>
      
      
      
      