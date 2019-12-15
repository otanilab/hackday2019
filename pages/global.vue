<template>
  <div>
    <global-header>グローバル</global-header>
    <ul class="tasks">
      <task-card
        v-for="(value, key) in tasks"
        :taskId="key"
        :niceNum="value.niceNum"
        :runningDays="value.runningdays"
        :done="value.done"
        :key="key"
        :isGlobal="true"
        @change="(done) => updateTaskDone(task.id, done)"
      >
        {{ value.taskName }}
      </task-card>
    </ul>
  </div>
</template>
<script>
import GlobalHeader from '~/components/GlobalHeader'
import TaskCard from '~/components/TaskCard'

export default {
  components: { GlobalHeader, TaskCard },
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
        TestcuGSD4TSYQ5tXWX3dLIck522: {
          niceNum: 89,
          done: true,
          taskName: '完了済タスク名',
          timestamp: 20190101,
          runningDays: -1
        },
        Asz1cuGSD4TSYQ5tXWX3dLIck522: {
          niceNum: 120,
          done: false,
          taskName: 'タスク名2',
          timestamp: 20190101,
          runningDays: 0
        }
      }
    }
  }
}
</script>
