<template>
  <div>
    <global-header>ホーム</global-header>
    <check-box :checkboxId="1" :niceNum="128" />
    <task-form />
  </div>
</template>
<script>
import GlobalHeader from '~/components/GlobalHeader'
import TaskForm from '~/components/TaskForm'
import CheckBox from '~/components/CheckBox'

export default {
  components: { GlobalHeader, TaskForm, CheckBox }
}
</script>
