<template>
  <label class="relative" :aria-label="`${name}-${id}`">
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
      class="cursor-pointer aspect-square w-full border-4 md:border-[12px] border-[rgba(0,0,0,0.33)] border-inset object-cover brightness-50"
    />
    <p
      class="hidden text-strike absolute bottom-14 md:left-3 text-3xl md:text-5xl font-bold"
      aria-hidden="true"
    >
      1P
    </p>
    <div
      class="cursor hidden absolute top-0 h-full justify-center items-center"
    >
      <svg class="flashing" viewBox="0 0 100 100" width="90%">
        <path
          d="M25,2 L2,2 L2,25"
          fill="none"
          stroke="white"
          stroke-width="3"
        />
        <path
          d="M2,75 L2,98 L25,98"
          fill="none"
          stroke="white"
          stroke-width="3"
        />
        <path
          d="M75,98 L98,98 L98,75"
          fill="none"
          stroke="white"
          stroke-width="3"
        />
        <path
          d="M98,25 L98,2 L75,2"
          fill="none"
          stroke="white"
          stroke-width="3"
        />
      </svg>
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
  @apply bg-mains;
  & ~ p {
    @apply block;
  }
  & ~ img {
    @apply brightness-100;
  }
  & ~ .cursor {
    @apply flex;
  }
}

.flashing {
  animation-name: flash;
  animation-duration: 300ms;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes flash {
  from {
    width: 90%;
  }
  to {
    width: 88%;
  }
}
</style>
