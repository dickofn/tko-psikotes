<template>
  <span>
    <v-layout row wrap mb-2>
      <v-flex md8 offset-md2 xs12>
        <h4>Page 2</h4>
      </v-flex>
    </v-layout>
    <data-input-english
      :no="'21. '"
      :c="['The pupil gave his examination', 'The pupil took his examination']"
      :a="a[20]"
      @aUpdated="updateA20"
      :no2="'22. '"
      :c2="['We took a walk along the river','We take a walk along the river']"
      :a2="a[21]"
      @a2Updated="updateA21"
    ></data-input-english>
    <data-input-english
      :no="'23. '"
      :c="['Shall we go there with the feet?', 'Shall we go there on foot?']"
      :a="a[22]"
      @aUpdated="updateA22"
      :no2="'24. '"
      :c2="['I saw a strange dream last night','I had a strange dream last night']"
      :a2="a[23]"
      @a2Updated="updateA23"
    ></data-input-english>
    <data-input-english
      :no="'25. '"
      :c="['I did one mistake in dictation', 'I made one mistake in dictation']"
      :a="a[24]"
      @aUpdated="updateA24"
      :no2="'26. '"
      :c2="['He came and asked my book','He came and asked for my book']"
      :a2="a[25]"
      @a2Updated="updateA25"
    ></data-input-english>
    <data-input-english
      :no="'27. '"
      :c="['She explained me to the matter', 'She explained the matter to me']"
      :a="a[26]"
      @aUpdated="updateA26"
      :no2="'28. '"
      :c2="['Who is knocking the door?','Who is knocking at the door?']"
      :a2="a[27]"
      @a2Updated="updateA27"
    ></data-input-english>
    <data-input-english
      :no="'29. '"
      :c="['I shall speak to him about that', 'I shall speak him about that']"
      :a="a[28]"
      @aUpdated="updateA28"
      :no2="'30. '"
      :c2="['Can you supply me with all I need?','Can you supply me all I need?']"
      :a2="a[29]"
      @a2Updated="updateA29"
    ></data-input-english>
    <data-input-english
      :no="'31. '"
      :c="['English are fond of sports', 'The English are fond of sports']"
      :a="a[30]"
      @aUpdated="updateA30"
      :no2="'32. '"
      :c2="['I told them not to make a noises','I told them not to make noises']"
      :a2="a[31]"
      @a2Updated="updateA31"
    ></data-input-english>
    <data-input-english
      :no="'33. '"
      :c="['Hundred years make a century', 'A Hundred years make a century']"
      :a="a[32]"
      @aUpdated="updateA32"
      :no2="'34. '"
      :c2="['He drank half glass of milk','He drank half a glass of milk']"
      :a2="a[33]"
      @a2Updated="updateA33"
    ></data-input-english>
    <data-input-english
      :no="'35. '"
      :c="['A boy’s hat is different from a girl', 'A boy’s hat is different from a girls']"
      :a="a[34]"
      @aUpdated="updateA34"
      :no2="'36. '"
      :c2="['Please answer to my question','Please answer my question']"
      :a2="a[35]"
      @a2Updated="updateA35"
    ></data-input-english>
    <data-input-english
      :no="'37. '"
      :c="['We entered the classroom', 'We entered into the classroom']"
      :a="a[36]"
      @aUpdated="updateA36"
      :no2="'38. '"
      :c2="['He left from England last week','He left England last week']"
      :a2="a[37]"
      @a2Updated="updateA37"
    ></data-input-english>
    <data-input-english
      :no="'39. '"
      :c="['I told to him to come at once', 'I told him to come at once']"
      :a="a[38]"
      @aUpdated="updateA38"
      :no2="'40. '"
      :c2="['We reached the school early','We reached at the school early']"
      :a2="a[39]"
      @a2Updated="updateA39"
    ></data-input-english>
  </span>
</template>

<script>
import dataInputEnglish from '../Input/DataInputEnglish'
export default {
  props: ['a'],
  components: {
    dataInputEnglish
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
    updateA30 (i) { this.$emit('a30Updated', i); },
    updateA31 (i) { this.$emit('a31Updated', i); },
    updateA32 (i) { this.$emit('a32Updated', i); },
    updateA33 (i) { this.$emit('a33Updated', i); },
    updateA34 (i) { this.$emit('a34Updated', i); },
    updateA35 (i) { this.$emit('a35Updated', i); },
    updateA36 (i) { this.$emit('a36Updated', i); },
    updateA37 (i) { this.$emit('a37Updated', i); },
    updateA38 (i) { this.$emit('a38Updated', i); },
    updateA39 (i) { this.$emit('a39Updated', i); },
  }
}
</script>