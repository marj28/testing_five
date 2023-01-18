<template>
  <v-app>
    <AdminNavbar />
    <v-main>
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr class="text-bg-secondary p-3">
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Username</th>
              <th scope="col">Password</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" v-bind:key="user.id">
              <td>
                <h3 />
                {{ user.id }}
              </td>
              <td>
                <h3 />
                {{ user.first_name }}
              </td>
              <td>
                <h3 />
                {{ user.last_name }}
              </td>
              <td>
                <h3 />
                {{ user.email }}
              </td>
              <td>
                <h3 />
                {{ user.password }}
              </td>
              <td>
                <v-btn
                  elevation="2"
                  color="primary"
                  outlined
                  @click="
                    $router.push({ name: 'Views', params: { id: user.id } })
                  "
                >
                  <v-icon dark left> mdi-eye </v-icon>
                  View </v-btn
                >.
                <v-btn
                  elevation="2"
                  color="success"
                  outlined
                  @click="
                    $router.push({
                      name: 'UpdateShit',
                      params: { id: user.id },
                    })
                  "
                >
                  <v-icon dark left> mdi-pencil </v-icon>
                  Update </v-btn
                >.
                <v-btn
                  elevation="2"
                  color="red"
                  outlined
                  @click="deleteuser(user.first_name)"
                >
                  <v-icon dark left> mdi-delete-forever </v-icon>
                  Delete
                </v-btn>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import AdminNavbar from "@/views/Navigation/AdminNavbar.vue";
export default {
  components: {
    AdminNavbar,
  },
//   data: () => ({
//     loading: false,
//     dialog: false,
//   }),
//   computed: {
//     ...mapGetters("users", { users: "getUsers" }),
//   },
//   methods: {
//     ...mapActions("users", ["fetchUsers", "Deleteuser"]),
//     NewUser() {
//       this.loading = true;
//       setTimeout(() => (this.loading = false), 2000);
//     //   this.$router.push("/NewUserPage");
//     },
//     deleteuser(firstname) {
//       let data = new FormData();
//       data.append("first_name", first_name);
//       this.Deleteuser(data).then((e) => {
//         if (e == 0) this.dialog = true;
//         else this.fetchUsers();
//       });
//     },
//   },
//   created() {
//     this.fetchUsers();
//   },
};
</script>