<template>
  <p>allo {{ `${faIcon}, ${label}` }}</p>
  <ul class="my-grid w-full">
    <li class="aspect-square" v-for="{ label, icon, faIcon } in skills">
      <AtomSkill :label="label" :fa-icon="faIcon" :icon="icon" />
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  skills: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.my-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(4rem, 1fr));
  justify-items: center;
  align-items: center;
  gap: 2rem;
}
</style>
