<template>
  <li :class="isRunningTask ? 'is-running-task' : ''" class="task-card">
    <div v-if="isRunningTask" class="running-label">{{ runningDays }}日目</div>
    <div v-if="isGlobal" class="global-wrapper">
      <div class="user-prof">
        <p>User name</p>
      </div>
      <p class="task-name">
        <slot></slot>
      </p>
    </div>
    <p v-else class="task-name">
      <slot></slot>
    </p>
    <check-box
      v-if="!isGlobal"
      @change="(isChecked) => $emit('change', isChecked)"
      :checkboxId="taskId"
      :niceNum="niceNum"
      :isChecked="done"
    />
    <Nicebutton v-else :niceNum="0"></Nicebutton>
  </li>
</template>
<script>
import CheckBox from '~/components/CheckBox'
import Nicebutton from '~/components/Nicebutton'

export default {
  components: { CheckBox, Nicebutton },
  props: {
    niceNum: { type: Number, required: true },
    runningDays: { type: Number, required: true },
    taskId: { type: String, required: true },
    done: { type: Boolean, required: true },
    isGlobal: { type: Boolean, required: false }
  },
  computed: {
    isRunningTask() {
      if (this.runningDays >= 0) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
.task-card {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  padding: 15px 25px;
  font-size: 20px;
  border-radius: 5px;
  box-shadow: 0 3px 6px #00000029;
  overflow: hidden;
}
.task-card.is-running-task {
  background: #fff0d8;
  border-color: #ffba6a;
}

.task-name {
  max-width: 75%;
  line-height: 1.2;
}

/* 継続中ラベル */
.running-label {
  position: absolute;
  top: 9px;
  left: -17px;
  padding: 0 20px;
  font-size: 12px;
  background: #e37a7a;
  color: #fff;
  transform: rotate(-45deg);
  filter: drop-shadow(2px 1px 7px rgba(0, 0, 0, 0.3));
}

.global-wrapper {
  width: 75%;
}
</style>
