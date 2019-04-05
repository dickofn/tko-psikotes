<template>
  <v-container grid-list-xs>
    <v-layout row>
      <v-flex xs12>
        <v-card v-if="isCompleted">
          <v-card-title primary-title>
            <v-spacer></v-spacer>
            <h1
              class="headline text-uppercase font-weight-light text-xs-center"
            >Data Diri Kandidat Karyawan Sudah Pernah Diisi</h1>
            <v-spacer></v-spacer>
          </v-card-title>
        </v-card>
        <v-card v-else>
          <v-card-title primary-title>
            <v-spacer></v-spacer>
            <h1
              class="headline text-uppercase font-weight-light text-xs-center"
            >Data Diri Kandidat Karyawan</h1>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" v-model="valid" @submit.prevent="submit">
                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <v-text-field
                      label="Nama Lengkap"
                      name="name"
                      id="name"
                      :value="applicantName"
                      :rules="[rules.required]"
                      required
                      disabled
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <h4>Jenis Kelamin</h4>
                    <v-radio-group v-model="gender" row :rules="[rules.required]" required>
                      <v-radio label="Pria" value="M"></v-radio>
                      <v-radio label="Wanita" value="F"></v-radio>
                    </v-radio-group>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mb-2>
                  <v-flex md4 offset-md2 xs12>
                    <v-text-field
                      label="Tempat Lahir"
                      name="birthPlace"
                      id="birthPlace"
                      :value="applicantBirthPlace"
                      :rules="[rules.required]"
                      required
                      disabled
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
                      disabled
                    >
                      <v-text-field
                        slot="activator"
                        :value="applicantBirthDate"
                        label="Tanggal Lahir (YYYY-MM-DD)"
                        prepend-icon="event"
                        :rules="[rules.required]"
                        required
                        disabled
                      ></v-text-field>
                      <v-date-picker
                        :value="applicantBirthDate"
                        @input="birthDateMenu = false"
                        :rules="[rules.required]"
                      ></v-date-picker>
                    </v-menu>
                  </v-flex>
                </v-layout>

                <data-input-address
                  :title="'Sekarang'"
                  :addressDetail="addressCurrentDetail"
                  :addressPropinsi="addressCurrentPropinsi"
                  :addressKota="addressCurrentKota"
                  :addressKecamatan="addressCurrentKecamatan"
                  :addressKelurahan="addressCurrentKelurahan"
                  :addressPos="addressCurrentPos"
                  :rules="rules"
                  :valid="valid"
                  @addressDetailUpdated="updateAddressCurrentDetail"
                  @addressPropinsiUpdated="updateAddressCurrentPropinsi"
                  @addressKotaUpdated="updateAddressCurrentKota"
                  @addressKecamatanUpdated="updateAddressCurrentKecamatan"
                  @addressKelurahanUpdated="updateAddressCurrentKelurahan"
                  @addressPosUpdated="updateAddressCurrentPos"
                  @validUpdated="updateValid"
                ></data-input-address>

                <data-input-address
                  :title="'Tetap'"
                  :addressDetail="addressPermanentDetail"
                  :addressPropinsi="addressPermanentPropinsi"
                  :addressKota="addressPermanentKota"
                  :addressKecamatan="addressPermanentKecamatan"
                  :addressKelurahan="addressPermanentKelurahan"
                  :addressPos="addressPermanentPos"
                  :rules="rules"
                  :valid="valid"
                  @addressDetailUpdated="updateAddressPermanentDetail"
                  @addressPropinsiUpdated="updateAddressPermanentPropinsi"
                  @addressKotaUpdated="updateAddressPermanentKota"
                  @addressKecamatanUpdated="updateAddressPermanentKecamatan"
                  @addressKelurahanUpdated="updateAddressPermanentKelurahan"
                  @addressPosUpdated="updateAddressPermanentPos"
                  @validUpdated="updateValid"
                ></data-input-address>

                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <v-checkbox
                      :label="'Alamat orang tua sama dengan alamat tetap?'"
                      v-model="addressParentCheck"
                    ></v-checkbox>
                  </v-flex>
                </v-layout>

                <data-input-address
                  v-if="!addressParentCheck"
                  :title="'Orang Tua'"
                  :addressDetail="addressParentDetail"
                  :addressPropinsi="addressParentPropinsi"
                  :addressKota="addressParentKota"
                  :addressKecamatan="addressParentKecamatan"
                  :addressKelurahan="addressParentKelurahan"
                  :addressPos="addressParentPos"
                  :rules="rules"
                  :valid="valid"
                  @addressDetailUpdated="updateAddressParentDetail"
                  @addressPropinsiUpdated="updateAddressParentPropinsi"
                  @addressKotaUpdated="updateAddressParentKota"
                  @addressKecamatanUpdated="updateAddressParentKecamatan"
                  @addressKelurahanUpdated="updateAddressParentKelurahan"
                  @addressPosUpdated="updateAddressParentPos"
                  @validUpdated="updateValid"
                ></data-input-address>

                <v-layout row wrap mb-2>
                  <v-flex md4 offset-md2 xs12>
                    <v-text-field
                      label="Handphone"
                      name="contactNumberMobile"
                      id="contactNumberMobile"
                      v-model="contactNumberMobile"
                      :rules="[rules.required, rules.number]"
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
                    <v-select
                      :items="religions"
                      label="Agama"
                      v-model="religion"
                      :rules="[rules.required]"
                      required
                    ></v-select>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mb-2>
                  <v-flex md2 offset-md2 xs12>
                    <v-text-field
                      label="Berat (KG)"
                      name="bodyWeight"
                      id="bodyWeight"
                      v-model="bodyWeight"
                      type="number"
                    ></v-text-field>
                  </v-flex>
                  <v-flex md2 xs12>
                    <v-text-field
                      label="Tinggi (CM)"
                      name="bodyHeight"
                      id="bodyHeight"
                      v-model="bodyHeight"
                      type="number"
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
                      v-if="idType!='Passport'"
                      label="No KTP/SIM/Passport"
                      name="idNumber"
                      id="idNumber"
                      v-model="idNumber"
                      :rules="[rules.required, rules.number]"
                      :maxlength="idLength"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-else
                      label="No KTP/SIM/Passport"
                      name="idNumber"
                      id="idNumber"
                      v-model="idNumber"
                      :rules="[rules.required]"
                      :maxlength="idLength"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex md2 xs12>
                    <v-select :items="bloodTypes" label="Golongan Darah" v-model="bloodType"></v-select>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mb-2>
                  <v-flex md4 offset-md2 xs12>
                    <v-autocomplete
                      v-model="nationality"
                      label="Kewarganegaraan"
                      name="nationality"
                      id="nationality"
                      :items="nationalityItems"
                      :loading="nationalityLoading"
                      :search-input.sync="nationalitySearch"
                      color="blue"
                      hide-no-data
                      hide-selected
                      item-text="countryName"
                      item-value="countryName"
                      :rules="[rules.required]"
                      required
                    ></v-autocomplete>
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
                      v-model="martialInfoDateMenu"
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
                        readonly
                      ></v-text-field>
                      <v-date-picker
                        v-model="martialInfoDate"
                        @input="martialInfoDateMenu = false"
                        :rules="[rules.required]"
                        :allowed-dates="allowedDates"
                      ></v-date-picker>
                    </v-menu>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mt-5 justify-end>
                  <v-flex offset-md6 offset-lg7 offset-xl8>
                    <v-btn :disabled="!valid" color="success" type="submit">Submit</v-btn>
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
import dataInputAddress from '../../components/ApplicationForm/DataInputAddress'

export default {
  data () {
    return {
      gender: "",
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
      religions: ["Aliran Kepercayaan", "Buddha", "Hindu", "Islam", "Katolik", "Kong Hu Cu", "Kristen"],
      religion: "",
      bodyWeight: "",
      bodyHeight: "",
      bodyAbnormalities: "",
      idTypes: ["KTP", "SIM", "Passport"],
      idType: "",
      idNumber: "",
      bloodTypes: ["A", "B", "AB", "O"],
      bloodType: "",
      nationalityItems: [],
      nationalityLoading: false,
      nationalitySearch: null,
      nationality: "",
      hobby: "",
      martialStatuses: ["Belum Menikah", "Menikah", "Janda-Duda"],
      martialStatus: "",
      martialInfoDate: "",
      martialInfoDateMenu: false,
      valid: true,
      allowedDates: val => parseInt(val.split('-').join('')) <= parseInt(new Date().toISOString().substr(0, 10).split('-').join('')), // can only choose today or before
      rules: {
        required: v => !!v || 'Wajib diisi!',
        email: v => /.+@.+/.test(v) || 'Format email tidak sesuai!',
        number: v => (/^[0-9]+$/.test(v)) || 'Harus berupa angka!' //Using regex to allow only [0-9]
      }
    }
  },
  computed: {
    idLength () {
      if (this.idType == "KTP") return 16
      else if (this.idType == "SIM") return 12
      else return 8
    },
    martial () {
      if (this.martialStatus == "Belum Menikah") {
        return false
      } else {
        return true
      }
    },
    applicantName () {
      return this.$store.state.user.examApplicantName
    },
    applicantBirthPlace () {
      return this.$store.state.user.examApplicantBirthPlace
    },
    applicantBirthDate () {
      return this.$store.state.user.examApplicantBirthDate
    },
    isCompleted () {
      return this.$store.state.user.self.isCompleted
    }
  },
  watch: {
    // eslint-disable-next-line
    nationalitySearch (val) {
      // Items have already been loaded
      if (this.nationalityItems.length > 0) return

      // Items have already been requested
      if (this.nationalityLoading) return

      this.nationalityLoading = true

      // Lazily load input items
      fetch(process.env.VUE_APP_API_URL + '/administratif/get/country')
        .then(res => res.json())
        .then(res => {
          const items = res.data
          this.nationalityItems = items
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => (this.nationalityLoading = false))
    }
  },
  methods: {
    updateAddressCurrentDetail (i) {
      this.addressCurrentDetail = i;
    },
    updateAddressCurrentPropinsi (i) {
      this.addressCurrentPropinsi = i;
    },
    updateAddressCurrentKota (i) {
      this.addressCurrentKota = i;
    },
    updateAddressCurrentKecamatan (i) {
      this.addressCurrentKecamatan = i;
    },
    updateAddressCurrentKelurahan (i) {
      this.addressCurrentKelurahan = i;
    },
    updateAddressCurrentPos (i) {
      this.addressCurrentPos = i;
    },
    updateAddressPermanentDetail (i) {
      this.addressPermanentDetail = i;
    },
    updateAddressPermanentPropinsi (i) {
      this.addressPermanentPropinsi = i;
    },
    updateAddressPermanentKota (i) {
      this.addressPermanentKota = i;
    },
    updateAddressPermanentKecamatan (i) {
      this.addressPermanentKecamatan = i;
    },
    updateAddressPermanentKelurahan (i) {
      this.addressPermanentKelurahan = i;
    },
    updateAddressPermanentPos (i) {
      this.addressPermanentPos = i;
    },
    updateAddressParentDetail (i) {
      this.addressParentDetail = i;
    },
    updateAddressParentPropinsi (i) {
      this.addressParentPropinsi = i;
    },
    updateAddressParentKota (i) {
      this.addressParentKota = i;
    },
    updateAddressParentKecamatan (i) {
      this.addressParentKecamatan = i;
    },
    updateAddressParentKelurahan (i) {
      this.addressParentKelurahan = i;
    },
    updateAddressParentPos (i) {
      this.addressParentPos = i;
    },
    updateValid (i) {
      this.valid = i;
    },
    submit () {
      if (this.addressParentCheck) {
        this.addressParentDetail = this.addressPermanentDetail
        this.addressParentKelurahan = this.addressPermanentKelurahan
        this.addressParentKecamatan = this.addressPermanentKecamatan
        this.addressParentKota = this.addressPermanentKota
        this.addressParentPropinsi = this.addressPermanentPropinsi
        this.addressParentPos = this.addressPermanentPos
      }
      const data = {
        applicant: {
          examInfoId: this.$route.params.examId,
          picture: "",
          fullName: this.applicantName,
          sex: this.gender,
          placeBirth: this.applicantBirthPlace,
          dateBirth: this.applicantBirthDate,
          handphone: this.contactNumberMobile,
          telephone: this.contactNumberHome,
          emailAddress: this.email,
          religion: this.religion,
          weight: this.bodyWeight,
          height: this.bodyHeight,
          physicalImpairment: this.bodyAbnormalities,
          idType: this.idType,
          idNumber: this.idNumber,
          typeBlood: this.bloodType,
          nationality: this.nationality,
          martialStatus: this.martialStatus,
          martialDate: this.martialInfoDate,
          hobby: this.hobby
        },
        applicantAddress: [
          {
            addressTypeId: 1,
            detailAddress: this.addressCurrentDetail,
            kelurahan: this.addressCurrentKelurahan,
            kecamatan: this.addressCurrentKecamatan,
            city: this.addressCurrentKota,
            province: this.addressCurrentPropinsi,
            postalCode: this.addressCurrentPos,
            country: "Indonesia"
          },
          {
            addressTypeId: 2,
            detailAddress: this.addressPermanentDetail,
            kelurahan: this.addressPermanentKelurahan,
            kecamatan: this.addressPermanentKecamatan,
            city: this.addressPermanentKota,
            province: this.addressPermanentPropinsi,
            postalCode: this.addressPermanentPos,
            country: "Indonesia"
          },
          {
            addressTypeId: 3,
            detailAddress: this.addressParentDetail,
            kelurahan: this.addressParentKelurahan,
            kecamatan: this.addressParentKecamatan,
            city: this.addressParentKota,
            province: this.addressParentPropinsi,
            postalCode: this.addressParentPos,
            country: "Indonesia"
          }
        ]
      }
      this.$store.dispatch('setSelf', data)
        .then(() => {
          this.$router.push({ name: 'detail', params: { examId: this.$route.params.examId }, query: { martial: this.martial } })
          const routeData = {
            examInfoId: this.$route.params.examId,
            sharedValue: "/detail/" + this.$route.params.examId + "?martial=" + this.martial
          }
          this.$store.dispatch('setCurrentRoute', routeData)
        })
    },
  },
  components: {
    dataInputAddress
  },
  created () {
    this.$store.dispatch('getApplicant', { examInfoId: this.$route.params.examId })
    this.$store.dispatch('getSelf', { examInfoId: this.$route.params.examId })
  }
}
</script>
