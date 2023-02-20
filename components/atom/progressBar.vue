<template>
  <div class="flex items-center contain w-full">
    <div class="contain-label flex justify-between text-dark">
      <p class="">{{ label }}</p>
      <p>{{ `${progress}/100` }}</p>
    </div>
    <div class="contain-icon h-full">
      <font-awesome-icon
        v-if="faIcon"
        class="text-dark fa-3x mr-5"
        :icon="faIcon"
      />
      <img v-if="icon" class="h-full" :src="icon" alt="" />
    </div>
    <div class="contain-bar bg-[black] h-6 w-full rounded-md">
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
  },
  faIcon: {
    type: String,
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
.contain {
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
