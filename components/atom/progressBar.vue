<template>
  <div class="flex">
    <font-awesome-icon class="text-[black] fa-2xl" icon=" fa-brands fa-vuejs" />
    <div class="h-6 bg-light w-full">
      <div class="bar h-full" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'red',
  },
  progress: {
    type: Number,
    default: 10,
  },
});

const _progress = computed(() => {
  return `${props.progress}%`;
});
</script>

<style lang="scss" scoped>
.bar {
  background-color: v-bind(color);
  width: v-bind(_progress);
}
</style>
