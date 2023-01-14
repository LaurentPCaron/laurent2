<template>
  <button @click="togglingMenu">
    <font-awesome-icon icon="fa-solid fa-bars" class="text-4xl text-white" />
  </button>
  <div
    class="absolute top-0 left-0 w-full h-screen -z-10 transition-colors duration-700"
    :class="isOpen ? 'bg-black/30' : ''"
    @[isOpen&&`click`]="togglingMenu"
  ></div>
  <nav
    class="bg-black text-white fixed top-20 left-0 h-full w-1/4 transition-all duration-700"
    :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <ul class="ml-5" :class="menuItemsState">
      <li>
        <button @click="togglingMenu">
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </button>
      </li>
      <li><button>test</button></li>
      <li><button>test</button></li>
      <li><button>test</button></li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      menuItemsState: 'hidden',
    };
  },
  watch: {
    isOpen(isOpen) {
      if (!isOpen) {
        setTimeout(() => {
          this.menuItemsState = 'hidden';
        }, 700);
      }
    },
  },
  methods: {
    togglingMenu() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.menuItemsState = 'block';
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
