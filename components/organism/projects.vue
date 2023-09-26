<template>
  <div>
    <h2 class="ml-5">Projets</h2>
    <div id="projects" class="anchor" />
    <div class="mx-auto w-11/12 lg:w-1/2 max-w-4xl">
      <MoleculeProject
        class="mb-16 last:mb-0"
        v-for="(data, index) in phData"
        :index="index + 1"
        :info="data"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ISkill } from 'types/ISkill';

const phData: ISkill[] = [
  {
    title: 'Une école équité et équitable',
    description: [
      "Une école équité et équitable est un site Conçu pour appuyer les professionnels en éducation de l'Ontario, le Continuum en matière d'équité et d'éducation inclusive vise à engager une réflexion et un dialogue sur les principes d'équité, d'inclusion et des droits de la personne.",
      ' Conçu et designer par le centre franco en 2023. J’ai été responsable de développer et modifier le site-web suivant les maquettes conçu par le web-designer.',
    ],
    icons: ['html', 'css', 'js', 'vue', 'nuxt', 'tw', 'sass'],
    urlSite: 'google.com',
    urlCode: 'github.com',
    imgUrl: 'img/site1.jpg',
  },
  {
    title: 'Science innovante',
    description: [
      'Cours en ligne sur différent sujet scientifique pour la 7ᵉ et 8ᵉ année de l’Ontario. Le cours est conçu pour simuler un road-trip autour de l’Ontario ou l’élève visite différentes villes et apprend sur différents sujets en utilisant différents médias audio-visuels.',
      'Mon rôle était de développer le site en suivant les maquettes conçu par le web-designer.',
    ],
    icons: ['html', 'css', 'js', 'sass'],
    urlSite: 'google.com',
    imgUrl: 'img/site2.jpg',
  },
  {
    title: 'Dictionnaire visuel de langage des signes',
    description: [
      'Cours en ligne sur différent sujet scientifique pour la 7ᵉ et 8ᵉ année de l’Ontario. Le cours est conçu pour simuler un road-trip autour de l’Ontario ou l’élève visite différentes villes et apprend sur différents sujets en utilisant différents médias audio-visuels. ',
      'Mon rôle était de développer le site en suivant les maquettes conçu par le web-designer.',
    ],
    icons: ['html', 'css', 'js', 'nuxt', 'sass'],
    urlSite: 'google.com',
    imgUrl: 'img/site2.jpg',
  },
  {
    title: 'Site Personnel',
    description: ['Site portfolio suivant le thème de jeu-vidéo. '],
    icons: ['html', 'css', 'js', 'vue', 'nuxt', 'tw', 'sass', 'aws'],
    urlSite: 'google.com',
    urlCode: 'github.com',
    imgUrl: 'img/site1.jpg',
  },
];
</script>

<style lang="scss" scoped></style>
