<template>
  <div>
    <button @click="togglingMenu">
      <font-awesome-icon icon="fa-solid fa-bars" class="text-4xl text-white" />
    </button>
    <div
      class="absolute top-0 right-0 w-full h-screen transition-colors duration-700"
      :class="[{ 'bg-black/50': isOpen }, backgroundState]"
      @[isOpen&&`click`]="togglingMenu"
    ></div>
    <nav
      class="flex justify-center bg-dark fixed top-0 right-0 h-full w-3/4 transition-all duration-700"
      :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <ul class="text-right" :class="menuItemsState">
        <li class="mb-10">
          <button @click="togglingMenu">
            <font-awesome-icon icon="fa-solid fa-xmark" />
          </button>
        </li>
        <li><button>test</button></li>
        <li><button>test</button></li>
        <li><button>test</button></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      menuItemsState: 'hidden',
      backgroundState: '-z-10',
    };
  },
  watch: {
    isOpen(isOpen) {
      if (!isOpen) {
        setTimeout(() => {
          this.menuItemsState = 'hidden';
          this.backgroundState = '-z-10';
        }, 700);
      }
    },
  },
  methods: {
    togglingMenu() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.menuItemsState = 'block';
        this.backgroundState = 'z-0';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  @apply text-4xl;
}
</style>
