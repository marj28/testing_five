<template>
  <div>
    <v-col md="12" class="pa-4">
      <v-card outlined color="#1B5E20">
        <div class="to-approved">
          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
            class=""
          >
            <template v-slot:top>
              <v-toolbar flat dark color="#1B5E20">
                <v-toolbar-title>JOB POSTING </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                  outlined
                  rounded
                  dense
                ></v-text-field>
                <v-spacer></v-spacer>

                <v-dialog v-model="dialog" max-width="550px" persistent>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="success"
                      dark
                      class="mb-2"
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon> mdi-plus </v-icon> NEW JOB POST
                    </v-btn>
                  </template>

                  <v-card>
                    <v-row>
                      <v-col>
                        <v-card-title>
                          <span class="text-h5">Create Job Post</span>
                        </v-card-title>
                      </v-col>

                      <v-stepper v-model="e1">
                        <v-stepper-header style="font-size: 14px">
                          <v-stepper-step
                            :complete="e1 > 1"
                            step="1"
                            style="height="
                            color="warning"
                          >
                            Vacancy Details
                          </v-stepper-step>

                          <v-divider></v-divider>

                          <v-stepper-step
                            :complete="e1 > 2"
                            step="2"
                            color="warning"
                          >
                            Preferrence
                          </v-stepper-step>

                          <v-divider></v-divider>

                          <v-stepper-step
                            :complete="e1 > 3"
                            step="3"
                            color="warning"
                          >
                            Qualification Requirements
                          </v-stepper-step>
                        </v-stepper-header>

                        <v-stepper-items>
                          <!-- First Stepper -->
                          <v-stepper-content step="1">
                            <v-card class="">
                              <v-card-text>
                                <v-row>
                                  <v-col cols="12" sm="12" md="6">
                                    <v-select
                                      :items="purposeofvacancy"
                                      label="Purpose of Vacancy"
                                      outlined
                                      dense
                                      color="green"
                                    >
                                    </v-select>
                                  </v-col>
                                  <v-col cols="12" sm="12" md="6">
                                    <v-select
                                      :items="classificationofvacancy"
                                      label="Classification of Vacancy"
                                      outlined
                                      dense
                                      color="green"
                                    >
                                    </v-select>
                                  </v-col>
                                  <v-col cols="12" sm="12" md="12">
                                    <v-text-field
                                      label="Position Title"
                                      v-model="editedItem.position_title"
                                      required
                                      outlined
                                      dense
                                      color="green"
                                    >
                                    </v-text-field>
                                  </v-col>
                                  <v-col cols="12" sm="12" md="12">
                                    <v-textarea
                                      label="Job Description"
                                      v-model="editedItem.job_description"
                                      required
                                      outlined
                                      dense
                                      color="green"
                                    >
                                    </v-textarea>
                                  </v-col>
                                  <v-col cols="12" sm="12" md="12">
                                    <v-select
                                      :items="natureofwork"
                                      v-model="editedItem.natureofwork"
                                      label="Nature of Work"
                                      outlined
                                      dense
                                      color="green"
                                    >
                                    </v-select>
                                  </v-col>
                                  <v-col cols="12" sm="12" md="12">
                                    <v-text-field
                                      label="Place of Work"
                                      v-model="editedItem.placeofwork"
                                      required
                                      outlined
                                      dense
                                      color="green"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col cols="12" sm="6" md="6">
                                    <v-text-field
                                      label="Salary"
                                      v-model="editedItem.salary"
                                      type="number"
                                      required
                                      outlined
                                      dense
                                      color="green"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col cols="12" sm="6" md="6">
                                    <v-text-field
                                      label="Vacancy Count"
                                      v-model="editedItem.vacancy_count"
                                      type="number"
                                      required
                                      outlined
                                      dense
                                      color="green"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col cols="12" sm="12" md="6">
                                    <v-text-field
                                      label="Posting Date: (mm/dd/year) "
                                      v-model="editedItem.posting_date"
                                      type="date"
                                      required
                                      dense
                                      outlined
                                      color="green"
                                    >
                                    </v-text-field>
                                  </v-col>
                                  <v-col cols="12" sm="12" md="6">
                                    <v-text-field
                                      label="Valid Until: (mm/dd/year) "
                                      v-model="editedItem.valid_until"
                                      type="date"
                                      required
                                      dense
                                      outlined
                                      color="green"
                                    >
                                    </v-text-field>
                                  </v-col>
                                </v-row>
                              </v-card-text>
                            </v-card>

                            <v-btn id="v-btn-c" color="success" @click="e1 = 2">
                              Continue
                            </v-btn>
                            <v-btn @click="dialog = false" class="ma-2">
                              Cancel
                            </v-btn>
                          </v-stepper-content>

                          <!-- Second Stepper -->
                          <v-stepper-content step="2">
                            <v-card class="">
                              <v-card-text>
                                <v-row>
                                  <v-col cols="12" sm="12" md="12">
                                    <v-select
                                      :items="educational_level"
                                      label="Educational Level"
                                      outlined
                                      dense
                                      color="green"
                                    >
                                    </v-select>
                                  </v-col>
                                  <v-col cols="12" sm="12" md="12">
                                    <v-text-field
                                      label="Course Requirement"
                                      v-model="editedItem.position_title"
                                      required
                                      outlined
                                      dense
                                      color="green"
                                    >
                                    </v-text-field>
                                  </v-col>
                                  <v-col
                                    cols="12"
                                    sm="12"
                                    md="12"
                                    style="margin-top: -30px"
                                  >
                                    <v-radio-group
                                      label="Accepts persons with disabilities (PWD):"
                                      row
                                      v-model="editedItem.pwd"
                                    >
                                      <v-radio
                                        label="Yes"
                                        value="yes"
                                        color="green"
                                      >
                                      </v-radio>
                                      <v-radio
                                        label="No"
                                        value="no"
                                        color="green"
                                      >
                                      </v-radio>
                                    </v-radio-group>
                                    <v-col
                                    cols="12"
                                    sm="12"
                                    md="12"
                                    style="margin-top: -30px"
                                  >
                                    <v-select
                                      :items="pwd"
                                      label="If 'yes': "
                                      multiple
                                      dense
                                      color="green"
                                      outlined
                                      small-chips
                                      v-model="editedItem.pwd_1"
                                    >
                                    </v-select>
                                  </v-col>
                                  </v-col>
                                  <v-col cols="12" sm="12" md="12">
                                    <v-select
                                      :items="sex_preference"
                                      label="Sex Preference"
                                      outlined
                                      dense
                                      color="green"
                                    >
                                    </v-select>
                                  </v-col>
                                  <!-- <v-col cols="12" sm="12" md="12">
                                    <v-textarea
                                      label="Job Description"
                                      v-model="editedItem.job_description"
                                      required
                                      outlined
                                      dense
                                      color="green"
                                    >
                                    </v-textarea>
                                  </v-col> -->
                                </v-row>
                              </v-card-text>
                            </v-card>
                            <v-btn @click="e1 = 1" class="ma-2"> Back </v-btn>
                            <v-btn
                              class="ma-2"
                              color="success"
                              @click="e1 = 3"
                              value="save"
                            >
                              Continue
                            </v-btn>
                          </v-stepper-content>

                          <!-- Third Stepper -->
                          <v-stepper-content step="3">
                            <v-card class="">
                              <v-card-text>
                                <v-row>
                                  <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-radio-group
                                      label="Accepts Additional Qualification Requirements: "
                                      row
                                      v-model="editedItem.requirements"
                                    >
                                      <v-radio
                                        label="Required"
                                        value="required"
                                        color="green"
                                      >
                                      </v-radio>
                                      <v-radio
                                        label="Optional"
                                        value="optional"
                                        color="green"
                                      >
                                      </v-radio>
                                    </v-radio-group>
                                  </v-col>
                                  <v-col cols="12" sm="12" md="12" class="ma-2">
                                    For each identified vacant position.
                                  </v-col>
                                  <v-col cols="12" sm="12" md="12">
                                    <v-text-field
                                      label="Work Experience (month/s): "
                                      v-model="editedItem.work_experience"
                                      required
                                      outlined
                                      dense
                                      color="green"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col cols="12" sm="12" md="12">
                                    <v-text-field
                                      label="Required License: "
                                      v-model="editedItem.other_qualification"
                                      required
                                      outlined
                                      dense
                                      color="green"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col cols="12" sm="12" md="12">
                                    <v-text-field
                                      label="Other qualifications: "
                                      v-model="editedItem.other_qualification"
                                      required
                                      outlined
                                      dense
                                      color="green"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col cols="12" sm="12" md="12">
                                    <v-select
                                      :items="employability_skills"
                                      label="Employability Skills"
                                      outlined
                                      multiple
                                      small-chips
                                      dense
                                      color="green"
                                    >
                                    </v-select>
                                  </v-col>
                                  
                                  
                                  <v-col
                                    cols="12"
                                    sm="12"
                                    md="12"
                                    style="margin-top: -30px"
                                  >
                                    <v-radio-group
                                      label="Accepts returning OFWs: "
                                      row
                                      v-model="editedItem.ofw"
                                    >
                                      <v-radio
                                        label="Yes"
                                        value="yes"
                                        color="green"
                                      >
                                      </v-radio>
                                      <v-radio
                                        label="No"
                                        value="no"
                                        color="green"
                                      >
                                      </v-radio>
                                    </v-radio-group>
                                  </v-col>
                                </v-row>
                              </v-card-text>
                            </v-card>

                            <v-btn @click="e1 = 2" class="ma-2"> Back </v-btn>
                            <v-btn
                              class="ma-2"
                              color="success"
                              @click.stop="dialog1 = true"
                              value="save"
                            >
                              Save
                            </v-btn>
                          </v-stepper-content>
                        </v-stepper-items>
                      </v-stepper>

                      <v-dialog v-model="dialog1" max-width="290">
                        <v-card>
                          <v-card-title class="text-h5">
                            UNSAVED CHANGES
                          </v-card-title>

                          <v-card-text>
                            You have created a Job Post. Do you want to save or
                            discard it?
                          </v-card-text>

                          <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn
                              color="green darken-1"
                              text
                              @click="dialog = false"
                            >
                              Discard
                            </v-btn>

                            <v-btn
                              color="green darken-1"
                              text
                              @click="(dialog1 = false), (dialog = false)"
                              type="submit"
                            >
                              Save
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-row>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px">
                  <v-card>
                    <v-card-title class="text-h6"
                      >Are you sure you want to add to
                      blocklisted?</v-card-title
                    >
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="closeDelete"
                        >Cancel</v-btn
                      >
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="deleteItemConfirm"
                        >OK</v-btn
                      >
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon small class="mr-2" @click="viewItem(item)">
                mdi-eye
              </v-icon>
              <v-icon small class="mr-2" @click="editItem(item)">
                mdi-pencil
              </v-icon>

              <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
            </template>
            <template slot="item.switch1" slot-scope="{ item }">
              <v-switch v-model="item.switch1" color="success" dense></v-switch>
            </template>
          </v-data-table>
        </div>
      </v-card>
    </v-col>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  components: {},

  data: () => ({
    search: "",
    dialog: false,
    dialog1: false,
    dialogDelete: false,
    elementary: false,
    high_school: false,
    strand: false,
    course: false,
    college: false,
    e1: 1,
    employability_skills: [
      "Planning and Organizing",
      "Social Perceptiveness",
      "innovation",
      "Multi-tasking",
      "Work Standards/Ethics",
      "Stress Tolerance",
      "Self Motivation",
      "Problem Sensitivity",
      "Creative Problem Solving",
      "Teamwork",
      "Decision Making",
      "Critical Thinking",
      "Math Function Skill",
      "English Function Skill",
      "English Comprehension",
    ],
    sex_preference: [ 
      "Male",
      "Female",
      "No preference"
    ],
    educational_level:[
      "Elementary Level",
      "Elementary Graduate",
      "Junior High School Level",
      "Junior High School Level Graduate",
      "Senior High School Level",
      "Junior High School Graduate",
      "TechVoc Level",
      "TechVoc Graduate",
      "College Level",
      "College Graduate",
      "Graduate/Post Graduate Studies"
    ],
    purposeofvacancy: ["Additional Manpower", "Replacement", "Expansion"],
    classificationofvacancy: [
      "Administrative",
      "Clerical",
      "Managerial",
      "Manual Labour",
      "Supervisory",
      "Technical",
    ],
    headers: [
      { text: "Position Title", value: "position_title" },
      { text: "Place of Work", value: "placeofwork" },
      { text: "Nature of Work", value: "natureofwork" },
      { text: "Vacancy Count", value: "vacancy_count" },
      { text: "Number of Applicants", value: "number_needed" },
      { text: "Job Post Status", value: "switch1" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    natureofwork: [
      "Permanent",
      "Contractual",
      "Part-time",
      "Project-based",
      "Internship/OJT",
    ],
    stranditems: [
      "Accountancy, Business and Management (ABM) Strand",
      "Science, Technology, Engineering, and Mathematics (STEM) Strand",
      "Humanities and Social Science (HUMSS) Strand",
      "General Academic Strand (GAS)",
      "Arts and Design Track",
      "Sports Track",
      "Agricultural-Fishery Arts (AFA) Strand",
      "Home Economics (HE) Strand",
      "Industrial Arts (IA) Strand",
      "Information and Communications Technology (ICT) Strand",
    ],
    pwd: ["Visual", "Hearing", "Speech", "Physical", "Mental", "Others"],
    courseitems: [
      "Business Administration",
      "Education",
      "Engineering",
      "Information Technology",
      "Medicine",
      "Agriculture",
      "Psychology",
      "Maritime",
      "Service Trades",
      "Architecture",
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          position_title: "Data Analyst",
          placeofwork: "Tagum City",
          vacancy_count: "21",
          natureofwork: "Full-Time",
          number_needed: "57",
          switch1: false,
        },
        {
          position_title: "Computer Progammer",
          placeofwork: "Tagum City",
          vacancy_count: "21",
          natureofwork: "Part-Time",
          number_needed: "57",
          switch1: true,
        },
        {
          position_title: "Network Technician",
          placeofwork: "Tagum City",
          vacancy_count: "21",
          natureofwork: "Full-Time",
          number_needed: "57",
          switch1: true,
        },
        {
          position_title: "Computer Technician",
          placeofwork: "Tagum City",
          vacancy_count: "21",
          natureofwork: "Part-Time",
          number_needed: "57",
          switch1: false,
        },
        {
          position_title: "Data Analyst",
          placeofwork: "Tagum City",
          vacancy_count: "21",
          natureofwork: "Full-Time",
          number_needed: "57",
          switch1: false,
        },
        {
          position_title: "Computer Progammer",
          placeofwork: "Tagum City",
          vacancy_count: "21",
          natureofwork: "Part-Time",
          number_needed: "57",
          switch1: true,
        },
        {
          position_title: "Network Technician",
          placeofwork: "Tagum City",
          vacancy_count: "21",
          natureofwork: "Full-Time",
          number_needed: "57",
          switch1: true,
        },
        {
          position_title: "Computer Technician",
          placeofwork: "Tagum City",
          vacancy_count: "21",
          natureofwork: "Part-Time",
          number_needed: "57",
          switch1: false,
        },
        {
          position_title: "Data Analyst",
          placeofwork: "Tagum City",
          vacancy_count: "21",
          natureofwork: "Full-Time",
          number_needed: "57",
          switch1: false,
        },
        {
          position_title: "Computer Progammer",
          placeofwork: "Tagum City",
          vacancy_count: "21",
          natureofwork: "Part-Time",
          number_needed: "57",
          switch1: true,
        },
        {
          position_title: "Network Technician",
          placeofwork: "Tagum City",
          vacancy_count: "21",
          natureofwork: "Full-Time",
          number_needed: "57",
          switch1: true,
        },
        {
          position_title: "Computer Technician",
          placeofwork: "Tagum City",
          vacancy_count: "21",
          natureofwork: "Part-Time",
          number_needed: "57",
          switch1: false,
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    viewItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
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

