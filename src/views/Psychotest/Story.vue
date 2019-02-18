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
import dataInputStory from '../../components/Psychotest/Input/DataInputStory'

export default {
  data () {
    return {
      time: 1200,
      timer: null,
      isStarted: false,
      isFinished: false,
      a: new Array(30),
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
    updateA25 (i) { this.a[25] = i; },
    updateA26 (i) { this.a[26] = i; },
    updateA27 (i) { this.a[27] = i; },
    updateA28 (i) { this.a[28] = i; },
    updateA29 (i) { this.a[29] = i; },
    updateValid (i) { this.valid = i; },
    reset () {
      console.log(this.valid)
      this.$refs.form.reset()
    }
  },
  components: {
    dataInputStory
  }
}
</script>
