<template>
  <div
    class="text-center font-serif font-bold md:my-10 md:px-5"
    style="text-wrap: balance"
  >
    <h1 id="title" class="my-5 text-3xl text-gray-900 md:text-4xl">
      {{ $t(`pages.${page}.title`) }}
    </h1>
    <p id="subtitle" class="m-5 text-sm text-gray-600 md:text-base">
      {{ $t(`pages.${page}.subtitle`) }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  page: {
    type: String,
    required: true,
  },
});
</script>
