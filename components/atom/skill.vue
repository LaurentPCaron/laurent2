<template>
  <div class="grid grid-rows-[3.5rem_1rem] items-start gap-y-5">
    <i class="w-16 aspect-square flex flex-col justify-center">
      <font-awesome-icon v-if="faIcon" class="icon text-5xl" :icon="faIcon" />
      <img
        v-if="icon"
        class="w-full max-w-[64px]"
        :src="`_nuxt/${icon}`"
        alt=""
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
