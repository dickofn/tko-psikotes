<template>
  <v-container grid-list-xs>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <v-spacer></v-spacer>
            <h1 class="headline text-uppercase font-weight-light text-xs-center">Psikotes - APM</h1>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" v-model="valid" @submit.prevent="submit">
                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <h1>INSTRUKSI</h1>
                    <p>
                      <b>&rarr;</b> Lihatlah gambar utama yang memiliki 8 pola sudah terisi dan 1 pola kosong.
                      <br>
                      <b>&rarr;</b> Pilihlah 1 pola yang paling tepat untuk melengkapi 8 pola yang sudah terisi pada gambar utama.
                      <br>
                      <br>
                      <b>&rarr;</b> Bagian ini terdiri dari 1 halaman dengan total 36 soal. Mohon diperhatikan sisa waktu yang berjalan ketika mengerjakan tes ini!
                    </p>
                  </v-flex>
                </v-layout>

                <template v-if="(isStarted && !isFinished) || isCompleted">
                  <data-input-apm
                    v-for="(url, index) in u "
                    :no="(index+1)"
                    :u="url"
                    :c="c[index]"
                    @cUpdated="updateAnswer"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[index]"
                  ></data-input-apm>
                </template>

                <v-layout row warp justify-center align-center text-xs-center v-if="isFinished">
                  <v-flex xs12>
                    <h1>WAKTU ANDA HABIS</h1>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mt-5 justify-end v-if="!isCompleted">
                  <v-flex offset-md6 offset-lg7 offset-xl8>
                    <template v-if="!isStarted && !isFinished">
                      <v-btn color="info" @click="startExam" :disabled="time == null">Start</v-btn>
                      <span>
                        <h2>Waktu pengerjaan {{ prettyTime }} menit</h2>
                      </span>
                    </template>
                    <v-btn :disabled="!valid" color="success" v-if="isStarted" type="submit">Submit</v-btn>
                  </v-flex>
                </v-layout>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-snackbar v-model="timeReminder" color="error" :timeout="5000">
      Sisa waktu Anda 2 menit harap percepat pengerjaan Anda!
      <v-btn dark flat @click="timeReminder = false">Close</v-btn>
    </v-snackbar>

    <v-bottom-nav
      :value="true"
      fixed
      v-if="isStarted && !isFinished"
      height="20"
      class="text-xs-center"
    >
      <v-spacer></v-spacer>
      Hello {{ applicantName }}! Waktu yang tersisa
      &nbsp;
      <span
        class="footer-span"
      >{{ prettyTime }}</span>
      &nbsp;&rarr; Sisa field yang masih kosong
      &nbsp;
      <span
        class="footer-span"
      >{{ leftOver }}</span>
      <v-spacer></v-spacer>
    </v-bottom-nav>
  </v-container>
</template>

<script>
import dataInputApm from '../../components/Psychotest/Input/DataInputApm'

export default {
  data () {
    return {
      time: null,
      timer: null,
      timeReminder: false,
      isStarted: false,
      isFinished: false,
      leftOver: 36,
      u: [
        "/assets/PSIKOTEST-01.webp",
        "/assets/PSIKOTEST-02.webp",
        "/assets/PSIKOTEST-03.webp",
        "/assets/PSIKOTEST-04.webp",
        "/assets/PSIKOTEST-05.webp",
        "/assets/PSIKOTEST-06.webp",
        "/assets/PSIKOTEST-07.webp",
        "/assets/PSIKOTEST-08.webp",
        "/assets/PSIKOTEST-09.webp",
        "/assets/PSIKOTEST-10.webp",
        "/assets/PSIKOTEST-11.webp",
        "/assets/PSIKOTEST-12.webp",
        "/assets/PSIKOTEST-13.webp",
        "/assets/PSIKOTEST-14.webp",
        "/assets/PSIKOTEST-15.webp",
        "/assets/PSIKOTEST-16.webp",
        "/assets/PSIKOTEST-17.webp",
        "/assets/PSIKOTEST-18.webp",
        "/assets/PSIKOTEST-19.webp",
        "/assets/PSIKOTEST-20.webp",
        "/assets/PSIKOTEST-21.webp",
        "/assets/PSIKOTEST-22.webp",
        "/assets/PSIKOTEST-23.webp",
        "/assets/PSIKOTEST-24.webp",
        "/assets/PSIKOTEST-25.webp",
        "/assets/PSIKOTEST-26.webp",
        "/assets/PSIKOTEST-27.webp",
        "/assets/PSIKOTEST-28.webp",
        "/assets/PSIKOTEST-29.webp",
        "/assets/PSIKOTEST-30.webp",
        "/assets/PSIKOTEST-31.webp",
        "/assets/PSIKOTEST-32.webp",
        "/assets/PSIKOTEST-33.webp",
        "/assets/PSIKOTEST-34.webp",
        "/assets/PSIKOTEST-35.webp",
        "/assets/PSIKOTEST-36.webp",
      ],
      c: new Array(36),
      a: new Array,
      valid: true,
      comKey: new Array,
      rules: {
        required: v => !!v || '',
      }
    }
  },
  computed: {
    prettyTime () {
      let time = this.time / 60
      let minutes = parseInt(time)
      let secondes = Math.round((time - minutes) * 60)
      if (minutes < 10) {
        minutes = "0" + minutes
      }
      if (secondes < 10) {
        secondes = "0" + secondes
      }
      return minutes + ":" + secondes
    },
    applicantName () {
      return this.$store.state.user.examApplicantName
    },
    isCompleted () {
      if (this.$store.state.exam.isCompleted == 0) {
        return false
      } else {
        return true
      }
    },
    answerList () {
      return this.$store.state.exam.answerList
    }
  },
  methods: {
    startExam () {
      this.isStarted = true;
      if (!this.timer) {
        this.timer = setInterval(() => {
          if (this.time > 0) {
            this.time--
          } else {
            clearInterval(this.timer)
            this.isFinished = true;
            this.submit()
          }
          if (this.time == 120) {
            this.timeReminder = true;
          }
        }, 1000)
      }
    },
    updateAnswer (i) {
      for (let index = 0; index < this.a.length; index++) {
        const n = this.a[index].questionNo;
        const a = this.a[index].answer;
        if (n == i.n && a) {
          this.a.splice(index, 1);
          this.leftOver++;
          break;
        }
      }
      this.a.push({
        questionNo: i.n,
        answer: i.a
      })
      this.leftOver--;
    },
    updateValid (i) { this.valid = i; },
    submit () {
      const data = {
        examInfoId: this.$route.params.examId,
        examTypeId: 2,
        examAnswer: this.a
      }
      this.$store.dispatch('postAnswerList', data)
        .then(res => {
          if (res.status == 200) {
            const routeData = {
              examInfoId: this.$route.params.examId,
              sharedValue: "/exam/eng/" + this.$route.params.examId
            }
            this.$store.dispatch('setCurrentRoute', routeData)
            this.$router.replace({ name: 'eng', params: { examId: this.$route.params.examId } })
          }
        })
        .catch(e => {
          console.log(e)
          alert("Ada kesalahan teknis, hubungi HRD / karyawan terkait!")
        })
    },
    getAnswer (answerArr) {
      for (let index = 0; index < answerArr.length; index++) {
        const questionNo = answerArr[index].questionNo
        const answer = answerArr[index].answer
        this.c[questionNo - 1] = answer
        this.comKey[questionNo - 1] = questionNo //Key changed will force component re-rende
        this.$forceUpdate() //Still re-render when hard refresh (ctrl + f5)  
      }
    }
  },
  watch: {
    answerList (value) {
      if (value != null || value != undefined) {
        this.getAnswer(value)
      }
    }
  },
  components: {
    dataInputApm
  },
  created () {
    this.$store.dispatch('getApplicant', { examInfoId: this.$route.params.examId })
    this.axios.get(process.env.VUE_APP_API_URL + "/exam/type/2")
      .then(res => {
        this.$store.dispatch('setLoading', false)
        this.time = res.data.data.examTime * 60
      })
      .catch(e => {
        this.$store.dispatch('setLoading', false)
        console.log(e)
      })
    this.$store.dispatch('getCompletedStatus', { examType: 2, examInfoId: this.$route.params.examId })
      .then(() => {
        if (this.isCompleted) {
          this.$store.dispatch('getAnswerList', { examType: 2, examInfoId: this.$route.params.examId })
        }
      })
  }
}
</script>

<style lang="scss" scoped>
.footer-span {
  padding: 0;
  margin: 0;
  flex: 0;
  color: red;
  cursor: default;
}
</style>