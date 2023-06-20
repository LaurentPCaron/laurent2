<template>
  <img v-if="getTypeOfIcon() === 'url'" :src="icon?.icon" alt="" />
  <font-awesome-icon v-else-if="getTypeOfIcon() === 'fa'" :icon="icon?.faIcon" />
  <p v-else>Erreur icon</p>
</template>

<script setup lang="ts">
import skills from "@/assets/data/skill.json";
import Iicon from "@/types/Iicon";
const props = defineProps<Iicon>();

const getTypeOfIcon = (): "url" | "fa" | null => {
  switch (props.icon) {
    case "sass":
    case "bs":
    case "git":
    case "html":
    case "css":
    case "js":
    case "vue":
      return "fa";
    case "nuxt":
    case "tw":
    case "vscode":
      return "url";

    default:
      return null;
  }
};

const icon = skills.find((i) => {
  return i.code === props.icon;
});
</script>

<style lang="scss" scoped></style>
