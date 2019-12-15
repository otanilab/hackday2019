<template>
  <button
    class="nicebutton"
    @click="tapEvent()"
    :class="effect ? 'effect' : ''"
  >
    <img src="../assets/icons/thumb-up-line.svg" />
    <span>{{ niceNum }}</span>
  </button>
</template>
<script>
export default {
  props: {
    // niceNum: { type: Number, required: true }
  },
  data() {
    return {
      niceNum: 0,
      effect: false
    }
  },
  methods: {
    tapEvent() {
      this.niceNum++
      this.effect = true
      setTimeout(() => {
        this.effect = false
      }, 200)
    }
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

.effect::before {
  content: '';
  position: absolute;
  display: block;
  background: rgb(31, 165, 255);
  box-shadow: (0, 0, 10px, rgba(163, 240, 217, 0.94));
  animation: tap-effect 0.2s forwards;
}

.effect::after {
  content: '';
  position: absolute;
  display: block;
  width: 100px;
  height: 20px;
  background: rgb(0, 225, 255);
  box-shadow: (0, 0, 10px, rgba(111, 185, 255, 0.94));
  animation: tap-effect 0.2s forwards;
}

@keyframes tap-effect {
  0% {
    width: 5px;
    height: 5px;
    opacity: 0.4;
  }

  5% {
    filter: blur(2px);
  }

  100% {
    width: 400px;
    height: 150px;
    border-radius: 50%;
    filter: blur(30px);
    opacity: 0;
  }
}
</style>
