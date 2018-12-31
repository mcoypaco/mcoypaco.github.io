<template>
  <v-app>
    <v-navigation-drawer
      app
      class="no-print"
    >
      <AppSidenav />
    </v-navigation-drawer>
    <v-content>
      <v-card flat>
        <AppToolbar class="no-print" />
        <AppContent />
      </v-card>
    </v-content>
  </v-app>
</template>

<script>
import AppContent from '@/components/AppContent'
import AppToolbar from '@/components/AppToolbar'
import AppSidenav from '@/components/AppSidenav'

export default {
  name: 'App',
  components: { AppContent, AppToolbar, AppSidenav },
  data () {
    return {
      //
    }
  }
}
</script>
<style>
  .print-only {
    display: none !important;
  }

  @media print {
    main {
      padding: 0px !important;
    }

    .no-print {
      display: none !important;
    }

    .print-only {
      display: block !important;
    }
  }
</style>
