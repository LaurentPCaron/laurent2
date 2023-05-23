<template>
  <button class="font-semibold w-72 py-1 button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  background-color: rgba(78, 42, 51);
  box-shadow: 0px 0px 0px 2px #4e2a33, 0px 0px 0px 4px #fff,
    5px 5px 5px 5px #000;
  border-radius: 10px;
  border: solid rgba(142, 120, 104, 0.5) 1px;

  transition: translate 0.1s, box-shadow 0.1s;

  &:hover,
  &:focus-within {
    translate: -0.1rem -0.1rem;
    box-shadow: 0px 0px 0px 2px #4e2a33, 0px 0px 0px 4px #fff,
      7px 7px 5px 5px #000;
  }
  &:active {
    translate: 0.15rem 0.15rem;
    box-shadow: 0px 0px 0px 2px #4e2a33, 0px 0px 0px 4px #fff,
      7px 7px 5px 0px #000;
  }
}
</style>
