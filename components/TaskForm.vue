<template>
  <div class="task-form">
    <div v-if="continueDays" class="task-form-row justify-content-left">
      <div class="task-form-help">継続{{ continueDays }}</div>
    </div>
    <div class="task-form-row">
      <input
        v-model="taskText"
        class="task-form-input"
        type="text"
        placeholder="タスクを入力"
      />
      <button @click="clickHandler" class="task-form-btn">
        <img src="~/assets/send-plane-line.svg" />
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // taskText: { type: String, required: true }
  },
  data() {
    return {
      taskText: ''
    }
  },
  computed: {
    continueDays() {
      if (this.taskText) {
        const matchResult = this.taskText.match(/^.+:([0-9]+)/)
        return matchResult ? Number(matchResult[1]) : null
      } else {
        return null
      }
    },
    taskName() {
      if (this.taskText) {
        const matchResult = this.taskText.match.match(/(^.+):[0-9]+/)
        return matchResult ? Number(matchResult[1]) : ''
      } else {
        return ''
      }
    }
  },
  methods: {
    clickHandler(event) {
      const task = {
        done: false,
        nice: 0,
        runningdays: this.continueDays || -1,
        taskname: this.taskText
      }
      this.$emit('click', task)
    }
  }
}
</script>
<style scoped>
.task-form {
  position: fixed;
  bottom: 100px;
  width: 95%;
}
.task-form-row {
  display: flex;
  align-content: center;
}
.justify-content-left {
  justify-content: left;
  font-size: 12px;
}
.task-form-help {
  min-width: 66px;
  height: 21px;
  border: solid 1px #afafaf;
  margin-bottom: 4px;
  padding: 1px;
  color: #6c6c6c;
}
.task-form-input {
  outline: none;
  border: solid 1px#afafaf;
  width: 288px;
  height: 50px;
  border-radius: 50px;
  padding: 14px 15px;
  font-size: 15px;
  box-shadow: 0px 3px 6px #00000029;
  color: #6c6c6c;
}
.task-form-btn {
  outline: none;
  background: none;
  width: 50px;
  height: 50px;
  padding: 13px 14px 13px 12px;
  border-radius: 50px;
  background-color: #ffe6c9;
  border: solid 1px #ffba6a;
  margin-left: 7px;
  box-shadow: 0px 3px 6px #00000029;
}
</style>
