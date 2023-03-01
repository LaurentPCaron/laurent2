<template>
  <label class="w-full" :aria-label="`${name}-${id}`">
    <input
      class="opacity-0 sr-only"
      type="radio"
      :name="name"
      :id="`${name}-${id}`"
      :value="id"
    />
    <div
      class="cursor-pointer aspect-1x1 border-4 md:border-[12px] border-[gray] border-inset"
    >
      <img
        src="https://free4kwallpapers.com/uploads/originals/2015/12/14/sonic-riders-1080p-game-wallpaper.jpg"
        alt=""
        class=""
      />
      <p
        class="hidden absolute -bottom-5 md:-bottom-10 text-3xl md:text-9xl font-bold"
        aria-hidden="false"
      >
        1P
      </p>
    </div>
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
  & + div {
    @apply brightness-50;
    & > p {
      @apply block;
    }
  }
}
</style>
