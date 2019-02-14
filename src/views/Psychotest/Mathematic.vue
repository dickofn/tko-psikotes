<template>
  <v-container grid-list-xs>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <v-spacer></v-spacer>
            <h1
              class="headline text-uppercase font-weight-light text-xs-center"
            >Psikotes - Berhitung</h1>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" v-model="valid">
                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <h1>INSTRUKSI</h1>
                    <p>
                      <b>&rarr;</b> Soal merupakan soal cerita berhitung matematika. Baca soal dengan teliti lalu isi jawaban Anda di bawah soal tersebut.
                      <br>
                      <b>&rarr;</b> Jawaban merupakan angka, bila jawaban desimal maka jawablah hingga dua angka desimal.
                      <br>
                      <b>&rarr;</b> Pemisah angka desimal menggunakan simbol titik ('.') dan bukan koma (',').
                    </p>
                  </v-flex>
                </v-layout>

                <template v-if="isStarted && !isFinished">
                  <data-input-math
                    :no="'01. '"
                    :question="'Seorang anak mempunyai 12 pensil. 6 pensil dipinjam temannya. Berapa pensil sisanya?'"
                    :answer="a[0]"
                    @answerUpdated=updateA0
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-math>
                  <data-input-math
                    :no="'02. '"
                    :question="'Seorang anak mempunyai 12 pensil. 6 pensil dipinjam temannya. Berapa pensil sisanya?'"
                    :answer="a[1]"
                    @answerUpdated=updateA1
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-math>
                  <data-input-math
                    :no="'03. '"
                    :question="'Seorang anak mempunyai 12 pensil. 6 pensil dipinjam temannya. Berapa pensil sisanya?'"
                    :answer="a[2]"
                    @answerUpdated=updateA2
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-math>
                  <data-input-math
                    :no="'04. '"
                    :question="'Seorang anak mempunyai 12 pensil. 6 pensil dipinjam temannya. Berapa pensil sisanya?'"
                    :answer="a[3]"
                    @answerUpdated=updateA3
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-math>
                  <data-input-math
                    :no="'05. '"
                    :question="'Seorang anak mempunyai 12 pensil. 6 pensil dipinjam temannya. Berapa pensil sisanya?'"
                    :answer="a[4]"
                    @answerUpdated=updateA4
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-math>
                  <data-input-math
                    :no="'06. '"
                    :question="'Seorang anak mempunyai 12 pensil. 6 pensil dipinjam temannya. Berapa pensil sisanya?'"
                    :answer="a[5]"
                    @answerUpdated=updateA5
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-math>
                  <data-input-math
                    :no="'07. '"
                    :question="'Seorang anak mempunyai 12 pensil. 6 pensil dipinjam temannya. Berapa pensil sisanya?'"
                    :answer="a[6]"
                    @answerUpdated=updateA6
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-math>
                  <data-input-math
                    :no="'08. '"
                    :question="'Seorang anak mempunyai 12 pensil. 6 pensil dipinjam temannya. Berapa pensil sisanya?'"
                    :answer="a[7]"
                    @answerUpdated=updateA7
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-math>
                  <data-input-math
                    :no="'09. '"
                    :question="'Seorang anak mempunyai 12 pensil. 6 pensil dipinjam temannya. Berapa pensil sisanya?'"
                    :answer="a[8]"
                    @answerUpdated=updateA8
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-math>
                  <data-input-math
                    :no="'10. '"
                    :question="'Seorang anak mempunyai 12 pensil. 6 pensil dipinjam temannya. Berapa pensil sisanya?'"
                    :answer="a[9]"
                    @answerUpdated=updateA9
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-math>
                  <data-input-math
                    :no="'11. '"
                    :question="'Seorang anak mempunyai 12 pensil. 6 pensil dipinjam temannya. Berapa pensil sisanya?'"
                    :answer="a[10]"
                    @answerUpdated=updateA10
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-math>
                  <data-input-math
                    :no="'12. '"
                    :question="'Seorang anak mempunyai 12 pensil. 6 pensil dipinjam temannya. Berapa pensil sisanya?'"
                    :answer="a[11]"
                    @answerUpdated=updateA11
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-math>
                  <data-input-math
                    :no="'13. '"
                    :question="'Seorang anak mempunyai 12 pensil. 6 pensil dipinjam temannya. Berapa pensil sisanya?'"
                    :answer="a[12]"
                    @answerUpdated=updateA12
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-math>
                  <data-input-math
                    :no="'14. '"
                    :question="'Seorang anak mempunyai 12 pensil. 6 pensil dipinjam temannya. Berapa pensil sisanya?'"
                    :answer="a[13]"
                    @answerUpdated=updateA13
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-math>
                  <data-input-math
                    :no="'15. '"
                    :question="'Seorang anak mempunyai 12 pensil. 6 pensil dipinjam temannya. Berapa pensil sisanya?'"
                    :answer="a[14]"
                    @answerUpdated=updateA14
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-math>
                  <data-input-math
                    :no="'16. '"
                    :question="'Seorang anak mempunyai 12 pensil. 6 pensil dipinjam temannya. Berapa pensil sisanya?'"
                    :answer="a[15]"
                    @answerUpdated=updateA15
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-math>
                  <data-input-math
                    :no="'17. '"
                    :question="'Seorang anak mempunyai 12 pensil. 6 pensil dipinjam temannya. Berapa pensil sisanya?'"
                    :answer="a[16]"
                    @answerUpdated=updateA16
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-math>
                  <data-input-math
                    :no="'18. '"
                    :question="'Seorang anak mempunyai 12 pensil. 6 pensil dipinjam temannya. Berapa pensil sisanya?'"
                    :answer="a[17]"
                    @answerUpdated=updateA17
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-math>
                  <data-input-math
                    :no="'19. '"
                    :question="'Seorang anak mempunyai 12 pensil. 6 pensil dipinjam temannya. Berapa pensil sisanya?'"
                    :answer="a[18]"
                    @answerUpdated=updateA18
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-math>
                  <data-input-math
                    :no="'20. '"
                    :question="'Seorang anak mempunyai 12 pensil. 6 pensil dipinjam temannya. Berapa pensil sisanya?'"
                    :answer="a[19]"
                    @answerUpdated=updateA19
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-math>
                </template>

                <v-layout row warp justify-center align-center text-xs-center v-if="isFinished">
                  <v-flex xs12>
                    <h1>WAKTU ANDA HABIS</h1>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mt-5 justify-end>
                  <v-flex offset-md6 offset-lg7 offset-xl8>
                    <template v-if="!isStarted && !isFinished">
                      <v-btn color="info" @click="startTest">Start</v-btn>
                      <span>
                        <h2>Waktu pengerjaan {{ prettyTime }}</h2>
                      </span>
                    </template>
                    <v-btn :disabled="!valid" color="success" v-if="isStarted">Submit</v-btn>
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
    >Waktu yang tersisa {{ prettyTime }}</v-bottom-nav>
  </v-container>
</template>

<script>
import dataInputMath from '../../components/Psychotest/DataInputMath'

export default {
  data () {
    return {
      time: 900,
      timer: null,
      isStarted: false,
      isFinished: false,
      a: new Array(20),
      valid: true,
      rules: {
        required: v => !!v || 'Wajib diisi!',
        number: v => !isNaN(v) || 'Harus berupa angka!'
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
    }
  },
  methods: {
    startTest () {
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
    updateA0 (i) { this.a[0] = i; console.log(this.a[0])},
    updateA1 (i) { this.a[1] = i; console.log(this.a[1])},
    updateA2 (i) { this.a[2] = i; console.log(this.a[2])},
    updateA3 (i) { this.a[3] = i; console.log(this.a[3])},
    updateA4 (i) { this.a[4] = i; console.log(this.a[4])},
    updateA5 (i) { this.a[5] = i; console.log(this.a[5])},
    updateA6 (i) { this.a[6] = i; console.log(this.a[6])},
    updateA7 (i) { this.a[7] = i; console.log(this.a[7])},
    updateA8 (i) { this.a[8] = i; console.log(this.a[8])},
    updateA9 (i) { this.a[9] = i; console.log(this.a[9])},
    updateA10 (i) { this.a[10] = i; console.log(this.a[10])},
    updateA11 (i) { this.a[11] = i; console.log(this.a[11])},
    updateA12 (i) { this.a[12] = i; console.log(this.a[12])},
    updateA13 (i) { this.a[13] = i; console.log(this.a[13])},
    updateA14 (i) { this.a[14] = i; console.log(this.a[14])},
    updateA15 (i) { this.a[15] = i; console.log(this.a[15])},
    updateA16 (i) { this.a[16] = i; console.log(this.a[16])},
    updateA17 (i) { this.a[17] = i; console.log(this.a[17])},
    updateA18 (i) { this.a[18] = i; console.log(this.a[18])},
    updateA19 (i) { this.a[19] = i; console.log(this.a[19])},
    updateA20 (i) { this.a[20] = i; console.log(this.a[20])},
    updateValid (i) { this.valid = i; },
    reset () {
      console.log(this.valid)
      this.$refs.form.reset()
    }
  },
  components: {
    dataInputMath
  }
}
</script>
