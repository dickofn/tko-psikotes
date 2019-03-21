<template>
  <v-app>
    <v-toolbar app>
      <v-img :src="'/assets/logo-big.png'" max-height="70%" contain v-if="!(screenSize=='xs' || screenSize=='sm')"></v-img>
      <v-spacer v-if="!(screenSize=='xs' || screenSize=='sm')"></v-spacer>
      <v-toolbar-title class="headline text-uppercase">
        <span>Psikotes&nbsp;</span>
        <span class="font-weight-light">Tokoonderdil</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-img :src="'/assets/logo-small.png'" height="100%" :contain="(screenSize=='xs' || screenSize=='sm')"></v-img>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  computed: {
    screenSize () {
      return this.$vuetify.breakpoint.name
    }
  }
}
</script>
