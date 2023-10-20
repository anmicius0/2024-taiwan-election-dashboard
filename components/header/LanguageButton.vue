<template>
  <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
    <UButton color="white" icon="i-heroicons-globe-alt" />
    <template #item="{ item }">
      <NuxtLink :to="switchLocalePath(item.code)">{{ item.label }}</NuxtLink>
    </template>
  </UDropdown>
</template>

<script setup>
const { locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const items = [
  locales.value.map((lang) => {
    return {
      label: lang.name,
      code: lang.code,
    };
  }),
];
</script>
