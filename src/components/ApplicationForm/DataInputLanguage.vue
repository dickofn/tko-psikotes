<template>
  <v-card>
    <v-card-title class="headline">
      <v-layout row wrap mb-2>
        <v-flex md8 offset-md2 xs12>Tambah Data Bahasa Asing</v-flex>
      </v-layout>
    </v-card-title>

    <v-card-text>
      <v-layout row wrap mb-2>
        <v-flex md8 offset-md2 xs12>
          <v-text-field label="Bahasa" name="langName" id="langName" v-model="langName"></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout row wrap mb-2>
        <v-flex md2 offset-md2 xs12 pr-1>
          <v-select :items="mastery" label="Mendengar" v-model="langHear"></v-select>
        </v-flex>

        <v-flex md2 xs12 pr-1>
          <v-select :items="mastery" label="Membaca" v-model="langRead"></v-select>
        </v-flex>

        <v-flex md2 xs12 pr-1>
          <v-select :items="mastery" label="Berbicara" v-model="langSpeak"></v-select>
        </v-flex>

        <v-flex md2 xs12>
          <v-select :items="mastery" label="Menulis" v-model="langWrite"></v-select>
        </v-flex>
      </v-layout>

      <v-layout row wrap mb-2>
        <v-flex md8 offset-md2 xs12>
          <v-text-field
            label="Peringkat/Grade TOEFL,IELTS,HSK,etc (optional)"
            name="langGrade"
            id="langGrade"
            v-model="langGrade"
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
      mastery: ["Baik Sekali", "Baik", "Cukup", "Kurang"],
      langName: "",
      langHear: "",
      langRead: "",
      langSpeak: "",
      langWrite: "",
      langGrade: "",
      dialogValid: true,
      data: {}
    }
  },
  methods: {
    add () {
      if (
        (this.langName == "" || this.langHear == "" || this.langRead == "" || this.langSpeak == "" || this.langWrite == "")
      ) {
        this.dialogValid = false
      } else {
        this.dialogValid = true
        this.data = {
          langName: this.langName,
          langHear: this.langHear,
          langRead: this.langRead,
          langSpeak: this.langSpeak,
          langWrite: this.langWrite,
          langGrade: this.langGrade,
        }
        this.$emit('langDataFilled', this.data);
        this.langName = ""
        this.langHear = ""
        this.langRead = ""
        this.langSpeak = ""
        this.langWrite = ""
        this.langGrade = ""
      }
    },
    cancel () {
      this.dialogValid = true
      this.langName = ""
      this.langHear = ""
      this.langRead = ""
      this.langSpeak = ""
      this.langWrite = ""
      this.langGrade = ""
      this.$emit('langDataCancelled')
    }
  }
}
</script>

<style>
</style>
