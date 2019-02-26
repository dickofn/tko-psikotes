<template>
  <span>
    <v-layout row wrap mb-2>
      <v-flex md8 offset-md2 xs12>
        <h4>Page 5</h4>
      </v-flex>
    </v-layout>
    <data-input-papikostik
      :no="'81. '"
      :c="['saya mengejar hal-hal yang menjadi keinginan saya','saya seorang pemimpin yang baik']"
      :a="a[80]"
      @aUpdated="updateA80"
      :no2="'82. '"
      :c2="['saya membuat orang lain bekerja keras','saya suka bersenang-senang']"
      :a2="a[81]"
      @a2Updated="updateA81"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'83. '"
      :c="['saya membuat keputusan dengan cepat','saya berbicara cepat']"
      :a="a[82]"
      @aUpdated="updateA82"
      :no2="'84. '"
      :c2="['saya membuat bekerja secara tergesa – gesa','saya berolahraga secara teratur']"
      :a2="a[83]"
      @a2Updated="updateA83"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'85. '"
      :c="['saya tidak suka bertemu orang orang lain','saya cepat lelah']"
      :a="a[84]"
      @aUpdated="updateA84"
      :no2="'86. '"
      :c2="['saya suka bekerja dengan teori','saya suka melaksanakan pekerjaan detail']"
      :a2="a[85]"
      @a2Updated="updateA85"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'87. '"
      :c="['saya suka bekerja dengan teori','saya suka melaksanakan pekerjaan detail']"
      :a="a[86]"
      @aUpdated="updateA86"
      :no2="'88. '"
      :c2="['saya suka melaksanakan pekerjaan detail','saya suka mengatur pekerjaan saya']"
      :a2="a[87]"
      @a2Updated="updateA87"
    ></data-input-papikostik>
    <data-input-papikostik
      :no="'89. '"
      :c="['saya meletakan segala sesuatu pada tempatnya','saya selalu menyenangkan']"
      :a="a[88]"
      @aUpdated="updateA88"
      :no2="'90. '"
      :c2="['saya senang diberitahu hal-hal yang harus saya kerjakan','saya harus menyelesaikan apa yang telah saya mulai']"
      :a2="a[89]"
      @a2Updated="updateA89"
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
    updateA80 (i) { this.$emit('a80Updated', i); },
    updateA81 (i) { this.$emit('a81Updated', i); },
    updateA82 (i) { this.$emit('a82Updated', i); },
    updateA83 (i) { this.$emit('a83Updated', i); },
    updateA84 (i) { this.$emit('a84Updated', i); },
    updateA85 (i) { this.$emit('a85Updated', i); },
    updateA86 (i) { this.$emit('a86Updated', i); },
    updateA87 (i) { this.$emit('a87Updated', i); },
    updateA88 (i) { this.$emit('a88Updated', i); },
    updateA89 (i) { this.$emit('a89Updated', i); },
  }
}
</script>