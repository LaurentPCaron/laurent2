<template>
  <div class="flex flex-col items-center">
    <i>
      <font-awesome-icon v-if="faIcon" class="icon text-5xl" :icon="faIcon" />
      <img
        v-if="icon"
        :src="`_nuxt/${icon}`"
        alt=""
        class="w-16 aspect-square"
      />
    </i>
    <p>{{ label }}</p>
  </div>
</template>

<script setup>
const { label, icon, faIcon } = defineProps({
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
  },
  faIcon: {
    type: String,
  },
});
</script>

<style lang="scss" scoped></style>
