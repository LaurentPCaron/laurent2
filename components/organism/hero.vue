<template>
  <div class="mt-16 flex flex-col gap-5">
    <h1 class="text-shadow text-light">Laurent-Philippe Caron</h1>
    <p class="text-6xl">Dévelopeur front-end</p>
    <p class="text-2xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis beatae
      officia voluptatibus, eius expedita delectus.
    </p>

    <AtomSimpleButton>Télécharger CV</AtomSimpleButton>

    <button class="text-5xl flex flex-col items-center w-full">
      <span>Scroll to start</span>
      <span class="text-8xl rotate-90 up-and-down">></span>
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
