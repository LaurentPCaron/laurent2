<template>
  <div
    class="grid grid-rows-[10%_90%] gap-5 md:flex-row bg-[url('img/about-bg.jpg')] bg-fixed"
  >
    <h2 class="self-start">Un peux à propos de moi</h2>
    <div id="aboutme" class="anchor" />
    <div class="bg-mains bg-opacity-30 h-fit py-10">
      <div class="lg:w-1/2 mx-auto self-start">
        <div class="mb-10 lg:flex items-center">
          <p class="ml-5 self-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, necessitatibus earum amet laudantium velit enim hic
            iure. Inventore necessitatibus suscipit provident quis velit, itaque
            adipisci molestias aut hic ut non voluptate, modi cumque accusamus
            illum laboriosam voluptates cupiditate sed architecto distinctio
            laudantium culpa sint dolore. Aut facere ducimus qui est.
          </p>
        </div>
        <h3>Mes skills</h3>
        <ul class="flex gap-16 mx-auto">
          <li v-for="s in skills" class="h-16">
            <AtomIcons class="h-full" :icon="s" show-caption />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { typeIcon } from 'types/IIcon';
const skills: Array<typeIcon> = ['html', 'css', 'js'];
</script>
