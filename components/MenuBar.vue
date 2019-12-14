<template>
  <nav>
    <ul class="menu">
      <nuxt-link to="/" tag="li">
        <img src="~/assets/icons/home.svg" />
        ホーム
      </nuxt-link>
      <nuxt-link to="/mypage" tag="li">
        <img src="~/assets/icons/mypage.svg" />
        マイページ
      </nuxt-link>
      <nuxt-link to="/global" tag="li">
        <img src="~/assets/icons/global.svg" />
        グローバル
      </nuxt-link>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  position: absolute;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -3px 6px #00000029;
}

.menu {
  display: flex;
  justify-content: space-around;
}

.menu li {
  width: 33.3%;
  padding: 10px 0;
  font-size: 12px;
  text-align: center;
}

.menu li img {
  margin: 0 auto;
}
</style>
