<template>
  <v-container grid-list-xs>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <v-spacer></v-spacer>
            <h1 class="headline text-uppercase font-weight-light">Data Diri Kandidat Karyawan</h1>
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
                        required
                      ></v-text-field>
                      <v-date-picker
                        v-model="birthDate"
                        @input="birthDateMenu = false"
                        :rules="[rules.required]"
                      ></v-date-picker>
                    </v-menu>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <v-textarea
                      label="Alamat Sekarang dan Kode Pos"
                      name="addressPermanent"
                      id="addressPermanent"
                      v-model="addressPermanent"
                      :rules="[rules.required]"
                      required
                    ></v-textarea>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <v-textarea
                      label="Alamat Tetap dan Kode Pos"
                      name="addressCurrent"
                      id="addressCurrent"
                      v-model="addressCurrent"
                      :rules="[rules.required]"
                      required
                    ></v-textarea>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <v-text-field
                      label="Telepon dan HP"
                      name="contactNumber"
                      id="contactNumber"
                      v-model="contactNumber"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <v-text-field
                      label="Email"
                      name="email"
                      id="email"
                      v-model="email"
                      :rules="[rules.required, rules.email]"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <v-textarea
                      label="Alamat Tetap dan Kode Pos"
                      name="addressParent"
                      id="addressParent"
                      v-model="addressParent"
                      hint="Jika sama dengan alamat tetap, biarkan kosong"
                      persistent-hint
                    ></v-textarea>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <v-text-field
                      label="Agama"
                      name="religion"
                      id="religion"
                      v-model="religion"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mb-2>
                  <v-flex md2 offset-md2 xs12>
                    <v-text-field
                      label="Berat (KG)"
                      name="bodyWeight"
                      id="bodyWeight"
                      v-model="bodyWeight"
                    ></v-text-field>
                  </v-flex>
                  <v-flex md2 xs12>
                    <v-text-field
                      label="Tinggi (CM)"
                      name="bodyHeight"
                      id="bodyHeight"
                      v-model="bodyHeight"
                    ></v-text-field>
                  </v-flex>
                  <v-flex md4 xs12>
                    <v-text-field
                      label="Kelainan Fisik"
                      name="bodyAbnormalities"
                      id="bodyAbnormalities"
                      v-model="bodyAbnormalities"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mb-2>
                  <v-flex md2 offset-md2 xs4>
                    <v-select :items="idTypes" label="Tipe ID" v-model="idType"></v-select>
                  </v-flex>
                  <v-flex md4 xs8>
                    <v-text-field
                      label="No KTP/SIM/Passport"
                      name="idNumber"
                      id="idNumber"
                      v-model="idNumber"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex md2 xs12>
                    <v-select :items="bloodTypes" label="Golongan Darah" v-model="bloodType"></v-select>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mb-2>
                  <v-flex md4 offset-md2 xs12>
                    <v-text-field
                      label="Kewarganegaraan"
                      name="nationality"
                      id="nationality"
                      v-model="nationality"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex md4 xs12>
                    <v-text-field label="Hobby" name="hobby" id="hobby" v-model="hobby"></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mb-2>
                  <v-flex md4 offset-md2 xs12>
                    <v-select
                      :items="martialStatuses"
                      label="Status Pernikahan"
                      v-model="martialStatus"
                      :rules="[rules.required]"
                      required
                    ></v-select>
                  </v-flex>
                  <v-flex md4 xs12 v-if="martialStatus!='Belum menikah'">
                    <v-menu
                      :close-on-content-click="false"
                      v-model="martialInfoDate"
                      :nudge-right="40"
                      lazy
                      transition="scale-transition"
                      offset-y
                      full-width
                      min-width="290px"
                    >
                      <v-text-field
                        slot="activator"
                        v-model="martialStatusDate"
                        label="Sejak Tanggal (YYYY-MM-DD)"
                        prepend-icon="event"
                      ></v-text-field>
                      <v-date-picker
                        v-model="martialStatusDate"
                        @input="martialInfoDate = false"
                        :rules="[rules.required]"
                      ></v-date-picker>
                    </v-menu>
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
      name: "",
      birthPlace: "",
      birthDate: "",
      birthDateMenu: false,
      addressCurrent: "",
      addressPermanent: "",
      addressParent: "",
      contactNumber: "",
      email: "",
      religion: "",
      bodyWeight: "",
      bodyHeight: "",
      bodyAbnormalities: "",
      idTypes: ["KTP","SIM","Passport"],
      idType: "",
      idNumber: "",
      bloodTypes: ["A", "B", "AB", "O"],
      bloodType: "",
      nationality: "",
      hobby: "",
      martialStatuses: ["Belum menikah", "Menikah", "Janda-Duda"],
      martialStatus: "",
      martialInfoDate: "",
      martialInfoDateMenu: false,
      valid: true,
      rules: {
        required: v => !!v || 'Wajib diisi!',
        email: v => /.+@.+/.test(v) || 'Format email tidak sesuai!'
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
