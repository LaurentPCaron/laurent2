<template>
  <div class="flex flex-col gap-5 md:flex-row items-center px-5 py-2">
    <h2>Un peux à propos de moi</h2>
    <AtomCircleImage class="w-60" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
      necessitatibus earum amet laudantium velit enim hic iure. Inventore
      necessitatibus suscipit provident quis velit, itaque adipisci molestias
      aut hic ut non voluptate, modi cumque accusamus illum laboriosam
      voluptates cupiditate sed architecto distinctio laudantium culpa sint
      dolore. Aut facere ducimus qui est.
    </p>
    <ul class="my-grid w-full">
      <li class="aspect-square" v-for="x in 10">
        <i
          ><font-awesome-icon class="icon text-5xl" :icon="['fab', 'github']" />
          <p>Git hub</p>
        </i>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.my-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(4rem, 1fr));
  justify-items: center;
  align-items: center;
  gap: 2rem;
}
</style>
