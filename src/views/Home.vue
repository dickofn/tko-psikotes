<template>
  <v-container grid-list-xs>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <v-spacer></v-spacer>
            <h1
              class="headline text-uppercase font-weight-light text-xs-center"
            >Data Singkat Kandidat Karyawan</h1>
            <v-spacer></v-spacer>
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

                <v-layout row wrap mb-2>
                  <v-flex md4 offset-md2 xs12>
                    <v-text-field
                      label="Tempat Lahir"
                      name="birthPlace"
                      id="birthPlace"
                      v-model="birthPlace"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex md4 xs12>
                    <v-menu
                      :close-on-content-click="false"
                      v-model="birthDateMenu"
                      :nudge-right="40"
                      lazy
                      transition="scale-transition"
                      offset-y
                      full-width
                      min-width="290px"
                    >
                      <v-text-field
                        slot="activator"
                        v-model="birthDate"
                        label="Tanggal Lahir (YYYY-MM-DD)"
                        prepend-icon="event"
                        :rules="[rules.required]"
                        readonly
                        required
                      ></v-text-field>
                      <v-date-picker
                        v-model="birthDate"
                        @input="birthDateMenu = false"
                        :rules="[rules.required]"
                        :allowedDates="allowedDates"
                      ></v-date-picker>
                    </v-menu>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mt-5 justify-end>
                  <v-flex offset-md6 offset-lg7 offset-xl8>
                    <v-btn
                      :disabled="!valid || isLoading"
                      color="success"
                      @click="submit(0)"
                    >Kerjakan Test</v-btn>
                    <v-btn
                      :disabled="!valid || isLoading"
                      color="success"
                      @click="submit(1)"
                    >Isi Data Diri</v-btn>
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
      name: "",
      gender: "",
      birthPlace: "",
      birthDate: "",
      birthDateMenu: false,
      valid: true,
      allowedDates: val => parseInt(val.split('-').join('')) <= parseInt(new Date().toISOString().substr(0, 10).split('-').join('')), // can only choose today or before
      rules: {
        required: v => !!v || 'Wajib diisi!',
      }
    }
  },
  computed: {
    isLoading () {
      return this.$store.state.shared.isLoading
    },
    examId () {
      return this.$store.state.user.examApplicantId
    }
  },
  methods: {
    submit (type) {
      const data = {
        name: this.name.toUpperCase(),
        placeBirth: this.birthPlace.toUpperCase(),
        dateBirth: this.birthDate
      }
      if (type == 0) {
        this.$store.dispatch('setApplicant', data)
          .then(res => {
            if (res.status == 200) {
              const routeData = {
                examInfoId: this.examId,
                sharedValue: "/exam/disc/" + this.examId
              }
              this.$store.dispatch('setCurrentRoute', routeData)
              const endRouteData = {
                examInfoId: this.examId,
                sharedValue: "exam"
              }
              this.$store.dispatch('setCurrentEndRoute', endRouteData)
              this.$router.replace({ name: 'disc', params: { examId: this.examId } })
            }
          })
          .catch(e => {
            console.log(e)
            alert("Ada kesalahan teknis, hubungi pihak Tokoonderdil")
          })
      } else {
        this.$store.dispatch('setApplicant', data)
          .then(res => {
            if (res.status == 200) {
              const routeData = {
                examInfoId: this.examId,
                sharedValue: "/self/" + this.examId
              }
              this.$store.dispatch('setCurrentRoute', routeData)
              const endRouteData = {
                examInfoId: this.examId,
                sharedValue: "self"
              }
              this.$store.dispatch('setCurrentEndRoute', endRouteData)
              this.$router.replace({ name: 'self', params: { examId: this.examId } })
            }
          })
          .catch(e => {
            console.log(e)
            alert("Ada kesalahan teknis, hubungi HRD / karyawan terkait!")
          })
      }
    },
    reset () {
      console.log(this.valid)
      this.$refs.form.reset()
    }
  },
}
</script>
