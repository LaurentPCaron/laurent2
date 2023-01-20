<template>
  <header
    class="flex h-20 w-full items-center justify-end fixed right-5 top-0 z-20"
  >
    <OrganismBurgerMenu class="md:hidden md:mt-0" />
  </header>
  <div class="flex flex-col md:flex-row h-[calc(100vh-5rem)]">
    <div class="md:w-6/12 h-56 md:h-full w-full fixed top-20">
      <img
        class="object-cover h-full w-full"
        src="~/assets/img/profil.png"
        alt=""
      />
    </div>
    <div
      class="bg-neutral-900 md:w-6/12 flex flex-col justify-center px-5 relative top-72"
    >
      <h1 class="text-center">Laurent-Philippe Caron</h1>
      <h2 class="text-center">Dévelopeur front-end</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illo
        minus nam, doloribus dolor debitis quae saepe porro totam repudiandae
        consectetur enim praesentium? Odio eveniet tempore, aperiam repellendus
        cupiditate placeat!
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
