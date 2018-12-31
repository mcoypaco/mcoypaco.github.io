<template>
  <v-layout column>
    <h3 class="headline mb-0">Skills</h3>
    <div
      v-for="(skill, index) in skills"
      :key="index"
    >
      <v-subheader>{{ skill.category }}</v-subheader>
      <v-chip 
        v-for="(item, idx) in skill.items"
        :key="idx"
      >
        {{ item }}
      </v-chip>
    </div>
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
    ...mapGetters('api', ['skills'])
  }
}
</script>
