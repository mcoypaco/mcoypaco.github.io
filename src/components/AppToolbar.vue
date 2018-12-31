<template>
  <v-toolbar
    color="primary"
    dark
    extended
    flat
  >
    <v-layout
      row
      align-center
    >
      <v-avatar
        tile
        size="50"
      >
        <img
          src="../assets/site-logo.png"
          alt="Mcoy Paco"
        >
      </v-avatar>
      <v-toolbar-title class="hidden-xs-only">
        MCOY PACO
      </v-toolbar-title>
      <v-spacer />
      <v-tooltip
        v-for="(item, index) in socialMedia"
        :key="index"
        class="hidden-lg-and-up"
        bottom
      >
        <v-btn
          slot="activator"
          :href="item.value"
          target="_blank"
          icon
        >
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
        {{ item.label }}
      </v-tooltip>
    </v-layout>
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      // 
    }
  },
  computed: {
    ...mapGetters('api', ['socialMedia'])
  }
}
</script>
