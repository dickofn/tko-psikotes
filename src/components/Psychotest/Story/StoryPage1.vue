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
    ></data-input-story>
    <data-input-story
      :no="'2. '"
      :q="'Sejak ditangkap sampai digantung diperlukan waktu : '"
      :c="['1-4 tahun', '5-10 tahun', 'puluhan tahun', 'tidak menentu', 'tak disebutkan']"
      :a="a[1]"
      @aUpdated="updateA1"
    ></data-input-story>
    <data-input-story
      :no="'3. '"
      :q="'Ismail Mohamad tergolong : '"
      :c="['penjaga keamanan', 'tukang tadah', 'setengah baya', 'pemuda', 'remaja']"
      :a="a[2]"
      @aUpdated="updateA2"
    ></data-input-story>
    <data-input-story
      :no="'4. '"
      :q="'Bacaan ini ditulis pada tahun : '"
      :c="['tidak diketahui', '1998', '1987', '1980', '1975']"
      :a="a[3]"
      @aUpdated="updateA3"
    ></data-input-story>
    <data-input-story
      :no="'5. '"
      :q="'Polisi narkotik menangkap IM atas tuduhan sebagai : '"
      :c="['cukong', 'abonemen', 'sub-agen', 'konsumen', 'produsen']"
      :a="a[4]"
      @aUpdated="updateA4"
    ></data-input-story>
    <data-input-story
      :no="'6. '"
      :q="'Hukuman mati berkaitan dengan narkotika ini berlaku untuk semua : '"
      :c="['warga negara', 'terdakwa', 'penduduk', 'orang', 'penduduk yang menetap']"
      :a="a[5]"
      @aUpdated="updateA5"
    ></data-input-story>
    <data-input-story
      :no="'7. '"
      :q="'Ketika vonis dijatuhkan ibunya menangis dengan : '"
      :c="['isakan', 'ratapan', 'histeris', 'wajah sendu', 'penuh sesal']"
      :a="a[6]"
      @aUpdated="updateA6"
    ></data-input-story>
    <data-input-story
      :no="'8. '"
      :q="'Menurut undang-undang tersebut obat terlarang yang dianggap paling berbahaya bagi umat adalah : '"
      :c="['kanabis', 'heroin', 'cocain', 'morfin', 'candu']"
      :a="a[7]"
      @aUpdated="updateA7"
    ></data-input-story>
    <data-input-story
      :no="'9. '"
      :q="'Pernyataan yang paling tepat bagi isi cerita ini adalah : '"
      :c="['hukuman kejam bagi pelanggar belum tentu efektif', 'hukuman gantung bagi generasi muda', 'hukuman dilaksanakan tanpa pandang bulu', 'banyak orang asing tidak menyadari hukum gantung ini', 'hukuman gantung paling efektif memberantas narkotika']"
      :a="a[8]"
      @aUpdated="updateA8"
    ></data-input-story>
    <data-input-story
      :no="'10. '"
      :q="'Sejak undang-undang berlaku sampai ditulisnya baccan ini, RATA-RATA setiap tahun yang telah menjalani hukuman gantung sekitar : '"
      :c="['2 sampai 10 orang', 'belasan orang', 'dua puluhan orang', 'lebih dari 70 orang', 'tidak terhitung']"
      :a="a[9]"
      @aUpdated="updateA9"
    ></data-input-story>
  </span>
</template>

<script>
import dataInputStory from '../Input/DataInputStory'
export default {
  props: ['a'],
  components: {
    dataInputStory
  },
  methods: {
    updateA0 (i) { this.$emit('a0Updated', i); },
    updateA1 (i) { this.$emit('a1Updated', i); },
    updateA2 (i) { this.$emit('a2Updated', i); },
    updateA3 (i) { this.$emit('a3Updated', i); },
    updateA4 (i) { this.$emit('a4Updated', i); },
    updateA5 (i) { this.$emit('a5Updated', i); },
    updateA6 (i) { this.$emit('a6Updated', i); },
    updateA7 (i) { this.$emit('a7Updated', i); },
    updateA8 (i) { this.$emit('a8Updated', i); },
    updateA9 (i) { this.$emit('a9Updated', i); },
  }
}
</script>