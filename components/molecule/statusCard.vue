<template>
  <div class="card bg-light h-40 -skew-x-12 rounded-xl flex px-10">
    <div class="relative w-1/4">
      <img
        class="absolute bottom-0"
        src="https://via.placeholder.com/200x400"
        alt=""
      />
    </div>
    <div class="w-2/4">
      <AtomProgressBar :progress="56" color="0, 0, 204" class="" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.card > * {
  @apply skew-x-12;
}
</style>
