<template>
  <div>
    <label :for="id">{{ label }}</label>
    <!--Basic input-->
    <input
      v-if="type === 'basic'"
      required
      type="text"
      :id="id"
      :name="id"
      value=""
      autocomplete="off"
    />
    <!--Email-->
    <input
      v-else-if="type === 'email'"
      required
      type="email"
      :id="id"
      :name="id"
      value=""
      autocomplete="off"
    />
    <!--Text area-->
    <textarea v-else-if="type === 'area'" required :id="id" rows="5"></textarea>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  type: 'basic' | 'area' | 'email';
  label: 'String';
  id: 'String';
}>();
</script>

<style lang="scss" scoped></style>
