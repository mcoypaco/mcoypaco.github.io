<template>
  <v-layout column>
    <h3 class="headline">Education</h3>
    <v-list two-line>
      <v-list-tile
        v-for="(education, index) in educations"
        :key="index"
      >
        <v-list-tile-avatar>
          <img 
            :src="`${baseUrl}${education.logo}`"
            :alt="education.school"
          >
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{ education.course }}</v-list-tile-title>
          <v-list-tile-sub-title>{{ education.school }}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-layout>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      baseUrl: process.env.BASE_URL
    }
  },
  computed: {
    ...mapGetters('api', ['educations'])
  }
}
</script>
