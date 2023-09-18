<template>
  <header
    class="bg-mains bg-opacity-75 fixed h-14 w-full z-10 top-0 drop-shadow-xl px-8"
  >
    <nav class="h-full mx-auto flex items-center">
      <a href="">Laurent-Philippe Caron</a>
      <ul class="hidden md:flex justify-end gap-5 w-full">
        <li v-for="{ href, label } in mylinks" :key="href">
          <a :href="href">{{ label }}</a>
        </li>
      </ul>

      <div class="ml-auto">
        <OrganismBurgerMenu class="md:hidden md:mt-0 mr-5" :links="mylinks" />
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
const mylinks: { href: string; label: string }[] = [
  { href: '#top', label: 'Accueil' },
  { href: '#projects', label: 'Projets' },
  { href: '#aboutme', label: 'Un peux à propos de moi' },
  { href: '#contact', label: 'Me contacter' },
];
</script>

<style lang="scss" scoped>
header {
  box-shadow: 0 0px 15px 10px #000;
}
</style>
