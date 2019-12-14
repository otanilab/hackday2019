<template>
  <nav>
    <ul class="menu">
      <nuxt-link to="/home" tag="li">
        <img v-if="!isHome" src="~/assets/icons/home.svg" />
        <img v-else src="~/assets/icons/home-fill.svg" />
        ホーム
      </nuxt-link>
      <nuxt-link to="/mypage" tag="li">
        <img v-if="!isMypage" src="~/assets/icons/mypage.svg" />
        <img v-else src="~/assets/icons/mypage-fill.svg" />
        マイページ
      </nuxt-link>
      <nuxt-link to="/global" tag="li">
        <img v-if="!isGlobal" src="~/assets/icons/global.svg" />
        <img v-else src="~/assets/icons/global-fill.svg" />
        グローバル
      </nuxt-link>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isHome: false,
      isMypage: false,
      isGlobal: false
    }
  },
  mounted() {
    this.$router.afterEach((to, from) => {
      const currentPass = this.$router.currentRoute.path
      const currentPage = currentPass.replace('/', '')

      switch (currentPage) {
        case 'home':
          this.isHome = true
          this.isMypage = false
          this.isGlobal = false
          break
        case 'mypage':
          this.isHome = false
          this.isMypage = true
          this.isGlobal = false
          break
        case 'global':
          this.isHome = false
          this.isMypage = false
          this.isGlobal = true
          break
        default:
      }
    })
  }
}
</script>

<style scoped>
nav {
  position: fixed;
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

.menu li.nuxt-link-active {
  font-weight: bold;
}

.menu li img {
  margin: 0 auto;
}
</style>
