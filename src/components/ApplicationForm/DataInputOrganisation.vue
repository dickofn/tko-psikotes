<template>
  <v-card>
    <v-card-title class="headline">
      <v-layout row wrap mb-2>
        <v-flex md8 offset-md2 xs12>Tambah Data Pengalaman Organisasi</v-flex>
      </v-layout>
    </v-card-title>

    <v-card-text>
      <v-layout row wrap mb-2>
        <v-flex md8 offset-md2 xs12>
          <v-text-field label="Nama Organisasi" name="orgName" id="orgName" v-model="orgName"></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout row wrap mb-2>
        <v-flex md8 offset-md2 xs12>
          <v-text-field label="Jabatan" name="orgTitle" id="orgTitle" v-model="orgTitle"></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout row wrap mb-2>
        <v-flex md4 offset-md2 xs6 pr-2>
          <v-text-field
            label="Tahun Mulai"
            name="orgPeriodStart"
            id="orgPeriodStart"
            type="number"
            v-model="orgPeriodStart"
            :rules="[rules.year]"
          ></v-text-field>
        </v-flex>

        <v-flex md4 xs6 pl-2>
          <v-text-field
            label="Tahun Akhir"
            name="orgPeriodEnd"
            id="orgPeriodEnd"
            type="number"
            v-model="orgPeriodEnd"
            :rules="[rules.year]"
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
      orgName: "",
      orgTitle: "",
      orgPeriodStart: "",
      orgPeriodEnd: "",
      dialogValid: true,
      rules: {
        year: v => v >= 0 || 'Tahun tidak boleh di bawah nol!' //Using regex to allow only [0-9]
      },
      data: {}
    }
  },
  methods: {
    add () {
      if (
        (this.orgTitle == "" || this.orgName == "" || this.orgPeriodStart == "" || this.orgPeriodEnd == "")
      ) {
        this.dialogValid = false
      } else {
        this.dialogValid = true
        this.data = {
          orgName: this.orgName,
          orgPeriod: this.orgPeriodStart + "-" + this.orgPeriodEnd,
          orgTitle: this.orgTitle,
        }
        this.$emit('orgDataFilled', this.data);
        this.orgName = ""
        this.orgTitle = ""
        this.orgPeriodStart = ""
        this.orgPeriodEnd = ""
      }
    },
    cancel () {
      this.dialogValid = true
      this.orgName = ""
      this.orgTitle = ""
      this.orgPeriodStart = ""
      this.orgPeriodEnd = ""
      this.$emit('orgDataCancelled')
    }
  }
}
</script>

<style>
</style>
