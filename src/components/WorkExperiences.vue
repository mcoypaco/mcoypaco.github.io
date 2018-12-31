<template>
  <v-layout column>
    <h3 class="headline mb-0">Work Experiences</h3>
    <v-flex
      v-for="(workExperience, index) in workExperiences"
      :key="index" 
    >
      <v-list three-line>
        <v-list-tile>
          <v-list-tile-avatar>
            <img
              :src="`${baseUrl}${workExperience.logo}`"
              :alt="workExperience.company"
            >
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>
              <strong>{{ workExperience.position }} - {{ workExperience.company }} </strong>
            </v-list-tile-title>
            <v-list-tile-sub-title>
              {{ workExperience.dateStart | moment('MMMM YYYY') }} to {{ workExperience.dateEnd | moment('MMMM YYYY') }}
              <v-icon small>mdi-timer</v-icon>&nbsp;
              <span>{{ workExperience.dateEnd | moment('diff', workExperience.dateStart, 'months') }} months</span>
            </v-list-tile-sub-title>
            <v-list-tile-sub-title>{{ workExperience.jobDescription }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-subheader>Projects</v-subheader>
      <v-timeline dense>
        <v-timeline-item
          v-for="(project, idx) in workExperience.projects"
          :key="idx"
          :icon="project.icon"
          fill-dot
        >
          <div>
            <h3 class="headline">{{ project.name }}</h3>
            <p>{{ project.description }}</p>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-flex>
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
    ...mapGetters('api', ['workExperiences'])
  }
}
</script>
