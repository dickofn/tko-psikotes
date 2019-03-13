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
              <v-form ref="form" @submit.prevent="submit">
                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <h1>INSTRUKSI</h1>
                    <p>
                      <b>&rarr;</b> Bacalah pernyataan A dan pernyataan B.
                      <br>
                      <b>&rarr;</b> Pilihlah satu pernyataan yang menurut anda paling sesuai dengan diri anda.
                    </p>
                  </v-flex>
                </v-layout>

                <template v-if="(isStarted && !isFinished) || isCompleted">
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
                    :key="comKey"
                  ></component>
                </template>

                <v-layout row warp justify-center align-center text-xs-center v-if="isFinished">
                  <v-flex xs12>
                    <h1>WAKTU ANDA HABIS</h1>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mt-5 justify-end>
                  <v-flex offset-md6 offset-lg7 offset-xl8>
                    <template v-if="(isStarted && !isFinished) || isCompleted">
                      <v-btn color="info" :disabled="currPage==1" @click="pageBack">&larr; Back</v-btn>
                      <v-btn color="info" :disabled="currPage==5" @click="pageNext">Next &rarr;</v-btn>
                    </template>
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
      answer: new Array,
      comKey: 0,
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
    updateAnswer (i) {
      for (let index = 0; index < this.answer.length; index++) {
        const n = this.answer[index].questionNo;
        const a = this.answer[index].answer;
        if (n == i.index + 1 && a) {
          this.answer.splice(index, 1);
          break;
        }
      }
      this.answer.push({
        questionNo: i.index + 1,
        answer: i.i
      })
    },
    updateA0 (i) { this.a[0] = i; this.checkA(); this.updateAnswer({ index: 0, i }) },
    updateA1 (i) { this.a[1] = i; this.checkA(); this.updateAnswer({ index: 1, i }) },
    updateA2 (i) { this.a[2] = i; this.checkA(); this.updateAnswer({ index: 2, i }) },
    updateA3 (i) { this.a[3] = i; this.checkA(); this.updateAnswer({ index: 3, i }) },
    updateA4 (i) { this.a[4] = i; this.checkA(); this.updateAnswer({ index: 4, i }) },
    updateA5 (i) { this.a[5] = i; this.checkA(); this.updateAnswer({ index: 5, i }) },
    updateA6 (i) { this.a[6] = i; this.checkA(); this.updateAnswer({ index: 6, i }) },
    updateA7 (i) { this.a[7] = i; this.checkA(); this.updateAnswer({ index: 7, i }) },
    updateA8 (i) { this.a[8] = i; this.checkA(); this.updateAnswer({ index: 8, i }) },
    updateA9 (i) { this.a[9] = i; this.checkA(); this.updateAnswer({ index: 9, i }) },
    updateA10 (i) { this.a[10] = i; this.checkA(); this.updateAnswer({ index: 10, i }) },
    updateA11 (i) { this.a[11] = i; this.checkA(); this.updateAnswer({ index: 11, i }) },
    updateA12 (i) { this.a[12] = i; this.checkA(); this.updateAnswer({ index: 12, i }) },
    updateA13 (i) { this.a[13] = i; this.checkA(); this.updateAnswer({ index: 13, i }) },
    updateA14 (i) { this.a[14] = i; this.checkA(); this.updateAnswer({ index: 14, i }) },
    updateA15 (i) { this.a[15] = i; this.checkA(); this.updateAnswer({ index: 15, i }) },
    updateA16 (i) { this.a[16] = i; this.checkA(); this.updateAnswer({ index: 16, i }) },
    updateA17 (i) { this.a[17] = i; this.checkA(); this.updateAnswer({ index: 17, i }) },
    updateA18 (i) { this.a[18] = i; this.checkA(); this.updateAnswer({ index: 18, i }) },
    updateA19 (i) { this.a[19] = i; this.checkA(); this.updateAnswer({ index: 19, i }) },
    updateA20 (i) { this.a[20] = i; this.checkA(); this.updateAnswer({ index: 20, i }) },
    updateA21 (i) { this.a[21] = i; this.checkA(); this.updateAnswer({ index: 21, i }) },
    updateA22 (i) { this.a[22] = i; this.checkA(); this.updateAnswer({ index: 22, i }) },
    updateA23 (i) { this.a[23] = i; this.checkA(); this.updateAnswer({ index: 23, i }) },
    updateA24 (i) { this.a[24] = i; this.checkA(); this.updateAnswer({ index: 24, i }) },
    updateA25 (i) { this.a[25] = i; this.checkA(); this.updateAnswer({ index: 25, i }) },
    updateA26 (i) { this.a[26] = i; this.checkA(); this.updateAnswer({ index: 26, i }) },
    updateA27 (i) { this.a[27] = i; this.checkA(); this.updateAnswer({ index: 27, i }) },
    updateA28 (i) { this.a[28] = i; this.checkA(); this.updateAnswer({ index: 28, i }) },
    updateA29 (i) { this.a[29] = i; this.checkA(); this.updateAnswer({ index: 29, i }) },
    updateA30 (i) { this.a[30] = i; this.checkA(); this.updateAnswer({ index: 30, i }) },
    updateA31 (i) { this.a[31] = i; this.checkA(); this.updateAnswer({ index: 31, i }) },
    updateA32 (i) { this.a[32] = i; this.checkA(); this.updateAnswer({ index: 32, i }) },
    updateA33 (i) { this.a[33] = i; this.checkA(); this.updateAnswer({ index: 33, i }) },
    updateA34 (i) { this.a[34] = i; this.checkA(); this.updateAnswer({ index: 34, i }) },
    updateA35 (i) { this.a[35] = i; this.checkA(); this.updateAnswer({ index: 35, i }) },
    updateA36 (i) { this.a[36] = i; this.checkA(); this.updateAnswer({ index: 36, i }) },
    updateA37 (i) { this.a[37] = i; this.checkA(); this.updateAnswer({ index: 37, i }) },
    updateA38 (i) { this.a[38] = i; this.checkA(); this.updateAnswer({ index: 38, i }) },
    updateA39 (i) { this.a[39] = i; this.checkA(); this.updateAnswer({ index: 39, i }) },
    updateA40 (i) { this.a[40] = i; this.checkA(); this.updateAnswer({ index: 40, i }) },
    updateA41 (i) { this.a[41] = i; this.checkA(); this.updateAnswer({ index: 41, i }) },
    updateA42 (i) { this.a[42] = i; this.checkA(); this.updateAnswer({ index: 42, i }) },
    updateA43 (i) { this.a[43] = i; this.checkA(); this.updateAnswer({ index: 43, i }) },
    updateA44 (i) { this.a[44] = i; this.checkA(); this.updateAnswer({ index: 44, i }) },
    updateA45 (i) { this.a[45] = i; this.checkA(); this.updateAnswer({ index: 45, i }) },
    updateA46 (i) { this.a[46] = i; this.checkA(); this.updateAnswer({ index: 46, i }) },
    updateA47 (i) { this.a[47] = i; this.checkA(); this.updateAnswer({ index: 47, i }) },
    updateA48 (i) { this.a[48] = i; this.checkA(); this.updateAnswer({ index: 48, i }) },
    updateA49 (i) { this.a[49] = i; this.checkA(); this.updateAnswer({ index: 49, i }) },
    updateA50 (i) { this.a[50] = i; this.checkA(); this.updateAnswer({ index: 50, i }) },
    updateA51 (i) { this.a[51] = i; this.checkA(); this.updateAnswer({ index: 51, i }) },
    updateA52 (i) { this.a[52] = i; this.checkA(); this.updateAnswer({ index: 52, i }) },
    updateA53 (i) { this.a[53] = i; this.checkA(); this.updateAnswer({ index: 53, i }) },
    updateA54 (i) { this.a[54] = i; this.checkA(); this.updateAnswer({ index: 54, i }) },
    updateA55 (i) { this.a[55] = i; this.checkA(); this.updateAnswer({ index: 55, i }) },
    updateA56 (i) { this.a[56] = i; this.checkA(); this.updateAnswer({ index: 56, i }) },
    updateA57 (i) { this.a[57] = i; this.checkA(); this.updateAnswer({ index: 57, i }) },
    updateA58 (i) { this.a[58] = i; this.checkA(); this.updateAnswer({ index: 58, i }) },
    updateA59 (i) { this.a[59] = i; this.checkA(); this.updateAnswer({ index: 59, i }) },
    updateA60 (i) { this.a[60] = i; this.checkA(); this.updateAnswer({ index: 60, i }) },
    updateA61 (i) { this.a[61] = i; this.checkA(); this.updateAnswer({ index: 61, i }) },
    updateA62 (i) { this.a[62] = i; this.checkA(); this.updateAnswer({ index: 62, i }) },
    updateA63 (i) { this.a[63] = i; this.checkA(); this.updateAnswer({ index: 63, i }) },
    updateA64 (i) { this.a[64] = i; this.checkA(); this.updateAnswer({ index: 64, i }) },
    updateA65 (i) { this.a[65] = i; this.checkA(); this.updateAnswer({ index: 65, i }) },
    updateA66 (i) { this.a[66] = i; this.checkA(); this.updateAnswer({ index: 66, i }) },
    updateA67 (i) { this.a[67] = i; this.checkA(); this.updateAnswer({ index: 67, i }) },
    updateA68 (i) { this.a[68] = i; this.checkA(); this.updateAnswer({ index: 68, i }) },
    updateA69 (i) { this.a[69] = i; this.checkA(); this.updateAnswer({ index: 69, i }) },
    updateA70 (i) { this.a[70] = i; this.checkA(); this.updateAnswer({ index: 70, i }) },
    updateA71 (i) { this.a[71] = i; this.checkA(); this.updateAnswer({ index: 71, i }) },
    updateA72 (i) { this.a[72] = i; this.checkA(); this.updateAnswer({ index: 72, i }) },
    updateA73 (i) { this.a[73] = i; this.checkA(); this.updateAnswer({ index: 73, i }) },
    updateA74 (i) { this.a[74] = i; this.checkA(); this.updateAnswer({ index: 74, i }) },
    updateA75 (i) { this.a[75] = i; this.checkA(); this.updateAnswer({ index: 75, i }) },
    updateA76 (i) { this.a[76] = i; this.checkA(); this.updateAnswer({ index: 76, i }) },
    updateA77 (i) { this.a[77] = i; this.checkA(); this.updateAnswer({ index: 77, i }) },
    updateA78 (i) { this.a[78] = i; this.checkA(); this.updateAnswer({ index: 78, i }) },
    updateA79 (i) { this.a[79] = i; this.checkA(); this.updateAnswer({ index: 79, i }) },
    updateA80 (i) { this.a[80] = i; this.checkA(); this.updateAnswer({ index: 80, i }) },
    updateA81 (i) { this.a[81] = i; this.checkA(); this.updateAnswer({ index: 81, i }) },
    updateA82 (i) { this.a[82] = i; this.checkA(); this.updateAnswer({ index: 82, i }) },
    updateA83 (i) { this.a[83] = i; this.checkA(); this.updateAnswer({ index: 83, i }) },
    updateA84 (i) { this.a[84] = i; this.checkA(); this.updateAnswer({ index: 84, i }) },
    updateA85 (i) { this.a[85] = i; this.checkA(); this.updateAnswer({ index: 85, i }) },
    updateA86 (i) { this.a[86] = i; this.checkA(); this.updateAnswer({ index: 86, i }) },
    updateA87 (i) { this.a[87] = i; this.checkA(); this.updateAnswer({ index: 87, i }) },
    updateA88 (i) { this.a[88] = i; this.checkA(); this.updateAnswer({ index: 88, i }) },
    updateA89 (i) { this.a[89] = i; this.checkA(); this.updateAnswer({ index: 89, i }) },
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
    submit () {
      const data = {
        examInfoId: this.$route.params.examId,
        examTypeId: 7,
        examAnswer: this.answer
      }
      this.$store.dispatch('postAnswerList', data)
        .then(() => {
          this.$router.push({ name: 'self', params: { examId: this.$route.params.examId } })
        })
    },
    getAnswer (answerArr) {
      for (let index = 0; index < answerArr.length; index++) {
        const questionNo = answerArr[index].questionNo
        const answer = answerArr[index].answer
        this.a[questionNo - 1] = answer
        this.comKey = questionNo //Key changed will force component re-rende
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
    papikostikPage1,
    papikostikPage2,
    papikostikPage3,
    papikostikPage4,
    papikostikPage5
  },
  created () {
    this.$store.dispatch('getApplicant', { examInfoId: this.$route.params.examId })
    this.$store.dispatch('getCompletedStatus', { examType: 7, examInfoId: this.$route.params.examId })
      .then(() => {
        if (this.isCompleted) {
          this.$store.dispatch('getAnswerList', { examType: 7, examInfoId: this.$route.params.examId })
        }
      })
  }
}
</script>
