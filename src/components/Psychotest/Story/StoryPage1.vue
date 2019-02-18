<template>
  <span>
    <v-layout row wrap mb-2>
      <v-flex md8 offset-md2 xs12>
        <h4>Bacaan I.</h4>
        <p>Seorang penjaga kios dijatuhi hukuman mati oleh pengadilan tinggi Kuala Lumpur karena mengedarkan 384.17 gram kanabis tiga tahun lalu. Hakim pengadilan tinggi menyatakan Ismail Mohamad (disingkat IM), 22, bersalah melakukan pelanggaran ini pada 23 Juni 1987. Ismail tampak tenang tetapi ibunya menangis tersedu-sedu ketika vonis dijatuhkan. Undang-undang obat terlarang menuntut hukuman mati bagi siapa saja yang tertangkap dengan 15 gram atau lebih heroin, 200 gram kanabis, atau satu kilogram candu. Lebih dari 70 orang termasuk 26 orang asing, telah digantung karena.pelanggaran obat terlarang sejak 1975.</p>
      </v-flex>
    </v-layout>
    <data-input-story></data-input-story>
  </span>
</template>

<script>
import dataInputStory from '../Input/DataInputStory'
export default {
  props:['rules', 'valid'],
  components: {
    dataInputStory
  }
}
</script>

<style>
</style>
