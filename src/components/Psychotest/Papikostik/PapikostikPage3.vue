<template>
  <span>
    <v-layout row wrap mb-2>
      <v-flex md8 offset-md2 xs12>
        <h4>Page 3</h4>
      </v-flex>
    </v-layout>
    <data-input-papikostik
      :no="'41. '"
      :c="['saya berusaha keras sekali','saya sangat ramah']"
      :a="a[40]"
      @aUpdated="updateA40"
      :no2="'42. '"
      :c2="['orang lain berpendapat bahwa saya pemimpin yang baik','saya berpikir hati-hati dan lama']"
      :a2="a[41]"
      @a2Updated="updateA41"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'43. '"
      :c="['saya sering memanfaatkan kesempatan','saya suka cerewet mengenai hal-hal yang kecil']"
      :a="a[42]"
      @aUpdated="updateA42"
      :no2="'44. '"
      :c2="['orang lain berpendapat bahwa saya bekerja cepat','orang lain berpendapat bahwa saya menyimpan segala sesuatu secara rapi dan teratur']"
      :a2="a[43]"
      @a2Updated="updateA43"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'45. '"
      :c="['saya menyukai permainan dan olahraga','saya sangat menyenangkan']"
      :a="a[44]"
      @aUpdated="updateA44"
      :no2="'46. '"
      :c2="['saya senang bila orang lain bersikap akrab dan ramah','saya selalu berusaha menyelesaikan sesuatu yang telah saya mulai']"
      :a2="a[45]"
      @a2Updated="updateA45"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'47. '"
      :c="['saya suka bereksperimen dan mencoba hal-hal yang baru','saya suka melaksanakan pekerjaan sulit dengan baik']"
      :a="a[46]"
      @aUpdated="updateA46"
      :no2="'48. '"
      :c2="['saya suka diperlakukan secara adil','saya suka memberitahu orang lain cara mengerjakan sesuatu']"
      :a2="a[47]"
      @a2Updated="updateA47"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'49. '"
      :c="['saya suka melakukan hal-hal yang diharapkan dari saya','saya suka mendapat perhatian']"
      :a="a[48]"
      @aUpdated="updateA48"
      :no2="'50. '"
      :c2="['saya suka petunjuk-petunjuk terperinci untuk melaksanakan suatu tugas','saya senang berada bersama orang lain']"
      :a2="a[49]"
      @a2Updated="updateA49"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'51. '"
      :c="['saya selalu berusaha melakukan pekerjaan secara sempurna','orang mengatakan bahwa saya hampir tidak pernah lelah']"
      :a="a[50]"
      @aUpdated="updateA50"
      :no2="'52. '"
      :c2="['saya tipe seorang pemimpin','saya sudah berteman']"
      :a2="a[51]"
      @a2Updated="updateA51"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'53. '"
      :c="['saya memanfaatkan kesempatan','saya banyak sekali berfikir']"
      :a="a[52]"
      @aUpdated="updateA52"
      :no2="'54. '"
      :c2="['saya bekerja dengan tempo yang cepat dan mantap','saya senang menangani pekerjaan detail']"
      :a2="a[53]"
      @a2Updated="updateA53"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'55. '"
      :c="['saya memiliki banyak tenaga untuk permainan dan olahraga','saya menyimpan segala sesuatu secara rapi dan teratur ']"
      :a="a[54]"
      @aUpdated="updateA54"
      :no2="'56. '"
      :c2="['saya bergaul baik dengan semua orang','saya berwatak tenang']"
      :a2="a[55]"
      @a2Updated="updateA55"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'57. '"
      :c="['saya ingin bertemu orang orang baru dan melakukan hal hal baru','saya selalu ingin menyelesaikan pekerjaan yang telah saya mulai']"
      :a="a[56]"
      @aUpdated="updateA56"
      :no2="'58. '"
      :c2="['saya biasanya suka mempertahankan keyakinan saya','saya biasanya suka bekerja keras']"
      :a2="a[57]"
      @a2Updated="updateA57"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'59. '"
      :c="['saya menyukai saran saran dari orang orang yang saya kagumi','saya suka bertanggung jawab atas orang lain']"
      :a="a[58]"
      @aUpdated="updateA58"
      :no2="'60. '"
      :c2="['saya membiarkan orang lain mempengaruhi diri saya secara kuat','saya suka mendapat perhatian']"
      :a2="a[59]"
      @a2Updated="updateA59"
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
    updateA40 (i) { this.$emit('a40Updated', i); },
    updateA41 (i) { this.$emit('a41Updated', i); },
    updateA42 (i) { this.$emit('a42Updated', i); },
    updateA43 (i) { this.$emit('a43Updated', i); },
    updateA44 (i) { this.$emit('a44Updated', i); },
    updateA45 (i) { this.$emit('a45Updated', i); },
    updateA46 (i) { this.$emit('a46Updated', i); },
    updateA47 (i) { this.$emit('a47Updated', i); },
    updateA48 (i) { this.$emit('a48Updated', i); },
    updateA49 (i) { this.$emit('a49Updated', i); },
    updateA50 (i) { this.$emit('a50Updated', i); },
    updateA51 (i) { this.$emit('a51Updated', i); },
    updateA52 (i) { this.$emit('a52Updated', i); },
    updateA53 (i) { this.$emit('a53Updated', i); },
    updateA54 (i) { this.$emit('a54Updated', i); },
    updateA55 (i) { this.$emit('a55Updated', i); },
    updateA56 (i) { this.$emit('a56Updated', i); },
    updateA57 (i) { this.$emit('a57Updated', i); },
    updateA58 (i) { this.$emit('a58Updated', i); },
    updateA59 (i) { this.$emit('a59Updated', i); },
  }
}
</script>