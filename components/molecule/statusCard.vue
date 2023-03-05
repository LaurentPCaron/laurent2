<template>
  <div class="container pl-2 md:px-6 bg-ff rounded-lg border-2 border-lighter">
    <h3 class="container-label">{{ label }}</h3>

    <img
      class="aspect-square w-2/4 md:w-full container-image bg-lighter border-2 border-lighter"
      :src="image"
      alt=""
    />

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
    grid-template-columns: 20% 1fr;
    grid-template-rows: 1fr 240px;
    grid-template-areas:
      'image label'
      'image bars';
    column-gap: 3rem;
  }

  &-image {
    grid-area: image;
    @apply place-self-end md:self-center;
  }
  &-label {
    grid-area: label;
    @apply self-center;
  }
  &-bars {
    grid-area: bars;
  }
}
</style>
