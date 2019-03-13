<template>
  <span>
    <v-layout row wrap align-center>
      <v-flex offset-md1 xs1 text-xs-right>{{ no }}</v-flex>
      <v-flex md3 xs11>
        <v-radio-group :value="a" @change="updateA" required :disabled="isCompleted">
          <v-radio :label="'a. ' + c[0]" value="a"></v-radio>
          <v-radio :label="'b. ' + c[1]" value="b"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs1 text-xs-right>{{ no2 }}</v-flex>
      <v-flex md3 xs11>
        <v-radio-group :value="a2" @change="updateA2" required :disabled="isCompleted">
          <v-radio :label="'a. ' + c2[0]" value="a"></v-radio>
          <v-radio :label="'b. ' + c2[1]" value="b"></v-radio>
        </v-radio-group>
      </v-flex>
    </v-layout>
  </span>
</template>

<script>
export default {
  props: ['no', 'a', 'c', 'no2', 'a2', 'c2'],
  computed: {
    isCompleted () {
      if (this.$store.state.exam.isCompleted == 0) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    updateA (i) {
      this.$emit('aUpdated', i)
    },
    updateA2 (i) {
      this.$emit('a2Updated', i)
    }
  }
}
</script>

<style>
</style>
