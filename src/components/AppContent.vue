<template>
  <v-layout
    row
    pb-2
    justify-center
  >
    <v-flex
      xs12
      sm8
      xl6
    >
      <v-container>
        <v-card class="card--flex-toolbar mb-2">
          <v-card-text>
            <Profile class="hidden-lg-and-up" />
            <WorkExperiences class="hidden-md-and-down" />
          </v-card-text>
        </v-card>
        <v-card class="mb-2 hidden-lg-and-up">
          <v-card-text>
            <WorkExperiences />
          </v-card-text>
        </v-card>
        <v-card class="mb-2">
          <v-card-text>
            <Skills />
          </v-card-text>
        </v-card>
        <v-card class="mb-2">
          <v-card-text>
            <Education />
          </v-card-text>
        </v-card>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import Education from '@/components/Education'
import Profile from '@/components/Profile'
import Skills from '@/components/Skills'
import WorkExperiences from '@/components/WorkExperiences'

export default {
  components: { Education, Profile, Skills, WorkExperiences },
  data () {
    return {
      // 
    }
  }
}
</script>

<style scoped>
  .card--flex-toolbar {
    margin-top: -64px;
  }
</style>
