<template>
  <div class="flex flex-col gap-5 md:flex-row py-2">
    <h2>Un peux à propos de moi</h2>
    <AtomCircleImage class="w-60 self-center" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
      necessitatibus earum amet laudantium velit enim hic iure. Inventore
      necessitatibus suscipit provident quis velit, itaque adipisci molestias
      aut hic ut non voluptate, modi cumque accusamus illum laboriosam
      voluptates cupiditate sed architecto distinctio laudantium culpa sint
      dolore. Aut facere ducimus qui est.
    </p>

    <MoleculeSkills :skills="skills" />
  </div>
</template>

<script setup>
import skills from '@/assets/data/skill.json';
</script>

<style lang="scss" scoped></style>
