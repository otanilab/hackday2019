<template>
  <div>
    <global-header>グローバル</global-header>
    <ul class="tasks">
      <task-card
        v-for="task in tasks"
        :taskId="task.id"
        :niceNum="task.nice"
        :runningDays="task.runningdays"
        :done="task.done"
        :key="task.id"
        :isGlobal="true"
        @change="(done) => updateTaskDone(task.id, done)"
        @clickNiceButton="(nice) => updateNice(task.id, nice)"
      >
        {{ task.taskname }}
      </task-card>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import GlobalHeader from '~/components/GlobalHeader'
import TaskCard from '~/components/TaskCard'

export default {
  components: { GlobalHeader, TaskCard },
  computed: mapState('tasks', { tasks: 'globalList' }),
  created() {
    this.$store.dispatch('tasks/bindGlobal')
  },
  methods: {
    updateNice(taskId, nice) {
      this.$store.dispatch('tasks/updateNice', { taskId, nice })
    }
  }
}
</script>
