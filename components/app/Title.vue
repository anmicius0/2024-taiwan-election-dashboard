<template>
  <div
    class="font-sans text-center font-bold md:my-10 md:px-5"
    style="text-wrap: balance"
  >
    <h1 id="title" class="my-5 text-gray-900 md:text-3xl">
      {{ title }}
    </h1>
    <p id="subtitle" class="m-5 text-gray-600 md:text-base">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
  },
});
</script>
