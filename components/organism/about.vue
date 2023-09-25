<template>
  <div
    class="grid grid-rows-[10%_90%] gap-5 md:flex-row bg-[url('/img/about-bg.jpg')] bg-fixed"
  >
    <div class="mx-5 lg:mx-0 lg">
      <h2 class="self-start">Un peux à propos de moi</h2>
      <div id="aboutme" class="anchor" />
      <div class="bg-mains bg-opacity-30 h-fit py-10">
        <div class="lg:w-1/2 mx-auto self-start">
          <div class="mb-10 lg:flex items-center">
            <p class="ml-5 self-center">
              Je suis un programmeur front-end qui adore transformer les
              maquette qu’on me donne et en site web tout en ajoutant ma petite
              touche personnel. Je suis diplômé en technique informatique du
              CÉGEP de Granby. Par la suite, j’ai développé mon expérience en
              tant que développeur front-end à Radio-Canada et développeur de
              test E2E à Uni3T. Je suis présentement développeur web au Centre
              Francophone de l’Ontario où je développe différent site web
              éducatif pour les instituts éducatifs francophone de l’Ontario.
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
  </div>
</template>

<script setup lang="ts">
import { typeIcon } from 'types/IIcon';
const skills: Array<typeIcon> = [
  'html',
  'css',
  'sass',
  'bs',
  'js',
  'vue',
  'nuxt',
  'git',
  'vscode',
];
</script>
