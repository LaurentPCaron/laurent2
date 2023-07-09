<template>
  <div class="md:grid grid-cols-2 gap-5">
    <div class="relative overflow-hidden">
      <img class="object-contain w-full h-full" src="/img/gameboy.png" alt="" />
      <!--Ratio de l'image est 17:15 -->
      <div class="absolute top-0 w-full h-full grid place-items-center -z-10">
        <img
          class="aspect-[17/15] w-[54%] object-cover object-top"
          src="/img/site1.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="flex flex-col" :class="index % 2 === 0 ? '-order-1' : ''">
      <h3>Titre du projet</h3>
      <p>
        Description du projet Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Vitae laboriosam ab expedita maxime error tenetur quas
        modi qui?
      </p>
      <div class="flex">
        <AtomIcons class="w-14" icon="tw" v-for="x in 3" />
      </div>
      <div class="flex justify-around mt-16">
        <AtomSimpleButton class="w-5/12 h-10"
          >Voir en ligne<AtomIcons icon=""
        /></AtomSimpleButton>
        <AtomSimpleButton class="w-5/12 h-10">Lire le code</AtomSimpleButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ index: number }>();
</script>

<style lang="scss" scoped></style>
