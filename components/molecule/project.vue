<template>
  <div class="md:grid grid-cols-2 gap-5">
    <div class="relative overflow-hidden">
      <img class="object-contain w-full h-full" src="/img/gameboy.png" alt="" />
      <!--Ration de l'imag est 17:15 -->
      <div class="absolute top-0 w-full h-full grid place-items-center -z-10">
        <img
          class="aspect-[17/15] w-64 object-cover"
          src="https://ceblog.s3.amazonaws.com/wp-content/uploads/2021/03/10114044/image2-8.png"
          alt=""
        />
      </div>
    </div>
    <div :class="index % 2 === 0 ? '-order-1' : ''">
      <h3>Titre du projet</h3>
      <p>
        Description du projet Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Vitae laboriosam ab expedita maxime error tenetur quas
        modi qui?
      </p>
      <div class="flex">
        <AtomSkill
          v-for="x in 3"
          class=""
          label="test"
          fa-icon="fa-brands fa-github"
        ></AtomSkill>
      </div>
      <div class="flex justify-around">
        <AtomSimpleButton class="!w-1/3">Voir en ligne</AtomSimpleButton>
        <AtomSimpleButton class="!w-1/3">Lire le code</AtomSimpleButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ index: number }>();
</script>

<style lang="scss" scoped></style>
