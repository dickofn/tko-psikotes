<template>
  <span>
    <v-layout row wrap mb-2>
      <v-flex md8 offset-md2 xs12>
        <h4>Page 4</h4>
      </v-flex>
    </v-layout>
    <data-input-english
      :no="'61. '"
      :c="['Not all people are hard-working', 'All people are not hard-working']"
      :a="a[60]"
      @aUpdated="updateA60"
      :no2="'62. '"
      :c2="['He asked me what game I played','He asked me what game did I play']"
      :a2="a[61]"
      @a2Updated="updateA61"
    ></data-input-english>
    <data-input-english
      :no="'63. '"
      :c="['I showed to him some of my stamps', 'I showed some of my stamp to him']"
      :a="a[62]"
      @aUpdated="updateA62"
      :no2="'64. '"
      :c2="['The ordered goods have not arrived','The goods ordered have not arrived']"
      :a2="a[63]"
      @a2Updated="updateA63"
    ></data-input-english>
    <data-input-english
      :no="'65. '"
      :c="['A boy has a donkey who is our class', 'A boy who is in our class has a donkey']"
      :a="a[64]"
      @aUpdated="updateA64"
      :no2="'66. '"
      :c2="['We come at school every morning','We come to school every morning']"
      :a2="a[65]"
      @a2Updated="updateA65"
    ></data-input-english>
    <data-input-english
      :no="'67. '"
      :c="['We walked till the river and back', 'We walked to the river and back']"
      :a="a[66]"
      @aUpdated="updateA66"
      :no2="'68. '"
      :c2="['I spent my holidays in Bali','I spent my holidays at Bali']"
      :a2="a[67]"
      @a2Updated="updateA67"
    ></data-input-english>
    <data-input-english
      :no="'69. '"
      :c="['I bought a book at Rp.500', 'I bought a book for Rp.500']"
      :a="a[68]"
      @aUpdated="updateA68"
      :no2="'70. '"
      :c2="['There was a fight among two boys','There was a fight between two boys']"
      :a2="a[69]"
      @a2Updated="updateA69"
    ></data-input-english>
    <data-input-english
      :no="'71. '"
      :c="['He told that he would go home', 'He said that would go home']"
      :a="a[70]"
      @aUpdated="updateA70"
      :no2="'72. '"
      :c2="['You must make your work carefully','You must do your work carefully']"
      :a2="a[71]"
      @a2Updated="updateA71"
    ></data-input-english>
    <data-input-english
      :no="'73. '"
      :c="['I am going to lie down for an hour', 'I am going to lay down for an hour']"
      :a="a[72]"
      @aUpdated="updateA72"
      :no2="'74. '"
      :c2="['He raises very early in the morning','He rises very early in the morning']"
      :a2="a[73]"
      @a2Updated="updateA73"
    ></data-input-english>
    <data-input-english
      :no="'75. '"
      :c="['Everybody love polite people', 'Everybody like polite people']"
      :a="a[74]"
      @aUpdated="updateA74"
      :no2="'76. '"
      :c2="['Everyone of the two boy was wrong','Each one of the two boy was wrong']"
      :a2="a[75]"
      @a2Updated="updateA75"
    ></data-input-english>
    <data-input-english
      :no="'77. '"
      :c="['She read each book of the library', 'She read every book of the library']"
      :a="a[76]"
      @aUpdated="updateA76"
      :no2="'78. '"
      :c2="['I have read an interested story','I have read an interesting story']"
      :a2="a[77]"
      @a2Updated="updateA77"
    ></data-input-english>
    <data-input-english
      :no="'79. '"
      :c="['New York is further than Paris', 'New York is farther than Paris']"
      :a="a[78]"
      @aUpdated="updateA78"
      :no2="'80. '"
      :c2="['Have you some lessons to prepare?','Have you any lessons to prepare?']"
      :a2="a[79]"
      @a2Updated="updateA79"
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