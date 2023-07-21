<template>
  <div>
    <img
      class="h-full"
      v-if="getTypeOfIcon() === 'url'"
      :src="icon?.icon"
      alt=""
    />
    <font-awesome-icon
      v-else-if="getTypeOfIcon() === 'fa'"
      :icon="icon?.faIcon"
    />
    <p v-else>Erreur icon</p>
    <p v-if="!noLabel">{{ icon?.label }}</p>
  </div>
</template>

<script setup lang="ts">
import skills from '@/assets/data/skill.json';
import { typeIcon } from '@/types/IIcon';

export interface Props {
  icon: typeIcon;
  noLabel?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  noLabel: false,
});

const getTypeOfIcon = (): 'url' | 'fa' => {
  switch (props.icon) {
    case 'nuxt':
    case 'tw':
    case 'vscode':
      return 'url';
    default:
      return 'fa';
  }
};

const icon = skills.find(i => {
  return i.code === props.icon;
});
</script>

<style lang="scss" scoped></style>
