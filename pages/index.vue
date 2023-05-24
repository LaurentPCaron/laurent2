<template>
  <div class="contain relative">
    <OrganismHero class="w-11/12 lg:w-1/2 mx-auto" />
    <OrganismProjects />
    <OrganismAbout class="mx-5 lg:mx-0" />
    <OrganismContactme class="mx-5 lg:mx-0" />
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.contain {
  & > * {
    scroll-snap-align: start;
    @apply lg:h-screen;
  }
  & > *:not(:first-child) {
    @apply lg:pt-20;
  }
}
</style>
