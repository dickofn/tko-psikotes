<template>
  <span>
    <v-layout row wrap mb-2>
      <v-flex md8 offset-md2 xs12>
        <h4>Bacaan II.</h4>
        <p>Pengendalian hama memerlukan pengetahuan dan keterampilan khusus yang umumnya dimiliki oleh perusahaan pengendalian hama yang profesional. Meskipun telah digunakan sarana baku yang canggih. seperti penggunaan bahan kimia maupun cara mekanik, tetapi cara tradisional pun masih diterapkan bila perlu. Sebelum melaksanakan pembasmian, pemeriksaan lapangan dan identifikasi jenis hama perlu diadakan, yaitu melalui jejak kaki, jejak ekor, tinja atau urine. Ada tiga jenis hama yang dapat tinggal dalam satu bangunan, masing-masing mempunyai teritorial sendiri tanpa saling mengganggu. Ukuran badan, kesukaan makanan, dan jumlah kelahiran anak berbeda, namun sifat kecurigaan terhadap barang baru sama. Mereka sangat peka terhadap perubahan cahaya dan-mempunyai kebiasaan mengerat apa saja dari kayu, paralon, kabel sampai kasa kawat. Tujuan mengerat terutama untuk mengasah gigi pengeratnya yang selalu bertambah panjang (yang dapat menyebabkan kematiannya). Selain itu hama ini mengerat untuk dapat menembus benda yang menghalangi mereka keluar-masuk. Kebiasaan yang merupakan kelemahan mereka adalah tidak mengubah trayek lalu lintas mereka, kecuali dalam keadaan terpaksa.</p>
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
