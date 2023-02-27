<template>
  <div class="flex flex-wrap justify-evenly gap-1">
    <AtomCharacther
      class="flex-[0_0_21%]"
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
