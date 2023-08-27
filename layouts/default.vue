<template>
  <div class="overflow-x-hidden">
    <!-- Header -->
    <OrganismHeader />

    <!--Side Menu-->
    <!-- <OrganismSideMenu
    class="fixed w-full hidden md:flex h-screen justify-end items-center"
  /> -->

    <!-- Contenue -->
    <div>
      <slot />
    </div>
  </div>
</template>
