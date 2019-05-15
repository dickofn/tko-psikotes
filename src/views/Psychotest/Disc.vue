<template>
  <v-container grid-list-xs>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <v-spacer></v-spacer>
            <h1 class="headline text-uppercase font-weight-light text-xs-center">Psikotes - DISC</h1>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" v-model="valid" @submit.prevent="submit">
                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <h1>INSTRUKSI</h1>
                    <p>
                      <b>&rarr;</b> Setiap kotak dibawah ini memuat empat pernyataan. Bacalah dengan seksama setiap pernyataan itu, lalu pilihlah salah satu tanda D, I, S, C, atau * di bawah kolom M, disamping pernyataan yang
                      <b>PALING</b> menggambarkan diri Anda.
                      <br>
                      <b>&rarr;</b> Selanjutanya pilihlah salah satu tanda D, I, S, C, atau * di bawah kolom L, disamping pernyataan yang
                      <b>PALING TIDAK</b> menggambarkan diri Anda. Untuk setiap baris hanya dapat memilih satu saja.
                      <br>
                      <br>
                      <b>&rarr;</b> Bagian ini terdiri dari 1 halaman dengan total 24 soal. Mohon diperhatikan sisa waktu yang berjalan ketika mengerjakan tes ini!
                    </p>
                  </v-flex>
                </v-layout>

                <template v-if="(isStarted && !isFinished) || isCompleted">
                  <data-input-disc
                    :no="1"
                    :m="m[0]"
                    :l="l[0]"
                    :mv="['S', 'I', '*', 'C']"
                    :lv="['S', 'I', 'D', 'C']"
                    :t="['Gampangan, mudah setuju', 'Percaya, percaya pada orang', 'Petualang, mengambil resiko', 'Toleran, menghormati']"
                    @mUpdated="updateAnswer"
                    @lUpdated="updateAnswer"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    @sameRowCheck="checkSameRow"
                    :key="comKey[0]"
                  ></data-input-disc>
                  <data-input-disc
                    :no="2"
                    :m="m[1]"
                    :l="l[1]"
                    :mv="['C', 'D', '*', 'S']"
                    :lv="['*', 'D', 'I', 'S']"
                    :t="['Lembut suara, pendiam,', 'Optimistik, visioner', 'Pusat perhatian, suka gaul', 'Pendamai, membawa harmoni']"
                    @mUpdated="updateAnswer"
                    @lUpdated="updateAnswer"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    @sameRowCheck="checkSameRow"
                    :key="comKey[1]"
                  ></data-input-disc>
                  <data-input-disc
                    :no="3"
                    :m="m[2]"
                    :l="l[2]"
                    :mv="['I', '*', '**', 'D']"
                    :lv="['I', 'C', 'S', '*']"
                    :t="['Menyemangati orang,', 'Berusaha sempurna', 'Bagian dari kelompok', 'Ingin membuat tujuan']"
                    @mUpdated="updateAnswer"
                    @lUpdated="updateAnswer"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    @sameRowCheck="checkSameRow"
                    :key="comKey[2]"
                  ></data-input-disc>
                  <data-input-disc
                    :no="4"
                    :m="m[3]"
                    :l="l[3]"
                    :mv="['C', 'S', '*', 'D']"
                    :lv="['C', 'S', 'I', 'D']"
                    :t="['Menjadi frustasi', 'Menyimpan perasaan saya', 'Menceritakan sisi saya', 'Siap beroposisi']"
                    @mUpdated="updateAnswer"
                    @lUpdated="updateAnswer"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    @sameRowCheck="checkSameRow"
                    :key="comKey[3]"
                  ></data-input-disc>
                  <data-input-disc
                    :no="5"
                    :m="m[4]"
                    :l="l[4]"
                    :mv="['I', 'D', 'S', '*']"
                    :lv="['*', 'D', 'S', 'C']"
                    :t="['Hidup, suka bicara', 'Gerakan cepat, tekun', 'Usaha menjadi keseimbangan', 'Usaha mengikuti aturan']"
                    @mUpdated="updateAnswer"
                    @lUpdated="updateAnswer"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    @sameRowCheck="checkSameRow"
                    :key="comKey[4]"
                  ></data-input-disc>
                  <data-input-disc
                    :no="6"
                    :m="m[5]"
                    :l="l[5]"
                    :mv="['C', 'D', 'I', 'S']"
                    :lv="['*', 'D', 'I', 'S']"
                    :t="['Kelola waktu secara efisien', 'Sering terburu-buru, merasa tertekan', 'Masalah sosial itu penting', 'Suka selesaikan apa yang saya mulai']"
                    @mUpdated="updateAnswer"
                    @lUpdated="updateAnswer"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    @sameRowCheck="checkSameRow"
                    :key="comKey[5]"
                  ></data-input-disc>
                  <data-input-disc
                    :no="7"
                    :m="m[6]"
                    :l="l[6]"
                    :mv="['S', 'I', '*', '**']"
                    :lv="['*', 'I', 'C', 'D']"
                    :t="['Tolak perubahan mendadak', 'Cenderung janji berlebihan', 'Tarik diri di tengah tekanan', 'Tidak takut bertempur']"
                    @mUpdated="updateAnswer"
                    @lUpdated="updateAnswer"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    @sameRowCheck="checkSameRow"
                    :key="comKey[6]"
                  ></data-input-disc>
                  <data-input-disc
                    :no="8"
                    :m="m[7]"
                    :l="l[7]"
                    :mv="['I', 'S', 'C', 'D']"
                    :lv="['I', 'S', 'C', 'D']"
                    :t="['Penyemangat yang baik', 'Pendengar yang baik', 'Penganalisa yang baik', 'Delegator yang baik']"
                    @mUpdated="updateAnswer"
                    @lUpdated="updateAnswer"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    @sameRowCheck="checkSameRow"
                    :key="comKey[7]"
                  ></data-input-disc>
                  <data-input-disc
                    :no="9"
                    :m="m[8]"
                    :l="l[8]"
                    :mv="['D', 'C', '*', '**']"
                    :lv="['D', 'C', 'I', 'S']"
                    :t="['Hasil adalah penting', 'Lakukan dengan benar, akurasi penting', 'Dibuat menyenangkan', 'Mari kerjakan bersama']"
                    @mUpdated="updateAnswer"
                    @lUpdated="updateAnswer"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    @sameRowCheck="checkSameRow"
                    :key="comKey[8]"
                  ></data-input-disc>
                  <data-input-disc
                    :no="10"
                    :m="m[9]"
                    :l="l[9]"
                    :mv="['*', 'D', 'S', 'I']"
                    :lv="['C', 'D', 'S', '*']"
                    :t="['Akan berjalan terus tanpa kontrol diri', 'Akan membeli sesuai dorongan hati', 'Akan menunggu, tanpa tekanan', 'Akan mengusahakan apa yang kuinginkan']"
                    @mUpdated="updateAnswer"
                    @lUpdated="updateAnswer"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    @sameRowCheck="checkSameRow"
                    :key="comKey[9]"
                  ></data-input-disc>
                  <data-input-disc
                    :no="11"
                    :m="m[10]"
                    :l="l[10]"
                    :mv="['S', '*', 'D', 'C']"
                    :lv="['*', 'I', 'D', 'C']"
                    :t="['Ramah, mudah bergabung', 'Unik, bosan rutinitas', 'Aktif mengubah sesuatu, tanpa tekanan', 'Ingin hal-hal yang pasti']"
                    @mUpdated="updateAnswer"
                    @lUpdated="updateAnswer"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    @sameRowCheck="checkSameRow"
                    :key="comKey[10]"
                  ></data-input-disc>
                  <data-input-disc
                    :no="12"
                    :m="m[11]"
                    :l="l[11]"
                    :mv="['*', 'C', 'I', 'D']"
                    :lv="['S', '*', 'I', 'D']"
                    :t="['Non - konfrontasi, menyerah', 'Dipenuhi hal detail', 'Perubahan pada menit terakhir', 'Menuntut, kasar']"
                    @mUpdated="updateAnswer"
                    @lUpdated="updateAnswer"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    @sameRowCheck="checkSameRow"
                    :key="comKey[11]"
                  ></data-input-disc>
                  <data-input-disc
                    :no="13"
                    :m="m[12]"
                    :l="l[12]"
                    :mv="['D', 'S', 'I', '*']"
                    :lv="['D', '*', '**', 'C']"
                    :t="['Ingin kemajuan', 'Puas dengan segalanya, senang', 'Terbuka memperhatikan perasaan', 'Rendah hati, sederhana']"
                    @mUpdated="updateAnswer"
                    @lUpdated="updateAnswer"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    @sameRowCheck="checkSameRow"
                    :key="comKey[12]"
                  ></data-input-disc>
                  <data-input-disc
                    :no="14"
                    :m="m[13]"
                    :l="l[13]"
                    :mv="['C', 'I', 'S', 'D']"
                    :lv="['C', 'I', '*', 'D']"
                    :t="['Tenang, pendiam', 'Bahagia, tanpa beban', 'Menyenangkan, baik hati', 'Tak gentar, berani']"
                    @mUpdated="updateAnswer"
                    @lUpdated="updateAnswer"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    @sameRowCheck="checkSameRow"
                    :key="comKey[13]"
                  ></data-input-disc>
                  <data-input-disc
                    :no="15"
                    :m="m[14]"
                    :l="l[14]"
                    :mv="['S', 'C', 'I', 'D']"
                    :lv="['S', '*', 'I', 'D']"
                    :t="['Menggunakan waktu berkualitas dengan teman', 'Rencanakan masa depan, bersiap', 'Berpergian demi petualangan baru', 'Menerima ganjaran atau tujuan yang tercapai']"
                    @mUpdated="updateAnswer"
                    @lUpdated="updateAnswer"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    @sameRowCheck="checkSameRow"
                    :key="comKey[14]"
                  ></data-input-disc>
                  <data-input-disc
                    :no="16"
                    :m="m[15]"
                    :l="l[15]"
                    :mv="['*', 'C', 'I', 'S']"
                    :lv="['D', 'S', 'I', 'SS']"
                    :t="['Aturan perlu dipertanyakan', 'Aturan membuat adil', 'Aturan membuat bosan', 'Aturan membuat aman']"
                    @mUpdated="updateAnswer"
                    @lUpdated="updateAnswer"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    @sameRowCheck="checkSameRow"
                    :key="comKey[15]"
                  ></data-input-disc>
                  <data-input-disc
                    :no="17"
                    :m="m[16]"
                    :l="l[16]"
                    :mv="['*', 'D', 'S', 'I']"
                    :lv="['C', 'D', 'S', '*']"
                    :t="['Pendidikan, kebudayaan', 'Prestasi, ganjaran', 'Keselamatan, keamanan ', 'Sosial, perkumpulan kelompok']"
                    @mUpdated="updateAnswer"
                    @lUpdated="updateAnswer"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    @sameRowCheck="checkSameRow"
                    :key="comKey[16]"
                  ></data-input-disc>
                  <data-input-disc
                    :no="18"
                    :m="m[17]"
                    :l="l[17]"
                    :mv="['D', '*', '**', 'C']"
                    :lv="['D', 'I', 'S', '*']"
                    :t="['Memimpin, pendekatan langsung', 'Suka bergaul, antusias', 'Dapat diramal, konsisten ', 'Waspada, hati-hati']"
                    @mUpdated="updateAnswer"
                    @lUpdated="updateAnswer"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    @sameRowCheck="checkSameRow"
                    :key="comKey[17]"
                  ></data-input-disc>
                  <data-input-disc
                    :no="19"
                    :m="m[18]"
                    :l="l[18]"
                    :mv="['D', 'S', 'I', '*']"
                    :lv="['D', '*', 'I', 'C']"
                    :t="['Tidak mudah dikalahkan', 'Kerjakan sesuai perintah, ikut pemimpin', 'Mudah terangsang, riang ', 'Ingin segalanya teratur, rapi']"
                    @mUpdated="updateAnswer"
                    @lUpdated="updateAnswer"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    @sameRowCheck="checkSameRow"
                    :key="comKey[18]"
                  ></data-input-disc>
                  <data-input-disc
                    :no="20"
                    :m="m[19]"
                    :l="l[19]"
                    :mv="['D', 'S', 'I', 'C']"
                    :lv="['*', 'S', 'I', '**']"
                    :t="['Saya akan pimpin mereka', 'Saya akan melaksanakan', 'Saya akan meyakinkan mereka', 'Saya dapatkan fakta']"
                    @mUpdated="updateAnswer"
                    @lUpdated="updateAnswer"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    @sameRowCheck="checkSameRow"
                    :key="comKey[19]"
                  ></data-input-disc>
                  <data-input-disc
                    :no="21"
                    :m="m[20]"
                    :l="l[20]"
                    :mv="['S', 'D', 'I', '*']"
                    :lv="['S', 'D', 'I', 'C']"
                    :t="['Memikirkan orang dahulu', 'Kompetitif, suka tantangan', 'Optimis, positif', 'Pemikiran logis, sistematik']"
                    @mUpdated="updateAnswer"
                    @lUpdated="updateAnswer"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    @sameRowCheck="checkSameRow"
                    :key="comKey[20]"
                  ></data-input-disc>
                  <data-input-disc
                    :no="22"
                    :m="m[21]"
                    :l="l[21]"
                    :mv="['S', '*', 'D', 'C']"
                    :lv="['S', 'I', 'D', 'C']"
                    :t="['Menyenangkan orang. Mudah setuju', 'Tertawa lepas, hidup', 'Berani, tak gentar', 'Tenang, pendiam']"
                    @mUpdated="updateAnswer"
                    @lUpdated="updateAnswer"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    @sameRowCheck="checkSameRow"
                    :key="comKey[21]"
                  ></data-input-disc>
                  <data-input-disc
                    :no="23"
                    :m="m[22]"
                    :l="l[22]"
                    :mv="['*', 'I', 'S', '**']"
                    :lv="['D', '*', 'S', 'C']"
                    :t="['Ingin otoritas lebih', 'Ingin kesempatan baru', 'Menghindari konflik', 'Ingin petunjuk yang jelas']"
                    @mUpdated="updateAnswer"
                    @lUpdated="updateAnswer"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    @sameRowCheck="checkSameRow"
                    :key="comKey[22]"
                  ></data-input-disc>
                  <data-input-disc
                    :no="24"
                    :m="m[23]"
                    :l="l[23]"
                    :mv="['*', 'I', 'D', 'C']"
                    :lv="['S', 'I', '*', '**']"
                    :t="['Dapat diandalkan, dapat dipercaya', 'Kreatif, unik', 'Garis dasar, orientasi hasil', 'Jalankan standar yang tinggi. akurat']"
                    @mUpdated="updateAnswer"
                    @lUpdated="updateAnswer"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    @sameRowCheck="checkSameRow"
                    :key="comKey[23]"
                  ></data-input-disc>
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
                    <v-btn
                      :disabled="!valid || sameRow"
                      color="success"
                      v-if="isStarted"
                      type="submit"
                    >Submit</v-btn>
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
import dataInputDisc from '../../components/Psychotest/Input/DataInputDisc'

export default {
  data () {
    return {
      time: null,
      timer: null,
      timeReminder: false,
      isStarted: false,
      isFinished: false,
      leftOver: 48,
      m: new Array,
      l: new Array,
      a: new Array,
      valid: true,
      sameRow: false,
      rowCheck: new Array(24),
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
        if (a.substr(0, 1) == i.a.substr(0, 1) && n == i.n) {
          this.a.splice(index, 1);
          this.leftOver++;
          break;
        }
      }
      this.a.push({ questionNo: i.n, answer: i.a });
      this.leftOver--;
    },
    updateValid (i) { this.valid = i; },
    checkSameRow (i) {
      this.rowCheck[i.index] = i.status
      this.sameRow = false
      for (let index = 0; index < this.rowCheck.length; index++) {
        if (this.rowCheck[index]) {
          const sameRowStatus = this.rowCheck[index];
          if (sameRowStatus == true) { this.sameRow = true; break }
        }
      }
    },
    submit () {
      const data = {
        examInfoId: this.$route.params.examId,
        examTypeId: 1,
        examAnswer: this.a
      }
      this.$store.dispatch('postAnswerList', data)
        .then(res => {
          if (res.status == 200) {
            const routeData = {
              examInfoId: this.$route.params.examId,
              sharedValue: "/exam/apm/" + this.$route.params.examId
            }
            this.$store.dispatch('setCurrentRoute', routeData)
            this.$router.replace({ name: 'apm', params: { examId: this.$route.params.examId } })
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
        if (answer.substr(0, 1) == "M") {
          if (answer.substr(2) == "Star") {
            this.m[questionNo - 1] = "*"
          } else {
            this.m[questionNo - 1] = answer.substr(2)
          }
          this.comKey[questionNo - 1] = questionNo //Key changed will force component re-rende
        } else {
          if (answer.substr(2) == "Star") {
            this.l[questionNo - 1] = "*"
          } else {
            this.l[questionNo - 1] = answer.substr(2)
          }
          this.comKey[questionNo - 1] = questionNo //Key changed will force component re-rende
        }
      }
      this.$forceUpdate() //Still re-render when hard refresh (ctrl + f5)
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
    dataInputDisc
  },
  created () {
    this.$store.dispatch('getApplicant', { examInfoId: this.$route.params.examId })
    this.axios.get(process.env.VUE_APP_API_URL + "/exam/type/1")
      .then(res => {
        this.$store.dispatch('setLoading', false)
        this.time = res.data.data.examTime * 60
      })
      .catch(e => {
        this.$store.dispatch('setLoading', false)
        console.log(e)
      })
    this.$store.dispatch('getCompletedStatus', { examType: 1, examInfoId: this.$route.params.examId })
      .then(() => {
        if (this.isCompleted) {
          this.$store.dispatch('getAnswerList', { examType: 1, examInfoId: this.$route.params.examId })
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