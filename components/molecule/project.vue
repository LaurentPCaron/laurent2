<template>
  <div
    class="flex flex-col gap-10 md:grid area-container"
    :class="index % 2 === 0 ? 'even' : ''"
  >
    <h3 class="area-title">{{ info.title }}</h3>
    <div class="area-image relative overflow-hidden">
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

    <div class="area-links flex justify-center md:justify-start gap-4">
      <a
        :href="info.urlSite"
        v-if="info.urlSite"
        class="w-48 h-10 flex items-center justify-center gap-3 font-semibold py-1 button"
        >Voir en ligne <AtomIcons class="h-6" icon="eye" no-label
      /></a>
      <a
        v-if="info.urlCode"
        class="w-48 h-10 flex items-center justify-center gap-3 font-semibold py-1 button"
        >Lire le code <AtomIcons class="h-6" icon="git" no-label
      /></a>
    </div>

    <div class="area-description">
      <p v-for="des in info.description">
        {{ des }}
      </p>
    </div>

    <!--Icons -->
    <div class="area-icons">
      <p class="pb-5"><strong>Technologies utilisées</strong></p>
      <div class="flex flex-wrap justify-self-start gap-5 gap-y-10">
        <AtomIcons
          class="h-14 aspect-square w-1/5"
          :icon="icon"
          show-caption
          v-for="icon in info.icons"
        />
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

<style lang="scss" scoped>
.area {
  &-container {
    grid-template-columns: 50% auto;
    grid-template-areas:
      'title title'
      'image description'
      'image icons'
      'links icons';
    gap: 1rem;
    &.even {
      grid-template-areas:
        'title title'
        'description image'
        'icons image'
        'icons links';
    }
  }
  &-title {
    grid-area: title;
  }
  &-image {
    grid-area: image;
  }
  &-description {
    grid-area: description;
  }
  &-icons {
    grid-area: icons;
  }
  &-links {
    grid-area: links;
  }
}
</style>
