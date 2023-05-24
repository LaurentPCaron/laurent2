<template>
  <div
    class="overflow-y-scroll overflow-x-hidden h-screen lg:snap-y lg:snap-mandatory"
  >
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
