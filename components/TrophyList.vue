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
  width: 345px;
  height: 247px;
  margin: 54px auto 0 auto;
}
.trophy-item {
  list-style: none;
  width: 115px;
  height: 88px;
  padding: 6px 8px 0px 8px;
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
import firebase from 'firebase'

export default {
  props: { trophyIdList: { type: Array } },
  created() {
    firebase
      .firestore()
      .collection('users')
      .doc('PfiChwGQrXRfflURXTwq')
      .get()
      .then(function(querySnapshot) {
        console.log(querySnapshot)
      })
  }
}
</script>
