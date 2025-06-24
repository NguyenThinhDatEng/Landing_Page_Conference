<template>
  <button
    :type="type"
    class="btn btn-ic flex items-center justify-center px-6 py-3 gap-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors"
  >
    <span><slot /></span>
    <span v-if="$slots.icon" class="flex items-center">
      <slot name="icon" />
    </span>
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: "button",
  },
});
</script>

<style lang="scss">
.btn {
  display: inline-block;
  width: fit-content;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}

.btn-ic {
  display: flex;
  color: #ffffff;
  background-color: #dc143c;
  border-color: #dc143c;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  padding: 15px 35px;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  border-radius: 10px;
}
</style>
