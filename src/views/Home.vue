<template>
  <v-container grid-list-xs>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <v-spacer></v-spacer>
            <h1
              class="headline text-uppercase font-weight-light text-xs-center"
            >Data Diri Kandidat Karyawan</h1>
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
                  <v-flex md8 offset-md2 xs12>
                    <h4>Jenis Kelamin</h4>
                    <v-radio-group v-model="gender" row :rules="[rules.required]" required>
                      <v-radio label="Pria" value="pria"></v-radio>
                      <v-radio label="Wanita" value="wanita"></v-radio>
                    </v-radio-group>
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
                    <h4>Alamat Sekarang</h4>
                  </v-flex>
                  <v-flex md8 offset-md2 xs12>
                    <v-textarea
                      label="Alamat Lengkap"
                      name="addressCurrentDetail"
                      id="addressCurrentDetail"
                      v-model="addressCurrentDetail"
                      :rules="[rules.required]"
                      required
                      rows="2"
                    ></v-textarea>
                  </v-flex>
                  <v-flex md4 offset-md2 xs12>
                    <v-text-field
                      label="Kelurahan"
                      name="addressCurrentKelurahan"
                      id="addressCurrentKelurahan"
                      v-model="addressCurrentKelurahan"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex md4 xs12>
                    <v-text-field
                      label="Kecamatan"
                      name="addressCurrentKecamatan"
                      id="addressCurrentKecamatan"
                      v-model="addressCurrentKecamatan"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex md4 offset-md2 xs12>
                    <v-text-field
                      label="Kota"
                      name="addressCurrentKota"
                      id="addressCurrentKota"
                      v-model="addressCurrentKota"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex md4 xs12>
                    <v-text-field
                      label="Propinsi"
                      name="addressCurrentPropinsi"
                      id="addressCurrentPropinsi"
                      v-model="addressCurrentPropinsi"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex md2 offset-md8 xs12>
                    <v-text-field
                      label="Kode Pos"
                      name="addressCurrentPos"
                      id="addressCurrentPos"
                      v-model="addressCurrentPos"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <h4>Alamat Tetap</h4>
                  </v-flex>
                  <v-flex md8 offset-md2 xs12>
                    <v-textarea
                      label="Alamat Lengkap"
                      name="addressPermanentDetail"
                      id="addressPermanentDetail"
                      v-model="addressPermanentDetail"
                      :rules="[rules.required]"
                      required
                      rows="2"
                    ></v-textarea>
                  </v-flex>
                  <v-flex md4 offset-md2 xs12>
                    <v-text-field
                      label="Kelurahan"
                      name="addressPermanentKelurahan"
                      id="addressPermanentKelurahan"
                      v-model="addressPermanentKelurahan"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex md4 xs12>
                    <v-text-field
                      label="Kecamatan"
                      name="addressPermanentKecamatan"
                      id="addressPermanentKecamatan"
                      v-model="addressPermanentKecamatan"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex md4 offset-md2 xs12>
                    <v-text-field
                      label="Kota"
                      name="addressPermanentKota"
                      id="addressPermanentKota"
                      v-model="addressPermanentKota"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex md4 xs12>
                    <v-text-field
                      label="Propinsi"
                      name="addressPermanentPropinsi"
                      id="addressPermanentPropinsi"
                      v-model="addressPermanentPropinsi"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex md2 offset-md8 xs12>
                    <v-text-field
                      label="Kode Pos"
                      name="addressPermanentPos"
                      id="addressPermanentPos"
                      v-model="addressPermanentPos"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <v-checkbox
                      :label="'Alamat orang tua sama dengan alamat tetap?'"
                      v-model="addressParentCheck"
                    ></v-checkbox>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mb-2 v-if="!addressParentCheck">
                  <v-flex md8 offset-md2 xs12>
                    <h4>Alamat Orang Tua</h4>
                  </v-flex>
                  <v-flex md8 offset-md2 xs12>
                    <v-textarea
                      label="Alamat Lengkap"
                      name="addressParentDetail"
                      id="addressParentDetail"
                      v-model="addressParentDetail"
                      :rules="[rules.required]"
                      required
                      rows="2"
                    ></v-textarea>
                  </v-flex>
                  <v-flex md4 offset-md2 xs12>
                    <v-text-field
                      label="Kelurahan"
                      name="addressParentKelurahan"
                      id="addressParentKelurahan"
                      v-model="addressParentKelurahan"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex md4 xs12>
                    <v-text-field
                      label="Kecamatan"
                      name="addressParentKecamatan"
                      id="addressParentKecamatan"
                      v-model="addressParentKecamatan"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex md4 offset-md2 xs12>
                    <v-text-field
                      label="Kota"
                      name="addressParentKota"
                      id="addressParentKota"
                      v-model="addressParentKota"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex md4 xs12>
                    <v-text-field
                      label="Propinsi"
                      name="addressParentPropinsi"
                      id="addressParentPropinsi"
                      v-model="addressParentPropinsi"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex md2 offset-md8 xs12>
                    <v-text-field
                      label="Kode Pos"
                      name="addressParentPos"
                      id="addressParentPos"
                      v-model="addressParentPos"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mb-2>
                  <v-flex md4 offset-md2 xs12>
                    <v-text-field
                      label="Handphone"
                      name="contactNumberMobile"
                      id="contactNumberMobile"
                      v-model="contactNumberMobile"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex md4 xs12>
                    <v-text-field
                      label="Telephone"
                      name="contactNumberHome"
                      id="contactNumberHome"
                      v-model="contactNumberHome"
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
                    <v-select
                      :items="idTypes"
                      label="Tipe ID"
                      v-model="idType"
                      :rules="[rules.required]"
                      required
                    ></v-select>
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
                  <v-flex md4 xs12 v-if="martialStatus!='Belum Menikah'">
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
                        v-model="martialInfoDate"
                        label="Sejak Tanggal (YYYY-MM-DD)"
                        prepend-icon="event"
                      ></v-text-field>
                      <v-date-picker
                        v-model="martialInfoDate"
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
      gender: "",
      birthPlace: "",
      birthDate: "",
      birthDateMenu: false,
      addressCurrentDetail: "",
      addressCurrentKelurahan: "",
      addressCurrentKecamatan: "",
      addressCurrentKota: "",
      addressCurrentPropinsi: "",
      addressCurrentPos: "",
      addressPermanentDetail: "",
      addressPermanentKelurahan: "",
      addressPermanentKecamatan: "",
      addressPermanentKota: "",
      addressPermanentPropinsi: "",
      addressPermanentPos: "",
      addressParentCheck: false,
      addressParentDetail: "",
      addressParentKelurahan: "",
      addressParentKecamatan: "",
      addressParentKota: "",
      addressParentPropinsi: "",
      addressParentPos: "",
      contactNumberMobile: "",
      contactNumberHome: "",
      email: "",
      religion: "",
      bodyWeight: "",
      bodyHeight: "",
      bodyAbnormalities: "",
      idTypes: ["KTP", "SIM", "Passport"],
      idType: "",
      idNumber: "",
      bloodTypes: ["A", "B", "AB", "O"],
      bloodType: "",
      nationality: "",
      hobby: "",
      martialStatuses: ["Belum Menikah", "Menikah", "Janda-Duda"],
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
