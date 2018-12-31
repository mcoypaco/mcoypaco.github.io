<template>
  <v-layout
    column
    align-center
  >
    <v-avatar
      class="my-3"
      size="150"
    >
      <img
        src="../assets/mcoy.jpg"
        alt="mcoy"
      >
    </v-avatar>
    <v-flex>
      <h1 class="title text-xs-center mb-2">{{ fullName }}</h1>
      <h2 class="subheading text-xs-center">{{ occupation }}</h2>
      <v-list three-line>
        <v-list-tile
          v-for="(item, index) in contact"
          :key="index"
          avatar
        >
          <v-list-tile-avatar>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.label }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ item.value }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-flex>
  </v-layout>
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
    ...mapGetters('api', [
      'fullName',
      'occupation',
      'contact',
    ]),
  }
}
</script>
