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
              <v-form ref="form" v-model="valid">
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

                <template v-if="isStarted && !isFinished">
                  <data-input-seq
                    :no="'01.'"
                    :q="[5, 8, 11, 14, 17, 20]"
                    @answerUpdated="updateA0"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'02.'"
                    :q="[9, 16, 23, 30, 37, 44]"
                    @answerUpdated="updateA1"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'03.'"
                    :q="[39, 35, 31, 27, 23, 19]"
                    @answerUpdated="updateA2"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'04.'"
                    :q="[3, 6, 12, 24, 48, 96]"
                    @answerUpdated="updateA3"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'05.'"
                    :q="[21, 26, 24, 29, 27, 32]"
                    @answerUpdated="updateA4"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'06.'"
                    :q="[3, 4, 6, 9, 13, 18]"
                    @answerUpdated="updateA5"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'07.'"
                    :q="[18, 15, 22, 19, 26, 23]"
                    @answerUpdated="updateA6"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'08.'"
                    :q="[81, 27, 9, 3, 1, '1/3']"
                    @answerUpdated="updateA7"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'09.'"
                    :q="[32, 27, 22, 17, 12, 7]"
                    @answerUpdated="updateA8"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'10.'"
                    :q="[6, 10, 30, 34, 102, 106]"
                    @answerUpdated="updateA9"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'11.'"
                    :q="[52, 52, 26, 26, 13, 13]"
                    @answerUpdated="updateA10"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'12.'"
                    :q="[17, 2, 14, 2, 11, 2]"
                    @answerUpdated="updateA11"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'13.'"
                    :q="[11, 7, 16, 12, 21, 17]"
                    @answerUpdated="updateA12"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'14.'"
                    :q="['1/3', 1, 3, 9, 11, 33]"
                    @answerUpdated="updateA13"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'15.'"
                    :q="[2, 8, 7, 28, 27, 108]"
                    @answerUpdated="updateA14"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'16.'"
                    :q="[1, 3, 5, 7, 11, 13]"
                    @answerUpdated="updateA15"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'17.'"
                    :q="[29, 28, 26, 23, 19, 14]"
                    @answerUpdated="updateA16"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'18.'"
                    :q="[9, 16, 25, 36, 49, 64]"
                    @answerUpdated="updateA17"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'19.'"
                    :q="[7, 8, 21, 4, 63, 2]"
                    @answerUpdated="updateA18"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'20.'"
                    :q="[4, 4, 8, 24, 96, 480]"
                    @answerUpdated="updateA19"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'21.'"
                    :q="[42, 21, 22, 11, 12, 6]"
                    @answerUpdated="updateA20"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'22.'"
                    :q="[11, 13, 17, 25, 41, 73]"
                    @answerUpdated="updateA21"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'23.'"
                    :q="[31, 3, 37, 6, 41, 12]"
                    @answerUpdated="updateA22"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'24.'"
                    :q="[-10, -5, -20, -15, -60, -55]"
                    @answerUpdated="updateA23"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-seq>
                  <data-input-seq
                    :no="'25.'"
                    :q="[42, 38, 19, 15, 7.5, 3.5]"
                    @answerUpdated="updateA24"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-seq>
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
import dataInputSeq from '../../components/Psychotest/Input/DataInputSeq'

export default {
  data () {
    return {
      time: 1200,
      timer: null,
      isStarted: false,
      isFinished: false,
      a: new Array(25),
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
    reset () {
      console.log(this.valid)
      this.$refs.form.reset()
    }
  },
  components: {
    dataInputSeq
  }
}
</script>
