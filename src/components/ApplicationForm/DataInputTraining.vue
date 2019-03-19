<template>
  <v-card>
    <v-card-title class="headline">
      <v-layout row wrap mb-2>
        <v-flex md8 offset-md2 xs12>Tambah Data Pengalaman Training dan Kursus</v-flex>
      </v-layout>
    </v-card-title>

    <v-card-text>
      <v-layout row wrap mb-2>
        <v-flex md8 offset-md2 xs12>
          <v-text-field label="Nama Training" name="traName" id="traName" v-model="traName"></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout row wrap mb-2>
        <v-flex md8 offset-md2 xs12>
          <v-text-field
            label="Tahun"
            name="traYear"
            id="traYear"
            v-model="traYear"
            type="number"
            :rules="[rules.year]"
          ></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout row wrap mb-2>
        <v-flex md8 offset-md2 xs12>
          <v-text-field
            label="Penyelenggara"
            name="traOrganizer"
            id="traOrganizer"
            v-model="traOrganizer"
          ></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout row wrap mb-2>
        <v-flex md8 offset-md2 xs12>
          <v-text-field
            label="Peringkat/Grade"
            name="traGrade"
            id="traGrade"
            v-model="traGrade"
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
      traName: "",
      traYear: "",
      traOrganizer: "",
      traGrade: "",
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
        (this.traName == "" || this.traYear == "" || this.traOrganizer == "")
      ) {
        this.dialogValid = false
      } else {
        this.dialogValid = true
        this.data = {
          traName: this.traName,
          traYear: this.traYear,
          traOrganizer: this.traOrganizer,
          traGrade: this.traGrade,
        }
        this.$emit('traDataFilled', this.data);
        this.traName = ""
        this.traYear = ""
        this.traOrganizer = ""
        this.traGrade = ""
      }
    },
    cancel () {
      this.dialogValid = true
      this.traName = ""
      this.traYear = ""
      this.traOrganizer = ""
      this.traGrade = ""
      this.$emit('traDataCancelled')
    }
  }
}
</script>

<style>
</style>
