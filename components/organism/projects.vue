<template>
  <div class="contain h-[calc(100vh-10%)]">
    <div
      class="contain__stats bg-dark skew-x-6 outline outline-4 -outline-offset-[10px] outline-lighter p-4"
    >
      <ul>
        <li>sonic</li>
        <li>sonic</li>
        <li>sonic</li>
        <li>sonic</li>
        <li>sonic</li>
        <li>sonic</li>
        <li>sonic</li>
        <li>sonic</li>
        <li>sonic</li>
        <li>sonic</li>
      </ul>
    </div>
    <div class="contain__demo bg-dark"></div>
    <MoleculeCharacterSelect class="contain__selector" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.contain {
  @apply grid;
  grid-template-areas:
    'stats demo'
    'selector selector';
  grid-template-columns: 3fr 2fr;
  grid-template-rows: 80% auto;
  &__stats {
    grid-area: stats;
  }
  &__demo {
    grid-area: demo;
  }
  &__selector {
    grid-area: selector;
  }
}
</style>
