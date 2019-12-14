<template>
  <div :class="[backgroundColorClass, 'grade-background']"></div>
</template>

<style scoped>
.grade-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 25%;
  opacity: 60%;
  z-index: -1;
}

.background-bronze {
  background: linear-gradient(orange, white);
}
.background-silver {
  background: linear-gradient(gray, white);
}
.background-gold {
  background: linear-gradient(yellow, white);
}
</style>

<script>
export default {
  data() {
    return {
      colorClassList: [
        { class: 'background-bronze', count: 100 },
        { class: 'background-silver', count: 200 },
        { class: 'background-gold', count: 300 }
      ]
    }
  },
  computed: {
    backgroundColorClass() {
      return this.colorClassList
        .slice()
        .sort((a, b) => a.count - b.count)
        .reduce((previous, current) =>
          current.count <= 100 ? current : previous
        ).class
    }
  }
}
</script>
