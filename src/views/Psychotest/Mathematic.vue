<template>
  <v-container grid-list-xs>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <v-spacer></v-spacer>
            <h1
              class="headline text-uppercase font-weight-light text-xs-center"
            >Psikotes - Berhitung TKD-5</h1>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" v-model="valid" @submit.prevent="submit">
                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <h1>INSTRUKSI</h1>
                    <p>
                      <b>&rarr;</b> Soal merupakan soal cerita berhitung matematika. Baca soal dengan teliti lalu isi jawaban Anda di bawah soal tersebut.
                      <br>
                      <b>&rarr;</b> Jawaban merupakan angka, bila jawaban desimal maka jawablah hingga dua angka desimal.
                      <br>
                      <b>&rarr;</b> Pemisah angka desimal menggunakan simbol titik ('.') dan bukan koma (',').
                      <br>
                      <br>
                      <b>&rarr;</b> Bagian ini terdiri dari 1 halaman dengan total 20 soal, mohon perhatikan waktu yang anda miliki!
                    </p>
                  </v-flex>
                </v-layout>

                <template v-if="(isStarted && !isFinished) || isCompleted">
                  <data-input-math
                    :no="'01. '"
                    :question="'Seorang anak mempunyai 12 pensil. 6 pensil dipinjam temannya. Berapa pensil sisanya?'"
                    :answer="a[0]"
                    @answerUpdated="updateA0"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[0]"
                  ></data-input-math>
                  <data-input-math
                    :no="'02. '"
                    :question="'Berapa jumlah seluruh siswa di kelas bila siswanya ada 16 orang dan siswinya ada 18 orang?'"
                    :answer="a[1]"
                    @answerUpdated="updateA1"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[1]"
                  ></data-input-math>
                  <data-input-math
                    :no="'03. '"
                    :question="'Seorang petani mempunyai 8 ekor ayam. Ia membeli lagi 5 ekor. Berapa ekor ayamnya sekarang?'"
                    :answer="a[2]"
                    @answerUpdated="updateA2"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[2]"
                  ></data-input-math>
                  <data-input-math
                    :no="'04. '"
                    :question="'Seorang penjahit menyelesaikan 7 baju sehari. Berapa baju dapat diselesaikan dalam 6 hari?'"
                    :answer="a[3]"
                    @answerUpdated="updateA3"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[3]"
                  ></data-input-math>
                  <data-input-math
                    :no="'05. '"
                    :question="'Suatu rumah berdiri diatas tanah yang panjangnya 21 meter dan lebarnya 12 meter Berapa meter persegi luas tanah rumah itu?'"
                    :answer="a[4]"
                    @answerUpdated="updateA4"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[4]"
                  ></data-input-math>
                  <data-input-math
                    :no="'06. '"
                    :question="'Seorang anak membeli permen seharga Rp. 250.-. Berapa Permen diperolehnya kalau 3 permen harganya Rp. 50,-?'"
                    :answer="a[5]"
                    @answerUpdated="updateA5"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[5]"
                  ></data-input-math>
                  <data-input-math
                    :no="'07. '"
                    :question="'Perjalanan ke sekolah biasanya memakan waktu 35 menit, tetapi karena macet perlu waktu 1 jam 10 menit. Berapa menit lebih lama perjalanan itu?'"
                    :answer="a[6]"
                    @answerUpdated="updateA6"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[6]"
                  ></data-input-math>
                  <data-input-math
                    :no="'08. '"
                    :question="'Seorang ibu menggunakan seperempat (1/4) waktu kerjanya untuk memasak. Bila waktu kerjanya 14 jam sehari. berapa jam sehari ibu ini memasak?'"
                    :answer="a[7]"
                    @answerUpdated="updateA7"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[7]"
                  ></data-input-math>
                  <data-input-math
                    :no="'09. '"
                    :question="'Secarik kain yang panjangnya 9 yard ( 1 yard = 90 cm ) dipotong 7 kaki (1 kaki = 30 cm). Berapa cm. sisa panjang kain itu?'"
                    :answer="a[8]"
                    @answerUpdated="updateA8"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[8]"
                  ></data-input-math>
                  <data-input-math
                    :no="'10. '"
                    :question="'Seorang pegawai mendapat upah Rp 1.250,- sehari. la telah bekerja selama lima hari dan mendapat tambahan uang lembur Rp. 1.800,- untuk lima hari tersebut. Berapa upah seluruhnya?'"
                    :answer="a[9]"
                    @answerUpdated="updateA9"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[9]"
                  ></data-input-math>
                  <data-input-math
                    :no="'11. '"
                    :question="'Berapa jam dibutuhkan sebuah mobil untuk menempuh jarak 400 km, bila kecepatannya 60 km /jam?'"
                    :answer="a[10]"
                    @answerUpdated="updateA10"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[10]"
                  ></data-input-math>
                  <data-input-math
                    :no="'12. '"
                    :question="'Delapan orang menyelesaikan pengecetan sebuah gedung dalam empat hari. Berapa orang dibutuhkan untuk mengecet gedung dalam dua hari?'"
                    :answer="a[11]"
                    @answerUpdated="updateA11"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[11]"
                  ></data-input-math>
                  <data-input-math
                    :no="'13. '"
                    :question="'Seorang pegawai berpenghasilan Rp. 150.000.- per bulan. 2% dari jumlah itu untuk melunasi pajak. Berapa besar pajak yang dibayarnya dalam satu tahun?'"
                    :answer="a[12]"
                    @answerUpdated="updateA12"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[12]"
                  ></data-input-math>
                  <data-input-math
                    :no="'14. '"
                    :question="'Suatu sekolah menerima pendaftaran calon murid sebanyak 1100 orang. Namun yang dapat diterima setelah diseleksi hanya 35%. Berapa anak yang ditolak masuk?'"
                    :answer="a[13]"
                    @answerUpdated="updateA13"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[13]"
                  ></data-input-math>
                  <data-input-math
                    :no="'15. '"
                    :question="'Seorang pedagang membeli sepeda bekas seharga Rp. 30.000.- la menjual lagi dengan keuntungan 15%. Berapa harga penjualan sepeda itu?'"
                    :answer="a[14]"
                    @answerUpdated="updateA14"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[14]"
                  ></data-input-math>
                  <data-input-math
                    :no="'16. '"
                    :question="'Sebuah bak ikan berukuran 13.5 meter kubik. Bila lebar dan dalamnya sama-sama 1,5 meter, berapakah panjang bak ikan itu?'"
                    :answer="a[15]"
                    @answerUpdated="updateA15"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[15]"
                  ></data-input-math>
                  <data-input-math
                    :no="'17. '"
                    :question="'Ibu membeli 11/2 kg beras seharga Rp. 1.125,- . Berapa kg. beras ibu peroleh dengan uang sebanyak Rp. 4.125,-?'"
                    :answer="a[16]"
                    @answerUpdated="updateA16"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[16]"
                  ></data-input-math>
                  <data-input-math
                    :no="'18. '"
                    :question="'Seorang tukang memasang ubin yang berukuran 2 dm x 3 dm. untuk sebuah ruangan yang luas lantainya 3m. x 4m. Berapa banyak ubin yang diperlukan?'"
                    :answer="a[17]"
                    @answerUpdated="updateA17"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[17]"
                  ></data-input-math>
                  <data-input-math
                    :no="'19. '"
                    :question="'Perbaikan sebuah rumah mempekerjakan 3 orang tukang. Mereka masing-masing dibayar 1.000,-; Rp 1.250,-; Rp. 1 500,- per jam. Dalam sehari mereka bekerja selama 7 jam. Setelah selesai mereka dibayar Rp. 315.000.-. Berapa harikah yang diperlukan untuk mengerjakan rumah itu?'"
                    :answer="a[18]"
                    @answerUpdated="updateA18"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[18]"
                  ></data-input-math>
                  <data-input-math
                    :no="'20. '"
                    :question="'Seorang anak menggunakan 1/8 dari uang sakunya untuk membeli alat tulis, dan tiga kali dari itu untuk jajan. Dari sisanya separuh ditabung, dan ia masih punya Rp 1.600,- Berapa uangnya semula?'"
                    :answer="a[19]"
                    @answerUpdated="updateA19"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[19]"
                  ></data-input-math>
                </template>

                <v-layout row warp justify-center align-center text-xs-center v-if="isFinished">
                  <v-flex xs12>
                    <h1>WAKTU ANDA HABIS</h1>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mt-5 justify-end v-if="!isCompleted">
                  <v-flex offset-md6 offset-lg7 offset-xl8>
                    <template v-if="!isStarted && !isFinished">
                      <v-btn color="info" @click="startExam">Start</v-btn>
                      <span>
                        <h2>Waktu pengerjaan {{ prettyTime }}</h2>
                      </span>
                    </template>
                    <v-btn :disabled="!valid" color="success" v-if="isStarted" type="submit">Submit</v-btn>
                    <v-btn color="error" @click="reset" v-if="isStarted && !isFinished">Reset Form</v-btn>
                  </v-flex>
                </v-layout>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-bottom-nav
      :value="true"
      fixed
      v-if="isStarted && !isFinished"
      height="20"
    >Hello {{ applicantName }}! Waktu yang tersisa {{ prettyTime }}</v-bottom-nav>
  </v-container>
</template>

<script>
import dataInputMath from '../../components/Psychotest/Input/DataInputMath'

export default {
  data () {
    return {
      time: 900,
      timer: null,
      isStarted: false,
      isFinished: false,
      a: new Array(20),
      answer: new Array,
      comKey: new Array,
      valid: true,
      rules: {
        required: v => !!v || 'Wajib diisi!',
        number: v => /^[0-9.-/]+$/.test(v) || 'Harus berupa angka!' //Using regex to allow only [0-9] [.] [/]
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
          }
        }, 1000)
      }
    },
    updateA0 (i) { this.a[0] = i; },
    updateA1 (i) { this.a[1] = i; },
    updateA2 (i) { this.a[2] = i; },
    updateA3 (i) { this.a[3] = i; },
    updateA4 (i) { this.a[4] = i; },
    updateA5 (i) { this.a[5] = i; },
    updateA6 (i) { this.a[6] = i; },
    updateA7 (i) { this.a[7] = i; },
    updateA8 (i) { this.a[8] = i; },
    updateA9 (i) { this.a[9] = i; },
    updateA10 (i) { this.a[10] = i; },
    updateA11 (i) { this.a[11] = i; },
    updateA12 (i) { this.a[12] = i; },
    updateA13 (i) { this.a[13] = i; },
    updateA14 (i) { this.a[14] = i; },
    updateA15 (i) { this.a[15] = i; },
    updateA16 (i) { this.a[16] = i; },
    updateA17 (i) { this.a[17] = i; },
    updateA18 (i) { this.a[18] = i; },
    updateA19 (i) { this.a[19] = i; },
    updateValid (i) { this.valid = i; },
    submit () {
      for (let index = 0; index < this.a.length; index++) {
        const el = this.a[index];
        const qNo = index + 1;
        if (el != null || el != undefined) {
          this.answer.push({
            questionNo: qNo,
            answer: el
          })
        }
      }

      const data = {
        examInfoId: this.$route.params.examId,
        examTypeId: 5,
        examAnswer: this.answer
      }
      this.$store.dispatch('postAnswerList', data)
        .then(() => {
          this.$router.push({ name: 'seq', params: { examId: this.$route.params.examId } })
        })
    },
    reset () {
      console.log(this.valid)
      this.$refs.form.reset()
    },
    getAnswer (answerArr) {
      for (let index = 0; index < answerArr.length; index++) {
        const questionNo = answerArr[index].questionNo
        const answer = answerArr[index].answer
        this.a[questionNo - 1] = answer
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
    dataInputMath
  },
  created () {
    this.$store.dispatch('getApplicant', { examInfoId: this.$route.params.examId })
    this.$store.dispatch('getCompletedStatus', { examType: 5, examInfoId: this.$route.params.examId })
      .then(() => {
        if (this.isCompleted) {
          this.$store.dispatch('getAnswerList', { examType: 5, examInfoId: this.$route.params.examId })
        }
      })
  }
}
</script>
