<template>
  <span>
    <v-layout row wrap>
      <v-flex offset-md1 xs1 text-xs-right>{{ no }}</v-flex>
      <v-flex md8 xs11>{{ question }}</v-flex>
    </v-layout>

    <v-layout row wrap mb-2>
      <v-flex md5 offset-md2 xs5 offset-xs1>
        <v-text-field
          label="Jawaban"
          name="answer"
          id="answer"
          :value="answer"
          @input="updateAnswer"
          :rules="[rules.required, rules.number]"
          required
          @keydown.188="preventComma"
        ></v-text-field>
      </v-flex>
    </v-layout>
  </span>
</template>

<script>
export default {
  props: ['no', 'question', 'answer', 'rules', 'valid'],
  methods: {
    updateAnswer (i) {
      this.$emit('answerUpdated', i)
      this.$emit('validUpdated', this.valid)
    },
    preventComma (e) {
      e.preventDefault()
    }
  }
}
</script>

<style>
</style>
