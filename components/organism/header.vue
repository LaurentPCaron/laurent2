<template>
  <header class="bg-mains sticky h-14 w-full z-10 top-0 drop-shadow-xl">
    <div class="w-10/12 h-full max-w-7xl mx-auto flex items-center">
      <ul class="hidden md:flex justify-center gap-5 w-full">
        <li><a href="#">lien 1</a></li>
        <li><a href="#">lien 2</a></li>
        <li><a href="#">lien 3</a></li>
        <li><a href="#">lien 4</a></li>
        <li><a href="#">lien 5</a></li>
      </ul>

      <div class="ml-auto">
        <OrganismBurgerMenu class="md:hidden md:mt-0 mr-5" />
      </div>
    </div>
  </header>
</template>
