<template>
  <button
    class="w-full h-72 md:w-[calc(50%-1px)] lg:w-[calc((100%/3)-1px)] bg-mains"
    @click="openModal()"
  >
    <div class="h-3/4"></div>
    <div class="h-1/4 bg-dark flex items-center justify-center">
      <p>Title</p>
    </div>
  </button>

  <!--modal-->
  <dialog class="absolute w-1/2 h-72" ref="modal" @click.self="closeModal">
    <p>{{ props.content }}</p>
  </dialog>
</template>

<script lang="ts" setup>
const props = defineProps(['content']);

const modal = ref<HTMLDialogElement | null>(null);

const openModal = () => {
  modal.value?.showModal();
};

const closeModal = () => {
  modal.value?.close();
};
</script>

<style lang="scss" scoped></style>
