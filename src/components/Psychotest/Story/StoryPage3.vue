<template>
  <span>
    <v-layout row wrap mb-2>
      <v-flex md8 offset-md2 xs12>
        <h4>Bacaan III.</h4>
        <p>
          Dari Pentagon diumumkan bahwa rencana anggaran militer Amerika Serikat (AS) untuk lima tahun mendatang akan berkurang 50 milyar dolar. Dana tersebut akan dialihkan untuk program-program lain termasuk untuk usaha mengatasi kesulitan ekonomi. Pengurangan anggaran tersebut pasti akan mempengaruhi program-program militer dasar. Namun belum ada keputusan terakhir tentang ini. Menteri pertahanan dan kepala staf gabungan telah memerintahkan peninjauan kembali secara menyeluruh kebutuhan-kebutuhan militer di masa mendatang untuk disesuaikan. Tidak terelakkan, AS harus mengurangi pasukannya. pesawat dan kapal-kapal tempur. Dengan pengurangan tersebut anggaran militer untuk lima tahun mendatang turun menjadi 240 milyar dolar.
          <br>
          Pengurangan ini merupakan hasil dari tekanan rakyat atas anggaran militer yang dinilai terlalu besar. Sebagian rakyat tidak melihat lagi relevansi anggaran militer yang besar setelah tenggelamnya komunisme di banyak negara termasuk Uni Soviet dan berakhirnya Perang Dingin. Berbagai pihak mendesak untuk menempatkan program-program dalam negeri pada prioritas yang lebih tinggi. Sedang anggaran militer cukup untuk menghadapi kemungkinan yang terburuk pada masa yang akan datang. Namun kemungkinan yang terburuk itu sangat tipis terjadi bila melihat situasi dunia sekarang. Kemungkinan, Pentagon akan mengurangi divisi-divisi angkatan daratnya yang aktif, angkatan udaranya terpaksa harus mengurangi wing-wing tempur, dan angkatan lautnya harus mengurangi kapal induk. Program-program senjata canggih seperti pembom B-2 Stealth, jet tempur F-22 dan kapal selam seawolf kemungkinan akan dibatalkan atau ditunda.
        </p>
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
