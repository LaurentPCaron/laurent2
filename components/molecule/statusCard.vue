<template>
  <div class="relative">
    <div class="w-1/3">
      <img class="" src="https://via.placeholder.com/200x400" alt="" />
    </div>
    <div
      class="absolute bottom-0 card bg-light min-h-[10rem] -skew-x-12 rounded-xl flex px-10 -z-10"
    >
      <div class="ml-auto w-2/3">
        <AtomProgressBar :progress="56" color="#33cc33" class="" />
        <AtomProgressBar :progress="56" color="#33cc33" class="" />
        <AtomProgressBar :progress="56" color="#33cc33" class="" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.card > * {
  @apply skew-x-12;
}
</style>
