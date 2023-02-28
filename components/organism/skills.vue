<template>
  <MoleculeStatusCard
    v-for="({ label, image, skils }, index) in data"
    class="mb-10 last:mb-0 w-full"
    :key="index"
    :label="label"
    :image="image"
    :skills="skils"
  />
</template>

<script setup>
import data from '/assets/data/exp.json';
</script>

<style lang="scss" scoped></style>
