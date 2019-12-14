<template>
  <div>
    <global-header>ホーム</global-header>
    <ul class="tasks">
      <task-card
        v-for="(value, key) in tasks"
        :taskId="key"
        :niceNum="value.niceNum"
        :runningDays="value.runningDays"
        :key="key"
      >
        {{ value.taskName }}
      </task-card>
    </ul>
    <task-form />
  </div>
</template>
<script>
import GlobalHeader from '~/components/GlobalHeader'
import TaskForm from '~/components/TaskForm'
import TaskCard from '~/components/TaskCard'

export default {
  components: { GlobalHeader, TaskForm, TaskCard },
  data() {
    return {
      tasks: {
        Qsp1cuGSD4TSYQ5tXWX3dLIck522: {
          niceNum: 12,
          done: false,
          taskName: 'タスク名',
          timestamp: 20190101,
          runningDays: -1
        },
        Asz1cuGSD4TSYQ5tXWX3dLIck522: {
          niceNum: 120,
          done: true,
          taskName: 'タスク名2',
          timestamp: 20190101,
          runningDays: 0
        }
      }
    }
  }
}
</script>
