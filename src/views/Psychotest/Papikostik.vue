<template>
  <v-container grid-list-xs>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <v-spacer></v-spacer>
            <h1
              class="headline text-uppercase font-weight-light text-xs-center"
            >Psikotes - Papikostik</h1>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form">
                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <h1>INSTRUKSI</h1>
                    <p>
                      <b>&rarr;</b> Bacalah pernyataan A dan pernyataan B. 
                      <br>
                      <b>&rarr;</b> Pilihlah satu pernyataan yang menurut kalian paling sesuai dengan diri anda.
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
                    @a30Updated="updateA30"
                    @a31Updated="updateA31"
                    @a32Updated="updateA32"
                    @a33Updated="updateA33"
                    @a34Updated="updateA34"
                    @a35Updated="updateA35"
                    @a36Updated="updateA36"
                    @a37Updated="updateA37"
                    @a38Updated="updateA38"
                    @a39Updated="updateA39"
                    @a40Updated="updateA40"
                    @a41Updated="updateA41"
                    @a42Updated="updateA42"
                    @a43Updated="updateA43"
                    @a44Updated="updateA44"
                    @a45Updated="updateA45"
                    @a46Updated="updateA46"
                    @a47Updated="updateA47"
                    @a48Updated="updateA48"
                    @a49Updated="updateA49"
                    @a50Updated="updateA50"
                    @a51Updated="updateA51"
                    @a52Updated="updateA52"
                    @a53Updated="updateA53"
                    @a54Updated="updateA54"
                    @a55Updated="updateA55"
                    @a56Updated="updateA56"
                    @a57Updated="updateA57"
                    @a58Updated="updateA58"
                    @a59Updated="updateA59"
                    @a60Updated="updateA60"
                    @a61Updated="updateA61"
                    @a62Updated="updateA62"
                    @a63Updated="updateA63"
                    @a64Updated="updateA64"
                    @a65Updated="updateA65"
                    @a66Updated="updateA66"
                    @a67Updated="updateA67"
                    @a68Updated="updateA68"
                    @a69Updated="updateA69"
                    @a70Updated="updateA70"
                    @a71Updated="updateA71"
                    @a72Updated="updateA72"
                    @a73Updated="updateA73"
                    @a74Updated="updateA74"
                    @a75Updated="updateA75"
                    @a76Updated="updateA76"
                    @a77Updated="updateA77"
                    @a78Updated="updateA78"
                    @a79Updated="updateA79"
                    @a80Updated="updateA80"
                    @a81Updated="updateA81"
                    @a82Updated="updateA82"
                    @a83Updated="updateA83"
                    @a84Updated="updateA84"
                    @a85Updated="updateA85"
                    @a86Updated="updateA86"
                    @a87Updated="updateA87"
                    @a88Updated="updateA88"
                    @a89Updated="updateA89"
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
                      <v-btn color="info" :disabled="currPage==5" @click="pageNext">Next &rarr;</v-btn>
                    </template>
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
import papikostikPage1 from '../../components/Psychotest/Papikostik/PapikostikPage1'
import papikostikPage2 from '../../components/Psychotest/Papikostik/PapikostikPage2'
import papikostikPage3 from '../../components/Psychotest/Papikostik/PapikostikPage3'
import papikostikPage4 from '../../components/Psychotest/Papikostik/PapikostikPage4'
import papikostikPage5 from '../../components/Psychotest/Papikostik/PapikostikPage5'

export default {
  data () {
    return {
      time: 1200,
      timer: null,
      isStarted: false,
      isFinished: false,
      currPage: 1,
      a: new Array(90),
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
        return 'papikostikPage1'
      } else if (this.currPage == 2) {
        return 'papikostikPage2'
      } else if (this.currPage == 3) {
        return 'papikostikPage3'
      } else if (this.currPage == 4) {
        return 'papikostikPage4'
      } else {
        return 'papikostikPage5'
      }
    },
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
    updateA30 (i) { this.a[30] = i; this.checkA(); },
    updateA31 (i) { this.a[31] = i; this.checkA(); },
    updateA32 (i) { this.a[32] = i; this.checkA(); },
    updateA33 (i) { this.a[33] = i; this.checkA(); },
    updateA34 (i) { this.a[34] = i; this.checkA(); },
    updateA35 (i) { this.a[35] = i; this.checkA(); },
    updateA36 (i) { this.a[36] = i; this.checkA(); },
    updateA37 (i) { this.a[37] = i; this.checkA(); },
    updateA38 (i) { this.a[38] = i; this.checkA(); },
    updateA39 (i) { this.a[39] = i; this.checkA(); },
    updateA40 (i) { this.a[40] = i; this.checkA(); },
    updateA41 (i) { this.a[41] = i; this.checkA(); },
    updateA42 (i) { this.a[42] = i; this.checkA(); },
    updateA43 (i) { this.a[43] = i; this.checkA(); },
    updateA44 (i) { this.a[44] = i; this.checkA(); },
    updateA45 (i) { this.a[45] = i; this.checkA(); },
    updateA46 (i) { this.a[46] = i; this.checkA(); },
    updateA47 (i) { this.a[47] = i; this.checkA(); },
    updateA48 (i) { this.a[48] = i; this.checkA(); },
    updateA49 (i) { this.a[49] = i; this.checkA(); },
    updateA50 (i) { this.a[50] = i; this.checkA(); },
    updateA51 (i) { this.a[51] = i; this.checkA(); },
    updateA52 (i) { this.a[52] = i; this.checkA(); },
    updateA53 (i) { this.a[53] = i; this.checkA(); },
    updateA54 (i) { this.a[54] = i; this.checkA(); },
    updateA55 (i) { this.a[55] = i; this.checkA(); },
    updateA56 (i) { this.a[56] = i; this.checkA(); },
    updateA57 (i) { this.a[57] = i; this.checkA(); },
    updateA58 (i) { this.a[58] = i; this.checkA(); },
    updateA59 (i) { this.a[59] = i; this.checkA(); },
    updateA60 (i) { this.a[60] = i; this.checkA(); },
    updateA61 (i) { this.a[61] = i; this.checkA(); },
    updateA62 (i) { this.a[62] = i; this.checkA(); },
    updateA63 (i) { this.a[63] = i; this.checkA(); },
    updateA64 (i) { this.a[64] = i; this.checkA(); },
    updateA65 (i) { this.a[65] = i; this.checkA(); },
    updateA66 (i) { this.a[66] = i; this.checkA(); },
    updateA67 (i) { this.a[67] = i; this.checkA(); },
    updateA68 (i) { this.a[68] = i; this.checkA(); },
    updateA69 (i) { this.a[69] = i; this.checkA(); },
    updateA70 (i) { this.a[70] = i; this.checkA(); },
    updateA71 (i) { this.a[71] = i; this.checkA(); },
    updateA72 (i) { this.a[72] = i; this.checkA(); },
    updateA73 (i) { this.a[73] = i; this.checkA(); },
    updateA74 (i) { this.a[74] = i; this.checkA(); },
    updateA75 (i) { this.a[75] = i; this.checkA(); },
    updateA76 (i) { this.a[76] = i; this.checkA(); },
    updateA77 (i) { this.a[77] = i; this.checkA(); },
    updateA78 (i) { this.a[78] = i; this.checkA(); },
    updateA79 (i) { this.a[79] = i; this.checkA(); },
    updateA80 (i) { this.a[80] = i; this.checkA(); },
    updateA81 (i) { this.a[81] = i; this.checkA(); },
    updateA82 (i) { this.a[82] = i; this.checkA(); },
    updateA83 (i) { this.a[83] = i; this.checkA(); },
    updateA84 (i) { this.a[84] = i; this.checkA(); },
    updateA85 (i) { this.a[85] = i; this.checkA(); },
    updateA86 (i) { this.a[86] = i; this.checkA(); },
    updateA87 (i) { this.a[87] = i; this.checkA(); },
    updateA88 (i) { this.a[88] = i; this.checkA(); },
    updateA89 (i) { this.a[89] = i; this.checkA(); },
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
      if (this.currPage < 5) {
        this.currPage++;
      }
    },
  },
  components: {
    papikostikPage1,
    papikostikPage2,
    papikostikPage3,
    papikostikPage4,
    papikostikPage5
  }
}
</script>
