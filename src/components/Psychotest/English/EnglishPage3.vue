<template>
  <span>
    <v-layout row wrap mb-2>
      <v-flex md8 offset-md2 xs12>
        <h4>Page 3</h4>
      </v-flex>
    </v-layout>
    <data-input-english
      :no="'41. '"
      :c="['', '']"
      :a1="a[40]"
      @aUpdated="updateA40"
      :no2="'42. '"
      :c2="['','']"
      :a2="a[41]"
      @a2Updated="updateA41"
    ></data-input-english>
    <data-input-english
      :no="'43. '"
      :c="['', '']"
      :a1="a[42]"
      @aUpdated="updateA42"
      :no2="'44. '"
      :c2="['','']"
      :a2="a[43]"
      @a2Updated="updateA43"
    ></data-input-english>
    <data-input-english
      :no="'45. '"
      :c="['', '']"
      :a1="a[44]"
      @aUpdated="updateA44"
      :no2="'46. '"
      :c2="['','']"
      :a2="a[45]"
      @a2Updated="updateA45"
    ></data-input-english>
    <data-input-english
      :no="'47. '"
      :c="['', '']"
      :a1="a[46]"
      @aUpdated="updateA46"
      :no2="'48. '"
      :c2="['','']"
      :a2="a[47]"
      @a2Updated="updateA47"
    ></data-input-english>
    <data-input-english
      :no="'49. '"
      :c="['', '']"
      :a1="a[48]"
      @aUpdated="updateA48"
      :no2="'50. '"
      :c2="['','']"
      :a2="a[49]"
      @a2Updated="updateA49"
    ></data-input-english>
    <data-input-english
      :no="'51. '"
      :c="['', '']"
      :a1="a[50]"
      @aUpdated="updateA50"
      :no2="'52. '"
      :c2="['','']"
      :a2="a[51]"
      @a2Updated="updateA51"
    ></data-input-english>
    <data-input-english
      :no="'53. '"
      :c="['', '']"
      :a1="a[52]"
      @aUpdated="updateA52"
      :no2="'54. '"
      :c2="['','']"
      :a2="a[53]"
      @a2Updated="updateA53"
    ></data-input-english>
    <data-input-english
      :no="'55. '"
      :c="['', '']"
      :a1="a[54]"
      @aUpdated="updateA54"
      :no2="'56. '"
      :c2="['','']"
      :a2="a[55]"
      @a2Updated="updateA55"
    ></data-input-english>
    <data-input-english
      :no="'57. '"
      :c="['', '']"
      :a1="a[56]"
      @aUpdated="updateA56"
      :no2="'58. '"
      :c2="['','']"
      :a2="a[57]"
      @a2Updated="updateA57"
    ></data-input-english>
    <data-input-english
      :no="'59. '"
      :c="['', '']"
      :a1="a[58]"
      @aUpdated="updateA58"
      :no2="'60. '"
      :c2="['','']"
      :a2="a[59]"
      @a2Updated="updateA59"
    ></data-input-english>
  </span>
</template>

<script>
import dataInputEnglish from '../Input/DataInputEnglish'
export default {
  props: ['a'],
  components: {
    dataInputEnglish
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