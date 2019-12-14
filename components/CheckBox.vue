<template>
  <div class="checkbox-area">
    <input type="checkbox" :id="checkboxId" />
    <label :for="checkboxId"></label>
    <div class="nice-num-area">
      <img src="~/assets/icons/nice-sm.svg" alt="いいねアイコン" />
      {{ niceNum }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    checkboxId: { type: Number, required: true },
    niceNum: { type: Number, required: true }
  }
}
</script>

<style scoped>
input[type='checkbox'] {
  display: none;
}

.checkbox-area {
  display: inline-block;
  text-align: center;
}

label {
  display: block;
  width: 55px;
  height: 55px;
  border: 1px solid #707070;
  border-radius: 50%;
  cursor: pointer;
}

input:checked + label {
  background: #72de93;
}

input:checked + label::before {
  content: '';
  position: relative;
  top: 9px;
  left: 18px;
  display: block;
  width: 17px;
  height: 26px;
  border-right: 4px solid #fff;
  border-bottom: 4px solid #fff;
  transform: rotate(45deg);
}

.nice-num-area {
  position: relative;
  top: -8px;
  display: none;
}

input:checked ~ .nice-num-area {
  display: inline-flex;
  padding: 2px 5px;
  font-size: 12px;
  background: #fff;
  border: 1px solid #707070;
  border-radius: 5px;
}

.nice-num-area img {
  margin-right: 3px;
}
</style>
