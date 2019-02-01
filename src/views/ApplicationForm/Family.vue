<template>
  <v-container grid-list-xs>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <h1
              class="headline text-uppercase text-xs-center font-weight-light"
            >Data Keluarga</h1>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" v-model="valid">
                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <v-text-field
                      label="Nama Lengkap"
                      name="name"
                      id="name"
                      v-model="name"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                

                <v-layout row wrap mt-5 justify-end>
                  <v-flex offset-md6 offset-lg7 offset-xl8>
                    <v-btn :disabled="!valid" color="success">Submit</v-btn>
                    <v-btn color="error" @click="reset">Reset Form</v-btn>
                  </v-flex>
                </v-layout>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {      
      valid: true,
      rules: {
        required: v => !!v || 'Wajib diisi!',
      }
    }
  },
  methods: {
    reset () {
      console.log(this.valid)
      this.$refs.form.reset()
    }
  }
}
</script>
