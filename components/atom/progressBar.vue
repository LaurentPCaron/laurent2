<template>
  <div class="flex items-center container w-full">
    <div class="container-label flex justify-between text-dark">
      <p class="">{{ label }}</p>
      <p>{{ `${progress}/100` }}</p>
    </div>
    <div class="container-icon">
      <font-awesome-icon class="text-dark fa-3x mr-5" :icon="icon" />
    </div>
    <div class="container-bar bg-[black] h-6 w-full rounded-md">
      <div class="rounded-md h-full" />
    </div>
  </div>
</template>

<script setup>
const { $colorConvertor } = useNuxtApp();
const props = defineProps({
  color: {
    type: String,
    default: '#fff',
  },
  progress: {
    type: Number,
    default: 10,
  },
  label: {
    type: String,
    default: 'Label',
  },
  icon: {
    type: String,
    default: 'fa-solid fa-triangle-exclamation',
  },
});

const hlsColor = computed(() => $colorConvertor.hexToHSL(props.color));

const _progress = computed(() => {
  return `${props.progress}%`;
});

const _color = computed(() => {
  return `hsl(${hlsColor.value.h}, ${hlsColor.value.s}%, ${hlsColor.value.l}%)`;
});
const _colorDarker = computed(() => {
  return `hsl(${hlsColor.value.h}, ${hlsColor.value.s}%, ${parseInt(
    hlsColor.value.l / 1.5
  )}%)`;
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: grid;
  grid-template-columns: 5rem auto;
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
        v-bind(_colorDarker) 0%,
        v-bind(_colorDarker) 50%,
        v-bind(_color) 71%,
        v-bind(_color) 80%,
        v-bind(_colorDarker) 99%
      );
      width: v-bind(_progress);
    }
  }
}
</style>
