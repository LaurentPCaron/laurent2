<template>
  <!-- <header class="flex h-20 w-full items-center justify-end">
    <OrganismBurgerMenu class="md:hidden md:mt-0 mr-5" />
  </header>
  <OrganismHomePart class="pt-6" /> -->
  <button @click="progress++">+</button>
  <p>{{ progress }}</p>
  <OrganismProgressCircle :progress="progress" />
</template>

<script setup>
import { ref } from 'vue';
const progress = ref(25);
</script>

<style lang="scss" scoped></style>
