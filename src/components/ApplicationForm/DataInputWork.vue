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
          ></v-text-field>
        </v-flex>

        <v-flex md4 xs6 pl-2>
          <v-text-field
            label="Tahun Akhir"
            name="workPeriodEnd"
            id="workPeriodEnd"
            type="number"
            v-model="workPeriodEnd"
          ></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout row wrap mb-2>
        <v-flex md8 offset-md2 xs12>
          <v-textarea
            label="Alamat"
            name="workAddressDetail"
            id="workAddressDetail"
            v-model="workAddressDetail"
            rows="2"
          ></v-textarea>
        </v-flex>
      </v-layout>

      <v-layout row wrap mb-2>
        <v-flex md8 offset-md2 xs12>
          <v-text-field
            label="Nomor Perusahaan"
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
export default {
  data () {
    return {
      workCompany: "",
      workPeriodStart: "",
      workPeriodEnd: "",
      workAddressDetail: "",
      workNumber: "",
      workFirstJob: "",
      workLastJob: "",
      workLeader: "",
      workReason: "",
      workSalary: "",
      dialogValid: true,
      data: {}
    }
  },
  methods: {
    add () {
      if (
        (this.workCompany == "" || this.workPeriodStart == "" || this.workPeriodEnd == "" || this.workAddressDetail == "" || this.workNumber == "" || this.workFirstJob == "" || this.workLastJob == "" || this.workLeader == "" || this.workReason == "" || this.workSalary == "")
      ) {
        this.dialogValid = false
      } else {
        this.dialogValid = true
        this.data = {
          workCompany: this.workCompany,
          workPeriod: this.workPeriodStart + "-" + this.workPeriodEnd,
          workAddressDetail: this.workAddressDetail,
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
        this.workAddressDetail = ""
        this.workNumber = ""
        this.workFirstJob = ""
        this.workLastJob = ""
        this.workLeader = ""
        this.workReason = ""
        this.workSalary = ""
      }
    },
    cancel () {
      this.dialogValid = true
      this.workCompany = ""
      this.workPeriodStart = ""
      this.workPeriodEnd = ""
      this.workAddressDetail = ""
      this.workNumber = ""
      this.workFirstJob = ""
      this.workLastJob = ""
      this.workLeader = ""
      this.workReason = ""
      this.workSalary = ""
      this.$emit('workDataCancelled')
    }
  }
}
</script>

<style>
</style>
