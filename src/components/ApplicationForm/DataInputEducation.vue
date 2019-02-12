<template>
  <v-card>
    <v-card-title class="headline">
      <v-layout row wrap mb-2>
        <v-flex md8 offset-md2 xs12>Tambah Data Riwayat Pendidikan</v-flex>
      </v-layout>
    </v-card-title>

    <v-card-text>
      <v-layout row wrap mb-2>
        <v-flex md8 offset-md2 xs12>
          <v-select :items="eduLevels" label="Jenjang Pendidikan" v-model="eduLevel"></v-select>
        </v-flex>
      </v-layout>

      <v-layout row wrap mb-2>
        <v-flex md8 offset-md2 xs12>
          <v-text-field label="Nama Institut" name="eduName" id="eduName" v-model="eduName"></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout row wrap mb-2>
        <v-flex md4 offset-md2 xs6 pr-2>
          <v-text-field
            label="Tahun Mulai"
            name="eduPeriodStart"
            id="eduPeriodStart"
            type="number"
            v-model="eduPeriodStart"
          ></v-text-field>
        </v-flex>

        <v-flex md4 xs6 pl-2>
          <v-text-field
            label="Tahun Akhir"
            name="eduPeriodEnd"
            id="eduPeriodEnd"
            type="number"
            v-model="eduPeriodEnd"
          ></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout row wrap mb-2>
        <v-flex md8 offset-md2 xs12>
          <v-text-field
            label="Jurusan (Jenjang>=SMA)"
            name="eduMajor"
            id="eduMajor"
            v-model="eduMajor"
          ></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout row wrap mb-2>
        <v-flex md8 offset-md2 xs12>
          <v-text-field
            label="Nilai (Jenjang>=D3)"
            name="eduGrade"
            id="eduGrade"
            v-model="eduGrade"
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
      eduLevels: ["SD", "SMP", "SMA", "D3", "S1", "S2", "S3"],
      eduLevel: "",
      eduName: "",
      eduPeriodStart: "",
      eduPeriodEnd: "",
      eduMajor: "",
      eduGrade: "",
      dialogValid: true,
      data: {}
    }
  },
  methods: {
    add () {
      if (
        (this.eduLevel == "" || this.eduName == "" || this.eduPeriodStart == "" || this.eduPeriodEnd == "")
        ||
        ((this.eduLevel != "SD" && this.eduLevel != "SMP") && (this.eduMajor == ""))
        ||
        ((this.eduLevel != "SD" && this.eduLevel != "SMP" && this.eduLevel != "SMA") && (this.eduGrade == ""))
      ) {
        this.dialogValid = false
      } else {
        this.dialogValid = true
        this.data = {
          eduLevel: this.eduLevel,
          eduName: this.eduName,
          eduPeriod: this.eduPeriodStart + "-" + this.eduPeriodEnd,
          eduMajor: this.eduMajor,
          eduGrade: this.eduGrade
        }
        this.$emit('eduDataFilled', this.data);
        this.eduLevel = ""
        this.eduName = ""
        this.eduPeriodStart = ""
        this.eduPeriodEnd = ""
        this.eduMajor = ""
        this.eduGrade = ""
      }
    },
    cancel () {
      this.dialogValid = true
      this.eduLevel = ""
      this.eduName = ""
      this.eduPeriodStart = ""
      this.eduPeriodEnd = ""
      this.eduMajor = ""
      this.eduGrade = ""
      this.$emit('eduDataCancelled')
    }
  }
}
</script>

<style>
</style>
