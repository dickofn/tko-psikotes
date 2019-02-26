<template>
  <span>
    <v-layout row wrap mb-2>
      <v-flex md8 offset-md2 xs12>
        <h4>Page 1</h4>
      </v-flex>
    </v-layout>
    <data-input-papikostik
      :no="'1. '"
      :c="['Saya seorang pekerja keras','Saya tidak suka uring-uringan']"
      :a="a[0]"
      @aUpdated="updateA0"
      :no2="'2. '"
      :c2="['saya suka menghasilkan pekerjaan yang lebih baik daripada orang lain','saya akan tetap menangani suatu pekerjaan sampai selesai ']"
      :a2="a[1]"
      @a2Updated="updateA1"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'3. '"
      :c="['saya suka menunjukan pada orang lain cara melakukan sesuatu','saya ingin berusaha sebaik mungkin']"
      :a="a[2]"
      @aUpdated="updateA2"
      :no2="'4. '"
      :c2="['saya suka melucu','saya senang memberi tahu orang lain hal-hal yang harus dikerjakan']" 
      :a2="a[3]"
      @a2Updated="updateA3"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'5. '"
      :c="['saya suka bergabung dalam kelompok','saya senang diperhatikan oleh kelompok']"
      :a="a[4]"
      @aUpdated="updateA4"
      :no2="'6. '"
      :c2="['saya suka menjalin hubungan pribadi yang akrab','saya suka berteman dengan kelompok']"
      :a2="a[5]"
      @a2Updated="updateA5"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'7. '"
      :c="['saya dapat cepat berubah jika merasa perlu','saya berusaha menjalin hubungan pribadi yang akrab']"
      :a="a[6]"
      @aUpdated="updateA6"
      :no2="'8. '"
      :c2="['saya suka menyerang kembali jika benar benar disakiti ','saya suka melakukan hal-hal yang baru dan berbeda']"
      :a2="a[7]"
      @a2Updated="updateA7"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'9. '"
      :c="['saya ingin agar atasan menyukai saya','saya suka menegur orang lain jika mereka melakukan kesalahan']"
      :a="a[8]"
      @aUpdated="updateA8"
      :no2="'10. '"
      :c2="['saya suka mengikuti petunjuk-petunjuk yang diberikan kepada saya','saya suka menyenangkan orang-orang yang menjadi atasan saya']"
      :a2="a[9]"
      @a2Updated="updateA9"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'11. '"
      :c="['saya berusaha keras sekali','saya seorang yang teratur saya meletakkan segala sesuatu pada tempatnya']"
      :a="a[10]"
      @aUpdated="updateA10"
      :no2="'12. '"
      :c2="['saya dapat membuat orang lain melakukan apa yang saya inginkan','saya tidak mudah marah']"
      :a2="a[11]"
      @a2Updated="updateA11"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'13. '"
      :c="['saya suka memberitahu kelompok hal-hal yang harus mereka kerjakan ','saya selalu bertahan pada suatu pekerjaan sampai selesai']"
      :a="a[12]"
      @aUpdated="updateA12"
      :no2="'14. '"
      :c2="['saya ingin menjadi orang yang penuh gairah dan menarik','saya ingin menjadi orang yang sangat berhasil']"
      :a2="a[13]"
      @a2Updated="updateA13"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'15. '"
      :c="['saya ingin menjadi bagian dalam kelompok','saya suka membantu orang lain mengambil keputusan']"
      :a="a[14]"
      @aUpdated="updateA14"
      :no2="'16. '"
      :c2="['saya cemas bila seseorang tidak menyukai saya','saya ingin agar orang lain memperhatikan saya']"
      :a2="a[15]"
      @a2Updated="updateA15"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'17. '"
      :c="['saya suka mencoba hal hal baru','saya lebih suka bekerja bersama orang lain daripada sendiri']"
      :a="a[16]"
      @aUpdated="updateA16"
      :no2="'18. '"
      :c2="['kadang-kadang saya menyalahkan orang lain jika ada yang tidak beres','saya merasa terganggu jika seseorang tidak menyukai saya']"
      :a2="a[17]"
      @a2Updated="updateA17"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'19. '"
      :c="['saya suka menyenangkan orang yang menjadi atasan saya','saya senang mencoba pekerjaan yang baru dan berbeda']"
      :a="a[18]"
      @aUpdated="updateA18"
      :no2="'20. '"
      :c2="['saya menyukai petunjuk-petunjuk terperinci untuk melaksanakan tugas','saya suka memberitahu orang lain apabila mereka menjengkelkan']"
      :a2="a[19]"
      @a2Updated="updateA19"
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
    updateA0 (i) { this.$emit('a0Updated', i); },
    updateA1 (i) { this.$emit('a1Updated', i); },
    updateA2 (i) { this.$emit('a2Updated', i); },
    updateA3 (i) { this.$emit('a3Updated', i); },
    updateA4 (i) { this.$emit('a4Updated', i); },
    updateA5 (i) { this.$emit('a5Updated', i); },
    updateA6 (i) { this.$emit('a6Updated', i); },
    updateA7 (i) { this.$emit('a7Updated', i); },
    updateA8 (i) { this.$emit('a8Updated', i); },
    updateA9 (i) { this.$emit('a9Updated', i); },
    updateA10 (i) { this.$emit('a10Updated', i); },
    updateA11 (i) { this.$emit('a11Updated', i); },
    updateA12 (i) { this.$emit('a12Updated', i); },
    updateA13 (i) { this.$emit('a13Updated', i); },
    updateA14 (i) { this.$emit('a14Updated', i); },
    updateA15 (i) { this.$emit('a15Updated', i); },
    updateA16 (i) { this.$emit('a16Updated', i); },
    updateA17 (i) { this.$emit('a17Updated', i); },
    updateA18 (i) { this.$emit('a18Updated', i); },
    updateA19 (i) { this.$emit('a19Updated', i); },
  }
}
</script>