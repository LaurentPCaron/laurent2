<template>
  <div class="sliding-container">
    <div class="sliding-bg absolute h-[calc(100vh-3.75rem)] w-screen left-0 -z-10"></div>
    <div class="flex flex-col justify-center gap-5 h-[calc(100vh-3.75rem)]">
      <h1 class="text-shadow text-light pt-5">Laurent-Philippe Caron</h1>
      <p class="text-4xl">Dévelopeur front-end</p>

      <AtomSimpleButton class="mt-16"
        ><span class="text-lg">Télécharger CV</span></AtomSimpleButton
      >

      <button class="text-2xl flex flex-col items-center mt-20">
        <span>Scroll to start</span>
        <span class="text-3xl rotate-90 up-and-down text-light">></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.menu > li {
  @apply text-xl h-10 w-fit;
  &:hover,
  &:focus-within {
    @apply before:content-['>'] before:absolute before:-left-4   after:content-['<'] after:absolute after:ml-1.5 scale-150;
  }
}
</style>
