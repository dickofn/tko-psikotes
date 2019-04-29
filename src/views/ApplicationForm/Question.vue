<template>
  <v-container grid-list-xs>
    <v-layout row>
      <v-flex xs12>
        <v-card v-if="isCompleted">
          <v-card-title primary-title>
            <v-spacer></v-spacer>
            <h1
              class="headline text-uppercase font-weight-light text-xs-center"
            >Kuisioner Sudah Pernah Diisi</h1>
            <v-spacer></v-spacer>
          </v-card-title>
        </v-card>
        <v-card v-else>
          <v-card-title primary-title>
            <v-spacer></v-spacer>
            <h1 class="headline text-uppercase font-weight-light text-xs-center">Questionnaire</h1>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" v-model="valid" @submit.prevent="submit">
                <data-input-question
                  :text="'Apakah anda pernah melamar di perusahaan ini sebelumnya. Kapan & sebagai apa?'"
                  :q="q[0]"
                  :e="e[0]"
                  @qUpdated="updateQ0"
                  @eUpdated="updateE0"
                  :rules="rules"
                  :valid="valid"
                  @validUpdated="updateValid"
                ></data-input-question>
                <data-input-question
                  :text="'Apakah saat ini anda melamar di perusahaan lain? Sebagai posisi apa?'"
                  :q="q[1]"
                  :e="e[1]"
                  @qUpdated="updateQ1"
                  @eUpdated="updateE1"
                  :rules="rules"
                  :valid="valid"
                  @validUpdated="updateValid"
                ></data-input-question>
                <data-input-question
                  :text="'Apakah anda terikat kontrak dengan perusahaan tempat bekerja anda saat ini?'"
                  :q="q[2]"
                  :e="e[2]"
                  @qUpdated="updateQ2"
                  @eUpdated="updateE2"
                  :rules="rules"
                  :valid="valid"
                  @validUpdated="updateValid"
                ></data-input-question>
                <data-input-question
                  :text="'Apakah anda memiliki pekerjaan part time? Dimana dan sebagai apa?'"
                  :q="q[3]"
                  :e="e[3]"
                  @qUpdated="updateQ3"
                  @eUpdated="updateE3"
                  :rules="rules"
                  :valid="valid"
                  @validUpdated="updateValid"
                ></data-input-question>
                <data-input-question
                  :text="'Apakah anda keberatan bila kami meminta referensi pada perusahaan anda sebelumnya?'"
                  :q="q[4]"
                  :e="e[4]"
                  @qUpdated="updateQ4"
                  @eUpdated="updateE4"
                  :rules="rules"
                  :valid="valid"
                  @validUpdated="updateValid"
                ></data-input-question>
                <data-input-question
                  :text="'Apakah anda memiliki teman atau saudara yang bekerja di group / perusahaan ini? Sebutkan nama dan hubungan dengan anda'"
                  :q="q[5]"
                  :e="e[5]"
                  @qUpdated="updateQ5"
                  @eUpdated="updateE5"
                  :rules="rules"
                  :valid="valid"
                  @validUpdated="updateValid"
                ></data-input-question>
                <data-input-question
                  :text="'Apakah anda memiliki teman atau saudara yang bekerja di industri rokok dan distribusi rokok atau sejenis? Sebutkan nama, nama perusahaan, jabatan dan hubungan dengan anda'"
                  :q="q[6]"
                  :e="e[6]"
                  @qUpdated="updateQ6"
                  @eUpdated="updateE6"
                  :rules="rules"
                  :valid="valid"
                  @validUpdated="updateValid"
                ></data-input-question>
                <data-input-question
                  :text="'Apakah anda pernah mengalami sakit keras atau menjalani perawatan yang intensif? Bila ya, kapan dan sebutkan penyakitnya'"
                  :q="q[7]"
                  :e="e[7]"
                  @qUpdated="updateQ7"
                  @eUpdated="updateE7"
                  :rules="rules"
                  :valid="valid"
                  @validUpdated="updateValid"
                ></data-input-question>
                <data-input-question
                  :text="'Apakah anda pernah mengalami kecelakaan? Bila ya kapan dan apa akibat yang anda rasakan sekarang?'"
                  :q="q[8]"
                  :e="e[8]"
                  @qUpdated="updateQ8"
                  @eUpdated="updateE8"
                  :rules="rules"
                  :valid="valid"
                  @validUpdated="updateValid"
                ></data-input-question>
                <data-input-question
                  :text="'Apakah anda pernah menjalani pemeriksaan Psikologis? Bilamana, dimana dan untuk tujuan apa?'"
                  :q="q[9]"
                  :e="e[9]"
                  @qUpdated="updateQ9"
                  @eUpdated="updateE9"
                  :rules="rules"
                  :valid="valid"
                  @validUpdated="updateValid"
                ></data-input-question>
                <data-input-question
                  :text="'Apakah anda pernah berurusan dengan polisi karena tindakan tertentu?'"
                  :q="q[10]"
                  :e="e[10]"
                  @qUpdated="updateQ10"
                  @eUpdated="updateE10"
                  :rules="rules"
                  :valid="valid"
                  @validUpdated="updateValid"
                ></data-input-question>
                <data-input-question
                  :text="'Bila diterima bersediakah anda bertugas ke luar kota?'"
                  :q="q[11]"
                  :e="e[11]"
                  @qUpdated="updateQ11"
                  @eUpdated="updateE11"
                  :rules="rules"
                  :valid="valid"
                  @validUpdated="updateValid"
                ></data-input-question>
                <data-input-question
                  :text="'Bila diterima apakah anda bersedia ditempatkan di seluruh daerah di Indonesia?'"
                  :q="q[12]"
                  :e="e[12]"
                  @qUpdated="updateQ12"
                  @eUpdated="updateE12"
                  :rules="rules"
                  :valid="valid"
                  @validUpdated="updateValid"
                ></data-input-question>
                <data-input-question
                  :text="'Macam pekerjaan atau jabatan apakah yang sesuai dengan cita cita anda?'"
                  :q="'none'"
                  :e="e[13]"
                  @qUpdated="updateQ13"
                  @eUpdated="updateE13"
                  :rules="rules"
                  :valid="valid"
                  @validUpdated="updateValid"
                ></data-input-question>
                <data-input-question
                  :text="'Macam pekerjaan atau jabatan apakah yang tidak sesuai dengan cita cita anda?'"
                  :q="'none'"
                  :e="e[14]"
                  @qUpdated="updateQ14"
                  @eUpdated="updateE14"
                  :rules="rules"
                  :valid="valid"
                  @validUpdated="updateValid"
                ></data-input-question>
                <data-input-question
                  :text="'Bila diterima, kapan anda dapat mulai bekerja?'"
                  :q="'none'"
                  :e="e[15]"
                  @qUpdated="updateQ15"
                  @eUpdated="updateE15"
                  :rules="rules"
                  :valid="valid"
                  @validUpdated="updateValid"
                ></data-input-question>
                <data-input-question
                  :text="'Besar gaji yang anda harapkan?'"
                  :q="'none'"
                  :e="e[16]"
                  @qUpdated="updateQ16"
                  @eUpdated="updateE16"
                  :rules="rules"
                  :valid="valid"
                  @validUpdated="updateValid"
                ></data-input-question>
                <data-input-question
                  :text="'Tambahkan informasi tambahan (jika ada)'"
                  :q="'none'"
                  :e="e[17]"
                  @qUpdated="updateQ17"
                  @eUpdated="updateE17"
                  :rules="rules"
                  :valid="valid"
                  @validUpdated="updateValid"
                ></data-input-question>

                <v-layout row wrap mt-5 justify-end>
                  <v-flex offset-md6 offset-lg7 offset-xl8>
                    <v-btn :disabled="!valid" color="success" type="submit">Submit</v-btn>
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
import dataInputQuestion from '../../components/ApplicationForm/DataInputQuestion'

export default {
  data () {
    return {
      q: new Array(18),
      e: new Array(18),
      valid: true,
      rules: {
        required: v => !!v || 'Wajib diisi!',
      },
    }
  },
  computed: {
    isCompleted () {
      if (this.$store.state.exam.isCompleted == 0) {
        return false
      } else {
        return true
      }
    },
    endRoute () {
      return this.$store.state.shared.currentEndRoute
    }
  },
  methods: {
    updateQ0 (i) { this.q[0] = i; },
    updateE0 (i) { this.e[0] = i; },
    updateQ1 (i) { this.q[1] = i; },
    updateE1 (i) { this.e[1] = i; },
    updateQ2 (i) { this.q[2] = i; },
    updateE2 (i) { this.e[2] = i; },
    updateQ3 (i) { this.q[3] = i; },
    updateE3 (i) { this.e[3] = i; },
    updateQ4 (i) { this.q[4] = i; },
    updateE4 (i) { this.e[4] = i; },
    updateQ5 (i) { this.q[5] = i; },
    updateE5 (i) { this.e[5] = i; },
    updateQ6 (i) { this.q[6] = i; },
    updateE6 (i) { this.e[6] = i; },
    updateQ7 (i) { this.q[7] = i; },
    updateE7 (i) { this.e[7] = i; },
    updateQ8 (i) { this.q[8] = i; },
    updateE8 (i) { this.e[8] = i; },
    updateQ9 (i) { this.q[9] = i; },
    updateE9 (i) { this.e[9] = i; },
    updateQ10 (i) { this.q[10] = i; },
    updateE10 (i) { this.e[10] = i; },
    updateQ11 (i) { this.q[11] = i; },
    updateE11 (i) { this.e[11] = i; },
    updateQ12 (i) { this.q[12] = i; },
    updateE12 (i) { this.e[12] = i; },
    updateQ13 (i) { this.q[13] = i; },
    updateE13 (i) { this.e[13] = i; },
    updateQ14 (i) { this.q[14] = i; },
    updateE14 (i) { this.e[14] = i; },
    updateQ15 (i) { this.q[15] = i; },
    updateE15 (i) { this.e[15] = i; },
    updateQ16 (i) { this.q[16] = i; },
    updateE16 (i) { this.e[16] = i; },
    updateQ17 (i) { this.q[17] = i; },
    updateE17 (i) { this.e[17] = i; },
    updateValid (i) { this.valid = i; },
    submit () {
      var examAnswer = []
      for (let i = 0; i < this.e.length; i++) {
        const el = this.e[i];
        const no = i + 1;
        if (this.q[i] == undefined || this.q[i] == null) {
          this.q[i] = 'none'
        }
        examAnswer.push({
          questionNo: no,
          answer: this.q[i],
          remarks: el
        })
      }

      const data = {
        examInfoId: this.$route.params.examId,
        examTypeId: 8,
        examAnswer: examAnswer
      }

      this.$store.dispatch('postAnswerList', data)
        .then(() => {
          if (this.endRoute == "self") {
            const routeData = {
              examInfoId: this.$route.params.examId,
              sharedValue: "/exam/disc/" + this.$route.params.examId
            }
            this.$store.dispatch('setCurrentRoute', routeData)
            this.$router.push({ name: 'disc', params: { examId: this.$route.params.examId } })
          } else {
            const routeData = {
              examInfoId: this.$route.params.examId,
              sharedValue: "/finish/"
            }
            this.$store.dispatch('setCurrentRoute', routeData)
            this.$router.push({ name: 'finish' })
          }
        })
    }
  },
  watch: {
    q () {
      console.log("a")
      if (this.q.length > 0) {
        this.valid = false
      }
    }
  },
  components: {
    dataInputQuestion
  },
  created () {
    this.$store.dispatch('getCompletedStatus', { examType: 8, examInfoId: this.$route.params.examId })
    this.$store.dispatch('getShared', { examInfoId: this.$route.params.examId })
  }
}
</script>
