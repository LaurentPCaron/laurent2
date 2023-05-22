<template>
  <button
    class="bg-light hover:bg-lighter text-light hover:text-mains border-2 shadow-main border-lighter font-semibold w-fit px-12 py-3 button"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  box-shadow: 0 10px 1px #000;
}
</style>
