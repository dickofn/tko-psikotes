<template>
  <span>
    <v-layout row wrap>
      <v-flex offset-md2 xs1>
        <b>{{no}}.</b>
      </v-flex>
      <v-flex lg6 md6 xs11>
        <v-img :src="u" :alt="'Soal - ' + no" max-height="500px" contain position="left"></v-img>
      </v-flex>
      <v-flex offset-lg0 lg1 offset-md3 md8 offset-xs1 xs12 align-self-end>
        <v-radio-group
          :row="xsScreen"
          :value="c"
          :rules="[rules.required]"
          @change="updateA"
          :disabled="isCompleted"
          required
        >
          <v-radio label="1" value="1"></v-radio>
          <v-radio label="2" value="2"></v-radio>
          <v-radio label="3" value="3"></v-radio>
          <v-radio label="4" value="4"></v-radio>
          <v-radio label="5" value="5"></v-radio>
          <v-radio label="6" value="6"></v-radio>
          <v-radio label="7" value="7"></v-radio>
          <v-radio label="8" value="8"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex offset-md2 md8 xs12 pt-5 pb-5>
        <v-divider></v-divider>
      </v-flex>
    </v-layout>
  </span>
</template>

<script>
export default {
  props: ['no', 'u', 'c', 'rules', 'valid'],
  data () {
    return {
      windowWidth: window.innerWidth
    }
  },
  computed: {
    isCompleted () {
      if (this.$store.state.exam.isCompleted == 0) {
        return false
      } else {
        return true
      }
    },
    xsScreen () {
      if (this.windowWidth <= 1263) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    updateA (i) {
      i = { n: this.no, a: i }
      const index = this.no - 1
      this.$emit('cUpdated', { i, index })
      this.$emit('validUpdated', this.valid)
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style>
</style>
