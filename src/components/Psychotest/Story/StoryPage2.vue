<template>
  <span>
    <v-layout row wrap mb-2>
      <v-flex md8 offset-md2 xs12>
        <h4>Bacaan II.</h4>
        <p>Pengendalian hama memerlukan pengetahuan dan keterampilan khusus yang umumnya dimiliki oleh perusahaan pengendalian hama yang profesional. Meskipun telah digunakan sarana baku yang canggih. seperti penggunaan bahan kimia maupun cara mekanik, tetapi cara tradisional pun masih diterapkan bila perlu. Sebelum melaksanakan pembasmian, pemeriksaan lapangan dan identifikasi jenis hama perlu diadakan, yaitu melalui jejak kaki, jejak ekor, tinja atau urine. Ada tiga jenis hama yang dapat tinggal dalam satu bangunan, masing-masing mempunyai teritorial sendiri tanpa saling mengganggu. Ukuran badan, kesukaan makanan, dan jumlah kelahiran anak berbeda, namun sifat kecurigaan terhadap barang baru sama. Mereka sangat peka terhadap perubahan cahaya dan-mempunyai kebiasaan mengerat apa saja dari kayu, paralon, kabel sampai kasa kawat. Tujuan mengerat terutama untuk mengasah gigi pengeratnya yang selalu bertambah panjang (yang dapat menyebabkan kematiannya). Selain itu hama ini mengerat untuk dapat menembus benda yang menghalangi mereka keluar-masuk. Kebiasaan yang merupakan kelemahan mereka adalah tidak mengubah trayek lalu lintas mereka, kecuali dalam keadaan terpaksa.</p>
      </v-flex>
    </v-layout>
    <data-input-story
      :no="'11. '"
      :q="'Hama yang disebut tadi adalah : '"
      :c="['rayap', 'bangsat', 'pengerat', 'tikus', 'kucing']"
      :a="a[10]"
      @aUpdated="updateA10"
    ></data-input-story>
    <data-input-story
      :no="'12. '"
      :q="'Pengendalian hama yang profesional perlu pengetahuan : '"
      :c="['ekologi', 'parasitologi', 'teknik mekanik', 'khusus', 'tradisional']"
      :a="a[11]"
      @aUpdated="updateA11"
    ></data-input-story>
    <data-input-story
      :no="'13. '"
      :q="'Satu perusahaan disebut profesional bila perusahaan itu : '"
      :c="['besar', 'komersial', 'handal', 'canggih', 'modern']"
      :a="a[12]"
      @aUpdated="updateA12"
    ></data-input-story>
    <data-input-story
      :no="'14. '"
      :q="'Hama ini mengerat untuk membuat : '"
      :c="['perlindungan', 'teritorial', 'sarang', 'bangunan', 'terowongan']"
      :a="a[13]"
      @aUpdated="updateA13"
    ></data-input-story>
    <data-input-story
      :no="'15. '"
      :q="'Untuk mengenali hama ini dilakukan pemeriksaan : '"
      :c="['bercak kaki', 'air seni', 'bekas gigitan', 'bekas trayek', 'apa saja yang dikerat']"
      :a="a[14]"
      @aUpdated="updateA14"
    ></data-input-story>
    <data-input-story
      :no="'16. '"
      :q="'Jenis-jenis hama ini dapat memenuhi satu tempat dan mereka saling : '"
      :c="['komunikasi lewat trayek', 'bantu-membantu', 'menghormati wilayah', 'Menghindari satu sama lain', 'curiga-mencurigai']"
      :a="a[15]"
      @aUpdated="updateA15"
    ></data-input-story>
    <data-input-story
      :no="'17. '"
      :q="'Pemeriksaan dilapangan guna pemberantasan hama tersebut dimaksudkan untuk mengenali : '"
      :c="['kerusakannya', 'pembiakannya', 'variestasnya', 'kelemahannya', 'pengasahan giginya']"
      :a="a[16]"
      @aUpdated="updateA16"
    ></data-input-story>
    <data-input-story
      :no="'18. '"
      :q="'Membasmi hama ini perlu memanfaatkan kebiasaan hama yang menetap, ialah cara mereka : '"
      :c="['pulang-pergi', 'mengerat makanan', 'mengasah gigi', 'menembus benda', 'berkembang biak']"
      :a="a[17]"
      @aUpdated="updateA17"
    ></data-input-story>
    <data-input-story
      :no="'19. '"
      :q="'Gambaran keistimewaan hama ini adalah gigi serinya : '"
      :c="['sekuat kawat', 'besar tetap pendek', 'sangat tajam', 'tumbuh terus', 'berbisa mematikan']"
      :a="a[18]"
      @aUpdated="updateA18"
    ></data-input-story>
    <data-input-story
      :no="'20. '"
      :q="'Sejak undang-undang berlaku sampai ditulisnya baccan ini, RATA-RATA setiap tahun yang telah menjalani hukuman gantung sekitar : '"
      :c="['cahaya terang', 'barang asing', 'pergantian cahaya', 'bahan kimia', 'trayek lalu lintas']"
      :a="a[19]"
      @aUpdated="updateA19"
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
    updateA10 (i) { this.$emit('a10Updated', i); },
    updateA11 (i) { this.$emit('a11Updated', i); },
    updateA12 (i) { this.$emit('a12Updated', i); },
    updateA13 (i) { this.$emit('a13Updated', i); },
    updateA14 (i) { this.$emit('a14Updated', i); },
    updateA15 (i) { this.$emit('a15Updated', i); },
    updateA16 (i) { this.$emit('a16Updated', i); },
    updateA17 (i) { this.$emit('a17Updated', i); },
    updateA18 (i) { this.$emit('a18Updated', i); },
    updateA19 (i) { this.$emit('a19Updated', i); },
  }
}
</script>