<template>
  <header
    class="bg-mains bg-opacity-75 fixed h-14 w-full z-10 top-0 drop-shadow-xl px-8"
  >
    <nav class="h-full mx-auto flex items-center">
      <a href="">Laurent-Philippe Caron</a>
      <ul class="hidden md:flex justify-end gap-5 w-full">
        <li><a href="#">lien 1</a></li>
        <li><a href="#">lien 2</a></li>
        <li><a href="#">lien 3</a></li>
        <li><a href="#">lien 4</a></li>
        <li><a href="#">lien 5</a></li>
      </ul>

      <div class="ml-auto">
        <OrganismBurgerMenu class="md:hidden md:mt-0 mr-5" />
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  box-shadow: 0 0px 15px 10px #000;
}
</style>
