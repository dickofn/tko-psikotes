<template>
  <v-container grid-list-xs>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <v-spacer></v-spacer>
            <h1
              class="headline text-uppercase font-weight-light text-xs-center"
            >Psikotes - Deret Bilangan TKD-6</h1>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" v-model="valid" @submit.prevent="submit">
                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <h1>INSTRUKSI</h1>
                    <p>
                      <b>&rarr;</b> Soal merupakan soal deret aritmatika. Anda akan diberikan enam deret bilangan yang memiliki pola.
                      <br>
                      <b>&rarr;</b> Anda silahkan mengisi dua deret bilangan selanjutnya, sesuai dengan pola enam angka yang sudah diberikan.
                      <br>
                      <b>&rarr;</b> Jika deret sudah menggunakan pecahan maka isi dengan pecahan ('/') tetapi jika tidak maka isi dengan desimal hingga dua angka desimal.
                      <br>
                      <b>&rarr;</b> Pemisah angka desimal menggunakan simbol titik ('.') dan bukan koma (',').
                    </p>
                  </v-flex>
                </v-layout>

                <template v-if="(isStarted && !isFinished) || isCompleted">
                  <data-input-seq
                    :no="'01.'"
                    :q="[5, 8, 11, 14, 17, 20]"
                    :a="a[0]"
                    @answerUpdated="updateA0"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[0]"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'02.'"
                    :q="[9, 16, 23, 30, 37, 44]"
                    :a="a[1]"
                    @answerUpdated="updateA1"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[1]"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'03.'"
                    :q="[39, 35, 31, 27, 23, 19]"
                    :a="a[2]"
                    @answerUpdated="updateA2"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[2]"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'04.'"
                    :q="[3, 6, 12, 24, 48, 96]"
                    :a="a[3]"
                    @answerUpdated="updateA3"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[3]"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'05.'"
                    :q="[21, 26, 24, 29, 27, 32]"
                    :a="a[4]"
                    @answerUpdated="updateA4"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[4]"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'06.'"
                    :q="[3, 4, 6, 9, 13, 18]"
                    :a="a[5]"
                    @answerUpdated="updateA5"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[5]"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'07.'"
                    :q="[18, 15, 22, 19, 26, 23]"
                    :a="a[6]"
                    @answerUpdated="updateA6"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[6]"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'08.'"
                    :q="[81, 27, 9, 3, 1, '1/3']"
                    :a="a[7]"
                    @answerUpdated="updateA7"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[7]"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'09.'"
                    :q="[32, 27, 22, 17, 12, 7]"
                    :a="a[8]"
                    @answerUpdated="updateA8"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[8]"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'10.'"
                    :q="[6, 10, 30, 34, 102, 106]"
                    :a="a[9]"
                    @answerUpdated="updateA9"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[9]"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'11.'"
                    :q="[52, 52, 26, 26, 13, 13]"
                    :a="a[10]"
                    @answerUpdated="updateA10"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[10]"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'12.'"
                    :q="[17, 2, 14, 2, 11, 2]"
                    :a="a[11]"
                    @answerUpdated="updateA11"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[11]"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'13.'"
                    :q="[11, 7, 16, 12, 21, 17]"
                    :a="a[12]"
                    @answerUpdated="updateA12"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[12]"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'14.'"
                    :q="['1/3', 1, 3, 9, 11, 33]"
                    :a="a[13]"
                    @answerUpdated="updateA13"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[13]"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'15.'"
                    :q="[2, 8, 7, 28, 27, 108]"
                    :a="a[14]"
                    @answerUpdated="updateA14"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[14]"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'16.'"
                    :q="[1, 3, 5, 7, 11, 13]"
                    :a="a[15]"
                    @answerUpdated="updateA15"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[15]"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'17.'"
                    :q="[29, 28, 26, 23, 19, 14]"
                    :a="a[16]"
                    @answerUpdated="updateA16"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[16]"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'18.'"
                    :q="[9, 16, 25, 36, 49, 64]"
                    :a="a[17]"
                    @answerUpdated="updateA17"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[17]"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'19.'"
                    :q="[7, 8, 21, 4, 63, 2]"
                    :a="a[18]"
                    @answerUpdated="updateA18"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[18]"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'20.'"
                    :q="[4, 4, 8, 24, 96, 480]"
                    :a="a[19]"
                    @answerUpdated="updateA19"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[19]"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'21.'"
                    :q="[42, 21, 22, 11, 12, 6]"
                    :a="a[20]"
                    @answerUpdated="updateA20"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[20]"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'22.'"
                    :q="[11, 13, 17, 25, 41, 73]"
                    :a="a[21]"
                    @answerUpdated="updateA21"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[21]"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'23.'"
                    :q="[31, 3, 37, 6, 41, 12]"
                    :a="a[22]"
                    @answerUpdated="updateA22"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[22]"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'24.'"
                    :q="[-10, -5, -20, -15, -60, -55]"
                    :a="a[23]"
                    @answerUpdated="updateA23"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[23]"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'25.'"
                    :q="[42, 38, 19, 15, 7.5, 3.5]"
                    :a="a[24]"
                    @answerUpdated="updateA24"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                    :key="comKey[24]"
                  ></data-input-seq>
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
import dataInputSeq from '../../components/Psychotest/Input/DataInputSeq'

export default {
  data () {
    return {
      time: 1200,
      timer: null,
      isStarted: false,
      isFinished: false,
      a: new Array(25),
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
    updateA20 (i) { this.a[20] = i; },
    updateA21 (i) { this.a[21] = i; },
    updateA22 (i) { this.a[22] = i; },
    updateA23 (i) { this.a[23] = i; },
    updateA24 (i) { this.a[24] = i; },
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
        examTypeId: 6,
        examAnswer: this.answer
      }
      this.$store.dispatch('postAnswerList', data)
        .then(() => {
          this.$router.push({ name: 'pap', params: { examId: this.$route.params.examId } })
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
    dataInputSeq
  },
  created () {
    this.$store.dispatch('getApplicant', { examInfoId: this.$route.params.examId })
    this.$store.dispatch('getCompletedStatus', { examType: 6, examInfoId: this.$route.params.examId })
      .then(() => {
        if (this.isCompleted) {
          this.$store.dispatch('getAnswerList', { examType: 6, examInfoId: this.$route.params.examId })
        }
      })
  }
}
</script>
