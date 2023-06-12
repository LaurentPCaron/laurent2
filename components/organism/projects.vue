<template>
  <div>
    <h2 class="ml-5">Projets</h2>
    <div class="mx-auto w-11/12 lg:w-1/2 max-w-4xl">
      <MoleculeProject class="mb-16 last:mb-0" v-for="x in 3" :index="x" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
