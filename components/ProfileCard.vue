<template>
  <div class="profile">
    <div class="avatar">
      <img :src="userProfile.icon" alt="avatar" />
    </div>
    <div class="profile-content">
      <p class="name">
        {{ userProfile.name }}
        <img
          src="~/assets/icons/trophy-fill-green.svg"
          alt="trophy"
          class="name-icon"
        />
      </p>
      <ul>
        <li class="num-of-trophy">
          {{ tropheyArray.length }}
          <p>
            <img src="~/assets/icons/trophy-fill.svg" />
            <span>トロフィー数</span>
          </p>
        </li>
        <li class="num-of-nice">
          {{ userProfile['num-of-nice'] }}
          <p>
            <img src="~/assets/icons/thumb-up-line.svg" />
            <span>総いいね数</span>
          </p>
        </li>
        <li class="rank">
          {{ userProfile.grade }}
          <p>
            <span>現在のランク</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.profile {
  width: 100%;
  margin-top: 70px;
  height: 177px;
  margin-top: 70px;
  border-radius: 5px;
  position: relative;
  background: white;
  box-shadow: 0px 3px 6px #00000029;
}
.name-icon {
  position: relative;
  top: -5px;
}

.name {
  text-align: center;
}
.avatar img {
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  width: 100px;
  height: 100px;
  border: 1px solid #000000;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
}
.profile-content {
  padding-top: 70px;
  margin-top: 0.6em;
  color: #81878b;
}
.profile-content li {
  width: 32%;
  text-align: center;
  display: inline-block;
  font-size: 1.5em;
}
.profile-content li span {
  display: inline-block;
  text-transform: uppercase;
  font-size: 0.3em;
  margin-top: 0.6em;
  font-weight: 700;
}
.profile-content img {
  position: relative;
  top: 5px;
  display: inline-block;
  height: 18px;
  width: 18px;
}
</style>

<script>
export default {
  props: {
    userProfile: { type: Object },
    tropheyArray: { type: Array }
  }
}
</script>
