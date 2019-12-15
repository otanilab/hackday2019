<template>
  <button @click="$emit('click', niceNum + 1)" class="nicebutton">
    <img src="../assets/icons/thumb-up-line.svg" />
    <span>{{ niceNum }}</span>
  </button>
</template>
<script>
export default {
  props: {
    niceNum: { type: Number, required: true }
  }
}
</script>
<style scoped>
button.nicebutton {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border: solid 1px #707070;
  border-radius: 5px;
  padding: 0.5em;
}
button.nicebutton img {
  width: 40px;
  height: 40px;
  margin-right: 5px;
}

button.nicebutton span {
  font-size: 24px;
}
</style>
