<template>
  <div class="container card w-full relative">
    <div
      class="absolute bottom-0 h-3/4 w-full bg-light -skew-x-12 rounded-xl px-10 -z-10"
    />
    <h3 class="container-label ml-5">{{ label }}</h3>
    <div class="container-image flex ml-10 justify-center">
      <img class="object-cover" :src="image" alt="" />
    </div>
    <div class="container-bars my-5 pl-36 flex flex-col gap-4">
      <AtomProgressBar
        v-for="({ icon, faIcon, label, percentage }, index) in skills"
        :key="index"
        :progress="percentage"
        :icon="icon"
        :faIcon="faIcon"
        :label="label"
        :color="getColor(index)"
        class="bar"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: 'label',
  },
  image: {
    type: String,
    default: 'https://via.placeholder.com/200x300',
  },
  skills: {
    type: Array,
    required: true,
  },
});

const getColor = index => {
  switch (index) {
    case 0:
      return '#33cc33';
    case 1:
      return '#0000ff';
    case 2:
      return '#ff0000';
    default:
      return '#fff';
  }
};
</script>

<style lang="scss" scoped>
.container {
  @apply grid;
  grid-template-columns: 1fr 5fr;
  grid-template-areas:
    'image label'
    'image bars';
  &-image {
    grid-area: image;
  }
  &-label {
    grid-area: label;
  }
  &-bars {
    grid-area: bars;
  }
}

.bar {
  &:nth-child(3) {
    @apply -ml-16;
  }
  &:nth-child(2) {
    @apply -ml-8;
  }
}
</style>
