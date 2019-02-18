<template>
  <v-container grid-list-xs>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <v-spacer></v-spacer>
            <h1 class="headline text-uppercase font-weight-light text-xs-center">Psikotes - DISC</h1>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" v-model="valid">
                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <h1>INSTRUKSI</h1>
                    <p>
                      <b>&rarr;</b> Setiap kotak dibawah ini memuat empat kalimat. Bacalah dengan seksama setiap kalimat itu, lalu pilihlah salah satu tanda D, I, S, C, atau * di bawah kolom M, disamping kalimat yang
                      <b>PALING</b> menggambarkan diri Anda.
                      <br>
                      <b>&rarr;</b> Selanjutanya pilihlah salah satu tanda D, I, S, C, atau * di bawah kolom M, disamping kalimat yang
                      <b>PALING TIDAK</b> menggambarkan diri Anda. Untuk setiap kolom hanya dapat memilih satu saja.
                    </p>
                  </v-flex>
                </v-layout>

                <template v-if="isStarted && !isFinished">
                  <data-input-disc
                    :m="m[0]"
                    :l="l[0]"
                    :mv="['S', 'I', '*', 'C']"
                    :lv="['S', 'I', 'D', 'C']"
                    :t="['Gampangan, mudah setuju', 'Percaya, percaya pada orang', 'Petualang, mengambil resiko', 'Toleran, menghormati']"
                    @mUpdated="updateM0"
                    @lUpdated="updateL0"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-disc>
                  <data-input-disc
                    :m="m[1]"
                    :l="l[1]"
                    :mv="['C', 'D', '*', 'S']"
                    :lv="['*', 'D', 'I', 'S']"
                    :t="['Lembut suara, pendiam,', 'Optimistik, visioner', 'Pusat perhatian, suka gaul', 'Pendamai, membawa harmoni']"
                    @mUpdated="updateM1"
                    @lUpdated="updateL1"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-disc>
                  <data-input-disc
                    :m="m[2]"
                    :l="l[2]"
                    :mv="['I', '*', '**', 'D']"
                    :lv="['I', 'C', 'S', '*']"
                    :t="['Menyemangati orang,', 'Berusaha sempurna', 'Bagian dari kelompok', 'Ingin membuat tujuan']"
                    @mUpdated="updateM2"
                    @lUpdated="updateL2"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-disc>
                  <data-input-disc
                    :m="m[3]"
                    :l="l[3]"
                    :mv="['C', 'S', '*', 'D']"
                    :lv="['C', 'S', 'I', 'D']"
                    :t="['Menjadi frustasi', 'Menyimpan perasaan saya', 'Menceritakan sisi saya', 'Siap beroposisi']"
                    @mUpdated="updateM3"
                    @lUpdated="updateL3"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-disc>
                  <data-input-disc
                    :m="m[4]"
                    :l="l[4]"
                    :mv="['I', 'D', 'S', '*']"
                    :lv="['*', 'D', 'S', 'C']"
                    :t="['Hidup, suka bicara', 'Gerakan cepat, tekun', 'Usaha menjadi keseimbangan', 'Usaha mengikuti aturan']"
                    @mUpdated="updateM4"
                    @lUpdated="updateL4"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-disc>
                  <data-input-disc
                    :m="m[5]"
                    :l="l[5]"
                    :mv="['C', 'D', 'I', 'S']"
                    :lv="['*', 'D', 'I', 'S']"
                    :t="['Kelola waktu secara efisien', 'Sering terburu-buru, merasa tertekan', 'Masalah sosial itu penting', 'Suka selesaikan apa yang saya mulai']"
                    @mUpdated="updateM5"
                    @lUpdated="updateL5"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-disc>
                  <data-input-disc
                    :m="m[6]"
                    :l="l[6]"
                    :mv="['S', 'I', '*', '**']"
                    :lv="['*', 'I', 'C', 'D']"
                    :t="['Tolak perubahan mendadak', 'Cenderung janji berlebihan', 'Tarik diri di tengah tekanan', 'Tidak takut bertempur']"
                    @mUpdated="updateM6"
                    @lUpdated="updateL6"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-disc>
                  <data-input-disc
                    :m="m[7]"
                    :l="l[7]"
                    :mv="['I', 'S', 'C', 'D']"
                    :lv="['I', 'S', 'C', 'D']"
                    :t="['Penyemangat yang baik', 'Pendengar yang baik', 'Penganalisa yang baik', 'Delegator yang baik']"
                    @mUpdated="updateM7"
                    @lUpdated="updateL7"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-disc>
                  <data-input-disc
                    :m="m[8]"
                    :l="l[8]"
                    :mv="['D', 'C', '*', '**']"
                    :lv="['D', 'C', 'I', 'S']"
                    :t="['Hasil adalah penting', 'Lakukan dengan benar, akurasi penting', 'Dibuat menyenangkan', 'Mari kerjakan bersama']"
                    @mUpdated="updateM8"
                    @lUpdated="updateL8"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-disc>
                  <data-input-disc
                    :m="m[9]"
                    :l="l[9]"
                    :mv="['*', 'D', 'S', 'I']"
                    :lv="['C', 'D', 'S', '*']"
                    :t="['Akan berjalan terus tanpa kontrol diri', 'Akan membeli sesuai dorongan hati', 'Akan menunggu, tanpa tekanan', 'Akan mengusahakan apa yang kuinginkan']"
                    @mUpdated="updateM9"
                    @lUpdated="updateL9"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-disc>
                  <data-input-disc
                    :m="m[10]"
                    :l="l[10]"
                    :mv="['S', '*', 'D', 'C']"
                    :lv="['*', 'I', 'D', 'C']"
                    :t="['Ramah, mudah bergabung', 'Unik, bosan rutinitas', 'Aktif mengubah sesuatu, tanpa tekanan', 'Ingin hal-hal yang pasti']"
                    @mUpdated="updateM10"
                    @lUpdated="updateL10"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-disc>
                  <data-input-disc
                    :m="m[11]"
                    :l="l[11]"
                    :mv="['*', 'C', 'I', 'D']"
                    :lv="['S', '*', 'I', 'D']"
                    :t="['Non - konfrontasi, menyerah', 'Dipenuhi hal detail', 'Perubahan pada menit terakhir', 'Menuntut, kasar']"
                    @mUpdated="updateM11"
                    @lUpdated="updateL11"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-disc>
                  <data-input-disc
                    :m="m[12]"
                    :l="l[12]"
                    :mv="['D', 'S', 'I', '*']"
                    :lv="['D', '*', '**', 'C']"
                    :t="['Ingin kemajuan', 'Puas dengan segalanya, senang', 'Terbuka memperhatikan perasaan', 'Rendah hati, sederhana']"
                    @mUpdated="updateM12"
                    @lUpdated="updateL12"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-disc>
                  <data-input-disc
                    :m="m[13]"
                    :l="l[13]"
                    :mv="['C', 'I', 'S', 'D']"
                    :lv="['C', 'I', '*', 'D']"
                    :t="['Tenang, pendiam', 'Bahagia, tanpa beban', 'Menyenangkan, baik hati', 'Tak gentar, berani']"
                    @mUpdated="updateM13"
                    @lUpdated="updateL13"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-disc>
                  <data-input-disc
                    :m="m[14]"
                    :l="l[14]"
                    :mv="['S', 'C', 'I', 'D']"
                    :lv="['S', '*', 'I', 'D']"
                    :t="['Menggunakan waktu berkualitas dengan teman', 'Rencanakan masa depan, bersiap', 'Berpergian demi petualangan baru', 'Menerima ganjaran atau tujuan yang tercapai']"
                    @mUpdated="updateM14"
                    @lUpdated="updateL14"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-disc>
                  <data-input-disc
                    :m="m[15]"
                    :l="l[15]"
                    :mv="['*', 'C', 'I', 'S']"
                    :lv="['D', 'S', 'I', 'SS']"
                    :t="['Aturan perlu dipertanyakan', 'Aturan membuat adil', 'Aturan membuat bosan', 'Aturan membuat aman']"
                    @mUpdated="updateM15"
                    @lUpdated="updateL15"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-disc>
                  <data-input-disc
                    :m="m[16]"
                    :l="l[16]"
                    :mv="['*', 'D', 'S', 'I']"
                    :lv="['C', 'D', 'S', '*']"
                    :t="['Pendidikan, kebudayaan', 'Prestasi, ganjaran', 'Keselamatan, keamanan ', 'Sosial, perkumpulan kelompok']"
                    @mUpdated="updateM16"
                    @lUpdated="updateL16"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-disc>
                  <data-input-disc
                    :m="m[17]"
                    :l="l[17]"
                    :mv="['D', '*', '**', 'C']"
                    :lv="['D', 'I', 'S', '*']"
                    :t="['Memimpin, pendekatan langsung', 'Suka bergaul, antusias', 'Dapat diramal, konsisten ', 'Waspada, hati-hati']"
                    @mUpdated="updateM17"
                    @lUpdated="updateL17"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-disc>
                  <data-input-disc
                    :m="m[18]"
                    :l="l[18]"
                    :mv="['D', 'S', 'I', '*']"
                    :lv="['D', '*', 'I', 'C']"
                    :t="['Tidak mudah dikalahkan', 'Kerjakan sesuai perintah, ikut pemimpin', 'Mudah terangsang, riang ', 'Ingin segalanya teratur, rapi']"
                    @mUpdated="updateM18"
                    @lUpdated="updateL18"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-disc>
                  <data-input-disc
                    :m="m[19]"
                    :l="l[19]"
                    :mv="['D', 'S', 'I', 'C']"
                    :lv="['*', 'S', 'I', '*']"
                    :t="['Saya akan pimpin mereka', 'Saya akan melaksanakan', 'Saya akan meyakinkan mereka', 'Saya dapatkan fakta']"
                    @mUpdated="updateM19"
                    @lUpdated="updateL19"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-disc>
                  <data-input-disc
                    :m="m[20]"
                    :l="l[20]"
                    :mv="['S', 'D', 'I', '*']"
                    :lv="['S', 'D', 'I', 'C']"
                    :t="['Memikirkan orang dahulu', 'Kompetitif, suka tantangan', 'Optimis, positif', 'Pemikiran logis, sistematik']"
                    @mUpdated="updateM20"
                    @lUpdated="updateL20"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-disc>
                  <data-input-disc
                    :m="m[21]"
                    :l="l[21]"
                    :mv="['S', '*', 'D', 'C']"
                    :lv="['S', 'I', 'D', 'C']"
                    :t="['Menyenangkan orang. Mudah setuju', 'Tertawa lepas, hidup', 'Berani, tak gentar', 'Tenang, pendiam']"
                    @mUpdated="updateM21"
                    @lUpdated="updateL21"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-disc>
                  <data-input-disc
                    :m="m[22]"
                    :l="l[22]"
                    :mv="['*', 'I', 'S', '**']"
                    :lv="['D', '*', 'S', 'C']"
                    :t="['Ingin otoritas lebih', 'Ingin kesempatan baru', 'Menghindari konflik', 'Ingin petunjuk yang jelas']"
                    @mUpdated="updateM22"
                    @lUpdated="updateL22"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-disc>
                  <data-input-disc
                    :m="m[23]"
                    :l="l[23]"
                    :mv="['*', 'I', 'D', 'C']"
                    :lv="['S', 'I', '*', '**']"
                    :t="['Dapat diandalkan, dapat dipercaya', 'Kreatif, unik', 'Garis dasar, orientasi hasil', 'Jalankan standar yang tinggi. akurat']"
                    @mUpdated="updateM23"
                    @lUpdated="updateL23"
                    :rules="rules"
                    :valid="valid"
                    @validUpdated="updateValid"
                  ></data-input-disc>
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
import dataInputDisc from '../../components/Psychotest/Input/DataInputDisc'

export default {
  data () {
    return {
      time: 480,
      timer: null,
      isStarted: false,
      isFinished: false,
      m: new Array(24),
      l: new Array(24),
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
    updateL0 (i) { this.l[0] = i; },
    updateM1 (i) { this.m[1] = i; },
    updateL1 (i) { this.l[1] = i; },
    updateM2 (i) { this.m[2] = i; },
    updateL2 (i) { this.l[2] = i; },
    updateM3 (i) { this.m[3] = i; },
    updateL3 (i) { this.l[3] = i; },
    updateM4 (i) { this.m[4] = i; },
    updateL4 (i) { this.l[4] = i; },
    updateM5 (i) { this.m[5] = i; },
    updateL5 (i) { this.l[5] = i; },
    updateM6 (i) { this.m[6] = i; },
    updateL6 (i) { this.l[6] = i; },
    updateM7 (i) { this.m[7] = i; },
    updateL7 (i) { this.l[7] = i; },
    updateM8 (i) { this.m[8] = i; },
    updateL8 (i) { this.l[8] = i; },
    updateM9 (i) { this.m[9] = i; },
    updateL9 (i) { this.l[9] = i; },
    updateM10 (i) { this.m[10] = i; },
    updateL10 (i) { this.l[10] = i; },
    updateM11 (i) { this.m[11] = i; },
    updateL11 (i) { this.l[11] = i; },
    updateM12 (i) { this.m[12] = i; },
    updateL12 (i) { this.l[12] = i; },
    updateM13 (i) { this.m[13] = i; },
    updateL13 (i) { this.l[13] = i; },
    updateM14 (i) { this.m[14] = i; },
    updateL14 (i) { this.l[14] = i; },
    updateM15 (i) { this.m[15] = i; },
    updateL15 (i) { this.l[15] = i; },
    updateM16 (i) { this.m[16] = i; },
    updateL16 (i) { this.l[16] = i; },
    updateM17 (i) { this.m[17] = i; },
    updateL17 (i) { this.l[17] = i; },
    updateM18 (i) { this.m[18] = i; },
    updateL18 (i) { this.l[18] = i; },
    updateM19 (i) { this.m[19] = i; },
    updateL19 (i) { this.l[19] = i; },
    updateM20 (i) { this.m[20] = i; },
    updateL20 (i) { this.l[20] = i; },
    updateM21 (i) { this.m[21] = i; },
    updateL21 (i) { this.l[21] = i; },
    updateM22 (i) { this.m[22] = i; },
    updateL22 (i) { this.l[22] = i; },
    updateM23 (i) { this.m[23] = i; },
    updateL23 (i) { this.l[23] = i; },
    updateM24 (i) { this.m[24] = i; },
    updateL24 (i) { this.l[24] = i; },
    updateValid (i) { this.valid = i; },
    reset () {
      console.log(this.valid)
      this.$refs.form.reset()
    }
  },
  components: {
    dataInputDisc
  }
}
</script>
