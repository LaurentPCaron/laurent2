<template>
  <h2>Skills</h2>
  <div class="flex flex-wrap justify-around gap-y-10">
    <MoleculeStatusCard
      v-for="({ label, image, skils }, index) in data"
      class="md:w-5/12 h-fit box-border"
      :key="index"
      :label="label"
      :image="image"
      :skills="skils"
    />
  </div>
</template>

<script setup>
import data from '/assets/data/exp.json';
</script>

<style lang="scss" scoped></style>
