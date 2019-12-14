<template>
  <div id="trophy-list">
    <ul class="trophy-list">
      <li
        v-for="trophyId in trophyIdList"
        v-bind:key="trophyId.id"
        class="trophy-item"
      >
        <img src="@/assets/trophy-fill.svg" />
        <p class="tropy-name">{{ trophyId }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.trophy-list {
  overflow: hidden;
  padding: 0;
  width: 100%;
  height: 297px;
  margin: 54px auto 0 auto;
}
.trophy-item {
  list-style: none;
  width: 115px;
  height: 99px;
  padding: 6px 0 0px 0;
  float: left;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 1px #707070;
}
img {
  width: 61px;
  height: 60px;
  margin: auto;
  overflow: hidden;
  float: none;
}
.tropy-name {
  width: 100%;
  height: 20px;
  font-size: 14px;
  color: #6c6c6c;
}
</style>

<script>
export default {
  props: { trophyIdList: { type: Array } }
}
</script>
