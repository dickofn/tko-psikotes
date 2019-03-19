<template>
  <v-container grid-list-xs>
    <v-layout row>
      <v-flex xs12>
        <v-card v-if="isCompleted">
          <v-card-title primary-title>
            <v-spacer></v-spacer>
            <h1
              class="headline text-uppercase font-weight-light text-xs-center"
            >Data Pengalaman Sudah Pernah Diisi</h1>
            <v-spacer></v-spacer>
          </v-card-title>
        </v-card>
        <v-card v-else>
          <v-card-title primary-title>
            <v-spacer></v-spacer>
            <h1 class="headline text-uppercase text-xs-center font-weight-light">Data Pengalaman</h1>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" @submit.prevent="submit">
                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <h4>Pengalaman Organisasi</h4>
                  </v-flex>
                  <v-flex md10 offset-md2 xs12>
                    <v-btn small @click="orgDialog = true">
                      <v-icon>add</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-dialog v-model="orgDialog" max-width="80vw">
                    <data-input-organisation @orgDataFilled="orgAdd" @orgDataCancelled="orgCancel"></data-input-organisation>
                  </v-dialog>
                  <!-- eslint-disable-next-line -->
                  <v-flex md8 offset-md2 xs12>
                    <v-data-table
                      :headers="orgTableHeaders"
                      :items="organisations"
                      class="elevation-1"
                      v-if="organisations.length"
                      hide-actions
                    >
                      <template slot="items" slot-scope="props">
                        <td>{{ props.item.orgName }}</td>
                        <td>{{ props.item.orgTitle }}</td>
                        <td>{{ props.item.orgPeriod }}</td>
                        <td class="justify-center layout px-0">
                          <v-icon small @click="orgDelete(props.item)">delete</v-icon>
                        </td>
                      </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <h4>Pengalaman Training &amp; Kursus</h4>
                  </v-flex>
                  <v-flex md10 offset-md2 xs12>
                    <v-btn small @click="traDialog = true">
                      <v-icon>add</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-dialog v-model="traDialog" max-width="80vw">
                    <data-input-training @traDataFilled="traAdd" @traDataCancelled="traCancel"></data-input-training>
                  </v-dialog>
                  <!-- eslint-disable-next-line -->
                  <v-flex md8 offset-md2 xs12>
                    <v-data-table
                      :headers="traTableHeaders"
                      :items="trainings"
                      class="elevation-1"
                      v-if="trainings.length"
                      hide-actions
                    >
                      <template slot="items" slot-scope="props">
                        <td>{{ props.item.traName }}</td>
                        <td>{{ props.item.traYear }}</td>
                        <td>{{ props.item.traOrganizer }}</td>
                        <td>{{ props.item.traGrade }}</td>
                        <td class="justify-center layout px-0">
                          <v-icon small @click="traDelete(props.item)">delete</v-icon>
                        </td>
                      </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <h4>Bahasa Asing yang Dikuasai</h4>
                  </v-flex>
                  <v-flex md10 offset-md2 xs12>
                    <v-btn small @click="langDialog = true">
                      <v-icon>add</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-dialog v-model="langDialog" max-width="80vw">
                    <data-input-language @langDataFilled="langAdd" @langDataCancelled="langCancel"></data-input-language>
                  </v-dialog>
                  <!-- eslint-disable-next-line -->
                  <v-flex md8 offset-md2 xs12>
                    <v-data-table
                      :headers="langTableHeaders"
                      :items="languages"
                      class="elevation-1"
                      v-if="languages.length"
                      hide-actions
                    >
                      <template slot="items" slot-scope="props">
                        <td>{{ props.item.langName }}</td>
                        <td>{{ props.item.langHear }}</td>
                        <td>{{ props.item.langRead }}</td>
                        <td>{{ props.item.langSpeak }}</td>
                        <td>{{ props.item.langWrite }}</td>
                        <td>{{ props.item.langGrade }}</td>
                        <td class="justify-center layout px-0">
                          <v-icon small @click="langDelete(props.item)">delete</v-icon>
                        </td>
                      </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <h4>Pengalaman Kerja</h4>
                  </v-flex>
                  <v-flex md10 offset-md2 xs12>
                    <v-btn small @click="workDialog = true">
                      <v-icon>add</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-dialog v-model="workDialog" max-width="80vw">
                    <data-input-work @workDataFilled="workAdd" @workDataCancelled="workCancel"></data-input-work>
                  </v-dialog>

                  <v-flex md8 offset-md2 xs12>
                    <v-data-iterator :items="works" hide-actions row wrap v-if="works.length">
                      <v-flex slot="item" slot-scope="props" xs12>
                        <v-card>
                          <v-card-title class="subheading font-weight-bold">
                            {{ props.item.workCompany }}
                            <v-spacer></v-spacer>
                            <v-icon pl-5 small @click="workDelete(props.item)">delete</v-icon>
                          </v-card-title>

                          <v-divider></v-divider>

                          <v-list dense>
                            <v-list-tile>
                              <v-list-tile-content>Periode:</v-list-tile-content>
                              <v-list-tile-content class="align-end">{{ props.item.workPeriod }}</v-list-tile-content>
                            </v-list-tile>

                            <v-list-tile>
                              <v-list-tile-content>Alamat Perusahaan:</v-list-tile-content>
                              <v-list-tile-content
                                class="align-end"
                              >{{ props.item.workAddressDetail }}</v-list-tile-content>
                            </v-list-tile>

                            <v-list-tile>
                              <v-list-tile-content>Kontak Perusahaan:</v-list-tile-content>
                              <v-list-tile-content class="align-end">{{ props.item.workNumber }}</v-list-tile-content>
                            </v-list-tile>

                            <v-list-tile>
                              <v-list-tile-content>Jabatan Awal:</v-list-tile-content>
                              <v-list-tile-content class="align-end">{{ props.item.workFirstJob }}</v-list-tile-content>
                            </v-list-tile>

                            <v-list-tile>
                              <v-list-tile-content>Jabatan Akhir:</v-list-tile-content>
                              <v-list-tile-content class="align-end">{{ props.item.workLastJob }}</v-list-tile-content>
                            </v-list-tile>

                            <v-list-tile>
                              <v-list-tile-content>Nama Atasan Langsung:</v-list-tile-content>
                              <v-list-tile-content class="align-end">{{ props.item.workLeader }}</v-list-tile-content>
                            </v-list-tile>

                            <v-list-tile>
                              <v-list-tile-content>Alasan Berhenti:</v-list-tile-content>
                              <v-list-tile-content class="align-end">{{ props.item.workReason }}</v-list-tile-content>
                            </v-list-tile>

                            <v-list-tile>
                              <v-list-tile-content>Gaji Terakhir:</v-list-tile-content>
                              <v-list-tile-content class="align-end">{{ props.item.workSalary }}</v-list-tile-content>
                            </v-list-tile>
                          </v-list>
                        </v-card>
                      </v-flex>
                    </v-data-iterator>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <h4>Uraikan secara singkat dan jelas tugas dan tanggung jawab anda pada jabatan terakhir:</h4>
                    <v-textarea
                      label="Uraikan"
                      name="workJobDesc"
                      id="workJobDesc"
                      v-model="workJobDesc"
                      rows="2"
                    ></v-textarea>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mt-5 justify-end>
                  <v-flex offset-md6 offset-lg7 offset-xl8>
                    <v-btn :disabled="!valid" color="success" type="submit">Submit</v-btn>
                    <v-btn color="error" @click="reset">Reset Form</v-btn>
                  </v-flex>
                </v-layout>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import dataInputOrganisation from '../../components/ApplicationForm/DataInputOrganisation'
import dataInputTraining from '../../components/ApplicationForm/DataInputTraining'
import dataInputLanguage from '../../components/ApplicationForm/DataInputLanguage'
import dataInputWork from '../../components/ApplicationForm/DataInputWork'

export default {
  data () {
    return {
      organisations: [],
      orgTableHeaders: [
        {
          text: "Nama Organisasi",
          value: "orgName"
        },
        {
          text: "Jabatan",
          value: "orgTitle"
        },
        {
          text: "Periode",
          value: "orgPeriod"
        },
        { text: "Actions" }
      ],
      orgDialog: false,
      trainings: [],
      traTableHeaders: [
        {
          text: "Nama Training",
          value: "traName"
        },
        {
          text: "Tahun",
          value: "traYear"
        },
        {
          text: "Penyelenggara",
          value: "traOrganizer"
        },
        {
          text: "Peringkat",
          value: "traGrade"
        },
        { text: "Actions" }
      ],
      traDialog: false,
      languages: [],
      langTableHeaders: [
        {
          text: "Bahasa",
          value: "langName"
        },
        {
          text: "Mendengar",
          value: "langHear"
        },
        {
          text: "Membaca",
          value: "langRead"
        },
        {
          text: "Berbicara",
          value: "langSpeak"
        },
        {
          text: "Menulis",
          value: "langWrite"
        },
        {
          text: "Score",
          value: "langGrade"
        },
        { text: "Actions" }
      ],
      langDialog: false,
      works: [],
      workDialog: false,
      workJobDesc: "",
      rules: {
        required: v => !!v || 'Wajib diisi!',
      }
    }
  },
  computed: {
    valid () {
      return this.works.length <= 0 ? false : true
    },
    isCompleted () {
      return this.$store.state.user.experience.isCompleted
    }
  },
  methods: {
    orgAdd (data) {
      this.organisations.push(data)
      this.orgDialog = false;
    },
    orgDelete (item) {
      const index = this.organisations.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.organisations.splice(index, 1)
    },
    orgCancel () {
      this.orgDialog = false;
    },
    traAdd (data) {
      this.trainings.push(data)
      this.traDialog = false;
    },
    traDelete (item) {
      const index = this.trainings.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.trainings.splice(index, 1)
    },
    traCancel () {
      this.traDialog = false;
    },
    langAdd (data) {
      this.languages.push(data)
      this.langDialog = false;
    },
    langDelete (item) {
      const index = this.languages.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.languages.splice(index, 1)
    },
    langCancel () {
      this.langDialog = false;
    },
    workAdd (data) {
      this.works.push(data)
      this.workDialog = false;
    },
    workDelete (item) {
      const index = this.works.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.works.splice(index, 1)
    },
    workCancel () {
      this.workDialog = false;
    },
    submit () {
      var applicantOrganization = []
      for (let i = 0; i < this.organisations.length; i++) {
        const el = this.organisations[i];
        const startYear = el.orgPeriod.split('-')[0]
        const endYear = el.orgPeriod.split('-')[1]
        applicantOrganization.push({
          organizationName: el.orgName,
          organizationTitle: el.orgTitle,
          startYear: startYear,
          endYear: endYear
        })
      }

      var applicantTraining = []
      for (let i = 0; i < this.trainings.length; i++) {
        const el = this.trainings[i];
        applicantTraining.push({
          trainingName: el.traName,
          year: el.traYear,
          trainingInstitution: el.traOrganizer,
          trainingGrade: el.traGrade
        })
      }

      var applicantLanguage = []
      for (let i = 0; i < this.languages.length; i++) {
        const el = this.languages[i];
        applicantLanguage.push({
          language: el.langName,
          listening: el.langHear,
          reading: el.langRead,
          speaking: el.langSpeak,
          written: el.langWrite,
          toefl: el.langGrade
        })
      }

      var applicantExperience = []
      for (let i = 0; i < this.works.length; i++) {
        const el = this.works[i];
        const startYear = el.workPeriod.split('-')[0]
        const endYear = el.workPeriod.split('-')[1]
        applicantExperience.push({
          company: el.workCompany,
          startYear: startYear,
          endYear: endYear,
          companyContact: el.workNumber,
          firstTitleRole: el.workFirstJob,
          lastTitleRole: el.workLastJob,
          directSupervisor: el.workLeader,
          resignReason: el.workReason,
          lastSalary: el.workSalary
        })
      }

      var applicantAddress = []
      for (let i = 0; i < this.works.length; i++) {
        const el = this.works[i];
        applicantAddress.push({
          addressTypeId: 6,
          detailAddress: el.workAddressDetail,
          country: "Indonesia"
        })
      }

      const data = {
        applicantOrganization: applicantOrganization,
        applicantTraining: applicantTraining,
        applicantLanguage: applicantLanguage,
        applicantExperience: applicantExperience,
        applicantAddress: applicantAddress,
        applicantDescription: {
          experienceJobDesc: this.workJobDesc
        }
      }
      this.$store.dispatch('setExperience', { examId: this.$route.params.examId, data })
        .then(() => {
          this.$router.push({ name: 'question', params: { examId: this.$route.params.examId } })
        })
    },
    reset () {
      console.log(this.valid)
      this.$refs.form.reset()
    }
  },
  components: {
    dataInputOrganisation,
    dataInputTraining,
    dataInputLanguage,
    dataInputWork
  },
  created () {
    this.$store.dispatch('getExperience', { examInfoId: this.$route.params.examId })
  }
}
</script>
