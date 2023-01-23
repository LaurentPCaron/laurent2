<template>
  <div class="flex flex-col md:flex-row h-[calc(100vh-5rem)]">
    <div class="bg-neutral-900 md:w-6/12 flex flex-col px-5">
      <h1 class="mb-8">Laurent-Philippe Caron</h1>
      <p>
        Dévelopeur front-end porfessionel depuis 2020, spécialiser en Vue.js,
        SCSS.
      </p>
      <AtomSimpleButton class="my-5">Curiculun vitae</AtomSimpleButton>
    </div>
    <div class="md:w-6/12 h-80 md:h-full w-screen -ml-12">
      <img
        class="object-cover h-full w-full"
        src="~/assets/img/profil.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
