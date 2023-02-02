<template>
  <div class="flex flex-col md:flex-row">
    <div class="bleed bg-light md:h-fit md:flex md:justify-end">
      <div
        class="mx-auto md:pl-24 my-24 w-10/12 max-w-7xl md:flex md:flex-col items-end"
      >
        <p class="text-dark md:text-3xl md:w-6/12">
          Dévelopeur front-end porfessionel depuis 2020, spécialiser en Vue.js,
          SCSS. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Incidunt porro quis et debitis harum odit sunt ratione molestiae,
          doloribus distinctio, error velit nihil excepturi nesciunt, optio
          temporibus adipisci unde nam!
        </p>
        <AtomSimpleButton class="mt-5">Curiculun vitae</AtomSimpleButton>
      </div>
    </div>
    <div
      class="max-w-md md:w-6/12 md:max-w-none self-center md:self-start z-10 -mt-16 md:mt-10"
    >
      <img
        class="object-cover md:w-full md:max-w-md md:ml-auto"
        src="~/assets/img/profil.jpg"
        alt=""
      />
      <h1
        class="relative -mt-28 pr-4 text-right mx-auto md:mr-0 text-strike md:max-w-md"
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
