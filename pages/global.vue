<template>
  <div>
    <global-header>グローバル</global-header>
    {{ tasks }}
  </div>
</template>
<script>
import { mapState } from 'vuex'
import GlobalHeader from '~/components/GlobalHeader'

export default {
  components: { GlobalHeader },
  computed: mapState('tasks', { tasks: 'globalList' }),
  created() {
    this.$store.dispatch('tasks/bindGlobal')
  }
}
</script>
