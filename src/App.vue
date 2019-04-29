<template>
  <v-app>
    <v-toolbar app>
      <v-img
        :src="'/assets/logo-big.png'"
        max-height="70%"
        contain
        v-if="!(screenSize=='xs' || screenSize=='sm')"
      ></v-img>
      <v-spacer v-if="!(screenSize=='xs' || screenSize=='sm')"></v-spacer>
      <v-toolbar-title class="headline text-uppercase">
        <span>Psikotes&nbsp;</span>
        <span class="font-weight-light">Tokoonderdil</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-img
        :src="'/assets/logo-small.png'"
        height="100%"
        :contain="(screenSize=='xs' || screenSize=='sm')"
      ></v-img>
    </v-toolbar>

    <v-content>
      <router-view/>
      <v-container grid-list-xs v-if="toCurrentUrlRule">
        <v-layout row wrap>
          <v-flex xs12>
            <v-card>
              <v-card-text>
                <v-container grid-list-xs>
                  <v-layout row wrap>
                    <v-flex xs12 text-xs-center>Apakah anda di halaman yang tidak seharusnya?</v-flex>
                    <v-flex xs12 text-xs-center>
                      <v-btn color="success" @click="toCurrentUrl">Kembali</v-btn>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  computed: {
    screenSize () {
      return this.$vuetify.breakpoint.name
    },
    examInfoId () {
      return this.$route.params.examId
    },
    currentUrlPath () {
      return this.$store.state.shared.currentRoute
    },
    toCurrentUrlRule () {
      if (this.examInfoId == undefined || this.examInfoId == null || this.$route.fullPath == this.currentUrlPath) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    toCurrentUrl () {
      this.$router.push({ path: this.currentUrlPath })
    }
  },
  created () {
    if (this.$route.name != 'home') this.$store.dispatch('getShared', this.examInfoId)
  }
}
</script>
