<template>
  <div class="grid grid-cols-4 gap-3 border-2 w-10/12 bg-boxbg">
    <AtomCharacther
      class="flex-[0_0_33%]"
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
