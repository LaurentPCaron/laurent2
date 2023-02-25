<template>
  <div class="pt-24 flex items-center flex-col font-retro">
    <div
      class="flex flex-col justify-center items-center text-light py-8 md:w-2/3 text-center"
    >
      <h1 class="text-shadow">Laurent-Philippe Caron</h1>
      <p class="self-end text-4xl mr-5">Dévelopeur front-end</p>
    </div>

    <div>
      <ul class="relative menu mt-10 flex flex-col items-center gap-5">
        <li class="">
          <a href="#">Game Start</a>
        </li>
        <li><a href="#">À propos de moi</a></li>
        <li><a href="#">Résumé</a></li>
      </ul>
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
