<template>
  <span>
    <v-layout row wrap align-center text-xs-center>
      <v-flex offset-md1 xs1 text-xs-right>{{ no }}</v-flex>
      <v-flex md1 xs1>{{ q[0] }}</v-flex>
      <v-flex md1 xs1>{{ q[1] }}</v-flex>
      <v-flex md1 xs1>{{ q[2] }}</v-flex>
      <v-flex md1 xs1>{{ q[3] }}</v-flex>
      <v-flex md1 xs1>{{ q[4] }}</v-flex>
      <v-flex md1 xs1>{{ q[5] }}</v-flex>

      <v-flex md1 xs2 pl-1 pr-1>
        <v-text-field
          name="answer1"
          id="answer1"
          v-model="answer1"
          @input="updateAnswer"
          :rules="[rules.required, rules.number]"
          required
          @keydown.188="preventComma"
          :disabled="isCompleted"
        ></v-text-field>
      </v-flex>
      <v-flex md1 xs2 pl-1 pr-1>
        <v-text-field
          name="answer2"
          id="answer2"
          v-model="answer2"
          @input="updateAnswer"
          :rules="[rules.required, rules.number]"
          required
          @keydown.188="preventComma"
          :disabled="isCompleted"
        ></v-text-field>
      </v-flex>
    </v-layout>
  </span>
</template>

<script>
export default {
  props: ['no', 'q', 'a', 'rules', 'valid'],
  data () {
    return {
      answer1: "",
      answer2: ""
    }
  },
  methods: {
    updateAnswer () {
      this.$emit('answerUpdated', this.answer1 + "," + this.answer2)
      this.$emit('validUpdated', this.valid)
    },
    preventComma (e) {
      e.preventDefault()
    }
  },
  computed: {
    isCompleted () {
      if (this.$store.state.exam.isCompleted == 0) {
        return false
      } else {
        return true
      }
    }
  },
  created () {
    setTimeout(() => {
      if (this.$store.state.exam.isCompleted == 1) {
        this.answer1 = this.a.split(',')[0]
        this.answer2 = this.a.split(',')[1]
      }
    }, 100);
  }
}
</script>

<style>
</style>
