<template>
  <div>
    <h2 class="ml-5">Projets</h2>
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
    title: 'test1',
    description:
      'Pokem ipsum dolor sit amet Helix Fossil Heatran Bonsly Croagunk Porygon Onix. Sonic Boom Pinsir Hoenn Thundurus Teddiursa Houndoom Yellow. Anim id est laborum Venusaur Mystery Gift Cubchoo Zebstrika Volbeat ut enim ad minim veniam. Splash Darkrai Staravia Mamoswine Escape Rope Ursaring Gallade.  ',
    icons: ['bs', 'tw', 'html'],
    urlSite: 'google.com',
    urlCode: 'github.com',
    imgUrl: '/img/site1.jpg',
  },
  {
    title: 'test2',
    description:
      'Mineral Badge Raichu Sinnoh Rotom Finneon Aron Garchomp. Glitch City Lillipup Wurmple Torchic Rufflet Porygon2 Gliscor. Harden Pidgeot Darkrai Froslass Victreebel Joltik Kakuna. Fuchsia City Lumineon Frillish Spinda gotta catch ',
    icons: ['js', 'sass', 'vscode'],
    urlSite: 'google.com',
    imgUrl: '/img/site2.jpg',
  },
];
</script>

<style lang="scss" scoped></style>
