<template>
  <header class="bg-black flex h-20 items-center px-28 justify-between">
    <font-awesome-icon icon="fa-solid fa-leaf" class="text-6xl text-white" />
    <OrganismBurgerMenu />
  </header>
  <div class="flex-1 h-full flex">
    <div class="w-6/12 flex flex-col justify-center">
      <h1 class="text-center">Laurent-Philippe Caron</h1>
    </div>
    <div class="w-5/12 h-full">
      <img
        class="object-cover h-full w-full"
        src="~/assets/img/profil.png"
        alt=""
      />
    </div>
    <div class="w-1/12"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
