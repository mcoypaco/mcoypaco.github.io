export default {
  namespaced: true,
  strict: true,
  state () {
    return {
      //
    }
  },
  getters: {
    fullName: (state, getters, rootState) => {
      return `${rootState.data.firstName} ${rootState.data.middleName.charAt(0)}. ${rootState.data.lastName}`
    },
    contact: (state, getters, rootState) => {
      return [
        {
          icon: 'mdi-email',
          label: 'Email',
          value: rootState.data.email
        },
        {
          icon: 'mdi-map-marker',
          label: 'Address',
          value: rootState.data.address
        }
      ]
    },
    educations: (state, getters, rootState) => {
      return rootState.data.educations
    },
    occupation: (state, getters, rootState) => {
      return rootState.data.occupation
    },
    skills: (state, getters, rootState) => {
      return rootState.data.skills
    },
    socialMedia: (state, getters, rootState) => {
      return [
        {
          icon: 'mdi-github-circle',
          label: 'Github',
          value: rootState.data.github
        },
        {
          icon: 'mdi-linkedin-box',
          label: 'LinkedIn',
          value: rootState.data.linkedin
        },
      ]
    },
    workExperiences: (state, getters, rootState) => {
      return rootState.data.workExperiences
    },
  }
}