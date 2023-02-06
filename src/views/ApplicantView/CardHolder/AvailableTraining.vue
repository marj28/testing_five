<template>
    <div>
      <v-col md="12" class="pa-4">
        <v-card color="#1B5E20">
          <v-card-title class="subtitle-2">
            TRAINING POSTING
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
              outlined
              rounded
              dark
              dense
            ></v-text-field>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="desserts"
              :search="search"
              class="btn-hover elevation-1 pa-4"
            >
              <template v-slot:top>
                <v-dialog v-model="dialog" max-width="700px" tile>
                  <v-card>
                    <v-card-title>
                      <span class="text-h5">{{ formTitle }}</span>
                    </v-card-title>
  
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6" md="6">
                            <v-text-field
                              v-model="editedItem.facilitator_name"
                              label="Facilitator Name"
                              disabled
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-text-field
                              v-model="editedItem.training_name"
                              label="Training Name"
                              disabled
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-text-field
                              v-model="editedItem.training_location"
                              label="Training Location"
                              disabled
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-text-field
                              v-model="editedItem.trainees_number"
                              label="Trainees Number"
                              disabled
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="12" sm="12" md="12">
                            <v-textarea
                              auto-grow
                              v-model="editedItem.training_details"
                              label="JOB DETAILS"
                              disabled
                              style="font-size: small; text-align: justify; font-weight: 700;"
                            ></v-textarea>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
  
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="green darken-1" text @click="close">
                        Back
                      </v-btn>
                      <v-btn color="green darken-1" text  @click.stop="dialog1 = true" value="save">
                        Apply
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </template>
              <template v-slot:item.actions="{ item }">
                <v-icon small class="" @click="editItem(item)"> mdi-eye </v-icon>
              </template>
            </v-data-table>
          </v-card-text>
  
          <v-dialog v-model="dialog1" max-width="290">
            <v-card>
              <v-card-title class="text-h6" color="success">TRAINING APPLICATION</v-card-title>
              <v-divider color="success"></v-divider>
              
  
              <v-card-text class="mt-2">
                You have applied to the Training Post by {{ this.facilitator_name }}. Do you want to continue with the application process? If Yes, please press "Continue". Necessary information will be pass to the Training Facilitator.
              </v-card-text>
  
              <v-card-actions>
                <v-spacer></v-spacer>
  
                <v-btn color="green darken-1" text @click="dialog1 = false" >
                  Cancel
                </v-btn>
  
                <v-btn color="green darken-1" text @click="dialog1 = false, dialog = false" type="submit">
                  Continue
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card>
      </v-col>
    </div>
  </template>
      
    <script>
  export default {
    data: () => ({
      search: "",
      dialog: false,
      dialog1: false,
      headers: [
        {
          text: "FACILITATOR NAME",
          align: "start",
          sortable: false,
          value: "facilitator_name",
        },
        { text: "TRAINING NAME", value: "training_name" },
        { text: "TRAINING LOCATION", value: "training_location" },
        { text: "TRAINEES NUMBER", align: "center", value: "trainees_number" },
        { text: "Action", align: "center", value: "actions", sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        facilitator_name: "",
        training_name: "",
        training_location: "",
        trainees_number: "",
      },
    }),
    computed: {
      formTitle() {
        return this.editedIndex === -1 ? "New Item" : "View Training Post";
      },
    },
    watch: {
      dialog(val) {
        val || this.close();
      },
    },
    created() {
      this.initialize();
    },
    methods: {
      initialize() {
        this.desserts = [
          {
            facilitator_name: "AlfaLink",
            training_name: "Data Privacy",
            training_location: "Tagum City",
            trainees_number: "85",
            training_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget magna fermentum. Eu feugiat pretium nibh ipsum consequat. Commodo sed egestas egestas fringilla. Aliquet bibendum enim facilisis gravida neque convallis. Sem integer vitae justo eget magna fermentum. Orci ac auctor augue mauris. Erat nam at lectus urna duis. Imperdiet massa tincidunt nunc pulvinar sapien. Sed sed risus pretium quam vulputate dignissim suspendisse in. Lectus arcu bibendum at varius vel. Cursus sit amet dictum sit. Sagittis purus sit amet volutpat consequat mauris nunc congue.",
          },
          {
            facilitator_name: "AlfaLink",
            training_name: "Data Privacy",
            training_location: "Tagum City",
            trainees_number: "85",
            training_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget magna fermentum. Eu feugiat pretium nibh ipsum consequat. Commodo sed egestas egestas fringilla. Aliquet bibendum enim facilisis gravida neque convallis. Sem integer vitae justo eget magna fermentum. Orci ac auctor augue mauris. Erat nam at lectus urna duis. Imperdiet massa tincidunt nunc pulvinar sapien. Sed sed risus pretium quam vulputate dignissim suspendisse in. Lectus arcu bibendum at varius vel. Cursus sit amet dictum sit. Sagittis purus sit amet volutpat consequat mauris nunc congue.",
          },
          {
            facilitator_name: "AlfaLink",
            training_name: "Data Privacy",
            training_location: "Tagum City",
            trainees_number: "85",
            training_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget magna fermentum. Eu feugiat pretium nibh ipsum consequat. Commodo sed egestas egestas fringilla. Aliquet bibendum enim facilisis gravida neque convallis. Sem integer vitae justo eget magna fermentum. Orci ac auctor augue mauris. Erat nam at lectus urna duis. Imperdiet massa tincidunt nunc pulvinar sapien. Sed sed risus pretium quam vulputate dignissim suspendisse in. Lectus arcu bibendum at varius vel. Cursus sit amet dictum sit. Sagittis purus sit amet volutpat consequat mauris nunc congue.",
          },
          {
            facilitator_name: "AlfaLink",
            training_name: "Data Privacy",
            training_location: "Tagum City",
            trainees_number: "85",
            training_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget magna fermentum. Eu feugiat pretium nibh ipsum consequat. Commodo sed egestas egestas fringilla. Aliquet bibendum enim facilisis gravida neque convallis. Sem integer vitae justo eget magna fermentum. Orci ac auctor augue mauris. Erat nam at lectus urna duis. Imperdiet massa tincidunt nunc pulvinar sapien. Sed sed risus pretium quam vulputate dignissim suspendisse in. Lectus arcu bibendum at varius vel. Cursus sit amet dictum sit. Sagittis purus sit amet volutpat consequat mauris nunc congue.",
          },
          {
            facilitator_name: "AlfaLink",
            training_name: "Data Privacy",
            training_location: "Tagum City",
            trainees_number: "85",
            training_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget magna fermentum. Eu feugiat pretium nibh ipsum consequat. Commodo sed egestas egestas fringilla. Aliquet bibendum enim facilisis gravida neque convallis. Sem integer vitae justo eget magna fermentum. Orci ac auctor augue mauris. Erat nam at lectus urna duis. Imperdiet massa tincidunt nunc pulvinar sapien. Sed sed risus pretium quam vulputate dignissim suspendisse in. Lectus arcu bibendum at varius vel. Cursus sit amet dictum sit. Sagittis purus sit amet volutpat consequat mauris nunc congue.",
          },
          {
            facilitator_name: "AlfaLink",
            training_name: "Data Privacy",
            training_location: "Tagum City",
            trainees_number: "85",
            training_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget magna fermentum. Eu feugiat pretium nibh ipsum consequat. Commodo sed egestas egestas fringilla. Aliquet bibendum enim facilisis gravida neque convallis. Sem integer vitae justo eget magna fermentum. Orci ac auctor augue mauris. Erat nam at lectus urna duis. Imperdiet massa tincidunt nunc pulvinar sapien. Sed sed risus pretium quam vulputate dignissim suspendisse in. Lectus arcu bibendum at varius vel. Cursus sit amet dictum sit. Sagittis purus sit amet volutpat consequat mauris nunc congue.",
          },
          {
            facilitator_name: "AlfaLink",
            training_name: "Data Privacy",
            training_location: "Tagum City",
            trainees_number: "85",
            training_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget magna fermentum. Eu feugiat pretium nibh ipsum consequat. Commodo sed egestas egestas fringilla. Aliquet bibendum enim facilisis gravida neque convallis. Sem integer vitae justo eget magna fermentum. Orci ac auctor augue mauris. Erat nam at lectus urna duis. Imperdiet massa tincidunt nunc pulvinar sapien. Sed sed risus pretium quam vulputate dignissim suspendisse in. Lectus arcu bibendum at varius vel. Cursus sit amet dictum sit. Sagittis purus sit amet volutpat consequat mauris nunc congue.",
          },
          {
            facilitator_name: "AlfaLink",
            training_name: "Data Privacy",
            training_location: "Tagum City",
            trainees_number: "85",
            training_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget magna fermentum. Eu feugiat pretium nibh ipsum consequat. Commodo sed egestas egestas fringilla. Aliquet bibendum enim facilisis gravida neque convallis. Sem integer vitae justo eget magna fermentum. Orci ac auctor augue mauris. Erat nam at lectus urna duis. Imperdiet massa tincidunt nunc pulvinar sapien. Sed sed risus pretium quam vulputate dignissim suspendisse in. Lectus arcu bibendum at varius vel. Cursus sit amet dictum sit. Sagittis purus sit amet volutpat consequat mauris nunc congue.",
          },
          {
            facilitator_name: "AlfaLink",
            training_name: "Data Privacy",
            training_location: "Tagum City",
            trainees_number: "85",
            training_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget magna fermentum. Eu feugiat pretium nibh ipsum consequat. Commodo sed egestas egestas fringilla. Aliquet bibendum enim facilisis gravida neque convallis. Sem integer vitae justo eget magna fermentum. Orci ac auctor augue mauris. Erat nam at lectus urna duis. Imperdiet massa tincidunt nunc pulvinar sapien. Sed sed risus pretium quam vulputate dignissim suspendisse in. Lectus arcu bibendum at varius vel. Cursus sit amet dictum sit. Sagittis purus sit amet volutpat consequat mauris nunc congue.",
          },
  
          {
            facilitator_name: "AlfaLink",
            training_name: "Data Privacy",
            training_location: "Tagum City",
            trainees_number: "85",
            training_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget magna fermentum. Eu feugiat pretium nibh ipsum consequat. Commodo sed egestas egestas fringilla. Aliquet bibendum enim facilisis gravida neque convallis. Sem integer vitae justo eget magna fermentum. Orci ac auctor augue mauris. Erat nam at lectus urna duis. Imperdiet massa tincidunt nunc pulvinar sapien. Sed sed risus pretium quam vulputate dignissim suspendisse in. Lectus arcu bibendum at varius vel. Cursus sit amet dictum sit. Sagittis purus sit amet volutpat consequat mauris nunc congue.",
          },
        ];
      },
      editItem(item) {
        this.editedIndex = this.desserts.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialog = true;
      },
      close() {
        this.dialog = false;
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
        });
      },
      save() {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem);
        } else {
          this.desserts.push(this.editedItem);
        }
        this.close();
      },
    },
  };
  </script>
    
    
    