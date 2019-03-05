<template>
  <v-layout row wrap mb-2>
    <v-flex md8 offset-md2 xs12>
      <h4>Alamat {{ title }}</h4>
      <v-textarea
        label="Alamat Lengkap"
        name="addressDetail"
        id="addressDetail"
        rows="2"
        :value="addressDetail"
        @input="updateDetail"
      ></v-textarea>
    </v-flex>
    <v-flex md4 offset-md2 xs12>
      <v-autocomplete
        label="Propinsi"
        name="addressPropinsi"
        id="addressPropinsi"
        :items="addressPropinsiItems"
        :loading="addressLoadingPropinsi"
        :search-input.sync="addressPropinsiSearch"
        color="blue"
        hide-no-data
        hide-selected
        item-text="name"
        item-value="id"
        @blur="addressSelectedPropinsi = addressPropinsi"
        :value="addressPropinsi"
        @input="updatePropinsi"
      ></v-autocomplete>
    </v-flex>
    <v-flex md4 xs12>
      <v-autocomplete
        label="Kota"
        name="addressKota"
        id="addressKota"
        :items="addressKotaItems"
        :loading="addressLoadingKota"
        :search-input.sync="addressKotaSearch"
        color="blue"
        hide-no-data
        hide-selected
        item-text="name"
        item-value="id"
        @blur="addressSelectedKota = addressKota"
        :disabled="!addressPropinsi"
        :value="addressKota"
        @input="updateKota"
      ></v-autocomplete>
    </v-flex>
    <v-flex md4 offset-md2 xs12>
      <v-autocomplete
        label="Kecamatan"
        name="addressKecamatan"
        id="addressKecamatan"
        :items="addressKecamatanItems"
        :loading="addressLoadingKecamatan"
        :search-input.sync="addressKecamatanSearch"
        color="blue"
        hide-no-data
        hide-selected
        item-text="name"
        item-value="id"
        @blur="addressSelectedKecamatan = addressKecamatan"
        :disabled="!addressKota"
        :value="addressKecamatan"
        @input="updateKecamatan"
      ></v-autocomplete>
    </v-flex>
    <v-flex md4 xs12>
      <v-autocomplete
        label="Kelurahan"
        name="addressKelurahan"
        id="addressKelurahan"
        :items="addressKelurahanItems"
        :loading="addressLoadingKelurahan"
        :search-input.sync="addressKelurahanSearch"
        color="blue"
        hide-no-data
        hide-selected
        item-text="name"
        item-value="id"
        @blur="addressSelectedKelurahan = addressKelurahan"
        :disabled="!addressKecamatan"
        :value="addressKelurahan"
        @input="updateKelurahan"
      ></v-autocomplete>
    </v-flex>
    <v-flex md2 offset-md8 xs12>
      <v-text-field
        label="Kode Pos"
        name="addressPos"
        id="addressPos"
        :value="addressPos"
        @input="updatePos"
      ></v-text-field>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: [
    'title',
    'addressDetail',
    'addressPropinsi',
    'addressKota',
    'addressKecamatan',
    'addressKelurahan',
    'addressPos'
  ],
  data () {
    return {
      addressLoadingPropinsi: false,
      addressPropinsiSearch: null,
      addressPropinsiItems: [],
      addressSelectedPropinsi: "",
      addressLoadingKota: false,
      addressKotaSearch: null,
      addressKotaItems: [],
      addressSelectedKota: "",
      addressLoadingKecamatan: false,
      addressKecamatanSearch: null,
      addressKecamatanItems: [],
      addressSelectedKecamatan: "",
      addressLoadingKelurahan: false,
      addressKelurahanSearch: null,
      addressKelurahanItems: [],
    }
  },
  methods: {
    updateDetail (i) {
      this.$emit('addressDetailUpdated', i)
    },
    updatePropinsi (i) {
      this.$emit('addressPropinsiUpdated', i)
    },
    updateKota (i) {
      this.$emit('addressKotaUpdated', i)
    },
    updateKecamatan (i) {
      this.$emit('addressKecamatanUpdated', i)
    },
    updateKelurahan (i) {
      this.$emit('addressKelurahanUpdated', i)
    },
    updatePos (i) {
      this.$emit('addressPosUpdated', i)
    }
  },

/** 
  *FIXME:
    -Ketika ganti region yang kastanya lebih tinggi, yang ke reset hanya kasta 1 dibawahnya, e.g: line 159
*/
  watch: {
    // eslint-disable-next-line
    addressPropinsiSearch (val) {
      if (this.addressSelectedPropinsi != this.addressPropinsi) {
        this.addressKotaItems = []
        this.addressKecamatanItems = []
        this.addressKelurahanItems = []
      }
      // Items have already been loaded
      if (this.addressPropinsiItems.length > 0) return

      // Items have already been requested
      if (this.addressLoadingPropinsi) return

      this.addressLoadingPropinsi = true

      // Lazily load input items
      fetch(process.env.VUE_APP_API_URL + '/administratif/get/provinsi')
        .then(res => res.json())
        .then(res => {
          const items = res.data.result
          this.addressPropinsiItems = items
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => (this.addressLoadingPropinsi = false))

    },

    // eslint-disable-next-line
    addressKotaSearch (val) {
      if (this.addressSelectedKota != this.addressKota) {
        this.addressKecamatanItems = []
        this.addressKelurahanItems = []
      }
      // Items have already been loaded 
      if (this.addressKotaItems.length > 0) return

      // Items have already been requested
      if (this.addressLoadingKota) return

      this.addressLoadingKota = true

      // Lazily load input items
      fetch(process.env.VUE_APP_API_URL + '/administratif/get/kota/' + this.addressPropinsi)
        .then(res => res.json())
        .then(res => {
          const items = res.data.result
          this.addressKotaItems = items
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => (this.addressLoadingKota = false))


    },

    // eslint-disable-next-line
    addressKecamatanSearch (val) {
      if (this.addressSelectedKecamatan != this.addressKecamatan) this.addressKelurahanItems = []
      // Items have already been loaded 
      if (this.addressKecamatanItems.length > 0) return

      // Items have already been requested
      if (this.addressLoadingKecamatan) return

      this.addressLoadingKecamatan = true

      // Lazily load input items
      fetch(process.env.VUE_APP_API_URL + '/administratif/get/kecamatan/' + this.addressKota)
        .then(res => res.json())
        .then(res => {
          const items = res.data.result
          this.addressKecamatanItems = items
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => (this.addressLoadingKecamatan = false))
    },

    // eslint-disable-next-line
    addressKelurahanSearch (val) {
      if (this.addressSelectedKelurahan != this.addressKelurahan) this.addressPos = ""
      // Items have already been loaded 
      if (this.addressKelurahanItems.length > 0) return

      // Items have already been requested
      if (this.addressLoadingKelurahan) return

      this.addressLoadingKelurahan = true

      // Lazily load input items
      fetch(process.env.VUE_APP_API_URL + '/administratif/get/kelurahan/' + this.addressKecamatan)
        .then(res => res.json())
        .then(res => {
          const items = res.data.result
          this.addressKelurahanItems = items
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => (this.addressLoadingKelurahan = false))
    },
  }
}
</script>

<style>
</style>
