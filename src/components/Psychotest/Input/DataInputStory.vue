<template>
  <span>
    <v-layout row wrap>
      <v-flex offset-md1 xs1 text-xs-right>
        {{ no }}
      </v-flex>
      <v-flex md8 xs11>
        {{ q }}
      </v-flex>
    </v-layout>

    <v-layout row wrap align-center>
      <v-flex md8 offset-md2 xs12>
        <v-radio-group :value="a" @change="updateA" required>
          <v-radio :label="'a. ' + c[0]" value="a"></v-radio>
          <v-radio :label="'b. ' + c[1]" value="b"></v-radio>
          <v-radio :label="'c. ' + c[2]" value="c"></v-radio>
          <v-radio :label="'d. ' + c[3]" value="d"></v-radio>
          <v-radio :label="'e. ' + c[4]" value="e"></v-radio>
        </v-radio-group>
      </v-flex>
    </v-layout>
  </span>
</template>

<script>
export default {
  props: ['no', 'q', 'a', 'c'],
  methods: {
    updateA (i) {
      this.$emit('aUpdated', i)
    }
  }
}
</script>

<style>
</style>
