<template>
  <span>
    <v-layout row wrap mb-2>
      <v-flex md8 offset-md2 xs12>
        <h4>Bacaan {{ storyNumber }}.</h4>
        <p>{{ s }}</p>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex offset-md2 md8 xs12>{{ no }}. {{ q }}</v-flex>
    </v-layout>

    <v-layout row wrap align-center>
      <v-flex md8 offset-md2 xs12>
        <v-radio-group :value="c" @change="updateC" required :disabled="isCompleted">
          <v-radio :label="'a. ' + o[0]" value="A"></v-radio>
          <v-radio :label="'b. ' + o[1]" value="B"></v-radio>
          <v-radio :label="'c. ' + o[2]" value="C"></v-radio>
          <v-radio :label="'d. ' + o[3]" value="D"></v-radio>
          <v-radio :label="'e. ' + o[4]" value="E"></v-radio>
        </v-radio-group>
      </v-flex>
    </v-layout>
  </span>
</template>

<script>
export default {
  props: ['no', 's', 'q', 'o', 'c'],
  methods: {
    updateC (i) {
      const index = this.no - 1
      this.$emit('cUpdated', { i, index })
    }
  },
  computed: {
    storyNumber () {
      if (this.no <= 10) {
        return "I"
      } else if (this.no <= 20) {
        return "II"
      } else {
        return "III"
      }
    },
    isCompleted () {
      if (this.$store.state.exam.isCompleted == 0) {
        return false
      } else {
        return true
      }
    },
  }
}
</script>

<style>
</style>
