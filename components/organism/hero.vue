<template>
  <div class="flex flex-col justify-start gap-5">
    <h1 class="text-shadow text-light pt-5">Laurent-Philippe Caron</h1>
    <p class="text-6xl">Dévelopeur front-end</p>

    <AtomSimpleButton class="self-center"
      ><span class="text-lg">Télécharger CV</span></AtomSimpleButton
    >

    <button class="text-2xl flex flex-col items-center mt-auto">
      <span>Scroll to start</span>
      <span class="text-3xl rotate-90 up-and-down text-light">></span>
    </button>
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
