<template>
  <div>
    <h2 class="ml-5">Projets</h2>
    <div class="flex flex-wrap gap-[1px] bg-lighter border border-lighter">
      <MoleculeProject v-for="x in 3" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
