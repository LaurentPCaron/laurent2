<template>
  <!-- Header -->
  <OrganismHeader />

  <!--Side Menu-->
  <OrganismSideMenu
    class="fixed w-full max-w-[1850px] hidden md:flex h-screen justify-end items-center"
  />

  <!-- Contenue -->
  <div class="md:w-10/12 max-w-7xl h-[2000px] mx-auto relative">
    <slot />
  </div>
</template>
