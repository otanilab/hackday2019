<template>
  <header>
    <slot></slot>
  </header>
</template>

<style scoped>
header {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  font-size: 18px;
  box-shadow: 0 3px 6px #00000029;
}
</style>
