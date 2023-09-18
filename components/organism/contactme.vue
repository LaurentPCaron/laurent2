<template>
  <div>
    <h2>Me contacter</h2>
    <div id="contact" class="anchor" />
    <div class="my-16 mx-auto lg:w-1/2 text-center">
      <p class="text-6xl mb-5">Me dire allo</p>
      <a class="text-4xl underline-effect" href="mailto:info@lpcaron.ninja"
        >info@lpcaron.ninja</a
      >
    </div>
    <ul class="mx-auto text-5xl grid lg:grid-cols-3 items-center">
      <li class="hover-effect"><a href="">LinkedIn</a></li>
      <li class="hover-effect"><a href="">Github</a></li>
      <li class="hover-effect"><a href="">C.V.</a></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
li {
  @apply w-full h-32 border border-b-mains;

  a {
    @apply w-full h-full flex items-center justify-center;
  }
}
</style>
