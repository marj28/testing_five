<template>
  <v-app>
    <AdminNavbar />
    <v-main>
      <v-container>
        <v-col cols="10" offset-md="1">
          <v-card >
          <v-col cols="10" sm="12" md="12">
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
          </v-col>
          <v-card-actions>
            <v-btn color="success" flat @click="studentregister">Update</v-btn>
            <v-btn color="warning" flat @click="$router.push({ name: 'StudentList' })">Cancel</v-btn>
          </v-card-actions>
        </v-card>
        </v-col>
        
      </v-container>
    </v-main>
  </v-app>
</template>
      
  <script>
import AdminNavbar from "@/views/Navigation/AdminNavbar.vue";
import {mapActions, mapGetters} from 'vuex';

export default {
  components: {
    AdminNavbar,
  },
  methods: {
    ...mapActions("users", ["Updateuser"]),
    studentregister() {
      this.loading = true;
      let data = new FormData();
      data.append("first_name", this.first_name);
      data.append("last_name", this.last_name);
      data.append("email", this.email);
      data.append("password", this.password);
      console.log(this.first_name)
      if (this.first_name.length == 0) {
        this.snackbar = true;
      } else {
        this.Updateuser(data);
        setTimeout(() => {
          this.loading = false;
          this.$router.push("/StudentList");
        }, 2000);

        this.first_name = "";
        this.last_name = "";
        this.email = "";
        this.password = "";
        this.$refs.form.reset();

        this.loginCorrection = "Message";
        this.dialog = true;
      }
    },
  },
  computed: {
            ...mapGetters('users', { users: 'getUsers' })
        },
        created() {
          this.studentuser = this.users.find(studentuser => studentuser.id == this.$route.params.id);
        console.log("id=>", this.studentuser.id);
        this.first_name = this.studentuser.first_name;
        this.last_name = this.studentuser.last_name;
        this.email = this.studentuser.email;
        this.password = this.studentuser.password;
        }  
  // props: ["visible"],
  // computed: {
  //   show: {
  //     get() {
  //       return this.visible;
  //     },
  //     set(value) {
  //       if (!value) {
  //         this.$emit("close");
  //       }
  //     },
  //   },
  // },
};
</script>