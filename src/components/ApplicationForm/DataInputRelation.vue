<template>
  <v-card>
    <v-card-title class="headline">
      <v-layout row wrap mb-2>
        <v-flex md8 offset-md2 xs12>Tambah Data {{title}}</v-flex>
      </v-layout>
    </v-card-title>

    <v-card-text>
      <v-layout row wrap mb-2>
        <v-flex md8 offset-md2 xs12>
          <v-select :items="relations" label="Jenis Relasi" v-model="relation"></v-select>
        </v-flex>
      </v-layout>

      <v-layout row wrap mb-2>
        <v-flex md8 offset-md2 xs12>
          <v-text-field label="Nama" name="name" id="name" v-model="name"></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout row wrap mb-2>
        <v-flex md8 offset-md2 xs12>
          <h4>Jenis Kelamin</h4>
          <v-radio-group v-model="gender" row>
            <v-radio label="Pria" value="M"></v-radio>
            <v-radio label="Wanita" value="F"></v-radio>
          </v-radio-group>
        </v-flex>
      </v-layout>

      <v-layout row wrap mb-2 v-if="type!='contact'">
        <v-flex md4 offset-md2 xs12>
          <v-text-field label="Tempat Lahir" name="birthPlace" id="birthPlace" v-model="birthPlace"></v-text-field>
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
            ></v-text-field>
            <v-date-picker v-model="birthDate" @input="birthDateMenu = false"></v-date-picker>
          </v-menu>
        </v-flex>
      </v-layout>

      <v-layout row wrap mb-2 v-if="type=='contact'">
        <v-flex md8 offset-md2 xs12>
          <v-textarea
            label="Alamat"
            name="addressDetail"
            id="addressDetail"
            v-model="addressDetail"
            rows="2"
          ></v-textarea>
        </v-flex>
      </v-layout>

      <v-layout row wrap mb-2>
        <v-flex md8 offset-md2 xs12>
          <v-select :items="educations" label="Pendidikan" v-model="education"></v-select>
        </v-flex>
      </v-layout>

      <v-layout row wrap mb-2>
        <v-flex md8 offset-md2 xs12>
          <v-text-field label="Pekerjaan" name="occupation" id="occupation" v-model="occupation"></v-text-field>
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
  props: ['type', 'title', 'relations'],
  data () {
    return {
      dialogValid: true,
      relation: "",
      name: "",
      gender: "",
      birthPlace: "",
      birthDate: "",
      birthDateMenu: false,
      educations: ["SD", "SMP", "SMA", "Diploma", "S1", "S2", "S3"],
      education: "",
      occupation: "",
      addressDetail: "",
      data: {}
    }
  },
  methods: {
    add () {
      if
      (
        (this.relation == "" || this.name == "" || this.gender == "" || this.birthPlace == "" || this.birthDate == "" || this.education == "" || this.occupation == "")
        &&
        this.type != 'contact'
      ) {
        this.dialogValid = false
      } else {
        if (this.type == 'dependent') {
          this.dialogValid = true
          this.data = {
            depRelation: this.relation,
            depName: this.name,
            depGender: this.gender,
            depBirthPlace: this.birthPlace,
            depBirthDate: this.birthDate,
            depEducation: this.education,
            depOccupation: this.occupation
          }
          this.$emit('depDataFilled', this.data);
        }
        if (this.type == 'family') {
          this.dialogValid = true
          this.data = {
            famRelation: this.relation,
            famName: this.name,
            famGender: this.gender,
            famBirthPlace: this.birthPlace,
            famBirthDate: this.birthDate,
            famEducation: this.education,
            famOccupation: this.occupation
          }
          this.$emit('famDataFilled', this.data);
        }
        if (this.type == 'contact') {
          if (this.relation == "" || this.name == "" || this.gender == "" || this.education == "" || this.occupation == "" || this.addressDetail == "") {
            this.dialogValid = false;
          } else {
            this.dialogValid = true
            this.data = {
              conRelation: this.relation,
              conName: this.name,
              conGender: this.gender,
              conAddressDetail: this.addressDetail,
              conEducation: this.education,
              conOccupation: this.occupation
            }
            this.$emit('conDataFilled', this.data);
            this.relation = ""
            this.name = ""
            this.gender = ""
            this.addressDetail = ""
            this.education = ""
            this.occupation = ""
            this.addressDetail = ""
          }
        }
        if (this.type != 'contact') {
          this.relation = ""
          this.name = ""
          this.gender = ""
          this.birthPlace = ""
          this.birthDate = ""
          this.education = ""
          this.occupation = ""
          this.addressDetail = ""
        }
      }
    },
    cancel () {
      this.dialogValid = true
      this.relation = ""
      this.name = ""
      this.gender = ""
      this.birthPlace = ""
      this.birthDate = ""
      this.education = ""
      this.occupation = ""
      this.addressDetail = ""
      if (this.type == 'dependent') {
        this.$emit('depDataCancelled');
      }
      if (this.type == 'family') {
        this.$emit('famDataCancelled');
      }
      if (this.type == 'contact') {
        this.$emit('conDataCancelled');
      }
    }
  }
}
</script>

<style>
</style>
