<template>
  <v-container grid-list-xs>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <v-spacer></v-spacer>
            <h1 class="headline text-uppercase text-xs-center font-weight-light">Data Lengkap</h1>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" v-model="valid" @submit.prevent="submit">
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

                <data-input-address
                  :title="'kontak yang dapat dihubungi'"
                  :addressDetail="addressEmergencyDetail"
                  :addressPropinsi="addressEmergencyPropinsi"
                  :addressKota="addressEmergencyKota"
                  :addressKecamatan="addressEmergencyKecamatan"
                  :addressKelurahan="addressEmergencyKelurahan"
                  :addressPos="addressEmergencyPos"
                  :rules="rules"
                  :valid="valid"
                  @addressDetailUpdated="updateAddressEmergencyDetail"
                  @addressPropinsiUpdated="updateAddressEmergencyPropinsi"
                  @addressKotaUpdated="updateAddressEmergencyKota"
                  @addressKecamatanUpdated="updateAddressEmergencyKecamatan"
                  @addressKelurahanUpdated="updateAddressEmergencyKelurahan"
                  @addressPosUpdated="updateAddressEmergencyPos"
                  @validUpdated="updateValid "
                ></data-input-address>

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

                <v-layout row wrap mb-2 v-if="isMartial">
                  <v-flex md8 offset-md2 xs12>
                    <h4>Data tanggungan (Suami/Istri/Anak)</h4>
                  </v-flex>
                  <v-flex md10 offset-md2 xs12>
                    <v-btn small @click="depDialog = true">
                      <v-icon>add</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-dialog v-model="depDialog" max-width="80vw">
                    <data-input-relation
                      :type="'dependent'"
                      :title="'Tanggungan'"
                      :relations="depRelations"
                      @depDataFilled="depAdd"
                      @depDataCancelled="depCancel"
                    ></data-input-relation>
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
                  <v-dialog v-model="famDialog" max-width="80vw">
                    <data-input-relation
                      :type="'family'"
                      :title="'Keluarga'"
                      :relations="famRelations"
                      @famDataFilled="famAdd"
                      @famDataCancelled="famCancel"
                    ></data-input-relation>
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

                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <h4>Sebutkan 2 anggota keluarga dan 2 teman yang dapat dihubungi</h4>
                  </v-flex>
                  <v-flex md10 offset-md2 xs12>
                    <v-btn small @click="conDialog = true">
                      <v-icon>add</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-dialog v-model="conDialog" max-width="80vw">
                    <data-input-relation
                      :type="'contact'"
                      :title="'Kontak yang dapat dihubungi'"
                      :relations="conRelations"
                      @conDataFilled="conAdd"
                      @conDataCancelled="conCancel"
                    ></data-input-relation>
                  </v-dialog>
                  <!-- eslint-disable-next-line -->
                  <v-flex md8 offset-md2 xs12>
                    <v-data-table
                      :headers="conTableHeaders"
                      :items="contacts"
                      class="elevation-1"
                      v-if="contacts.length"
                      hide-actions
                    >
                      <template slot="items" slot-scope="props">
                        <td>{{ props.item.conRelation }}</td>
                        <td>{{ props.item.conName }}</td>
                        <td>{{ props.item.conGender }}</td>
                        <td>{{ props.item.conAddressDetail }}</td>
                        <td>{{ props.item.conEducation }}</td>
                        <td>{{ props.item.conOccupation }}</td>
                        <td class="justify-center layout px-0">
                          <v-icon small @click="conDelete(props.item)">delete</v-icon>
                        </td>
                      </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <h4>Riwayat Pendidikan</h4>
                  </v-flex>
                  <v-flex md10 offset-md2 xs12>
                    <v-btn small @click="eduDialog = true">
                      <v-icon>add</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-dialog v-model="eduDialog" max-width="80vw">
                    <data-input-education @eduDataFilled="eduAdd" @eduDataCancelled="eduCancel"></data-input-education>
                  </v-dialog>
                  <!-- eslint-disable-next-line -->
                  <v-flex md8 offset-md2 xs12>
                    <v-data-table
                      :headers="eduTableHeaders"
                      :items="educations"
                      class="elevation-1"
                      v-if="educations.length"
                      hide-actions
                    >
                      <template slot="items" slot-scope="props">
                        <td>{{ props.item.eduLevel }}</td>
                        <td>{{ props.item.eduName }}</td>
                        <td>{{ props.item.eduPeriod }}</td>
                        <td>{{ props.item.eduMajor }}</td>
                        <td>{{ props.item.eduGrade }}</td>
                        <td class="justify-center layout px-0">
                          <v-icon small @click="eduDelete(props.item)">delete</v-icon>
                        </td>
                      </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <h4>Uraikan secara singkat dan jelas mengapa memilih jurusan tersebut:</h4>
                    <v-textarea
                      label="Uraikan"
                      name="eduReason"
                      id="eduReason"
                      v-model="eduReason"
                      rows="2"
                    ></v-textarea>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <h4>Jelaskan karya ilmiah (skripsi, artikel, karya tulis, dll) yang pernah dibuat:</h4>
                    <v-textarea
                      label="Jelaskan"
                      name="eduPaper"
                      id="eduPaper"
                      v-model="eduPaper"
                      rows="2"
                    ></v-textarea>
                  </v-flex>
                </v-layout>

                <v-layout row wrap mt-5 justify-end>
                  <v-flex offset-md6 offset-lg7 offset-xl8>
                    <v-btn color="warning" @click="test">test</v-btn>
                    <v-btn :disabled="!valid" color="success" type="submit">Submit</v-btn>
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
/**
 * TODO: Kolom baru di dependents , kolom Desc, udah di foto check gallery hp
 * TODO: Kolom baru di families , kolom Desc, udah di foto check gallery hp
 */

import dataInputRelation from "../../components/ApplicationForm/DataInputRelation";
import dataInputEducation from "../../components/ApplicationForm/DataInputEducation";
import dataInputAddress from "../../components/ApplicationForm/DataInputAddress";

export default {
  data() {
    return {
      isMartial: false,
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
          text: "Actions",
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
          text: "Actions",
          sortable: false
        }
      ],
      contacts: [],
      conDialog: false,
      conRelations: ["Keluarga", "Teman"],
      conTableHeaders: [
        {
          text: "Jenis Hubungan",
          value: "conRelation"
        },
        {
          text: "Nama",
          value: "conName"
        },
        {
          text: "Kelamin",
          value: "conGender"
        },
        {
          text: "Alamat",
          value: "conAddressDetail"
        },
        {
          text: "Hubungan",
          value: "conRelation2"
        },
        {
          text: "Pekerjaan",
          value: "conOccupation"
        },
        {
          text: "Actions",
          sortable: false
        }
      ],
      educations: [],
      eduDialog: false,
      eduTableHeaders: [
        {
          text: "Jenjang Pendidikan",
          value: "eduLevel"
        },
        {
          text: "Nama Sekolah",
          value: "eduName"
        },
        {
          text: "Periode",
          value: "eduPeriod"
        },
        {
          text: "Jurusan",
          value: "eduMajor"
        },
        {
          text: "Nilai",
          value: "eduGrade"
        },
        {
          text: "Actions",
          sortable: false
        }
      ],
      eduReason: "",
      eduPaper: "",
      valid: true,
      rules: {
        required: v => !!v || "Wajib diisi!",
        number: v => /^[0-9]+$/.test(v) || "Harus berupa angka!" //Using regex to allow only [0-9]
      }
    };
  },
  methods: {
    test() {
      var a = this.relationshipTypeId("Anak kandung");
      console.log(a);
    },
    relationshipTypeId(relation) {
      if (relation == "Ayah") return 1;
      else if (relation == "Ibu") return 2;
      else if (relation == "Suami") return 3;
      else if (relation == "Istri") return 4;
      else if (relation == "Anak") return 5;
      else if (relation == "Anak kandung") return 6;
    },
    educationTypeId(education) {
      if (education == "SD") return 1;
      else if (education == "SMP") return 2;
      else if (education == "SMA") return 3;
      else if (education == "Diploma") return 4;
      else if (education == "S1") return 5;
      else if (education == "S2") return 6;
      else if (education == "S3") return 7;
    },
    updateAddressEmergencyDetail(i) {
      this.addressEmergencyDetail = i;
    },
    updateAddressEmergencyPropinsi(i) {
      this.addressEmergencyPropinsi = i;
    },
    updateAddressEmergencyKota(i) {
      this.addressEmergencyKota = i;
    },
    updateAddressEmergencyKecamatan(i) {
      this.addressEmergencyKecamatan = i;
    },
    updateAddressEmergencyKelurahan(i) {
      this.addressEmergencyKelurahan = i;
    },
    updateAddressEmergencyPos(i) {
      this.addressEmergencyPos = i;
    },
    updateValid(i) {
      this.valid = i;
    },
    depAdd(data) {
      this.dependents.push(data);
      this.depDialog = false;
    },
    depDelete(item) {
      const index = this.dependents.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.dependents.splice(index, 1);
    },
    depCancel() {
      this.depDialog = false;
    },
    famAdd(data) {
      this.families.push(data);
      this.famDialog = false;
    },
    famDelete(item) {
      const index = this.families.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.families.splice(index, 1);
    },
    famCancel() {
      this.famDialog = false;
    },
    conAdd(data) {
      this.contacts.push(data);
      this.conDialog = false;
    },
    conDelete(item) {
      const index = this.contacts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.contacts.splice(index, 1);
    },
    conCancel() {
      this.conDialog = false;
    },
    eduAdd(data) {
      this.educations.push(data);
      this.eduDialog = false;
    },
    eduDelete(item) {
      const index = this.educations.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.educations.splice(index, 1);
    },
    eduCancel() {
      this.eduDialog = false;
    },
    submit() {
      var addresses = [
        {
          addressTypeId: 4,
          detailAddress: this.addressEmergencyDetail,
          kelurahan: this.addressEmergencyKelurahan,
          kecamatan: this.addressEmergencyKecamatan,
          city: this.addressEmergencyKota,
          province: this.addressEmergencyPropinsi,
          postalCode: this.addressEmergencyPos,
          country: "Indonesia"
        }
      ];
      for (let i = 0; i < this.contacts.length; i++) {
        const el = this.contacts[i].conAddressDetail;
        addresses.push({
          addressTypeId: 5,
          detailAddress: el,
          country: "Indonesia"
        });
      }

      var families = [];
      for (let i = 0; i < this.families.length; i++) {
        const el = this.families[i];
        const relationshipTypeId = this.relationshipTypeId(el.famRelation);
        const educationTypeId =this.educationTypeId(el.famEducation);
        families.push({
          relationshipTypeId: relationshipTypeId,
          educationTypeId: educationTypeId,
          name: el.famName,
          sex: el.famGender,
          placeBirth: el.famBirthPlace,
          dateBirth: el.famBirthDate,
          occupation: el.famOccupation,
          desc: ""
        });
      }
      for (let i = 0; i < this.dependents.length; i++) {
        const el = this.dependents[i];
        const relationshipTypeId = this.relationshipTypeId(el.depRelation);
        const educationTypeId =this.educationTypeId(el.depEducation);
        families.push({
          relationshipTypeId: relationshipTypeId,
          educationTypeId: educationTypeId,
          name: el.depName,
          sex: el.depGender,
          placeBirth: el.depBirthPlace,
          dateBirth: el.depBirthDate,
          occupation: el.depOccupation,
          desc: ""
        });
      }

      const data = {
        applicantEmergency: {
          relationshipTypeId: 1,
          emergencyName: this.emergencyName,
          emergencyContact: this.emergencyNumber
        },
        applicantAddress: addresses,
        applicantFamily: families,
        applicantContact: [ //TODO: tanya Septovan, bukannya harusnya ada alamat disini
          {
            relationshipTypeId: 1,
            description: "",
            name: "G. Narasoma",
            sex: "M",
            contact: "085973812815",
            occupation: "BUMN"
          },
          {
            relationshipTypeId: 6,
            description: "",
            name: "C. Junior",
            sex: "M",
            contact: "082233116642",
            occupation: "TU Swasta"
          }
        ],
        applicantEducation: [
          {
            educationTypeId: 1,
            institution: "SD Sarimulya IV",
            startYear: "1994",
            endYear: "2000",
            major: "",
            gpa: "",
            desc: ""
          },
          {
            educationTypeId: 2,
            institution: "SMP Pupuk Kujang",
            startYear: "2000",
            endYear: "2003",
            major: "",
            gpa: "",
            desc: ""
          },
          {
            educationTypeId: 3,
            institution: "SMAN 2 Purwakarta",
            startYear: "2003",
            endYear: "2006",
            major: "IPS",
            gpa: "",
            desc: ""
          },
          {
            educationTypeId: 4,
            institution: "Unpad Bandung",
            startYear: "2006",
            endYear: "2009",
            major: "Adm. Bisnis",
            gpa: "3.41",
            desc: ""
          },
          {
            educationTypeId: 5,
            institution: "Pelita Bangsa Bekasi",
            startYear: "2007",
            endYear: "2011",
            major: "Management",
            gpa: "3.09",
            desc: ""
          },
          {
            educationTypeId: 6,
            institution: "Trisakti",
            startYear: "2012",
            endYear: "",
            major: "Management",
            gpa: "",
            desc: ""
          }
        ],
        applicantDescription: {
          educationMajorDesc: this.eduReason,
          educationPaperDesc: this.eduPaper
        }
      };
      console.log(data);
    },
    reset() {
      console.log(this.valid);
      this.$refs.form.reset();
    }
  },
  components: {
    dataInputRelation,
    dataInputEducation,
    dataInputAddress
  },
  created() {
    this.$route.query.martial == "false"
      ? (this.isMartial = false)
      : (this.isMartial = true);
  }
};
</script>
