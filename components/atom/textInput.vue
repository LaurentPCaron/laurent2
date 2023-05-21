<template>
  <div class="w-full">
    <label class="block text-2xl font-bold mb-5" :for="id">{{ label }}</label>
    <!--Basic input-->
    <input
      v-if="type === 'basic'"
      required
      type="text"
      :id="id"
      :name="id"
      value=""
      :placeholder="placeHolder"
      autocomplete="off"
    />
    <!--Email-->
    <input
      v-else-if="type === 'email'"
      required
      type="email"
      :id="id"
      :name="id"
      :placeholder="placeHolder"
      value=""
      autocomplete="off"
    />
    <!--Text area-->
    <textarea
      v-else-if="type === 'area'"
      required
      :id="id"
      rows="3"
      :placeholder="placeHolder"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  type: 'basic' | 'area' | 'email';
  label: 'String';
  id: 'String';
  placeHolder: 'String';
}>();
</script>

<style lang="scss" scoped>
input,
textarea {
  @apply bg-transparent border-b border-light text-lg w-full  pl-2 outline-none;
}
</style>
