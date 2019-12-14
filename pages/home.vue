<template>
  <div>
    <global-header>ホーム</global-header>
    <task-form />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import GlobalHeader from '~/components/GlobalHeader'
import TaskForm from '~/components/TaskForm'

export default {
  components: { GlobalHeader, TaskForm },
  computed: mapState('tasks', { tasks: 'list' }),
  created() {
    this.$store.dispatch('tasks/bind')
  }
}
</script>
