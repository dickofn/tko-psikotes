<template>
  <v-container grid-list-xs>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <v-spacer></v-spacer>
            <h1 class="headline text-uppercase font-weight-light text-xs-center">Psikotes - Berhitung</h1>
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
                  <!-- Test inside -->
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

    <v-bottom-nav :value="true" fixed v-if="isStarted && !isFinished" height="20">Waktu yang tersisa {{ prettyTime }}</v-bottom-nav>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      time: 480,
      timer: null,
      isStarted: false,
      isFinished: false,
      m: new Array(20),
      valid: true,
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
    updateM0 (i) { this.m[0] = i; },
    updateM1 (i) { this.m[1] = i; },
    updateM2 (i) { this.m[2] = i; },
    updateM3 (i) { this.m[3] = i; },
    updateM4 (i) { this.m[4] = i; },
    updateM5 (i) { this.m[5] = i; },
    updateM6 (i) { this.m[6] = i; },
    updateM7 (i) { this.m[7] = i; },
    updateM8 (i) { this.m[8] = i; },
    updateM9 (i) { this.m[9] = i; },
    updateM10 (i) { this.m[10] = i; },
    updateM11 (i) { this.m[11] = i; },
    updateM12 (i) { this.m[12] = i; },
    updateM13 (i) { this.m[13] = i; },
    updateM14 (i) { this.m[14] = i; },
    updateM15 (i) { this.m[15] = i; },
    updateM16 (i) { this.m[16] = i; },
    updateM17 (i) { this.m[17] = i; },
    updateM18 (i) { this.m[18] = i; },
    updateM19 (i) { this.m[19] = i; },
    updateM20 (i) { this.m[20] = i; },
    updateValid (i) { this.valid = i; },
    reset () {
      console.log(this.valid)
      this.$refs.form.reset()
    }
  }
}
</script>
