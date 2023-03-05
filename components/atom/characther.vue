<template>
  <label class="w-full relative" :aria-label="`${name}-${id}`">
    <input
      class="opacity-0 sr-only"
      type="radio"
      :name="name"
      :id="`${name}-${id}`"
      :value="id"
    />
    <img
      src="https://free4kwallpapers.com/uploads/originals/2015/12/14/sonic-riders-1080p-game-wallpaper.jpg"
      alt=""
      class="cursor-pointer aspect-square w-full border-4 md:border-[12px] border-[rgba(0,0,0,0.33)] border-inset object-cover"
    />
    <p
      class="hidden absolute -bottom-5 md:-bottom-10 text-3xl md:text-5xl font-bold"
      aria-hidden="true"
    >
      1P
    </p>
    <div class="cursor absolute top-0 w-full h-full"></div>
  </label>
</template>

<script setup>
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
[type='radio']:checked {
  @apply bg-mains;
  & ~ p {
    @apply block;
  }
}

.cursor {
  background-color: blue;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='black' stroke-width='10' stroke-dasharray='20%2c180' stroke-dashoffset='10' stroke-linecap='square'/%3e%3c/svg%3e");
}
</style>
