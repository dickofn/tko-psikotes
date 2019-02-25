<template>
  <span>
    <v-layout row wrap mb-2>
      <v-flex md8 offset-md2 xs12>
        <h4>Bacaan III.</h4>
        <p>Dari Pentagon diumumkan bahwa rencana anggaran militer Amerika Serikat (AS) untuk lima tahun mendatang akan berkurang 50 milyar dolar. Dana tersebut akan dialihkan untuk program-program lain termasuk untuk usaha mengatasi kesulitan ekonomi. Pengurangan anggaran tersebut pasti akan mempengaruhi program-program militer dasar. Namun belum ada keputusan terakhir tentang ini. Menteri pertahanan dan kepala staf gabungan telah memerintahkan peninjauan kembali secara menyeluruh kebutuhan-kebutuhan militer di masa mendatang untuk disesuaikan. Tidak terelakkan, AS harus mengurangi pasukannya. pesawat dan kapal-kapal tempur. Dengan pengurangan tersebut anggaran militer untuk lima tahun mendatang turun menjadi 240 milyar dolar.
          <br>Pengurangan ini merupakan hasil dari tekanan rakyat atas anggaran militer yang dinilai terlalu besar. Sebagian rakyat tidak melihat lagi relevansi anggaran militer yang besar setelah tenggelamnya komunisme di banyak negara termasuk Uni Soviet dan berakhirnya Perang Dingin. Berbagai pihak mendesak untuk menempatkan program-program dalam negeri pada prioritas yang lebih tinggi. Sedang anggaran militer cukup untuk menghadapi kemungkinan yang terburuk pada masa yang akan datang. Namun kemungkinan yang terburuk itu sangat tipis terjadi bila melihat situasi dunia sekarang. Kemungkinan, Pentagon akan mengurangi divisi-divisi angkatan daratnya yang aktif, angkatan udaranya terpaksa harus mengurangi wing-wing tempur, dan angkatan lautnya harus mengurangi kapal induk. Program-program senjata canggih seperti pembom B-2 Stealth, jet tempur F-22 dan kapal selam seawolf kemungkinan akan dibatalkan atau ditunda.
        </p>
      </v-flex>
    </v-layout>
    <data-input-story
      :no="'21. '"
      :q="'Pentagon berarti  : '"
      :c="['tiga', 'empat', 'lima', 'enam', 'tujuh']"
      :a="a[20]"
      @aUpdated="updateA20"
    ></data-input-story>
    <data-input-story
      :no="'22. '"
      :q="'Departemen yang menghuni Pentagon adalah Departemen : '"
      :c="['Dalam Negeri', 'Luar Negeri', 'Tenaga Kerja', 'Pertahanan', 'Keuangan']"
      :a="a[21]"
      @aUpdated="updateA21"
    ></data-input-story>
    <data-input-story
      :no="'23. '"
      :q="'Tertulis dengan angka, banyaknya nol dalam “50 milyar” ada : '"
      :c="['tiga belas', 'dua belas', 'sebelas', 'sepuluh', 'sembilan']"
      :a="a[22]"
      @aUpdated="updateA22"
    ></data-input-story>
    <data-input-story
      :no="'24. '"
      :q="'Semula, berapakah anggaran militer AS lima tahunan : '"
      :c="['240 milyar', '245 milyar', '260 milyar', '280 milyar', '290 milyar']"
      :a="a[23]"
      @aUpdated="updateA23"
    ></data-input-story>
    <data-input-story
      :no="'25. '"
      :q="'Tinjauan menyeluruh kebutuhan-kebutuhan militer dilakukan untuk disesuaikan dengan : '"
      :c="['penciutan anggaran', 'berakhirnya perang dingin', 'perintah kepala staf', 'kesulitan ekonomi', 'departemen keuangan AS']"
      :a="a[24]"
      @aUpdated="updateA24"
    ></data-input-story>
    <data-input-story
      :no="'26. '"
      :q="'Pengurangan anggaran ini adalah kehendak : '"
      :c="['Rakyat AS', 'Pemerintah AS', 'Menteri Pertahanan dan Kepala Staf Gabungan', 'Departemen Ekonomi', 'Pembatalan dan penundaan']"
      :a="a[25]"
      @aUpdated="updateA25"
    ></data-input-story>
    <data-input-story
      :no="'27. '"
      :q="'Anggaran militer besar-besaran tidak diperlukan lagi sebab tidak ada lagi ancaman dari : '"
      :c="['situasi dunia', 'dalam negeri', 'ekonomi buruk', 'komunisme', 'separatis']"
      :a="a[26]"
      @aUpdated="updateA26"
    ></data-input-story>
    <data-input-story
      :no="'28. '"
      :q="'Saat bacaan ini ditulis, AS sedang mengalami kesulitan : '"
      :c="['militer', 'politik', 'ekonomi', 'keamanan', 'prioritas']"
      :a="a[27]"
      @aUpdated="updateA27"
    ></data-input-story>
    <data-input-story
      :no="'29. '"
      :q="'F-22 adalah sejenis : '"
      :c="['kapal perang', 'pesawat udara', 'pesawat amphibi', 'senjata nuklir', 'misil balistik']"
      :a="a[28]"
      @aUpdated="updateA28"
    ></data-input-story>
    <data-input-story
      :no="'30. '"
      :q="'Saat bacaan ini ditulis, B-2, F-22 dan Seawolf, besar kemungkinan sedang dalam proses : '"
      :c="['dibatalkan', 'ditunda', 'disempurnakan', 'diuji coba', 'dirancang']"
      :a="a[29]"
      @aUpdated="updateA29"
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
    updateA20 (i) { this.$emit('a20Updated', i); },
    updateA21 (i) { this.$emit('a21Updated', i); },
    updateA22 (i) { this.$emit('a22Updated', i); },
    updateA23 (i) { this.$emit('a23Updated', i); },
    updateA24 (i) { this.$emit('a24Updated', i); },
    updateA25 (i) { this.$emit('a25Updated', i); },
    updateA26 (i) { this.$emit('a26Updated', i); },
    updateA27 (i) { this.$emit('a27Updated', i); },
    updateA28 (i) { this.$emit('a28Updated', i); },
    updateA29 (i) { this.$emit('a29Updated', i); },
  }
}
</script>