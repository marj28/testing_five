<template>
  <v-app>
    <AdminNavbar />
    <v-main>
      <v-container>
        <v-simple-table fixed-header>
          <template>
            <thead>
              <tr>
                
                <th class="text-left">Training Title</th>
                <th class="text-left">Nature of Training</th>
                <th class="text-left">Place of Training</th>
                <th class="text-left">Participant Count</th>
                <th class="text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" v-bind:key="user.id">
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
                      @click.stop="showDialogTrainingOffer = true"
                    >
                      mdi-eye
                    </v-icon>
                    <DialogTrainingOffer
                      :visible="showDialogTrainingOffer"
                      @close="showDialogTrainingOffer = false"
                    />
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
                      @click="deleteuser(user.first_name)"
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
import DialogTrainingOffer from "@/views/AdminView/Dialog/DialogTrainingOffer.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    AdminNavbar,
    DialogTrainingOffer,
  },
  data () {
    return {
        showDialogTrainingOffer: false,
        loading: false,
        dialog: false,
    }   
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
    deleteuser(first_name) {
      let data = new FormData();
      data.append("first_name", first_name);
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