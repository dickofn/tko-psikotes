<template>
  <span>
    <v-layout row wrap align-center>
      <v-flex offset-md1 xs1 text-xs-right>{{ no }}</v-flex>
      <v-flex md3 xs11>
        <v-radio-group :value="a" @change="updateA" required>
          <v-radio :label="'A. ' + c[0]" value="A"></v-radio>
          <v-radio :label="'B. ' + c[1]" value="B"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs1 text-xs-right>{{ no2 }}</v-flex>
      <v-flex md3 xs11>
        <v-radio-group :value="a2" @change="updateA2" required>
          <v-radio :label="'A. ' + c2[0]" value="A"></v-radio>
          <v-radio :label="'B. ' + c2[1]" value="B"></v-radio>
        </v-radio-group>
      </v-flex>
    </v-layout>
  </span>
</template>

<script>
export default {
  props: ['no', 'a', 'c', 'no2', 'a2', 'c2'],
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
