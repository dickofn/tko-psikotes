<template>
  <span>
    <v-layout row wrap mb-2>
      <v-flex md8 offset-md2 xs12>
        <h4>Page 1</h4>
      </v-flex>
    </v-layout>
    <data-input-english
      :no="'1. '"
      :c="['The girls is afraid from the dog', 'The girls is afraid of the dog']"
      :a="a[0]"
      @aUpdated="updateA0"
      :no2="'2. '"
      :c2="['The teacher was angry against him', 'The teacher was angry with him']"
      :a2="a[1]"
      @a2Updated="updateA1"
    ></data-input-english>
    <data-input-english
      :no="'3. '"
      :c="['The girl is afraid from the dog', 'The girl is afraid of the dog']"
      :a="a[2]"
      @aUpdated="updateA2"
      :no2="'4. '"
      :c2="['He came with the train yesterday', 'He went away by train yesterday']"
      :a2="a[3]"
      @a2Updated="updateA3"
    ></data-input-english>
    <data-input-english
      :no="'5. '"
      :c="['I congratulate you for your success', 'I congratulate you on your success']"
      :a="a[4]"
      @aUpdated="updateA4"
      :no2="'6. '"
      :c2="['He went away instead to wait', 'He went away instead of waiting']"
      :a2="a[5]"
      @a2Updated="updateA5"
    ></data-input-english>
    <data-input-english
      :no="'7. '"
      :c="['He is quite capable of doing test', 'He is quite capable to do that']"
      :a="a[6]"
      @aUpdated="updateA6"
      :no2="'8. '"
      :c2="['He succeed in gaining of doing that', 'He succeed to gain the prize']"
      :a2="a[7]"
      @a2Updated="updateA7"
    ></data-input-english>
    <data-input-english
      :no="'9. '"
      :c="['I often think to go to United states', 'I often think of going to the United States']"
      :a="a[8]"
      @aUpdated="updateA8"
      :no2="'10. '"
      :c2="['You can’t avoid making mistakes', 'You can’t avoid to make mistakes']"
      :a2="a[9]"
      @a2Updated="updateA9"
    ></data-input-english>
    <data-input-english
      :no="'11. '"
      :c="['Does the gardener waters the flowers','Does the gardener water the flowers']"
      :a="a[10]"
      @aUpdated="updateA10"
      :no2="'12. '"
      :c2="['He said that the will come tomorrow','He said that he would come tomorrow']"
      :a2="a[11]"
      @a2Updated="updateA11"
    ></data-input-english>
    <data-input-english
      :no="'13. '"
      :c="['I have forgot to bring my book','I have forgotten to bring my book']"
      :a="a[12]"
      @aUpdated="updateA12"
      :no2="'14. '"
      :c2="['You ought to come yesterday','You ought to have come yesterday']"
      :a2="a[13]"
      @a2Updated="updateA13"
    ></data-input-english>
    <data-input-english
      :no="'15. '"
      :c="['I have seen a good film yesterday','I saw a good film yesterday']"
      :a="a[14]"
      @aUpdated="updateA14"
      :no2="'16. '"
      :c2="['His room’s window is open','The window of his room is open']"
      :a2="a[15]"
      @a2Updated="updateA15"
    ></data-input-english>
    <data-input-english
      :no="'17. '"
      :c="['It was him','It was he']"
      :a="a[16]"
      @aUpdated="updateA16"
      :no2="'18. '"
      :c2="['My Brother is taller than I','My Brother is taller than me']"
      :a2="a[17]"
      @a2Updated="updateA17"
    ></data-input-english>
    <data-input-english
      :no="'19. '"
      :c="['It is a secret between you and me','It is a secret between you and I']"
      :a="a[18]"
      @aUpdated="updateA18"
      :no2="'20. '"
      :c2="['There is no use in me learning it','There is no use in my learning it']"
      :a2="a[19]"
      @a2Updated="updateA19"
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