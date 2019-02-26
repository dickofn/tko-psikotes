<template>
  <span>
    <v-layout row wrap mb-2>
      <v-flex md8 offset-md2 xs12>
        <h4>Page 4</h4>
      </v-flex>
    </v-layout>
    <data-input-papikostik
      :no="'61. '"
      :c="['saya biasanya bekerja keras sekali','saya biasanya bekerja cepat']"
      :a="a[60]"
      @aUpdated="updateA60"
      :no2="'62. '"
      :c2="['apabila saya bicara, kelompok menyimak','saya terampil menggunakan peralatan']"
      :a2="a[61]"
      @a2Updated="updateA61"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'63. '"
      :c="['saya lambat dalam berteman','saya lambat dalam membuat keputusan']"
      :a="a[62]"
      @aUpdated="updateA62"
      :no2="'64. '"
      :c2="['saya biasanya makan dengan cepat','saya senang membaca']"
      :a2="a[63]"
      @a2Updated="updateA63"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'65. '"
      :c="['saya menyukai pekerjaan yang membuat saya banyak bergerak','saya menyukai pekerjaan yang harus dilakukan secara hati-hati']"
      :a="a[64]"
      @aUpdated="updateA64"
      :no2="'66. '"
      :c2="['secara berteman dengan sebanyak mungkin orang','saya dapat menemukan sesuatu yang telah saya sisihkan']"
      :a2="a[65]"
      @a2Updated="updateA65"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'67. '"
      :c="['saya merencana jauh dimuka','saya selalu menyenangkan']"
      :a="a[66]"
      @aUpdated="updateA66"
      :no2="'68. '"
      :c2="['saya sangat bangga akan nama baik saya','saya tetap menangani suatu permasalahan sampai terpecahkan']"
      :a2="a[67]"
      @a2Updated="updateA67"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'69. '"
      :c="['saya suka orang lain membuat keputusan-keputusan untuk kelompok','saya ingin berhasil']"
      :a="a[68]"
      @aUpdated="updateA68"
      :no2="'70. '"
      :c2="['saya suka orang lain membuat keputusan-keputusan untuk kelompok ','saya suka membuat keputusan-keputusan untuk kelompok']"
      :a2="a[69]"
      @a2Updated="updateA69"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'71. '"
      :c="['saya selalu berusaha sangat keras','saya membuat keputusan secara mudah dan cepat']"
      :a="a[70]"
      @aUpdated="updateA70"
      :no2="'72. '"
      :c2="['kelompok biasanya melaksanakan keinginan saya','saya biasanya tergesa-gesa']"
      :a2="a[71]"
      @a2Updated="updateA71"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'73. '"
      :c="['saya sering merasa lelah','saya lambat dalam membuat keputusan']"
      :a="a[72]"
      @aUpdated="updateA72"
      :no2="'74. '"
      :c2="['saya bekerja cepat','saya mudah berteman']"
      :a2="a[73]"
      @a2Updated="updateA73"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'75. '"
      :c="['saya biasanya bersemangat atau bergairah','saya menggunakan banyak waktu untuk berfikir']"
      :a="a[74]"
      @aUpdated="updateA74"
      :no2="'76. '"
      :c2="['saya sangat ramah terhadap orang lain','saya menyukai pekerjaan yang menuntut ketelitian']"
      :a2="a[75]"
      @a2Updated="updateA75"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'77. '"
      :c="['saya banyak berpikir dan merencanakan','saya menyimpan segala sesuatu pada tempatnya']"
      :a="a[76]"
      @aUpdated="updateA76"
      :no2="'78. '"
      :c2="['saya menyukai pekerjaan yang menuntut hal-hal yang mendetail','saya tidak cepat marah']"
      :a2="a[77]"
      @a2Updated="updateA77"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'79. '"
      :c="['saya suka mengikuti orang-orang yang saya kagumi','saya selalu menyelesaikan pekerjaan yang telah saya mulai']"
      :a="a[78]"
      @aUpdated="updateA78"
      :no2="'80. '"
      :c2="['saya menyukai petunjuk-petunjuk yang jelas','saya suka bekerja keras']"
      :a2="a[79]"
      @a2Updated="updateA79"
    ></data-input-papikostik>
  </span>
</template>

<script>
import dataInputPapikostik from '../Input/DataInputPapikostik'
export default {
  props: ['a'],
  components: {
    dataInputPapikostik
  },
  methods: {
    updateA60 (i) { this.$emit('a60Updated', i); },
    updateA61 (i) { this.$emit('a61Updated', i); },
    updateA62 (i) { this.$emit('a62Updated', i); },
    updateA63 (i) { this.$emit('a63Updated', i); },
    updateA64 (i) { this.$emit('a64Updated', i); },
    updateA65 (i) { this.$emit('a65Updated', i); },
    updateA66 (i) { this.$emit('a66Updated', i); },
    updateA67 (i) { this.$emit('a67Updated', i); },
    updateA68 (i) { this.$emit('a68Updated', i); },
    updateA69 (i) { this.$emit('a69Updated', i); },
    updateA70 (i) { this.$emit('a70Updated', i); },
    updateA71 (i) { this.$emit('a71Updated', i); },
    updateA72 (i) { this.$emit('a72Updated', i); },
    updateA73 (i) { this.$emit('a73Updated', i); },
    updateA74 (i) { this.$emit('a74Updated', i); },
    updateA75 (i) { this.$emit('a75Updated', i); },
    updateA76 (i) { this.$emit('a76Updated', i); },
    updateA77 (i) { this.$emit('a77Updated', i); },
    updateA78 (i) { this.$emit('a78Updated', i); },
    updateA79 (i) { this.$emit('a79Updated', i); },
  }
}
</script>