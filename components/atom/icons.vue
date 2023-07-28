<template>
  <img v-if="icon.icon" :src="icon?.icon" alt="" />
  <font-awesome-icon v-else-if="icon.faIcon" :icon="icon?.faIcon" />
  <p v-else>Erreur icon</p>
</template>

<script setup lang="ts">
import skills from "@/assets/data/skill.json";
import { typeIcon } from "@/types/IIcon";

export interface Props {
  icon: typeIcon;
}

const props = withDefaults(defineProps<Props>(), {});

const icon = skills.find((i) => {
  return i.code === props.icon;
});
</script>

<style lang="scss" scoped></style>
