<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      color="#1B5E20"
      dark
      app
      height="1200"
    >
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/img1.png" alt="" />
          </v-avatar>
          <p class="white--text subheading mt-1 text-center">Username</p>
        </v-flex>
        <v-flex class="mt-5">
          <h1 class="white--text subheading mt-1 text-center">User Title</h1>
        </v-flex>

        <v-flex class="mt-4 mb-4"> </v-flex>
      </v-layout>

      <v-list shaped class="clickable">
        <template v-for="item in items">
          <v-list-group
            v-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item['icon-ctr']"
            :append-icon="item.model ? item.icon : item['icon-alt']"
            active-class="orange--text"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              route
              :to="child.route"
              active-class="orange--text"
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else
            :key="item.text"
            active-class="orange--text"
            route
            :to="item.route"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
      <v-divider></v-divider>
    </v-navigation-drawer>
    <v-app-bar color="#388E3C" dark app elevate-on-scroll>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <v-btn text @click="$router.push({ name: 'AdminDashboard' })">
          <span class="font-weight-bold"> CPEESO Employer Module </span>
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-div>
       
        <v-text-field
          hide-details
          prepend-icon="mdi-magnify"
          single-line
        ></v-text-field>
      </v-div>
      
      <v-btn text @click="$router.push({ name: 'LogInForm' })">
        <span>LOG OUT</span>
      </v-btn>
    </v-app-bar>
  </div>
</template>
    
    
    <script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { icon: "mdi-home", text: "Dashboard", route: "/EmployerDashboard" },
      {
        icon: "mdi-clipboard-check-outline",
        text: "Job Posts",
        route: "/EmployerJobPosts",
      },
      {
        icon: "mdi-clipboard-file-outline",
        text: "Appointments",
        route: "/EmployerAppointments",
      },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        "icon-ctr": "mdi-account-box",
        text: "Profile",
        model: false,
        children: [
          {
            icon: "mdi-clipboard-check-outline",
            text: "User Info",
            route: "/YouTherecord",
          },
          {
            icon: "mdi-clipboard-file-outline",
            text: "Log Out",
            route: "/YouTherecord",
          },
        ],
      },
    ],
  }),
};
</script>
    <style>
</style>