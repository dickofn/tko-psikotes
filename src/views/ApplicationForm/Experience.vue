<template>
  <v-container grid-list-xs>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <v-spacer></v-spacer>
            <h1 class="headline text-uppercase text-xs-center font-weight-light">Data Pengalaman</h1>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" v-model="valid">
                <v-layout row wrap mb-2>
                  <v-flex md8 offset-md2 xs12>
                    <h4>Riwayat Organisasi</h4>
                  </v-flex>
                  <v-flex md10 offset-md2 xs12>
                    <v-btn small @click="orgDialog = true">
                      <v-icon>add</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-dialog v-model="orgDialog" max-width="80vw">
                    <data-input-organisation @orgDataFilled="orgAdd" @orgDataCancelled="orgCancel"></data-input-organisation>
                  </v-dialog>
                  <!-- eslint-disable-next-line -->
                  <v-flex md8 offset-md2 xs12>
                    <v-data-table
                      :headers="orgTableHeaders"
                      :items="organisations"
                      class="elevation-1"
                      v-if="organisations.length"
                      hide-actions
                    >
                      <template slot="items" slot-scope="props">
                        <td>{{ props.item.orgName }}</td>
                        <td>{{ props.item.orgTitle }}</td>
                        <td>{{ props.item.orgPeriod }}</td>
                        <td class="justify-center layout px-0">
                          <v-icon small @click="orgDelete(props.item)">delete</v-icon>
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
import DataInputOrganisation from '../../components/ApplicationForm/DataInputOrganisation'

export default {
  data () {
    return {
      organisations: [],
      orgTableHeaders: [
        {
          text: "Nama Organisasi",
          value: "orgName"
        },
        {
          text: "Jabatan",
          value: "orgTitle"
        },
        {
          text: "Periode",
          value: "orgPeriod"
        }
      ],
      orgDialog: false,
      valid: true,
      rules: {
        required: v => !!v || 'Wajib diisi!',
      }
    }
  },
  methods: {
    orgAdd (data) {
      this.organisations.push(data)
      this.orgDialog = false;
    },
    orgDelete (item) {
      const index = this.organisations.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.organisations.splice(index, 1)
    },
    orgCancel () {
      this.orgDialog = false;
    },
    reset () {
      console.log(this.valid)
      this.$refs.form.reset()
    }
  },
  components: {
    DataInputOrganisation
  }
}
</script>
