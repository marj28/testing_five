<template>
  <v-app>
    <v-main class="d-flex">
      <v-row>
        <v-col cols="10" lg="3" class="mx-auto">
          <v-card class="">
            <div class="text-center">
              <h1>Create User Account</h1>
            </div>
            <v-form @submit.prevent="submitHandler" ref="form">
              <v-card-text>
                <v-text-field
                  class="textbox"
                  v-model="first_name"
                  type="text"
                  label="First Name"
                  prepend-inner-icon="mdi-account white"
                  required
                />

                <v-text-field
                  class="textbox"
                  v-model="last_name"
                  type="text"
                  label="Last Name"
                  prepend-inner-icon="mdi-account white"
                  required
                />

                <v-text-field
                  class="textbox"
                  v-model="email"
                  type="email"
                  label="Email"
                  prepend-inner-icon="mdi-account white"
                  required
                />

                <v-text-field
                  class="textbox"
                  v-model="pw1"
                  :rules="pwdRules"
                  :type="passwordShow ? 'text' : 'password'"
                  label="Password"
                  placeholder="Password"
                  prepend-inner-icon="mdi-key"
                />

                <v-text-field
                  class="textbox"
                  v-model="pw2"
                  :rules="pwdConfirm"
                  :type="passwordShow ? 'text' : 'password'"
                  label="Confirm Password"
                  placeholder="Password"
                  prepend-inner-icon="mdi-key"
                />
              </v-card-text>

              <v-container>
                <v-row>
                  <v-col
                    offset-lg="2"
                    offset-md="2"
                    offset-sm="2"
                    offset-xl="2"
                  >
                    <v-btn
                      type="submit"
                      color="green"
                      class="rounded-xl"
                      @click="register"
                    >
                      <v-icon left>mdi-account-check</v-icon>
                      Create Account
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card>
        </v-col>

        <v-col>
          <CrudDatatable />
        </v-col>
      </v-row>

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
    <!--    <v-snackbar top color="green" v-model="snackbar">
      Login success
    </v-snackbar> -->
  </v-app>
</template>


<script scoped>
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {},

  data: function () {
    return {
      dialog: false,
      loading: false,
      selection: 1,
      first_name: "",
      last_name: "",
      email: "",

      pw1: "",
      pw2: "",
      pwdRules: [(v) => !!v || "Password required"],
      pwdConfirm: [
        (v) => !!v || "Confirm password",
        (v) => v === this.pw1 || "Passwords do not match",
      ],
    };
  },

  methods: {
    ...mapActions("users", ["Registration"]),
    register() {
      this.loading = true;
      let data = new FormData();
      data.append("first_name", this.first_name);
      data.append("last_name", this.last_name);
      data.append("email", this.email);
      data.append("password", this.pw1);

      this.Registration(data);
      setTimeout(() => {
        this.loading = false;
        this.$router.push("/AdminDashboard");
      }, 2000);

      this.first_name = "";
      this.last_name = "";
      this.email = "";
      this.pw1 = "";
      this.pw2 = "";
      this.$refs.form.reset();

      this.loginCorrection = "Message";
      this.dialog = true;
    },
  },
};
</script>




<style scoped>
h1 {
  color: rgb(63, 248, 7);
  -webkit-text-fill-color: rgb(
    4,
    245,
    85
  ); /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgb(255, 255, 255);
}

.wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 400px;
  transform: translate(-50%, -50%);
  background: rgba(241, 236, 236, 0.623);
  border-radius: 15px;
  box-shadow: 10px 10px 15px rgba(49, 47, 47, 0.15);
  box-shadow: 0 0 8px rgb(201, 181, 1);
}

.white {
  background-color: #ffffff;
}

form .textbox {
  -webkit-text-stroke-color: rgb(255, 255, 255);
  color: white;
}

.textbox input {
  padding: 5px;
  width: 100%;
  height: 40px;
  font-size: 17px;
  outline: none;
  border: none;
  background: none;
  color: white;
}
.textbox label {
  top: 50%;
  left: 5px;
  position: absolute;
  color: white;
  font-size: 17px;
  transform: translateY(-50%);
  pointer-events: none;
  transition: 0.5s;
}
.textbox span::before {
  content: "";
  position: absolute;
  top: 40px;
  left: 0;
  width: 0%;
  height: 2px;
  background: rgb(0, 188, 221);
  transition: 0.5s;
}
.textbox input:focus ~ label,
.textbox input:valid ~ label {
  top: -5px;
  color: rgb(1, 185, 176);
}
.textbox input:focus ~ span::before,
.textbox input:valid ~ span::before {
  width: 100%;
}
</style>
