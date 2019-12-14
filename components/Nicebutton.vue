<template>
  <button class="nicebutton"  v-on:click="counter += 1">
    <img src="../assets/icons/thumb-up-line.svg" width="35pt" height="35pt" />
    <span>{{ counter }}</span>
  </button>
</template>
<script>
export default {
	asyncData() {
	  return { counter: 128 }
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
  border-radius: 5pt 5pt 5pt 5pt / 5pt 5pt 5pt 5pt;
  padding: 0.5em;
}
button.nicebutton img {
}
button.nicebutton span {
  font-size: 26pt;
}
</style>