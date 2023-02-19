<template>
  <div class="flex items-center container">
    <div class="container-label flex justify-between text-dark">
      <p class="">{{ label }}</p>
      <p>{{ `${progress}/100` }}</p>
    </div>
    <font-awesome-icon
      class="container-icon text-dark fa-3x"
      icon=" fa-brands fa-vuejs"
    />
    <div class="container-bar bg-[_color] h-6 w-full">
      <div class="rounded-md h-full" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: '255,0,0',
  },
  progress: {
    type: Number,
    default: 10,
  },
  label: {
    type: String,
    default: 'Label',
  },
});

const _progress = computed(() => {
  return `${props.progress}%`;
});

const _color = computed(() => {
  return `rgb(${props.color})`;
});
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 12fr;
  grid-template-areas:
    'icon label'
    'icon bar';
  &-label {
    grid-area: label;
  }
  &-icon {
    grid-area: icon;
  }
  &-bar {
    grid-area: bar;

    & > * {
      background: v-bind(_color);
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        v-bind(_color) 70%,
        rgba(255, 255, 255, 0.25) 82%,
        rgba(255, 255, 255, 0.25) 95%,
        v-bind(_color) 99%
      );
      width: v-bind(_progress);
    }
  }
}
</style>
