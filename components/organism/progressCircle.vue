<template>
  <svg class="progress-ring" :width="size" :height="size">
    <circle
      class="circle"
      stroke="white"
      :stroke-width="strokeWidth"
      fill="transparent"
      :r="r"
      :cx="size / 2"
      :cy="size / 2"
    />
  </svg>
</template>

<script setup>
const props = defineProps({
  size: {
    type: Number,
    default: 120,
  },
  strokeWidth: {
    type: Number,
    default: 4,
  },
  progress: {
    type: Number,
    default: 25,
  },
});
const r = ref(props.size / 2 - props.strokeWidth);
const circumference = ref(2 * Math.PI * r.value);
const strokeDashoffset = () => {
  return circumference.value - (props.progress / 100) * circumference.value;
};
</script>

<style lang="scss" scoped>
.circle {
  rotate: -90deg;
  transform-origin: 50% 50%;
  stroke-dasharray: v-bind(circumference) v-bind(circumference);
  stroke-dashoffset: v-bind(strokeDashoffset());
}
</style>
