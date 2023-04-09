<template>
  <ul>
    <li>
      <a href="#" class=""
        ><font-awesome-icon class="icon" :icon="['fab', 'linkedin']" />
      </a>
    </li>
    <li>
      <a href="#" class=""
        ><font-awesome-icon class="icon" :icon="['fab', 'github']" />
      </a>
    </li>
    <li>
      <a class="icon" href="mailto:"
        ><font-awesome-icon :icon="['fas', 'envelope']"
      /></a>
    </li>
  </ul>
</template>

<script setup></script>

<style lang="scss" scoped>
.icon {
  @apply text-2xl flex justify-center items-center rounded-full border-2 w-fit aspect-square bg-light p-1.5 text-mains;
}
</style>
