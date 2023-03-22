<template>
  <div
    class="pt-24 grid grid-rows-2 items-center justify-items-center font-retro"
  >
    <div class="border-4 text-light py-8 text-center w-10/12">
      <h1 class="text-shadow">Laurent-Philippe Caron</h1>
      <p class="self-end text-4xl mr-5">Dévelopeur front-end</p>
    </div>

    <div>
      <button class="text-5xl flex flex-col">
        <span>Scroll to start</span>
        <span class="text-8xl rotate-90 up-and-down">></span>
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
