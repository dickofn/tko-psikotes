<template>
  <span>
    <v-layout row wrap mb-2>
      <v-flex md8 offset-md2 xs12>
        <h4>Page 3</h4>
      </v-flex>
    </v-layout>
    <data-input-english
      :no="'41. '"
      :c="['He speaks the English very well', 'He speaks English very well']"
      :a="a[40]"
      @aUpdated="updateA40"
      :no2="'42. '"
      :c2="['We shall start after breakfast','We shall start after the breakfast']"
      :a2="a[41]"
      @a2Updated="updateA41"
    ></data-input-english>
    <data-input-english
      :no="'43. '"
      :c="['The smell is one of the five senses', 'Smell is one of the five senses']"
      :a="a[42]"
      @aUpdated="updateA42"
      :no2="'44. '"
      :c2="['On Friday I go to mosque','On Friday I go to the mosque']"
      :a2="a[43]"
      @a2Updated="updateA43"
    ></data-input-english>
    <data-input-english
      :no="'45. '"
      :c="['The man is born a sinner', 'Man is born a sinner']"
      :a="a[44]"
      @aUpdated="updateA44"
      :no2="'46. '"
      :c2="['I watched the boys play hockey','I watched the boys to play hockey']"
      :a2="a[45]"
      @a2Updated="updateA45"
    ></data-input-english>
    <data-input-english
      :no="'47. '"
      :c="['You can’t make him understand', 'You can’t make him to understand']"
      :a="a[46]"
      @aUpdated="updateA46"
      :no2="'48. '"
      :c2="['We heard him to speak in English','We heard him speak in English']"
      :a2="a[47]"
      @a2Updated="updateA47"
    ></data-input-english>
    <data-input-english
      :no="'49. '"
      :c="['May I to trouble you for a moment?', 'May I trouble you for a moment?']"
      :a="a[48]"
      @aUpdated="updateA48"
      :no2="'50. '"
      :c2="['I could feel his heart to beat','I could feel his heart beat']"
      :a2="a[49]"
      @a2Updated="updateA49"
    ></data-input-english>
    <data-input-english
      :no="'51. '"
      :c="['I went to market and bought fruit', 'I went to market and I bought fruit']"
      :a="a[50]"
      @aUpdated="updateA50"
      :no2="'52. '"
      :c2="['My little brother he is at school','My little brother is at school']"
      :a2="a[51]"
      @a2Updated="updateA51"
    ></data-input-english>
    <data-input-english
      :no="'53. '"
      :c="['The man having finished his work he received his pay', 'The man having finished his work received his pay']"
      :a="a[52]"
      @aUpdated="updateA52"
      :no2="'54. '"
      :c2="['The doctor I know him very well','I know the doctor very well']"
      :a2="a[53]"
      @a2Updated="updateA53"
    ></data-input-english>
    <data-input-english
      :no="'55. '"
      :c="['She has returned to school', 'She has returned back to the school']"
      :a="a[54]"
      @aUpdated="updateA54"
      :no2="'56. '"
      :c2="['They come always late to school','They always come late to school']"
      :a2="a[55]"
      @a2Updated="updateA55"
    ></data-input-english>
    <data-input-english
      :no="'57. '"
      :c="['He wrote carefully his exercises', 'He wrote his exercises carefully']"
      :a="a[56]"
      @aUpdated="updateA56"
      :no2="'58. '"
      :c2="['Is the room enough large of you?','Is the room large enough for you?']"
      :a2="a[57]"
      @a2Updated="updateA57"
    ></data-input-english>
    <data-input-english
      :no="'59. '"
      :c="['I should have not gone', 'I should not have gone']"
      :a="a[58]"
      @aUpdated="updateA58"
      :no2="'60. '"
      :c2="['I told him not to come on Monday','I told him to not come on Monday']"
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