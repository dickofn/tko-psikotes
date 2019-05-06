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
              <v-form ref="form" @submit.prevent="submit">
                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <h1>INSTRUKSI</h1>
                    <p>
                      <b>&rarr;</b> Bacalah baik-baik satu bacaan, kemudian jawablah setiap pertanyaan mengenai isi bacaan tersebut dengan memilih satu jawaban yang PALING TEPAT.
                      <br>
                      <b>&rarr;</b> Jawablah pertanyaan-pertanyaan berdasarkan isi yang tertulis maupun yang dapat disimpulkan dari bacaan.
                      <br>
                      <br>
                      <b>&rarr;</b> Bagian ini terdiri dari 30 halaman dan 3 bacaan dengan masing - masing 1 bacaan mempunyai 10 pertanyaan. Mohon diperhatikan sisa waktu yang berjalan ketika mengerjakan tes ini!
                    </p>
                  </v-flex>
                </v-layout>

                <template v-if="(isStarted && !isFinished) || isCompleted">
                  <data-input-story
                    :no="currPage"
                    :s="currStory"
                    :q="currQuestion"
                    :o="currOption"
                    :c="c[index]"
                    @cUpdated="updateC"
                    :key="comKey"
                  ></data-input-story>
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
                      <v-btn color="info" :disabled="currPage==30" @click="pageNext">Next &rarr;</v-btn>
                    </template>
                  </v-flex>
                </v-layout>
                <v-layout row wrap mt-5 justify-end v-if="!isCompleted">
                  <v-flex offset-md6 offset-lg7 offset-xl8>
                    <template v-if="!isStarted && !isFinished">
                      <v-btn color="info" @click="startExam">Start</v-btn>
                      <span>
                        <h2>Waktu pengerjaan {{ prettyTime }} menit</h2>
                      </span>
                    </template>
                    <v-btn :disabled="!valid" color="success" v-if="isStarted" type="submit">Submit</v-btn>
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
import dataInputStory from '../../components/Psychotest/Input/DataInputStory'


export default {
  data () {
    return {
      time: 900,
      timer: null,
      timeReminder: false,
      isStarted: false,
      isFinished: false,
      leftOver: 30,
      stories: [
        "Seorang penjaga kios dijatuhi hukuman mati oleh pengadilan tinggi Kuala Lumpur karena mengedarkan 384.17 gram kanabis tiga tahun lalu. Hakim pengadilan tinggi menyatakan Ismail Mohamad (disingkat IM), 22, bersalah melakukan pelanggaran ini pada 23 Juni 1987. Ismail tampak tenang tetapi ibunya menangis tersedu-sedu ketika vonis dijatuhkan. Undang-undang obat terlarang menuntut hukuman mati bagi siapa saja yang tertangkap dengan 15 gram atau lebih heroin, 200 gram kanabis, atau satu kilogram candu. Lebih dari 70 orang termasuk 26 orang asing, telah digantung karena.pelanggaran obat terlarang sejak 1975.",
        "Pengendalian hama memerlukan pengetahuan dan keterampilan khusus yang umumnya dimiliki oleh perusahaan pengendalian hama yang profesional. Meskipun telah digunakan sarana baku yang canggih. seperti penggunaan bahan kimia maupun cara mekanik, tetapi cara tradisional pun masih diterapkan bila perlu. Sebelum melaksanakan pembasmian, pemeriksaan lapangan dan identifikasi jenis hama perlu diadakan, yaitu melalui jejak kaki, jejak ekor, tinja atau urine. Ada tiga jenis hama yang dapat tinggal dalam satu bangunan, masing-masing mempunyai teritorial sendiri tanpa saling mengganggu. Ukuran badan, kesukaan makanan, dan jumlah kelahiran anak berbeda, namun sifat kecurigaan terhadap barang baru sama. Mereka sangat peka terhadap perubahan cahaya dan-mempunyai kebiasaan mengerat apa saja dari kayu, paralon, kabel sampai kasa kawat. Tujuan mengerat terutama untuk mengasah gigi pengeratnya yang selalu bertambah panjang (yang dapat menyebabkan kematiannya). Selain itu hama ini mengerat untuk dapat menembus benda yang menghalangi mereka keluar-masuk. Kebiasaan yang merupakan kelemahan mereka adalah tidak mengubah trayek lalu lintas mereka, kecuali dalam keadaan terpaksa.",
        "Dari Pentagon diumumkan bahwa rencana anggaran militer Amerika Serikat (AS) untuk lima tahun mendatang akan berkurang 50 milyar dolar. Dana tersebut akan dialihkan untuk program-program lain termasuk untuk usaha mengatasi kesulitan ekonomi. Pengurangan anggaran tersebut pasti akan mempengaruhi program-program militer dasar. Namun belum ada keputusan terakhir tentang ini. Menteri pertahanan dan kepala staf gabungan telah memerintahkan peninjauan kembali secara menyeluruh kebutuhan-kebutuhan militer di masa mendatang untuk disesuaikan. Tidak terelakkan, AS harus mengurangi pasukannya. pesawat dan kapal-kapal tempur. Dengan pengurangan tersebut anggaran militer untuk lima tahun mendatang turun menjadi 240 milyar dolar.<br> Pengurangan ini merupakan hasil dari tekanan rakyat atas anggaran militer yang dinilai terlalu besar. Sebagian rakyat tidak melihat lagi relevansi anggaran militer yang besar setelah tenggelamnya komunisme di banyak negara termasuk Uni Soviet dan berakhirnya Perang Dingin. Berbagai pihak mendesak untuk menempatkan program-program dalam negeri pada prioritas yang lebih tinggi. Sedang anggaran militer cukup untuk menghadapi kemungkinan yang terburuk pada masa yang akan datang. Namun kemungkinan yang terburuk itu sangat tipis terjadi bila melihat situasi dunia sekarang. Kemungkinan, Pentagon akan mengurangi divisi-divisi angkatan daratnya yang aktif, angkatan udaranya terpaksa harus mengurangi wing-wing tempur, dan angkatan lautnya harus mengurangi kapal induk. Program-program senjata canggih seperti pembom B-2 Stealth, jet tempur F-22 dan kapal selam seawolf kemungkinan akan dibatalkan atau ditunda."
      ],
      questions: [
        "Dalam peristiwa ini IM disebut : ",
        "Sejak ditangkap sampai digantung diperlukan waktu : ",
        "Ismail Mohamad tergolong : ",
        "Bacaan ini ditulis pada tahun : ",
        "Polisi narkotik menangkap IM atas tuduhan sebagai : ",
        "Hukuman mati berkaitan dengan narkotika ini berlaku untuk semua : ",
        "Ketika vonis dijatuhkan ibunya menangis dengan : ",
        "Menurut undang-undang tersebut obat terlarang yang dianggap paling berbahaya bagi umat adalah : ",
        "Pernyataan yang paling tepat bagi isi cerita ini adalah : ",
        "Sejak undang-undang berlaku sampai ditulisnya baccan ini, RATA-RATA setiap tahun yang telah menjalani hukuman gantung sekitar : ",
        "Hama yang disebut tadi adalah : ",
        "Pengendalian hama yang profesional perlu pengetahuan : ",
        "Satu perusahaan disebut profesional bila perusahaan itu : ",
        "Hama ini mengerat untuk membuat : ",
        "Untuk mengenali hama ini dilakukan pemeriksaan : ",
        "Jenis-jenis hama ini dapat memenuhi satu tempat dan mereka saling : ",
        "Pemeriksaan dilapangan guna pemberantasan hama tersebut dimaksudkan untuk mengenali : ",
        "Membasmi hama ini perlu memanfaatkan kebiasaan hama yang menetap, ialah cara mereka : ",
        "Gambaran keistimewaan hama ini adalah gigi serinya : ",
        "Hama ini peka terhadap : ",
        "Pentagon berarti  : ",
        "Departemen yang menghuni Pentagon adalah Departemen : ",
        "Tertulis dengan angka, banyaknya nol dalam “50 milyar” ada : ",
        "Semula, berapakah anggaran militer AS lima tahunan : ",
        "Tinjauan menyeluruh kebutuhan-kebutuhan militer dilakukan untuk disesuaikan dengan : ",
        "Pengurangan anggaran ini adalah kehendak : ",
        "Anggaran militer besar-besaran tidak diperlukan lagi sebab tidak ada lagi ancaman dari : ",
        "Saat bacaan ini ditulis, AS sedang mengalami kesulitan : ",
        "F-22 adalah sejenis : ",
        "Saat bacaan ini ditulis, B-2, F-22 dan Seawolf, besar kemungkinan sedang dalam proses :'"
      ],
      options: [
        ['terdakwa', 'tahanan', 'tanpa pembela', 'terpidana', 'terperdaya'],
        ['1-4 tahun', '5-10 tahun', 'puluhan tahun', 'tidak menentu', 'tak disebutkan'],
        ['penjaga keamanan', 'tukang tadah', 'setengah baya', 'pemuda', 'remaja'],
        ['tidak diketahui', '1998', '1987', '1980', '1975'],
        ['cukong', 'abonemen', 'sub-agen', 'konsumen', 'produsen'],
        ['warga negara', 'terdakwa', 'penduduk', 'orang', 'penduduk yang menetap'],
        ['isakan', 'ratapan', 'histeris', 'wajah sendu', 'penuh sesal'],
        ['kanabis', 'heroin', 'cocain', 'morfin', 'candu'],
        ['hukuman kejam bagi pelanggar belum tentu efektif', 'hukuman gantung bagi generasi muda', 'hukuman dilaksanakan tanpa pandang bulu', 'banyak orang asing tidak menyadari hukum gantung ini', 'hukuman gantung paling efektif memberantas narkotika'],
        ['2 sampai 10 orang', 'belasan orang', 'dua puluhan orang', 'lebih dari 70 orang', 'tidak terhitung'],
        ['rayap', 'bangsat', 'pengerat', 'tikus', 'kucing'],
        ['ekologi', 'parasitologi', 'teknik mekanik', 'khusus', 'tradisional'],
        ['besar', 'komersial', 'handal', 'canggih', 'modern'],
        ['perlindungan', 'teritorial', 'sarang', 'bangunan', 'terowongan'],
        ['bercak kaki', 'air seni', 'bekas gigitan', 'bekas trayek', 'apa saja yang dikerat'],
        ['komunikasi lewat trayek', 'bantu-membantu', 'menghormati wilayah', 'Menghindari satu sama lain', 'curiga-mencurigai'],
        ['kerusakannya', 'pembiakannya', 'variestasnya', 'kelemahannya', 'pengasahan giginya'],
        ['pulang-pergi', 'mengerat makanan', 'mengasah gigi', 'menembus benda', 'berkembang biak'],
        ['sekuat kawat', 'besar tetap pendek', 'sangat tajam', 'tumbuh terus', 'berbisa mematikan'],
        ['cahaya terang', 'barang asing', 'pergantian cahaya', 'bahan kimia', 'trayek lalu lintas'],
        ['tiga', 'empat', 'lima', 'enam', 'tujuh'],
        ['Dalam Negeri', 'Luar Negeri', 'Tenaga Kerja', 'Pertahanan', 'Keuangan'],
        ['tiga belas', 'dua belas', 'sebelas', 'sepuluh', 'sembilan'],
        ['240 milyar', '245 milyar', '260 milyar', '280 milyar', '290 milyar'],
        ['penciutan anggaran', 'berakhirnya perang dingin', 'perintah kepala staf', 'kesulitan ekonomi', 'departemen keuangan AS'],
        ['Rakyat AS', 'Pemerintah AS', 'Menteri Pertahanan dan Kepala Staf Gabungan', 'Departemen Ekonomi', 'Pembatalan dan penundaan'],
        ['situasi dunia', 'dalam negeri', 'ekonomi buruk', 'komunisme', 'separatis'],
        ['militer', 'politik', 'ekonomi', 'keamanan', 'prioritas'],
        ['kapal perang', 'pesawat udara', 'pesawat amphibi', 'senjata nuklir', 'misil balistik'],
        ['dibatalkan', 'ditunda', 'disempurnakan', 'diuji coba', 'dirancang']
      ],
      currPage: 1,
      c: new Array(30),
      a: new Array,
      comKey: 0,
      valid: false,
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
    currStory () {
      if (this.currPage <= 10) {
        return this.stories[0]
      } else if (this.currPage <= 20) {
        return this.stories[1]
      } else {
        return this.stories[2]
      }
    },
    currQuestion () {
      return this.questions[this.index]
    },
    currOption () {
      return this.options[this.index]
    },
    index () {
      return this.currPage - 1
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
            this.submit()
          }
          if (this.time == 120) {
            this.timeReminder = true;
          }
        }, 1000)
      }
    },
    updateC (payload) {
      this.c[payload.index] = payload.i
      this.checkC()
      this.updateA(payload.i)
    },
    checkC () {
      var checkEl = true;
      for (let index = 0; index < this.c.length; index++) {
        const element = this.c[index];
        if (element == null || element == undefined || element == '') { checkEl = false; break }
      }
      if (checkEl || this.isFinished) { this.valid = true }
      else { this.valid = false }
    },
    updateA (i) {
      for (let index = 0; index < this.a.length; index++) {
        const n = this.a[index].questionNo;
        const a = this.a[index].answer;
        if (n == this.currPage && a) {
          this.a.splice(index, 1);
          this.leftOver++;
          break;
        }
      }
      this.a.push({
        questionNo: this.currPage,
        answer: i
      })
      this.leftOver--;
    },
    pageBack () {
      if (this.currPage > 1) {
        this.currPage--;
      }
    },
    pageNext () {
      if (this.currPage < 30) {
        this.currPage++;
      }
    },
    submit () {
      const data = {
        examInfoId: this.$route.params.examId,
        examTypeId: 4,
        examAnswer: this.a
      }
      this.$store.dispatch('postAnswerList', data)
        .then(res => {
          if (res.status == 200) {
            const routeData = {
              examInfoId: this.$route.params.examId,
              sharedValue: "/exam/math/" + this.$route.params.examId
            }
            this.$store.dispatch('setCurrentRoute', routeData)
            this.$router.push({ name: 'math', params: { examId: this.$route.params.examId } })
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
        this.c[questionNo - 1] = answer
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
    dataInputStory
  },
  created () {
    this.$store.dispatch('getApplicant', { examInfoId: this.$route.params.examId })
    this.$store.dispatch('getCompletedStatus', { examType: 4, examInfoId: this.$route.params.examId })
      .then(() => {
        if (this.isCompleted) {
          this.$store.dispatch('getAnswerList', { examType: 4, examInfoId: this.$route.params.examId })
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