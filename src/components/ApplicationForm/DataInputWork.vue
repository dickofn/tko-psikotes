<template>
  <v-card>
    <v-card-title class="headline">
      <v-layout row wrap mb-2>
        <v-flex md8 offset-md2 xs12>Tambah Data Pengalaman Kerja</v-flex>
      </v-layout>
    </v-card-title>

    <v-card-text>
      <v-layout row wrap mb-2>
        <v-flex md8 offset-md2 xs12>
          <v-text-field
            label="Nama Perusahaan"
            name="workCompany"
            id="workCompany"
            v-model="workCompany"
          ></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout row wrap mb-2>
        <v-flex md4 offset-md2 xs6 pr-2>
          <v-text-field
            label="Tahun Mulai"
            name="workPeriodStart"
            id="workPeriodStart"
            type="number"
            v-model="workPeriodStart"
            :rules="[rules.year]"
          ></v-text-field>
        </v-flex>

        <v-flex md4 xs6 pl-2>
          <v-text-field
            label="Tahun Akhir"
            name="workPeriodEnd"
            id="workPeriodEnd"
            type="number"
            v-model="workPeriodEnd"
            :rules="[rules.year]"
          ></v-text-field>
        </v-flex>
      </v-layout>

      <data-input-address
        :title="'Perusahaan'"
        :addressDetail="addressCompanyDetail"
        :addressPropinsi="addressCompanyPropinsi"
        :addressKota="addressCompanyKota"
        :addressKecamatan="addressCompanyKecamatan"
        :addressKelurahan="addressCompanyKelurahan"
        :addressPos="addressCompanyPos"
        :rules="rules"
        @addressDetailUpdated="updateAddressCompanyDetail"
        @addressPropinsiUpdated="updateAddressCompanyPropinsi"
        @addressKotaUpdated="updateAddressCompanyKota"
        @addressKecamatanUpdated="updateAddressCompanyKecamatan"
        @addressKelurahanUpdated="updateAddressCompanyKelurahan"
        @addressPosUpdated="updateAddressCompanyPos"
      ></data-input-address>

      <v-layout row wrap mb-2>
        <v-flex md8 offset-md2 xs12>
          <v-text-field
            label="Nomor Telephone Perusahaan"
            name="workNumber"
            id="workNumber"
            v-model="workNumber"
          ></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout row wrap mb-2>
        <v-flex md8 offset-md2 xs12>
          <v-text-field
            label="Jabatan Awal"
            name="workFirstJob"
            id="workFirstJob"
            v-model="workFirstJob"
          ></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout row wrap mb-2>
        <v-flex md8 offset-md2 xs12>
          <v-text-field
            label="Jabatan Akhir"
            name="workLastJob"
            id="workLastJob"
            v-model="workLastJob"
          ></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout row wrap mb-2>
        <v-flex md8 offset-md2 xs12>
          <v-text-field
            label="Nama Atasan Langsung"
            name="workLeader"
            id="workLeader"
            v-model="workLeader"
          ></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout row wrap mb-2>
        <v-flex md8 offset-md2 xs12>
          <v-textarea
            label="Alasan Berhenti"
            name="workReason"
            id="workReason"
            v-model="workReason"
            rows="2"
          ></v-textarea>
        </v-flex>
      </v-layout>

      <v-layout row wrap mb-2>
        <v-flex md8 offset-md2 xs12>
          <v-text-field
            label="Gaji Terakhir"
            name="workSalary"
            id="workSalary"
            v-model="workSalary"
            type="number"
          ></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout row wrap mt-4>
        <v-flex md8 offset-md2 xs12>
          <h4 v-if="!dialogValid">Masih ada field yang kosong!</h4>
        </v-flex>
      </v-layout>
    </v-card-text>

    <v-card-actions>
      <v-layout row wrap justify-end>
        <v-flex offset-md7 offset-lg8>
          <v-btn color="green darken-1" flat="flat" @click="cancel">Cancel</v-btn>

          <v-btn color="green darken-1" flat="flat" @click="add">Add</v-btn>
        </v-flex>
      </v-layout>
    </v-card-actions>
  </v-card>
</template>

<script>
import dataInputAddress from "./DataInputAddress";


export default {
  data () {
    return {
      workCompany: "",
      workPeriodStart: "",
      workPeriodEnd: "",
      addressCompanyDetail: "",
      addressCompanyKelurahan: "",
      addressCompanyKecamatan: "",
      addressCompanyKota: "",
      addressCompanyPropinsi: "",
      addressCompanyPos: "",
      addressCompanyDetailText: "",
      addressCompanyKelurahanText: "",
      addressCompanyKecamatanText: "",
      addressCompanyKotaText: "",
      addressCompanyPropinsiText: "",
      addressCompanyPosText: "",
      workAddressDetail: "",
      emergencyNumber: "",
      workNumber: "",
      workFirstJob: "",
      workLastJob: "",
      workLeader: "",
      workReason: "",
      workSalary: "",
      dialogValid: true,
      rules: {
        required: v => !!v || "Wajib diisi!",
        number: v => /^[0-9]+$/.test(v) || "Harus berupa angka!", //Using regex to allow only [0-9]
        year: v => v >= 0 || 'Tahun tidak boleh di bawah nol!'
      },
      data: {}
    }
  },
  methods: {
    updateAddressCompanyDetail (i) {
      this.addressCompanyDetail = i;
    },
    updateAddressCompanyPropinsi (i) {
      this.addressCompanyPropinsi = i;
    },
    updateAddressCompanyKota (i) {
      this.addressCompanyKota = i;
    },
    updateAddressCompanyKecamatan (i) {
      this.addressCompanyKecamatan = i;
    },
    updateAddressCompanyKelurahan (i) {
      this.addressCompanyKelurahan = i;
    },
    updateAddressCompanyPos (i) {
      this.addressCompanyPos = i;
    },
    getAddressCompanyKelurahan () {
      this.axios.get(process.env.VUE_APP_API_URL + '/administratif/get/kelurahan/' + this.addressCompanyKelurahan)
        .then((res) => {
          this.addressCompanyKelurahanText = res.data.data.result[0].name
        })
        .then(()=>{
          this.addFunction()
        })
    },
    getAddressCompanyKecamatan () {
      this.axios.get(process.env.VUE_APP_API_URL + '/administratif/get/kecamatan/' + this.addressCompanyKecamatan)
        .then((res) => {
          this.addressCompanyKecamatanText = res.data.data.result[0].name
        })
        .then(() => {
          this.getAddressCompanyKelurahan()
        })
    },
    getAddressCompanyKota () {
      this.axios.get(process.env.VUE_APP_API_URL + '/administratif/get/kota/' + this.addressCompanyKota)
        .then((res) => {
          this.addressCompanyKotaText = res.data.data.result[0].name
        })
        .then(() => {
          this.getAddressCompanyKecamatan()
        })
    },
    getAddressCompanyPropinsi () {
      this.axios.get(process.env.VUE_APP_API_URL + '/administratif/get/provinsi/' + this.addressCompanyPropinsi)
        .then((res) => {
          this.addressCompanyPropinsiText = res.data.data.result[0].name
        })
        .then(() => {
          this.getAddressCompanyKota()
        })
    },
    addFunction () {
      if (
        (this.workCompany == "" || this.workPeriodStart == "" || this.workPeriodEnd == "" || this.addressCompanyKelurahan == "" || this.workNumber == "" || this.workFirstJob == "" || this.workLastJob == "" || this.workLeader == "" || this.workReason == "" || this.workSalary == "")
      ) {
        this.dialogValid = false
      } else {
        this.dialogValid = true
        this.data = {
          workCompany: this.workCompany,
          workPeriod: this.workPeriodStart + "-" + this.workPeriodEnd,
          workAddressDetail: this.addressCompanyDetail + ", " + this.addressCompanyKelurahanText + ", " + this.addressCompanyKecamatanText + ", " + this.addressCompanyKotaText + ", " + this.addressCompanyPropinsiText + " " + this.addressCompanyPos,
          workNumber: this.workNumber,
          workFirstJob: this.workFirstJob,
          workLastJob: this.workLastJob,
          workLeader: this.workLeader,
          workReason: this.workReason,
          workSalary: this.workSalary,
        }
        this.$emit('workDataFilled', this.data);
        this.workCompany = ""
        this.workPeriodStart = ""
        this.workPeriodEnd = ""
        this.addressCompanyDetail = ""
        this.addressCompanyKelurahan = ""
        this.addressCompanyKecamatan = ""
        this.addressCompanyKota = ""
        this.addressCompanyPropinsi = ""
        this.addressCompanyPos = ""
        this.workAddressDetail = ""
        this.workNumber = ""
        this.workFirstJob = ""
        this.workLastJob = ""
        this.workLeader = ""
        this.workReason = ""
        this.workSalary = ""
      }
    },
    add () {
      this.getAddressCompanyPropinsi()
    },
    cancel () {
      this.dialogValid = true
      this.workCompany = ""
      this.workPeriodStart = ""
      this.workPeriodEnd = ""
      this.addressCompanyDetail = ""
      this.addressCompanyKelurahan = ""
      this.addressCompanyKecamatan = ""
      this.addressCompanyKota = ""
      this.addressCompanyPropinsi = ""
      this.addressCompanyPos = ""
      this.workAddressDetail = ""
      this.workNumber = ""
      this.workFirstJob = ""
      this.workLastJob = ""
      this.workLeader = ""
      this.workReason = ""
      this.workSalary = ""
      this.$emit('workDataCancelled')
    }
  },
  components: {
    dataInputAddress
  }
}
</script>

<style>
</style>
