<template>
  <div
    class="grid grid-cols-2 md:grid-cols-5 items-center gap-3 border-2 px-16 bg-boxbg"
  >
    <AtomCharacther
      class=""
      v-for="(n, index) in test"
      name="projects"
      :id="index"
      @change="$emit('onChange', index)"
    />
  </div>
</template>

<script setup>
const testfunct = index => {
  console.log(index);
};
const test = ref(['1', '1', '1', '1', '1', '1', '1']);
</script>

<style lang="scss" scoped></style>
