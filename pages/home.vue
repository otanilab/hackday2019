<template>
  <div>
    <global-header>ホーム</global-header>
    <ul class="tasks">
      <task-card
        v-for="task in tasks"
        :taskId="task.id"
        :niceNum="task.nice"
        :runningDays="task.runningdays"
        :done="task.done"
        :key="task.id"
        @change="(done) => updateTaskDone(task.id, done)"
      >
        {{ task.taskname }}
      </task-card>
    </ul>
    <task-form @click="addTask" />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import GlobalHeader from '~/components/GlobalHeader'
import TaskForm from '~/components/TaskForm'
import TaskCard from '~/components/TaskCard'

export default {
  components: { GlobalHeader, TaskForm, TaskCard },
  // data() {
  //   return {
  //     tasks: {
  //       Qsp1cuGSD4TSYQ5tXWX3dLIck522: {
  //         niceNum: 12,
  //         done: false,
  //         taskName: 'タスク名',
  //         timestamp: 20190101,
  //         runningDays: -1
  //       },
  //       TestcuGSD4TSYQ5tXWX3dLIck522: {
  //         niceNum: 89,
  //         done: true,
  //         taskName: '完了済タスク名',
  //         timestamp: 20190101,
  //         runningDays: -1
  //       },
  //       Asz1cuGSD4TSYQ5tXWX3dLIck522: {
  //         niceNum: 120,
  //         done: false,
  //         taskName: 'タスク名2',
  //         timestamp: 20190101,
  //         runningDays: 0
  //       }
  //     }
  //   }
  // },
  computed: mapState('tasks', { tasks: 'list' }),
  created() {
    this.$store.dispatch('tasks/bind')
  },
  methods: {
    addTask(task) {
      this.$store.dispatch('tasks/add', task)
    },
    updateTaskDone(taskId, done) {
      this.$store.dispatch('tasks/updateDone', { taskId, done })
    }
  }
}
</script>
