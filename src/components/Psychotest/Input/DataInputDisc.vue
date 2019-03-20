<template>
  <span>
    <v-layout row wrap mt-5>
      <v-flex md1 offset-md2 xs2 text-xs-center>M
        <v-divider></v-divider>
      </v-flex>

      <v-flex md1 xs2 text-xs-center>L
        <v-divider></v-divider>
      </v-flex>

      <v-flex md6 xs8>&nbsp;
        <v-divider></v-divider>
      </v-flex>
    </v-layout>

    <v-layout row wrap align-center>
      <v-flex md1 offset-md2 xs2>
        <v-radio-group
          v-model="radGroupTemp1"
          :rules="[rules.required]"
          @change="updateM"
          :disabled="isCompleted"
          required
        >
          <v-radio :label="mv[0]" :value="mv[0]"></v-radio>
        </v-radio-group>
      </v-flex>

      <v-flex md1 xs2>
        <v-radio-group
          v-model="radGroupTemp2"
          :rules="[rules.required]"
          @change="updateL"
          :disabled="isCompleted"
          required
        >
          <v-radio :label="lv[0]" :value="lv[0]"></v-radio>
        </v-radio-group>
      </v-flex>

      <v-flex md6 xs8>{{ t[0] }}</v-flex>
    </v-layout>

    <v-layout row wrap align-center>
      <v-flex md1 offset-md2 xs2>
        <v-radio-group
          v-model="radGroupTemp1"
          :rules="[rules.required]"
          @change="updateM"
          :disabled="isCompleted"
          required
        >
          <v-radio :label="mv[1]" :value="mv[1]"></v-radio>
        </v-radio-group>
      </v-flex>

      <v-flex md1 xs2>
        <v-radio-group
          v-model="radGroupTemp2"
          :rules="[rules.required]"
          @change="updateL"
          :disabled="isCompleted"
          required
        >
          <v-radio :label="lv[1]" :value="lv[1]"></v-radio>
        </v-radio-group>
      </v-flex>

      <v-flex md6 xs8>{{ t[1] }}</v-flex>
    </v-layout>

    <v-layout row wrap align-center>
      <v-flex md1 offset-md2 xs2>
        <v-radio-group
          v-model="radGroupTemp1"
          :rules="[rules.required]"
          @change="updateM"
          :disabled="isCompleted"
          required
        >
          <v-radio :label="mv[2]" :value="mv[2]"></v-radio>
        </v-radio-group>
      </v-flex>

      <v-flex md1 xs2>
        <v-radio-group
          v-model="radGroupTemp2"
          :rules="[rules.required]"
          @change="updateL"
          :disabled="isCompleted"
          required
        >
          <v-radio :label="lv[2]" :value="lv[2]"></v-radio>
        </v-radio-group>
      </v-flex>

      <v-flex md6 xs8>{{ t[2] }}</v-flex>
    </v-layout>

    <v-layout row wrap align-center>
      <v-flex md1 offset-md2 xs2>
        <v-radio-group
          v-model="radGroupTemp1"
          :rules="[rules.required]"
          @change="updateM"
          :disabled="isCompleted"
          required
        >
          <v-radio :label="mv[3]" :value="mv[3]"></v-radio>
        </v-radio-group>
      </v-flex>

      <v-flex md1 xs2>
        <v-radio-group
          v-model="radGroupTemp2"
          :rules="[rules.required]"
          @change="updateL"
          :disabled="isCompleted"
          required
        >
          <v-radio :label="lv[3]" :value="lv[3]"></v-radio>
        </v-radio-group>
      </v-flex>

      <v-flex md6 xs8>{{ t[3] }}</v-flex>
    </v-layout>

    <v-layout row wrap align-center v-if="sameRow">
      <v-flex offset-md2 md8 xs12>
        <p style="color:red">*JAWABAN TIDAK BOLEH SAMA / SEJAJAR</p>
      </v-flex>
    </v-layout>
  </span>
</template>

<script>
export default {
  props: ['no', 'm', 'l', 'mv', 'lv', 't', 'rules', 'valid'],
  data () {
    return {
      radGroupTemp1: this.m,
      radGroupTemp2: this.l,
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
    sameRow () {
      if (
        (this.radGroupTemp1 == this.mv[0] && this.radGroupTemp2 == this.lv[0])
        || (this.radGroupTemp1 == this.mv[1] && this.radGroupTemp2 == this.lv[1])
        || (this.radGroupTemp1 == this.mv[2] && this.radGroupTemp2 == this.lv[2])
        || (this.radGroupTemp1 == this.mv[3] && this.radGroupTemp2 == this.lv[3])
      ) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    updateM (i) {
      if (i == "*" || i == "**") {
        i = { n: this.no, a: "M_Star" }
      } else if (i == "D" || i == "DD") {
        i = { n: this.no, a: "M_D" }
      } else if (i == "I" || i == "II") {
        i = { n: this.no, a: "M_I" }
      } else if (i == "S" || i == "SS") {
        i = { n: this.no, a: "M_S" }
      } else if (i == "C" || i == "CC") {
        i = { n: this.no, a: "M_C" }
      }
      if (i == undefined) return //prevent update value when resetting form
      this.$emit('mUpdated', i)
      this.$emit('validUpdated', this.valid)
      this.sameRow ? this.$emit('validUpdated', false) : this.$emit('validUpdated', true)
    },
    updateL (i) {
      if (i == "*" || i == "**") {
        i = { n: this.no, a: "L_Star" }
      } else if (i == "D" || i == "DD") {
        i = { n: this.no, a: "L_D" }
      } else if (i == "I" || i == "II") {
        i = { n: this.no, a: "L_I" }
      } else if (i == "S" || i == "SS") {
        i = { n: this.no, a: "L_S" }
      } else if (i == "C" || i == "CC") {
        i = { n: this.no, a: "L_C" }
      }
      if (i == undefined) return //prevent update value when resetting form
      this.$emit('lUpdated', i)
      this.$emit('validUpdated', this.valid)
      this.sameRow ? this.$emit('validUpdated', false) : this.$emit('validUpdated', true)

    }
  }
}
</script>

<style>
</style>
