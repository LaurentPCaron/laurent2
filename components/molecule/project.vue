<template>
  <div class="md:grid grid-cols-2 gap-5">
    <div class="relative overflow-hidden">
      <img
        class="object-contain w-full h-full"
        :src="'img/gameboy.png'"
        alt=""
      />
      <!--Ratio de l'image est 17:15 -->
      <div class="absolute top-0 w-full h-full grid place-items-center -z-10">
        <img
          class="aspect-[17/15] w-[54%] object-cover object-top"
          :src="info.imgUrl"
          alt=""
        />
      </div>
    </div>
    <div class="flex flex-col gap-3" :class="index % 2 === 0 ? '-order-1' : ''">
      <h3>{{ info.title }}</h3>
      <p>
        {{ info.description }}
      </p>
      <div class="flex gap-5">
        <AtomIcons
          class="h-14 aspect-square"
          :icon="icon"
          show-caption
          v-for="icon in info.icons"
        />
      </div>
      <div class="flex gap-4 mt-16">
        <AtomSimpleButton
          v-if="info.urlSite"
          class="w-5/12 h-10 flex items-center justify-center gap-3"
          >Voir en ligne <AtomIcons class="h-6" icon="eye" no-label
        /></AtomSimpleButton>
        <AtomSimpleButton
          v-if="info.urlCode"
          class="w-5/12 h-10 flex items-center justify-center gap-3"
          >Lire le code <AtomIcons class="h-6" icon="git" no-label
        /></AtomSimpleButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ISkill } from 'types/ISkill';

defineProps<{
  index: number;
  info: ISkill;
}>();
</script>

<style lang="scss" scoped></style>
