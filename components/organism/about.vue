<template>
  <div class="flex flex-col md:block gap-5 md:flex-row py-2">
    <h2>Un peux à propos de moi</h2>
    <div class="lg:flex lg:w-1/2 mx-auto mb-10">
      <AtomCircleImage class="w-60 self-center mx-auto mb-10 lg:mb-0" />
      <p class="ml-5 self-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        necessitatibus earum amet laudantium velit enim hic iure. Inventore
        necessitatibus suscipit provident quis velit, itaque adipisci molestias
        aut hic ut non voluptate, modi cumque accusamus illum laboriosam
        voluptates cupiditate sed architecto distinctio laudantium culpa sint
        dolore. Aut facere ducimus qui est.
      </p>
    </div>
    <MoleculeSkills class="lg:!w-1/2 md:mx-auto" :skills="skills" />
  </div>
</template>

<script setup>
import skills from '@/assets/data/skill.json';
</script>
