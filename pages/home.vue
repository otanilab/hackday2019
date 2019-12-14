<template>
  <div>
    <global-header>ホーム</global-header>
    <task-form />
    {{ taskText }}
  </div>
</template>
<script>
import GlobalHeader from '~/components/GlobalHeader'
import TaskForm from '~/components/TaskForm'

export default {
  components: { GlobalHeader, TaskForm }
}
</script>
