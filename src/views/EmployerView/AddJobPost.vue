<template>
  <v-dialog v-model="show" max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="success" dark v-bind="attrs" v-on="on">
        <v-icon> mdi-plus </v-icon>

        Create Job Post
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Create Job Post</span>
      </v-card-title>
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

          <v-stepper-step :complete="e1 > 2" step="2" color="warning">
            Education
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 3" step="3" color="warning">
            Qualification Requirements
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <!-- First Stepper -->
          <v-stepper-content step="1">
            <v-card class="">
              <v-card-text>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-select
                        :items="purposeofvacancy"
                        label="Purpose of Vacancy"
                        outlined
                        dense
                        multiple
                        small-chips
                        color="green"
                      >
                      </v-select>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Position Title"
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
                      label="Nature of Work"
                      outlined
                      small-chips
                      multiple
                      dense
                      color="green"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Place of Work"
                      required
                      outlined
                      dense
                      color="green"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      label="Salary"
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
            <v-btn @click="show = false" class="ma-2"> Cancel </v-btn>
          </v-stepper-content>

          <!-- Second Stepper -->
          <v-stepper-content step="2">
            <v-card class="">
              <v-card-text>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-radio-group label="Educational Level: " row>
                      <v-radio
                        label="Elementary"
                        value="Elementary"
                        color="green"
                        @change="
                          (elementary = true),
                            (high_school = false),
                            (college = false)
                        "
                      >
                      </v-radio>
                      <v-radio
                        label="High School"
                        value="High_School"
                        color="green"
                        @change="
                          (elementary = false),
                            (high_school = true),
                            (college = false)
                        "
                      >
                      </v-radio>
                      <v-radio
                        label="College"
                        value="College"
                        color="green"
                        @change="
                          (elementary = false),
                            (high_school = false),
                            (college = true)
                        "
                      >
                      </v-radio>
                    </v-radio-group>
                  </v-col>

                  <!-- start elementary -->
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    v-show="elementary"
                    style="margin-top: -40px"
                  >
                    <v-radio-group label="Education Status: ">
                      <v-radio label="Graduate" value="Graduate" color="green">
                      </v-radio>
                      <v-radio
                        label="Undergraduate"
                        value="Undergraduate"
                        color="green"
                      >
                      </v-radio>
                    </v-radio-group>
                    <v-col cols="12" sm="12" md="12">
                        <v-text-field
                          label="Language / Dialect Spoken:  "
                          required
                          dense
                          outlined
                          color="green"
                        >
                        </v-text-field>
                      </v-col>
                  </v-col>
                  <!-- end elementary -->

                  <!-- start high_school -->
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    v-show="high_school"
                    style="margin-top: -40px"
                  >
                    <v-radio-group label="Education Status: ">
                      <v-radio
                        label="Graduate"
                        value="Graduate"
                        color="green"
                        @change="strand = true"
                      >
                      </v-radio>
                      <v-radio
                        label="Undergraduate"
                        value="Undergraduate"
                        color="green"
                        @change="strand = false"
                      >
                      </v-radio>
                    </v-radio-group>

                    <v-col cols="12" md="12" sm="12" lg="12" v-show="strand">
                      <v-select
                        :items="stranditems"
                        label="Strand"
                        outlined
                        color="green"
                        dense
                      >
                      </v-select>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                        <v-text-field
                          label="Language / Dialect Spoken:  "
                          required
                          dense
                          outlined
                          color="green"
                        >
                        </v-text-field>
                      </v-col>
                  </v-col>
                  <!-- end high_school -->

                  <!-- start college -->
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    v-show="college"
                    style="margin-top: -40px"
                  >
                    <v-radio-group label="Education Status: ">
                      <v-radio
                        label="Graduate"
                        value="Graduate"
                        color="green"
                        @change="course = true"
                      >
                      </v-radio>
                      <v-radio
                        label="Undergraduate"
                        value="Undergraduate"
                        color="green"
                        @change="course = false"
                      >
                      </v-radio>
                    </v-radio-group>

                    <v-col cols="12" md="12" sm="12" lg="12" v-show="course">
                      <v-select
                        :items="courseitems"
                        label="Course"
                        outlined
                        dense
                        color="green"
                      >
                      </v-select>
                    </v-col>
                    <v-row>
                      <v-col cols="12" sm="12" md="6">
                        <v-text-field
                          label="Licensed: "
                          required
                          dense
                          outlined
                          color="green"
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="6">
                        <v-text-field
                          label="Eligibility:  "
                          required
                          dense
                          outlined
                          color="green"
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="6">
                        <v-text-field
                          label="Certification: "
                          required
                          dense
                          outlined
                          color="green"
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="6">
                        <v-text-field
                          label="Language / Dialect Spoken:  "
                          required
                          dense
                          outlined
                          color="green"
                        >
                        </v-text-field>
                      </v-col>
                    </v-row>
                  </v-col>

                  <!-- end college -->
                </v-row>
              </v-card-text>
            </v-card>
            <v-btn @click="e1 = 1" class="ma-2"> Back </v-btn>
            <v-btn class="ma-2" color="success" @click="e1 = 3" value="save">
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
                    >
                      <v-radio label="Required" value="required" color="green">
                      </v-radio>
                      <v-radio label="Optional" value="optional" color="green">
                      </v-radio>
                    </v-radio-group>
                  </v-col>
                  <v-col cols="12" sm="12" md="12" class="ma-2">
                    For each identified vacant position.
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Work Experience (month/s): "
                      required
                      outlined
                      dense
                      color="green"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Other qualifications: "
                      required
                      outlined
                      dense
                      color="green"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12" style="margin-top: -30px">
                    <v-radio-group
                      label="Accepts persons with disabilities (PWD):"
                      row
                    >
                      <v-radio label="Yes" value="yes" color="green"> </v-radio>
                      <v-radio label="No" value="no" color="green"> </v-radio>
                    </v-radio-group>
                  </v-col>
                  <v-col cols="12" sm="12" md="12" style="margin-top: -30px">
                    <v-select
                      :items="pwd"
                      label="If 'yes': "
                      multiple
                      dense
                      color="green"
                      outlined
                      small-chips
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="12" md="12" style="margin-top: -30px">
                    <v-radio-group label="Accepts returning OFWs: " row>
                      <v-radio label="Yes" value="yes" color="green"> </v-radio>
                      <v-radio label="No" value="no" color="green"> </v-radio>
                    </v-radio-group>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>

            <v-btn @click="e1 = 2" class="ma-2"> Back </v-btn>
            <v-btn
              class="ma-2"
              color="success"
              @click.stop="dialog = true"
              value="save"
            >
              Save
            </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
      
        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-title class="text-h5"> UNSAVED CHANGES </v-card-title>

            <v-card-text>
              You have created a Job Post. Do you want to save or
              discard it?
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="green darken-1" text @click="dialog = false" >
                Discard
              </v-btn>

              <v-btn color="green darken-1" text @click="dialog = false, show = false" type="submit">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data: () => ({
    show: false,
    dialog: false,
    e1: 1,
    purposeofvacancy: [
      "Additional Manpower",
      "Replacement",
      "Expansion"
    ],
  }),
};
</script>
