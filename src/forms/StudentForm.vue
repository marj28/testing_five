<template>
    <div>
        <v-col
                        cols="12"
                        sm="12"
                        md="12"
                        v-show="student"
                        style="margin-top: -50px"
                      >
                      <student-form :message="'Hello world!'"/>
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
       
    </div>
</template>
<script>

export default {
    props: {
        message: {
            type: String,
            default: ""
        } 
    }
}
</script>
