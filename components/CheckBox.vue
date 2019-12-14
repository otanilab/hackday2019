<template>
  <div class="checkbox-area">
    <input
      :id="checkboxId"
      :checked="isChecked"
      @change="toggleCheckedStatus"
      type="checkbox"
    />
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
    checkboxId: { type: String, required: true },
    niceNum: { type: Number, required: true },
    isChecked: { type: Boolean, required: true }
  },
  methods: {
    toggleCheckedStatus(event) {
      const { checked } = event.target
      this.$emit('change', checked)
    }
  }
}
</script>

<style scoped>
input[type='checkbox'] {
  display: none;
}

.checkbox-area {
  position: relative;
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
  top: 8px;
  left: 18px;
  display: block;
  width: 17px;
  height: 26px;
  border-right: 4px solid #fff;
  border-bottom: 4px solid #fff;
  transform: rotate(45deg);
}

.nice-num-area {
  position: absolute;
  left: 3px;
  bottom: -10px;
  display: none;
  min-width: 50px;
  min-width: 50px;
}

input:checked ~ .nice-num-area {
  display: inline-flex;
  justify-content: space-around;
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
