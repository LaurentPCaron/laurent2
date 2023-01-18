<template>
  <header class="flex h-20 items-center justify-end mr-20">
    <OrganismBurgerMenu class="md:hidden" />
  </header>
  <div class="flex h-[calc(100vh-5rem)]">
    <div class="w-6/12 flex flex-col justify-center">
      <h1 class="text-center">Laurent-Philippe Caron</h1>
      <h2 class="text-center">Dévelopeur front-end</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illo
        minus nam, doloribus dolor debitis quae saepe porro totam repudiandae
        consectetur enim praesentium? Odio eveniet tempore, aperiam repellendus
        cupiditate placeat!
      </p>
    </div>
    <div class="w-6/12 h-full">
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
