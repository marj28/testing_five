<template>
  <div>
    <v-col>
      <v-card outlined color="#1B5E20">
        <v-card-title
          class="d-flex flex-column justify-space-between align-center"
        >
          <v-avatar size="100">
            <img src="@/assets/download.png" />
          </v-avatar>
        </v-card-title>
        <v-card-text
          class="d-flex flex-column justify-space-between align-center"
          style="color: white"
        >
          <p class="font-weight-black">Employer Name</p>
          <p class="font-weight-bold">Employer Position</p>
          <p class="font-weight-medium">Company Name and Address</p>
        </v-card-text>
      </v-card>
      <v-stepper v-model="e1">
        <v-stepper-header style="font-size: 14px">
          <v-stepper-step
            :complete="e1 > 1"
            step="1"
            style="height="
            color="warning"
          >
            Establishment Details
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2" color="warning">
            Establishment Contact Details
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 3" step="3" color="warning">
            Pre-Pandemic
            <v-spacer></v-spacer>
            Employment Situation
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 4" step="4" color="warning">
            Post-Lockdown
            <v-spacer></v-spacer>
            Employment Situation
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 5" step="5" color="warning">
            Requirements
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <!-- First Stepper -->
          <v-stepper-content step="1">
            <v-card class="mb-12" color="grey lighten-4">
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" md="12" lg="12">
                      <v-radio-group label="Establishment Type" row>
                        <v-spacer></v-spacer>
                        <v-radio color="success" label="Private" value="private"></v-radio>
                        <v-spacer></v-spacer>
                        <v-radio color="success" label="Government" value="government"></v-radio>
                        <v-spacer></v-spacer>
                      </v-radio-group>
                    </v-col>
                    <v-col cols="12" sm="12" md="4">
                      <v-text-field
                        label="Business Name"
                        required
                        outlined
                        dense
                        color="green"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="4">
                      <v-text-field
                        label="Trade Name"
                        required
                        outlined
                        dense
                        color="green"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="4">
                      <v-text-field
                        label="Acronym / Abbreviation"
                        required
                        outlined
                        dense
                        color="green"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="3">
                      <v-select
                        :items="btype"
                        label="Office Status"
                        outlined
                        dense
                        color="green"
                      >
                      </v-select>
                    </v-col>
                    <v-col cols="12" sm="12" md="3">
                      <v-text-field
                        label="Tax Identification Number"
                        required
                        outlined
                        dense
                        color="green"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="3">
                      <v-select
                        :items="etype"
                        label="Employer Type"
                        required
                        multiple
                        small-chips
                        outlined
                        dense
                        color="green"
                      >
                      </v-select>
                    </v-col>
                    <v-col cols="12" sm="12x" md="3">
                      <v-select
                        :items="totalworkforce"
                        label="Total Work Force"
                        outlined
                        dense
                        color="green"
                      >
                      </v-select>
                    </v-col>
                    <v-col cols="12" sm="12" md="3">
                      <v-text-field
                        label="Major Industry Group"
                        required
                        outlined
                        dense
                        color="green"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                      <v-text-field
                        label="Street/Village"
                        required
                        outlined
                        dense
                        color="green"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="2">
                      <v-text-field
                        label="Barangay"
                        type="address"
                        required
                        outlined
                        dense
                        color="green"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="2">
                      <v-text-field
                        label="Municipal/City"
                        type="address"
                        required
                        outlined
                        dense
                        color="green"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="2">
                      <v-text-field
                        label="Province"
                        type="address"
                        required
                        outlined
                        dense
                        color="green"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
            </v-card>

            <v-btn id="v-btn-c" color="success" @click="e1 = 2">
              Continue
            </v-btn>

            <v-btn id="v-btn-c" class="ma-4" @click="dialog = false">
              Cancel
            </v-btn>
          </v-stepper-content>

          <!-- Second Stepper -->
          <v-stepper-content step="2">
            <v-card class="mb-12" color="grey lighten-4">
              <v-card-text>
                <v-container fluid>
                  <v-row>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        label="Name of Owner / President (Full Name)"
                        required
                        outlined
                        dense
                        color="green"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                      <v-text-field
                        label="Contact Person (Full Name)"
                        required
                        outlined
                        dense
                        color="green"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                      <v-text-field
                        label="Position"
                        required
                        outlined
                        dense
                        color="green"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="3">
                      <v-text-field
                        label="Telephone Number"
                        required
                        type="number"
                        outlined
                        dense
                        color="green"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="3">
                      <v-text-field
                        label="Mobile Number"
                        required
                        outlined
                        dense
                        type="number"
                        color="green"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="3">
                      <v-text-field
                        label="Fax Number"
                        required
                        outlined
                        dense
                        color="green"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="3">
                      <v-text-field
                        label="E-mail Address"
                        required
                        outlined
                        dense
                        type="email"
                        color="green"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>

            <v-btn id="v-btn-c" color="success" @click="e1 = 3">
              Continue
            </v-btn>
            <v-btn @click="e1 = 1" class="ma-2"> Back </v-btn>
          </v-stepper-content>

          <!-- Third Stepper -->
          <v-stepper-content step="3">
            <v-card class="mb-12" color="grey lighten-4">
              <v-card-text>
                <v-container fluid>
                  <v-row>
                    <v-col cols="12" sm="12" md="12">
                      Please indicate the number of reporting workers in the
                      establishment
                      <bold class="font-weight-bold"
                        >before implementation of GCQ/ECQ</bold
                      >
                    </v-col>
                    <v-col cols="12" sm="12" md="12" class="font-weight-bold">
                      Number of Workers:
                    </v-col>
                    <v-col cols="12" md="4" sm="6">
                      <v-text-field
                        label="Male"
                        required
                        outlined
                        dense
                        type="number"
                        color="green"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4" sm="6">
                      <v-text-field
                        label="Female"
                        required
                        outlined
                        dense
                        type="number"
                        color="green"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field
                        label="Total"
                        outlined
                        dense
                        type="number"
                        color="green"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="3" sm="6">
                      <v-text-field
                        label="Managerial Employees"
                        required
                        outlined
                        dense
                        type="number"
                        color="green"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3" sm="6">
                      <v-text-field
                        label="Supervisory"
                        required
                        outlined
                        dense
                        type="number"
                        color="green"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="3" sm="6">
                      <v-text-field
                        label="Rank and File"
                        required
                        outlined
                        dense
                        type="number"
                        color="green"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3">
                      <v-text-field
                        label="Total"
                        outlined
                        dense
                        type="number"
                        color="green"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>

            <v-btn id="v-btn-c" color="success" @click="e1 = 4">
              Continue
            </v-btn>
            <v-btn @click="e1 = 2" class="ma-2"> Back </v-btn>
          </v-stepper-content>

          <!-- Fourth Stepper -->
          <v-stepper-content step="4">
            <v-card class="mb-12" color="grey lighten-4">
              <v-card-text>
                <v-container fluid>
                  <v-row>
                    <v-col cols="12" sm="12" md="12" class="ma-2">
                      Please indicate the number of reporting workers in the
                      establishment
                      <bold class="font-weight-bold"
                        >upon resumption of operation.</bold
                      >
                    </v-col>
                    <v-col cols="12" sm="12" md="12" class="font-weight-bold">
                      Number of Workers:
                    </v-col>
                    <v-col cols="12" md="4" sm="6">
                      <v-text-field
                        label="Male"
                        required
                        dense
                        outlined
                        type="number"
                        color="green"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4" sm="6">
                      <v-text-field
                        label="Female"
                        required
                        dense
                        outlined
                        type="number"
                        color="green"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field
                        label="Total"
                        outlined
                        dense
                        required
                        type="number"
                        color="green"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="3" sm="6">
                      <v-text-field
                        label="Managerial Employees"
                        required
                        outlined
                        dense
                        type="number"
                        color="green"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3" sm="6">
                      <v-text-field
                        label="Supervisory"
                        required
                        dense
                        outlined
                        type="number"
                        color="green"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="3" sm="6">
                      <v-text-field
                        label="Rank and File"
                        required
                        outlined
                        dense
                        type="number"
                        color="green"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3">
                      <v-text-field
                        label="Total"
                        outlined
                        required
                        dense
                        type="number"
                        color="green"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12" class="font-weight-bold">
                      Work Arrangement adopted upon resumption of operation of
                      the Establishment (Please select all applicable):
                    </v-col>
                    <v-col>
                      <v-checkbox-group>
                        <v-checkbox
                          label="FULL WORK ARRANGEMENT. The establishment operates in a regular basis and with full workforce"
                          color="green"
                        >
                        </v-checkbox>
                        <v-checkbox
                          label="FLEXIBLE WORK ARRANGEMENT. The establishment will adopt FWA such as reduction of normal workdays, forced leave, transfer of employees, etc."
                          color="green"
                        >
                        </v-checkbox>
                        <v-checkbox
                          label="TEMPORARY CLOSURE. The establishment will be temporarily be closed"
                          color="green"
                        >
                        </v-checkbox>
                        <v-checkbox
                          label="RETRENCHMENT/REDUCTION OF WORKFORCE. The establishment will reduce the number of employees"
                          color="green"
                        >
                        </v-checkbox>
                      </v-checkbox-group>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>

            <v-btn id="v-btn-c" color="success" @click="e1 = 5">
              Continue
            </v-btn>
            <v-btn @click="e1 = 3" class="ma-2"> Back </v-btn>
          </v-stepper-content>

          <!-- Fifth Stepper -->
          <v-stepper-content step="5">
            <v-card class="mb-12" color="grey lighten-4">
              <v-card-text>
                <v-container fluid>
                  <v-row>
                    <v-col cols="12" sm="12" md="6">
                      <v-file-input
                        v-model="files"
                        color="green accent-4"
                        counter
                        label="Business License"
                        multiple
                        dense
                        placeholder="Select your files"
                        prepend-icon="mdi-paperclip"
                        outlined
                        :show-size="1000"
                      >
                        <template v-slot:selection="{ index, text }">
                          <v-chip
                            v-if="index < 2"
                            color="green accent-4"
                            dark
                            label
                            small
                          >
                            {{ text }}
                          </v-chip>

                          <span
                            v-else-if="index === 2"
                            class="text-overline grey--text text--darken-3 mx-2"
                          >
                            +{{ files.length - 2 }} File(s)
                          </span>
                        </template>
                      </v-file-input>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                      <v-file-input
                        v-model="files"
                        color="green accent-4"
                        counter
                        label="Business License"
                        multiple
                        dense
                        placeholder="Select your files"
                        prepend-icon="mdi-paperclip"
                        outlined
                        :show-size="1000"
                      >
                        <template v-slot:selection="{ index, text }">
                          <v-chip
                            v-if="index < 2"
                            color="green accent-4"
                            dark
                            label
                            small
                          >
                            {{ text }}
                          </v-chip>

                          <span
                            v-else-if="index === 2"
                            class="text-overline grey--text text--darken-3 mx-2"
                          >
                            +{{ files.length - 2 }} File(s)
                          </span>
                        </template>
                      </v-file-input>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" md="6">
                      <v-file-input
                        v-model="files"
                        color="green accent-4"
                        counter
                        label="Business License"
                        multiple
                        dense
                        placeholder="Select your files"
                        prepend-icon="mdi-paperclip"
                        outlined
                        :show-size="1000"
                      >
                        <template v-slot:selection="{ index, text }">
                          <v-chip
                            v-if="index < 2"
                            color="green accent-4"
                            dark
                            label
                            small
                          >
                            {{ text }}
                          </v-chip>

                          <span
                            v-else-if="index === 2"
                            class="text-overline grey--text text--darken-3 mx-2"
                          >
                            +{{ files.length - 2 }} File(s)
                          </span>
                        </template>
                      </v-file-input>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                      <v-file-input
                        v-model="files"
                        color="green accent-4"
                        counter
                        label="Business License"
                        multiple
                        dense
                        placeholder="Select your files"
                        prepend-icon="mdi-paperclip"
                        outlined
                        :show-size="1000"
                      >
                        <template v-slot:selection="{ index, text }">
                          <v-chip
                            v-if="index < 2"
                            color="green accent-4"
                            dark
                            label
                            small
                          >
                            {{ text }}
                          </v-chip>

                          <span
                            v-else-if="index === 2"
                            class="text-overline grey--text text--darken-3 mx-2"
                          >
                            +{{ files.length - 2 }} File(s)
                          </span>
                        </template>
                      </v-file-input>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>

            <v-btn id="v-btn-c" color="success" @click.stop="dialog = true">
              Save
            </v-btn>
            <v-btn @click="e1 = 4" class="ma-2"> Back </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
      <v-row>
        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-title class="text-h5"> UNSAVED CHANGES </v-card-title>

            <v-card-text>
              You have made changes in your profile. Do you want to save or
              discard it?
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="green darken-1" text @click="dialog = false">
                Discard
              </v-btn>

              <v-btn
                color="green darken-1"
                text
                @click="dialog = false"
                type="submit"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-col>
  </div>
</template>
<script>
export default {
  components: {},
  data: () => ({
    e1: 1,
    dialog: false,

    btype: ["Main Office", "Branch"],
    etype: [
      "Public",
      "National Government Agency",
      "Local Government Unit",
      "Government-owned and Controlled Corporation",
      "State/Local University or College",
      "Private",
      "Direct Hire",
      "Local Recruitment Agency",
      "Overseas Recruitment Agency",
      "D.O. 174",
    ],
    totalworkforce: [
      "Micro (1-9)",
      "Small (10-99)",
      "Medium (100-199)",
      "Large (200 and up)",
    ],
    natureofwork: [
      "Permanent",
      "Contractual",
      "Project-based",
      "Internship / OJT",
      "Part-time",
      "Work-from-Home / Online Job",
    ],
    pwd: ["Visual", "Hearing", "Speech", "Physical", "Mental", "Others"],
  }),
};
</script>
  