<template>
  <v-layout column>
    <Profile />
    <v-divider />
    <v-layout row>
      <v-flex>
        <v-list>
          <v-subheader>Follow Me</v-subheader>
          <v-list-tile
            v-for="(item, index) in socialMedia"
            :key="index"
            :href="item.value"
            target="_blank"
          >
            <v-list-tile-avatar>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.label }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-layout>
</template>
<script>
import { mapGetters } from 'vuex'

import Profile from '@/components/Profile'

export default {
  components: { Profile },
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
