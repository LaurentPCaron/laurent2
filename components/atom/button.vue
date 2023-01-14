<template>
  <button>{{ label }}</button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Button',
    },
  },
};
</script>

<style lang="scss" scoped></style>
