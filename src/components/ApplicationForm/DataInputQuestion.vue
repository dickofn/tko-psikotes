<template>
  <span>
    <v-layout row wrap>
      <v-flex md8 offset-md2 xs12>
        <p>{{ text }}</p>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex md8 offset-md2 xs12>
        <v-radio-group
          row
          :value="q"
          @change="updateQ"
          v-if="q!='none'"
          :rules="[rules.required]"
          required
        >
          <v-radio label="Ya" value="1"></v-radio>
          <v-radio label="Tidak" value="0"></v-radio>
        </v-radio-group>
      </v-flex>
    </v-layout>

    <v-layout row wrap mb-5>
      <v-flex md8 offset-md2 xs12>
        <v-text-field
          label="Penjelasan"
          name="e"
          id="e"
          :value="e"
          @input="updateE"
          :rules="[rules.required]"
          required
        ></v-text-field>
      </v-flex>
    </v-layout>
  </span>
</template>

<script>
export default {
  props: ['text', 'q', 'e', 'rules', 'valid'],
  methods: {
    updateQ (i) {
      this.$emit('qUpdated', i),
      this.$emit('validUpdated', this.valid)
    },
    updateE (i) {
      this.$emit('eUpdated', i)
      this.$emit('validUpdated', this.valid)
    }
  }
}
</script>

<style>
</style>
