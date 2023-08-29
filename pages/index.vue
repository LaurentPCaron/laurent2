<template>
  <div class="contain">
    <OrganismHero class="w-11/12 lg:w-1/2 mx-auto min-h-screen min-h-[100vh]" />
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
    @apply py-14;
  }
}
</style>
