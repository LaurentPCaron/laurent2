<template>
  <div class="relative">
    <div class="w-1/3 flex justify-center">
      <img class="" :src="image" alt="" />
    </div>
    <div
      class="absolute bottom-0 card bg-light min-h-[10rem] -skew-x-12 rounded-xl flex px-10 -z-10 w-full"
    >
      <div class="ml-auto w-2/3">
        <AtomProgressBar
          v-for="{ icon, label, percentage, index } in dataTest"
          :key="index"
          :progress="percentage"
          :icon="icon"
          :label="label"
          color="#33cc33"
          class=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
    default: 'https://via.placeholder.com/200x300',
  },
});
const dataTest = [
  {
    label: 'HTML',
    percentage: 80,
    icon: 'fa-brands fa-html5',
  },
  {
    label: 'CSS/SCSS',
    percentage: 70,
    icon: 'fa-brands fa-sass',
  },
  {
    label: 'Java Script',
    percentage: 75,
    icon: 'fa-brands fa-js',
  },
];
</script>

<style lang="scss" scoped>
.card > * {
  @apply skew-x-12;
}
</style>
