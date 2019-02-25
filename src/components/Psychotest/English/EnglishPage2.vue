<template>
  <span>
    <v-layout row wrap mb-2>
      <v-flex md8 offset-md2 xs12>
        <h4>Page 2</h4>
      </v-flex>
    </v-layout>
    <data-input-english
      :no="'21. '"
      :c="['', '']"
      :a1="a[20]"
      @aUpdated="updateA20"
      :no2="'22. '"
      :c2="['','']"
      :a2="a[21]"
      @a2Updated="updateA21"
    ></data-input-english>
    <data-input-english
      :no="'23. '"
      :c="['', '']"
      :a1="a[22]"
      @aUpdated="updateA22"
      :no2="'24. '"
      :c2="['','']"
      :a2="a[23]"
      @a2Updated="updateA23"
    ></data-input-english>
    <data-input-english
      :no="'25. '"
      :c="['', '']"
      :a1="a[24]"
      @aUpdated="updateA24"
      :no2="'26. '"
      :c2="['','']"
      :a2="a[25]"
      @a2Updated="updateA25"
    ></data-input-english>
    <data-input-english
      :no="'27. '"
      :c="['', '']"
      :a1="a[26]"
      @aUpdated="updateA26"
      :no2="'28. '"
      :c2="['','']"
      :a2="a[27]"
      @a2Updated="updateA27"
    ></data-input-english>
    <data-input-english
      :no="'29. '"
      :c="['', '']"
      :a1="a[28]"
      @aUpdated="updateA28"
      :no2="'30. '"
      :c2="['','']"
      :a2="a[29]"
      @a2Updated="updateA29"
    ></data-input-english>
    <data-input-english
      :no="'31. '"
      :c="['', '']"
      :a1="a[30]"
      @aUpdated="updateA30"
      :no2="'32. '"
      :c2="['','']"
      :a2="a[31]"
      @a2Updated="updateA31"
    ></data-input-english>
    <data-input-english
      :no="'33. '"
      :c="['', '']"
      :a1="a[32]"
      @aUpdated="updateA32"
      :no2="'34. '"
      :c2="['','']"
      :a2="a[33]"
      @a2Updated="updateA33"
    ></data-input-english>
    <data-input-english
      :no="'35. '"
      :c="['', '']"
      :a1="a[34]"
      @aUpdated="updateA34"
      :no2="'36. '"
      :c2="['','']"
      :a2="a[35]"
      @a2Updated="updateA35"
    ></data-input-english>
    <data-input-english
      :no="'37. '"
      :c="['', '']"
      :a1="a[36]"
      @aUpdated="updateA36"
      :no2="'38. '"
      :c2="['','']"
      :a2="a[37]"
      @a2Updated="updateA37"
    ></data-input-english>
    <data-input-english
      :no="'39. '"
      :c="['', '']"
      :a1="a[38]"
      @aUpdated="updateA38"
      :no2="'40. '"
      :c2="['','']"
      :a2="a[39]"
      @a2Updated="updateA39"
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