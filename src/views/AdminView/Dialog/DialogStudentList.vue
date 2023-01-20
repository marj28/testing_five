<template>
  <v-app>
    <AdminNavbar />
    <v-main>
      <v-container>
        <v-card>
          <v-col cols="12" sm="12" md="12">
            <v-text-field
              class="textbox"
              v-model="first_name"
              type="text"
              label="First Name"
              prepend-inner-icon="mdi mdi-account mdi-green"
              required
              color="green"
              outlined
              dense
            />

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
          <v-card-actions>
            <v-btn color="primary" flat @click.stop="show = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>
      
  <script>
import AdminNavbar from "@/views/Navigation/AdminNavbar.vue";

export default {
  components: {
    AdminNavbar,
  },
  props: ["visible"],
  computed: {
    show: {
      get() {
        return this.visible;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      },
    },
  },
};
</script>