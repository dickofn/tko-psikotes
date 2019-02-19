<template>
  <span>
    <v-layout row wrap mb-2>
      <v-flex md8 offset-md2 xs12>
        <h4>Bacaan I.</h4>
        <p>Seorang penjaga kios dijatuhi hukuman mati oleh pengadilan tinggi Kuala Lumpur karena mengedarkan 384.17 gram kanabis tiga tahun lalu. Hakim pengadilan tinggi menyatakan Ismail Mohamad (disingkat IM), 22, bersalah melakukan pelanggaran ini pada 23 Juni 1987. Ismail tampak tenang tetapi ibunya menangis tersedu-sedu ketika vonis dijatuhkan. Undang-undang obat terlarang menuntut hukuman mati bagi siapa saja yang tertangkap dengan 15 gram atau lebih heroin, 200 gram kanabis, atau satu kilogram candu. Lebih dari 70 orang termasuk 26 orang asing, telah digantung karena.pelanggaran obat terlarang sejak 1975.</p>
      </v-flex>
    </v-layout>
    <data-input-story
      :no="'1. '"
      :q="'Dalam peristiwa ini IM disebut : '"
      :c="['terdakwa', 'tahanan', 'tanpa pembela', 'terpidana', 'terperdaya']"
      :a="a[0]"
      @aUpdated="updateA0"
      :rules="rules"
      :valid="valid"
      @validUpdated="updateValid"
    ></data-input-story>
    <data-input-story
      :no="'2. '"
      :q="'Dalam peristiwa ini IM disebut : '"
      :c="['terdakwa', 'tahanan', 'tanpa pembela', 'terpidana', 'terperdaya']"
      :a="a[1]"
      @aUpdated="updateA1"
      :rules="rules"
      :valid="valid"
      @validUpdated="updateValid"
    ></data-input-story>
  </span>
</template>

<script>
import dataInputStory from '../Input/DataInputStory'
export default {
  props: ['a', 'rules', 'valid'],
  components: {
    dataInputStory
  },
  methods: {
    updateA0 (i) { this.$emit('a0Updated', i); },
    updateA1 (i) { this.$emit('a1Updated', i); },
    updateValid (i) { this.$emit('validUpdated', i); }
  }
}
</script>

<style>
</style>
