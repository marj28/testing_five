<template>
  <v-app>
    <AdminNavbar />
    <v-main>
      <v-container width="500px">
        <v-simple-table fixed-header>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">ID</th>
                <th class="text-left">First Name</th>
                <th class="text-left">Last Name</th>
                <th class="text-left">Username</th>
                <th class="text-left">Password</th>
                <th class="text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" v-bind:key="user.id">
                <td>
                  {{ user.id }}
                </td>
                <td>
                  {{ user.first_name }}
                </td>
                <td>
                  {{ user.last_name }}
                </td>
                <td>
                  {{ user.email }}
                </td>
                <td>
                  {{ user.password }}
                </td>
                <td>
                  <v-row>
                    <v-icon
                      color="primary"
                      class="button"
                      @click="$router.push({ name: 'DialogStudentList' })"
                    >
                      mdi-eye
                    </v-icon>
                    <!-- <DialogStudentList
                      :visible="showDialogStudentList"
                      @close="showDialogStudentList = false"
                    /> -->
                    <v-icon
                      dark
                      color="success"
                      @click="
                        $router.push({
                          name: 'UpdateShit',
                          params: { id: user.id },
                        })
                      "
                    >
                      mdi-pencil
                    </v-icon>

                    <v-icon
                      dark
                      color="red"
                      outlined
                      @click="deleteuser(user.id)"
                    >
                      mdi-delete-forever
                    </v-icon>
                  </v-row>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AdminNavbar from "@/views/Navigation/AdminNavbar.vue";

// import DialogStudentList from "@/views/AdminView/Dialog/DialogStudentList.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    AdminNavbar,
    // DialogStudentList
  },
  data() {
    return {
      // showDialogStudentList: false,
      loading: false,
      dialog: false,
    };
  },
  computed: {
    ...mapGetters("users", { users: "getUsers" }),
  },
  methods: {
    ...mapActions("users", ["fetchUsers", "Deleteuser"]),
    NewUser() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
      //   this.$router.push("/NewUserPage");
    },
    deleteuser(id) {
      let data = new FormData();
      data.append("id", id);
      this.Deleteuser(data).then((e) => {
        if (e == 0) this.dialog = true;
        else this.fetchUsers();
      });
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>
<style>
.container {
  padding: 2rem 1rem;
}
h4 {
  margin: 2rem 0rem 1rem;
}
</style>