<template>
  <div class="sliding-container">
    <div class="sliding-bg absolute h-screen -top-14 left-0 -z-10"></div>
    <div class="flex flex-col justify-center h-screen relative">
      <p class="m-0">Hello! Je m'appelle</p>
      <h1 class="text-shadow text-light pt-5">Laurent-Philippe Caron</h1>
      <p class="text-4xl">Et je suis dévelopeur front-end</p>

      <AtomSimpleButton class="mt-16 mx-auto"
        ><span class="text-3xl">Télécharger CV</span></AtomSimpleButton
      >

      <button class="text-3xl flex flex-col items-center mx-auto">
        <span class="border w-72 py-1">Scroll to start</span>
        <span class="text-6xl rotate-90 up-and-down text-lighter">></span>
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
.border {
  background-color: rgba(78, 42, 51);
  box-shadow: 0px 0px 0px 2px #4e2a33, 0px 0px 0px 4px #fff,
    5px 5px 5px 5px #000;
  border-radius: 10px;
  border: solid rgba(142, 120, 104, 0.5) 1px;
}
</style>
