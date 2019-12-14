<template>
  <div>
    <div class="inner">
      <nuxt />
    </div>
    <menu-bar />
  </div>
</template>

<script>
import MenuBar from '~/components/MenuBar.vue'

export default {
  components: {
    MenuBar
  }
}
</script>

<style>
/* Noto Sans */
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700&display=swap');

*,
*:before,
*:after {
  font-family: 'Noto Sans JP', sans-serif;
  box-sizing: border-box;
  margin: 0;
}

body {
  min-height: 100vh;
  scroll-behavior: smooth;
  color: #707070;
  line-height: 1.5;
}

article,
aside,
footer,
header,
nav,
section,
main {
  display: block;
}

img {
  display: block;
  flex: none;
}

a {
  color: inherit;
  text-decoration: none;
}

ol,
ul {
  list-style: none;
  padding: 0;
}

button {
  background: none;
  border: none;
}

.inner {
  width: 95%;
  margin: 0 auto;
  padding-top: 50px;
  margin-bottom: 160px;
}
</style>
