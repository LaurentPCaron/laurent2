<template>
  <figure
    class="h-fit"
    v-if="icon.icon || icon.faIcon"
    :class="showCaption ? 'icon ' : ''"
  >
    <img class="h-full mx-auto" v-if="icon.icon" :src="icon?.icon" alt="" />
    <font-awesome-icon
      class="h-full mx-auto"
      v-else-if="icon.faIcon"
      :icon="icon?.faIcon"
    />
    <figcaption v-if="showCaption && icon.label" class="text-center">
      {{ icon.label }}
    </figcaption>
  </figure>

  <p v-else>Erreur icon</p>
</template>

<script setup lang="ts">
import skills from '@/assets/data/skill.json';
import { typeIcon } from '@/types/IIcon';

export interface Props {
  icon: typeIcon;
  showCaption?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  showCaption: false,
});

const icon = skills.find(i => {
  return i.code === props.icon;
});
</script>

<style lang="scss" scoped>
.icon {
  display: grid;
  grid-template-rows: 45px auto;
  row-gap: 5px;
}
</style>
