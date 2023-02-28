<template>
  <div class="container">
    <div class="container-bg bg-ff rounded-lg border-2 -z-10 border-lighter" />
    <h3 class="container-label ml-5">{{ label }}</h3>
    <img class="container-image aspect-1x1" :src="image" alt="" />

    <div class="container-bars my-5 flex flex-col justify-center gap-4">
      <AtomProgressBar
        v-for="({ icon, faIcon, label, percentage }, index) in skills"
        :key="index"
        :progress="percentage"
        :icon="icon"
        :faIcon="faIcon"
        :label="label"
        :color="getColor(index)"
        class="pr-5"
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
  grid-template-areas:
    'label image'
    'bars bars';
  @media (min-width: 768px) {
    grid-template-columns: 30% 1fr;
    grid-template-rows: 1fr 240px;
    grid-template-areas:
      'image label '
      'left bars';
    column-gap: 3rem;
  }

  &-image {
    @media (min-width: 768px) {
      grid-row-start: image;
      grid-row-end: left;
      grid-column-start: image;
      grid-column-end: image;
      align-self: end;
    }
  }
  &-label {
    grid-area: label;
    align-self: end;
  }
  &-bars {
    grid-area: bars;
  }
  &-bg {
    grid-area: bars;
    @media (min-width: 768px) {
      grid-row-start: left;
      grid-row-end: left;
      grid-column-start: image;
      grid-column-end: bars;
    }
  }
}
</style>
