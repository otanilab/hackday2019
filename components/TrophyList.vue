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
ul.trophy-list {
  overflow: hidden;
  padding: 0;
  width: 90%;
  margin: auto;
}
.trophy-item {
  list-style: none;
  width: 33.3%;
  float: left;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* 子要素をflexboxにより中央に配置する */
}
img {
  width: 50%;
  margin: 0 25% 0 25%;
  overflow: hidden;
  float: none;
}
.tropy-name {
  width: 100%;
}
</style>

<script>
export default {
  props: { trophyIdList: { type: Array } }
}
</script>
