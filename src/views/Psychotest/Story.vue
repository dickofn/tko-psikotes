<template>
  <v-container grid-list-xs>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <v-spacer></v-spacer>
            <h1
              class="headline text-uppercase font-weight-light text-xs-center"
            >Psikotes - Bacaan TKD-1</h1>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form">
                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <h1>INSTRUKSI</h1>
                    <p>
                      <b>&rarr;</b> Bacalah baik-baik satu bacaan, kemudian jawablah setiap pertanyaan mengenai isi bacaan tersebut dengan memilih satu jawaban yang PALING TEPAT.
                      <br>
                      <b>&rarr;</b> Jawablah pertanyaan-pertanyaan berdasarkan isi yang tertulis maupun yang dapat disimpulkan dari bacaan.
                    </p>
                  </v-flex>
                </v-layout>

                <template v-if="isStarted && !isFinished">
                  <component
                    :is="page"
                    @a0Updated="updateA0"
                    @a1Updated="updateA1"
                    @a2Updated="updateA2"
                    @a3Updated="updateA3"
                    @a4Updated="updateA4"
                    @a5Updated="updateA5"
                    @a6Updated="updateA6"
                    @a7Updated="updateA7"
                    @a8Updated="updateA8"
                    @a9Updated="updateA9"
                    @a10Updated="updateA10"
                    @a11Updated="updateA11"
                    @a12Updated="updateA12"
                    @a13Updated="updateA13"
                    @a14Updated="updateA14"
                    @a15Updated="updateA15"
                    @a16Updated="updateA16"
                    @a17Updated="updateA17"
                    @a18Updated="updateA18"
                    @a19Updated="updateA19"
                    @a20Updated="updateA20"
                    @a21Updated="updateA21"
                    @a22Updated="updateA22"
                    @a23Updated="updateA23"
                    @a24Updated="updateA24"
                    @a25Updated="updateA25"
                    @a26Updated="updateA26"
                    @a27Updated="updateA27"
                    @a28Updated="updateA28"
                    @a29Updated="updateA29"
                    :a="a"
                  ></component>
                </template>

                <v-layout row warp justify-center align-center text-xs-center v-if="isFinished">
                  <v-flex xs12>
                    <h1>WAKTU ANDA HABIS</h1>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mt-5 justify-end>
                  <v-flex offset-md6 offset-lg7 offset-xl8>
                    <template v-if="isStarted && !isFinished">
                      <v-btn color="info" :disabled="currPage==1" @click="pageBack">&larr; Back</v-btn>
                      <v-btn color="info" :disabled="currPage==3" @click="pageNext">Next &rarr;</v-btn>
                    </template>
                  </v-flex>
                </v-layout>
                <v-layout row wrap mt-5 justify-end>
                  <v-flex offset-md6 offset-lg7 offset-xl8>
                    <template v-if="!isStarted && !isFinished">
                      <v-btn color="info" @click="startExam">Start</v-btn>
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
import storyPage1 from '../../components/Psychotest/Story/StoryPage1'
import storyPage2 from '../../components/Psychotest/Story/StoryPage2'
import storyPage3 from '../../components/Psychotest/Story/StoryPage3'

export default {
  data () {
    return {
      time: 900,
      timer: null,
      isStarted: false,
      isFinished: false,
      currPage: 1,
      a: new Array(30),
      valid: false,
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
    page () {
      if (this.currPage == 1) {
        return 'storyPage1'
      } else if (this.currPage == 2) {
        return 'storyPage2'
      } else {
        return 'storyPage3'
      }
    },
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
            this.valid = true
          }
        }, 1000)
      }
    },
    checkA () {
      var checkEl = true;
      for (let index = 0; index < this.a.length; index++) {
        const element = this.a[index];
        if (element == null || element == undefined || element == '') { checkEl = false; break }
      }
      if (checkEl || this.isFinished) { this.valid = true }
      else { this.valid = false }
    },
    updateA0 (i) { this.a[0] = i; this.checkA(); },
    updateA1 (i) { this.a[1] = i; this.checkA(); },
    updateA2 (i) { this.a[2] = i; this.checkA(); },
    updateA3 (i) { this.a[3] = i; this.checkA(); },
    updateA4 (i) { this.a[4] = i; this.checkA(); },
    updateA5 (i) { this.a[5] = i; this.checkA(); },
    updateA6 (i) { this.a[6] = i; this.checkA(); },
    updateA7 (i) { this.a[7] = i; this.checkA(); },
    updateA8 (i) { this.a[8] = i; this.checkA(); },
    updateA9 (i) { this.a[9] = i; this.checkA(); },
    updateA10 (i) { this.a[10] = i; this.checkA(); },
    updateA11 (i) { this.a[11] = i; this.checkA(); },
    updateA12 (i) { this.a[12] = i; this.checkA(); },
    updateA13 (i) { this.a[13] = i; this.checkA(); },
    updateA14 (i) { this.a[14] = i; this.checkA(); },
    updateA15 (i) { this.a[15] = i; this.checkA(); },
    updateA16 (i) { this.a[16] = i; this.checkA(); },
    updateA17 (i) { this.a[17] = i; this.checkA(); },
    updateA18 (i) { this.a[18] = i; this.checkA(); },
    updateA19 (i) { this.a[19] = i; this.checkA(); },
    updateA20 (i) { this.a[20] = i; this.checkA(); },
    updateA21 (i) { this.a[21] = i; this.checkA(); },
    updateA22 (i) { this.a[22] = i; this.checkA(); },
    updateA23 (i) { this.a[23] = i; this.checkA(); },
    updateA24 (i) { this.a[24] = i; this.checkA(); },
    updateA25 (i) { this.a[25] = i; this.checkA(); },
    updateA26 (i) { this.a[26] = i; this.checkA(); },
    updateA27 (i) { this.a[27] = i; this.checkA(); },
    updateA28 (i) { this.a[28] = i; this.checkA(); },
    updateA29 (i) { this.a[29] = i; this.checkA(); },
    updateValid (i) {
      const isArrEmpty = false
      for (let index = 0; index < this.a.length; index++) {
        const element = this.a[index];
        if (element == null || element == undefined || element == "") isArrEmpty == true;
      }

      if (isArrEmpty) {
        this.valid = false
      } else {
        this.valid = i;
      }
    },
    reset () {
      console.log(this.valid)
      this.$refs.form.reset()
    },
    pageBack () {
      if (this.currPage > 1) {
        this.currPage--;
      }
    },
    pageNext () {
      if (this.currPage < 3) {
        this.currPage++;
      }
    },
  },
  components: {
    storyPage1,
    storyPage2,
    storyPage3
  }
}
</script>
