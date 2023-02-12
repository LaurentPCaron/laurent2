<template>
  <header class="flex h-20 w-full items-center justify-end">
    <OrganismBurgerMenu class="md:hidden md:mt-0 mr-5" />
  </header>
  <OrganismHomePart class="pt-6" />
  <OrganismProgressCircle :progress="progress" />
</template>

<style lang="scss" scoped></style>
