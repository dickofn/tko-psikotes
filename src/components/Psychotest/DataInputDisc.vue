<template>
  <span>
    <v-layout row wrap>
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
        <v-radio-group v-model="radGroupTemp1" :rules="[rules.required]" @change="updateM" required>
          <v-radio :label="mv[0]" :value="mv[0]"></v-radio>
        </v-radio-group>
      </v-flex>

      <v-flex md1 xs2>
        <v-radio-group v-model="radGroupTemp2" :rules="[rules.required]" @change="updateL" required>
          <v-radio :label="lv[0]" :value="lv[0]"></v-radio>
        </v-radio-group>
      </v-flex>

      <v-flex md6 xs8>{{ t[0] }}</v-flex>
    </v-layout>

    <v-layout row wrap align-center>
      <v-flex md1 offset-md2 xs2>
        <v-radio-group v-model="radGroupTemp1" :rules="[rules.required]" @change="updateM" required>
          <v-radio :label="mv[1]" :value="mv[1]"></v-radio>
        </v-radio-group>
      </v-flex>

      <v-flex md1 xs2>
        <v-radio-group v-model="radGroupTemp2" :rules="[rules.required]" @change="updateL" required>
          <v-radio :label="lv[1]" :value="lv[1]"></v-radio>
        </v-radio-group>
      </v-flex>

      <v-flex md6 xs8>{{ t[1] }}</v-flex>
    </v-layout>

    <v-layout row wrap align-center>
      <v-flex md1 offset-md2 xs2>
        <v-radio-group v-model="radGroupTemp1" :rules="[rules.required]" @change="updateM" required>
          <v-radio :label="mv[2]" :value="mv[2]"></v-radio>
        </v-radio-group>
      </v-flex>

      <v-flex md1 xs2>
        <v-radio-group v-model="radGroupTemp2" :rules="[rules.required]" @change="updateL" required>
          <v-radio :label="lv[2]" :value="lv[2]"></v-radio>
        </v-radio-group>
      </v-flex>

      <v-flex md6 xs8>{{ t[2] }}</v-flex>
    </v-layout>

    <v-layout row wrap align-center mb-5>
      <v-flex md1 offset-md2 xs2>
        <v-radio-group v-model="radGroupTemp1" :rules="[rules.required]" @change="updateM" required>
          <v-radio :label="mv[3]" :value="mv[3]"></v-radio>
        </v-radio-group>
      </v-flex>

      <v-flex md1 xs2>
        <v-radio-group v-model="radGroupTemp2" :rules="[rules.required]" @change="updateL" required>
          <v-radio :label="lv[3]" :value="lv[3]"></v-radio>
        </v-radio-group>
      </v-flex>

      <v-flex md6 xs8>{{ t[3] }}</v-flex>
    </v-layout>
  </span>
</template>

<script>
export default {
  props: ['m', 'l', 'mv', 'lv', 't', 'rules', 'valid'],
  data(){
    return {
      radGroupTemp1:'',
      radGroupTemp2:'',
    }
  },
  methods: {
    updateM (i) {
      this.$emit('mUpdated', i),
      this.$emit('validUpdated', this.valid)
    },
    updateL (i) {
      this.$emit('lUpdated', i)
      this.$emit('validUpdated', this.valid)
    }
  }
}
</script>

<style>
</style>
