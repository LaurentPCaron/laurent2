<template>
  <div class="grid md:grid-cols-2 -ml-14 w-screen bg-light">
    <div class="pb-32 pt-5 md:pt-28 px-16">
      <p class="text-dark md:text-3xl">
        Dévelopeur front-end porfessionel depuis 2020, spécialiser en Vue.js,
        SCSS. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
        porro quis et debitis harum odit sunt ratione molestiae, doloribus
        distinctio, error velit nihil excepturi nesciunt, optio temporibus
        adipisci unde nam!
      </p>
      <AtomSimpleButton class="mt-5">Curiculun vitae</AtomSimpleButton>
    </div>
    <div class="px-10 md:-order-1 bg-mains md:bg-opacity-0">
      <img
        class="object-cover relative -mt-20 md:mt-16 h-full mx-auto w-10/12 md:w-full max-w-[400px] md:max-w-2xl"
        src="~/assets/img/profil.jpg"
        alt=""
      />
      <h1
        class="relative -mt-28 pr-4 text-right md:text-left mx-auto text-strike w-10/12 md:w-[calc(100vw-2rem)] max-w-[400px] md:max-w-none"
      >
        Laurent-Philippe Caron
      </h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
