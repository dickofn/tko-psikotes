<template>
  <v-container grid-list-xs>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <v-spacer></v-spacer>
            <h1 class="headline text-uppercase text-xs-center font-weight-light">Data Keluarga</h1>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" v-model="valid">
                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <h4>Kontak yang dapat dihubungi dalam keadaan darurat</h4>
                    <v-text-field
                      label="Nama Lengkap"
                      name="emergencyName"
                      id="emergencyName"
                      v-model="emergencyName"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>

                  <v-flex md8 offset-md2 xs12>
                    <v-select
                      :items="emergencyRelations"
                      label="Jenis Relasi"
                      v-model="emergencyRelation"
                      :rules="[rules.required]"
                      required
                    ></v-select>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <h4>Alamat kontak yang dapat dihubungi</h4>
                  </v-flex>
                  <v-flex md8 offset-md2 xs12>
                    <v-textarea
                      label="Alamat Lengkap"
                      name="addressEmergencyDetail"
                      id="addressEmergencyDetail"
                      v-model="addressEmergencyDetail"
                      :rules="[rules.required]"
                      required
                      rows="2"
                    ></v-textarea>
                  </v-flex>
                  <v-flex md4 offset-md2 xs12>
                    <v-text-field
                      label="Kelurahan"
                      name="addressEmergencyKelurahan"
                      id="addressEmergencyKelurahan"
                      v-model="addressEmergencyKelurahan"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex md4 xs12>
                    <v-text-field
                      label="Kecamatan"
                      name="addressEmergencyKecamatan"
                      id="addressEmergencyKecamatan"
                      v-model="addressEmergencyKecamatan"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex md4 offset-md2 xs12>
                    <v-text-field
                      label="Kota"
                      name="addressEmergencyKota"
                      id="addressEmergencyKota"
                      v-model="addressEmergencyKota"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex md4 xs12>
                    <v-text-field
                      label="Propinsi"
                      name="addressEmergencyPropinsi"
                      id="addressEmergencyPropinsi"
                      v-model="addressEmergencyPropinsi"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex md2 offset-md8 xs12>
                    <v-text-field
                      label="Kode Pos"
                      name="addressEmergencyPos"
                      id="addressEmergencyPos"
                      v-model="addressEmergencyPos"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <v-text-field
                      label="Handphone/Telephone"
                      name="emergencyNumber"
                      id="emergencyNumber"
                      v-model="emergencyNumber"
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
      emergencyName: "",
      emergencyRelations: ["Saudara", "Keluarga", "Teman Dekat"],
      emergencyRelation: "",
      addressEmergencyDetail: "",
      addressEmergencyKelurahan: "",
      addressEmergencyKecamatan: "",
      addressEmergencyKota: "",
      addressEmergencyPropinsi: "",
      addressEmergencyPos: "",
      emergencyNumber: "",
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
