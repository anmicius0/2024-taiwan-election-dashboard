<template>
  <UDropdown :items="pages" :popper="{ placement: 'bottom-start' }">
    <UButton
      color="white"
      icon="i-heroicons-bars-3"
      aria-label="Menu dropdown"
    />
    <template #item="{ item }">
      <NuxtLink :to="item.to" :key="item.label">{{
        $t(`components.header.${item.label}`)
      }}</NuxtLink>
    </template>
  </UDropdown>
</template>

<script setup>
const localePath = useLocalePath();
const props = defineProps({
  pages: { type: Array, required: true },
});
</script>
