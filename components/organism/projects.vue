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
    description: 'Description 1',
    icons: ['bs', 'tw', 'html'],
    urlSite: 'google.com',
    urlCode: 'github.com',
  },
  {
    title: 'test2',
    description: 'Description 2',
    icons: ['js', 'sass', 'vscode'],
    urlSite: 'google.com',
  },
];
</script>

<style lang="scss" scoped></style>
