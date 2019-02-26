<template>
  <span>
    <v-layout row wrap mb-2>
      <v-flex md8 offset-md2 xs12>
        <h4>Page 5</h4>
      </v-flex>
    </v-layout>
    <data-input-english
      :no="'81. '"
      :c="['Many new home have been built', 'Many new houses have been built']"
      :a="a[80]"
      @aUpdated="updateA80"
      :no2="'82. '"
      :c2="['You should go to your house now','You should go home now']"
      :a2="a[81]"
      @a2Updated="updateA81"
    ></data-input-english>
    <data-input-english
      :no="'83. '"
      :c="['Telling lies is a very bad custom', 'Telling lie is a very bad habit']"
      :a="a[82]"
      @aUpdated="updateA82"
      :no2="'84. '"
      :c2="['The Indians have strange habit','The Indians have strange customs']"
      :a2="a[83]"
      @a2Updated="updateA83"
    ></data-input-english>
    <data-input-english
      :no="'85. '"
      :c="['That large tree make a nice shadow', 'That large tree make a nice shade']"
      :a="a[84]"
      @aUpdated="updateA84"
      :no2="'86. '"
      :c2="['He gave me some good advices','He gave me some good advice']"
      :a2="a[85]"
      @a2Updated="updateA85"
    ></data-input-english>
    <data-input-english
      :no="'87. '"
      :c="['Can you give me any informations?', 'Can you give me any information?']"
      :a="a[86]"
      @aUpdated="updateA86"
      :no2="'88. '"
      :c2="['Furniture are often made of wood','Furniture is often made of wood']"
      :a2="a[87]"
      @a2Updated="updateA87"
    ></data-input-english>
    <data-input-english
      :no="'89. '"
      :c="['The fire caused many damage', 'The fire caused much damage']"
      :a="a[88]"
      @aUpdated="updateA88"
      :no2="'90. '"
      :c2="['Today I have many works to do','Today I have lot of work to do']"
      :a2="a[89]"
      @a2Updated="updateA89"
    ></data-input-english>
    <data-input-english
      :no="'91. '"
      :c="['He behaves in a friendly manner', 'He behave friendly']"
      :a="a[90]"
      @aUpdated="updateA90"
      :no2="'92. '"
      :c2="['He had plenty work to do','He had plenty of work to do']"
      :a2="a[91]"
      @a2Updated="updateA91"
    ></data-input-english>
    <data-input-english
      :no="'93. '"
      :c="['After we went home for dinner', 'Afterward we went home for dinner']"
      :a="a[92]"
      @aUpdated="updateA92"
      :no2="'94. '"
      :c2="['I have seen both of them','I have seen and the two of them']"
      :a2="a[93]"
      @a2Updated="updateA93"
    ></data-input-english>
    <data-input-english
      :no="'95. '"
      :c="['He does not trust even his friend', 'He does not trust and his friend']"
      :a="a[94]"
      @aUpdated="updateA94"
      :no2="'96. '"
      :c2="['Be careful not to loose your money','Be careful not to lose your money']"
      :a2="a[95]"
      @a2Updated="updateA95"
    ></data-input-english>
    <data-input-english
      :no="'97. '"
      :c="['This little girl sang beautifully', 'This little girl sang beautiful']"
      :a="a[96]"
      @aUpdated="updateA96"
      :no2="'98. '"
      :c2="['The badminton player plays very well','The badminton player plays very good']"
      :a2="a[97]"
      @a2Updated="updateA97"
    ></data-input-english>
    <data-input-english
      :no="'99. '"
      :c="['The poorman is not able to play', 'The poorman does not able to play']"
      :a="a[98]"
      @aUpdated="updateA98"
      :no2="'100. '"
      :c2="['Let me do and the next exercise', 'Let me do the next exercise too']"
      :a2="a[99]"
      @a2Updated="updateA99"
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
    updateA80 (i) { this.$emit('a80Updated', i); },
    updateA81 (i) { this.$emit('a81Updated', i); },
    updateA82 (i) { this.$emit('a82Updated', i); },
    updateA83 (i) { this.$emit('a83Updated', i); },
    updateA84 (i) { this.$emit('a84Updated', i); },
    updateA85 (i) { this.$emit('a85Updated', i); },
    updateA86 (i) { this.$emit('a86Updated', i); },
    updateA87 (i) { this.$emit('a87Updated', i); },
    updateA88 (i) { this.$emit('a88Updated', i); },
    updateA89 (i) { this.$emit('a89Updated', i); },
    updateA90 (i) { this.$emit('a90Updated', i); },
    updateA91 (i) { this.$emit('a91Updated', i); },
    updateA92 (i) { this.$emit('a92Updated', i); },
    updateA93 (i) { this.$emit('a93Updated', i); },
    updateA94 (i) { this.$emit('a94Updated', i); },
    updateA95 (i) { this.$emit('a95Updated', i); },
    updateA96 (i) { this.$emit('a96Updated', i); },
    updateA97 (i) { this.$emit('a97Updated', i); },
    updateA98 (i) { this.$emit('a98Updated', i); },
    updateA99 (i) { this.$emit('a99Updated', i); },
  }
}
</script>