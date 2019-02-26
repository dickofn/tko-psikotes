<template>
  <span>
    <v-layout row wrap mb-2>
      <v-flex md8 offset-md2 xs12>
        <h4>Page 2</h4>
      </v-flex>
    </v-layout>
    <data-input-papikostik
      :no="'21. '"
      :c="['saya selalu berusaha keras','saya selalu melaksanakan setiap langkah dengan sangat hati-hati']"
      :a="a[20]"
      @aUpdated="updateA20"
      :no2="'22. '"
      :c2="['saya seorang pemimpin yang baik','saya menata pekerjaan dengan baik']"
      :a2="a[21]"
      @a2Updated="updateA21"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'23. '"
      :c="['saya mudah marah','saya lambat dalam membuat keputusan']"
      :a="a[22]"
      @aUpdated="updateA22"
      :no2="'24. '"
      :c2="['saya suka mengerjakan beberapa tugas pada saat yang bersamaan','bila berada dalam satu kelompok, saya suka berdiam diri']"
      :a2="a[23]"
      @a2Updated="updateA23"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'25. '"
      :c="['saya senang sekali diundang','saya ingin melakukan sesuatu lebih baik daripada orang lain']"
      :a="a[24]"
      @aUpdated="updateA24"
      :no2="'26. '"
      :c2="['saya suka menjalin hubungan pribadi yang akrab','saya suka memberi nasihat pada orang lain']"
      :a2="a[25]"
      @a2Updated="updateA25"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'27. '"
      :c="['saya suka melakukan hal-hal baru yang berbeda','saya suka menceritakan bagaimana saya berhasil dalam melakukan sesuatu']"
      :a="a[26]"
      @aUpdated="updateA26"
      :no2="'28. '"
      :c2="['apabila pendapat saya benar, saya suka mempertahankan','saya ingin menjadi bagian dari suatu kelompok']"
      :a2="a[27]"
      @a2Updated="updateA27"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'29. '"
      :c="['saya tidak mau berbeda dari orang lain','saya berusaha akrab dengan orang lain']"
      :a="a[28]"
      @aUpdated="updateA28"
      :no2="'30. '"
      :c2="['saya senang diberitahu bagaimana melakukan suatu pekerjaan','saya mudah bosan']"
      :a2="a[29]"
      @a2Updated="updateA29"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'31. '"
      :c="['saya bekerja keras','saya banyak berpikir dan membuat rencana']"
      :a="a[30]"
      @aUpdated="updateA30"
      :no2="'32. '"
      :c2="['saya memimpin kelompok','detail (Hal-hal) kecil menarik bagi saya']"
      :a2="a[31]"
      @a2Updated="updateA31"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'33. '"
      :c="['saya membuat keputusan dengan mudah dan cepat','saya menyimpan barang-barang secara rapi dan teratur']"
      :a="a[32]"
      @aUpdated="updateA32"
      :no2="'34. '"
      :c2="['saya membuat keputusan dengan mudah dan cepat','saya jarang marah dan sedih']"
      :a2="a[33]"
      @a2Updated="updateA33"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'35. '"
      :c="['saya ingin menjadi bagian dalam kelompok','saya ingin melakukan hanya satu pekerjaan pada satu waktu']"
      :a="a[34]"
      @aUpdated="updateA34"
      :no2="'36. '"
      :c2="['saya berusaha berteman secara akrab','saya berusaha sangat keras untuk menjadi yang terbaik']"
      :a2="a[35]"
      @a2Updated="updateA35"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'37. '"
      :c="['saya suka gaya terbaru dalam hal pakaian dan mobil','saya suka bertanggung jawab atas orang lain']"
      :a="a[36]"
      @aUpdated="updateA36"
      :no2="'38. '"
      :c2="['saya senang berdebat','saya suka mendapat perhatian']"
      :a2="a[37]"
      @a2Updated="updateA37"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'39. '"
      :c="['saya suka menyenangkan orang yang menjadi atasan saya','saya tertarik untuk menjadi bagian dari kelompok']"
      :a="a[38]"
      @aUpdated="updateA38"
      :no2="'40. '"
      :c2="['saya suka mengikuti peraturan dengan hati-hati','saya suka orang lain mengenal saya dengan baik']"
      :a2="a[39]"
      @a2Updated="updateA39"
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
    updateA20 (i) { this.$emit('a20Updated', i); },
    updateA21 (i) { this.$emit('a21Updated', i); },
    updateA22 (i) { this.$emit('a22Updated', i); },
    updateA23 (i) { this.$emit('a23Updated', i); },
    updateA24 (i) { this.$emit('a24Updated', i); },
    updateA25 (i) { this.$emit('a25Updated', i); },
    updateA26 (i) { this.$emit('a26Updated', i); },
    updateA27 (i) { this.$emit('a27Updated', i); },
    updateA28 (i) { this.$emit('a28Updated', i); },
    updateA29 (i) { this.$emit('a29Updated', i); },
    updateA30 (i) { this.$emit('a30Updated', i); },
    updateA31 (i) { this.$emit('a31Updated', i); },
    updateA32 (i) { this.$emit('a32Updated', i); },
    updateA33 (i) { this.$emit('a33Updated', i); },
    updateA34 (i) { this.$emit('a34Updated', i); },
    updateA35 (i) { this.$emit('a35Updated', i); },
    updateA36 (i) { this.$emit('a36Updated', i); },
    updateA37 (i) { this.$emit('a37Updated', i); },
    updateA38 (i) { this.$emit('a38Updated', i); },
    updateA39 (i) { this.$emit('a39Updated', i); },
  }
}
</script>