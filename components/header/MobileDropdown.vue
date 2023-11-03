<template>
  <UDropdown :items="pages" :popper="{ placement: 'bottom-start' }">
    <UButton color="white" icon="i-heroicons-bars-3" />
    <template #item="{ item }">
      <NuxtLink :to="localePath(item.to)" :key="item.label">{{
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
