<template>
  <v-container grid-list-xs>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <v-spacer></v-spacer>
            <h1 class="headline text-uppercase text-xs-center font-weight-light">Data Keluarga</h1>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" v-model="valid">
                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <h4>Kontak yang dapat dihubungi dalam keadaan darurat</h4>
                    <v-text-field
                      label="Nama Lengkap"
                      name="emergencyName"
                      id="emergencyName"
                      v-model="emergencyName"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>

                  <v-flex md8 offset-md2 xs12>
                    <v-select
                      :items="emergencyRelations"
                      label="Jenis Relasi"
                      v-model="emergencyRelation"
                      :rules="[rules.required]"
                      required
                    ></v-select>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <h4>Alamat kontak yang dapat dihubungi</h4>
                    <v-textarea
                      label="Alamat Lengkap"
                      name="addressEmergencyDetail"
                      id="addressEmergencyDetail"
                      v-model="addressEmergencyDetail"
                      :rules="[rules.required]"
                      required
                      rows="2"
                    ></v-textarea>
                  </v-flex>
                  <v-flex md4 offset-md2 xs12>
                    <v-text-field
                      label="Kelurahan"
                      name="addressEmergencyKelurahan"
                      id="addressEmergencyKelurahan"
                      v-model="addressEmergencyKelurahan"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex md4 xs12>
                    <v-text-field
                      label="Kecamatan"
                      name="addressEmergencyKecamatan"
                      id="addressEmergencyKecamatan"
                      v-model="addressEmergencyKecamatan"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex md4 offset-md2 xs12>
                    <v-text-field
                      label="Kota"
                      name="addressEmergencyKota"
                      id="addressEmergencyKota"
                      v-model="addressEmergencyKota"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex md4 xs12>
                    <v-text-field
                      label="Propinsi"
                      name="addressEmergencyPropinsi"
                      id="addressEmergencyPropinsi"
                      v-model="addressEmergencyPropinsi"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex md2 offset-md8 xs12>
                    <v-text-field
                      label="Kode Pos"
                      name="addressEmergencyPos"
                      id="addressEmergencyPos"
                      v-model="addressEmergencyPos"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <v-text-field
                      label="Handphone/Telephone"
                      name="emergencyNumber"
                      id="emergencyNumber"
                      v-model="emergencyNumber"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <h4>Data tanggungan (Suami/Istri/Anak)</h4>
                  </v-flex>
                  <v-flex md10 offset-md2 xs12>
                    <v-btn small @click="depDialog = true">
                      <v-icon>add</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-dialog v-model="depDialog" persistent max-width="80vw">
                    <data-input-field
                      :type="'dependent'"
                      :title="'Tanggungan'"
                      :relations="depRelations"
                      @depDataFilled="depAdd"
                      @depDataCancelled="depCancel"
                    ></data-input-field>
                  </v-dialog>
                  <!-- eslint-disable-next-line -->
                  <v-flex md8 offset-md2 xs12>
                    <v-data-table
                      :headers="depTableHeaders"
                      :items="dependents"
                      class="elevation-1"
                      v-if="dependents.length"
                      hide-actions
                    >
                      <template slot="items" slot-scope="props">
                        <td>{{ props.item.depRelation }}</td>
                        <td>{{ props.item.depName }}</td>
                        <td>{{ props.item.depGender }}</td>
                        <td>{{ props.item.depBirthPlace }}</td>
                        <td>{{ props.item.depBirthDate }}</td>
                        <td>{{ props.item.depEducation }}</td>
                        <td>{{ props.item.depOccupation }}</td>
                        <td class="justify-center layout px-0">
                          <v-icon small @click="depDelete(props.item)">delete</v-icon>
                        </td>
                      </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <h4>Data keluarga (Ayah/Ibu/Saudara)</h4>
                  </v-flex>
                  <v-flex md10 offset-md2 xs12>
                    <v-btn small @click="famDialog = true">
                      <v-icon>add</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-dialog v-model="famDialog" persistent max-width="80vw">
                    <data-input-field
                      :type="'family'"
                      :title="'Keluarga'"
                      :relations="famRelations"
                      @famDataFilled="famAdd"
                      @famDataCancelled="famCancel"
                    ></data-input-field>
                  </v-dialog>
                  <!-- eslint-disable-next-line -->
                  <v-flex md8 offset-md2 xs12>
                    <v-data-table
                      :headers="famTableHeaders"
                      :items="families"
                      class="elevation-1"
                      v-if="families.length"
                      hide-actions
                    >
                      <template slot="items" slot-scope="props">
                        <td>{{ props.item.famRelation }}</td>
                        <td>{{ props.item.famName }}</td>
                        <td>{{ props.item.famGender }}</td>
                        <td>{{ props.item.famBirthPlace }}</td>
                        <td>{{ props.item.famBirthDate }}</td>
                        <td>{{ props.item.famEducation }}</td>
                        <td>{{ props.item.famOccupation }}</td>
                        <td class="justify-center layout px-0">
                          <v-icon small @click="famDelete(props.item)">delete</v-icon>
                        </td>
                      </template>
                    </v-data-table>
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
import dataInputField from '../../components/ApplicationForm/DataInput'

export default {
  data () {
    return {
      emergencyName: "",
      emergencyRelations: ["Saudara", "Keluarga", "Teman Dekat"],
      emergencyRelation: "",
      addressEmergencyDetail: "",
      addressEmergencyKelurahan: "",
      addressEmergencyKecamatan: "",
      addressEmergencyKota: "",
      addressEmergencyPropinsi: "",
      addressEmergencyPos: "",
      emergencyNumber: "",
      dependents: [],
      depDialog: false,
      depRelations: ["Suami", "Istri", "Anak"],
      depTableHeaders: [
        {
          text: "Hubungan Keluarga",
          value: "depRelation"
        },
        {
          text: "Nama",
          value: "depName"
        },
        {
          text: "Kelamin",
          value: "depGender"
        },
        {
          text: "Tempat Lahir",
          value: "depBirthPlace"
        },
        {
          text: "Tanggal Lahir",
          value: "depBirthDate"
        },
        {
          text: "Pendidikan",
          value: "depEducation"
        },
        {
          text: "Pekerjaan",
          value: "depOccupation"
        },
        {
          text: 'Actions',
          sortable: false
        }
      ],
      families: [],
      famDialog: false,
      famRelations: ["Ayah", "Ibu", "Anak kandung"],
      famTableHeaders: [
        {
          text: "Hubungan Keluarga",
          value: "famRelation"
        },
        {
          text: "Nama",
          value: "famName"
        },
        {
          text: "Kelamin",
          value: "famGender"
        },
        {
          text: "Tempat Lahir",
          value: "famBirthPlace"
        },
        {
          text: "Tanggal Lahir",
          value: "famBirthDate"
        },
        {
          text: "Pendidikan",
          value: "famEducation"
        },
        {
          text: "Pekerjaan",
          value: "famOccupation"
        },
        {
          text: 'Actions',
          sortable: false
        }
      ],
      valid: true,
      rules: {
        required: v => !!v || 'Wajib diisi!',
      }
    }
  },
  methods: {
    depAdd (data) {
      this.dependents.push(data)
      this.depDialog = false;
    },
    depDelete (item) {
      const index = this.dependents.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.dependents.splice(index, 1)
    },
    depCancel () {
      this.depDialog = false;
    },
    famAdd (data) {
      this.families.push(data)
      this.famDialog = false;
    },
    famDelete (item) {
      const index = this.families.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.families.splice(index, 1)
    },
    famCancel () {
      this.famDialog = false;
    },
    reset () {
      console.log(this.valid)
      this.$refs.form.reset()
    }
  },
  components: {
    dataInputField
  }
}
</script>
